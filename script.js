function loadHTML(url, id, callback) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const container = document.getElementById(id);
      container.innerHTML = data;
      executeScripts(container);
      if (callback) callback();
    })
    .catch(err => console.error(err));
};

function executeScripts(container) {
  // Find all script tags in the container
  const scripts = Array.from(container.querySelectorAll("script"));

  // For each script, create a new script element and copy attributes
  scripts.forEach(oldScript => {
    const newScript = document.createElement("script");
    Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));

    // If the script has a src attribute, set it anew to force it to load
    if (oldScript.src) {
      newScript.src = oldScript.src;
    } else {
      newScript.textContent = oldScript.textContent;
    }

    // Replace the old script with the new one
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}

  document.addEventListener('DOMContentLoaded', (event) => {
    loadHTML('html/menu.html', 'master-menu');
    loadHTML('html/footer.html', 'master-footer');
    loadHTML('html/contact-form.html', 'openContactForm');
  });





// TEST SAMMA SOM OVAN MEN UTAN ATT BEHÖVA SKROLLA
document.addEventListener('DOMContentLoaded', (event) => {
  const h2Element = document.querySelector('.fade-highlight');

  // Check if the element exists to avoid errors
  if (h2Element) {
    h2Element.classList.add('visible');
    animateWords(h2Element);
  }
});

function animateWords(element) {
  let words = element.textContent.split(' ');
  element.innerHTML = '';
  words.forEach((word, index) => {
    let wordSpan = document.createElement('span');
    wordSpan.textContent = word + ' ';
    wordSpan.classList.add('word-highlight');
    wordSpan.style.animationDelay = `${0.5 + index * 0.5}s`;
    element.appendChild(wordSpan);
  });
}

// ----

// NEDAN ÄR FUNKTIONEN FÖR FADE-IN ITEM FÖR CLIENTS LOGGOR

document.addEventListener("DOMContentLoaded", function() {
  const fadeItems = document.querySelectorAll('.fade-item' || '#activateOnScroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = 1;
        }, index * 500); // Delay between each fade-in, adjust as needed
      }
    });
  }, { threshold: 0.5 }); // Adjust threshold as needed

  fadeItems.forEach(item => {
    observer.observe(item);
  });
});
// 

// NEDAN ÄR FADE IN FÖR INTRO-CONTAINER
document.addEventListener('scroll', function() {
  const introContainer = document.querySelector('.intro-container');
  if (!introContainer) return;

  const windowHeight = window.innerHeight;
  const elementRect = introContainer.getBoundingClientRect();
  const elementMid = elementRect.top + elementRect.height / 2;

  // Calculate the range for 70% of the vertical center
  const upperThreshold = windowHeight * 0.90; // 70% from the top
  const lowerThreshold = windowHeight * 0.10; // 70% from the bottom

  // Check if the middle of the element is within 70% of the viewport height
  if (elementMid > lowerThreshold && elementMid < upperThreshold) {
      introContainer.style.opacity = '1';
  } else {
      introContainer.style.opacity = '0.5';
  }
});



// TEST TILTCARD I HERO
let constrain = 20; // You can adjust this for more/less sensitivity
let mouseOverContainer = document.getElementById("home-hero-two");
let tiltCard = document.getElementById("tilt-card");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;

  return "perspective(100px) " // Adjust perspective depth if needed
    + "rotateX(" + calcX + "deg) "
    + "rotateY(" + calcY + "deg) ";
};

function transformElement(el, xyEl) {
  el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([tiltCard]);

  window.requestAnimationFrame(function() {
    transformElement(tiltCard, position);
  });
};


let smileText = document.querySelector(".smile");

