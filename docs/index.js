
window.onload = () => {
  // Botones
  const btn1 = document.getElementById('button-encrypt');
  const btn2 = document.getElementById('button-decrypt');
  const btn3 = document.getElementById('button-clear');
  const btn4 = document.getElementById('btn-encodeWithOffset');
  const btn5 = document.getElementById('btn-decodeWithOffset');
  // Evento click texto a encode
  btn1.addEventListener('click', () => {
    let str = document.getElementById('text').value;
    let num = document.getElementById('offset').value;
    const result = window.cipher.encode(num, str);
    document.getElementById('output').value = result;
  });
  // Evento click a decode
  btn2.addEventListener('click', () => {
    let str2 = document.getElementById('text').value;
    let num2 = document.getElementById('offset').value;
    const result = window.cipher.decode(num2, str2);
    document.getElementById('output').value = result;
  });
  // Evento click a encode offset
  btn4.addEventListener('click', () => {
    let str3 = document.getElementById('text').value;
    let num3 = '6';
    const result = window.cipher.offsetEncode(num3, str3);
    document.getElementById('output').value = result;
  });
  // Evento click a decode offset
  btn5.addEventListener('click', () => {
    let str4 = document.getElementById('text').value;
    let num4 = '6';
    const result = window.cipher.offsetDecode(num4, str4);
    document.getElementById('output').value = result;
  });
  // Evento click limpiar
  btn3.addEventListener('click', () => {
    document.getElementById('text').value = '';
    document.getElementById('output').value = '';
  });
};

