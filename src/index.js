/* Acá va tu código */

window.onload = () => {
    const btn1 = document.getElementById("button-encrypt");
    const btn2 = document.getElementById("button-decrypt");
    const btn3 = document.getElementById("button-clear");

    btn1.addEventListener("click", () => {
      let str = document.getElementById("text").value;
      let num = document.getElementById("offset").value;
      const result = window.cipher.encode(num, str);
      document.getElementById("output").value = result;
    });
    
    btn2.addEventListener("click", () => {
       let str = document.getElementById("text").value;
        let num = document.getElementById("offset").value;
        const result = window.decipher.decode(num, str);
        document.getElementById("output").value = result;

    });
    
    btn3.addEventListener("click", () => {
      document.getElementById("text").value = "";
      document.getElementById("output").value = "";
       
    });

};  

