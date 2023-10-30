
import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./WorkspaceToolbar"
import "react-quill/dist/quill.snow.css";
import CoverPhotoUploader from "./CoverPhotoUploader";

export const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = value => {
    setState({ value });
    console.log(state)
  };
  return (
    <>
    <CoverPhotoUploader/>
     <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something that does matter..."}
        modules={modules}
        formats={formats}
      />
    </div>
    
    </>
   
  );
};

export default Editor;