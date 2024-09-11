const raw = "";

const requestOptions = {
  method: "GET",
  body: raw,
  redirect: "follow"
};

fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));