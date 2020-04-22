
const sites = [
    {
        "address": "https://apple.com",
        "logo": "https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg"
    },
    {
        "address": "https://google.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
    },
    {
        "address": "https://microsoft.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/drG69iSTSbsYDNcckVzB3x97pDA=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
    },

];

function createLink(link, imgSource, location){
    // need to create 'a' tag
    const tag = document.createElement('a')
    // need to create 'href'
    tag.setAttribute('href', link)
    // need to create img
    const image = document.createElement('img')
    // need to give img a source
    image.setAttribute('src', imgSource)
    // need to append img w/ source
    tag.appendChild(image)
    // append container
    location.appendChild(tag)
}

const container = document.getElementById('container')

for (let site of sites){
    createLink(site.address, site.logo, container)
}