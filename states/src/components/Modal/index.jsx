import React from "react";
import "./index.css"

const Modal = ({setOpenModal}) => {
  return (
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span onClick={()=>{
            setOpenModal(false)
          }} class="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
  );
};

export default Modal;
