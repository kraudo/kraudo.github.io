var config, editor;

CodeMirror.modeURL = "./assets/js/codemirror/mode/%N/%N.js";

config = {
    lineNumbers: true,
    indentWithTabs: false,
    readOnly: true
};

editor = CodeMirror.fromTextArea(document.getElementById("code"), config);

function update(url, mode) {
    let req = new XMLHttpRequest();
    req.open("GET", url);

    req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status === 200) {
            setModeAndText(mode, req.responseText);
        }
    };

    req.send();
}

function setModeAndText(mode, code) {

    editor.setOption("mode", mode);
    CodeMirror.autoLoadMode(editor, mode);

    editor.setValue(code);

}
