import logo from './logo.svg';
import './App.css';
import FormComponent from './FormComponent';
import HeaderComponent from './HeaderComponent';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Roboto, sans-serif', textAlign: 'center' }}>
      <HeaderComponent />
      <header className="App-header" style={{ backgroundColor: '#3f51b5', color: 'white', padding: '20px' }}>
        <img src={logo} className="App-logo" alt="logo" style={{ height: '100px' }} />
        <h1 style={{ margin: '20px 0' }}>Welcome to the ICBR Stack Test</h1>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
          This is a simple form submission test.
        </p>
        <FormComponent />
      </header>
    </div>
  );
}

export default App;
