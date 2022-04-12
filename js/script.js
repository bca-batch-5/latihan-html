// soal 1
const name = "Femilia";
const age = 25;
const study = "Sarjana";
const langProg = "HTML, CSS, JS, Java";

function biodata(nama, umur, pend, progr) {
  console.log("Nama: " + nama);
  console.log(`Umur: ${umur}`);
  console.log(`Pendidikan Terakhir: ${pend}`);
  console.log(`Pemrograman yang pernah dipelajari: ${progr}`);
}

// biodata(name, age, study, langProg);

// soal 2

// soal 3
function evenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} adalah bilangan genap`);
  } else {
    console.log(`${num} adalah bilangan ganjil`);
  }
}

// evenOdd(29);

// soal 4
function cekHarga(harga) {
  if (harga >= 25000) {
    console.log("Mahal");
  } else if (harga > 10000) {
    console.log("Sedang");
  } else if (harga > 0 && harga <= 10000) {
    console.log("Murah");
  } else {
    console.log("Input salah");
  }
}

// cekHarga(-210000);

// soal 5 : mencetak angka 10-15
// for (let i = 10; i <= 15; i++) {
//   console.log(i);
// }

let i = 10;
// while (i <= 15) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= 15);

// soal 6
function cekOngkir(jarak) {
  if (jarak > 0 && jarak <= 2) {
    let ongkosKirim = 5000;
    return ongkosKirim;
  } else if (jarak > 2) {
    let selisihJarak = jarak - 2;
    ongkosKirim = 3000 * selisihJarak;
    let totalOngkir = 5000 + ongkosKirim;
    return totalOngkir;
  } else {
    return "jarak tidak valid";
  }
}

// console.log(cekOngkir(-5));
// 5000 + 9000 = 14000

// soal 7
// ketika bilangannya kelipatan 10, yg tampil nama saya
function fazztrack(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fazztrack");
    } else if (i % 10 == 0) {
      console.log("femil");
    } else if (i % 3 == 0) {
      console.log("fazz");
    } else if (i % 5 == 0) {
      console.log("track");
    } else {
      console.log(i);
    }
  }
}

// fazztrack(30);

// soal 8
function printSegitiga(num) {
  let hasil = "";
  // for (let i = num; i > 0; i--) {
  for (let i = 0; i < num; i++) {
    // for (let j = i; j > 0; j--) {
    for (let j = 0; j <= i; j++) {
      hasil += "* ";
    }
    hasil += "\n";
  }

  console.log(hasil);
}

// printSegitiga(5);

// soal 9
function printSquare(num) {
  let hasil = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i == 0 || i == num - 1 || j == 0 || j == num - 1) {
        hasil += "* ";
      } else {
        hasil += "  ";
      }
    }
    hasil += "\n";
  }

  console.log(hasil);
}

printSquare(5);
