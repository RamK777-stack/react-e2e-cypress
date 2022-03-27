import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "../components/TransactionCreateStepTwo";

//test suite - 1
test("on inital render pay button disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "1" }} receiver={{ id: "2" }} />);
  screen.debug();
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

// test suite - 2 and this is also a example for integration testing.
// because we combine test suite 1 and simulating real user behaviour. so it is classic example for integration testing
// integration testing is not only about testing multiple units tests together. its about testing/simulating real user behaviour with that units.  
test("check pay button enabled after form filled", async () => {
  //arrange
  render(<TransactionCreateStepTwo sender={{ id: "1" }} receiver={{ id: "2" }} />);
  
  //act
  userEvent.type(screen.getByPlaceholderText(/amount/i), '50');
  userEvent.type(screen.getByPlaceholderText(/add a note/i), 'test note');
  screen.debug();
  
  //assert
  expect(await screen.findByRole('button', {name: /pay/i })).toBeEnabled(); // assertion

  //this is called arrange-act-assert pattern
});
