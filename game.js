var tanya = true;
while (tanya) {
  // menangkap pilihan pleyer
  var p = prompt("Pilih : Gajah, Semut, Orang");

  // menangkap pilihan komputer
  var comp = Math.random();

  if ((comp < 0, 34)) {
    comp = "Gajah";
  } else if ((comp >= 0, 34 && comp < 0, 67)) {
    comp = "Orang";
  } else {
    comp = "Semut";
  }

  // menentiukan rustnya
  var hasil = "";
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "Gajah") {
    // if (comp == "Orang") {
    //   hasil = "MENANG";
    // } else {
    //   hasil = "KALAH";
    // }
    hasil = comp == "Orang" ? "MENANG" : "KALAH";
  } else if (p == "Orang") {
    hasil = comp == "Gajah" ? "KALAH" : "MENANG";
  } else if (p == "Semut") {
    hasil = comp == "Orang" ? " Kalah" : "MANANG";
  } else {
    hasil = "memasukan pilihan yang salah";
  }

  // menmpilkan hasil
  alert("kamu memilih :" + p + " dan komputer memilih" + comp + "\nmaka hasil : kamu " + hasil);

  tanya = confirm("Lagi");
}

alert("Terimaksih Sudah Bermain");
