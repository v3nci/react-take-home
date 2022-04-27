import React from "react";
import { render, screen } from '@testing-library/react';

import Grid from "./grid";

describe('Grid Component', () => {
    beforeEach(() => {
        render(
            <Grid />
        );
      });

    it('renders component', () => {
        const gridElement = screen.getByTestId('columns');
        expect(gridElement).toBeInTheDocument();
    });
})