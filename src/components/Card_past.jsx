import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipedia_past";
import poster from "./EventPoster.jpeg";


function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      poster={poster}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}


function Card_past() {
  return (
    <div>
    <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
  </div>
  );
}

export default Card_past;
