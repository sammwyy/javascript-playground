const textarea = document.getElementById("code");
const output = document.getElementById("output");

function run() {
	debugger;
    output.innerHTML = "";
	try {
        const code = editor.getValue();
        let evaled = eval(code);
      } catch (exception) {
      	output.innerHTML = "Error: " + exception;
      }
}