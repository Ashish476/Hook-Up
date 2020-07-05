import React from "react";

export const CreatePost = () => {
  return (
    <div
      className="card input-filled"
      style={{
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input type="text" placeholder="title" />
      <input type="text" placeholder="body" />
      <div class="file-field input-field">
        <div class="btn #0d47a1 blue darken-1">
          <span>UPLOAD IMAGE</span>
          <input type="file" />
        </div>
        <div class="file-path-wrapper">
          <input
            class="file-path validate"
            type="text"
            placeholder="Upload file"
          />
        </div>
      </div>
      <button className="btn waves-effect waves-light #0d47a1 blue darken-1">
        SUBMIT POST
      </button>
    </div>
  );
};
