# Topic Filtering

_For a complete guide to all [Envio](https://envio.dev) indexer features, visit the [documentation website](https://docs.envio.dev)._

This is example expands on our wildcard indexing example which shows us how to index with all event with event signature. This example adds another feature which filter those events further based on topic from those events.

You can learn more about Topic Filtering in the documentation: [https://docs.envio.dev/docs/HyperIndex/wildcard-indexing#topic-filtering](https://docs.envio.dev/docs/HyperIndex/wildcard-indexing#topic-filtering)

To enable wildcard indexing, simply pass `eventFilters: { TOPIC_NAME: TOPIC_VALUE}` in the handler configuration:

```ts
ERC20.Transfer.handler(
    async ({ event, context }) => {
        // ...your handler logic
    },
    { 
        wildcard: true, 
        eventFilters: { 
            TOPIC_NAME: TOPIC_VALUE
        } 
    }
);
```

## Prerequisites

Before running the indexer locally, make sure you have the following installed:

-   **[Node.js 18+](https://nodejs.org/en/download/)**
-   **[pnpm](https://pnpm.io/installation)**
-   **[Docker Desktop](https://www.docker.com/products/docker-desktop/)**

## Running the Indexer

Add your Envio API key to the .env file, then start the indexer:

```bash
pnpm dev
```

If you make changes to `config.yaml` or `schema.graphql`, regenerate the type files:

```bash
pnpm codegen
```

## GraphQL Playground

While indexer running, visit the Envio Console([https://envio.dev/console](https://envio.dev/console)) to open the GraphQL Playground and query your indexed data.