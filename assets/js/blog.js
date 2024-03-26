const backButton = document.querySelector('#back');
const body = document.body;
const blogPostList = document.querySelector('#blogFeed');





backButton.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href ="../first-blog/index.html";
})

let tempSelect = JSON.parse(localStorage.getItem("all"));

for (let i = 0; i < tempSelect.length;  i++)
{
    //gets the objects info from local storage
    let usrName = tempSelect[i].userName;
    let blogTitle = tempSelect[i].title;
    let blogPost = tempSelect[i].post;

    
    const tempUsr = document.createElement('div')
    const tempTitle = document.createElement('h1');
    const tempContent = document.createElement('h2')
    
    tempUsr.textContent = usrName;
    tempTitle.textContent = blogTitle;
    tempContent.textContent = blogPost;


    body.appendChild(tempUsr);
    tempUsr.appendChild(tempTitle);
    tempTitle.appendChild(tempContent);
   
}