export const mockState = {
  exchange: {
    currencies: [
      { amount: 0, currency: 'USD' },
      { amount: 0, currency: 'GBP' }
    ],
    rates: {}
  },
  pockets: {
    allIds: [1, 2, 3],
    byId: {
      '1': { amount: 100, currency: 'USD', id: 1 },
      '2': { amount: 0, currency: 'GBP', id: 2 },
      '3': { amount: 0, currency: 'EUR', id: 3 }
    }
  }
};

export const getMockedState = jest.fn().mockReturnValue(mockState);
