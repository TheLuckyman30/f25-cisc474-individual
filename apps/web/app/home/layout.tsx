import NavBar from './components/navabr';

function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}

export default HomeLayout;
