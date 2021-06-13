import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColors = colors[Math.floor(Math.random() * 6)];
    const className = randomColors + '-text';
    
  
    const comp = (props) => {
        // console.log(props);
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
     return comp
}

export default Rainbow
