// 삭제

fetch("http://localhost:5000/todos/1", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => console.log(data));
