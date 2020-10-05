// Veri tiplerini dönüştürme 

let value;
 
// Stringe çevirme

value = String(123); // numberı stringe çevirme
value = String(true); // boolean değeri çevirme
value = String(function() {console.log()}); // function çevirme.

value = (10).toString(); // built-in function


// Number a çevirme

value = Number("123");
value = parseFloat("3.14");


// Math Objesinin methodları

value = Math.PI;
value = Math.E;

value = Math.round("3.6"); // sayıları yuvarlar (virgülden sonra 5 den büyükse küçüğe değilse büyüğe yuvarlar)
value = Math.ceil("3.2"); // her türlü bir yukarıya yuvarlar.
value = Math.floor("3.7"); // her türlü aşağıya yuvarlar.
value = Math.sqrt(16); // karekök alma.
value = Math.pow(2,3); // üs alma 
value = Math.max(10, 25, 43)
value = Math.min(10, 25, 43)
value = Math.random(); // 0-1 arası sayı üretir.

// String Methodları 

let value_2 ;

const firstName = "Louis";
const lastName = "Armstrong";

value = firstName + " " +lastName // Louis Armstrong


value = firstName.length
value = firstName.concat(" ", lastName," ", "Caz")
value = firstName.toUpperCase();
value = firstName.toLowerCase();
value = firstName[0] // index bulma

value = firstName.indexOf("L") // 0 (case sensitive/ karakteri bulamazsa -1 verir)
value = firstName.charAt(0); // "L"

const langs = "Java, Python, C++"

value = langs.split(",") // {"Java", "Python", "C++"}
value = langs.replace("Python", "JavaScript");
value = langs.includes("C++"); // true-false döner

