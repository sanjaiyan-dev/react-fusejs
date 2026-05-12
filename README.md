# react-fusejs

> High-performance React hooks for Fuse.js with native React Compiler support and TanStack Query integration.

[![npm version](https://img.shields.io/npm/v/react-fusejs.svg?style=flat-square)](https://www.npmjs.com/package/react-fusejs)
[![npm downloads](https://img.shields.io/npm/dm/react-fusejs.svg?style=flat-square)](https://www.npmjs.com/package/react-fusejs)
[![license](https://img.shields.io/npm/l/react-fusejs.svg?style=flat-square)](https://github.com/sanjaiyan-dev/react-fusejs/blob/main/LICENSE)

## Features

- ⚡ **High Performance**: Optimized for large datasets with built-in memoization and `useDeferredValue` support.
- 🤖 **React Compiler Ready**: Built with the latest React Compiler patterns for maximum performance.
- 🔍 **Fuzzy Search**: Full power of [Fuse.js](https://fusejs.io/) in an ergonomic React hook.
- 📦 **TanStack Query Integration**: Seamlessly cache and manage search results with `@tanstack/react-query`.
- 🧩 **Zero Config**: sensible defaults that just work, but fully customizable.
- 🛡️ **TypeScript First**: Robust type definitions for a better developer experience.

## Installation

```bash
npm install react-fusejs fuse.js
# or
yarn add react-fusejs fuse.js
```

If you want to use the TanStack Query integration:

```bash
npm install @tanstack/react-query
```

## Usage

### Basic Hook (`useFuse`)

The standard hook is perfect for local data searching.

```tsx
import { useFuse } from 'react-fusejs';

const MyComponent = ({ items }) => {
  const [query, setQuery] = useState('');
  
  const { results, deferredSearchTerm } = useFuse({
    items,
    searchQuery: query,
    keys: ['title', 'author'],
    deferSearchQuery: true, // Smooth typing UX
    matchAllOnEmptyQuery: false,
    threshold: 0.3,
  });

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {results.map(({ item, refIndex }) => (
          <li key={refIndex}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
```

### TanStack Query Hook (`useFuseTanstackQuery`)

Perfect for complex apps where you want to cache search results and manage them as server state.

```tsx
import { useFuseTanstackQuery } from 'react-fusejs/tanstack';

const MyComponent = ({ items }) => {
  const [query, setQuery] = useState('');
  
  const { results } = useFuseTanstackQuery({
    items,
    searchQuery: query,
    keys: ['title'],
    cacheConfig: {
      maxCacheLimit: 5, // Automatically prunes old searches from cache
      staleTime: 1000 * 60 * 5,
    }
  });

  if (results.isLoading) return <div>Searching...</div>;

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {results.data?.map(({ item, refIndex }) => (
          <li key={refIndex}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
```

## Configuration Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `T[]` | **Required** | The array of items to search through. |
| `searchQuery` | `string` | **Required** | The current search query. |
| `keys` | `string[]` | `[]` | Properties of the items to search. |
| `deferSearchQuery` | `boolean` | `true` | Use `React.useDeferredValue` for smoother typing. |
| `matchAllOnEmptyQuery` | `boolean` | `false` | Return all items when query is empty. |
| `threshold` | `number` | `0.5` | Fuse.js match threshold (0.0 to 1.0). |
| `limit` | `number` | `undefined` | Maximum number of results to return. |

## License

MIT © [Sanjaiyan Parthipan](https://github.com/sanjaiyan-dev)
