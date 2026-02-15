import { Button } from '@pymes/ui-components';
import { formatCurrency } from '@pymes/shared-utils';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Template Base - PYMEs Platform</h1>
      <div className="card">
        <Button variant="primary" onClick={() => alert('¡Funciona!')}>
          Botón de tu Librería
        </Button>
        <p>Precio: {formatCurrency(1500)}</p>
      </div>
    </div>
  );
}

export default App;
