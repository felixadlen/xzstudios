const btnOpenForms = document.querySelectorAll('.btnOpenForm');
const formContainer = document.getElementById('contactForm');
const form = document.getElementById("form");
const result = document.getElementById("result");
// const btnCloseForm = document.getElementById('btnCloseForm')
const btnCloseForms = document.querySelectorAll('.btnCloseForm'); 
const thankYouMessage = document.getElementById("thankYouMessage");
const openContactForm = document.getElementById('openContactForm')

btnOpenForms.forEach(btn => {
  btn.addEventListener('click', function() {
      openContactForm.classList.remove('hidden');
  });
});

btnCloseForms.forEach(btn => {
  btn.addEventListener('click', function() {
    openContactForm.classList.add('hidden');
  });
});

formContainer.addEventListener('click', function(event) {
  if (event.target === formContainer) {
    openContactForm.classList.add('hidden');
  }
});


//

// Event listener for the form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = '';

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        // Hide form elements and display thank you message
        form.style.display = "none";
        result.style.display = "none";
        const name = object.name || ""; // Get the name from the form data
        thankYouMessage.innerHTML = `Thank you for your message, ${name}! We bet it was a nice message.`; // Update thankYouMessage content
        thankYouMessage.style.display = "block";
        document.querySelector(".form-container h3").style.display = "none";
        document.querySelector(".form-container p").style.display = "none";
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    });
});
