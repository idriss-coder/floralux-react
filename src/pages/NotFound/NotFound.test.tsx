/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React from "react";
import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-unresolved
import NotFound from './NotFound';

// eslint-disable-next-line no-undef
test("renders error", () => {
  render(<NotFound />);
  const textElement = screen.getByText(/404/i);
  // eslint-disable-next-line no-undef
  expect(textElement).toBeInTheDocument();
});
