let bars = document.querySelector(".hamburger i");
let open = document.querySelector(".menu-container");
let plusMenu = document.querySelector(".plus-menu-container");
let secondBar = document.querySelector(".plus i");
let createAccount = document.querySelector(".create-account-container")
let thirdBar = document.querySelector(".caret-down")
let profile = document.querySelector(".profile-pics")
let home = document.querySelector(".home");
let search = document.querySelector(".search i");
let conSeven = document.querySelector(".container-seven") 
let overAll = document.querySelector(".overall-containers");
let plusIcon = document.querySelector(".container-eight i");
let containerNine = document.querySelector(".container-nine");
let none = document.querySelector(".none");
let homeContentWrapper = document.querySelector(".home-content-wrapper");
let homeWrapper = document.querySelector(".home-wrapper");
let searchInput = document.querySelector("#search");






thirdBar.addEventListener("click", ()=>{
    if(createAccount.style.display === "block"){
        createAccount.style.display = "none";
    }else{ 
        createAccount.style.display = "block";
    }
    createAccount.style.height = "150px";
    open.style.display = "none";
    plusMenu.style.display = "none";
})

bars.addEventListener("click", ()=>{
    if(open.style.display === "block"){
        open.style.display = "none";
    }else {open.style.display = "block"}
    plusMenu.style.display = "none";
    open.style.height = "350px";
    createAccount.style.display = "none"
})

secondBar.addEventListener("click", ()=>{
    if(plusMenu.style.display === "block"){
        plusMenu.style.display = "none";
    }else{
        plusMenu.style.display = "block"
    }
    open.style.display = "none";
    createAccount.style.display = "none";
    plusMenu.style.height = "250px";
})

window.screen.addEventListener("click", function(){
    open.style.display = "none";
    plusMenu.style.display = "none";
})

const images_one = [
    {photo: "images/cake-1.jpeg",
    id: 1,
    caption: "cake",
     name: "james",
     likes: "473 likes",
     comment: "the best day for courtney's hen party",
     totalcomment: "view 1 comment",
     date:"23 hours ago"},

    {photo: "images/cake-2.jpeg",
    id: 2,
    caption: "cake",
    name: "james",
    likes: "473 likes",
    comment: "the best day for courtney's hen party",
    totalcomment: "view 1 comment",
    date:"23 hours ago"},

    {photo: "images/cake-3.jpeg",
    id: 3,
    caption: "cake",
    name: "james",
    likes: "473 likes",
    comment: "the best day for courtney's hen party",
    totalcomment: "view 1 comment",
    date:"23 hours ago"
    },

    {photo: "images/cupcake-1.jpeg",
    name: "james",
    id: 4,
    caption: "cupcake",
     likes: "473 likes",
     comment: "the best day for courtney's hen party",
     totalcomment: "view 1 comment",
     date:"23 hours ago"
    },

    {photo: "images/cupcake-2.jpeg",
    id: 5,
    caption: "cupcake",
    name: "james",
     likes: "473 likes",
     comment: "the best day for courtney's hen party",
     totalcomment: "view 1 comment",
     date:"23 hours ago"
    },

    {photo: "images/cupcake-3.jpeg",
    id: 6,
    caption: "cupcake",
    name: "james",
     likes: "473 likes",
     comment: "the best day for courtney's hen party",
     totalcomment: "view 1 comment",
     date:"23 hours ago"
    },

    {photo: "images/doughnut-1.jpeg",
    id: 7,
    caption: "doughnut",
    name: "james",
     likes: "473 likes",
     comment: "the best day for courtney's hen party",
     totalcomment: "view 1 comment",
     date:"23 hours ago"
    },

    {photo: "images/doughnut-2.jpeg",
    id: 8,
    caption: "doughtnut",
    name: "james",
     likes: "473 likes",
     comment: "the best day for courtney's hen party",
     totalcomment: "view 1 comment",
     date:"23 hours ago"
    },

    {photo: "images/doughnut-3.jpeg",
    id: 9,
    caption: "doughtnut",
    name: "james",
     likes: "473 likes",
     comment: "the best day for courtney's hen party",
     totalcomment: "view 1 comment",
     date:"23 hours ago"
    },

    {photo: "images/headerBcg.jpeg",
    id: 10,
    caption: "doughtnut",
    name: "james",
     likes: "473 likes",
     comment: "the best day for courtney's hen party",
     totalcomment: "view 1 comment",
     date:"23 hours ago"
    },

    {photo: "images/sweets-1.jpeg",
    id: 11,
    caption: "sweets",
     name: "james",
     likes: "473 likes",
     comment: "the best day for courtney's hen party",
     totalcomment: "view 1 comment",
     date:"23 hours ago"
    },

    {photo: "images/sweets-2.jpeg",
    id: 12,
    caption: "sweets",
    name: "james",
     likes: "473 likes",
     comment: "the best day for courtney's hen party",
     totalcomment: "view 1 comment",
     date:"23 hours ago"
    },

    {photo: "images/sweets-3.jpeg",
    id: 13,
    caption: "sweets",
     name: "james",
     likes: "473 likes",
     comment: "the best day for courtney's hen party",
     totalcomment: "view 1 comment",
     date:"23 hours ago"
    },

    {photo: "images/z-cake-2.jpeg",
    id: 14,
    caption: "cake",
    name: "james",
     likes: "473 likes",
     comment: "the best day for courtney's hen party",
     totalcomment: "view 1 comment",
     date:"23 hours ago"
    },

    {photo: "images/z-sweets-3.jpeg",
    id: 1,
    caption: "sweets",
    name: "james",
    likes: "473 likes",
    comment: "the best day for courtney's hen party",
    totalcomment: "view 1 comment",
    date:"23 hours ago"
    },
]
let photos = images_one.map(function(p){
    return `
            <div class="container-five-wrapper">
                <img class="container-five-image-one" src=${p.photo} />
            </div>
    `
})
let display = document.querySelector(".container-five");
display.innerHTML = `${photos.join(" ")}`

