import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(
  operation: { text: any; },
  variables: any
) {
  return fetch('localhost:8080/graphql', {
    method: 'POST',
    headers: {
      // Add authentication and other headers here
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery)
const handlerProvider = null;

const environment = new Environment({
  network,
  store,
});