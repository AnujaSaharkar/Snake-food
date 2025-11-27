const arr = [
  {
    videoUrl: "./pinvid1.mp4",
    profileImage: "https://plus.unsplash.com/premium_photo-1688497831197-9c792767fb8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFkaWVzJTIwYW5kJTIwbWVuc3xlbnwwfHwwfHx8MA%3D%3D",
    userName: "travel_with_amy",
    isFollowed: false,
    isLiked: false,
    likeCount: 1250,
    commentCount: 98,
    shareCount: 20,
    caption: "Sunset vibes 🌅✨ #travel #sunset"
  },
  {
    videoUrl: "./pinvid3.mp4",
    profileImage: "https://images.unsplash.com/photo-1558047092-ea343678e61c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhZGllcyUyMGFuZCUyMG1lbnN8ZW58MHx8MHx8fDA%3D",
    userName: "foodie_john",
    isFollowed: true,
    isLiked: true,
    likeCount: 5400,
    commentCount: 320,
    shareCount: 110,
    caption: "Best pasta ever! 🍝🤤 #foodie"
  },
  {
    videoUrl: "./pinvid2.mp4",
    profileImage: "https://media.istockphoto.com/id/1292579792/photo/couple-looking-at-each-other-in-car-trunk.webp?a=1&b=1&s=612x612&w=0&k=20&c=6jdOeoeKUWe9uyquLdKRwo3c3Zd96b1M6YvqGV9uenQ=",
    userName: "dance_vibes",
    isFollowed: true,
    isLiked: false,
    likeCount: 980,
    commentCount: 45,
    shareCount: 14,
    caption: "Trying a new choreography 💃🔥"
  },
  {
    videoUrl: "./pinvid4.mp4",
    profileImage: "https://example.com/profile4.jpg",
    userName: "coding_maniac",
    isFollowed: false,
    isLiked: true,
    likeCount: 2100,
    commentCount: 150,
    shareCount: 40,
    caption: "Dark mode >>> 🖤 #codinglife"
  },
  {
    videoUrl: "./pinvid1.mp4",
    profileImage: "https://example.com/profile5.jpg",
    userName: "fitness_freak",
    isFollowed: true,
    isLiked: false,
    likeCount: 4500,
    commentCount: 270,
    shareCount: 60,
    caption: "No pain, no gain! 💪🔥 #workout"
  },
  {
    videoUrl: "pinvid3.mp4",
    profileImage: "https://example.com/profile6.jpg",
    userName: "pets_world",
    isFollowed: false,
    isLiked: true,
    likeCount: 6800,
    commentCount: 410,
    shareCount: 200,
    caption: "Cutest pup ever! 🐶❤️"
  },
  {
    videoUrl: "pinvid2.mp4",
    profileImage: "https://example.com/profile7.jpg",
    userName: "tech_today",
    isFollowed: true,
    isLiked: false,
    likeCount: 1200,
    commentCount: 90,
    shareCount: 35,
    caption: "New gadget review just dropped! 🚀"
  },
  {
    videoUrl: "pinvid4.mp4",
    profileImage: "https://example.com/profile8.jpg",
    userName: "street_photographer",
    isFollowed: false,
    isLiked: true,
    likeCount: 3050,
    commentCount: 156,
    shareCount: 75,
    caption: "City lights at night 🌃📸"
  }
];


console.log("js is working")
var sum='';
arr.forEach(function(elem){
    sum=sum+`<div class="reel">
                <video muted autoplay loop src="${elem.videoUrl}"></video>
                <div class="bottom">
                    <div class="user">
                        <img src="${elem.profileImage}"> 
                        <h3>${elem.userName}</h3>
                        <button>${elem.isFollowed? 'UnFollow':'follow'}</button>
                    </div>
                    <div class="caption">${elem.caption}</div>
                </div>
                <div class="right">
                    <div class="one like">
                       <h6>${elem.isLiked?'<i class="ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h6>
                        <h6>${elem.likeCount}</h6>
                    </div>
                    <div class="one comment">
                        <i class="ri-chat-3-line"></i>
                        <h6>${elem.commentCount}</h6>
                    </div>
                    <div class="one share">
                        <i class="ri-share-forward-line"></i>
                        <h6>${elem.shareCount}</h6>
                    </div>
                    <div class="one menu">
                        <i class="ri-more-2-fill"></i>
                    </div>
                </div>
            </div>`;

})

var allreel=document.querySelector('.allreels');
allreel.innerHTML=sum;
