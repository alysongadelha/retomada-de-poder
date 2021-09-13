import React, { useState } from "react";
import AnimatedVisibility from "./AnimatedVisibility";
import personagem from "../assets/data/personagens.json";
import boneco from "../assets/img/personagens/amin.png"

const colors = [
  "#6690FF",
  "#000",
  "#c4171d ",
  "#7F7B82",
  "#4D7EA8",
  "#520044"
];

function Box({ name, clan, img }) {
  const [color] = useState(colors[Math.floor(Math.random() * 5)]);
  const [visible, setVisible] = useState(true);

  function hideMe() {
    setVisible(false);
  }

  let style = { borderColor: "##FFFFFF", backgroundColor: color, backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 70%' };

  return (
    <AnimatedVisibility
      visible={visible}
      animationIn="zoomIn"
      animationOut="zoomOut"
    >
      <div className="box" style={style}>
        <div className="center">{name}<br/>{clan}</div>
        <button className="bottom-corner" onClick={hideMe}> 
        <i className="centeri far fa-eye fa-lg" />
        </button>
      </div>
    </AnimatedVisibility>
  );
}

export default function CharacterBox() {
  const characterName = personagem.map(x => x); 
  const [names] = useState(characterName);

  return (
    <div className="boxes">
      {names.map((name) => (        
        <Box key={name.character} name={name.character} clan={`Clã: ${name.clan}`} img={name.img}/>
      ))}
    </div>
  );
}
