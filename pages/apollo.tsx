import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery
} from '@apollo/client';

const ItemsQuery = gql`
  query GetItem {
    pokemon_v2_item(limit: 10) {
      id
      name
      cost
    }
  }
`;

const Items = () => {
  const { loading, error, data } = useQuery(ItemsQuery);

  if (loading) return <p>Loading...</p>;
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

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache()
});

export default function Page() {
  return (
    <div>
      <h1>with Apollo</h1>
      <ApolloProvider client={client}>
        <Items />
      </ApolloProvider>
    </div>
  );
}
