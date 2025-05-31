"use client";
import { cn } from "@/lib/utils";

interface CardDemoProps {
  title: string;
  content: string;
  author:string;
  date_posted:string;
  image:string;
}

export default function CardDemo(post: Readonly<CardDemoProps>) {
  const {title, content, author, date_posted, image} = post
  return (
    <div className="max-w-xs w-full group/card">
      <div
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
                {author}
            </p>
            <p className="text-sm text-gray-50">{date_posted}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
