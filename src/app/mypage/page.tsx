'use client';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const MyPage = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/auth/login');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">마이페이지</h1>
      <div className="mb-4">안녕하세요, <b>{user.email}</b>님!</div>
      <button onClick={logout} className="bg-gray-200 px-4 py-2 rounded">로그아웃</button>
    </div>
  );
};

export default MyPage; 