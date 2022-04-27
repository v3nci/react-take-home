import React, { useEffect, useState } from 'react';
import api from 'api/Api';

import Category from 'components/category/category';

const Ballot = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response =  await api.getBallotData();

      setCategories(response?.items)
    }

    fetchData()
  }, []);

  return (
    <div className='ballot'>
      <div className="o-shell">
        {
          categories.length && categories.map(category => (
            <Category
              key={category.id} 
              title={category.title}
              items={category.items}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Ballot;