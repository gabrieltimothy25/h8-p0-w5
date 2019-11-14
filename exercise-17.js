var product = 1;
var count = 0;
function kaliTerusRekursif(num) {
  var strAngka = num.toString();
  var newProduct = 1;
  if (strAngka.length === 1) {
    return num;
  } else {
    for (var i = 0; i < strAngka.length; i++) {
      newProduct *= Number(strAngka[i]);
    }
    return kaliTerusRekursif(newProduct);
  }
} 
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6