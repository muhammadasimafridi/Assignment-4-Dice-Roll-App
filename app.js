let img = document.querySelector("img");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let randomNum = Math.ceil(Math.random() * 6);
    img.src = `Pics/dice${randomNum}.png`;
    console.log(randomNum);
});
