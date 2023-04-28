(() => {
  const refs = {
    openMenuBtn: document.querySelector("[mob-data-menu-open]"),
    closeMenuBtn: document.querySelector("[mob-data-menu-close]"),
    menu: document.querySelector("[mob-data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-hidden");
  }
})();