// import logo from './logo.svg';
import './App.css';
import invoice from './models/invoice';
import Invoice from './components/Invoice';

const state = {
  invoice
}

function App() {

  return (
    <div className="App">
    <Invoice folio={state.invoice[0]} />
    <Invoice folio={state.invoice[1]} />
    <Invoice folio={state.invoice[2]} />

    </div>
  );
}
export default App;
