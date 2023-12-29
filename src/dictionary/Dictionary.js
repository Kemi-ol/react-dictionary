import React, {useState} from "react";
import "./Dictionary.css";



export default function Dictionary() {
    const [keyword, setKeyword] = useState("");

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
    }

  
    return (
        <div className="dictionary">
        <form onSubmit={handleSearch}>
            <input type="search" autoFocus={true} onChange ={handleKeywordChange} />
        </form>
        </div>
    );
    }
    