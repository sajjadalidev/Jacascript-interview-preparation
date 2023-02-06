// Facade Pattern

// this is  a normal way to this task for every function
// function getUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((res) => res.json());
// }

// function getUserPosts(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((res) => res.json());
// }

// getUsers().then((users) =>
//   users.forEach((user) => {
//     getUserPosts(user.id).then((posts) => {
//       console.log("user Name", user.name);
//       console.log("user Name", posts.length);
//     });
//   })
// );

// In Facade Pattern we extract complex/reusable code to some other file or made some general function which we can use in different scnerios

function getUsers() {
  return getFetch("https://jsonplaceholder.typicode.com/users");
}

function getUserPosts(userId) {
  return getFetch("https://jsonplaceholder.typicode.com/posts", {
    userId: userId,
  });
}

getUsers().then((users) =>
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log("user Name", user.name);
      console.log("number of Posts", posts.length);
    });
  })
);

//   Common Function
// function getFetch(url, params = {}) {
//   const queryString = Object.entries(params)
//     .map((param) => {
//       return `${param[0]} = ${param[1]}`;
//     })
//     .join("&");
//   return fetch(`${url}?${queryString}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((res) => res.json());
// }

// Now in future if we have to switch from fetch to axios we can easily do in this way:

function getFetch(url, params = {}) {
  return axios({
    url: url,
    method: "GET",
    params: params,
  }).then((res) => res.data);
}
