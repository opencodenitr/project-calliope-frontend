import React from 'react';
import '../assets/styles/editors.css';
import EditorsContents from "../components/Editor-Contents/Editors_template"
import EditorContents from "../components/Editor-Contents/Editor-Contents/Editor-contents"
export default function Editors() {

  return (
      <>
    <div className="container py-3">
    {EditorContents.map(editorsContent=> (
          <EditorsContents
            key={editorsContent.id}
            tag={editorsContent.tag}
            title={editorsContent.title}
           desc={editorsContent.desc}
            link={editorsContent.link}
            time={editorsContent.time}
           img={editorsContent.img}
          />
        ))}
</div>
</>
  );
}
