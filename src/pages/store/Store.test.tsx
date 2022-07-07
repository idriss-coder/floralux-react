/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React from "react";
import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-unresolved
import Store from './Store';

// eslint-disable-next-line no-undef
test("say welcome", () => {
  render(<Store />);
  const textElement = screen.getByText(/Bienvenue/gi);
  // eslint-disable-next-line no-undef
  expect(textElement).toBeInTheDocument();
});
