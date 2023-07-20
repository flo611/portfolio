const DarkMode = () => {
    // console.log(window.localStorage.getItem("mode"));
  
    // let mode = window.localStorage.getItem("mode");
  
    // if (mode === "dark") {
    //   // console.log("true");
    //   // console.log(document.body.classList.contains("dark") ? true : false);
    // }
  
    let body = document.body.classList.contains("dark");
    
    
  
    if (!body) {
      document.body.classList.add("dark");
    } else if (body) {
      document.body.classList.remove("dark");
     
    }
  };
  
  export default DarkMode;
  