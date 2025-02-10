import AppRouter from "./route/AppRouter";
import { GoogleSheetsProvider } from "./services/googleSheetService";

function App() {
  return (
    <GoogleSheetsProvider>
      <AppRouter />
    </GoogleSheetsProvider>
  );
}

export default App;
