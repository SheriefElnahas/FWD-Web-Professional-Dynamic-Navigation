# Tshop For Online Shopping

This was an old project that i created using vanilla CSS ( no framework was used ).
I made some improvments including
1. Dynamic Navigation links based on the current secions
2. Smooth Scroll using vanilla Javascript
    -   I used the classic Javascript way without using any library or new features
    -   Using smooth scroll library would work but it won't cover 100% of the browsers.
    -   Same thing with scrollIntoView method it is not fully supported in all browsers yet.
    -   Pure css using scroll behavior property is not fully supported yet.
3. Add functionality to distinguish the section in view ( Active Class On Current Section )
4. Improve Performance ( Lighthouse ) from 40% to 99% by doing these things
    - Removed icons library that was effecting performance and replaced that by fontawesome
    - Used loading lazy loading attribute to HTML images 
    - Resize the images to reduce space and time

## Problems to fix later

onscroll event is not the best choice for performance as it will fire an event whenever we scroll. I know that there is a new , better way to achieve the same goals using observers but i need to study it first.

