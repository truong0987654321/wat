import Image from 'next/image'
import React from 'react'

export default function OAsection() {
    return (
        <div className="max-w-4xl mx-auto px-4 mt-10 space-y-6">
            {/* OA section */}
            <div className="bg-green-100 border border-green-400 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center space-x-3">
                    <Image
                        src="/logo.jpg"
                        alt="WAT OA"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <div>
                        <p className="text-sm text-gray-700">
                            Quan tâm OA để nhận thông báo từ WAT nông nghiệp miền Tây
                        </p>
                        <p className="font-semibold text-green-800 mt-1">
                            WAT nông nghiệp miền Tây
                        </p>
                    </div>
                </div>
                <button className="bg-green-600 text-white rounded-full px-5 py-2 mt-3 md:mt-0 hover:bg-green-700 transition">
                    Quan tâm
                </button>
            </div></div>
    )
}
