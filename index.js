let imageClassList = ["hero_img","services_card-img","info-img","gallery-image"]; 
let hamburger = document.getElementById("hamburger")

function changeImages(image_class,currentValue,replaceValue) {
    let images = document.getElementsByClassName(image_class);
    console.log(images.length);
    for (let i = 0; i < images.length; i++) {
        images[i].src = images[i].src.replace(currentValue, replaceValue);
    }
}

if (window.innerWidth <= 900) {
    imageClassList.forEach((image_class) => {
        changeImages(image_class,"desktop","mobile");
    })
}else{
    imageClassList.forEach((image_class) => {
        changeImages(image_class,"mobile","desktop");
    })
}

window.onresize = () => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 900) {
        imageClassList.forEach((image_class) => {
            changeImages(image_class,"desktop","mobile");
        })
    }else{
        imageClassList.forEach((image_class) => {
            changeImages(image_class,"mobile","desktop");
        })
    }
};

hamburger.onclick = () => {
    navBox = document.getElementById("nav-menu");
    if(navBox.classList.contains("box-active")){
        navBox.classList.remove("box-active");
    }else{
        navBox.classList.add("box-active");
    }
}