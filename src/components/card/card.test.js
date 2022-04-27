import React from "react";
import { render, screen } from '@testing-library/react';

import Card from "./card";

describe('Card Component', () => {
    const dataMock = {
        name: 'Test name',
        image: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg'
    }
    beforeEach(() => {
        const onClick = jest.fn()
        render(
            <Card
                name={dataMock.name}
                imageSrc={dataMock.image}
                onClick={onClick}
            />
        );
      });
    it('renders component', () => {
        const cardElement = screen.getByTestId('card');
        expect(cardElement).toBeInTheDocument();
    });

    it('has correct name', () => {
        const cardElement = screen.getByTestId('card');
        expect(cardElement.querySelector('h3')).toHaveTextContent(dataMock.name);
    });

    it('has correct image', () => {
        const cardElement = screen.getByTestId('card');
        expect(cardElement.querySelector('img').src).toEqual(dataMock.image);
    });
})