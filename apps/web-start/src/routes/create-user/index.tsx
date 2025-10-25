import { useAuth0 } from '@auth0/auth0-react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { useApiMutation, useApiQuery } from '../../integrations/api';
import type { EditUser, UserOut } from '@repo/api/users';

export const Route = createFileRoute('/create-user/')({
  component: CreateUser,
});

function CreateUser() {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const currentUser = useApiQuery<UserOut>(['user', 'me'], '/users/me');
  const mutation = useApiMutation<EditUser, UserOut>({
    endpoint: () => ({ path: '/users', method: 'PUT' }),
  });
  const [newEmail, setNewEmail] = useState<string>(user?.email ?? '');
  const [newFirstName, setNewFirstName] = useState<string>('');
  const [newLastName, setNewLastName] = useState<string>('');

  if (mutation.isSuccess) {
    navigate({ to: '/home/dashboard' });
  }

  return (
    <div className="flex justify-center items-center h-lvh w-lvw">
      <div className="flex flex-col gap-2.5 bg-white h-1/2 w-1/3 shadow-lg rounded-lg p-5">
        <span className="font-bold text-2xl">Create Account</span>
        <form className="w-full" onSubmit={(event) => event.preventDefault()}>
          <div className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 font-medium text-sm text-gray-900"
              >
                First Name
              </label>
              <input
                value={newFirstName}
                className="block border border-gray-300 p-2.5 bg-gray-50 rounded-lg text-sm w-full focus:outline-blue-400"
                type="text"
                placeholder="First Name"
                id="first_name"
                onChange={(e) => setNewFirstName(e.target.value)}
              ></input>
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 font-medium text-sm text-gray-900"
              >
                Last Name
              </label>
              <input
                value={newLastName}
                className="block border border-gray-300 p-2.5 bg-gray-50 rounded-lg text-sm w-full focus:outline-blue-400"
                type="text"
                placeholder="Last Name"
                id="last_name"
                onChange={(e) => setNewLastName(e.target.value)}
              ></input>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-sm text-gray-900"
              >
                Email
              </label>
              <input
                value={newEmail}
                className="block border border-gray-300 p-2.5 bg-gray-50 rounded-lg text-sm w-full focus:outline-blue-400"
                type="text"
                placeholder="Email"
                id="email"
                onChange={(e) => setNewEmail(e.target.value)}
              ></input>
            </div>
            <div className="flex gap-2.5 items-center">
              <button
                className="bg-blue-400 w-fit text-white font-medium p-2.5 rounded-lg hover:scale-102 duration-75 cursor-pointer"
                onClick={() => {
                  mutation.mutate({
                    id: currentUser.data?.id ?? '',
                    firstName: newFirstName,
                    lastName: newLastName,
                    email: newEmail,
                  });
                }}
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
