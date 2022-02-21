//creating global variables 
const allSections=document.querySelectorAll('section');
const list=document.createElement('ul')
const docFragment=document.createDocumentFragment();

//this for loop for making a navigation bar that's equal to the number of the sections
for(let i=0;i<allSections.length;i++){

    //making the list item and link tag on each loop 
    const Items=document.createElement('li');
    const anchor=document.createElement('a');

    //make the link text of the sections  
    anchor.textContent='Section '+(i+1)

    //setting a hypertext reference as an atrribute of the link tag
    anchor.setAttribute('href','#section'+(i+1))

    //add a click event listner for scrolling to the selected section from the nav bar
    anchor.addEventListener('click',function scroll(event){
        event.preventDefault()
        const selectedSection = document.querySelector('#section'+(i+1));
        selectedSection.scrollIntoView({ block: 'center',  behavior: 'smooth' });
    });

    //make the link tag as a child of the list item on each loop
    Items.appendChild(anchor);

    //make the list items as a child of the docFragment to reduces the memory and improve the performance
    docFragment.appendChild(Items);

    //change the style of the navigation bar 
    list.style.cssText='position: fixed;  top: 0;width:ficed;list-style-type: none; overflow: hidden; background-color: white; color: white;'
    anchor.style.cssText='color: black; display: block; float: right; padding: 14px 16px; text-decoration: none; font-weight: bold;'
    Items.style.cssText='float: left;'

}

/*Make the docFragment be the child of the whole list tag (ul) 
/and then make the list tag be a child of the body*/ 
list.appendChild(docFragment);
document.body.appendChild(list);

//this is the function of intersection observer for knowing which section that is intersecting when the user is scrolling on the page
const options={
    root:null,
    thrishold:1,
    rootMargin:"-125px"
}
let observer = new IntersectionObserver( 
    (entries, observer) => { 
    entries.forEach(entry => {
        console.log(entry)

// put the active class that was implemented in css file on the section that the user is reading 
        if(entry.isIntersecting===true){
            entry.target.classList.add('your-active-class')
        }
//remove the active class from the section when the user left it. 
        else {
           entry.target.classList.remove('your-active-class')
        }
        
      });
    }, options);
    
    allSections.forEach(section=>{
        observer.observe(section)
    })




