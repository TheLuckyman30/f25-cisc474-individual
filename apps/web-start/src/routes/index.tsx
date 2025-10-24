import { useAuth0 } from '@auth0/auth0-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="h-full w-full flex flex-wrap flex-col justify-center items-center">
      <div className="flex flex-col gap-10 items-center">
        <div className="font-bold text-2xl md:text-7xl">
          Welcome to my custom LMS
        </div>
        <button
          onClick={() =>
            loginWithRedirect({
              authorizationParams: { scope: 'read:courses', prompt: 'consent' },
            })
          }
          className="text-3xl bg-blue-400 p-5 text-white rounded-md shadow-md font-bold cursor-pointer hover:scale-102 duration-75"
        >
          Login | Signup
        </button>
      </div>
    </div>
  );
}
