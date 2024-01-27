const form = document.querySelector("form");
const addPost = document.querySelector(".create-html");
const forumList = document.querySelector(".forums");
const inputValue = document.querySelector(".html-value");

const forumPost = JSON.parse(localStorage.getItem("post")) || [];

forumPost.forEach((item) => {
  renderHTML(item);
});

function renderHTML(value) {
  const template = `
    <a href="" class="forum-post">
        <h4>${value.name}</h4>
        <p>Chưa có tin nhắn nào</p>
     </a>
          `;
  forumList.insertAdjacentHTML("beforeend", template);
}

addPost.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className) {
    const value = inputValue.value;
    console.log(value);
    if (value) {
      // const id = Math.random().toString(16).slice(2);
      const data = { name: value };
      renderHTML(data);

      forumPost.push(data);
      localStorage.setItem("post", JSON.stringify(forumPost));
      e.target.previousElementSibling.value = "";
      e.target.previousElementSibling.focus();
    } else {
    }
  }
});
