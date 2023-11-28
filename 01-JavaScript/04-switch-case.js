// Kullanıcıdan bir ay ismi alın ve girilen ayın kaç gün olduğunu konsola yazdırın.

let ay = prompt("Bir ay ismi girin:").trim().toLowerCase();
let gunSayisi;

switch (ay) {
    case "ocak":
    case "mart":
    case "mayıs":
    case "temmuz":
    case "ağustos":
    case "ekim":
    case "aralık":
        gunSayisi = 31;
        console.log(`${ay} ayı ${gunSayisi} gün içerir.`);
        break;
    case "nisan":
    case "haziran":
    case "eylül":
    case "kasım":
        gunSayisi = 30;
        console.log(`${ay} ayı ${gunSayisi} gün içerir.`);
        break;
    case "şubat":
        gunSayisi = 28;
        console.log(`${ay} ayı ${gunSayisi} gün içerir.`);
        break;
    default:
        console.log("Geçersiz ay ismi!");
}



// BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun. Marka ve renk bilgilerini prompt üzerinden alınız. yaratacağınız stokDurumu değişkenini stokta "Var" veya "Yok" olarak güncellesin.

let marka = prompt("Marka girin:").trim().toLowerCase();
let renk;
let stokDurumu;

switch (marka) {
    case "bmw":
        renk = prompt("Renk girin:").trim().toLowerCase();
        switch (renk) {
            case "siyah":
            case "beyaz":
                stokDurumu = "Var";
                break;
            default:
                stokDurumu = "Yok";
                break;
        }
        break;
    case "mercedes":
        renk = prompt("Renk girin:").trim().toLowerCase();
        switch (renk) {
            case "gri":
            case "mavi":
                stokDurumu = "Var";
                break;
            default:
                stokDurumu = "Yok";
                break;
        }
        break;
    case "audi":
        renk = prompt("Renk girin:").trim().toLowerCase();
        switch (renk) {
            case "kırmızı":
            case "sarı":
                stokDurumu = "Var";
                break;
            default:
                stokDurumu = "Yok";
                break;
        }
        break;
    default:
        stokDurumu = "Yok";
        break;
}

console.log(`İstediğiniz Aracın Stok Durumu: ${stokDurumu}`);