import React from 'react'
import ContactForm from './ContactForm'
import { render, fireEvent } from '@testing-library/react'
import 'mutationobserver-shim';

test('Renders Label text', () => {

    const { getByLabelText } = render(<ContactForm />);

    getByLabelText(/first name/i);
    getByLabelText(/last name/i);
    getByLabelText(/email/i);
});


test('renders correct Placeholder text', () => {

    const { getByPlaceholderText } = render(<ContactForm />);

    getByPlaceholderText(/first name/i);
    getByPlaceholderText(/last name/i);
    getByPlaceholderText(/email/i);
    getByPlaceholderText(/Message/i);
})

// test('Checks if field value matches requirement', () => { 
//     const { getByLabelText} = render(<ContactForm />);

//     const firstNameInput = getByLabelText(/first name/i);
//     // const lastNameInput =getByLabelText(/last name/i);
//     // const emailInput =getByLabelText(/email/i);
//     // const messageInput =getByLabelText(/message/i);

//     fireEvent.change(firstNameInput, {target: {value: "Test"}})
//     expect(firstNameInput).toHaveLength(4)


// })



// Write a test that checks if first name is equal or greater than 3
// Check that all fields are required
// Check for errors on all fields