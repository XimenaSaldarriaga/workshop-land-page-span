import "../styles/styles.scss";

const menuCompany = document.querySelector('.menu__company')
const companyArrow = document.querySelector('.header__companyarrow')
const companyArrowUp = document.querySelector('.header__companyarrowup')
const menuFeature = document.querySelector('.menu__features')
const featureArrow = document.querySelector('.header__featuresarrow')
const featureArrowUp = document.querySelector('.header__featuresarrowup')

const toggleMenu = (menu, arrow, arrowUp) => {
    menu.classList.toggle('show');
    arrow.classList.toggle('hidden');
    arrowUp.classList.toggle('hidden');
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