search.addEventListener("click", function(){
    overAll.style.display = "none";
})




let photoss = images_one.map(function(p){
    return `
            <div class="container-seven-wrapper">
                <img class="container-seven-image-one" src=${p.photo} />
            </div>
    `
})

conSeven.innerHTML = `${photoss.join(" ")}`


let photosOne = images_one.map(function(p){
    return `
            <div class="container-seven-wrapper">
                <img class="container-seven-image-one" src=${p.photo} />
            </div>
    `
})

conSeven.innerHTML = `${photosOne.join(" ")}`



let photos_one = images_one.map(function(p){
    return `
            <div class="container-nine-wrapper">
                <img class="container-nine-image-one" src=${p.photo} />
            </div>
    `
})
let display_one = document.querySelector(".container-nine");
display_one.innerHTML = `${photos_one.join(" ")}`

plusIcon.addEventListener("click", function(){
 containerNine.style.display = "flex";
})


let photo_two = images_one.map(function(p){
    return`
            <div class="container-twelve">
                <div class="container-twelve-content-one">
                    <div class="container-twelve-image">
                        <img src= ${p.photo} width="40" height="40" /> 
                        <div><p class="container-twelve-content-two">${p.name}</p></div>
                    </div>
                    
                    <div class="container-twelve-content-three">
                        <i class="fa fa-ellipsis-v"> </i>
                    </div>
                </div>
                <div class="container-thirteen">
                    <div class="container-thirteen-image-container">
                        <img src=${p.photo} width="70" height="70" />
                    </div>
                </div>
                <div class="container-fourteen-wrapper">
                    <div class="container-fourteen">
                        <div class="container-fourteen-icon-one">
                            <i class= "fa fa-search"></i>
                            <i class= "fa fa-plus"></i>
                            <i class= "fa fa-user"></i>
                        </div>
                        <div class="container-fourteen-icon-two">
                            <div><i class="fa fa-user"></i></div>
                        </div>
                    </div>
                    <div class="container-thirteen-wrapper">
                        <p class="container-thirteen-content">${p.likes}</p>
                        <p class="container-thirteen-content-one">${p.comment}</p>
                    </div>
                </div>
                <div class="container-fourteen-wrapper">
                    <div class="container-fourteen">
                        <div class="container-fourteen-content-one">
                            <img src=${p.photo} width="30" height="30"/>
                            <input type="text" value="Add a comment" >
                        </div>                  
                        <div class="container-fourteen-content-three"> 
                            <i class= "fa fa-plus-circle"></i>
                        </div>                   
                    </div>
                </div>
            </div>
    `
})

let display_two = document.querySelector(".container-twelve-wrapper");
display_two.innerHTML = `${photo_two.join(" ")}`;



profile.addEventListener("click", function(){
    none.style.display = "none";
    overAll.style.display = "block";
})

home.addEventListener("click", function(){
    overAll.style.display = "none";
    none.style.display = "none";
    homeWrapper.style.display = "block";
    homeContentWrapper.style.display = "block"
   })
   
   search.addEventListener("click", function(){
       overAll.style.display = "none";
       none.style.display = "block";
       homeWrapper.style.display = "none";
   })


searchInput.addEventListener("keyup", function(e){
    let search = e.target.value.toLowerCase().trim();

    let filterItems = images_one.filter(function(f){
        if(f.caption.includes(search)){
            return f;
        }
    })

    let showItem = filterItems.map(function(b){
        return `
        <div class="name" id= "${b.id}">
             <img src="${b.photo}" class="post-image" />              
        </div>
        `
    })

   conSeven.innerHTML = showItem.join("")

   
})
































//    searchInput.addEventListener("keyup", function(e){
//        plusIcon.style.display = "none";
//     let searchCaption = e.target.value.toLowerCase().trim();
//     // console.log(searchCaption);
//     let items = images_one.filter(function(f){
//         if(f.caption.includes(searchCaption)){
//             return f
//         }
//         // console.log(f);
//     });
//     let searchItem = items.map(function(b){
//         return `
//                <div class="name" id= "${b.id}">
//                    <img src="${b.photo}" class="post-image" />
//                </div>    
//         `
//     })
//     console.log(searchItem);
//      conSeven.innerHTML = searchItem.join("")
//    })





