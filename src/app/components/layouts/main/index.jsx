const Main = ({ children }) => {
  return (
    <main className="bg-gradient-to-r from-cyan-400 to-cyan-700 text-white dark:bg-gradient-to-r dark:from-cyan-600 dark:to-purple-950 dark:text-white dark:uppercase lg:text-2xl">
      {children}
    </main>
  );
};

export default Main;
