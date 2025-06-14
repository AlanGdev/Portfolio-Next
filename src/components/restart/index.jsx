'use client';
import { useRouter } from 'next/navigation';

export function Restart() {
  const router = useRouter();
  return (
    <div
      className="btn btn-ghost text-xl"
      onClick={() => {
        sessionStorage.removeItem('started');
        setTimeout(() => (window.location.href = '/'), 100);
      }}
    >
      Restart
    </div>
  );
}
