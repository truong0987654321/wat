import Image from "next/image";

interface Product {
    id: number;
    name: string;
    img: string;
    discount: number;
    oldPrice: number;
    newPrice: number;
    tag: string;
}

interface ProductSectionProps {
    products: Product[];
    label?: string;
}


export default function ProductSection({ products, label }: ProductSectionProps) {

    return (
        <div className="max-w-4xl mx-auto px-4 mt-10 space-y-6">
            {/* Flash Sale */}
            <div>
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-semibold">{label}</h2>
                    <a href="#" className="text-green-600 hover:underline text-sm">
                        Xem tất cả
                    </a>
                </div>

                {/* mobile: scroll x | pc: grid */}
                <div className="md:grid md:grid-cols-4 md:gap-4 flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
                    {products.slice(0, 4).map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex-shrink-0 w-48 md:w-auto"
                        >
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                                <span className="absolute top-2 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-r-lg">
                                    -{item.discount}%
                                </span>
                                <p className="absolute right-0 -bottom-1.5 text-xs text-green-700 font-semibold bg-white p-1 rounded-l-lg shadow-lg">{item.tag}</p>

                            </div>

                            <div className="p-3 space-y-1">
                                <h3 className="text-sm line-clamp-2">{item.name}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-400 text-xs line-through">
                                        {item.oldPrice.toLocaleString("vi-VN")}đ
                                    </span>
                                    <span className="text-red-600 font-bold">
                                        {item.newPrice.toLocaleString("vi-VN")}đ
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">/1 chai</span>
                                    <button className="text-green-600 hover:text-green-700">🛒</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
