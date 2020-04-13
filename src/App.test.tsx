import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import MainProvider from "./Providers/MainProvider";

test("renders learn react link", () => {
  const { getByText } = render(
    <MainProvider>
      <App />
    </MainProvider>
  );
  const linkElement = getByText(/Marvel Character Search/i);
  expect(linkElement).toBeInTheDocument();
});
