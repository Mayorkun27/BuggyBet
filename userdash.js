// Initialize Swiper
// var swiper = new Swiper(".mySwiper", {
//     // Set initial number of slides per view
//     slidesPerView: 3,
//     // Responsive breakpoints
//     breakpoints: {
//         // When window width is <= 768px
//         768: {
//             slidesPerView: 1,
//         },
//         // When window width is <= 992px
//         992: {
//             slidesPerView: 2,
//         },
//     },
//     spaceBetween: 30,
//     autoplay: {
//         delay: 6000,
//     },
//     loop: true,
// });


const icons = document.querySelectorAll("#star");

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        if (icon.classList.contains("ti-star")) {
            icon.classList.remove("ti-star");
            icon.classList.add("ti-star-filled");
            icon.style.color = "#E3951E";
            // Add item to favorites in local storage
            localStorage.setItem(icon.id, "favorite");
        } else if (icon.classList.contains("ti-star-filled")) {
            icon.classList.remove("ti-star-filled");
            icon.classList.add("ti-star");
            icon.style.color = "#fff";
            // Remove item from favorites in local storage
            localStorage.removeItem(icon.id);
        }
    });
});

// Check local storage for previously favorited items and update the UI
document.addEventListener("DOMContentLoaded", () => {
    icons.forEach(icon => {
        if (localStorage.getItem(icon.id) === "favorite") {
            icon.classList.remove("ti-star");
            icon.classList.add("ti-star-filled");
            icon.style.color = "#E3951E";
        }
    });
});

const toggle1 = document.querySelector("#toggle1");
const toggle2 = document.querySelector("#toggle2");
let sidebar = document.querySelector(".sidebar")

toggle1.addEventListener("click", ()=> {
    sidebar.style.display = "block";
})
toggle2.addEventListener("click", ()=> {
    sidebar.style.display = "none";
})


let cog = document.querySelector(".cog")

cog.addEventListener("click",()=>{
const content = document.querySelector(".menu")

const expanded = content.style.display === 'flex';

content.style.display = expanded ? 'none' : 'flex';
})

const secret1 = document.querySelector("#secret1");
const visibility1 = document.querySelector("#visibility1");
visibility1.addEventListener("click", () => {

    visibility1.classList.toggle("ti-eye");
    visibility1.classList.toggle("ti-eye-off");
    let text = secret1.textContent;
        
    if (visibility1.classList.contains("ti-eye")) {
        text = "******";
    } else if (visibility1.classList.contains("ti-eye-off")) {
        text = "816964";
    };

    secret1.innerHTML = text;
});

const secret2 = document.querySelector("#secret2");
const visibility2 = document.querySelector("#visibility2");
visibility2.addEventListener("click", () => {

    visibility2.classList.toggle("ti-eye");
    visibility2.classList.toggle("ti-eye-off");
    let text = secret2.textContent;
        
    if (visibility2.classList.contains("ti-eye")) {
        text = " ******";
    } else if (visibility2.classList.contains("ti-eye-off")) {
        text = " 2000.00";
    };

    secret2.innerHTML = text;
});

const display = document.querySelector("#display");
function appendToDisplay(value) {
    display.value += value;
    let added = eval(display.value + value);
    display.value += added
};

function addToDisplay(num) {
    let newStake = num + display.value;
    eval(newStake)
    display.value = newStake;
};

function popFromDisplay() {
    display.value = display.value.toString().slice(0, -1);
};

function clearAllDisplay() {
    display.value = "";
};

display.addEventListener("focus", () => {
    let betslipStaking = document.querySelector(".betslip-staking")
    betslipStaking.classList.remove("d-none");
});

let stakeConfirm = document.querySelector("#stakeConfirm")
stakeConfirm.addEventListener("click", () => {
    let betslipStaking = document.querySelector(".betslip-staking")
    betslipStaking.classList.add("d-none");
});

const betSlip = document.querySelector("#betSlip");
let openBetSlip = document.querySelector("#openBetSlip")
openBetSlip.addEventListener("click", () => {
    openBetSlip.classList.toggle("openBetSlip")
    openBetSlip.classList.toggle("openBetSlip2");

    if (openBetSlip.classList.contains("openBetSlip")) {
        betSlip.style.bottom = "-60%"
    } else if (openBetSlip.classList.contains("openBetSlip2")) {
        betSlip.style.bottom = "0%"
    }
})