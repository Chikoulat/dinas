import Link from "next/link";

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="lg:text-xl text-gray-600 mt-4">Oops! The page you&#39;re looking for doesn&#39;t exist.</p>
            <Link href="/home" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                Go Back Home
            </Link>
        </div>
    );
}
