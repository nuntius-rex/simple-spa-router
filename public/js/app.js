

//-------------------------------------------------------
// Main SPA Application Routing
//-------------------------------------------------------

//Root Folder: Change to match folder, if not in the root
const rootDir="/";

//Define Routes (note the global variable assignment for each, there's another way... ):
const routes = {
  '/' : home,
  '/contact' : contact,
  '/about' : about,
  '/home' : home
};

//Discern Initial Route:
var route=rootDir+window.location.pathname;
console.log(route);

//Replace any double slashing with single:
route=route.replace(/\/\/+/g, '/');
console.log(route);

//If root folter is not the same as / setting it to / here:
if(route==rootDir){
  route="/";
  console.log("is root");
}
console.log(route);

//Root HTML Target:
const rootDiv = document.getElementById('root');

//Default page load to initial route:
rootDiv.innerHTML = routes[route];

//Setup router_menu listeners:
const mainMenuArray=document.querySelectorAll('.spa_menu a');
//console.log(mainMenuArray);

//Loop through the items in the menu:
for (var i = 0; i < mainMenuArray.length; i++) {

    //Get the dataset of the current anchor tag:
    let linkData=mainMenuArray[i].dataset;

    //Set the click listener on it:
    mainMenuArray[i].addEventListener("click", function(){


      console.log('/'+linkData.link);
      console.log(routes['/'+linkData.link]);

      //Set the stub and path:
      let pathStub='/'+linkData.link;
      let pathname=rootDir+linkData.link;

      //Update the browser history:
      window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
      )


      //Write the currrent route content to page:
      rootDiv.innerHTML = routes[pathStub]

    });
}

//Monitor onpopstate, so that browser arrow navigation will work:
//https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]
}
