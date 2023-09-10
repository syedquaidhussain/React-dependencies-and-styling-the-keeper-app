import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

// import Collapse from '@material-ui/core/Collapse';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded , setIsExpanded] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    setIsExpanded(false)
  }



  function clickingOnTitle() {
   setIsExpanded(true)
  }

  return (
    <div>

      <form className="create-note">
      {isExpanded ?<input
        
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null }  
      
    {/* <Collapse in ={isExpanded}> */}
        <textarea
        onClick={clickingOnTitle}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
        rows= {isExpanded ? "3" : "1"} 
        />
        <Zoom in = {isExpanded}>
          
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
    {/* </Collapse> */}
      </form>
    </div>
  );
}

export default CreateArea;
