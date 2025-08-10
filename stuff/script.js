const navinfo = {
    'home': "/",
    'my stuff': "/mywork"
};  

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }

let socials 
async function socialsjson(){
    var response = await fetch('/stuff/socials.json')
    socials = await response.json()
    socials = JSON.parse(JSON.stringify(socials))

    var sociallinks = document.createElement('div')
    sociallinks.className = "socialbar"

    for (var s = 0; s < Object.keys(socials).length; s++){
        var names = Object.getOwnPropertyNames(socials);
        var currentname = names[s]
        var button = document.createElement("a");
        button.href = socials[currentname];
        var img = document.createElement("img");
        img.src = "/stuff/cdn/icons/"+ currentname.replaceAll(".","").replaceAll(" ","")+".webp";
        button.append(img);
        button.title = titleCase(currentname).replaceAll(" ","")
        sociallinks.append(button);
    }
    document.getElementsByClassName("everything")[0].append(sociallinks)
}



function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function addbigassbar(text) {

    var bar = document.createElement('div')
    bar.className = 'headerbar'

    var htxt = document.createElement('div')
    htxt.className = "marquee"

    var txt = document.createElement('p')
    txt.innerText = text

    htxt.append(txt)
    bar.append(htxt)
    
    document.body.prepend(bar)
}

function repeattextalot(txt,txtwidth) {
    let t = ""
    for (let i = 0; i<txtwidth/txt.length; i++) {
        t = t+" "+txt
    }
    return t
}

function adddarkmodetoggle() {
    var themelist = ['dark',"light"]

    var click = document.createElement('label')
    click.className = "themetoggle"
    var input = document.createElement('input')
    input.style = "display: none;"
    input.type = "checkbox"
    click.append(input)
    var img = document.createElement('img')

    var clicked = input.checked ? 1:0
    if (getCookie('theme') == null) {
        img.src = "/stuff/cdn/ico_"+themelist[clicked]+".webp"
    }else {
        img.src = "/stuff/cdn/ico_"+getCookie('theme')+".webp"
        document.body.style.colorScheme = getCookie('theme')
    }

    input.onclick = function() {
        var clicked = input.checked ? 1:0
        img.src = "/stuff/cdn/ico_"+themelist[clicked]+".png"
        document.body.style.colorScheme = themelist[clicked]
        setCookie("theme",themelist[clicked],Infinity)
    }

    click.append(img)
    document.body.append(click)
}

function loadnavs(){

    //addbigassbar("FUCK YOU")

    //check dark mode
    adddarkmodetoggle()

    //creates the banner image
    var baner = document.createElement("div")
    baner.className = "baner"
    var realnoscambanner = document.createElement('img')
    realnoscambanner.src = "/stuff/cdn/banner.webp"
    realnoscambanner.className = "banner"

    //create navbar
    var navbar = document.createElement('nav')
    navbar.className = 'navbar'
    var navitems = document.createElement('ul')
    navitems.id = "navitem"

    //create navitems
    for (let i = 0; i < Object.keys(navinfo).length; i++){
        var names = Object.getOwnPropertyNames(navinfo);
        var name = names[i]
        const newnavthing = document.createElement('a');
        newnavthing.href = navinfo[name];
        newnavthing.textContent = titleCase(name);
        listitem = document.createElement('li');
        listitem.appendChild(newnavthing);
        navitems.append(listitem);
    }
    
    //add everything..?
    baner.appendChild(realnoscambanner)
    navbar.append(navitems)
    baner.appendChild(navbar)
    document.getElementsByClassName('everything')[0].prepend(baner)
    socialsjson()
}

 function ahahah() {
    const stewie = document.createElement('video')
    stewie.setAttribute('loop','true')
    stewie.setAttribute('autoplay','true')
    stewie.setAttribute('showcontext','true')
    stewie.play()
    stewie.src = "/stuff/cdn/sewie.mp4"
    stewie.width = 350
    
    document.body.append(stewie)
    
 }

function getcats(){
    link = "/stuff/cdn/funnycats/"+Math.round(Math.random()*7)+".jpg"
    console.log(link)
    a = document.createElement('img')
    a.src = link
    a.style = "width: 270px; height: auto; text-align: left; border-radius: 10px; outline: 3px solid light-dark(var(--light-text),var(--dark-text));"
    document.getElementsByClassName('body')[0].append(a)
}
//getElementById('navitem')


function addswf(swf,date){
    var id = swf.split('.')[0]
    var swfid = 'swfcontainer_' + id
    if (document.getElementById(swfid) == null){
        const anotherfuckingdiv = document.createElement('div')
        anotherfuckingdiv.style = "padding-left: 30px;"
        anotherfuckingdiv.id = "indentdih"+id
        const swffile = document.createElement('video')
        swffile.id = swfid
        swffile.className = 'swfanim'
        swffile.src = '/stuff/cdn/anims/' + swf
        swffile.width = 427
        swffile.height = 240
        swffile.volume = 0.2
        swffile.play()
        swffile.setAttribute("controls","controls")
        document.getElementById(id).append(anotherfuckingdiv)
        document.getElementById("indentdih"+id).append(swffile)
        const d = document.createElement("p")
        d.textContent = "Uploaded "+date
        d.id = 'littledate'+id
        d.style = "color:light-dark(rgb(80, 80, 80),rgb(177, 177, 177)); font-size: smaller; font-style: italic; padding-left: 7px;"
        document.getElementById("indentdih"+id).append(d)
    }else{
        document.getElementById(swfid).remove()
        document.getElementById("littledate"+id).remove()
    }
}

// use later 

//<object>
//  <embed id="swfcontainer" src="sus.swf" width="427" height="240" />
//</object

class vanillologo extends HTMLElement {
    constructor() {
      super();
    }
    // Element functionality written in here
    connectedCallback() {
        this.innerHTML = `<a target="_blank" rel="noopener noreferrer" href="`+this.getAttribute("data-link")+`" class="ytlogo"><img style="width: 30px;" src="/stuff/cdn/icons/vanillo.svg" alt="Vanillo Version"></a>`
    
    }
  }
  
customElements.define("vanillo-logo", vanillologo);

class ytlogo extends HTMLElement {
    constructor() {
      super();
    }
    // Element functionality written in here
    connectedCallback() {
        this.innerHTML = `<a target="_blank" rel="noopener noreferrer" href="`+this.getAttribute("data-link")+`" class="ytlogo"><img style="width: 35px" src="/stuff/cdn/icons/youtube.png" alt="Youtube Version"></a>`
    
    }
  }
  
customElements.define("yt-logo", ytlogo);

