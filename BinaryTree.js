var Node = require('./Node');

function BinaryTree(){
    this.root = null;
}

BinaryTree.prototype = {
    constructor: BinaryTree,

    printTree: function(){
        // funciona hasta a lo mas 2 niveles hacia abajo
        console.log(this.root);
    },

    add: function(value){
        // Add new node to BinaryTree
        var node = new Node(value);
        var current;

        if(this.root === null){
            this.root = node;
        }else {
            current = this.root;
            while(1){
                if (value < current.value){
                    if (current.left === null){
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value){
                    if (current.right === null){
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }
                } else {
                    break;
                }

            }
        }
    },

    getLCA: function (root, n1,n2) {
        // Get Least Common Ancestor, recursion, maximum call stack exceeded for many iterations.
        if(root != null){
            if(root.value == n1 || root.value == n2){
                return this.root;
            }
            var left = this.getLCA(root.left,n1,n2);
            var right = this.getLCA(root.right,n1,n2);

            if(left != null && right != null){
                return root;
            }

            if(left != null){
                return left;
            }

            if(right != null){
                return right;
            }
        }
        return null;
    },

    getDistance: function(value){
        // Distance from root to the node whose value is the one given
        var node = new Node(value);
        var current;
        if(this.root === null){
            return 0;
        }else {
            current = this.root;
            var x = 0;
            while(1){
                if (value < current.value){
                    if (current.left === null){
                        return x;
                    } else {
                        current = current.left;
                        x++;
                    }
                } else if (value > current.value){
                    if (current.right === null){
                        current.right = node;
                        return x;
                    } else {
                        current = current.right;
                        x++;
                    }
                } else {
                    return x;
                }

            }
        }
    },

    distanceB2Nodes : function(n1,n2){
        // Distance: dist(root,x) + dist(root,y) - 2[dist(root,LCA)]
        var LCAValue = this.getLCA(this.root,n1,n2).value;
        var x = this.getDistance(n1)-1;
        var y = this.getDistance(n2)-1;
        var LCADist = this.getDistance(LCAValue)-1;
        return (x+y) - 2*LCADist;

    }
}


;

module.exports = BinaryTree;