
window.onload = () => {
    //Botones
    const btn1 = document.getElementById("button-encrypt");
    const btn2 = document.getElementById("button-decrypt");
    const btn3 = document.getElementById("button-clear");
    //Evento click texto a encode
    btn1.addEventListener("click", () => {
      let str = document.getElementById("text").value;
      let num = document.getElementById("offset").value;
      const result = window.cipher.encode(num, str);
      document.getElementById("output").value = result;
    });
    //Evento click a decode
    btn2.addEventListener("click", () => {
       let str2 = document.getElementById("text").value;
        let num2 = document.getElementById("offset").value;
        const result = window.cipher.decode(num2, str2);
        document.getElementById("output").value = result;
    });
    //Evento click limpiar
    btn3.addEventListener("click", () => {
      document.getElementById("text").value = "";
      document.getElementById("output").value = "";     
    });
};  

