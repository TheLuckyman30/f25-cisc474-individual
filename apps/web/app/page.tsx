import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-full w-full flex flex-wrap flex-col justify-center items-center">
      <div className="flex flex-col gap-10 items-center">
        <div className="font-bold text-2xl md:text-7xl">Welcome to my LMS</div>
        <div className="text-2xl">
          Press the Login/Signup button in the top right to get started
        </div>
      </div>

      <Link
        href="/home/dashboard"
        className="absolute p-1 top-0 right-0 m-5 border rounded-md hover:-translate-y-2 duration-200"
      >
        Login | Signup
      </Link>
    </div>
  );
}
