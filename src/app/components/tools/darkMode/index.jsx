const DarkMode = () => {
  // console.log(window.localStorage.getItem("mode"));

  // let mode = window.localStorage.getItem("mode");

  // if (mode === "dark") {
  //   // console.log("true");
  //   // console.log(document.body.classList.contains("dark") ? true : false);
  // }

  let body = document.body.classList.contains("dark");
  let bmMenu = document.getElementsByClassName("bm-menu");
  let bmBars = document.querySelectorAll("span.bm-burger-bars");
  let bmCross = document.querySelectorAll("span.bm-cross");

  if (!body) {
    document.body.classList.add("dark");
    bmMenu[0].classList.add("dark:bg-indigo-950");
    bmBars.forEach((bar) => {
      console.log(bar);
      bar.classList.add("dark:bg-slate-100");
    });
    bmCross.forEach((cross) => {
      cross.classList.add("dark:bg-slate-100");
    });
  } else if (body) {
    document.body.classList.remove("dark");
  }
};

export default DarkMode;
