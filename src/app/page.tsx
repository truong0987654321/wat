import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl text-center">
        <Image
          src="/logo.jpg"
          alt="Company Logo"
          width={96}
          height={96}
          className="mx-auto mb-6 w-24 h-24 object-contain"
        />

        <h1 className="text-4xl font-bold mb-3">Chào mừng bạn đến với WAT</h1>
        <p className="text-lg text-gray-600 mb-8">
          Chúng tôi cung cấp các giải pháp nông nghiệp thông minh để giúp nông dân phát triển và phát triển.
        </p>

        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Liên Hệ Chúng Tui
        </a>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} WAT. Đã đăng ký Bản quyền.
      </footer>
    </main>
  );
}
