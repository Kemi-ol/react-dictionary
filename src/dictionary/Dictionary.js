import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";  
import Results from "../Results"



export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);
   

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data);
    }
   
    const handleSearch = (event) => {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
        let key = "c9c7oc64f71481aa1fa0f40af020b3t6";
        let word = {keyword};
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
        
   axios.get(apiUrl).then(handleResponse);
}

const handleKeywordChange = (event) => {
    setKeyword(event.target.value)
}

    return (
        <div >
        <form onSubmit={handleSearch} className="dictionary">
            <input type="search" autoFocus={true} onChange ={handleKeywordChange} />
        </form>
        <div className = 'results'>
        <Results results={results}/>
        </div>
        </div>
    );
    }
    
