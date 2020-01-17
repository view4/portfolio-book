import React, { FunctionComponent} from "react";
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

interface Props {
  //handleClick:  (event: any) => void;
  images: Array<any>;
}


export const ProjectPageTwo: FunctionComponent<Props> = ({images}) => (
  <div >
    <div className='project-images-container'>
        {
            images.map( image => <img src={image.img} style={image.style ||null}/>)
        }
        </div>
    </div>
);
