const cookie = {
    "cookie name" : "Cookie Chip",
    name : "Dark Chip",
    isGlutenFree: false,
    "+Yummy" : true
};
console.log(cookie);

/*
response da order garanti edilmez, order olsun istiyorsak
direk property name ile çağırmak gerekiyor
*/
console.log(cookie.name);

//change value
cookie.name = "Blonde Chip";
cookie["cookie name"] = "Cookie ChipX";

//print after changes
console.log(cookie.name);
console.log(cookie["cookie name"]);
console.log(cookie["+Yummy"]);


