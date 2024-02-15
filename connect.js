// script.js
function showDoctorInfo(name, specialization, experience, imageSrc) {
    const popup = document.getElementById('popup');
    const doctorName = document.getElementById('doctor-name');

    doctorName.textContent = `Chat with your doctor`;

    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}


const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage(event) {
    if (event.key === 'Enter' && userInput.value.trim() !== '') {
        const userMessage = userInput.value;
        appendMessage('user', userMessage);
        const botResponse = 'Hi, I am your doctor, how can I help you?';
        appendMessage('bot', botResponse);
        userInput.value = '';
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;

    if (sender === 'user') {
        messageElement.classList.add('user-message');
    } else if (sender === 'bot') {
        messageElement.classList.add('bot-message');
    }

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

window.addEventListener('scroll', reveal);
    
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop =  reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

function openModal1() {
    document.getElementById('myModal1').style.display = 'block';
    document.getElementById('modalOverlay1').style.display = 'block';
  }

  function closeModal1() {
    document.getElementById('myModal1').style.display = 'none';
    document.getElementById('modalOverlay1').style.display = 'none';
  }

  document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Booking submitted! We will contact you soon.');
    closeModal1();
  });
