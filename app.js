function onPageLoad() {
    bindEventListenerToTextArea();
}

function bindEventListenerToTextArea() {
    const element = document.querySelector('textarea');
    element.addEventListener('keydown', handleKeyDownOnTextArea)
}

function handleKeyDownOnTextArea() {
    const element = document.querySelector('textarea');
    const userInput = element.value;
    
    const charCount = getCharacterCount();
    const wordCount = getWordCount();

    const showCharacterCount = document.getElementById('countChar');
    const showWordCount = document.getElementById('countWord');

    showCharacterCount.textContent = charCount;
    showWordCount.textContent = wordCount;
}

function getCharacterCount() {
    const element = document.querySelector('textarea');
    const userInput = element.value;

    return userInput.length;
}

function getWordCount() {
    const element = document.querySelector('textarea');
    const userInput = element.value;

    const wordArray = userInput.split(/\s+/g);
    return wordArray.length
}

window.onload = onPageLoad;