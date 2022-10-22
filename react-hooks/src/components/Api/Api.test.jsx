import ApiRender from './Api';

describe('testing API', () => {
  test('API call', async () => {
    const res = new ApiRender();

    const data = await res.api();
    expect(data.results[0].id).toEqual(1);
  });
});

test('API call person', async () => {
  const res = new ApiRender();

  const data = await res.apiPerson();
  expect(data.results[0].name).toEqual('Morty Smith');
});
