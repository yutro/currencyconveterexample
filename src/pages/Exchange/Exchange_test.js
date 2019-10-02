/* global Feature, Scenario*/
// eslint-disable-next-line @typescript-eslint/no-var-requires
const assert = require('assert');

Feature('Exchange page');

Scenario('should exchange value from base card to target', async I => {
  I.amOnPage('/');
  I.see('EXCHANGE');
  I.click('//*[@id="simple-tab-2"]');
  I.see('amount');
  I.fillField('amount-0', '10');
  const val = await I.grabValueFrom('amount-1');

  assert.strictEqual(val, '7.98', 'target card amount not eql');
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

    assert.strictEqual(baseInputVal, '7.98');
    assert.strictEqual(targetInputVal, '10');
  }
);

Scenario('recalculate target value after target currency changed', async I => {
  I.amOnPage('/');
  I.see('EXCHANGE');
  I.click('//*[@id="simple-tab-2"]');
  I.fillField('amount-0', '10');
  // target value before change target currency
  const targetInputValBeforeUpdate = await I.grabValueFrom('amount-1');

  assert.strictEqual(targetInputValBeforeUpdate, '7.98');

  I.click('//*[@id="select-prompt-1"]');
  I.wait(1);
  I.click({ xpath: '/html/body/div[2]/div[3]/ul/li[2]' });
  // target value after change target currency
  const targetInputValAfterUpdate = await I.grabValueFrom('amount-1');

  assert.strictEqual(targetInputValAfterUpdate, '12.53');
});
