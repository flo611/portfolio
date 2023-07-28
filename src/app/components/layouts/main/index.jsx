const Main = ({ children }) => {
  return (
    <main className="bg-gradient-to-r from-cyan-400 to-cyan-800 text-white dark:bg-gradient-to-r dark:from-orange-800 dark:to-purple-950 dark:text-white dark:uppercase lg:text-2xl">
      {children}
    </main>
  );
};

export default Main;
