describe('mocha', () => {

  it('mocha/prefer-arrow-callback', async () => {
    const results = await new Promise((resolve) => {
      resolve();
    });

    return results;
  });
});
