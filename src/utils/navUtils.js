export const removeAllActiveLinks = () => {
    let links = document.querySelectorAll('.nav__link');
    let spanlinks = document.querySelectorAll('.nav__link span');
    links.forEach((link, index) => {
        link.classList.remove("nav__link--active");
        spanlinks[index].classList.remove("nav__link--active");
    });
}; 

export const setActiveLinkOnClick = (e) => {
    removeAllActiveLinks();
    e.target.classList.add('nav__link--active');
}; 

export const setCurrentActiveLinkOnPageLoad = (index) => {
    removeAllActiveLinks();
    let links = document.querySelectorAll('.nav__link');
    links[index].classList.add('nav__link--active');
}; 

export const hideHoverBar = () => {
    let hoverBar = document.querySelector('.nav__hoverbar');
    hoverBar.style.width =  0+'px';
}; 

export const displayHoverBar = (e,previousWidth=60) => {
    let hoverBar = document.querySelector('.nav__hoverbar');
    let firstLinkDims = document.querySelector('.nav-first__link').getBoundingClientRect();
    const dims = e.target.getBoundingClientRect();

    //take padding and gap into consideration
    const distanceFromLeft = (dims.left - firstLinkDims.left) +24 +50;
    
    hoverBar.style.left =   distanceFromLeft + 'px';
    hoverBar.style.width =  dims.width > 20? dims.width + 'px': previousWidth+'px';

    //Uncomment below for logging absolute dimm values
    // console.log(dims);
    // console.log(e.target.clientWidth, "first lik DFL: "+firstLinkDims.left, "item DFL: "+dims.left, "proposed Left value: "+distanceFromLeft);
    // console.log("========")
}; 