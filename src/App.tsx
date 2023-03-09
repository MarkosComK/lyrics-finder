import React from 'react';
import InputField from './components/InputField';
import Title from './components/Title';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <header> {/* this header is styled in ./styles/GlobalStyles */}
        <div>
          <Title />
          <InputField />
        </div>
      </header>
    </div>
  );
}

export default App;
