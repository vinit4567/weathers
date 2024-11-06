import React, { useState } from 'react';

const CharacterCount = () => {
  const [text,setText] = useState('')
  const maxchar = 100

  return(
    <div>
        <textarea
        placeholder='type a text here...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
        cols="50"
        >

        </textarea>

      <p>
      CharacterCount : {text.length} / {maxchar}

      {text.length > maxchar && (
        <p style={{color : "red"}}>you have reached max limit..</p>
      )}
      </p>
    </div>
  )
};

export default CharacterCount;
