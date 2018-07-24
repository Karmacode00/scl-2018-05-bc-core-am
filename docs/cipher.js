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
  }
};

/* Offset
createCipherWithOffset: (num) => ({
  // Nuevo método que recibe a través de un input el string que a su vez llama al método encode pasándole ambos parámetros ya obtenidos (str y offset), retornando finalmente el resultado del comportamiento del método encode 
  
  encode: (str) => cipher.encode(str, num),
  // Nuevo método que recibe a través de un input el string que a su vez llama al método decode pasándole ambos parámetros ya obtenidos (str y offset), retornando finalmente el resultado del comportamiento del método decode 
  decode: (str2) => cipher.decode(str2, num2)
});

*/