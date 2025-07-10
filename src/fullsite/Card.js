import "./Card.css"

function Card(props){
    return(
         <div className="Card">
        <img src={props.item.img}></img>
        
    </div>
    );
   
}


export function CardGroup(props){
    return(<div id="result">
        <h2>КАТАЛОГ</h2>
        <div id="CardGroup">
            
            <div id="GridSpace"></div>
             
            {props.arr.map(item=> <Card item={item}></Card>)}
        </div>
    </div>
        
    );
    
}