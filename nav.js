const header = document.querySelector('header')

let prevScroll = 0

const handleHidden = () => {
    if (header.clientTop > preScroll){
        header.style.transform = "translateY(-100%)"
    }else {
        header.style.transform = "translateY(0%)"
    }
    prevScroll = window.scrollY()
}

document.addEventListener("scroll", handleHidden)