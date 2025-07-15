import React from 'react'
import { Ideas } from './Ideas'
import './recomendations.css'
const ideaImages = [
    'Recomendations (1).png',
    'Recomendations (2).png',
    'Recomendations (3).png',
    'Recomendations (4).png',
    'Recomendations (5).png',
    'Recomendations (6).png',
    'Recomendations (7).png',
    'Recomendations (8).png',
    'Recomendations (9).png',
    'Recomendations (10).png'
]
function Button_make(count) {
  const result = new Array(count)
  for (let i = 0; i < count; i++) {
    result[i] = <button key={i} className="recom-btn">НАЗВА НАБОРУ</button>
  }
  return result
}

function Additional_recomendations() {
    return (<div>
        <div id="maintxt">
        <h2>ДОДАТКОВІ РЕКОМЕНДАЦІЇ</h2>
      </div>
      <div className="recom-btn-container">
        {Button_make(ideaImages.length)}
        </div>

      <Ideas srcList={ideaImages} />
      <div className="recom-btn-container">
        {Button_make(ideaImages.length)}
        </div>

      </div>
    )
}

export default Additional_recomendations
