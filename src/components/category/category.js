import React, { memo, useState } from 'react'
import Grid from 'components/grid/grid';
import Card from 'components/card/card';

const Category = ({
    title,
    items
}) => {
  const [activeId, setActiveId] = useState('');

  const toggleActiveId = (id) => {
    activeId === id ? setActiveId('') : setActiveId(id)
  }

  return (
    <div className="c-category">
        <h2 className="h2">{title}</h2>

        <Grid>
          {items.length && items.map(item => (
            <Card
                active={activeId === item.id}
                key={item.id}
                name={item.title}
                imageSrc={item.photoUrL}
                onClick={() => toggleActiveId(item.id)}
            />
          ))}
        </Grid>
    </div>
  )
}

Category.defaultProps = {
    title: '',
    items: []
}

export default memo(Category)