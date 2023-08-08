const DarkMode = () => {
  // console.log(window.localStorage.getItem("mode"));

  // let mode = window.localStorage.getItem("mode");

  // if (mode === "dark") {
  //   // console.log("true");
  //   // console.log(document.body.classList.contains("dark") ? true : false);
  // }

  let body = document.body.classList.contains("dark");
  let bmMenu = document.getElementsByClassName("bm-menu");
 

  if (!body) {
    console.log(bmMenu);
    document.body.classList.add("dark");
    bmMenu[0].classList.add("dark:bg-indigo-950");
  } else if (body) {
    document.body.classList.remove("dark");
  }
};

export default DarkMode;