smileText.addEventListener('click', function() {
  let headerSmiley = document.getElementById('h2SadSmiley')
  let headerSadSmiley = document.getElementById('h2Smiley')
    if (smileText.textContent === ':)') {
        smileText.textContent = ':(';
        headerSadSmiley.classList.remove('hidden');
        headerSmiley.classList.add('hidden');
      
    } else {
        smileText.textContent = ':)';
       headerSadSmiley.classList.add('hidden');
       headerSmiley.classList.remove('hidden');
    }
    console.log('You clicked');
});

// slut på funktionEER



// Test expanding-knapp

const embraceButton = document.querySelector('#embraceButton');
const embraceText = document.querySelector('.embraceText');
const embraceAnswer = document.querySelector('.embrace-answer');
const embraceAnswerTwo = document.querySelector('.embrace-answer2');

const words = ['you', 'are', 'curious'];
let currentWordIndex = 0;

const tellMoreButton = document.querySelector('#tellMoreButton');

// Add an event listener to the button
embraceButton.addEventListener('click', () => {
    // Append the current word to the text content
    embraceText.textContent += ' ' + words[currentWordIndex];

    embraceButton.textContent = 'Try again';
    // Increment the counter
    currentWordIndex++;
    if (currentWordIndex === 2) {
      embraceButton.textContent = 'One last time';
      // Increment the counter
      // currentWordIndex++;
    } 
 

    // If the counter reaches the end of the words array, reset it to 0
    if (currentWordIndex >= words.length) {
        embraceButton.classList.add('hidden')
        embraceAnswer.classList.remove('hidden');
        tellMoreButton.classList.remove('hidden');
    }

    tellMoreButton.addEventListener('click', () => {
      embraceAnswerTwo.classList.remove('hidden');
      tellMoreButton.classList.add('hidden');
    
    })
});


// 

// NEDAN ÄR LAPTOP SOM RÖR SIG I SAMBAND MED SKROLL
// let lastScrollTop = 0;
// const video = document.getElementById("myVideo");

// function isVideoNearViewportBottom() {
//     const rect = video.getBoundingClientRect();
//     const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
//     return rect.bottom <= (viewportHeight + 100);
// }

// window.addEventListener("scroll", function(){
//    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//    if (currentScroll > lastScrollTop){
//        // Scrolling down
//        if (isVideoNearViewportBottom()) {
//            video.currentTime += 0.1; // Adjusted scroll speed to 0.05
//        }
//    } else {
//       // Scrolling up
//       video.currentTime -= 0.1; // Adjusted scroll speed to 0.05
//    }

//    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
// }, false);


// 
document.querySelector('.bird').addEventListener('click', function() {
  this.classList.toggle('clicked');
  console.log('du klicka');
});

// CLIENT LOGO CAROUSEL SLIDER 
// document.addEventListener('DOMContentLoaded', () => {
//   const logoContainer = document.getElementById('logo-container');
//   const logos = Array.from(document.querySelectorAll('.client-logo2'));
//   let featuredIndex = 2; // The third logo is initially featured

//   const spacing = window.innerWidth > 768 ? 350 : 220; // 300px for screens wider than 768px, 100px for narrower screens

// function moveLogos() {
//     // Move the first logo to the end to create a looping effect
//     const firstLogo = logos.shift(); // Remove the first logo from the array
//     logos.push(firstLogo); // Add it to the end
//     logoContainer.appendChild(firstLogo); // Move it in the DOM

//     // Update featured logo
//     logos.forEach((logo, index) => {
//       logo.classList.remove('featured');
//       if (index === featuredIndex) {
//           logo.classList.add('featured');
//       }
//   });
//     // Calculate and apply new positions using fixed pixel spacing
//     logos.forEach((logo, index) => {
//       let newPosition = (index - featuredIndex) * spacing;
//       logo.style.transform = `translateX(${newPosition}px)`;
//   });
// }


//   // Initial positioning
//   moveLogos();

//   // Move logos every 2 seconds
//   setInterval(moveLogos, 4000);
// });



// TEST AV BIRD SOM FLYGER PÅ KLICK

