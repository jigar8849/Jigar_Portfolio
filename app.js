
//Nav scrolling start

document.addEventListener("DOMContentLoaded", function () {
  let About = document.getElementById("nav-1");
  let Project = document.getElementById("nav-2");
  let Contact = document.getElementById("nav-3");

  let aboutSection = document.getElementById("about");
  let projectSection = document.getElementById("project");
  let contactSection = document.getElementById("contact");

  function smoothScrollToSection(section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    triggerSectionAnimation(section);
  }

  About.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollToSection(aboutSection);
  });

  Project.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollToSection(projectSection);
  });

  Contact.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollToSection(contactSection);
  });
  
  //Nav scrolling end

  // bottum to top start
  let TopPage = document.querySelector(".intro-page");
  let topBtn = document.querySelector("#scrollTopBtn");

  topBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    smoothScrollToSection(TopPage);
  });
  // bottum to top end
});

  // Country Code start

  const populateCountryCodes = () => {
    const countryCodeSelect = document.getElementById("countryCode");

    fetch("https://countriesnow.space/api/v0.1/countries/codes")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          const sortedCountries = data.data
            .filter((country) => country.name && country.dial_code)
            .sort((a, b) => a.name.localeCompare(b.name));

          sortedCountries.forEach((country) => {
            const option = document.createElement("option");
            option.value = country.dial_code;
            option.textContent = `${country.name} (${country.dial_code})`;
            countryCodeSelect.appendChild(option);
          });
        } else {
          console.error("Invalid data format", data);
        }
      })
      .catch((error) => console.error("Error fetching country codes:", error));
  };
  // Country Code end

  //call the function 
  document.addEventListener("DOMContentLoaded",()=>{
    populateCountryCodes();
  });


  // hemburger start

  let HM=document.querySelector("#hemburger");
  let CS=document.querySelector(".cross");
  let HC=document.querySelector(".nav-2");

  HM.addEventListener("click",()=>{
    HC.classList.add("show-menu");
    HC.classList.toggle("active");
    HM.style.display="none";
    CS.style.display="block";

    HC.style.display = "flex";
  });

  CS.addEventListener("click",()=>{
    HC.classList.remove("active");
    CS.style.display="none";
    HM.style.display="block";
    HC.style.display = "none";

  });


  // hemburger end
        
        