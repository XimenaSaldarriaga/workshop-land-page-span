import "../styles/styles.scss";

const menuCompany = document.querySelector('.menu__company')
const companyArrow = document.querySelector('.header__companyarrow')
const companyArrowUp = document.querySelector('.header__companyarrowup')
const menuFeature = document.querySelector('.menu__features')
const featureArrow = document.querySelector('.header__featuresarrow')
const featureArrowUp = document.querySelector('.header__featuresarrowup')
const iconMenu = document.querySelector('.header__iconmenu')
const iconClose = document.querySelector('.header__close')
const menuMobile = document.querySelector('.header__mobile')

const toggleMenu = (menu, arrow, arrowUp) => {
    menu.classList.toggle('show');
    arrow.classList.toggle('show');
    arrowUp.classList.toggle('show');
  };
  
  const showMenuFeature = () => {
    toggleMenu(menuFeature, featureArrow, featureArrowUp);
  };
  
  const hideMenuFeature = () => {
    toggleMenu(menuFeature, featureArrowUp, featureArrow);
  };
  
  const showMenuCompany = () => {
    toggleMenu(menuCompany, companyArrow, companyArrowUp);
  };
  
  const hideMenuCompany = () => {
    toggleMenu(menuCompany, companyArrowUp, companyArrow);
  };
  
  featureArrow.addEventListener('click', showMenuFeature);
  featureArrowUp.addEventListener('click', hideMenuFeature);
  companyArrow.addEventListener('click', showMenuCompany);
  companyArrowUp.addEventListener('click', hideMenuCompany);



  const showMenuMobile = () => {
    menuMobile.classList.remove('header__mobile');
  };

  const hideMenuMobile = () => {
    menuMobile.classList.add('header__mobile')
  };


  iconMenu.addEventListener('click',showMenuMobile)
  iconClose.addEventListener('click', hideMenuMobile)


