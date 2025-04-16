const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

describe('SauceDemo Test Suite', () => {
  // I unintentionally pushed this code, it was for testing purpose only.
  // const standardUser = Cypress.env('standardUser');
  // const problemUser = Cypress.env('problemUser');
  // const lockedUser = Cypress.env('lockedUser');
  // const errorUser = Cypress.env('errorUser');
  // const password = Cypress.env('password');

  beforeEach(() => {
    LoginPage.visit();
  });

  it('Login as standard user: Confirm login and check the URL', () => {
    LoginPage.enterUsername(standardUser);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();

    InventoryPage.getTitle().should('contain', 'Products');
    InventoryPage.getUrl().should('include', '/inventory.html');
  });

  it('Standard user: Add item to cart, verify quantity, check remove button visibility', () => {
    LoginPage.enterUsername(standardUser);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();

    InventoryPage.addItemToCart('Sauce Labs Backpack');
    InventoryPage.getCartBadge().should('have.text', '1');
    InventoryPage.getRemoveButton('Sauce Labs Backpack').should('be.visible');
  });

  it('Problem user: Onesie image test (should fail)', () => {
    LoginPage.enterUsername(problemUser);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();

    InventoryPage.getItemImage('Sauce Labs Onesie')
      .should('have.attr', 'src')
      .and('include', 'sauce-backpack'); // This should fail intentionally
  });

  it('Locked user: Login should display error', () => {
    LoginPage.enterUsername(lockedUser);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();

    LoginPage.getErrorMessage().should('contain', 'locked out');
  });

  it('Error user: Add fleece jacket to cart (should fail)', () => {
    LoginPage.enterUsername(errorUser);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();

    InventoryPage.addItemToCart('Sauce Labs Fleece Jacket');
    InventoryPage.getCartBadge().should('have.text', '1'); // Expected to fail
  });

  // Some additional tests

  it('Standard user: Add and remove item from cart', () => {
    LoginPage.enterUsername(standardUser);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();
  
    InventoryPage.addItemToCart('Sauce Labs Backpack');
    InventoryPage.getRemoveButton('Sauce Labs Backpack').click();
    InventoryPage.getCartBadge().should('not.exist');
  });

  it('Standard user: Should stay logged in after refresh', () => {
    LoginPage.enterUsername(standardUser);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();
  
    cy.reload();
    InventoryPage.getTitle().should('contain', 'Products');
  });
  
});
