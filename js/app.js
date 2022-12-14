// **************************************************************************************************************
//                                   Dynamic Navigation Links Based On Sections
// **************************************************************************************************************

// Select Elements
const sections = document.querySelectorAll("section");
const ulElement = document.querySelector(".main-nav-list");

let dynamicNavigationHTML = "";

function buildNavbar() {
  // Loop over each section
  sections.forEach((section) => {
    // Extract The id Of Each Section

    const sectionId = section.id;

    dynamicNavigationHTML += `<li><a class="main-nav-link" data-link=${sectionId} href="#${sectionId}">${
      sectionId[0] + sectionId.slice(1)
    }</a></li>`;
  });
  // Add the dynamic navigation to the navbar and make sure that this step is outside the loop for better performance.
  ulElement.innerHTML = dynamicNavigationHTML;
}

buildNavbar();
// Select the links after creating it dnyamically in JS
const links = document.querySelectorAll(".main-nav-link");

// **************************************************************************************************************
//                                  Apply Active Class On Navbar Links
// **************************************************************************************************************
let headerHeight = 0;

// Removing Active Class Helper Function
const removeAllActiveClasses = () => {
  document.querySelectorAll(".main-nav-link").forEach((link) => {
    link.classList.remove("active-btn");
  });
};

// Add Active Class Helper Function
const addActiveClass = (id) => {
  // build a selector for the nav link based on the id of the section
  const selector = `ul li a[href='#${id}']`;

  // Select that link by using the selector that we just built.
  const navLink = document.querySelector(selector);
  navLink.classList.add("active-btn");
};

onscroll = function () {
  const scrollPosition = document.documentElement.scrollTop;

  // Extract header height based on the current veiw height
  headerHeight = document.querySelector("header").clientHeight;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - headerHeight - 5 &&
      scrollPosition < section.offsetTop + section.offsetHeight
    ) {
      //  Figure Out Which section we are currently on by getting the id
      const currentId = section.id;


      // Remove active class from all the links - then add active class to the link of the section that we are currently on.
      removeAllActiveClasses();
      section.classList.remove('active');

      // Pass this id to add active function
      addActiveClass(currentId);
      section.classList.add('active')
    }
  });
};

// **************************************************************************************************************
//                                          Apply Smoth Scroll
// **************************************************************************************************************
// Helper Function
const smoothScroll = (target, duration) => {
  // Extract the section that we want to navigation after clicking on the corresponding navigation linik
  const location = document.querySelector(target);
  // this wil lget the element relative position to the top of the screen
  const targetPosition = location.getBoundingClientRect().top - headerHeight;

  // his is the position relative to the window object itself not the actual element
  const currentPosition = window.scrollY;

  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, currentPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  // Ease Function
  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

// Applying The Smooth Scroll Function To Each Link
links.forEach((link) => {
  link.addEventListener("click", () => {
    // Extract section id
    const sectionId = `#${link.textContent}`;
    smoothScroll(sectionId, 1000);
  });
});
