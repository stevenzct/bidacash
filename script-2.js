
const navigation = document.querySelector('header');
const syncNavigationHeight = () => {
  document.documentElement.style.setProperty('--navigation-height', navigation.getBoundingClientRect().height + 'px');
};
new ResizeObserver(syncNavigationHeight).observe(navigation);
syncNavigationHeight();
