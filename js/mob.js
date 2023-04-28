(() => {
  const refs = {
    openmenuBtn: document.querySelector("[mob-data-menu-open]"),
    closemenuBtn: document.querySelector("[mob-data-menu-close]"),
    menu: document.querySelector("[mob-data-menu]"),
  };

  refs.openmenuBtn.addEventListener("click", toggleModal);
  refs.closemenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-hidden");
  }
})();