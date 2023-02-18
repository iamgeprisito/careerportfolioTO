# careerportfolioTO
The program is a simple web application that allows the user to interact with a personal checking account. It is built using React, a popular JavaScript library for building user interfaces.

An overview of what the program does:

The program imports the React and useState modules from the react library.

The App function is defined. This is a React functional component that returns a user interface for the personal checking account.

Inside the App function, the useState hook is used to declare three state variables: acctName, acctNumber, and balance.

The acctName variable is used to store the name of the account holder.
The acctNumber variable is used to store the account number.
The balance variable is used to store the current balance of the account.
The useState hook is called for each of these variables, and each call returns a tuple with the current value of the variable and a function to update its value.

The App function returns a user interface that consists of:

A heading that says "Personal Checking Account"
A form that allows the user to enter their account name and account number. The values of the acctName and acctNumber state variables are used as the values of the input fields, and the setAcctName and setAcctNumber functions are called when the input fields are changed.
A label that displays the current account balance. The value of the balance state variable is used to display the balance.
Two buttons: "Deposit" and "Withdraw". When the user clicks the "Deposit" button, a prompt is shown that allows the user to enter the amount to deposit. The handleDeposit function is called with this amount, and the balance state variable is updated with the new balance. Similarly, when the user clicks the "Withdraw" button, a prompt is shown that allows the user to enter the amount to withdraw. The handleWithdraw function is called with this amount, and the balance state variable is updated with the new balance. If the user tries to withdraw more than the available balance, an alert is shown.
Finally, the App component is exported as the default export of the module.

In summary, this program demonstrates how to use React to build a simple user interface for a personal checking account. It uses React hooks, particularly the useState hook, to manage the state of the account information and the account balance, and it allows the user to interact with the account by depositing and withdrawing funds.

************************************************************************
The useState hook is used to declare these variables as state variables and initialize them with their initial values. For example, acctName is initialized with an empty string ('') as its initial value, and balance is initialized with 100.12 as its initial value.

const [acctName, setAcctName] = useState('');
const [acctNumber, setAcctNumber] = useState('');
const [balance, setBalance] = useState(100.12);
The useState hook returns an array with two elements: the current state value and a function to update the state. In this code, the second element of each useState call (e.g., setAcctName, setAcctNumber, setBalance) is a function that updates the state value of the corresponding variable.

For example, the setAcctName function is called in the following line of code to update the acctName state variable with the new value entered by the user in the account name input field:

<input type="text" value={acctName} onChange={e => setAcctName(e.target.value)} />
Similarly, the setBalance function is called in the handleDeposit and handleWithdraw functions to update the balance state variable when the user deposits or withdraws funds from the account.

const handleDeposit = (amount) => {
  setBalance(prevBalance => prevBalance + amount);
}

const handleWithdraw = (amount) => {
  if (amount > balance) {
    alert("You have an insufficient funds. Your available ccount balance is: " + balance);
  } else {
    setBalance(prevBalance => prevBalance - amount);
  }
}
By using the useState hook, you can manage the state of your components in a functional and declarative way, without having to rely on class components or complex state management libraries.
