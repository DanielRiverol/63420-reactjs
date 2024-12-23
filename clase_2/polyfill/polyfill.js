const numbers = [1, 2, 3, 4, 5, 6];

const duplicado = [];
// Simulamos incompatibilidad
Array.prototype.forEach = null;
// polyfill
Array.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

numbers.forEach((n) => {
  duplicado.push(n * 2);
});

console.log(numbers);
console.log(duplicado);
