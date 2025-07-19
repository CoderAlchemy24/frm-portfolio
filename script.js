const fullname = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const button = document.getElementById("submit-btn");

const errors = document.getElementsByClassName("contact__error-message");


Array.from(errors).forEach((el) => {
  el.style.display = "none";
});

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to hide error message when user types
function hideErrorOnInput() {
  // Hide name error when typing in name field
  fullname.addEventListener("input", () => {
    if (fullname.value.trim() !== '') {
      errors[0].style.display = "none";
    }
  });

  // Hide email error when typing in email field
  email.addEventListener("input", () => {
    if (email.value.trim() !== '' && isValidEmail(email.value)) {
      errors[1].style.display = "none";
    }
  });

  // Hide message error when typing in message field
  message.addEventListener("input", () => {
    if (message.value.trim() !== '') {
      errors[2].style.display = "none";
    }
  });
}

// Initialize hide on input functionality
hideErrorOnInput();

button.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Validate name field
  if (fullname.value.trim() === '') {
    errors[0].style.display = "block";
  } else {
    errors[0].style.display = "none";
  }

  // Validate email field
  if (email.value.trim() === '' || !isValidEmail(email.value)) {
    errors[1].style.display = "block";
  } else {
    errors[1].style.display = "none";
  }

  // Validate message field
  if (message.value.trim() === '') {
    errors[2].style.display = "block";
  } else {
    errors[2].style.display = "none";
  }
});

// Contact button navigation functionality
const contactButtons = document.querySelectorAll('.about__contact-btn, .projects__contact-btn');
const contactSection = document.getElementById('contact');

contactButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    contactSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  });
});