// .indexOf
// .substring
// .trimEnd()
// .includes
// .replace
// .trimStart()
// .lastIndexOF
// .toUpperCase
// .replaceAll
// .slice
// .trim()
// .length
// .toLowerCase
// .charAt

// -- Birkaç cümleden oluşan bir metin yazıp myStory isimli bir değişkene atayalım. İçerisinde tekrar eden birkaç kelime bulunsun.
let myStory =
  "Boyabata doğru yola çıkmışken jandarma beyler beni durdurmak istedi, jandarma arkadaşlara duba benzeri bir uyarı işareti olmadığını söyledim ancak jandarma arkadaşlar beni dinlemedi, yüksek mevkiide tanıdığım olan Turan Beye bu durumu bildireceğim.";

// 1- Yazdığınız hikayenin uzunluğunu yazdırın.
console.log(myStory.length);
// 2- Hikayenin toplam index sayısı kaçtır.
console.log(myStory.length - 1);
// 3- string içerisinde tekrar eden bir kelimenin ilkinin indexini ve sonuncusunun indexini sorgulayın.
console.log(myStory.indexOf("jandarma"));
console.log(myStory.lastIndexOf("jandarma"));
// 4- İlk 15 karakterini yazdırın. ( 2 farklı yöntem kullanarak)
console.log(myStory.substring(0, 15));
console.log(myStory.slice(0, 15));
// 5- 15. karakterden sonrasını yazdırın. ( 2 farklı yöntem kullanarak)
console.log(myStory.substring(15));
console.log(myStory.slice(15));
// 6- Son 5 karakteri yazdırın. ( 2 farklı yöntem kullanarak)
console.log(myStory.substring(myStory.length - 5));
console.log(myStory.slice(-5));
// 7- 11. karakterden sonra gelen 10 karakteri yazdırın.
console.log(myStory.substring(11, 21));
// 8- Son 5 karakter haric hikayenizi yazdırın.
console.log(myStory.slice(0, -5));
// 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.
console.log(myStory.includes("duba"));
// 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.
console.log(myStory.replaceAll("i", "ı"));
// 11- Hikayenizdeki ilk "a" karakterini "e" ye çevirin.
console.log(myStory.replace("a", "e"));
// 12- Bütün metni büyük harfe çevirin.
console.log(myStory.toUpperCase());
// 13- Bütün metni küçük harfe çevirin.
console.log(myStory.toLowerCase());

// -----------------------------------------------

// 14- prompt üzerinden kullancıdan bir isim isteyin ve bir değişkene atayın.
let name = prompt("Adınızı giriniz: ");
//   a- Ardından bu değişkeni kullanarak console'a "Hoşgeldin, isim" şeklinde yazdırın.
console.log("Hoşgeldin, " + name);
//   b- Yukarıdaki çıktının aynısını template litteral kullanarak konsola yazdırın. Örn: console.log(degisken) => "benim adım: Cem"
console.log(`Hoşgeldin, ${name}`);
// 15- Kullanıcıdan gelen stringin başında ve sonunda boşluk ekle.
name = " " + name + " ";
console.log(name);
//   a- Başındaki boşlukları kaldırın.
console.log(name.trimStart());
//   b- Sonundaki boşlukları kaldırın.
console.log(name.trimEnd());
//   c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.
let trimmedName = name.trim();
// 16- Çıktıyı uygun metotları kullanarak "BENİM Adım: İsim" yazacak hale getirin.

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(
  `${"benim".toUpperCase()} ${capitalizeFirstLetter(
    "adım:"
  )} ${capitalizeFirstLetter(trimmedName)}`
);

// 17- Ekrana tırnak içindeki mesajı ya da değişkendeki değeri yazdıran bir pop-up oluşturun. "Ara vakti. İyi dinlenmeler"
alert("Ara vakti. İyi dinlenmeler");
