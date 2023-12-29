import React from "react";
import Synonyms from "./Synonyms";
import "./Results.css"; // Import the CSS file

function toSentenceCase(text) {
  if (!text) {
    return null;
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export default function Results(props) {
  if (!props.results) {
    return null; // Don't render anything if results are not available
  }

  console.log(props.results);

  if (props.results.meanings && props.results.meanings.length > 0) {
    return (
      <div className="Results">
        <h1>{toSentenceCase(props.results.word)}</h1>
        <h3>/{props.results.phonetic}/</h3>
        <br />
        <hr />
        {props.results.meanings.slice(0, 3).map(function (meaning, index) {
          return (
            <div key={index}>
              <h2>{toSentenceCase(meaning.partOfSpeech)}</h2>
              <p>
                <strong>Definition: </strong>
                {toSentenceCase(meaning.definition)}
              </p>
              {meaning.example && (
                <p>
                  <strong>Example:</strong>{" "}
                  {toSentenceCase(meaning.example)}
                </p>
              )}
              <Synonyms synonyms={meaning.synonyms} />
              <br />
              <hr />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <p className='error-message'><strong>No meanings found for the word.</strong></p>;
  }
}
