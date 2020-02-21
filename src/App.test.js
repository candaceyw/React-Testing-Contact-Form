import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import 'mutationobserver-shim';

test("renders App without crashing", () => {
  render(<App />);
});

test('renders test text from app', () => {

  //Arrange
  const { getByText } = render(<App />);

  //Act
  const header = getByText(/i am test text/i);

  //Assert
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).not.toBeFalsy();

})

test('concise test - renders test text from app', () => {
  const { getByText } = render(<App />);
  getByText(/i am test text/i);
 })