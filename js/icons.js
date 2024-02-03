// setup font awesome for social icons

import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faCat } from "@fortawesome/free-solid-svg-icons";

library.add(faCat);

const iconContainer = document.createElement('span');
iconContainer.innerHTML({ prefix: 'fas', iconName: 'cat' }).html

 document.querySelector('#cat').innerHTML = "FOOOOO";
// const catDiv = document.querySelector('#cat').innerHTML = "FOOOOO";
// catDiv.textContent += 'foo';
// catDiv.appendChild(iconContainer);