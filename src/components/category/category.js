import React, { memo, useContext } from 'react'

import { BallotContext } from "contexts/ballot-context/ballot-context";
import Grid from 'components/grid/grid';
import Card from 'components/card/card';

const Category = ({
    categoryId,
    title,
    items
}) => {
  const { updateSelectedItems, selectedItems } = useContext(BallotContext)

  const toggleActiveId = (id) => {
    if(selectedItems[categoryId] && selectedItems[categoryId] === id) {
      updateSelectedItems(categoryId, '')
    } else {
      updateSelectedItems(categoryId, id)
    }
  }

  return (
    <div className="c-category" data-testid="category">
        <h2 className="h2">{title}</h2>

        <Grid>
          {items.length && items.map(item => (
            <Card
                active={selectedItems ? selectedItems[categoryId] === item.id : false}
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
    categoryId: '',
    title: '',
    items: []
}

export default memo(Category)