/* eslint-disable max-len */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Verifica se existe, no topo da aplicação, um conjunto fixo de links de navegação', () => {
  it('se existe um link com texto Home que, ao ser clicado, redireciona o usuário para a página principal da aplicação', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: 'Home' });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveTextContent('Home');

    userEvent.click(homeLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('se existe um link com o texto About que, ao ser clicado, redireciona o usuário para a página de About', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveTextContent('About');

    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  it('se existe um link com o texto Favorite Pokémons que, ao ser clicado, redireciona o usuário para a página de pokemons favoritados', () => {
    const { history } = renderWithRouter(<App />);

    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(favoriteLink).toBeInTheDocument();
    expect(favoriteLink).toHaveTextContent('Favorite Pokémons');

    userEvent.click(favoriteLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
});
