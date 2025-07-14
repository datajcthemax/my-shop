'use client';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const pathname = usePathname();
  return (
    <nav className="bg-white border-b shadow-sm mb-8 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-extrabold text-2xl text-pink-500 tracking-tight hover:scale-105 transition-transform">봉봉이네</Link>
          <Link href="/products" className={`px-3 py-1 rounded-md text-base font-medium transition-colors ${pathname.startsWith('/products') ? 'bg-pink-100 text-pink-600' : 'text-gray-700 hover:bg-pink-50 hover:text-pink-500'}`}>상품</Link>
          <Link href="/cart" className={`px-3 py-1 rounded-md text-base font-medium transition-colors ${pathname === '/cart' ? 'bg-pink-100 text-pink-600' : 'text-gray-700 hover:bg-pink-50 hover:text-pink-500'}`}>
            장바구니
            {cart.length > 0 && (
              <span className="ml-1 text-xs bg-pink-500 text-white rounded-full px-2 py-0.5 font-bold align-top">{cart.length}</span>
            )}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link href="/mypage" className={`px-3 py-1 rounded-md text-base font-medium transition-colors ${pathname === '/mypage' ? 'bg-pink-100 text-pink-600' : 'text-gray-700 hover:bg-pink-50 hover:text-pink-500'}`}>마이페이지</Link>
              <button onClick={logout} className="px-3 py-1 rounded-md text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-pink-500 transition-colors">로그아웃</button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className={`px-3 py-1 rounded-md text-base font-medium transition-colors ${pathname === '/auth/login' ? 'bg-pink-100 text-pink-600' : 'text-gray-700 hover:bg-pink-50 hover:text-pink-500'}`}>로그인</Link>
              <Link href="/auth/register" className={`px-3 py-1 rounded-md text-base font-medium transition-colors ${pathname === '/auth/register' ? 'bg-pink-100 text-pink-600' : 'text-gray-700 hover:bg-pink-50 hover:text-pink-500'}`}>회원가입</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
} 