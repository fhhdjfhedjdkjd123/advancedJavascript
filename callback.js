const posts = [
    {title:'Post one', body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two', body:'This is post two',createdAt:new Date().getTime()}
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        for(let i=0;i<posts.length;i++){
            output += `<li>${posts[i].title} last updated ${(new Date().getTime()-posts[i].createdAt)/1000} seconds ago</li>`;
        //output += posts[i].title+" ";
        }
        document.body.innerHTML = output;
    },1000);
    //clearInterval(intervalId);
    //console.log(output);
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt:new Date().getTime()});
        callback();
    },1000)
}
function create4ThPost(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt:new Date().getTime()});
        callback();
    },2000);
}
createPost({title:'Post three', body:'This is post three'},getPosts);
create4ThPost({title:'Post Four', body:'This is post four'},getPosts);
