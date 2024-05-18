// knn.js
class KNN {
    constructor(k) {
      this.k = k;
      this.trainingData = [];
    }
  
    fit(data, labels) {
      this.trainingData = data.map((point, index) => ({
        point,
        label: labels[index]
      }));
    }
  
    predict(points) {
      return points.map(point => this._predictPoint(point));
    }
  
    _predictPoint(point) {
      const distances = this.trainingData.map(({ point: trainPoint, label }) => ({
        distance: this._euclideanDistance(point, trainPoint),
        label
      }));
  
      distances.sort((a, b) => a.distance - b.distance);
      console.log('Distances:', distances);
  
      const neighbors = distances.slice(0, this.k);
      console.log('Neighbors:', neighbors);
  
      const votes = neighbors.reduce((acc, { label }) => {
        acc[label] = (acc[label] || 0) + 1;
        return acc;
      }, {});
      console.log('Votes:', votes);
  
      return Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
    }
  
    _euclideanDistance(point1, point2) {
      return Math.sqrt(point1.reduce((sum, val, index) => sum + Math.pow(val - point2[index], 2), 0));
    }
  }
  
  module.exports = KNN;
  