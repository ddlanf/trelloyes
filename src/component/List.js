import React from 'react';
import Card from './Card';



class List extends React.Component {

    render(){
    
    const idArray = this.props.cardIds;
    const allCardsObject = this.props.allCards;

    const eachCard = idArray.map(function(_, i){
         return (<Card title={allCardsObject[idArray[i]].title}
             content={allCardsObject[idArray[i]].content}
             key={i}
         />);
     });
        

      return(
      <div className="lists">
        <header>
            {this.props.header}
        </header>
        <ul className='List-Cards'>
            {eachCard}
        </ul>
      </div>
      )
    }
}

  export default List;