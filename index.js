container = document.querySelector("ul");

/*TODO estos valores los calcularemos con cuantos swipes queremos precargar*/
const actual = container.children[2];

const options = {
  root: container,
  rootMargin: "-10%",
  threshold: [0, 1]
};
let left = true;
let right = true;

const callback = entries =>
  entries.forEach(entry => {
    const DIRECTION = entry.boundingClientRect.left > 0 ? "left" : "right";
    console.log(DIRECTION)
    const pageToRemove =
      DIRECTION == "left"
        ? 2
        : 0; 
    
    if (DIRECTION == "left") left = !left;
    if (DIRECTION == "right") right = !right;
    
    console.log("left->", left);
    console.log("right->", right);
  });

observer = new IntersectionObserver(callback, options);
observer.observe(actual);