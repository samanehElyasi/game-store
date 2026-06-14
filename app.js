// Banner

const Bannertext = document.querySelector("#banner-text");

const text_change = ["Ps5", "Xbox", "Ps4"];

let current = 0;

function Textchange() {
  setInterval(() => {
    Bannertext.textContent = text_change[current];
    current = (current + 1) % text_change.length;
  }, 2000);
}
Textchange();

//         Light Dark Body        ////////

const sunEl = document.querySelector("#sun");
const moonEl = document.querySelector("#moon");

sunEl.addEventListener("click", () => {
  document.body.classList.remove("bg-color");
  document.body.classList.add("bg-colorlight");
  sunEl.classList.add("hidden");
  moonEl.classList.remove("hidden");

  localStorage.setItem("theme", "light");
});

moonEl.addEventListener("click", () => {
  document.body.classList.add("bg-color");
  document.body.classList.remove("bg-colorlight");

  moonEl.classList.add("hidden");
  sunEl.classList.remove("hidden");

  localStorage.setItem("theme", "dark");
});

const theme = localStorage.getItem("theme");

if (theme == "light") {
  document.body.classList.add("bg-colorlight");
  sunEl.classList.add("hidden");
  moonEl.classList.remove("hidden");
} else {
  document.body.classList.add("bg-color");
  moonEl.classList.add("hidden");
  sunEl.classList.remove("hidden");
}

//           Nav Bar        ///////

const MenuEl = document.querySelectorAll(".nav-header__products  a");

MenuEl.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const submenu = document.querySelector(".nav-header__product-name");

    item.classList.add("active");
  });
  item.addEventListener("mouseout", () => {
    item.classList.remove("active");
  });
});

const showhamburger = document.querySelector(".nav-header__hamburger");
const closehamburger = document.querySelector(".close-hamburger");
const openhamburger = document.querySelector(".open-hamburgermenu");

openhamburger.addEventListener("click", () => {
  showhamburger.classList.add("show");
});

closehamburger.addEventListener("click", () => {
  showhamburger.classList.remove("show");
});

/////                   Slider section                 /////

const cards = document.querySelectorAll("#cards img");
const cardtext = document.querySelector(".cards-text__change");
cards.forEach((card) => {
  card.addEventListener("click", function (e) {
    const clickitem = e.target;
    if (clickitem.tagName == "IMG") {
      const content = clickitem.dataset.name;
      let displaytext;
      switch (content) {
        case "hinako":
          displaytext = `
          سایلنت هیل اف (ژاپنی: サイレントヒル f هپبورن: Sairento Hiru f؟) یک
          بازی ویدئویی در سبک ترس و بقا است که توسط استودیوی مستقر در تایوان
          نئوباردز انترتینمنت توسعه یافته و به‌وسیلهٔ کونامی منتشر شده است.
          سایلنت هیل اف به عنوان یک نسخهٔ اسپین‌آف مستقل در مجموعه بازی‌های
          سایلنت هیل به‌شمار می‌رود،
          `;

          break;
        case "jin":
          displaytext = `
          تِکِن یا تیکن (به ژاپنی: 鉄拳، به انگلیسی: Tekken)، یک فرنچایز
          چندرسانه‌ای ژاپنی و مجموعه بازی ویدئویی به سبک مبارزه‌ای است که در
          ابتدا توسط شرکت نامکو و بعدها به‌وسیلهٔ شرکت باندای نامکو انترتینمنت
        ساخته و منتشر می‌شود  .`;
          break;
        case "dante":
          displaytext = `
          شیطان هم می‌گرید (به انگلیسی: Devil May Cry) یک بازی ویدئویی
                اکشن-ماجراجویی به صورت هک اند اسلش و هیجانی می‌باشد که در سال ۲۰۰۱
                توسط شرکت کپ‌کام برای کنسول پلی‌استیشن ۲ ساخته و عرضه گردید. توجه اصلی
                این بازی بر روی مبارزات با شمشیر می‌باشد، با این حال بازیباز پس از
                شکست دادن بعضی از دشمنان و باس‌های بازی، اسلحه و توانایی‌های جدیدی به
                دست می‌آورد که باعث بهبود حرکات چند ضرب قهرمان در مقابل دشمنان می‌شود.
          
          `;
          break;
        case "arthur":
          displaytext = `
          رد دد ردمپشن ۲ (به انگلیسی: Red Dead Redemption 2) یک بازی
          اکشن-ماجراجویی محصول سال ۲۰۱۸ است که به‌وسیلهٔ راک‌استار گیمز توسعه
          یافته و عرضه شده است. این بازی سومین عنوان در مجموعهٔ رد دد و
          پیش‌درآمدی بر بازی رد دد ریدمپشن به‌شمار می‌رود. داستان آن در بازنمودی
          تخیلی از ایالات متحده آمریکا در سال ۱۸۹۹ جریان دارد و ماجراهای آرتور
          مورگان را دنبال می‌کند`;
          break;
        case "asses":
          displaytext = `
          اساسینز کرید: سیندیکت (به انگلیسی: Assassin's Creed: Syndicate) یک
          بازی ویدئویی تاریخی در سبک اکشن-ماجراجویی و مخفی‌کاری است که به‌وسیلهٔ
          یوبی‌سافت کبک توسعه یافته و توسط یوبی‌سافت عرضه شده است.`;
          break;
        case "hero":
          displaytext = ` 
          میراث هاگوارتز (به انگلیسی: Hogwarts Legacy) یک بازی ویدئویی به سبک
          نقش‌آفرینی اکشن و جهان باز است که داستانش در دنیای جادوگری اواخر دهه
          ۱۸۸۰ میلادی روایت می‌شود. این بازی توسط آوالانچه سافت‌ور توسعه یافته و
          به‌وسیلهٔ سرگرمی تعاملی برادران وارنر منتشر شده‌است.`;
          break;

        default:
          break;
      }
      cardtext.textContent = displaytext;
    }
  });
});

const cardslider = document.querySelector(".cards");
const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
let counterslide = 0;

nextEl.addEventListener("click", nextSlide);
prevEl.addEventListener("click", prevSlide);

function nextSlide() {
  cardslider.scrollLeft += 100;
}
window.onload =()=>{
  cardslider.scrollLeft =0
}
nextSlide();
function prevSlide() {
  cardslider.scrollLeft -= 100;
}
prevSlide();

document.addEventListener("scroll", () => {
 
});


const slider =document.querySelector("#introduce_characters")
function checkScroll(){
   if (window.scrollY < 370) {
    slider.classList.add("actives")
  }
  else{
    slider.classList.remove("actives")
  }
}
window.addEventListener("scroll",checkScroll)
window.addEventListener("load",checkScroll)
checkScroll()