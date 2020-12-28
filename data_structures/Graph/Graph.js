class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex = (vertex) => {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    } else {
      console.log("Vertex aleady exists");
    }
  };

  addEdge = (vertex1, vertex2) => {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      if (!this.adjacencyList[vertex1].find((vertex) => vertex == vertex2)) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
      } else {
        console.log("Edge already exists");
      }
    } else {
      console.log("cannot add edge when vertex does not exist");
    }
  };

  removeEdge = (vertex1, vertex2) => {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (item) => item !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (item) => item !== vertex1
      );
    } else {
      console.log("Cannot remove an edge that does not exist");
    }
  };

  removeVertex = (vertex) => {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].map((item) => this.removeEdge(vertex, item));
      delete this.adjacencyList[vertex];
    } else {
      console.log("Vertex does not exist");
    }
  };
}

socialGraph = new Graph();
socialGraph.addVertex("Ernest");
socialGraph.addVertex("Obama");
socialGraph.addVertex("Arianna");
socialGraph.addVertex("Betty");
socialGraph.addVertex("Bernard");
socialGraph.addVertex("Josephine");

socialGraph.addEdge("Ernest", "Obama");
socialGraph.addEdge("Ernest", "Arianna");
socialGraph.addEdge("Obama", "Betty");
socialGraph.addEdge("Ernest", "Bernard");
socialGraph.addEdge("Ernest", "Josephine");
socialGraph.addEdge("Ernest", "Betty");
socialGraph.addEdge("Bernard", "Betty");
socialGraph.addEdge("Ernest", "Bernard");
console.log(socialGraph.adjacencyList);

socialGraph.removeEdge("Ernest", "Obama");
socialGraph.removeEdge("Ernest", "Betty");
socialGraph.removeEdge("Ernest", "Arianna");
console.log(socialGraph.adjacencyList);

socialGraph.removeVertex("Ernest");
console.log(socialGraph.adjacencyList);
