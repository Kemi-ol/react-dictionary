import React from "react";
import Synonyms from "./Synonyms"


export default function Results(props) {
    if (props.results) {
        console.log(props.results)
    return (
        <div className="Results">
            <h1>{props.results.word}</h1>
            <h3>phonetics: {props.results.phonetic}</h3>
            <br/>
            <hr/>
{props.results.meanings.slice(0,3).map(function(meaning, index) {
    return (
        <div key={index}>
            <h2>{meaning.partOfSpeech}</h2>
            <p>Definition: {meaning.definition}</p>
            {meaning.example && <p>Example: {meaning.example}</p>}
            <Synonyms synonyms={meaning.synonyms}/>
            <br/>
            <hr/>
            </div>
    )
})}
        </div>
    );}
    else {
        return null;
        }
}