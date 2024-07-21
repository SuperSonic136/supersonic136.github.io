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

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function addswf(swf,origele){
    const swfobj = document.createElement('object')
    const swffile = document.createElement('embed')
    swffile.id = 'swfcontainer'
    swffile.src = 'stuff/cdn/anims/' + swf
    swffile.width = 427
    swffile.height = 240
    swfobj.appendChild(swffile)
    document.getElementById('swfplayer').append(swfobj)
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
// use later 

//<object>
//  <embed id="swfcontainer" src="sus.swf" width="427" height="240" />
//</object>
