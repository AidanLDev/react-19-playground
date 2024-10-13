import "./App.css";
import ActionExample from "./components/ActionExample";
import ActionState from "./components/new-hooks/ActionState";
import FormStatus from "./components/new-hooks/FormStatus";
import Optimistic from "./components/new-hooks/Optimistic";

function App() {
  return (
    <div className="App">
      <ActionExample />
      <ActionState />
      <FormStatus />
      <Optimistic />
    </div>
  );
}

export default App;
