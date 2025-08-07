import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-10">
      <h1 className="text-4xl font-bold mb-6">CoolSymbol</h1>
      <h2 className="text-pink-500 underline text-xl">测试 Tailwind 样式</h2>
      <p className="text-lg">一个符号和字体样式复制工具的空壳站点。</p>
    </main>
  );
}