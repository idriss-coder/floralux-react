/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React from "react";
import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-unresolved
import Welcome from './Welcome';

// eslint-disable-next-line no-undef
test("say welcome", () => {
  render(<Welcome />);
  const textElement = screen.getByText(/bienvenue/i);
  // eslint-disable-next-line no-undef
  expect(textElement).toBeInTheDocument();
});
