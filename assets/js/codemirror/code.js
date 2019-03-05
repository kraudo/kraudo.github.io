var config, editor;

// Set modeURL template, %N is replaced by the mode (e.g. "javascript", "clike")
CodeMirror.modeURL = "./assets/js/codemirror/mode/%N/%N.js";

// default configuration for the codeviewer
config = {
    lineNumbers: true,
    indentWithTabs: false,
    readOnly: true
};

// create a CodeMirror object, initialized with the text in html textarea and the default configuration
editor = CodeMirror.fromTextArea(document.getElementById("code"), config);

// updating the text in the source code viewer
function update(url, mode) {
    // update message in code viewer to inform user and reset mode
    CodeMirror.autoLoadMode(editor, "none");
    editor.setValue("Retrieving source code...");
    
    // create new request
    let req = new XMLHttpRequest();
    req.open("GET", url);

    req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status === 200) {
            
            editor.setOption("mode", mode);
            
            CodeMirror.autoLoadMode(editor, mode);

            editor.setValue(req.responseText);
            
        }
        
        else if (req.readyState === 4 && req.status >= 400) {
            
            let err = "Client or server error {" + 
                "\n\turl: " + url + 
                "\n\tstatus: " + req.status +
                "}\n";
            
            CodeMirror.autoLoadMode(editor, {name: "javascript", json: true});
            
            editor.setValue(err);
            
        }
    };

    req.send();
}

function setModeAndText(mode, code) {

    editor.setOption("mode", mode);
    CodeMirror.autoLoadMode(editor, mode);

    editor.setValue(code);

}
