// 🎯 PART 1: Basics & Conditionals
function checkTeen() {
  const age = parseInt(document.getElementById("ageInput").value);
  const result = document.getElementById("ageResult");

  if (isNaN(age)) {
    result.textContent = "Uhh... that's not a number. Try again!";
  } else if (age >= 13 && age <= 19) {
    result.textContent = "Yup! You're totally a teen! 💥";
  } else {
    result.textContent = "Nope, you're not in the teen squad 😅";
  }
}

// ❤️ PART 2: Functions
function showFormattedName() {
  const name = "mia harper";
  const formatted = formatName(name);
  document.getElementById("formattedName").textContent = "Cool Name: " + formatted;
}

function formatName(name) {
  return name
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function calculateTotal() {
  const prices = [4.99, 7.50, 12.00];
  const total = getTotal(prices);
  document.getElementById("totalCost").textContent = "Total: $" + total.toFixed(2);
}

function getTotal(array) {
  return array.reduce((sum, item) => sum + item, 0);
}

// 🔁 PART 3: Loops
function showCountdown() {
  const countdownEl = document.getElementById("countdown");
  let output = "";

  for (let i = 5; i > 0; i--) {
    output += i + "... ";
  }
  output += "🎉 Let's Go!";
  countdownEl.textContent = output;
}

function listHobbies() {
  const hobbies = ["Skating", "Painting", "Coding", "Watching K-dramas"];
  const listEl = document.getElementById("hobbyList");
  listEl.innerHTML = ""; // clear previous items

  hobbies.forEach(hobby => {
    const li = document.createElement("li");
    li.textContent = hobby;
    listEl.appendChild(li);
  });
}

// 🌐 PART 4: DOM Interaction
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  const status = document.getElementById("domStatus");
  const isDark = document.body.classList.contains("dark-mode");
  status.textContent = isDark
    ? "🌑 You're in Dark Mode Vibes"
    : "☀️ Back to Bright and Light!";
}
