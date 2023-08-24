//* Selectors
const topics_list_btn = document.querySelectorAll(".topics-list-btn");
const topics_list_open = document.querySelectorAll(".topics-list-open");
const faq_list_btn = document.querySelectorAll(".faq-list-btn");
const faq_list_open = document.querySelectorAll(".faq-list-open");
const click_btn_menu = document.querySelector(".click-btn-menu");
const menu_phone = document.querySelector(".menu-phone");

//* Topics
topics_list_btn.forEach((item, index) => {
  item.addEventListener("click", () =>{
    let isAgree = item.classList.contains("active");
    let list_content = item.nextElementSibling;
    if(isAgree){
      item.classList.remove("active");
      list_content.style.display = "none";
      item.style.borderRadius = "5px";
      topics_list_open[index].classList.remove("fa-chevron-up");
      topics_list_open[index].classList.add("fa-chevron-down");
    }else {
      item.classList.add("active");
      item.style.borderRadius = "5px 5px 0 0";
      list_content.style.display = "block";
      topics_list_open[index].classList.remove("fa-chevron-down");
      topics_list_open[index].classList.add("fa-chevron-up");
    }
  })
})

//* Faq
faq_list_btn.forEach((item, index) => {
  item.addEventListener("click", () =>{
    let isAgree = item.classList.contains("active");
    let list_content = item.nextElementSibling;
    if(isAgree){
      item.classList.remove("active");
      list_content.style.display = "none";
      item.style.borderRadius = "5px";
      faq_list_open[index].classList.remove("fa-chevron-up");
      faq_list_open[index].classList.add("fa-chevron-down");
    }else {
      item.classList.add("active");
      item.style.borderRadius = "5px 5px 0 0";
      list_content.style.display = "block";
      faq_list_open[index].classList.remove("fa-chevron-down");
      faq_list_open[index].classList.add("fa-chevron-up");
    }
  })
})

//* Footer
let footer = document.querySelector("#footer-text");
let date = new Date();
footer.innerHTML = `&copy; Copyright Reserved ${date.getFullYear()}`

//* Responsive - Menu
click_btn_menu.addEventListener("click", () => {
  let isAgree = menu_phone.classList.contains("active");
  if (isAgree) {
      menu_phone.style.display = "none";
      menu_phone.classList.remove("active");
      click_btn_menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
      click_btn_menu.style.backgroundColor = "rgb(0, 205, 0)";
  } else {
      menu_phone.style.display = "block";
      menu_phone.classList.add("active");
      click_btn_menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
      click_btn_menu.style.backgroundColor = "transparent";
  }
})