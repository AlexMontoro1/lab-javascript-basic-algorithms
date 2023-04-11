// Iteration 1: Names and Input

let hacker1 = "alex";
console.log(`The driver name is ${hacker1}`);
let hacker2 = "mary";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${
      hacker1.length && hacker2.length
    } characters!`
  );
}

// Iteration 3: Loops
let hacker1StrongName = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1StrongName += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1StrongName);

let hacker1ReverseName = "";
for (let j = hacker1.length - 1; j >= 0; j--) {
  hacker1ReverseName += hacker1[j];
}
console.log(hacker1ReverseName);

/*if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 > hacker1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
}*/

if (hacker1.localeCompare(hacker2)) {
  console.log("The driver's name goes first.");
} else if (hacker2.localeCompare(hacker1)) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// BONUS !! Generate 3 paragraphs. Store the text in a new string variable named longText.

let longtext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam lectus, venenatis eu sapien in, rutrum scelerisque lacus. Aliquam semper vulputate rhoncus. Aliquam nunc arcu, sodales sit amet tincidunt vel, posuere in turpis. Etiam ut sodales lacus, dignissim iaculis odio. Aenean condimentum porta finibus. Sed tellus massa, ultrices eget consectetur sed, egestas consectetur nibh. Sed sit amet tortor massa. Donec nec ornare purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.Proin venenatis, turpis fringilla fringilla laoreet, justo orci pharetra lorem, vel dapibus est urna interdum mauris. Aliquam eu enim ut diam consequat tincidunt vel eget dolor. Nulla euismod, tellus et volutpat mattis, ex elit pretium eros, sit amet sollicitudin turpis risus eget turpis. Aenean ante ligula, bibendum et molestie et, commodo at risus. Suspendisse potenti. Curabitur nunc quam, maximus quis turpis sit amet, pharetra efficitur libero. Praesent efficitur, dui a congue aliquam, eros massa condimentum ex, eu gravida velit lorem ut turpis. In eget mattis turpis. Nunc eget metus vitae nisi ullamcorper iaculis. Vestibulum rutrum risus eget tellus ornare semper.Etiam sed urna id tortor placerat congue. Vestibulum tristique iaculis urna nec auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed massa vel neque porta fermentum ultricies ac nibh. Sed nunc magna, interdum at tortor et, luctus consectetur nulla. Aenean lectus metus, eleifend nec lectus at, pellentesque dapibus orci. Sed sit amet augue nec est interdum facilisis. Integer rutrum elementum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque consequat metus in velit porttitor, ut tincidunt felis aliquam. Vivamus pharetra imperdiet risus vitae mollis. Pellentesque quis nisl eu magna imperdiet viverra ac ac erat."

// Make your program count the number of words in the string.

let wordCount = longtext.split(" ").length;
console.log(wordCount);

// Otro ejemplo usando loop.

let wordCount2 = 1;

for (let i = 0; i < longtext.length; i++) {
  if (longtext[i] === " ") {
    wordCount2++;
  }
}

console.log(wordCount2);

// Make your program count the number of times the Latin word et appears.

let wordCountEt = 0;
for( let i = 0; i < longtext.length; i++){
  if(longtext[i] === "e" && longtext[i+1] === "t"){
    wordCountEt++;
  }
}
console.log(wordCountEt);

// Using this will count all "et" word but will count too the "et" inside the other words, so its not the best to do it.

let wordCount = longtext.split("et").length;
console.log(wordCount);

