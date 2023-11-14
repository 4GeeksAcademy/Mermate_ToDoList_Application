import React ,{useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const ToDoList = () => {

    const [inputValue, setInputValue] = useState("");
    const [toDos, setToDos] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue !== "") {
            // add the new task to the list
            setToDos([...toDos, inputValue]);
            setInputValue("");
        }
    };
    const handleDelete = (index) => {
        // Remove the task at the specified index
        setToDos(toDos.filter((item, currentIndex) => index !== currentIndex));
      };


    return (
        <div className="container">
            <h1 className="title">ToDos</h1>

            <ul>
                <li>
                    <input
                        className="inputList"
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyDown={handleKeyDown}
                        placeholder={toDos.length === 0 ? 'No tasks, add a task' : ''}
                    />
                </li>

				{toDos.map((item, index) => (
                    <li key={index}>
                          {item}
                    <span><button className="deleteButton" onClick={() => handleDelete(index)}>X</button>
                      
                    </span>
                          
                    </li>
                ))}
            </ul>
						 
        <div className="bottomList">{toDos.length} items left</div>
        </div>
    );
};

export default ToDoList;