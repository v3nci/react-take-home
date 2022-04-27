import React from "react";
import { render, screen } from '@testing-library/react';

import Category from "./category";

describe('Category Component', () => {
    const dataMock = {
        id: "best-picture",
        title: "Best Picture",
        items: [
            {
                title: 'Nomadland',
                photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
                id: 'nomadland'
            }
        ]
    }

    beforeEach(() => {
        render(
            <Category
                categoryId={dataMock.id}
                title={dataMock.title}
                items={dataMock.items}
            />
        );
      });

    it('renders component', () => {
        const categoryElement = screen.getByTestId('category');
        expect(categoryElement).toBeInTheDocument();
    });

    it('has correct title', () => {
        const categoryElement = screen.getByTestId('category');
        expect(categoryElement.querySelector('h2')).toHaveTextContent(dataMock.title);
    });
})