import type { ComponentChildren } from 'preact';
import { useState } from 'preact/hooks';
import './PageContent.css';

function PageContent(props: { children: ComponentChildren }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-red-500">{props.children}</h1>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default PageContent;
