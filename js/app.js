window.addEventListener("scroll", (e) => {
  document.documentElement.style.setProperty(
    "--scrollTop",
    `${this.scrollY - 3000}px`
  ); // Update method
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
});
