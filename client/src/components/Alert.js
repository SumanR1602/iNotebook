import React from 'react'

export default function Alert(props) {
    const cap=(word)=>{
      if(word==='danger'){
        word="Error"
      }
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div>
            <div className={`alert alert-${props.alert.type}`} role="alert">
                <strong>{cap(props.alert.type)}</strong> : {props.alert.msg}
            </div>
        </div>}
        </div>
    )
}
