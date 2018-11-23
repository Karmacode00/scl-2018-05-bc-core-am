window.cipher = {
  encode: (num, str) => {
    // Comienza función encode
    num = parseInt(num);
    let result = '';
    // Se moverá de a una posición a lo largo de lapalabra entregada
    for (var i = 0; i < str.length; i++) {
      let char = str[i];
      // let charCode = char.charCodeAt(i);
      if (char.match(/[A-Z]/i)) { // Si lo que ingresamos es letra 
        let charCode = str.charCodeAt(i);
        // AsCii
        // Mayúsculas 
        if ((charCode >= 65) && (charCode <= 90)) {
          char = String.fromCharCode(((charCode - 65 + parseInt(num)) % 26) + 65);
        }
        // Minusculas 
        else if ((charCode >= 97) && (charCode <= 122)) {
          char = String.fromCharCode(((charCode - 97 + parseInt(num)) % 26) + 97);
        }
      }
      result += char;
    }
    return result;
  },

  decode: (num2, str2) => {
    // Comienza función decode
    let result = '';
    num2 = parseInt(num2);

    for (var i = 0; i < str2.length; i++) {
      let char2 = str2[i];
      // let charCode = char.charCodeAt(i);
      if (char2.match(/[A-Z]/i)) { // Si es letra 
        let charCode = str2.charCodeAt(i);
        // Ascii
        // Mayusculas 
        if ((charCode >= 65) && (charCode <= 90)) {
          char2 = String.fromCharCode(((charCode - 65 - parseInt(num2) + 52) % 26) + 65);
        }
        // Minusculas 
        else if ((charCode >= 97) && (charCode <= 122)) {
          char2 = String.fromCharCode(((charCode - 97 - parseInt(num2) + 52) % 26) + 97);
        }
      }
      result += char2;
    }
    return result;
  },

  offsetEncode: (num3, str3) => {
    // Comienza función encode
    num3 = parseInt(num3);
    let result = '';
    // Se moverá de a una posición a lo largo de lapalabra entregada
    for (var i = 0; i < str3.length; i++) {
      let char3 = str3[i];
      // let charCode = char.charCodeAt(i);
      if (char3.match(/[A-Z]/i)) { // Si lo que ingresamos es letra 
        let charCode = str3.charCodeAt(i);
        // AsCii
        // Mayúsculas 
        if ((charCode >= 65) && (charCode <= 90)) {
          char3 = String.fromCharCode(((charCode - 65 + parseInt(num3)) % 26) + 65);
        }
        // Minusculas 
        else if ((charCode >= 97) && (charCode <= 122)) {
          char3 = String.fromCharCode(((charCode - 97 + parseInt(num3)) % 26) + 97);
        }
      }
      result += char3;
    }
    return result;
  },

  offsetDecode: (num4, str4) => {
    // Comienza función decode
    let result = '';
    num4 = parseInt(num4);

    for (var i = 0; i < str4.length; i++) {
      let char4 = str4[i];
      // let charCode = char.charCodeAt(i);
      if (char4.match(/[A-Z]/i)) { // Si es letra 
        let charCode = str4.charCodeAt(i);
        // Ascii
        // Mayusculas 
        if ((charCode >= 65) && (charCode <= 90)) {
          char4 = String.fromCharCode(((charCode - 65 - parseInt(num4) + 52) % 26) + 65);
        }
        // Minusculas 
        else if ((charCode >= 97) && (charCode <= 122)) {
          char4 = String.fromCharCode(((charCode - 97 - parseInt(num4) + 52) % 26) + 97);
        }
      }
      result += char4;
    }
    return result;
  },
};
