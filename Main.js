var Node = require('./Node');
var BinaryTree = require('./BinaryTree');


var myTree = new BinaryTree();

myTree.add(5);
myTree.add(3);
myTree.add(6);
myTree.add(7);
myTree.add(1);
myTree.add(2);
myTree.add(4);
myTree.add(12);
myTree.add(8);
myTree.add(15);

//myTree.printTree();
//console.log(myTree.getLCA(myTree.root,8,15));
//console.log(myTree.getDistance(myTree.root,3));

//console.log(myTree.getDistance(15));
console.log(myTree.distanceB2Nodes(3,7));

