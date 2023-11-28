// Math.abs - Math.ceil -Math.floor -Math.max - Math.min - Math.sqrt - Math.pow - Math.trunc - .toFixed - .toPrecision
 
// 1-) negatif bir sayının mutlak değerini bulun ve yeni bir değişkene atayın. Değişkeni konsola yazdırın.
let number = -5;
let absNumber = Math.abs(number);
console.log(absNumber);

// 2-) ondalıklı bir sayıyı yukarıya yuvarlayın.
let floatNumber = 3.5;
let ceilNumber = Math.ceil(floatNumber);
console.log(ceilNumber);

// 3-) ondalıklı bir sayıyı aşağıya yuvarlayın.
let floorNumber = Math.floor(floatNumber);
console.log(floorNumber);

// 4-) 6 15 -7 0 80 -35 sayıları arasındaki en büyük sayıyı bulun.
let maxNumber = Math.max(6, 15, -7, 0, 80, -35);
console.log(maxNumber);

// 5-) 6 15 -7 0 80 -35 sayıları arasındaki en küçük sayıyı bulun.
let minNumber = Math.min(6, 15, -7, 0, 80, -35);
console.log(minNumber);

// 6-) ondalıklı bir sayıyı, virgülden sonra 3 hanesi görünecek şekilde yuvarlayın.
let floatNumber2 = 3.1415926535;
let roundNumber = floatNumber2.toFixed(3);
console.log(roundNumber);

// 7-) bir sayının karekökünü bulun.
let squareNumber = Math.sqrt(25);
console.log(squareNumber);

// 8-) bir sayının üstel fonksiyonunu bulun. (x üzeri y)
let powNumber = Math.pow(5, 3);
console.log(powNumber);

// 9-) 123.456789 sayısını toplamda 6 hanesi görünecek hale getirin.
let precisionNumber = 123.456789;
let precisionNumber6digit = precisionNumber.toPrecision(6);
console.log(precisionNumber6digit);

// 10-) 123.456789 sayısının ondalıklı kısmını kaldıracak şekilde tam sayı haline getirin.
let truncNumber = Math.trunc(precisionNumber);
console.log(truncNumber);

// 11-) Rastgele bir sayı üretin. (0 ile 100 arasında)
let randomNumber = Math.random() * 100;
console.log(randomNumber);
