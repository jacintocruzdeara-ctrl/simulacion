import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { SimulationProvider } from "./context/SimulationContext";
ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
<SimulationProvider>

<App />
</SimulationProvider>
</BrowserRouter>
)
