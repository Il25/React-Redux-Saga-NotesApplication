import React, { useState } from "react";
import { connect } from "react-redux";
import { setData } from "../../redux/notes/actions";
import "./index.css";

const Home = ({setNote}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState();

  const handleTitle = (event) => {
    setTitle(event.target.value);
    setId(Date.now());
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  }; 

  const createNote = () => {   
    if(typeof title === 'undefined' || title === ""){
      alert("Please enter a title");
    } else { 
      setNote({
        id,
        title, 
        description,
      });
    };
    setTitle("");
    setDescription("");
  };
   
  return (
    <div className="home_container">
      <div className="main_inputs_container">
        <input value={title} type="text" placeholder="Title" onChange={handleTitle} />
        <textarea className="description_input" value={description} type="text" placeholder="Description" onChange={handleDescription}/>
      </div>
      <div className="main_buttons_container">
        <button onClick={createNote}>Add note</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setNote: (note) => dispatch(setData(note)),
});

export default connect(null, mapDispatchToProps)(Home);