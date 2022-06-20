/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React from "react";
import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-unresolved
import Articles from "./Articles";

// eslint-disable-next-line no-undef
test("renders article text", () => {
  render(<Articles />);
  const textElement = screen.getByText(/articles/i);
  // eslint-disable-next-line no-undef
  expect(textElement).toBeInTheDocument();
});
