// console.log("test dari external file");

var globalVariable = "variabel global yang bisa diubah nilainya";
// console.log("teks");
console.log("globalVariable", globalVariable);

globalVariable = "teksnya diganti untuk global variable";
console.log("globalVariable", globalVariable);
console.log(typeof globalVariable);

let email = "femiliapm@gmail.com";
console.log("email", email);

if (email === "femiliapm1@gmail.com") {
  email = "test@gmail.com";
  console.log("newEmail", email);
} else {
  console.log("error, email tidak cocok");
}

const birthDate = "20/02/2015";
console.log("birthDate", birthDate);
console.log("typeBirthDate", typeof birthDate);

// birthDate = '12/02/2000'
// console.log("newBirthDate", birthDate); // akan menimbulkan error, karena type variable const

function penjumlahanDuaAngka(angka1, angka2) {
  const bil1 = angka1;
  const bil2 = angka2;
  const res = bil1 + bil2;
  console.log("hasil penjumlahan");
  console.log(res);
  console.log(typeof res);
}

penjumlahanDuaAngka("10", 9);

console.log("Contoh penerapan for-loop");
let nilaiAwal = 5;
for (nilaiAwal; nilaiAwal < 10; nilaiAwal++) {
  console.log(nilaiAwal);
}
console.log(nilaiAwal);

one();

function one() {
  console.log("first");

  setTimeout(() => {
    two();
  }, 0);

  three();
}

function two() {
  console.log("second");
}

function three() {
  console.log("third");
}

// tambahan materi
// promise
// callback
// async-await
// sync
