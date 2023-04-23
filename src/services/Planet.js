import React from 'react';
import {Card} from 'semantic-ui-react'

export default function Planets ({data}) {
    return (
        <>
        <div className="planet">
            {data.map((planets, i)=>{
                 return (
                <Card className="card" key= {i}> 
               {planets.name}
              </Card>
         ) 
            })}
            </div>  
         </>
    );
}


