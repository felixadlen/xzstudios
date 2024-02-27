const btnOpenForms = document.querySelectorAll('.btnOpenForm');
const formContainer = document.getElementById('contactForm');
const form = document.getElementById("form");
const result = document.getElementById("result");
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
  
  // Show the loading div
  document.querySelector('.load').style.display = 'inline-flex'; 

  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.textContent = '';

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
        result.textContent = json.message;
        // Hide form elements and display thank you message
        form.style.display = "none";
        result.style.display = "none";
        const name = object.name || ""; // Get the name from the form data
        thankYouMessage.textContent = `Thank you for your message, ${name}! We bet it was a nice message.`; // Update thankYouMessage content
        thankYouMessage.style.display = "block";
        document.querySelector(".form-container h3").style.display = "none";
        document.querySelector(".form-container p").style.display = "none";
      } else {
        console.log(response);
        result.textContent = json.message; // ÄNDRA DENNA TILL INNERHTML OM FORMULÄRET STRULAR
      }
    })
    .catch((error) => {
      console.log(error);
      result.textContent = "Something went wrong!";  // ÄNDRA DENNA TILL INNERHTML OM FORMULÄRET STRULAR
    })
    .finally(() => {
      // Hide the loading div
      document.querySelector('.load').style.display = 'none'; 
    });
});
