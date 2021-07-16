let map = {
    "a": "ا",
    "b": "ب",
    "c": "چ",
    "d": "د",
    "e": "ع",
    "f": "ف",
    "g": "گ",
    "h": "ھ",
    "i": "ی",
    "j": "ج",
    "k": "ک",
    "l": "ل",
    "m": "م",
    "n": "ن",
    "o": "ہ",
    "p": "پ",
    "q": "ق",
    "r": "ر",
    "s": "س",
    "t": "ت",
    "u": "ء",
    "v": "ط",
    "w": "و",
    "x": "ش",
    "y": "ے",
    "z": "ز",

    "A":"آ",
    "B":"",
    "C":"ث",
    "D":"ڈ",
    "E":"",
    "F":"",
    "G":"غ",
    "H":"ح",
    "I":"ئ",
    "J":"ض",
    "K":"خ",
    "L":"",
    "M":"",
    "N":"ں",
    "O":"ۂ",
    "P":"",
    "Q":"",
    "R":"ڑ",
    "S":"ص",
    "T":"ٹ",
    "U":"",
    "V":"ظ",
    "W":"ؤ",
    "X":"ژ",
    "Y":"ۓ",
    "Z":"ذ",

    "?":"؟",
    ".":"۔",
    ",":"،",
};

/*
ط ص ھ د ٹ پ ت ب ج ح ی ک ا ہ ل ن ر و م ق ف ے س ش غ ع
ظ ض ذ ڈ ث ّ ۃ ـ چ خ ي گ آ  ء ۂ ں ڑ ز ژ ‍ ‌ ۓ ‎ ؤ ئ ‏
، ۔ /
؛ ' \ ] [ ]

> < ؟ : " | " }  { }

۔

*/

let storyEditor = document.getElementById("urdu-text-editor");
let storyTitle = document.getElementById("story-title");

storyTitle.addEventListener("input", function () {

    urduEditor(storyTitle);
});

storyEditor.addEventListener("input", function () {

    urduEditor(storyEditor);
});

function urduEditor(element){

    let editorText = element.value;
    let newText = "";

    for (let i = 0; i < editorText.length; i++) {

        let urduChar = map[editorText[i]];

        if(urduChar)
            newText += urduChar;
        else
            newText += editorText[i];
    }
    
    element.value = newText;

}