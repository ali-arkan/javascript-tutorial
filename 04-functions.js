
/**
 JS de functionlar, function ifadesi ve ardıdan function name,
 fonksiyonun aldğı parametreler ve 
 curly brackets içerisinde fonksiyonun işlemi tanımlanarak oluşturulr 
 */


// sum of two number
function sum(a, b)
{
   return a+b;
}
console.log(sum(10,10));


// multiple of two number
function product(a,b) {
    return a*b;
}
console.log(product(12,12));


// store two big number multipilication
const bigProduct = product(1000,432424);
console.log(bigProduct)


/**
* anonymous function, temelde fonksiyon adı kullanılmayan fonksiyonlardır
* Fonksiyonun sonucunu baska bi ifadeye set ederek ifade ye donustutur
    let sum1 = function (a, b) 
* bir functionu baskasının parametresi olarak tanımlayabilirz
    setTimeout....
* Arrow => ile birlikte artık "function" ifadeside kullanılmak zorunda degildir
    const add = (a,b) => {
 */

// anonymous function 1: a,b toplamasını sum1 olarak ifade etmek istedğimizde 
let sum1 = function (a, b) {
    return a + b;
  }
console.log(sum1(4,5));


// anonymous function 2 : isimsiz function setTimeout adlı baska functionun parametresidir
  setTimeout(function(){
    console.log("Hey Timeout!!");
}, 2000)


/**
 * anonymous function 3 : Arrow Function (Ok Fonksiyonu) => kullanımı
 * => Arrow function ile artık function adının dısında artık "function" ifadesidenden kurtuluyoruz
 */

// arrow function parametresiz kullanım
var sayHello = () => {
  console.log("Merhaba");
};
// call function
sayHello();


// arrow function parametreli kullanım
const add = (a,b) => {
  return a+b;
}
console.log(add(3,2));


// tek satırlık functionlarda curly brackets de kaldırılabilir
const square = (x) =>  x*x;
console.log(square(5));




/**
 * 
 * recap anonymous function
 */
// sum normal
function toplam1(a,b,c){
 return a + b + c ;
}
console.log("normal function : " + toplam1(1,2,3));

//sum ifade ile 
const toplam2= function (a,b,c){
  return a + b + c ;
}
console.log("no function name : " + toplam2(1,2,3));

//arrow
const toplam3 = (a,b,c) => {
  return a+b+c;
}
console.log("arrow function ile : " + toplam3(1,2,3));

//curly kaldır
const toplam4 = (a,b,c) => a+b+c;
console.log("no curly brackets : " + toplam4(1,2,3));