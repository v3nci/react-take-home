import React from 'react'

const Grid = ({children}) => {
  return (
    <div className="o-cols" data-testid="columns">
        {children && children.length && children.map((child, cIdx) => (
            <div className="o-col" key={cIdx}>
                {child}
            </div>
        ))}
    </div>
  )
}

export default Grid