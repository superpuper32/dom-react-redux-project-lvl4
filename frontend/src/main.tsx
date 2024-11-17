import { createRoot } from 'react-dom/client';
import init from './init.tsx';

const app = async () => {
  const root = createRoot(document.querySelector('#chat') as HTMLElement);
  root.render(await init());
};

app();
