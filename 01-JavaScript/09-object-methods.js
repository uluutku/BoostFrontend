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

// aşağıda verilen aracBilgileri nesnesi içerisinde bulunan her bir servis kayıdına ait tarih bilgisi ve ilgili servis kayıdına ait detay kısmında bulunan aciklama ve ucret bilgilerini konsola yazdırın.
/*(örn çıktı: 

05.01.2020 balata değişimi - 1700 TL
05.01.2020 yağ değişimi - 700 TL
05.01.2020 boya koruma - 700 TL
...
...
...
28.08.2022 seramik kaplama - 4500 TL
)
*/

const aracBilgileri = {
    id: "audiA6_123",
    model: "audiA6",
    yil: 2019,
    renk: "kırmızı",
    servisKayitlari: [
      {
        id: "audiA6_123_1",
        tarih: "05.01.2020",
        km: 2500,
        ucret: 3000,
        detay: [
          {
            id: "audiA6_123_1_1",
            aciklama: "balata değişimi",
            ucret: 1700,
          },
          {
            id: "audiA6_123_1_2",
            aciklama: "yağ değişimi",
            ucret: 700,
          },
          {
            id: "audiA6_123_1_3",
            aciklama: "boya koruma",
            ucret: 600,
          },
        ],
      },
      {
        id: "audiA6_123_2",
        tarih: "25.06.2021",
        km: 10500,
        ucret: 5000,
        detay: [
          {
            id: "audiA6_123_2_1",
            aciklama: "balata değişimi",
            ucret: 2700,
          },
          {
            id: "audiA6_123_2_2",
            aciklama: "yağ değişimi",
            ucret: 1700,
          },
          {
            id: "audiA6_123_2_3",
            aciklama: "boya koruma",
            ucret: 600,
          },
        ],
      },
      {
        id: "audiA6_123_3",
        tarih: "28.08.2022",
        km: 25400,
        ucret: 10000,
        detay: [
          {
            id: "audiA6_123_3_1",
            aciklama: "balata değişimi",
            ucret: 3500,
          },
          {
            id: "audiA6_123_3_2",
            aciklama: "yağ değişimi",
            ucret: 2000,
          },
          {
            id: "audiA6_123_3_3",
            aciklama: "seramik kaplama",
            ucret: 4500,
          },
        ],
      },
    ],
  };

for (let i = 0; i < aracBilgileri.servisKayitlari.length; i++) {
    const servisKaydi = aracBilgileri.servisKayitlari[i];
    for (let j = 0; j < servisKaydi.detay.length; j++) {
        const detay = servisKaydi.detay[j];
        console.log(`${servisKaydi.tarih} - ${detay.aciklama} - ${detay.ucret} TL`);
    }   
}
