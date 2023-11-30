// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak.

const sayilar = [1, 2, 3, 4, 5, 6, 7];

// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)

const carpim = (sayi1, sayi2) => sayi1 * sayi2;
console.log(carpim(5, 6));

// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.

const kelimeSayisi = (cumle) => cumle.split(" ").length;
console.log(kelimeSayisi("Merhaba benim adım Utku"));

// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)

function faktoriyel(sayi) {
    let sonuc = 1;
    for (let i = 1; i <= sayi; i++) {
        sonuc *= i;
    }
    return sonuc;
}
console.log(faktoriyel(5));

// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)

const asalMi = function (sayi) {
    if (sayi === 1) {
        return false;
    } else if (sayi === 2) {
        return true;
    } else {
        for (let i = 2; i < sayi; i++) {
            if (sayi % i === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(asalMi(7));

// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.

const enBuyuk = function (dizi) {
    let enBuyuk = dizi[0];
    for (let i = 1; i < dizi.length; i++) {
        if (dizi[i] > enBuyuk) {
            enBuyuk = dizi[i];
        }
    }
    return enBuyuk;
}

console.log(enBuyuk(sayilar));


// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.

const toplam = function (dizi) {
    let toplam = 0;
    for (let i = 0; i < dizi.length; i++) {
        toplam += dizi[i];
    }
    return toplam;
}

console.log(toplam(sayilar));


// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.

const enBuyuk2 = (dizi) => {
    let enBuyuk = dizi[0];
    for (let i = 1; i < dizi.length; i++) {
        if (dizi[i] > enBuyuk) {
            enBuyuk = dizi[i];
        }
    }
    return enBuyuk;
}

console.log(enBuyuk2(sayilar));

// Buradan itibaren yalnızca arrow function kullanıyoruz.

const toplam2 = (dizi) => {
    let toplam = 0;
    for (let i = 0; i < dizi.length; i++) {
        toplam += dizi[i];
    }
    return toplam;
}

console.log(toplam2(sayilar));

// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.

const tersCevir = (string) => {
    let tersString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        tersString += string[i];
    }
    return tersString;
}

console.log(tersCevir("Merhaba benim adım Utku"));

// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın.

const karistir = (dizi) => {
    let karisikDizi = [];
    while (dizi.length > 0) {
        let randomIndex = Math.floor(Math.random() * dizi.length);
        karisikDizi.push(dizi[randomIndex]);
        dizi.splice(randomIndex, 1);
    }
    return karisikDizi;
}

console.log(karistir(sayilar));

// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)

const pozitifBolenler = (sayi) => {
    let bolenler = [];
    for (let i = 1; i <= sayi; i++) {
        if (sayi % i === 0) {
            bolenler.push(i);
        }
    }
    return bolenler;
}

console.log(pozitifBolenler(12));

// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.

const karakterSayisi = (string, karakter) => {
    let sayac = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === karakter) {
            sayac++;
        }
    }
    return sayac;
}

console.log(karakterSayisi("Merhaba benim adım Utku", "a"));

// 12 - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.

const toplam3 = (...sayilar) => {
    let toplam = 0;
    for (let i = 0; i < sayilar.length; i++) {
        toplam += sayilar[i];
    }
    return toplam;
}

console.log(toplam3(1, 2, 3, 4, 5, 6, 7));
