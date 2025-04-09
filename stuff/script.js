function getcats(){
    link = "stuff/cdn/funnycats/"+Math.round(Math.random()*6)+".jpg"
    console.log(link)
    a = document.createElement('img')
    a.src = link
    a.style = "width: 45%; height: auto; text-align: left;"
    document.getElementById('body').append(a)
}

const navstuffs = [
    'Home',
    'Links',
    'My Animations',
];

const navlinks = [
    "/",
    "/socials",
    "/mywork",
];

function loadnavs(){
    for (i in navstuffs){
        const newnavthing = document.createElement('a');
        newnavthing.href = navlinks[i];
        newnavthing.textContent = navstuffs[i];
        listitem = document.createElement('li');
        listitem.appendChild(newnavthing);
        document.getElementById('navitem').append(listitem);
    }
}

function addswf(swf,date){
    var id = swf.split('.')[0]
    var swfid = 'swfcontainer_' + id
    if (document.getElementById(swfid) == null){
        const swffile = document.createElement('video')
        swffile.id = swfid
        swffile.className = 'swfanim'
        swffile.src = 'stuff/cdn/anims/' + swf
        swffile.width = 427
        swffile.height = 240
        swffile.play()
        swffile.setAttribute("controls","controls")
        document.getElementById(id).append(swffile)
        d = document.createElement("p")
        d.textContent = "Uploaded "+date
        d.id = 'littledate'+id
        d.style = "color:rgb(80, 80, 80); font-size: smaller; font-style: italic; padding-left: 7px;"
        console.log(d)
        document.getElementById(id).append(d)
    }else{
        document.getElementById(swfid).remove()
        document.getElementById("littledate"+id).remove()
    }
}

// use later 

//<object>
//  <embed id="swfcontainer" src="sus.swf" width="427" height="240" />
//</object

