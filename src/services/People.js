import React from 'react';
import Swapi from "../services/Swapi";
import {Card} from 'semantic-ui-react'

export default function People ({data}) {
    return (
        <div className="people">
         {data.map((people, i)=>{
                 return (
                <Card key= {i}> 
                {people.name}
              </Card>
          ) 
            })}
          
        </div>
    );
}

