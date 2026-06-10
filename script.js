console.log("Modern About Me Website Loaded");

document.addEventListener("mousemove", (e) => {

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.querySelector(".bg-animation").style.transform =
    `translate(${x * 20}px, ${y * 20}px)`;

});
