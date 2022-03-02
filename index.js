
function onMyClickFn(){
    document.location.href="contact.html"
}

document.querySelector('.cross').style.display='none'
document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.slidebar').classList.toggle('sidebargo');
    if(document.querySelector('.slidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.ham').style.display='none'
        setTimeout(() =>{

            document.querySelector('.cross').style.display='inline'
        },300);
    }
})

var typed = new Typed(".typing", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});