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
  { value: "133", name: "Chapitre 133" },
  { value: "134", name: "Chapitre 134" },
  { value: "135", name: "Chapitre 135" },
  { value: "136", name: "Chapitre 136" },
  { value: "137", name: "Chapitre 137" },
  { value: "138", name: "Chapitre 138" },
  { value: "139", name: "Chapitre 139" },
  { value: "140", name: "Chapitre 140" },
  { value: "141", name: "Chapitre 141" },
  { value: "142", name: "Chapitre 142" },
  { value: "143", name: "Chapitre 143" },
  { value: "144", name: "Chapitre 144" },
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
