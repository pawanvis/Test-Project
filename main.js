

const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
  toggle.addEventListener('click', () =>{
      nav.classList.toggle('show-menu')
      toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle','nav-menu')


function TabView(tabClass, tabviewClass) {
  document.querySelectorAll("." + tabClass).forEach((dom) => {
    dom.addEventListener("click", (e) => {
      const on = document.querySelector("." + tabClass + ".on");
      if (on) {
        on.classList.remove("on");
      }
      e.currentTarget.className = tabClass + " on";

      const tabviewId = e.currentTarget.dataset.target;
      document.querySelectorAll("." + tabviewClass).forEach((tabview) => {
        tabview.style.display = "none";
      });
      document.querySelector(tabviewId).style.display = "block";
    });
  });
}

TabView("tab", "tabview");