const root = document.getElementById('root');

const randomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const createElement = (father, className) => {
  const baseElement = document.createElement('div');
  baseElement.classList.add(className);
  father.appendChild(baseElement);
  return baseElement;
}

const createBase = (print=false, generateRandomColor=false) => {
  const base =  createElement(root, 'base');
  if (print) {
    setInterval(() => createWay(base, generateRandomColor), 10);
  }
  return base
}

const createRope = (father, child, reverse=false, ropeLength=100, ropeSpeed=1) => {
  const rope = createElement(father, 'rope');
  
  if (child) {
    rope.appendChild(child);
  }
  
  if (reverse) {
    rope.classList.add('reverse');
  }
  
  rope.style.height = `${ropeLength}px`;
  rope.style.animationDuration = `${((ropeLength / 100) + 1) / ropeSpeed}s`;
  
  return rope;
}

const createWay = (base, generateRandomColor=false) => {
  const way = createElement(root, 'way');
  const rect = base.getBoundingClientRect();
  way.style.top = `${rect.top + 10}px`;
  way.style.left = `${rect.left + 10}px`;
  if (generateRandomColor) {
    way.style.backgroundColor = randomColor();
  }
}

const base1 = createBase();
const base2 = createBase();
const base3 = createBase();
const base4 = createBase();
const base5 = createBase(true);

createRope(base1, base2, 40);
createRope(base2, base3, false, 45);
createRope(base3, base4);
createRope(base4, base5);
