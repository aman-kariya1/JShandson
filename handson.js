// Function to show question + answer in correct section
function show(section, question, answer) {
  let div = document.createElement("div");
  div.className = "question";
  div.innerHTML = "<h3>" + question + "</h3><div class='answer'>" + answer + "</div>";
  document.getElementById(section).appendChild(div);
}

/* ----------------- JS HANDSON (Q1–Q8) ----------------- */

// Q1
let num = 18;
let ans1 = (num % 6 === 0 && num % 9 === 0) ? "Yes" : "No";
show("output1", "Q1: Is " + num + " divisible by 6 and 9?", ans1);

// Q2
let age = 20;
let ans2 = (age >= 18) ? "Eligible to vote" : "Not eligible";
show("output1", "Q2: Age " + age + " eligible to vote?", ans2);

// Q3
let X = 10, Y = 20;
let ans3 = (X < Y) ? "X < Y" : (X > Y ? "X > Y" : "X = Y");
show("output1", "Q3: Compare X=" + X + " and Y=" + Y, ans3);

// Q4
let M = 35;
let grade;
switch (true) {
  case (M <= 10): grade = "E"; break;
  case (M <= 20): grade = "D"; break;
  case (M <= 30): grade = "C"; break;
  case (M <= 40): grade = "B"; break;
  case (M <= 50): grade = "A"; break;
  default: grade = "Invalid";
}
show("output1", "Q4: Marks " + M + " → Grade", grade);

// Q5
let ch = 'p';
let map;
switch (ch.toLowerCase()) {
  case 'p': map = "PrepBytes"; break;
  case 'z': map = "Zenith"; break;
  case 'e': map = "Expert Coder"; break;
  case 'd': map = "Data Structure"; break;
  default: map = "Invalid";
}
show("output1", "Q5: Character '" + ch + "'", map);

// Q6
let a = 15, b = 25, c = 20;
let largest;
if (a === b && b === c) largest = "All Equal";
else if (a >= b && a >= c) largest = a;
else if (b >= a && b >= c) largest = b;
else largest = c;
show("output1", "Q6: Largest among (" + a + "," + b + "," + c + ")", largest);

// Q7
let x = 5, y = 10, z = 7;
let second;
if ((x > y && x < z) || (x > z && x < y)) second = x;
else if ((y > x && y < z) || (y > z && y < x)) second = y;
else second = z;
show("output1", "Q7: Second smallest among (" + x + "," + y + "," + z + ")", second);

// Q8
let A = 60, B = 60, C = 60;
let type;
if (A + B + C === 180) {
  if (A < 90 && B < 90 && C < 90) type = "Acute";
  else type = "Obtuse";
} else type = "Not valid";
show("output1", "Q8: Triangle (" + A + "," + B + "," + C + ")", type);


/* -------- JS HANDSON (Iteration Statement) (Q1–Q8 again) -------- */

// Q1
let num1 = 12345;
show("output2", "Q1: Digits in " + num1, String(num1).length);

// Q2
let num2 = 5523455;
let count = 0;
for (let i = 0; i < String(num2).length; i++) {
  if (String(num2)[i] === "5") count++;
}
show("output2", "Q2: Count of 5 in " + num2, count);

// Q3
let N = 10, sumEven = 0;
for (let i = 2; i <= N; i += 2) sumEven += i;
show("output2", "Q3: Sum of even numbers till " + N, sumEven);

// Q4
let num3 = 1234, sumDigits = 0;
for (let i = 0; i < String(num3).length; i++) {
  sumDigits += parseInt(String(num3)[i]);
}
show("output2", "Q4: Sum of digits of " + num3, sumDigits);

// Q5
let lines = 5, pattern = "";
for (let i = 1; i <= lines; i++) {
  for (let j = 1; j <= i; j++) pattern += "*";
  pattern += "<br>";
}
show("output2", "Q5: Pattern of " + lines + " lines", pattern);

// Q6
let num4 = 29, prime = true;
if (num4 <= 1) prime = false;
else {
  for (let i = 2; i <= Math.sqrt(num4); i++) {
    if (num4 % i === 0) { prime = false; break; }
  }
}
show("output2", "Q6: Is " + num4 + " prime?", prime ? "Yes" : "No");

// Q7
let N2 = 10, nums = "";
for (let i = 1; i <= N2; i++) nums += i + " ";
show("output2", "Q7: Numbers till " + N2, nums);

// Q8
let num5 = 7, table = "";
for (let i = 1; i <= 10; i++) {
  table += num5 + " x " + i + " = " + (num5 * i) + "<br>";
}
show("output2", "Q8: Table of " + num5, table);
