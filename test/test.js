var assert  = require('assert');
var expect = require('chai').expect;


var BinaryTree = require('../BinaryTree');
var Node = require('../Node');

describe('Array', function(){

    describe('crearNodo', function(){
        it('Debe crear un nodo',function(){
            var miNodo = new Node(1);
            expect(miNodo.value).to.not.equal(null);
        })
    });

    describe('crearArbol', function(){
        it('Debe crear un arbol con un valor en la raiz',function(){
            var miArbol = new BinaryTree(5);
            expect(miArbol.root).to.not.equal(null);
        })
    });

    describe('insertarNodoMenor', function(){
        it('Debe insertar un nodo con valor menor a la raiz del lado izquierdo',function(){
            var miArbol = new BinaryTree(5);
            miArbol.add(new Node(4));
            expect(miArbol.left).to.not.equal(null);
        })
    });
});

