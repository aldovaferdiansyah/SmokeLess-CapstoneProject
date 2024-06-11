const NavbarScroll = {
  init() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0';
      } else {
        document.getElementById('navbar').style.top = '-85px';
      }
      prevScrollpos = currentScrollPos;
    };
  },
};

export default NavbarScroll;
