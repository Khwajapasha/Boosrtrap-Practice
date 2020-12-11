import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
export const ButtonGroupsBasicExample = () => {
         return (
           <div className="mt-2">
             <br />
             === Button's Groups Basic Example === <br />
             <br />
             <ButtonGroup aria-label="Basic example">
               <Button variant="secondary">Left</Button>
               <Button variant="secondary">Middle</Button>
               <Button variant="secondary">Right</Button>
             </ButtonGroup>
           </div>
         );
       };
