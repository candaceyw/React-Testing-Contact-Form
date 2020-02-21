import React from 'react'
import ContactForm from './ContactForm'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import renderer from 'react-test-renderer';
import axiosMock from 'axios'

import 'mutationobserver-shim';

test('Renders Label text', () => {

    const { getByLabelText } = render(<ContactForm />);

    const firstName = getByLabelText(/first name/i);
    const lastName = getByLabelText(/last name/i);
    const email = getByLabelText(/email/i);
    const pronoun = getByLabelText(/pronoun/i);
    const message = getByLabelText(/message/i);

    fireEvent.change(firstName, {target: {value: 'test'}});
    fireEvent.change(lastName, {target: {value: 'test'}});
    fireEvent.change(email, {target: {value: 'test@email.com'}});
    fireEvent.change(pronoun, {target: {value: 'he/him'}});
    fireEvent.change(message, {target: {value: 'test message'}});

    expect(firstName.value).toBe('test');
    expect(lastName.value).toBe('test');
    expect(email.value).toBe('test@email.com');
    expect(pronoun.value).toBe('he/him');
    expect(message.value).toBe('test message');
  
});


test('renders correct Placeholder text', () => {

    const { getByPlaceholderText } = render(<ContactForm />);

    getByPlaceholderText(/first name/i);
    getByPlaceholderText(/last name/i);
    getByPlaceholderText(/email/i);
    getByPlaceholderText(/Message/i);
})

   // Email
        // Expected: string
       // Match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i


// render a component with the new renderer, transform it into JSON, and match the snapshot to the previously stored snapshot
describe('ContactForm', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<ContactForm />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });


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


// jest.mock('axios')

// test('loads and displays data', async () => {
//   const url = '/data'
//   const { getByText, getByRole, getByLabelText } = render(<ContactForm url={url} />)

//   axiosMock.get.mockResolvedValueOnce({
//     data: { firstName: 'Candace' },
//   })

//   fireEvent.click(getByLabelText(/first name/i))

//   const greetingTextNode = await waitForElement(() => getByLabelText(/first name/i))

//   expect(axiosMock.get).toHaveBeenCalledTimes(1)
//   expect(axiosMock.get).toHaveBeenCalledWith(url)
//   // expect(getByRole('firstName')).toHaveTextContent('Candace')
//   // expect(getByRole('button')).toHaveAttribute('disabled')
// })