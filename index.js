const container = document.querySelector("ul");

/*TODO estos valores los calcularemos con cuantos swipes queremos precargar*/
console.log(container.children[container.children.length - 1])
const actualR = container.children[container.children.length - 1];
const actualL = container.children[1];

const options = {
  root: container,
  rootMargin: "0%",
  threshold: [.5]
};

const ways = {
  left: true,
  right: true
};

const callback = entries =>
  entries.forEach(entry => {
    const DIRECTION = entry.boundingClientRect.left > 0 ? "left" : "right";
    const pageToRemove = DIRECTION == "left" ? 2 : 0;
    ways[DIRECTION] = !ways[DIRECTION];
    console.log(ways)
  });

observer = new IntersectionObserver(callback, options);
observer.observe(actualR);
observer.observe(actualL);
