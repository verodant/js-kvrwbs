container = document.querySelector("ul");

/*TODO estos valores los calcularemos con cuantos swipes queremos precargar*/
const actual = container.children[2];

const options = {
  root: container,
  rootMargin: "-10%",
  threshold: [0, 1]
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
  });

observer = new IntersectionObserver(callback, options);
observer.observe(actual);
