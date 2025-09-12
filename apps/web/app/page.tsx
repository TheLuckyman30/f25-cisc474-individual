import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-full w-full flex flex-wrap flex-col justify-center items-center">
      <div className="font-bold text-2xl md:text-7xl">
        Welcome to [NAME] LMS
      </div>
      <Link href="/home/dashboard" className="absolute top-0 right-0 m-5">
        Login | Signup
      </Link>
    </div>
  );
}
