import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

interface Article {
    id: number;
    title: string;
    content: string;
    details: string;
    author: string;
    date_posted: string;
    image: string;
}

type PageParams = {
    title: string;
};

interface PageProps {
    params: Promise<PageParams>;
    searchParams: Promise<{
        id?: string;
        title?: string;
        content?: string;
        details?: string;
        author?: string;
        date_posted?: string;
        image?: string;
    }>;
};

export const generateMetadata = async ({ params }: { params: Promise<PageParams> }): Promise<Metadata> => {
    const resolvedParams = await params;
    return {
        title: `Blog - ${resolvedParams.title}`,
    };
};

export const dynamic = 'force-dynamic';

// This is a server component
export default async function Page({ params, searchParams }: PageProps) {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;

    const article: Article = {
        id: Number(resolvedSearchParams.id) || 0,
        title: resolvedSearchParams.title || resolvedParams.title,
        content: resolvedSearchParams.content || '',
        details: resolvedSearchParams.details || '',
        author: resolvedSearchParams.author || '',
        date_posted: resolvedSearchParams.date_posted || '',
        image: resolvedSearchParams.image || '',
    };

    if (!article.title) return <p>Loading...</p>;

    return (
        <section className="pt-28 pb-10">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-xl xl:text-3xl font-bold mb-4">{article.title}</h1>
                <p className="text-sm text-gray-500 mb-4">
                    By {article.author} on {article.date_posted}
                </p>
                <Image src={article.image} alt={article.title} width={900} height={400} />
                <p className="text-justify py-4 xl:text-lg">{article.details}</p>
            </div>
        </section>
    );
}
