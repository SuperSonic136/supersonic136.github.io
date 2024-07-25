const navstuffs = [
    'Home',
    'Links',
    'My Work',
];

const navlinks = [
    "index.html",
    "socials.html",
    "mywork.html",
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

function addswf(swf,id){
    var swfid = 'swfcontainer_' + id
    if (document.getElementById(swfid) == null){
    const swfobj = document.createElement("object")
    const swffile = document.createElement('embed')
    swffile.id = swfid
    swffile.className = 'swfanim'
    swffile.src = 'stuff/cdn/anims/' + swf
    swffile.width = 427
    swffile.height = 240
    swfobj.appendChild(swffile)
    document.getElementById(id).append(swfobj)
    }
}

// use later 

//<object>
//  <embed id="swfcontainer" src="sus.swf" width="427" height="240" />
//</object>
