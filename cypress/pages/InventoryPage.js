class InventoryPage {
  getTitle() {
    return cy.get('.title');
  }

  getUrl() {
    return cy.url();
  }

  addItemToCart(itemName) {
    cy.contains('.inventory_item', itemName).find('button').click();
  }

  getCartBadge() {
    return cy.get('.shopping_cart_badge');
  }

  getRemoveButton(itemName) {
    return cy.contains('.inventory_item', itemName).find('button').contains('Remove');
  }

  getItemImage(itemName) {
    return cy.contains('.inventory_item', itemName).find('img');
  }
}

module.exports = new InventoryPage();
