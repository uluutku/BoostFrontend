// // Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.

// const arr = ["elma", "armut", "çilek"]
// const upperCase = arr.map((eleman, index) => eleman.toUpperCase())
// console.log(upperCase);
// console.log(arr);
// //Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.

// const arr1 = [1,2,3,4,5,6,7]

// const carpimlar = []

// console.log(arr1.forEach((e) => {
//     carpimlar.push(e * 2)
// }))

// console.log(carpimlar);

// console.log(arr.map((eleman, index) => eleman.toUpperCase() ));

// Kullanılacak diziler
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
// const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
// const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

// ---------------forEach-------------------
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.
// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.
// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.
// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)
// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.
// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.
// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.
// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.

// ---------------filter-------------------
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın. (callback funciton ile)

let array = [1,2,3,4,5,6,7,8,9,10]

let ciftSayilar = array.filter((e) => e % 2 === 0)
console.log(ciftSayilar);

// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.

let stringArray = ["elma", "armut", "kiraz", "üzüm"];

let filtre = stringArray.filter((e) => e.length > 5)
console.log(filtre);

// ---------------reduce-------------------
// 13- Verilen bir dizi içerisindeki sayıların toplamını her bir değere "2" ekleyerek hesaplayan bir örnek yazın.

let toplam = array.reduce((acc, curr) => acc + curr, 2)
console.log(toplam);

// ---------------find-------------------
// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek

let ilkCiftSayi = array.find((e) => e % 2 === 0)
console.log(ilkCiftSayi);

// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek

let sonCiftSayi = array.reverse().find((e) => e % 2 === 0)
console.log(sonCiftSayi);

// ---------------some-------------------
// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek

let negatifSayi = array.some((e) => e < 0)
console.log(negatifSayi);

// ---------------every-------------------
// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek

let pozitifSayi = array.every((e) => e > 0)
console.log(pozitifSayi);

// ---------------sort-------------------
// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek

let sirali = array.sort((a,b) => a - b)
console.log(sirali);