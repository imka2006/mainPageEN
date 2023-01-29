const burger = document.querySelector(".burger")
const burgerMenu = document.querySelector(".burger-menu")
const body = document.querySelector("body")

burgerMenu.addEventListener("click", () => {
    burger.classList.toggle("active")
    if (burger.classList.contains("active")) {
        body.style.overflow = "hidden"
    } else {
        body.style.overflow = "unset"
    }
})


const items = [
    {
        id:0,
        img:"img1",
        name:"Create Tournaments",
        descr:"Create your own unique tournament games and win real prizes!",
        vs:false,
    },
    {
        id:1,
        img:"img2",
        name:"Teammate Search",
        descr:"Join our community to find your best teammates and make the best team!",
        vs:false,
    },
    {
        id:2,
        img:"img3",
        name:"Coach Search",
        descr:"Not sure how to get started? No problem, you can find the best coach for you!",
        vs:false,
    },
    {
        id:3,
        img:"img4",
        name:"The opportunity to become a PRO",
        descr:"Show what you can do with PUSK!",
        vs:true,
    },

]

const mainWrapper = document.querySelector(".main-wrapper")

for (let i = 0; i < items.length; i++) {
    mainWrapper.innerHTML += `
    <div class="main-content">
        <div class="main-block">
            <img src="./img/main/${items[i].img}.svg" alt="img" class="main-img">
            <div class="main-info">
                <h2 class="main-name">${items[i].name}</h2>
                <p class="main-descr">${items[i].descr}</p>
            </div>
        </div>
        <img src="./img/main/shere.svg" alt="shere" class="main-shere">
    </div>
    `;
}