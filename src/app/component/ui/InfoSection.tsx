import Image from "next/image"
import React from "react"

interface Article {
    title: string;
    image: string;
    category: string;
}

interface Section {
    title: string;
    link: string;
    articles: Article[];
}

export function InfoSection({ sections }: { sections: Section[] }) {
    return (
        <div className="max-w-4xl mx-auto px-4 mt-10 space-y-6">
            {sections.map((section, index) => (
                <div key={index} className="mb-10">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg md:text-2xl font-semibold text-gray-900">
                            {section.title}
                        </h2>
                        <a
                            href={section.link}
                            className="text-green-700 text-sm md:text-base hover:underline"
                        >
                            Xem tất cả
                        </a>
                    </div>

                    {/* Articles */}
                    <div className="bg-white md:bg-gray-50 space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">

                        {section.articles.slice(0, 3).map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 hover:shadow-md transition-all duration-200 overflow-hidden md:flex-col md:items-start"
                            >
                                <div className="relative w-24 h-24 md:w-full md:h-40 flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 p-2 md:p-3">
                                    <p className="text-green-700 text-xs font-semibold">
                                        {item.category}
                                    </p>
                                    <h3 className="text-sm md:text-base font-medium text-gray-900 line-clamp-2">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
