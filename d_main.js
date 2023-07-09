const main = document.querySelector('main');

const joke1 = "Why did the snowman call his dog Frost? Because Frost bites.";
const joke2 = "Why did the programmer quit her job? Because she didn't get arrays.";
const joke3 = "What did the Java Code say to the C code? You've got no class.";

const template = `
    <h1>My Jokes</h1>
    <ul>
        <li>${joke1}</li>
        <li>${joke2}</li>
        <li>${joke3}</li>
    </ul>
`;

main.innerHTML = template;

const p = document.createElement('p');
p.textContent = "That's all folks!";

const body = document.querySelector('body');
body.appendChild(p);