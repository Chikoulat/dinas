'use client'

import {useGetBlogs} from '@/service/GetBlog';
import Link from "next/link";
import CardDemo from "@/components/ui/cards-demo-2";

interface Posts {
    id: number;
    title: string;
    content: string;
    details: string;
    author: string;
    date_posted: string;
    image: string;
}

function Page() {
    const {data: blogs, isLoading, isError} = useGetBlogs();
    return (
        <section className="pt-28 pb-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error: {isError}</p>}
                {
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {blogs?.map((post: Posts) => (
                            <Link
                                key={post.id}
                                href={{
                                    pathname: `/blog/${post.title}`,
                                    query: {
                                        id: post.id,
                                        title: post.title,
                                        content: post.content,
                                        details: post.details,
                                        author: post.author,
                                        date_posted: post.date_posted,
                                        image: post.image
                                    }
                                }}
                            >
                                <CardDemo {...post} />
                            </Link>
                        ))}
                    </div>
                }
            </div>
        </section>
    );
}

export default Page;
