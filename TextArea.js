export const TextArea = () => {
    const title = document.getElementById('title');
    const textInput = document.getElementById('textInput');
    const Rtitle = document.getElementById('Rtitle');
    
    const paraCount = document.getElementById('paraCount');
    const sentCount = document.getElementById('sentCount');
    const wordCount = document.getElementById('wordCount');
    const charCount = document.getElementById('charCount');
    const numCount = document.getElementById('numCount');
    const speCount = document.getElementById('speCount');
    
    const button = document.getElementById('countButton');
    const resetbut = document.getElementById('resetButton');

    // Using an object 
    const resultNames = {
        para: "Paragraphs: ",
        sent: "Sentences: ",
        word: "Words: ",
        char: "Characters: ",
        num: "Numbers: ",
        spe: "Special Characters: "
    };

    // Result value
    const resultValue = {
        para: 0,
        sent: 0,
        word: 0,
        char: 0,
        num: 0,
        spe: 0
    };

    button.innerHTML = 'Count';
    resetbut.innerHTML = 'Reset';
    textInput.placeholder = "Add Text here...";
    textInput.name = 'textinput';

    const ResultUpdate = () => {
        // Assign values using the object
        paraCount.innerHTML = `<strong>${resultNames.para}</strong> ${resultValue.para}`;
        sentCount.innerHTML = `<strong>${resultNames.sent}</strong> ${resultValue.sent}`;
        wordCount.innerHTML = `<strong>${resultNames.word}</strong> ${resultValue.word}`;
        charCount.innerHTML = `<strong>${resultNames.char}</strong> ${resultValue.char}`;
        numCount.innerHTML = `<strong>${resultNames.num}</strong> ${resultValue.num}`;
        speCount.innerHTML = `<strong>${resultNames.spe}</strong> ${resultValue.spe}`;
    }
    // paragraph count
    const paraFunc = (inputVal) => {
        resultValue.para = inputVal.trim().split(/\n+/).filter(p => p.trim().length > 0).length;
    }
    // sentence count
    const sentenceFunc = (inputVal) => {
        resultValue.sent = inputVal.trim().split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    }

    // Word count 
    const wordFunc = (inputVal) => {
        resultValue.word = inputVal.trim().split(/\s+/).filter(word => word.length > 0).length;
    }

    // Character count 
    const charFunc = (inputVal) => {
        resultValue.char = inputVal.trim().length;

    }
    // number count
      const numFunc = (inputVal) => {
        resultValue.num = (inputVal.match(/\d+/g) || []).length;
    }
    // special char count
      const specialFunc = (inputVal) => {
        resultValue.spe = (inputVal.match(/[^a-zA-Z0-9\s]/g) || []).length;
    }

    // button then all value will change
    const handleEvent = () => {
        const inputVal = textInput.value; // inputs
        // call all function
        paraFunc(inputVal);
        sentenceFunc(inputVal); 
        charFunc(inputVal);
        wordFunc(inputVal);
        numFunc(inputVal);
        specialFunc(inputVal);

        ResultUpdate(); // add funciton then
    }

    button.addEventListener('click', () => { handleEvent()});

    resetbut.addEventListener('click', () => {
        textInput.value = ''; 

        resultValue.para = 0;
        resultValue.sent = 0;
        resultValue.word = 0;
        resultValue.char = 0;
        resultValue.num = 0;
        resultValue.spe = 0;
        ResultUpdate(); // calling it 
    })

    ResultUpdate(); // calling it 
    
    return { title, textInput, Rtitle, paraCount, sentCount, wordCount, charCount, numCount, speCount, button, resetbut};
};
