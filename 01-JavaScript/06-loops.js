// // -------------------For - Başlangıç Bitiş Arası Sayıların Toplamı-----------------------
// // kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)

// let baslangic = Number(prompt("Başlangıç sayısını giriniz: "));
// let bitis = Number(prompt("Bitiş sayısını giriniz: "));
// let toplam = 0;

// for (let i = baslangic; i <= bitis; i++) {
//     toplam += i;
//     }
// console.log(toplam);

// // -------------------For - Dersi Geçen Öğrenci Sayısı-----------------------
// // Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.

// let ogrenciSayisi = 5;
// let notlar = [];
// let toplamNot = 0;
// let gecenOgrenciSayisi = 0;

// for (let i = 0; i < ogrenciSayisi; i++) {
//     notlar.push(Number(prompt(`${i+1}. öğrencinin notunu giriniz: `)));
//     toplamNot += notlar[i];
//     if (notlar[i] >= 60) {
//         gecenOgrenciSayisi++;
//     }
// }

// console.log(`Sınıf ortalaması: ${toplamNot / ogrenciSayisi}`);
// console.log(`${gecenOgrenciSayisi} öğrenci geçti.`);
// console.log(notlar);

// -------------------While - Sayı Tahmin uygulaması-----------------------
// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.

let randomSayi = Math.floor(Math.random() * 10) + 1;
let tahminHakki = 3;
let tahmin;

while (tahminHakki > 0) {
    tahminHakki--;
    tahmin = Number(prompt("1-10 arası bir sayı giriniz: "));
    if (tahmin === randomSayi) {
        console.log("Tebrikler, doğru tahmin!");
        break;
    } else if (tahmin < randomSayi) {
        console.log("Daha büyük bir sayı giriniz." + "Kalan hakkınız:" + tahminHakki);
       
    } else {
        console.log("Daha küçük bir sayı giriniz.");
        console.log("Daha büyük bir sayı giriniz." + "Kalan hakkınız:" + tahminHakki);
    }
    
}

if (tahminHakki === 0) {
    console.log("Tahmin hakkınız kalmadı oyun bitti.");
}   

// // -------------------While - Alışveriş Sepeti Uygulaması-----------------------
// // Kurallar:
// // While döngüsü kullanılacak.
// // Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.
// // Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.
// // Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.

// let toplamFiyat = 0;
// let urunAdi;
// let urunFiyati;

// while (urunAdi !== "onayla") {
//     urunAdi = prompt("Ürün adı giriniz: ");
//     if (urunAdi === "onayla") {
//         console.log(`Sepet tutarı: ${toplamFiyat}`);
//         break;
//     }
//     urunFiyati = Number(prompt("Ürün fiyatı giriniz: "));
//     toplamFiyat += urunFiyati;
// }

