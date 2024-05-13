import { Router, Route, Switch } from 'expo-router';

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/home" component={Principal} />
          <Route path="/planos" component={Planos} />
          <Route path="/transacoes" component={Transacoes} />
          <Route path="/mais" component={Mais} />
        </Switch>
      </Layout>
    </Router>
  );
}
