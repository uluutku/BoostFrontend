// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler
let arrayUzunlugu;
let arrayUzunlugu2;
let myArray = ["Utku", "Ulu", 26, true, "elma", "armut", "karpuz", "kuru fasulye", "makarna", "pilav"];

// 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.
myArray[0] = "Mert";
console.log(myArray);

// 3- dizinin uzunluğunu konsola yazdırın.
console.log(myArray.length);

// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
myArray.push("kedi");
arrayUzunlugu = arraySay(myArray);
console.log(arrayUzunlugu);

// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
myArray.unshift("köpek");
arrayUzunlugu2 = arraySay(myArray);
console.log(arrayUzunlugu2);

// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
let lastElement = myArray.pop();
console.log(lastElement);

// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
let firstElement = myArray.shift();
console.log(firstElement);

// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)

let newArray = [firstElement, firstElement.length, lastElement, lastElement.length];
console.log(newArray);

// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.
let myNewArray = myArray.concat(newArray);
console.log(myNewArray);

let myNewArray2 = [...myArray, ...newArray];
console.log(myNewArray2);

// 10- myArray içerisinde eleman olarak "Veli" var mı ?
console.log(myArray.includes("Veli"));

// 11- myArray içersinide 4.elemandan itibaren patates var mı?
console.log(myArray.includes("patates", 3));

// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?
console.log(myArray.indexOf("elma"));

// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.
console.log(newArray); //debug amaçlı
let firstThree = newArray.slice(0, 3);
console.log(firstThree);

// 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.
firstThree.splice(1, 1, "karpuz", "kavun");
console.log(firstThree);

// 15- Bu dizi üzerinde 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin ÖRN: [1, 2, 3, 4] => [1, 'x', 4, 'y']
firstThree.pop();
firstThree.push("kuş");
firstThree.splice(1, 1, "balık");
console.log(firstThree);

// 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.
let string = firstThree.join("+");
console.log(string);


function arraySay(array) {
    let count = 0;
    for (let item of array) {
        count++;
    }
    return count;
}
