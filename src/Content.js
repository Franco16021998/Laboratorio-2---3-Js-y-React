import React from 'react';
import Part from './Part';

export default function Content(props) {

    //destructuring
    const{part1, part2, part3}=props
    const{name, exercises}=part1
    return(
        <div>
         {
             props.parts.map((ejem, index) => {
                 return(
                     <Part enunciado={ejem.name} num={ejem.exercises}></Part>
                 );
             })
         }
        </div>
    )
}
