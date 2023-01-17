const posts = [
    {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two',body:'This is post Two',createdAt:new Date().getTime()}
];
function getPosts(){
    setTimeout(()=>{
        let output = "";
        for(let i=0;i<posts.length;i++){
            //output += `${posts[i].title} last updated ${(new Date().getTime()-posts[i].createdAt)/1000} seconds ago`;
            output += `<li>${posts[i].title} last updated ${(new Date().getTime()-posts[i].createdAt)/1000} seconds ago</li>`;
        }
        document.body.innerHTML = output;
     //console.log(output);
    },1000);
}
function createPost(post){
    return  new Promise((resolved,reject)=>{
        setTimeout(()=>{
            posts.push({...post, createdAt:new Date().getTime()});
            const error = false;
            if(!error){
                resolved();
            }else{
                reject("Error");
            }
        },1000)
    })
}
function deletePost(){
    return  new Promise((resolved,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                resolved(posts.pop());
            }  
            else{
                reject("Array is empty now");
            }
        },2000);
    })
}
async function fun1(){
    try{
        const msg1 = await createPost({title:'Post Three',body:'This is post three'});
        //console.log(msg1);
        getPosts();
        const msg2 = await createPost({title:'Post four',body:'This is post four'});
        //console.log(msg2);
        getPosts();
        const msg3 = await deletePost();
        getPosts();
        const msg4 = await deletePost();
        getPosts();
        const msg5 = await deletePost();
        getPosts();
        const msg6 = await deletePost();
        getPosts();
        const msg7 = await deletePost();
    }catch(err){
        console.log(err);
    }

}
fun1();

// createPost({title:'Post Three',body:'This is post three'})
// .then(()=>{
//     getPosts()
//     createPost({title:'Post four',body:'This is post four'})
//     .then(()=>{
//         getPosts();
//         deletePost().then(()=>{
//         getPosts();
//           deletePost().then(()=>{
//             getPosts();
//             deletePost().then(()=>{
//                 getPosts();
//                 deletePost().then(()=>{
//                     getPosts();
//                     deletePost().then(()=>{})
//                 }).catch((err)=>console.log(err));
//             }).catch((err)=>console.log(err));
//           }).catch((err)=>console.log(err));
//        }).catch((err)=>console.log(err));
//     }).catch((err)=>console.log(err));
// }).catch((err) => console.log(err));