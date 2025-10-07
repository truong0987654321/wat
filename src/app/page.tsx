"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ProductSection from "./component/ui/ProductSection";
import OAsection from "./component/ui/OAsection";
import { InfoSection } from "./component/ui/InfoSection";

export default function Home() {
  const menuTop = [
    { name: "My voucher", icon: "🎟️" },
    { name: "Lịch sử mua hàng", icon: "🛒" },
    { name: "Chat", icon: "💬" },
    { name: "Quét QR", icon: "🔍" },
  ];

  const menuMain = [
    { name: "WAT", icon: "/menu/wat.jpg" },
    { name: "Thuốc trừ bệnh", icon: "/menu/disease.jpg" },
    { name: "Thuốc trừ sâu", icon: "/menu/pesticide.jpg" },
    { name: "Phân bón", icon: "/menu/fertilizer.jpg" },
    { name: "Voucher", icon: "/menu/voucher.jpg" },
    { name: "Góc nhìn nhà nông", icon: "/menu/farmer.jpg" },
    { name: "Đăng ký đại lý", icon: "/menu/agent.jpg" },
    { name: "Hỗ trợ nông dân", icon: "/menu/support.jpg" },
  ];
  const images = [
    "/banner/banner-1.jpg",
    "/banner/banner-2.jpg",
  ];
  const products_flash = [
    {
      id: 1,
      name: "Raptor F1 – Giải Pháp Vàng Cho Nông...",
      img: "/products/raptor-f1.jpg",
      discount: 20,
      oldPrice: 150000,
      newPrice: 120000,
      tag: "Raptor F1",
    },
    {
      id: 2,
      name: "Sạch Bệnh 24/7. Hết bệnh hết lo - Nhà...",
      img: "/products/raptor-f1.jpg",
      discount: 20.7,
      oldPrice: 290000,
      newPrice: 230000,
      tag: "Sạch bệnh 24/7",
    },
    {
      id: 3,
      name: "Sạch Bệnh 24/7. Hết bệnh hết lo - Nhà...",
      img: "/products/raptor-f1.jpg",
      discount: 20.7,
      oldPrice: 290000,
      newPrice: 230000,
      tag: "Sạch bệnh 24/7",
    },
    {
      id: 4,
      name: "Sạch Bệnh 24/7. Hết bệnh hết lo - Nhà...",
      img: "/products/raptor-f1.jpg",
      discount: 20.7,
      oldPrice: 290000,
      newPrice: 230000,
      tag: "Sạch bệnh 24/7",
    }
  ];
  const products_pesticides = [
    {
      id: 1,
      name: "Sạch Bệnh 24/7. Hết Bệnh hết lo - Nhà Nông sung Sướng",
      img: "/products/sach-benh.jpg",
      discount: 20.7,
      oldPrice: 290000,
      newPrice: 230000,
      tag: "Sạch Bệnh 24/7",
    },
    {
      id: 2,
      name: "Hexa WAT 110 -  Lá Chắn Hoàn Hảo Cho Cây Trái Miền Tây",
      img: "/products/sach-benh.jpg",
      discount: 16.7,
      oldPrice: 168000,
      newPrice: 140000,
      tag: "Hexa WAT 110",
    },
    {
      id: 3,
      name: "Hexa WAT 110 -  Lá Chắn Hoàn Hảo Cho Cây Trái Miền Tây",
      img: "/products/sach-benh.jpg",
      discount: 16.7,
      oldPrice: 168000,
      newPrice: 140000,
      tag: "Hexa WAT 110",
    },
    {
      id: 4,
      name: "Hexa WAT 110 -  Lá Chắn Hoàn Hảo Cho Cây Trái Miền Tây",
      img: "/products/sach-benh.jpg",
      discount: 16.7,
      oldPrice: 168000,
      newPrice: 140000,
      tag: "Hexa WAT 110",
    }
  ];
  const info_about_us = [
    {
      title: "Về chúng tôi",
      link: "#about",
      articles: [
        {
          title: "Về chúng tôi - WAT nông nghiệp miền Tây",
          image: "/info/about_us.jpg",
          category: "Về chúng tôi",
        },
      ],
    },
    {
      title: "Góc nhìn nhà nông",
      link: "#farmer-view",
      articles: [
        {
          title:
            "TAIHO - Giải pháp quản lý vàng lá, xoăn ngọn trên Cây họ Dưa và Bầu bí",
          image: "/info/taiho.jpg",
          category: "Góc nhìn nhà nông",
        },
        {
          title:
            "Bệnh Bã trầu (đốm lá mài ốc) trên Dưa hấu: Nguy Cơ Mất Mùa Dưa",
          image: "/info/taiho.jpg",
          category: "Góc nhìn nhà nông",
        },
        {
          title: "Thuận mùa chôm chôm vụ nghịch",
          image: "/info/taiho.jpg",
          category: "Góc nhìn nhà nông",
        },
        {
          title: "Mùa vụ và thời tiết miền Tây cập nhật liên tục",
          image: "/info/taiho.jpg",
          category: "Góc nhìn nhà nông",
        },
      ],
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 giây đổi ảnh
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="bg-green-700 text-white rounded-b-3xl pb-6">
          <div className="max-w-4xl mx-auto pt-6 px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-xl md:text-2xl">Khách</p>
                <p className="text-sm md:text-base opacity-90">⭐ Thành viên</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-lg md:text-xl font-semibold">0 điểm</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6 text-center bg-white text-green-700 rounded-xl shadow p-3 md:p-6">
              {menuTop.map((item, i) => (
                <div
                  key={i}
                  className="hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="text-2xl md:text-3xl">{item.icon}</div>
                  <p className="text-sm md:text-base mt-1">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Menu */}
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-4 md:grid-cols-8 gap-6 text-center px-4">
          {menuMain.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="bg-white p-3 md:p-4 rounded-full w-20">
                {item.icon.endsWith(".jpg") ? (
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="w-full object-cover"
                  />
                ) : (
                  <span className="text-2xl md:text-3xl">{item.icon}</span>
                )}
              </div>
              <p className="text-sm md:text-base mt-2">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="max-w-4xl mx-auto mt-10 px-4">
          <div className="relative w-full h-32 md:h-64 rounded-2xl overflow-hidden">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                  }`}
              >
                <Image
                  src={src}
                  alt={`Banner ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Optional: Dots indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
        <OAsection />
        <ProductSection label="Flash Sale" products={products_flash} />
        <ProductSection label="Thuốc Trừ Bệnh" products={products_pesticides} />

        <InfoSection sections={info_about_us} />
      </div>
    </div>
  );
}
