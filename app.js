let urlh = "https://picsum.photos/200";

let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let img = document.querySelector("body");

async function getsFacts() {
  try {
    let res = await fetch(urlh);
    //   let data = await res.json();
    console.log(res);

    let data = res.url;

    let bg = (img.style.backgroundImage = `url(${data})`);
    console.dir(bg);
  } catch (err) {
    console.log(err);
  }
}

btn.addEventListener("click", () => {
  getsFacts();
});
