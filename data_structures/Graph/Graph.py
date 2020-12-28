# Author: Ernest Wambua
# Date: 28/12/20
# Purpose: Undirected graph structure


class Graph:
    def __init__(self):
        self.adjacencyList = {}

    def addVertex(self, vertex):
        '''
        Adding a vertex to our graph structure
        '''
        if not self.adjacencyList.get(vertex):
            self.adjacencyList[vertex] = []

    def addEdge(self, vertex1, vertex2):
        if vertex1 in self.adjacencyList.keys() and vertex2 in self.adjacencyList.keys():
            if vertex1 not in self.adjacencyList[vertex2]:
                self.adjacencyList[vertex1].append(vertex2)
                self.adjacencyList[vertex2].append(vertex1)

    def removeEdge(self, vertex1, vertex2):
        if vertex1 in self.adjacencyList.keys() and vertex2 in self.adjacencyList.keys():
            if vertex1 in self.adjacencyList[vertex2]:
                self.adjacencyList[vertex1].remove(vertex2)
                self.adjacencyList[vertex2].remove(vertex1)

    def removeVertex(self, vertex):
        if vertex in self.adjacencyList.keys():
            while len(self.adjacencyList[vertex]) != 0:
                self.removeEdge(vertex, self.adjacencyList[vertex][0])
            self.adjacencyList.pop(vertex)


def main():
    socialGraph = Graph()
    socialGraph.addVertex("Ernest")
    socialGraph.addVertex("Obama")
    socialGraph.addVertex("Arianna")
    socialGraph.addVertex("Betty")
    socialGraph.addVertex("Bernard")
    socialGraph.addVertex("Josephine")

    print(socialGraph.adjacencyList)

    socialGraph.addEdge("Ernest", "Obama")
    socialGraph.addEdge("Ernest", "Arianna")
    socialGraph.addEdge("Obama", "Betty")
    socialGraph.addEdge("Ernest", "Bernard")
    socialGraph.addEdge("Ernest", "Josephine")
    socialGraph.addEdge("Ernest", "Betty")
    socialGraph.addEdge("Bernard", "Betty")
    socialGraph.addEdge("Ernest", "Bernard")

    print(socialGraph.adjacencyList)

    socialGraph.removeEdge("Ernest", "Obama")
    socialGraph.removeEdge("Ernest", "Betty")
    socialGraph.removeEdge("Ernest", "Arianna")

    print(socialGraph.adjacencyList)

    socialGraph.removeVertex("Ernest")

    print(socialGraph.adjacencyList)


if __name__ == "__main__":
    main()
