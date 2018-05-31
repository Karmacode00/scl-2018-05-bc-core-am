window.cipher = {
   encode: (num,str) => {
    /* Acá va tu código */
      num = parseInt(num);
      let result = "";
      
      for (var i = 0; i < str.length; i++){
        let char = str[i];
        let charCode = char.charCodeAt(i);
       
    
        
        if ( char.match(/[A-Z]/i) ){ // Si es letra 
        
          let charCode = str.charCodeAt(i);
    
          // Uppercase 
          if ((charCode >= 65) && (charCode <= 90)) {
            char = String.fromCharCode(((charCode - 65 + num) % 26) + 65);
          }
          // Lowercase 
          else if ((charCode >= 97) && (charCode <= 122)) {
            char = String.fromCharCode(((charCode - 97 + num) % 26) + 97);
          }
          
        }
    
         result += char;

      }

      return result
    
     

    }

  }

  window.decipher = {
  decode: (num,str) => {

    let result = "";
    num = parseInt(num);

    for (var i = 0; i < str.length; i++){
      let char = str[i];
      let charCode = char.charCodeAt(i);
     
  
      
      if ( char.match(/[A-Z]/i) ){ // Si es letra 
      
        let charCode = str.charCodeAt(i);
  
        // Uppercase 
        if ((charCode >= 65) && (charCode <= 90)) {
          char = String.fromCharCode(((charCode - 65 - num) % 26) + 65);
        }
        // Lowercase 
        else if ((charCode >= 97) && (charCode <= 122)) {
          char = String.fromCharCode(((charCode - 97 - num) % 26) + 97);
        }
        
      }
  
       result += char;

    }

    return result
  



  }
  }
