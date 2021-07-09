let map = {
    "a": "ا",
    "b": "ب",
    "c": "",
    "d": "د",
    "e": "",
    "f": "ف",
    "g": "",
    "h": "ح",
    "i": "ی",
    "j": "ج",
    "k": "ک",
    "l": "ل",
    "m": "م",
    "n": "ن",
    "o": "",
    "p": "پ",
    "q": "ق",
    "r": "ر",
    "s": "س",
    "t": "ت",
    "u": "",
    "v": "",
    "w": "و",
    "x": "",
    "y": "ے",
    "z": "",
};

let editor = document.getElementById("urdu-text-editor");

editor.addEventListener("input", function () {

    let editorText = editor.value;
    let newText = "";

    for (let i = 0; i < editorText.length; i++) {

        let urduChar = map[editorText[i]];

        if(urduChar)
            newText += urduChar;
        else
            newText += editorText[i];
    }
    
    editor.value = newText;
});