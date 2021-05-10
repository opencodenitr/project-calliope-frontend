import React from 'react';
import '../assets/styles/Sundary.css';
import SundaryContents from "../components/Sundary/Sundary_templates"
import SundaryLists from "../components/Sundary/Sundary_list/Sundary_lists"
export default function Sundary() {

  return (
      <>
    <div className="container py-3">
    <div className="title">
        <h1 className="names">Sundry</h1>
    </div>
    {SundaryLists.map(editorsContent=> (
          <SundaryContents
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
