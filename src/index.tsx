import React from 'react';
import { createRoot } from 'react-dom/client';

import { Main } from './Main';

/** Render in root */
const container = document.getElementById("root");

if (!container) {
  throw new Error("No container to render");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Main></Main>
  </React.StrictMode>
);
