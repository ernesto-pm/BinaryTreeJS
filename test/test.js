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
            var miArbol = new BinaryTree();
            miArbol.add(5);
            expect(miArbol.root).to.not.equal(null);
        })
    });

    describe('insertarNodoMenor', function(){
        it('Debe insertar un nodo con valor menor a la raiz del lado izquierdo',function(){
            var miArbol = new BinaryTree();
            miArbol.add(5);
            miArbol.add(4);
            expect(miArbol.root.left).to.not.equal(null);
        })
    });

    describe('insertarNodoMayor', function(){
        it('Debe insertar un nodo con valor menor a la raiz del lado izquierdo',function(){
            var miArbol = new BinaryTree();
            miArbol.add(5);
            miArbol.add(7);
            expect(miArbol.root.right).to.not.equal(null);
        })
    });

    describe('insertarNodoMenorAnidado', function () {
        it('Debe insertar un nodo con valor menor al hijo izquierdo de la raiz', function () {
            var miArbol = new BinaryTree();
            miArbol.add(10);
            miArbol.add(9);
            miArbol.add(8);
            expect(miArbol.root.left.left).to.not.equal(null);
        })
    })

    describe('insertarNodoMenorAnidado', function () {
        it('Debe insertar un nodo con valor mayor al hijo derecho de la raiz', function () {
            var miArbol = new BinaryTree();
            miArbol.add(10);
            miArbol.add(11);
            miArbol.add(12);
            expect(miArbol.root.right.right).to.not.equal(null);
        })
    })


});

