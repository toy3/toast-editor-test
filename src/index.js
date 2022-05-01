import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "./styles.css";

window.onload = function () {
  console.log("loading...");
};

const editor = new Editor({
  el: document.querySelector("#editor"),
  usageStatistics: false,
  previewStyle: "vertical",
  height: "600px",
  initialEditType: "wysiwyg",
  events: {
    change() {
      document.querySelector("#output").innerHTML = editor.getMarkdown() || "";
      console.log(editor.getMarkdown());
    },
  },
});
