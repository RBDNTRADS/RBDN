document.addEventListener("DOMContentLoaded", () => {
  const chapterMenu = document.querySelector(".chapter-menu");
  const chapterToggle = chapterMenu.querySelector(".chapter-toggle");
  const chapterContent = chapterMenu.querySelector(".chapter-content");
  const prevChapter = chapterMenu.querySelector("#prev-chapter");
  const nextChapter = chapterMenu.querySelector("#next-chapter");
  const chapterSelect = chapterMenu.querySelector("#chapter-select");

  const toggleChapterContent = () => {
    const isExpanded = chapterToggle.getAttribute("aria-expanded") === "true";
    chapterToggle.setAttribute("aria-expanded", !isExpanded);
    chapterContent.style.display = isExpanded ? "none" : "block";
    chapterToggle.textContent = isExpanded
      ? "Ouvrir le menu des chapitres"
      : "Fermer le menu des chapitres";
  };

  const updateChapterNavigation = () => {
    const currentIndex = chapterSelect.selectedIndex;
    prevChapter.disabled = currentIndex <= 0;
    nextChapter.disabled = currentIndex >= chapterSelect.options.length - 1;
  };

  const changeChapter = (delta) => {
    chapterSelect.selectedIndex += delta;
    chapterSelect.dispatchEvent(new Event("change"));
  };

  const loadChapter = (chapterNumber) => {
    console.log(`Chargement du chapitre ${chapterNumber}`);
  };

  chapterToggle.addEventListener("click", toggleChapterContent);

  prevChapter.addEventListener("click", () => changeChapter(-1));
  nextChapter.addEventListener("click", () => changeChapter(1));

  chapterSelect.addEventListener("change", () => {
    const selectedChapter = chapterSelect.value;
    loadChapter(selectedChapter);
    updateChapterNavigation();
  });

  // Initialisation
  chapterToggle.setAttribute("aria-expanded", "false");
  updateChapterNavigation();
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

function redirectToChapter() {
  var select = document.getElementById("chapter-select");
  var chapter = select.value;

  if (chapter) {
    var url = "Chapitre " + chapter + ".html";
    window.location.href = url;
  }
}

const chapters = [
  { value: "145", name: "Chapitre 145" },
  { value: "146", name: "Chapitre 146" },
  { value: "147", name: "Chapitre 147" },
  { value: "148", name: "Chapitre 148" },
  { value: "149", name: "Chapitre 149" },
  { value: "150", name: "Chapitre 150" },
  { value: "151", name: "Chapitre 151" },
  { value: "152", name: "Chapitre 152" },
  { value: "153", name: "Chapitre 153" },
  { value: "154", name: "Chapitre 154" },
  { value: "155", name: "Chapitre 155" },
  { value: "156", name: "Chapitre 156" },
];

const chapterSelect = document.getElementById("chapter-select");

chapters.forEach((chapter) => {
  const option = document.createElement("option");
  option.value = chapter.value;
  option.textContent = chapter.name;
  chapterSelect.appendChild(option);
});

function redirectToChapter() {
  const selectedValue = chapterSelect.value;
  if (selectedValue) {
    window.location.href = `/chapter/${selectedValue}`;
  }
}
