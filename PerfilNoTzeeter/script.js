document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const submitButton = document.getElementById('submitButton');
    const signupSubmitButton = document.getElementById('signupSubmitButton');
  
    loginForm.addEventListener('input', function() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      submitButton.disabled = !(email && password);

      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      const emailValid = emailPattern.test(email);
      if (email && !emailValid) {
        alert("Por favor, insira um email válido.");
      }
    });
  
    signupForm.addEventListener('input', function() {
      const name = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const dobMonth = document.getElementById('dobMonth').value;
      const dobDay = document.getElementById('dobDay').value;
      const dobYear = document.getElementById('dobYear').value;
      const terms = document.getElementById('terms').checked;

      const isValid = name && email && password && confirmPassword && dobMonth && dobDay && dobYear && terms;
      signupSubmitButton.disabled = !isValid || password !== confirmPassword || password.length < 6;
    });
  
    const closeBtn = document.getElementById('closeBtn');
    closeBtn.addEventListener('click', function() {
      window.location.href = 'login.html';
    });
  
    const updateCharCount = (textarea, charCountElement) => {
      const maxLength = 140;
      const remainingChars = maxLength - textarea.value.length;
      charCountElement.textContent = `${remainingChars} caracteres restantes`;
  
      if (remainingChars <= 40) {
        charCountElement.style.color = "rgb(255, 200, 0)";
      } else if (remainingChars < 0) {
        charCountElement.style.color = "rgb(255, 0, 0)";
      } else {
        charCountElement.style.color = "black";
      }
    };
  
    const toggleSendButton = (textarea, button) => {
      const isValid = textarea.value.length > 0 && textarea.value.length <= 140;
      button.disabled = !isValid;
    };

    const tzeetInput = document.getElementById("tzeet-text");
    const charCount = document.getElementById("char-count");
    const sendBtn = document.getElementById("send-btn");
  
    const modalTzeetInput = document.getElementById("modal-tzeet-text");
    const modalCharCount = document.getElementById("modal-char-count");
    const modalSendBtn = document.getElementById("modal-send-btn");
  
    tzeetInput.addEventListener("input", () => {
      updateCharCount(tzeetInput, charCount);
      toggleSendButton(tzeetInput, sendBtn);
    });
  
    modalTzeetInput.addEventListener("input", () => {
      updateCharCount(modalTzeetInput, modalCharCount);
      toggleSendButton(modalTzeetInput, modalSendBtn);
    });
  
    document.getElementById("open-modal-btn").addEventListener("click", () => {
      const modal = document.getElementById("tzeet-modal");
      modal.showModal();
    });
  });
  