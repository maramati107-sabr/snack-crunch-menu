// رقم الواتساب التجريبي للمطعم (يمكن تغييره برقم صاحب المطعم لاحقاً)
const RESTAURANT_WHATSAPP = "218910000000";

const menuItems = [
  // قسم البيتزا (أحجام: صغيرة - متوسطة - كبيرة)
  {
    id: 1,
    category: "pizza",
    tag: "بيتزا",
    name: "بيتزا مارغريتا",
    desc: "عجينة إيطالية هشة مع صلصة الطماطم الغنية وجبنة الموزاريلا الذائبة.",
    image: "images/pizza-margherita.jpg",
    type: "sizes",
    sizes: [
      { label: "صغيرة", price: 15 },
      { label: "متوسطة", price: 22 },
      { label: "كبيرة", price: 30 }
    ]
  },
  {
    id: 2,
    category: "pizza",
    tag: "بيتزا",
    name: "بيتزا بالدجاج",
    desc: "قطع دجاج متبلة ومشوية مع صوص الباربكيو أو الرانش وجبنة موزاريلا.",
    image: "images/pizza-chicken.jpg",
    type: "sizes",
    sizes: [
      { label: "صغيرة", price: 20 },
      { label: "متوسطة", price: 28 },
      { label: "كبيرة", price: 36 }
    ]
  },
  {
    id: 3,
    category: "pizza",
    tag: "بيتزا",
    name: "بيتزا بالتن",
    desc: "تونة فاخرة مع شرائح البصل الأحمر، الزيتون، وجبنة الموزاريلا.",
    image: "images/pizza-tuna.jpg",
    type: "sizes",
    sizes: [
      { label: "صغيرة", price: 18 },
      { label: "متوسطة", price: 25 },
      { label: "كبيرة", price: 33 }
    ]
  },
  {
    id: 4,
    category: "pizza",
    tag: "بيتزا",
    name: "بيتزا بالخضرة",
    desc: "تشكيلة خضروات طازجة (فلفل ألوان، بصل، زيتون، طماطم) مع الموزاريلا.",
    image: "images/pizza-veggie.jpg",
    type: "sizes",
    sizes: [
      { label: "صغيرة", price: 16 },
      { label: "متوسطة", price: 23 },
      { label: "كبيرة", price: 31 }
    ]
  },

  // قسم البرغر (أحجام: صغير - كبير)
  {
    id: 5,
    category: "burger",
    tag: "برغر",
    name: "برغر لحم كلاسيك",
    desc: "شريحة لحم بقري مشوية مع جبنة شيدر ذائبة، خس، طماطم، وصوص كرانش الخاص.",
    image: "images/burger-beef.jpg",
    type: "sizes",
    sizes: [
      { label: "صغير", price: 14 },
      { label: "كبير (دبل)", price: 22 }
    ]
  },
  {
    id: 6,
    category: "burger",
    tag: "برغر",
    name: "برغر دجاج كرسبي",
    desc: "صدر دجاج مقرمش بتتبيلة سناك كرانش مع الجبنة والخس وصوص الثومية.",
    image: "images/burger-chicken.jpg",
    type: "sizes",
    sizes: [
      { label: "صغير", price: 13 },
      { label: "كبير (دبل)", price: 20 }
    ]
  },

  // قسم الشاورما (بدون أحجام + إضافات اختيارية)
  {
    id: 7,
    category: "shawarma",
    tag: "شاورما",
    name: "شاورما دجاج",
    desc: "شرائح شاورما دجاج متبلة على السيخ مع ثومية، مخلل، وبطاطا في خبز محمص.",
    image: "images/shawarma-chicken.jpg",
    type: "addons",
    basePrice: 12,
    addons: [
      { name: "زيادة جبنة", price: 2 },
      { name: "زيادة صوص ثومية", price: 1 },
      { name: "زيادة بطاطا", price: 2 }
    ]
  },
  {
    id: 8,
    category: "shawarma",
    tag: "شاورما",
    name: "شاورما لحم",
    desc: "شرائح لحم شاورما طرية مع صوص الطحينة، بصل، بقدونس، وجبنة ذائبة.",
    image: "images/shawarma-beef.jpg",
    type: "addons",
    basePrice: 15,
    addons: [
      { name: "زيادة جبنة", price: 2 },
      { name: "زيادة صوص", price: 1 },
      { name: "زيادة بطاطا", price: 2 }
    ]
  },

  // قسم البروستد والستربس
  {
    id: 9,
    category: "meals",
    tag: "وجبات مقرمشة",
    name: "وجبة بروستد عائلية",
    desc: "قطع دجاج بروستد مقرمشة تقدم مع بطاطا مقلية، خبز، وصوصات متنوعة.",
    image: "images/broasted.jpg",
    type: "fixed",
    price: 35
  },
  {
    id: 10,
    category: "meals",
    tag: "وجبات مقرمشة",
    name: "وجبة ستربس دجاج",
    desc: "أصابع صدور دجاج مقرمشة بدون عظم مع بطاطا مقلية و3 صوصات غمس.",
    image: "images/strips.jpg",
    type: "fixed",
    price: 24
  },

  // قسم المقبلات
  {
    id: 11,
    category: "sides",
    tag: "مقبلات",
    name: "بطاطا مقلية مقرمشة",
    desc: "بطاطا ذهبية مقرمشة تقدم ساخنة مع الكاتشب.",
    image: "images/fries.jpg",
    type: "sizes",
    sizes: [
      { label: "صغيرة", price: 6 },
      { label: "كبيرة", price: 10 }
    ]
  },
  {
    id: 12,
    category: "sides",
    tag: "مقبلات",
    name: "بطاطا بالجبنة والصوص",
    desc: "بطاطا مقلية مغطاة بصوص الجبنة الشيدر الساخن وصوص كرانش.",
    image: "images/cheese-fries.jpg",
    type: "fixed",
    price: 13
  },

  // قسم المشروبات
  {
    id: 13,
    category: "drinks",
    tag: "مشروبات",
    name: "مشروبات غازية مثلجة",
    desc: "بيبسي، سفن أب، أو ميرندا باردة ومنعشة.",
    image: "images/soda.jpg",
    type: "fixed",
    price: 4
  },
  {
    id: 14,
    category: "drinks",
    tag: "مشروبات",
    name: "عصائر طبيعية باردة",
    desc: "عصير مانجو، ليمون بالنعناع، أو بطيخ مثلج طازج.",
    image: "images/juices.jpg",
    type: "fixed",
    price: 8
  }
];

