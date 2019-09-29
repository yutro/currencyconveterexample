/* global Feature, Scenario*/
Feature('Pocket page');

Scenario('should contain USD pocket', I => {
  I.amOnPage('/');
  I.see('USD');
  I.see('100.00');
});

Scenario('should contain GBP pocket', I => {
  I.amOnPage('/');
  I.see('GBP');
  I.see('0.00');
});

Scenario('should contain EUR pocket', I => {
  I.amOnPage('/');
  I.see('EUR');
  I.see('0.00');
});
