import GlobalStyle from './GlobalStyles';
import Theme from './Theme';
import Card from './components/Card';
import Background from './components/Background';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Background>
        <Card />
      </Background>
    </Theme>
  );
}

export default App;
