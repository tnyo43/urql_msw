import { graphql } from 'msw';

export const handlers = [
  graphql.query('GetItem', (req, res, ctx) => {
    return res(
      ctx.data({
        pokemon_v2_item: [
          {
            id: 1,
            name: 'poke-ball',
            cost: 200
          },
          {
            id: 2,
            name: 'great-ball',
            cost: 600
          }
        ]
      })
    );
  })
];
