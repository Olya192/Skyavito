import logo from './logo.svg';
import './App.css';
import { Container } from './components/container/Container';
import { AppRoutes } from './routes';
import { GlobalStyle } from './components/container/Container.Styles';


function App() {
  return (
    <>
    <GlobalStyle/>
    <AppRoutes />

    </>

  );
}

export default App;
