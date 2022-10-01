import './HomePage';

test('real fetch call', async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character/1');
  const result = await res.json();
  await expect(result.name).toBe('Rick Sanchez');
});

test('error', async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character/1');
  const result = await res.json();
  expect.assertions(0);
  try {
    await result;
  } catch (e) {
    expect(e).toMatch('error');
  }
});
