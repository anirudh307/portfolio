document.querySelector("#skills").addEventListener("click", function () {
  const progressBars = document.querySelectorAll("#skills .progress-bar");

  progressBars.forEach((bar) => {
    const skillLevel = bar.getAttribute("data-skill");
    bar.style.width = `${skillLevel}%`;
    bar.style.transition = "width 1s ease-in-out";
    bar.setAttribute("aria-valuenow", parseInt(skillLevel));
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const skillLevel = bar.getAttribute("data-skill");
        bar.style.width = `${skillLevel}%`;
        bar.style.transition = "width 1s ease-in-out";
        bar.setAttribute("aria-valuenow", parseInt(skillLevel));
        observer.unobserve(bar);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll("#skills .progress-bar").forEach((bar) => {
  observer.observe(bar);
});

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const sticky = navbar.offsetTop;
  let isScrolling = false;

  window.addEventListener("scroll", () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        console.log(window.scrollY, sticky); // Check scroll position and sticky offset
        if (window.scrollY > sticky) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
        isScrolling = false;
      });
    }
    isScrolling = true;
  });
});



document.querySelectorAll(".nav-links").forEach((link) => {
  link.addEventListener("mouseenter", (event) => {
    const soundSrc = event.target.getAttribute("data-sound");
    if (soundSrc) {
      const audio = new Audio(soundSrc);
      audio.play();
    }
  });
});

const audio = new Audio("mixkit-handgun-click-1660.mp3");
document.querySelectorAll(".play-sound").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    audio.play();
  });
});

const audioo = new Audio("mixkit-modern-click-box-check-1120.wav");
document.querySelectorAll(".hover-sound").forEach((span) => {
  span.addEventListener("mouseover", () => {
    audioo.play();
  });
});

document.querySelectorAll("[data-custom]").forEach((ls) => {
  ls.addEventListener("click", function () {
    const functionName = this.getAttribute("data-custom");
    const value = this.getAttribute("data-value");

    if (typeof window[functionName] === "function") {
      window[functionName](value);
    } else {
      console.warn(`Function ${functionName} does not exist.`);
    }
  });
});

const observer1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer1.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".section").forEach((section) => {
  observer1.observe(section);
});
