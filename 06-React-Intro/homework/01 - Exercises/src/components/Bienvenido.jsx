import React from "react";
import Botones from './Botones'

const studentName = "Inés Ilarregui";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return (
         <div>
            <h1>Este es sólo un título</h1>
            <h3>{studentName}</h3>
            <ul>
              {techSkills.map(skill => <li key={skill}>{skill}</li>)}
              {/* <li>{techSkills.map(t => t[0])}</li>
              <li>{techSkills.map(t => t[1])}</li>
              <li>{techSkills.map(t => t[2])}</li>
              <li>{techSkills.map(t => t[3])}</li>
              <li>{techSkills.map(t => t[4])}</li> */}
            </ul>
          < Botones alerts={alerts}/>
            {/* < Botones props = {props.m1, props.m2} /> */}
         </div>
         );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
