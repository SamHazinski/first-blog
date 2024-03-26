const blogUser = document.querySelector('#username');
const blogTitle = document.querySelector('#title');
const blogContent = document.querySelector('#content');
const postButton = document.querySelector('#submit');
//make an array of objects where each post is an object
let allPosts = [];

postButton.addEventListener('click',function(event){
    event.preventDefault();

    //create an object from submission
    const post = {
        userName: blogUser.value.trim(),
        title: blogTitle.value.trim(),
        post: blogContent.value.trim(),
    };
    //puts the object into the array
    allPosts.push(post);
    //stores the array as a string
    localStorage.setItem('all', JSON.stringify(allPosts));
    // window.location.replace("first-blog/blog.html")
    
    //redirects to the blog page where it displays posts
    window.location.href ="../first-blog/blog.html";
});