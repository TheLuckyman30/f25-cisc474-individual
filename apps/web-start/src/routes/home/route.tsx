import { Outlet, createFileRoute } from '@tanstack/react-router';
import NavBar from './navbar';

export const Route = createFileRoute('/home')({
  component: HomeLayoutComponent,
});

function HomeLayoutComponent() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
