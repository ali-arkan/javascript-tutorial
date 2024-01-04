
/**
 * Class: benzer 
 * Object ile array farkı nedir?
 * constructor kullanımı
 */


const cookie = {
    name : "Dark Chip",
    isGlutenFree: false,
    eatCookie: function(){
       console.log("I am eating " + this.name) 
    }
};

cookie.eatCookie();


class Cookie{
    constructor(name1, isGlutenFree1){
        this.name = name1 ;
        this.isGlutenFree = isGlutenFree1 ; 
    }
    //class içerisinde fonksiyon kullandıgında function key kullanmıyoruz
    eatCookie(){
        console.log("I am eating " + this.name + ", has gluten : " + this.isGlutenFree);
    }

}

//new instance
const myCookie = new Cookie("Iced Oatmeal", false);
console.log(myCookie);
myCookie.eatCookie();


//new Instance
const myCookie2 = new Cookie("New Cookie",true);
console.log(myCookie2);
myCookie2.eatCookie();





