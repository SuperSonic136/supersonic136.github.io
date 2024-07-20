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


const navbar = document.getElementById('navitem');

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
