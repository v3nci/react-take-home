import React, { useEffect, useState, useContext, useMemo } from 'react';
import api from 'api/Api';

import { BallotContext } from "contexts/ballot-context/ballot-context";
import Category from 'components/category/category';
import Modal from 'components/modal/modal';

const Ballot = () => {
  const [categories, setCategories] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { selectedItems } = useContext(BallotContext);

  useEffect(() => {
    const fetchData = async () => {
      const response =  await api.getBallotData();

      setCategories(response?.items)
    }

    fetchData()
  }, []);

  const hasSelection = useMemo(() => {
    return Object.values(selectedItems).filter(val => val).length 
  }, [selectedItems])

  const handleBallotSubmit = () => {
    setIsOpenModal(true)
  }

  const getBallotCategory = (categoryId) => {
    return categories.find(cat => cat.id === categoryId)
  }

  const getBallotCategoryTitle = (categoryId) => {
    return getBallotCategory(categoryId)?.title
  }

  const getBallotItemTitle = (categoryId, movieId) => {
    const category = getBallotCategory(categoryId);

    return category.items.find(item => item.id === movieId)?.title
  }

  const notEmptySelectedCategories = useMemo(() => {
    return Object.keys(selectedItems).filter(key => selectedItems[key])
  }, [selectedItems])

  return (
    <div className='ballot'>
      <div className="o-shell">
        {
          categories.length && categories.map(category => (
            <Category
              key={category.id}
              categoryId={category.id} 
              title={category.title}
              items={category.items}
            />
          ))
        }
      </div>

      <button 
        type="button" 
        className="ballot__btn" 
        disabled={!hasSelection} 
        onClick={() => handleBallotSubmit()}
      >
        Submit Ballot
      </button>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <h2>Success!</h2>

          <h3>Summary of your selections:</h3>

          <ul className="summary-list">
            {notEmptySelectedCategories.map(categoryId => (
              <li key={categoryId}>
                <strong>{getBallotCategoryTitle(categoryId)}</strong> -

                <span> {getBallotItemTitle(categoryId, selectedItems[categoryId])}</span>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  )
}

export default Ballot;