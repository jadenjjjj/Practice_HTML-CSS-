let navbarItem = document.querySelectorAll('.item');
for(let i=0; i < navbarItem.length; i++) {
    navbarItem[i].addEventListener('click', function () {
        for (let i = 0; i < navbarItem.length; i++) {
            navbarItem[i].classList.remove('active')
        }
        this.classList.add('active')
    })
}

const typed = new Typed(".multiple-text", {
    strings: ['Front Developer', "BiliBli Uploader", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})  