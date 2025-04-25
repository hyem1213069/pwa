// 수정

fetch("http://localhost:5000/todos/3", {
  method: "PUT",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    todo: "아사직전임;;",
    completed: false,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
