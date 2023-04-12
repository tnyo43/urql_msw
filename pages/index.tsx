import { gql, useQuery } from 'urql';

const ItemsQuery = gql`
  query getItem {
    pokemon_v2_item(limit: 10) {
      id
      name
      cost
    }
  }
`;

const Items = () => {
  const [result, _reexecuteQuery] = useQuery({
    query: ItemsQuery
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul>
      {data.pokemon_v2_item.map((item: any) => (
        <li key={item.id}>
          {item.name}, {item.cost}
        </li>
      ))}
    </ul>
  );
};

export default Items;
