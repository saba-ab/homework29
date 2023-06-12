const text = "Should I kill myself or have a cup of coffee?";
const secondText = "Today I prefer coffee.";
const textToTrim = "          coffee        ";
const textLen = text.length;
console.log(textLen);
const textSlice = text.slice(9, 13);
console.log(textSlice);
const textSubstr = text.substr(14, 6);
console.log(textSubstr);
const textReplace = text.replace("coffee", "orange juice");
console.log(textReplace);
const textLower = text.toLowerCase();
console.log(textLower);
const textUpper = text.toUpperCase();
console.log(textUpper);
const textMerge = text.concat(" ", secondText);
console.log(textMerge);
const trimedText = textToTrim.trim();
console.log(trimedText);
const trimedTextOnEnd = textToTrim.trimEnd();
console.log(trimedTextOnEnd);
const trimedTextOnStart = textToTrim.trimStart();
console.log(trimedTextOnStart);
const textPadStart = text.padStart(50, "!");
console.log(textPadStart);
const textPadEnd = text.padEnd(50, "?");
console.log(textPadEnd);
const textChar = text.charAt(7);
console.log(textChar);
const textCharCode = text.charCodeAt(7);
console.log(textCharCode);
const splitedText = text.split(" ");
console.log(splitedText);

// 2
let commentsArr = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
  },
  {
    postId: 1,
    id: 4,
    name: "alias odio sit",
    email: "Lew@alysha.tv",
    body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
  },
  {
    postId: 1,
    id: 5,
    name: "vero eaque aliquid doloribus et culpa",
    email: "Hayden@althea.biz",
    body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
  },
];

let commData = {};

const commForm = document.getElementById("commentForm");
commForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll(`input, textarea`);
  inputs.forEach((input) => {
    commData[input.name] = input.value.trim();
    if (input.value.trim() == " ") {
      const error = document.createElement("p");
      error.setAttribute("class", "error");
      error.textContent = "Please fill all inputs";
      commForm.appendChild(error);
    }
  });
  const keys = Object.keys(commData);
  const lastKey = keys.pop();
  delete commData[lastKey];
  commentsArr.push(commData);
  commForm.reset();
  commData = {};
});
const section = document.createElement("section");
document.body.appendChild(section);
const container = document.createElement("div");
container.setAttribute("class", "container");
section.appendChild(container);

for (let i = 0; i < commentsArr.length; i++) {
  let user = commentsArr[i];

  const card = document.createElement("div");
  card.setAttribute("class", "card");
  container.appendChild(card);
  const name = document.createElement("p");
  name.setAttribute("class", "bold");
  const email = document.createElement("a");
  email.setAttribute("href", `mailto:user.email`);
  const bodyText = document.createElement("p");
  bodyText.setAttribute("class", "light");
  name.textContent = user.name;
  email.textContent = user.email;
  bodyText.textContent = user.body;
  card.appendChild(name);
  card.appendChild(email);
  card.appendChild(bodyText);
  const remove = document.createElement("img");
  remove.setAttribute("src", "./media/trash-solid.svg");
  card.appendChild(remove);
  remove.addEventListener("click", () => {
    card.remove();
  });
}
