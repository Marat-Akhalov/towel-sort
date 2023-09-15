// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix === '') return [];

  if (matrix.length < 1) return [];

  return matrix
    .map((elem, index) => {
      return index % 2 == 0 ? elem.sort((a, b) => a - b) : elem.sort((a, b) => b - a);
    })
    .flat(2);
};
