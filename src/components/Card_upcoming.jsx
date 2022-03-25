import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipedia_upcoming";
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
  

function Card_upcoming() {
  return (
    <div>
    <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
  </div>
  );
}

export default Card_upcoming;
