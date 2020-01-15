import React from 'react';

class Card extends React.Component {

    render() {
      return(
      <li>
        <div className="Card">
            <h3>
              {this.props.title} 
            </h3>
            <p>
                {this.props.content}
            </p>
        </div>
      </li>
      )
    }
  }

  export default Card;