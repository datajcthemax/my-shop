'use client';
import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const { login, loginWithGoogle } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await login(email, password);
    if (ok) {
      router.push('/mypage');
    } else {
      setError('이메일 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="p-8 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-6">로그인</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border rounded px-3 py-2"
          required
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">로그인</button>
      </form>
      <button
        type="button"
        onClick={async () => {
          const ok = await loginWithGoogle();
          if (ok) {
            router.push('/mypage');
          } else {
            setError('구글 로그인에 실패했습니다.');
          }
        }}
        className="bg-red-500 text-white py-2 rounded hover:bg-red-600 transition mt-2 w-full"
      >
        Google로 로그인
      </button>
    </div>
  );
};

export default LoginPage; 