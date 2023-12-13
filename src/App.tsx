import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Theme from './utils/theme';
import Layout from './Layout';
import Work from './views/Work';
import Projects from './views/Projects';

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="workexperience" element={<Work />} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <MantineProvider theme={Theme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  );
}
