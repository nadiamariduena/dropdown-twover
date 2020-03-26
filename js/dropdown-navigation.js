function init() {
  //update DCI - 26 march 2020: Now i understand what a function is, so this Function is a function wrapper.
  //theory CIMDATA  - july 2019:
  //init is a function for initialisation, it initialise a whole webpage or a particular type of object.

  // ----------------------------
  //update DCI - 26 march 2020: const is a very secure way to declare a variable.
  //theory CIMDATA  - july 2019:
  //A constant or const*, is a data structure that contains information that will never change.
  // If there is room for error, var* should always be used.

  //query selector will only take one, if i say query selector all
  //in a ul li ,it will take the li, but will depend of what i am doing

  const hamburger = document.querySelector(".menu");
  // the SVG  lines _menu , _line inside the html
  const hamburgerLines = document.querySelectorAll(".menu line");
  const navOpen = document.querySelector(".nav-open");
  const contact = document.querySelector(".contact");
  const services = document.querySelector(".services");
  const collections = document.querySelector(".collections");

  const logo = document.querySelector(".logo");

  //TimelineMax is a cool library i just started to discover
  //**********this line is connected to the 58 line, it will check these 3 steps, tl.reversed() ? tl.play() : tl.reverse();  so what it will do is: it *checks, it *plays the animation then it *reverse!
  const tl = new TimelineMax({ paused: true, reversed: true });
  //fading lapses and colors change while fading

  //colors and opacity when animated depending of the AXES,
  //tl correspond to the TimelineMax variable (its just a shortcut)
  tl.to(navOpen, 0.6, { y: 0 }) //its going to bring it back to 0 after 0.6 secs
    // from to will allow me to have an starting value and an ending value, just like in css @keyframes
    .fromTo(contact, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.1")
    .fromTo(services, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.1")
    .fromTo(
      collections,
      0.5,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0 },
      "-=0.1"
    )
    //corresponds to the delay in second or milisecs.
    .fromTo(logo, 0.5, { color: "#000" }, { color: "#ffffff" }, "-=1") //corresponds to the delay 1 second.
    .fromTo(
      hamburgerLines,
      0.2,
      { stroke: "#000" }, //color of the hamburger
      { stroke: "#223fe5" }, //color of the hamburger once clicked
      "-=1"
    ); //end/it will fade as soon as it reaches the ground/corresponds to the delay 1 second.
  //
  //
  // -----------------the--backward-effect-after-opening-the dropdown---------------
  //
  //
  hamburger.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse(); //here i  tell the browser that when i click the hamburger,it
    //will go reversed once done/just like backwards in @keyframes
    //? statement
  });
}
//new function

// Here you are calling the mother/wrapper function on the beginning of the page.
//with the calling, you are telling that you are done with it!!
init(); //function init() line 1
