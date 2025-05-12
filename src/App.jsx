import { ImageProvider } from "./Context/ImageContext";
import AppRouter from "./route/AppRouter";
import { GoogleSheetsProvider } from "./services/googleSheetService";
function App() {
  return (
    <GoogleSheetsProvider>
      <ImageProvider>
        <AppRouter />
      </ImageProvider>
    </GoogleSheetsProvider>
  );
}

export default App;
