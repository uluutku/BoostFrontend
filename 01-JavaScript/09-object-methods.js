// 1- myObject isimli boş bir nesne oluşturun.

const myObject = {};

// 2- nesnenin içerisine isim, yas, cinsiyet ve meslek özelliklerini sırasıyla ekleyin

myObject.isim = "Utku";
myObject.yas = 26;
myObject.cinsiyet = "Erkek";
myObject.meslek = "Mühendis";

// 3- nesnenin içerisinden cinsiyet özelliğini kaldırın.

delete myObject.cinsiyet;

// 4- myObject nesnesinin özelliklerini bir başka değişkene kopyalayın.

// const myObject2 = myObject; -> adres konusunu konustuk. bu sekilde yaparsak myObject2 degeri degil adresi myObject ile ayni olur. yani myObject2 uzerinde yapilan degisiklikler myObject uzerinde de yapilir. bunu engellemek icin asagidaki yontemlerden birini kullanabiliriz.

const myObject2 = Object.assign({}, myObject);  
// const myObject2 = {...myObject}; 

// 5- nesnenizin anahtarlarını konsola yazdırın.

console.log(Object.keys(myObject));

// 6- nesnenizin değerlerini konsola yazdırın.

console.log(Object.values(myObject));

// 7- nesnenizin tüm anahtar-değer çiftlerini konsola yazdırın.

console.log(Object.entries(myObject));

// 8- nesnenizin içerisinde isim anahtarına sahip bir özellik var mı diye kontrol edin

console.log(myObject.hasOwnProperty("isim"));

// 9- nesnenizin özelliklerine değişiklik ve ekleme çıkarma yapılabilmesini engelleyin.

Object.freeze(myObject);

// 10- nesnenizin özelliklerinde değişiklik yapılabilsin ancak ekleme çıkarma yapılabilmesini engelleyin.

Object.seal(myObject);

