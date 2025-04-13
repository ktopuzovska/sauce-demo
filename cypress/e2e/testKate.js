/// <reference types="cypress" />

describe('Sauce Demo Test Suite', () => {
  // Define users – note that the credentials (especially the password) are sourced securely.
  const standardUser = 'standard_user';
  const problemUser = 'problem_user';
  const lockedUser = 'locked_out_user';
  const errorFUser = 'errorfuser';

  // Retrieve password from environment variables.
  // Ensure that your password is set in your environment configuration file (and not committed to your repo)
  const password = Cypress.env('USER_PASSWORD');

  // Before each test, visit the home page
  beforeEach(() => {
    // cy.visit('https://www.saucedemo.com/');
    cy.visit('https://www.example.com/');
  });

  it('Test sample', () => {
    // Enter login credentials for the standard user
    cy.get('h1').should('contain', "Example")
  });

  // it('Login as standard user: Confirm login and check the URL', () => {
  //   // Enter login credentials for the standard user
  //   cy.get('[data-test="username"]').type(standardUser);
  //   // Using { log: false } hides sensitive info from the command log
  //   cy.get('[data-test="password"]').type(password, { log: false });
  //   cy.get('[data-test="login-button"]').click();

  //   // Confirm that login was successful by asserting the URL contains "/inventory"
  //   cy.url().should('include', '/inventory');
  // });

  // it('Login as standard user: Add item to cart, verify quantity, check remove button visibility', () => {
  //   // Log in as standard user
  //   cy.get('[data-test="username"]').type(standardUser);
  //   cy.get('[data-test="password"]').type(password, { log: false });
  //   cy.get('[data-test="login-button"]').click();

  //   // Add an item (for example, the Sauce Labs Backpack) to the cart
  //   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  //   // Verify that the cart badge shows "1"
  //   cy.get('.shopping_cart_badge').should('contain', '1');

  //   // Check that the remove button for the item is visible
  //   cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
  // });

  // it('Login as problem user: Check that the onesie image is shown as the source for the onesie (this test should fail)', () => {
  //   // Log in as a problem user (this user is known to display issues)
  //   cy.get('[data-test="username"]').type(problemUser);
  //   cy.get('[data-test="password"]').type(password, { log: false });
  //   cy.get('[data-test="login-button"]').click();

  //   // Locate the product card for the Sauce Labs Onesie and verify its image source.
  //   // The expected src is assumed to include "sauce-labs-onesie.jpg", but for the problem user,
  //   // the actual image may differ causing this test to fail.
  //   cy.get('.inventory_item')
  //     .contains('Sauce Labs Onesie')
  //     .parents('.inventory_item')
  //     .find('img')
  //     .should('have.attr', 'src')
  //     .and('include', 'sauce-labs-onesie.jpg');
  // });

  // it('Login with locked user: Login with this user and confirm error is displayed', () => {
  //   // Attempt login using locked out user credentials
  //   cy.get('[data-test="username"]').type(lockedUser);
  //   cy.get('[data-test="password"]').type(password, { log: false });
  //   cy.get('[data-test="login-button"]').click();

  //   // Verify that an error message is displayed
  //   cy.get('[data-test="error"]')
  //     .should('be.visible')
  //     .and('contain', 'Sorry, this user has been locked out.');
  // });

  // it('Login with errorfuser: Add fleece jacket to cart and confirm (this test should fail)', () => {
  //   // Login with the error-prone user 'errorfuser'
  //   cy.get('[data-test="username"]').type(errorFUser);
  //   cy.get('[data-test="password"]').type(password, { log: false });
  //   cy.get('[data-test="login-button"]').click();

  //   // Attempt to add the fleece jacket to the cart
  //   // If this user has issues (or if the product fails to add properly), this test will fail.
  //   cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

  //   // Assert that the cart badge is updated accordingly. This expectation is
  //   // intentionally set based on desired behavior; if the functionality is not working,
  //   // the test will fail.
  //   cy.get('.shopping_cart_badge').should('contain', '1');
  // });

  // // Additional Tests

  // it('Standard user: Logout and confirm redirection to login page', () => {
  //   // Log in as the standard user
  //   cy.get('[data-test="username"]').type(standardUser);
  //   cy.get('[data-test="password"]').type(password, { log: false });
  //   cy.get('[data-test="login-button"]').click();

  //   // Open the side menu
  //   cy.get('#react-burger-menu-btn').click();

  //   // Wait for the menu to appear and then click the logout link
  //   cy.get('#logout_sidebar_link').should('be.visible').click();

  //   // Confirm that the user is redirected back to the login page
  //   cy.url().should('equal', 'https://www.saucedemo.com/');
  // });

  // it('Standard user: Sort products by price and verify sorting order', () => {
  //   // Log in as the standard user
  //   cy.get('[data-test="username"]').type(standardUser);
  //   cy.get('[data-test="password"]').type(password, { log: false });
  //   cy.get('[data-test="login-button"]').click();

  //   // Select the sorting option 'Price (low to high)' from the dropdown
  //   cy.get('.product_sort_container').select('Price (low to high)');

  //   // Assert that the product prices are sorted in ascending order.
  //   // This grabs all price elements, converts them to numbers and compares the order.
  //   cy.get('.inventory_item_price').then(($prices) => {
  //     const prices = $prices
  //       .toArray()
  //       .map(el => parseFloat(el.innerText.replace('$', '')));
  //     const sortedPrices = [...prices].sort((a, b) => a - b);
  //     expect(prices).to.deep.equal(sortedPrices);
  //   });
  // });
});
