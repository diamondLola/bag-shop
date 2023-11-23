import React from 'react'
import ForFooterScss from './ForFooter.module.scss'

//Examples
//<Title h6Text ='text' pText='text' /> 
// if you have more than one <p> in your title component ---> pText = {['text1', 'text2', 'text3']}


export default function ForFooter({h6Text, pText}) {
  return (
    <div>
                <div className={ForFooterScss.text}>
                    <h6 className={ForFooterScss.h6}>{h6Text}</h6>
                    {Array.isArray(pText) ? pText.map((item, i) => <p key={i} className={ForFooterScss.p}>{item}</p>) : <p className={ForFooterScss.p}>{pText}</p>}
                </div>
    </div>
  )
}