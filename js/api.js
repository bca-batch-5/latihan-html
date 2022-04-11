// Method Request (Create - Read - Update - Delete)
// 1. methodnya POST: create / membuat suatu resource ke datasource
// 2. methodnya GET: read / ngambil resource dari suatu DB
// 3. methodnya PUT: update / memperbarui suatu resource dari DB
// 4. methodnya DELETE: delete / menghapus resource dari DB

// async - await get Data
// const fetchData = async () => {
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  getPostsCard(data);
  console.log(data);
}

async function fetchDataLocal() {
  const response = await fetch("user.json");
  const data = await response.json();
  getPosts(data);
  console.log("data", data);
}

fetchData();
fetchDataLocal();

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("data", data);
//     getPosts(data);
//   });

function getPosts(dataPosts) {
  let output = "";
  console.log(dataPosts);
  for (let index = 0; index < 5; index++) {
    const element = dataPosts[index];
    output += `
      <tr>
        <td>${index + 1}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td>${element.phone}</td>
        <td>${element.address.street}</td>
      </tr>
    `;
  }

  // dataPosts.forEach((data) => {
  //   output += `
  //     <tr>
  //       <td>${data.userId}</td>
  //       <td>${data.id}</td>
  //       <td>${data.title}</td>
  //       <td>${data.body}</td>
  //     </tr>
  //   `;
  // });

  const bodyTable = document.getElementById("t-post");
  bodyTable.innerHTML = output;
}

function getPostsCard(dataPosts) {
  let output = "";
  console.log(dataPosts);
  dataPosts.forEach((data) => {
    output += `
    <div class="card-body"">
      <h5 class="card-title">${data.title}</h5>
      <p class="card-text">${data.body}</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
    `;
  });

  const bodyTable = document.getElementById("card-post");
  bodyTable.innerHTML = output;
}
