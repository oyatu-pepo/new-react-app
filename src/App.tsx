import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import { History } from 'history';

import './App.css';

import GoodsList from './containers/GoodsList'
import Complete from './containers/Complete';
import Cart from './containers/Cart';
import Header from './presentations/Header';

/** ルーティング用コンポーネント */
const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={GoodsList} />
    <Route exact path="/list" component={GoodsList} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/done" component={Complete} />
    {/* どのパスにも引っかからない場合 */}
    <Route exact path="/" component={GoodsList} />
  </Switch>
);

interface AppProps {
  history: History<History.PoorMansUnknown>;
}

/** アプリケーション全体のコンポーネント */
const App = ({ history }: AppProps) => (
  <ConnectedRouter history={history}>
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  </ConnectedRouter>
);

export default App;
