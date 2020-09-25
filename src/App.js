import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (
      <BrowserRouter>
      <Switch>
      <Route path="/movies/:id" component={MovieDetails} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" component={EditMovie} />
      <Route path="" component={NotFound} />
      <Route path="/" component={MovieList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
