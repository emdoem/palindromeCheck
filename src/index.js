import "./styles.css";
import { palindromeCheck } from "./palindromeCheck";

console.log(palindromeCheck("level"));
console.log(palindromeCheck("hello"));
console.log(palindromeCheck("LevEl"));
console.log(palindromeCheck("In Girum Imus Nocte Et Consumimur Igni"));
console.log(palindromeCheck("Was it a car or a cat I saw?"));
console.log(palindromeCheck("Eva, can I stab bats in a cave?"));

document.getElementById("app").innerHTML = `
<h1>Vanilla Ice</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