const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".cat-btn");
const emptyMessage = document.getElementById("emptyMessage");

let currentCategory = "all";
let currentSearch = "";

function renderMenu() {
  menuGrid.innerHTML = "";

  const filtered = menuItems.filter((item) => {
    const matchesCat = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch =
      item.name.includes(currentSearch) || item.desc.includes(currentSearch);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    emptyMessage.style.display = "block";
    return;
  } else {
    emptyMessage.style.display = "none";
  }

  filtered.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    // السعر الابتدائي
    let initialPrice =
      item.type === "sizes"
        ? item.sizes[0].price
        : item.type === "addons"
        ? item.basePrice
        : item.price;

    // بناء قسم الخيارات (أحجام أو إضافات)
    let optionsHTML = "";
    if (item.type === "sizes") {
      optionsHTML = `
        <div class="options-label">اختر الحجم:</div>
        <div class="size-group">
          ${item.sizes
            .map(
              (s, idx) => `
            <button type="button" class="size-btn ${idx === 0 ? "active" : ""}" 
              data-price="${s.price}" data-label="${s.label}">
              ${s.label}
            </button>`
            )
            .join("")}
        </div>
      `;
    } else if (item.type === "addons") {
      optionsHTML = `
        <div class="options-label">إضافات اختيارية:</div>
        <div class="addons-group">
          ${item.addons
            .map(
              (ad) => `
            <div class="addon-item">
              <label>
                <input type="checkbox" data-addon-name="${ad.name}" data-addon-price="${ad.price}" />
                <span>${ad.name}</span>
              </label>
              <span class="addon-cost">+${ad.price} د.ل</span>
            </div>`
            )
            .join("")}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="card-img-wrap">
        <span class="card-tag">${item.tag}</span>
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <div class="card-header">
          <h3 class="card-title">${item.name}</h3>
          <span class="card-price">${initialPrice} د.ل</span>
        </div>
        <p class="card-desc">${item.desc}</p>
        ${optionsHTML}
        <button type="button" class="order-btn">
          <span>اطلب عبر واتساب</span>
          <span>📲</span>
        </button>
      </div>
    `;

    // تفاعل تغيير الحجم
    if (item.type === "sizes") {
      const sizeBtns = card.querySelectorAll(".size-btn");
      const priceEl = card.querySelector(".card-price");
      sizeBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          sizeBtns.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          priceEl.textContent = `${btn.dataset.price} د.ل`;
        });
      });
    }

    // تفاعل إضافات الشاورما
    if (item.type === "addons") {
      const checkboxes = card.querySelectorAll('input[type="checkbox"]');
      const priceEl = card.querySelector(".card-price");
      checkboxes.forEach((cb) => {
        cb.addEventListener("change", () => {
          let total = item.basePrice;
          checkboxes.forEach((box) => {
            if (box.checked) total += Number(box.dataset.addonPrice);
          });
          priceEl.textContent = `${total} د.ل`;
        });
      });
    }

    // زر الطلب عبر الواتساب
    const orderBtn = card.querySelector(".order-btn");
    orderBtn.addEventListener("click", () => {
      let details = "";
      let finalPrice = card.querySelector(".card-price").textContent;

      if (item.type === "sizes") {
        const activeSize = card.querySelector(".size-btn.active");
        details = ` (الحجم: ${activeSize.dataset.label})`;
      } else if (item.type === "addons") {
        const selectedAddons = Array.from(
          card.querySelectorAll('input[type="checkbox"]:checked')
        ).map((box) => box.dataset.addonName);
        if (selectedAddons.length > 0) {
          details = ` (إضافات: ${selectedAddons.join("، ")})`;
        }
      }

      const message = `مرحباً سناك كرانش 👋\nأرغب في طلب:\n• ${item.name}${details}\n• السعر: ${finalPrice}`;
      const url = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });

    menuGrid.appendChild(card);
  });
}

// تصفية الأقسام
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    renderMenu();
  });
});

// البحث الفوري
searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value.trim();
  renderMenu();
});

// التشغيل الأول
renderMenu();