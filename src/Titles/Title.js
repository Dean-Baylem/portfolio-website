import React from "react";

const Title = props => {
    return (
      <div className={props.type}>
        <h1>{props.text}</h1>
      </div>
    );
}

export default Title;