const programmer = {
    name : "Afra",
    age : 28,
    email : "gungorafra93@gmail.com",
    langs : ["Python", "Java", "Javascript"],

    address : {
        city: Ankara, 
        street: Eryaman,
    },

    work : function(){
        console.log("Programcı çalışıyor...")
    }
}


let value;

value = programmer.email; // Genel kullanım
Value = programmer["email"];
value = programmer.address.city;

programmer.work();


const programmers = {
    {name : "Afra", age:28},
    {name: "Oğuz", age: 25}
}

value = programmers[0].name; // "Afra" (Object Literal)


// Date Object

let time; 

const now = new Date(); // Şu anki zamanı almamızı sağlar.. 

const date1 = new Date("10-6-2020 01:20:00")

value = date1.getHours();