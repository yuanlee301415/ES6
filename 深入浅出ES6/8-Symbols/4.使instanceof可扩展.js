function Foo(){

}

var f=new Foo();
console.log(f instanceof  Foo);

console.log(Foo[Symbol.hasInstance](f));