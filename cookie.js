///cookie and loction
//assign new site
const newSite=()=>{
    location.assign('https://www.youtube.com/')
}

// getcookies
const getCookie=(name)=> {
    const cookie = document.cookie;
    const cookieArray = cookie.split('; ');
    //split map cookieArray
    /* const getCookie  = cookieArray.map(e=>e.split('='));
    const newCookie = getCookie.find(e=>e.includes(name));
    return newCookie */
    const findCookie = cookieArray.find(e=>e.includes(name));
    return findCookie;
}
const cookie = getCookie('country');
console.log(cookie);

