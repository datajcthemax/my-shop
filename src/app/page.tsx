import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="mb-6">
        <Image
          src="/images/bonbon.png"
          alt="봉봉이네 마스코트"
          width={160}
          height={160}
          className="rounded-full shadow-lg border-4 border-pink-100 bg-white"
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-pink-500 mb-4 text-center drop-shadow">봉봉이네에 오신 걸 환영해요!</h1>
      <p className="text-lg text-gray-700 text-center max-w-xl mb-2">
        봉봉이네는 귀엽고 실용적인 아이템을 모아둔 작은 온라인 스토어입니다.<br/>
        일상에 소소한 행복을 더해줄 다양한 상품을 만나보세요 😊
      </p>
      <p className="text-sm text-gray-400 text-center">지금 <b>상품</b> 메뉴에서 인기 상품을 확인해보세요!</p>
    </main>
  );
}
