import React from 'react'
import { Ideas } from './Ideas'
const ideaImages = [
  '/Group 61.png',
  '/Group 62.png',
  '/Group 63.png',
  '/Group 66.png',
  '/Group 65.png',
  '/Group 64.png'
]
function Ideas_to_do() {
    return (<div>
        <div id="maintxt">
        <h2>ІДЕЇ ДЛЯ ОФОРМЛЕННЯ</h2>
      </div>
      <Ideas srcList={ideaImages} />
      </div>
    )
}

export default Ideas_to_do
