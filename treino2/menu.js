
let show = true;

const menuSection = documento.querySeletor(".menu-section")

const  menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () =>{
    document.body.style.overflow =show ? "hidden" : "inicial";
    menuSection.classList.toggle("on", show)
    show =! show;
})