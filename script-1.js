
const header = document.querySelector('header');
function updateNavigationHeight() {
  document.documentElement.style.setProperty('--nav-height', header.offsetHeight + 'px');
}
updateNavigationHeight();
new ResizeObserver(updateNavigationHeight).observe(header);
