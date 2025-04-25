fetch("http://localhost:5000/todos/", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    todo: "따흐흐흑...",
    completed: false,w
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
