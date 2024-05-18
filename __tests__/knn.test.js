// __tests__/knn.test.js
const KNN = require('../knn');

test('KNN classification with simple dataset', () => {
  const knn = new KNN(5);  // Cambiamos k a 5

  const data = [
    [1, 2],
    [2, 3],
    [3, 3],
    [6, 6],
    [7, 8],
    [8, 8]
  ];

  const labels = ['A', 'A', 'A', 'B', 'B', 'B'];

  knn.fit(data, labels);

  const prediction = knn.predict([[5, 5]]);
  console.log('Prediction:', prediction);
  expect(prediction).toEqual(['B']);
});

test('KNN classification with another dataset', () => {
  const knn = new KNN(1);

  const data = [
    [1, 2],
    [2, 3],
    [3, 3],
    [6, 6],
    [7, 8],
    [8, 8]
  ];

  const labels = ['A', 'A', 'A', 'B', 'B', 'B'];

  knn.fit(data, labels);

  const prediction = knn.predict([[2, 2]]);
  console.log('Prediction:', prediction);
  expect(prediction).toEqual(['A']);
});
