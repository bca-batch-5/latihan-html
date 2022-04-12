// dijalankan secara sync
// console.log("sync proses");
// console.log("baris pertama");
// console.log("baris kedua");
// console.log("baris ketiga");

// dijalankan secara async
// console.log("async proses");
// setTimeout(() => {
//   console.log("baris pertama");
// }, 2000);
// setTimeout(() => {
//   console.log("baris kedua");
// }, 3000);
// setTimeout(() => {
//   console.log("baris ketiga");
// }, 1000);

// callback
// function fungsi1(x) {
//   return x
// }

// function fungsi2(y) {
//   // kode yg dituliskan
// }

// fungsi2(fungsi1(5))

const users = [
  {
    name: "Femilia",
    email: "femiliapm@gmail.com",
  },
  {
    name: "Putri",
    email: "femiliapm2@gmail.com",
  },
];

// callback
// function createUser(user, callback) {
//   setTimeout(() => {
//     users.push(user);
//     callback();
//   }, 3000);
// }

// promise
function createUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}

function getUsers() {
  setTimeout(() => {
    users.forEach((user) => {
      console.log(user);
    });
  }, 1000);
}

const newUser = {
  name: "Mayranti",
  email: "femiliapm3@gmail.com",
};

// pemanggilan function callback
// createUser(newUser, getUsers);

// pemanggilan function promise
// createUser(newUser)
//   .then(getUsers)
//   .catch((error) => console.log(error));

// pemanggilan function promise dengan async-await
const postUser = async () => {
  try {
    await createUser(newUser);
    getUsers();
  } catch (error) {
    console.log(error);
  }
};

postUser();
// getUsers();
