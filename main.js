import { TextArea } from "./TextArea.js";

const {title, textInput, Rtitle, paraCount, sentCount, wordCount, charCount, numCount, speCount, button, resetbut} = TextArea();

const container = document.getElementById('container');
const resultDiv = document.getElementById('resultSection');
const butDiv = document.getElementById('buttons');
const about = document.getElementById('about');
const footer = document.getElementById('footer');

footer.style.textAlign = 'center';

about.style.padding = '40px 40px';

container.appendChild(title);
container.appendChild(textInput);
butDiv.appendChild(button);
butDiv.appendChild(resetbut);

resultDiv.appendChild(Rtitle);
resultDiv.appendChild(paraCount);
resultDiv.appendChild(sentCount);
resultDiv.appendChild(wordCount);
resultDiv.appendChild(charCount);
resultDiv.appendChild(numCount);
resultDiv.appendChild(speCount);
