// 1.Write a function that changes the text content of a given element.

// Test Case:

//<p id="myParagraph">Original text</p>

// <button onclick="changeText()">Change Text</button>
function changeText() {
  let paragraph = document.getElementById("myParagraph");
  paragraph.textContent = " And He made it happen";
}

// 2. Write a function that counts and displays the number of characters in a text input.
// Test Case:

// <input type="text" id="textInput" oninput="characterCounter()">

// <p id="characterCount">0</p>

function characterCounter() {
  const inputElement = document.getElementById("textInput");
  const characterCountElement = document.getElementById("characterCount");
  const text = inputElement.value;
  const count = text.length;
  characterCountElement.textContent = count;
}

// 3. Create a simple image gallery that allows users to click on thumbnails and display the selected image in a larger view.

// Test Case:

// <div class="image-gallery">

//   <img src="image1.jpg" onclick="showImage('image1.jpg')">

//   <img src="image2.jpg" onclick="showImage('image2.jpg')">

//   <img src="image3.jpg" onclick="showImage('image3.jpg')">

// </div>

// <img id="largeImage" src="" style="display: none;">

function showImage(imageUrl) {
  const largeImageElement = document.getElementById("largeImage");
  largeImageElement.src = imageUrl;
  largeImageElement.style.display = "block";
}

// 4. Write a function that counts and displays the frequency of each word in a given sentence.

// Test Case:

// <textarea id="sentenceInput"></textarea>

// <button onclick="wordFrequencyCounter()">Count Words</button>

// <ul id="wordList"></ul>

// function frequencyWordCounter() {
//   const sentenceInput = document.getElementById("sentenceInput");
//   const wordList=document.getElementById('wordList');
//   const sentence=sentenceInput.value.trim().toLowerCase();

// }

// 5. Write a function that checks if two password inputs match and displays the result.

// Test Case:

// <input type="password" id="password1" placeholder="Enter password">

// <input type="password" id="password2" placeholder="Confirm password">

// <button onclick="checkPasswordMatch()">Check Match</button>

// <p id="matchResult"></p>

function checkPasswordMatch() {
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;
  const matchResultElement = document.getElementById("matchResult");
  if (password1 === password2) {
    matchResultElement.textContent = "password is correct";
  } else {
    matchResultElement.textContent = "password do not match!";
  }
}

// 6. Write a function that validates a credit card number and displays the result.

// Test Case:

// <input type="text" id="creditCardInput" placeholder="Enter credit card number">

// <button onclick="validateCreditCard()">Validate</button>

// <p id="validationResult"></p>

// 7. Create a dynamic list where users can add and remove items.

// Test Case:

// <input type="text" id="itemInput" placeholder="Enter item">

// <button onclick="addItem()">Add Item</button>

// <ul id="itemList"></ul>

// 8. Write a function that checks if a given word is a palindrome and displays the result.

// Test Case:

// <input type="text" id="wordInput" placeholder="Enter a word">

// <button onclick="checkPalindrome()">Check Palindrome</button>

// <p id="palindromeResult"></p>

function checkPalindrome() {
  const wordInput = document.getElementById("wordInput");
  const palindromeResultElement = document.getElementById("palindromeResult");
  const word = wordInput.value.trim().toLowerCase();

  if (isPalindrome(word)) {
    palindromeResultElement.textContent = "It's a palindrome!";
  } else {
    palindromeResultElement.textContent = "It's not a palindrome!";
  }
}

function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

// 9. Create a countdown timer that starts when a button is clicked and displays the remaining time.

// Test Case:

// <button onclick="startTimer(60)">Start Timer</button>

// <p id="timerDisplay">Time remaining: </p>

function startTimer(durationInSeconds) {
  const timerDisplay = document.getElementById("timerDisplay");
  let timeRemaining = durationInSeconds;

  const countdownInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      timerDisplay.textContent = "Time's up!";
    } else {
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      timerDisplay.textContent = `Time remaining: ${minutes}:${String(
        seconds
      ).padStart(2, "0")}`;
      timeRemaining--;
    }
  }
}

// 10. Create a dark mode toggle that switches the page between light and dark themes.

// Test Case:

// <button onclick="toggleDarkMode()">Toggle Dark Mode >

function toggleDarkMode() {
  const bodyElement = document.body;
  bodyElement.classList.toggle("dark-mode");
}

// three
//four
//seven
//six has to be done
//doubts has to be clarified
