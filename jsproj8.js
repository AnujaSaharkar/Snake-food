var users = [
  {
    fullname: "Aarav Sharma",
    profession: "Software Engineer",
    description: "Full-stack developer specializing in modern JavaScript frameworks and scalable backend systems.",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    fullname: "Mia Thompson",
    profession: "UX/UI Designer",
    description: "Designs clean and intuitive interfaces focusing on accessible user experiences.",
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    fullname: "Lucas Martin",
    profession: "Data Analyst",
    description: "Expert in data visualization, dashboards, and transforming datasets into actionable insights.",
    image: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    fullname: "Sofia Rodriguez",
    profession: "Digital Marketer",
    description: "Helps brands grow online using social media strategy, SEO, and targeted advertising.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    fullname: "Noah Williams",
    profession: "Cybersecurity Specialist",
    description: "Works on penetration testing, incident response, and securing enterprise applications.",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    fullname: "Emma Johnson",
    profession: "Content Writer",
    description: "Creates engaging blog posts, marketing copy, and long-form storytelling for businesses.",
    image: "https://randomuser.me/api/portraits/women/66.jpg"
  }
];

var main=document.querySelector('main');
users.forEach(function(elem){
    main.innerHTML+=`<div id="card">
            <img src="${elem.image}">
            <h2>${elem.fullname}</h2>
            <h3>${elem.profession}</h3>
            <h5>${elem.description}</h5>
        </div>`
})
