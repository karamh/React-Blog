import { uploadImage } from '../vanilla/uploadImage'

async function storeImage(file, fileName, quillObj) {
  // console.log(quillObj)
  uploadImage(file, fileName).then((res) => {
    // console.log(res)
    const range = quillObj.getEditorSelection();
    quillObj.getEditor().insertEmbed(range.index, 'image', res);
  })
}

export function getContent() {
  return quillObj.getEditor().root.innerHTML;
}

export function insertContent(body) {
  quillObj.getEditor().root.innerHTML = body;
  // console.log(quillObj.getEditor().root.innerHTML)
}

function imageHandler() {
  const input = document.createElement('input');  
  
    input.setAttribute('type', 'file');  
    input.setAttribute('accept', 'image/*');  
    input.click();  
  
    input.onchange = async () => {  
      var file= input.files[0];  
      var formData = new FormData();  
  
      formData.append('image', file);  
  
      var fileName = file.name;  
  
      const res = await storeImage(file, fileName, quillObj);  
    };  
}

let  quillObj;
export const ref = (el) => {  
  quillObj = el;  
}

export const modules = {  
  toolbar: {  
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["image"],
      ["blockquote", "code-block"],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      ["clean"],
    ],  
    handlers: {  
      image: imageHandler  
    }  
  } 
};
// {
//   toolbar:
//    [
//       "header",
//       "font",
//       "size",
//       "bold",
//       "italic",
//       "underline",
//       "align",
//       "strike",
//       "script",
//       "blockquote",
//       "background",
//       "list",
//       "bullet",
//       "indent",
//       "link",
//       "image",
//       "color",
//       "code-block"
//     ],
//     handlers: {  
//       image: imageHandler  
//     }
// };