import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { LiveSearch } from './Components/LiveSearch'

describe('LiveSearch', () => {
    it('render LiveSearch Component', () => {
        render(<LiveSearch />)
        screen.debug()
        fireEvent.input(screen.getByRole('textbox'), {
            target: { value: 'BMW X-5'}
        })
        expect(screen.getByDisplayValue('BMW X-5'));
        screen.debug();
        // document.getElementById('search').value = 'BMW X-5'
        // expect(screen.getByDisplayValue('BMW X-5'));
    })
})

