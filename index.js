const container = document.querySelector("ul");

/*TODO estos valores los calcularemos con cuantos swipes queremos precargar*/
console.log(container.children[container.children.length - 1])
const actualR = container.children[container.children.length - 1];
const actualL = container.children[1];

const options = {
  root: container,
  rootMargin: "50%",
  threshold: [.5]
};

const ways = {};

const callback = entries =>entries.forEach(entry => ways[entry.target] = !ways[entry.target]);
observer = new IntersectionObserver(callback, options);
observer.observe(actualR);
observer.observe(actualL);
