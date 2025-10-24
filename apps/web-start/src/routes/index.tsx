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
        <div className="text-2xl">
          Press the Login/Signup button in the top right to get started
        </div>
      </div>

      <button
        className="absolute p-1 top-0 right-0 m-5 border rounded-md hover:-translate-y-2 duration-200"
        onClick={() =>
          loginWithRedirect({
            authorizationParams: { scope: 'read:courses', prompt: 'consent' },
          })
        }
      >
        Login
      </button>
    </div>
  );
}
