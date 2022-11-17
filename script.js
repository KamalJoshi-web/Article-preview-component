const btn = document.getElementById('show');
const triangle = document.getElementById('triangle-down');
const links =document.querySelector('.share-links');
const svg = document.querySelector('.icon-share');

btn.addEventListener('click',()=>{
    links.classList.toggle('share-links-active');
    if(links.classList.contains('share-links-active')){
       triangle.style.display='block';
        btn.classList.add('btn-style-active');
        svg.classList.add('icon-share-active');
    }
    else{
        triangle.style.display='none'; 
        btn.classList.remove('btn-style-active');
        svg.classList.remove('icon-share-active');
    }
})