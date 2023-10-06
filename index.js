const headTitle = document.getElementById("header-title");
headTitle.style.borderBottom = "solid 2px #333";
const items = document.getElementsByClassName("list-group-item");
for (let i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "900";
  items[i].style.color = "green";
}
