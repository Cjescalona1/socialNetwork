import React from 'react';

function Tags(props){
    let iterable; 
    if (props.data != null){
        console.log(props);
        iterable = props.data;
    
    return iterable.map((i)=>( 
            <div> 
                i  
            </div>  
            ));

        } 
    else{ 
        return(<div></div> )
    }    

};
export default Tags;