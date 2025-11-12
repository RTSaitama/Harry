import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import  type { RouteConfig } from './types/types.ts';
import { HomePage } from './pages/HomePage.tsx';
import { CharactersPage } from './pages/CharactersPage.tsx';
import { CharacterDetails } from './pages/CharacterDetails.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import { SpellsPage } from './pages/SpellsPage.tsx';
import {SpellPage} from './pages/SpellPage.tsx';

const mainRouteConfig: RouteConfig[] = [
  { index: true, element: <HomePage /> },
  { path: 'characters', element: <CharactersPage /> },
  { path: 'characters/:id', element: <CharacterDetails /> },
  { path: 'spells', element: <SpellsPage /> },
  { path: 'spells/:id', element: <SpellPage/>}
];

export const Root = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            {mainRouteConfig.map((route: RouteConfig, index: number) =>
              route.index ? (
                <Route key={index} index element={route.element} />
              ) : (
                <Route key={index} path={route.path} element={route.element} />
              ),
            )}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
  );
};