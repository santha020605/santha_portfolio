const menuIcon =  document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click",()=>{
    navLinks.classList.toggle("active");

    const icon = menuIcon.querySelector("i");
       if(navLinks.classList.contains("active")){
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        }
       else{
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
})
document.addEventListener('click', (e) => {
  if (!menuIcon.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
    menuIcon.querySelector('i').classList.remove('fa-times');
    menuIcon.querySelector('i').classList.add('fa-bars');
  }
})