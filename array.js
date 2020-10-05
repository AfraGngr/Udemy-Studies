// Arraylerin Özellikleri

let value;

const numbers = [43,56,33,23,44,35,5];

value = numbers.length; // 7
value = numbers[0]; // 43

// Herhangi bir indexteki değeri değiştime 

numbers[2] = 1000; // [43,56,1000,23,44,35,5]

numbers.push(2000); // arrayin sonuna ekler [43,56,1000,23,44,35,5,2000]

numbers.unshift(3000); // arrayin başına ekler [3000,43,56,1000,23,44,35,5,2000]

numbers.pop(); // arrayin sonundaki değeri atar [3000,43,56,1000,23,44,35,5]

numbers.shift(); // arrayin başındaki değeri atar [43,56,1000,23,44,35,5]

numbers.splice(0,3) // 0-1-2. değerleri atar. [23,44,35,5]

numbers.reverse(); // ters çevirir. [5,35,44,23]

numbers.sort(); // ilk karaktere göre sıralar.

value = numbers.sort(function(x,y){ // küçükten büyüğe
    return x-y
})
value = numbers.sort(function(x,y){ // büyükten küçüğe
    return y-x
})