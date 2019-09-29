/* global Feature, Scenario*/

const assert = require('assert');

Feature('Exchange page');

Scenario('should exchange value from base card to target', async I => {
  I.amOnPage('/');
  I.see('EXCHANGE');
  I.click('//*[@id="simple-tab-2"]');
  I.see('amount');
  I.fillField('amount-0', '10');
  const val = await I.grabValueFrom('amount-1');

  assert.strictEqual(val, '8.1', 'target card amount not eql');
});

Scenario(
  'flip button should change convert direction between cards',
  async I => {
    I.amOnPage('/');
    I.see('EXCHANGE');
    I.click('//*[@id="simple-tab-2"]');
    I.fillField('amount-0', '10');
    I.click('button.MuiFab-root');

    const baseInputVal = await I.grabValueFrom('amount-0');
    const targetInputVal = await I.grabValueFrom('amount-1');

    assert.strictEqual(baseInputVal, '8.1');
    assert.strictEqual(targetInputVal, '10.04');
  }
);
