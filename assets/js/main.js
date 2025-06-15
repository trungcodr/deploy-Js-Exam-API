const currentTypeEl = document.querySelector("#currentType");
const listEl = document.querySelector("#list");
const postsBtn = document.querySelector("#postsBtn");
const photosBtn = document.querySelector("#photosBtn");
const albumsBtn = document.querySelector("#albumsBtn");

// load data
const loadData = async (type) => {
  currentTypeEl.textContent = type;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${type}`
    );
    const data = await response.json();
    renderList(data);
    setActive(type);
  } catch (error) {
    console.error("Lỗi tải dữ liệu:", error);
  }
};

// render list
const renderList = (data) => {
  listEl.innerHTML = data.map((item) => `<li>${item.title}</li>`).join("");
};

// set active button
const setActive = (type) => {
  postsBtn.className = "";
  photosBtn.className = "";
  albumsBtn.className = "";
  if (type === "posts") postsBtn.className = "active";
  if (type === "photos") photosBtn.className = "active";
  if (type === "albums") albumsBtn.className = "active";
};

// add click
postsBtn.addEventListener("click",() => {
    loadData("posts");
});

photosBtn.addEventListener("click", ()=>{
    loadData("photos");
});

albumsBtn.addEventListener("click", () =>{
    loadData("albums");
});
// Load mac dinh posts
loadData("posts");
