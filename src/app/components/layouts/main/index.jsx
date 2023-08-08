const Main = ({ children }) => {
  return (
    <main className="overflow-x-hidden bg-gradient-to-r from-cyan-400 to-cyan-950 text-white dark:bg-gradient-to-r dark:from-cyan-600 dark:to-purple-950 dark:text-white lg:text-2xl">
      {children}
    </main>
  );
};

export default Main;
