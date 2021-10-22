import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../components/Input";

describe("When everything is ok", () => {
  test("Should user input appear on display when the user clicks on send button", async () => {
    render(<Input />);

    userEvent.type(screen.getByRole("textbox"), "Nicole");
    userEvent.click(screen.getByRole("button"));

    userEvent.type(screen.getByRole("textbox"), "Antonio");
    userEvent.click(screen.getByRole("button"));

    userEvent.type(screen.getByRole("textbox"), "Maria");
    userEvent.click(screen.getByRole("button"));

    const myList = await screen.findAllByRole("listitem");

    expect(myList).toHaveLength(3);
  });

  test("Should not let the user be able to click on the button when the input value is empty", () => {
    render(<Input />);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("Should be available the input area when user type something", () => {
    render(<Input />);

    userEvent.type(screen.getByRole("textbox"), "Nicole");

    expect(screen.getByRole("button")).not.toBeDisabled();
  });
});
