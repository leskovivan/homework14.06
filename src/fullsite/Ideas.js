import './Ideas.css'

export function Ideas({ srcList }) {
  const idList = [
    'first_ideas',
    'second_ideas',
    'third_ideas',
    'fourth_ideas',
    'fifth_ideas',
    'sixth_ideas'
  ]

  return (
    <div id="result">
      
      <div id="DivIdeas">
        {idList.map((id, i) => (
          <img key={i} src={srcList[i]} id={id} />
        ))}
      </div>
    </div>
  )
}
