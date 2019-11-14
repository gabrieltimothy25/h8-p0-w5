function changeVocals (str) {
    //code di sini
    arr = str.split('')
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'a': {arr[i] = 'b'; break;}
            case 'A': {arr[i] = 'B'; break;}
            case 'e': {arr[i] = 'f'; break;}
            case 'E': {arr[i] = 'F'; break;}
            case 'i': {arr[i] = 'j'; break;}
            case 'J': {arr[i] = 'J'; break;}
            case 'u': {arr[i] = 'v'; break;}
            case 'U': {arr[i] = 'V'; break;}
            case 'o': {arr[i] = 'p'; break;}
            case 'O': {arr[i] = 'P'; break;}
        }
        result += arr[i];
    }
    return result;
  }
  
  function reverseWord (str) {
    //code di sini
    var reversed = ''
    for (var i = str.length-1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    result = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i].toUpperCase() === str[i]) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }
    return result;
  }
  
  function removeSpaces (str) {
    //code di sini
    var removedSpaces = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            removedSpaces += str[i];
        }
    }
    return removedSpaces
  }
  
  function passwordGenerator (name) {
    //code di sini
    var vocalsChanged = changeVocals(name);
    var reversed = reverseWord(vocalsChanged);
    var lowerUpper = setLowerUpperCase(reversed);
    var noSpace = removeSpaces(lowerUpper);
    return noSpace;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'