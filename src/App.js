// import logo from './logo.svg';
import './App.css';
import invoice from './models/invoice';
import Invoice from './components/Invoice';



function App() {

  return (
    <div className="App">
    <Invoice folio={invoice[0]} />
    <Invoice folio={invoice[1]} />
    <Invoice folio={invoice[2]} />

    </div>
  );
}
export default App;
