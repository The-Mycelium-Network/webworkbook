(function () {
  const accordion = document.getElementById("accordion");

  if (!accordion) {
    return;
  }

  const initiallyExpanded = document.querySelector("[aria-expanded='true']");

  if (initiallyExpanded) {
    const initiallyExpandedPanel = document.getElementById(
      initiallyExpanded.getAttribute("aria-controls")
    );
    initiallyExpandedPanel.classList.add("show");
  }

  function hidePanels(accordion) {
    const panels = accordion.querySelectorAll(".accordion-panel");
    Array.from(panels).forEach((panel) => {
      const panelTrigger = accordion.querySelector(
        `#${panel.getAttribute("aria-labelledby")}`
      );
      panel.classList.remove("show");
      panelTrigger.setAttribute("aria-expanded", false);
    });
  }

  accordion.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const button = event.target;
      const panel = document.getElementById(
        button.getAttribute("aria-controls")
      );

      if (panel) {
        hidePanels(accordion);
        panel.classList.add("show");
        button.setAttribute("aria-expanded", true);
      }
    }
  });
})();
