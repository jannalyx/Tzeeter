const updateCharCount = (textarea, charCountElement) => {
 maxLength = 140;
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
  