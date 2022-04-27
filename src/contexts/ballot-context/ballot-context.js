import React, { createContext, useState } from 'react';

export const BallotContext = createContext(false);

const BallotContextProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState({})

    const updateSelectedItems = (categoryId, movieId) => {
        setSelectedItems(prevState => {
            return {
                ...prevState,
                [categoryId]: movieId
            }
        })
    }

    return (
        <BallotContext.Provider 
            value={{
                selectedItems,
                setSelectedItems,
                updateSelectedItems
            }}
        >
            {children}
        </BallotContext.Provider>
    );
};

export default BallotContextProvider;