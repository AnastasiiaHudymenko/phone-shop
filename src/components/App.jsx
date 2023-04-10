import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/sharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Favorites } from 'pages/Favorites';
import { Basket } from 'pages/Basket';
import { ProductDetalis } from 'pages/ProductDetalis';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product/:id" element={<ProductDetalis />} />
      </Route>
    </Routes>
  );
};
