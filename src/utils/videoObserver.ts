const options = {
  root: null,
  threshold: [0.2, 0.4, 0.6, 0.8, 1],
  rootMargin: "-30% 0% -30% 0%",
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.4) {
      (entry.target as HTMLVideoElement).play();
    } else {
      (entry.target as HTMLVideoElement).pause();
    }
  });
}, options);

export default observer;
