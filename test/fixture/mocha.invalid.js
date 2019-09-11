describe('mocha', () => {

  it('mocha/prefer-arrow-callback', async () => {
    const results = await new Promise(function cb(resolve) {
      resolve();
    });

    return results;
  });
});
