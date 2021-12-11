import React from 'react';
import { useRoutes } from 'react-router';
import { Link } from 'react-router-dom';
import { routes } from './routes';

const App: React.FC = () => {
  const router = useRoutes(routes);
  return (
    <>
      <ol>
        <li>
          <Link to="/example-1">Example 1 (View console)</Link>
        </li>
        <li>
          <Link to="/example-2">Example 2 (View console)</Link>
        </li>
        <li>
          <Link to="/example-3">
            Example 3 - Infinite nested tree: (View console)
          </Link>
        </li>
      </ol>
      {router}
    </>
  );
};

export default App;
