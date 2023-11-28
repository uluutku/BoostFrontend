// Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.

const word = prompt("Kontrol edilecek kelimeyi girin:").toLowerCase();

let arrayStrings = word.split("");
arrayStrings.reverse();
let reversedWord = arrayStrings.join("");

console.log(reversedWord); //debug için

if (word === reversedWord) {
    console.log(`${word} kelimesi palindromdur.`);
} else {
    console.log(`${word} kelimesi palindrom değildir.`);
}

// Kullanıcıdan temsili bir oy verme ve aday olma durum sorgusu yapmak için yaş ve uyruk bilgisi alın. Aşağıdaki koşulları uygulayan bir if sorgusu yazın.

const age = prompt("Yaşınızı girin:");
const nationality = prompt("Uyruğunuzu girin:").toLowerCase();

if (nationality === "türk" && age > 30) {
    console.log("Aday olabilirsiniz.");
} else if (nationality === "türk" && age > 18) {
    console.log("Oy kullanabilirsiniz.");
} else if (nationality !== "türk" && age > 18) {
    console.log("Aday olamazsınız, ancak oy kullanabilirsiniz.");
} else {
    console.log("Aday olamazsınız ve oy kullanamazsınız.");
}


