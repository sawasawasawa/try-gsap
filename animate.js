import gsap, { TimelineMax } from "gsap";

import { TextPlugin, ScrollTrigger } from "gsap/all";
import { onMount } from "svelte";
// Webpack treeshaking fix
const plugins = [TextPlugin, ScrollTrigger];

gsap.registerPlugin(TextPlugin, ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause",
});

const text = [
  "Three Rings for the Elven-kings under the sky,",
  "Seven for the Dwarf-lords in their halls of stone,",
  "Nine for Mortal Men, doomed to die,",
  "One for the Dark Lord on his dark throne",
  "In the Land of Mordor where the Shadows lie.",
  "One Ring to rule them all, One Ring to find them,",
  "One Ring to bring them all and in the darkness bind them.",
  "In the Land of Mordor where the Shadows lie.",
];

const getLine = (number) => document.getElementById(`line-${number + 1}`);

const vh = window.innerHeight;
const screenHeight = 2 * vh;
const tl = new TimelineMax();
const height = `${(text.length + 1) * screenHeight}px`;

document.getElementById("body").style.height = height;

text.forEach((text, i) => {
  const line = document.createElement("h1");
  document.getElementById("frame").appendChild(line);
  line.setAttribute("id", `line-${i + 1}`);
});
console.log("_______ vh", vh);

const blue = "rgba(0, 0, 255, 0.2)";
const green = "color: rgba(0, 128, 0, 0.2);";

tl.to("#line-1", {
  duration: 0,
  top: 70,
  color: "yellow",
  scale: 10,
  transformOrigin: "top left",
  opacity: 0,
  text: { value: "Three Rings" },
})
  .to("#line-1", {
    scrollTrigger: {
      trigger: "body",
      start: `top 0px`,
      end: `${(1 / 20) * screenHeight}px`,
      scrub: true,
    },
    opacity: 1,
  })
  .to("#line-1", {
    scrollTrigger: {
      trigger: "body",
      start: `${(1 / 4) * screenHeight}px`,
      end: `${(1 / 2) * screenHeight}px`,
      scrub: true,
    },
    color: "inherit",
    scale: 1,
  })
  .to("#line-1", {
    scrollTrigger: {
      trigger: "body",
      start: `${(1 / 2) * screenHeight}px`,
      end: `${1 * screenHeight}px`,
      scrub: true,
    },
    text: text[0],
  })
  .to("#line-2", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: `${1 * screenHeight}px`,
      end: `${1.001 * screenHeight}px`,
    },
    text: { value: "Seven", delimiter: " " },
    color: "yellow",
    scale: 20,
    transformOrigin: "top left",
  })
  .to("#line-2", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: `${1.2 * screenHeight}px`,
      end: `${1.59 * screenHeight}px`,
    },
    color: "inherit",
    scale: 1,
  })
  .to("#line-2", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: `${1.6 * screenHeight}px`,
      end: `${2 * screenHeight}px`,
    },
    text: { value: text[1] },
  })

  .to("#line-3", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: `${2 * screenHeight}px`,
      end: `${2.001 * screenHeight}px`,
    },
    text: { value: "Nine", delimiter: " " },
    color: "yellow",
    scale: 20,
    transformOrigin: "top left",
  })
  .to("#line-3", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: `${2.2 * screenHeight}px`,
      end: `${2.4 * screenHeight}px`,
    },
    color: "inherit",
    scale: 1,
  })
  .to("#line-3", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: `${2.4 * screenHeight}px`,
      end: `${3 * screenHeight}px`,
    },
    text: { value: text[2] },
  })

  .to("#line-4", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: `${3 * screenHeight}px`,
      end: `${3.001 * screenHeight}px`,
    },
    text: { value: "ONE", delimiter: " " },
    color: "red",
    fontWeight: "bold",
    scale: 30,
    transformOrigin: "top left",
    transform: "translateY(-400px)",
  })
  .to("#line-4", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: `${3.2 * screenHeight}px`,
      end: `${3.4 * screenHeight}px`,
    },
    color: "inherit",
    scale: 1,
    transform: "translateY(0px)",
  })
  .to("#line-4", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: `${3.5 * screenHeight}px`,
      end: `${4 * screenHeight}px`,
    },
    text: { value: text[3] },
  })
  .to("#line-5", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: `${4 * screenHeight}px`,
      end: `${5 * screenHeight}px`,
    },
    text: { value: text[4] },
  })
  .to("#line-6", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: `${5 * screenHeight}px`,
      end: `${6 * screenHeight}px`,
    },
    text: { value: text[5] },
  })
  .to("#line-7", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: `${6 * screenHeight}px`,
      end: `${7 * screenHeight}px`,
    },
    text: { value: text[6] },
  })
  .to("#line-8", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: `${7 * screenHeight}px`,
      end: `${8 * screenHeight}px`,
    },
    text: { value: text[7] },
  })
  .to("#body", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: `${7.5 * screenHeight}px`,
      duration: 1,
    },
    scale: 200,
  })
  // BACKGROUND
  .to("#body", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: `${2.1 * screenHeight}px`,
      end: `${8 * screenHeight}px`,
    },
    backgroundColor: "#111111",
    color: "red",
  });
