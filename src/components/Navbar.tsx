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
    <nav className="bg-white border-b mb-8 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl text-blue-600">MyShop</Link>
          <Link href="/products" className={pathname.startsWith('/products') ? 'font-semibold text-blue-600' : ''}>상품</Link>
          <Link href="/cart" className={pathname === '/cart' ? 'font-semibold text-blue-600' : ''}>
            장바구니
            {cart.length > 0 && (
              <span className="ml-1 text-xs bg-blue-600 text-white rounded-full px-2 py-0.5">{cart.length}</span>
            )}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link href="/mypage" className={pathname === '/mypage' ? 'font-semibold text-blue-600' : ''}>마이페이지</Link>
              <button onClick={logout} className="text-gray-600 hover:underline">로그아웃</button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className={pathname === '/auth/login' ? 'font-semibold text-blue-600' : ''}>로그인</Link>
              <Link href="/auth/register" className={pathname === '/auth/register' ? 'font-semibold text-blue-600' : ''}>회원가입</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
} 