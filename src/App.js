// import si Component yang sudah dibuat
// ButtonClass dan ButtonFunctional

import ButtonClass from "./components/ButtonClass";
import ButtonFunctional from "./components/ButtonFunctional";

// Kompponen Utamanya
function App() {
  return (
    <div
      style={
        // Jadi Object
        {
          padding: "0.5em",
          display: "flex",
          flexDirection: "row",
          gap: "0.5em",
        }
      }
    >
      <ButtonClass text="Data Class" />
      <ButtonClass text="Custom" />
      <ButtonClass />

      <ButtonFunctional text="Data Functional" />
      <ButtonFunctional text="Custom" />
      <ButtonFunctional text="Banget" />

      <ButtonFunctional />
    </div>
  );
}

export default App;
