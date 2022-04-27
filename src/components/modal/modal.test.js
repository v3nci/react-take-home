import React from "react";
import { render, screen } from '@testing-library/react';

import Modal from "./modal";

describe('Modal Component', () => {
    beforeEach(() => {
        render(
            <Modal />
        );
      });

    it('renders component', () => {
        const modalElement = screen.getByTestId('modal');
        expect(modalElement).toBeInTheDocument();
    });
})