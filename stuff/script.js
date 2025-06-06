const navstuffs = [
    'Home',
    'Links',
    'My Stuff',
];  

const navlinks = [
    "/",
    "/socials",
    "/mywork",
];

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
    input.id = "themetoggle"
    input.type = "checkbox"
    click.append(input)

    var img = document.createElement('img')

    var clicked = input.checked ? 1:0
    img.src = "/stuff/cdn/ico_"+themelist[clicked]+".png"
    input.onclick = function() {
        var clicked = input.checked ? 1:0
        img.src = "/stuff/cdn/ico_"+themelist[clicked]+".png"
        document.body.style.colorScheme = themelist[clicked]
    }

    click.append(img)
    document.body.getElementsByClassName('everything')[0].append(click)
}

function loadnavs(){
    //creates the banner image
    var baner = document.createElement("div")
    baner.className = "baner"
    var realnoscambanner = document.createElement('img')
    realnoscambanner.src = "/stuff/cdn/banner.svg"
    realnoscambanner.className = "banner"

    //create navbar
    var navbar = document.createElement('nav')
    navbar.className = 'navbar'
    var navitems = document.createElement('ul')
    navitems.id = "navitem"

    //create navitems
    for (i in navstuffs){
        const newnavthing = document.createElement('a');
        newnavthing.href = navlinks[i];
        newnavthing.textContent = navstuffs[i];
        listitem = document.createElement('li');
        listitem.appendChild(newnavthing);
        navitems.append(listitem);
    }
    
    //add everything..?
    baner.appendChild(realnoscambanner)
    navbar.append(navitems)
    baner.appendChild(navbar)
    document.getElementsByClassName('everything')[0].prepend(baner)

    // add dark mode toggle
    adddarkmodetoggle()
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
    a.style = "width: 45%; height: auto; text-align: left; border-radius: 10px; outline: 3px solid light-dark(var(--light-text),var(--dark-text));"
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
        this.innerHTML = `<a target="_blank" rel="noopener noreferrer" href="`+this.getAttribute("data-link")+`" class="ytlogo"><img style="width: 25px;" src="/stuff/cdn/vanillo.svg" alt="Vanillo Version"></a>`
    
    }
  }
  
customElements.define("vanillo-logo", vanillologo);

class ytlogo extends HTMLElement {
    constructor() {
      super();
    }
    // Element functionality written in here
    connectedCallback() {
        this.innerHTML = `<a target="_blank" rel="noopener noreferrer" href="`+this.getAttribute("data-link")+`" class="ytlogo"><img style="width: 35px" src="/stuff/cdn/youtube.png" alt="Youtube Version"></a>`
    
    }
  }
  
customElements.define("yt-logo", ytlogo);
