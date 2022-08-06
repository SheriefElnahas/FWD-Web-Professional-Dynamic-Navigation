// *************************************** Dynamic Navigation Links Based On Sections ( Start ) *************************
// Select Elements
const sections = document.querySelectorAll('section');
const ulElement = document.querySelector('.main-nav-list');


let dynamicNavigationHTML = '';

function buildNavbar() {
    // Loop over each section
    sections.forEach((section) => {
        // Extract The id Of Each Section

        const sectionId = section.id;

   
        dynamicNavigationHTML += `<li><a class="main-nav-link active" href="#${sectionId}">${sectionId[0] + sectionId.slice(1)}</a></li>`
        
    })
    // Add the dynamic navigation to the navbar and make sure that this step is outside the loop for better performance.
    ulElement.innerHTML = dynamicNavigationHTML;
}


buildNavbar();
// *************************************** Dynamic Navigation Links Based On Sections ( End ) *************************

