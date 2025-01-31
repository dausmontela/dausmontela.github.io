const socialtags = [
                   { img:"img/github.svg", link:"https://github.com/MochSyadzaliChusaini" },
                   { img:"img/linkedin.svg", link:"https://www.linkedin.com/in/mochsyadzalichusaini" },
                   { img:"img/gitlab.svg", link:"https://gitlab.com/mochsyadzalichusaini" },
                   { img:"img/twitter.svg", link:"https://twitter.com/moch_syadzali" }
                ],
                   
      sponsorsListWithIcons = [
                   { img:"img/github.svg", name:"hello", link:"https://github.com/MochSyadzaliChusaini" },      
                   { img:"img/github.svg", name:"hello", link:"https://github.com/MochSyadzaliChusaini" },
                   { img:"img/github.svg", name:"hello", link:"https://github.com/MochSyadzaliChusaini" },
                   { img:"img/github.svg", name:"hello", link:"https://github.com/MochSyadzaliChusaini" },
                   { img:"img/github.svg", name:"hello", link:"https://github.com/MochSyadzaliChusaini" }
                ],

      sponsorsList = [ 
        { name:"hello", link:"https://github.com/MochSyadzaliChusaini" }
      ];

function sponsorsIconItem(i){
    return '<a class="center" href="'+i.link+'"><div class="sponsor-item"><img style="padding: 5px!important;width: 40px;" src="'+i.img+'"><h5>'+i.name+"</h5></div></a>"
}
    
function dayNightToggle(){
    document.body.classList.toggle("light-mode"),
    "light" == window.localStorage.getItem("light-mode") ? window.localStorage.clear():
    window.localStorage.setItem("light-mode","light");
}
    
function checkDayNight(){
    const i = window.localStorage.getItem("light-mode"),
          t = document.body;
              "light" == i?t.classList.add("light-mode"):
              t.classList.remove("light-mode");
}

checkDayNight();
