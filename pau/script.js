document.addEventListener("DOMContentLoaded", function() {


    var homeBar = document.getElementById("home-bar");
    var homeSection = document.getElementById("home");
  
      homeBar.addEventListener("click", function(event) {
      event.preventDefault();
      homeSection.scrollIntoView({ behavior: "smooth" });
    });


    var aboutBar = document.getElementById("about-bar");
    var aboutSection = document.getElementById("about");
  
      aboutBar.addEventListener("click", function(event) {
      event.preventDefault();
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    var skillBar = document.getElementById("skill-bar");
    var skillSection = document.getElementById("skills");
  
      skillBar.addEventListener("click", function(event) {
      event.preventDefault();
      skillSection.scrollIntoView({ behavior: "smooth" });
    });

    var educBar = document.getElementById("educ-bar");
    var educSection = document.getElementById("educ");
  
      educBar.addEventListener("click", function(event) {
      event.preventDefault();
      educSection.scrollIntoView({ behavior: "smooth" });
    });

    var contactBar = document.getElementById("contact-bar");
    var contactSection = document.getElementById("contact");
  
      contactBar.addEventListener("click", function(event) {
      event.preventDefault();
      contactSection.scrollIntoView({ behavior: "smooth" });
    });



});