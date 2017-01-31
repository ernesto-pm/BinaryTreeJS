function Node(value,left,right){
    this.value = value;
    this.left = null;
    this.right = null;
}

Node.prototype = {
    constructor: Node,
    printValue: function(){
        console.log(this.value);
    }
};

module.exports = Node;
