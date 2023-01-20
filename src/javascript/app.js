import FightersView, { createFighters } from './components/fightersView';
import { fighterService } from './services/fightersService';

class App {
  static rootElement = document.getElementById('root');
  static loadingElement = document.getElementById('loading-overlay');

  static async startApp() {
    try {
      App.loadingElement.style.visibility = 'visible';

      const fighters = await fighterService.getFighters();
      const FightersView = new FightersView(fighters);

      App.rootElement.appendChild(FightersView.element);
    } catch (error) {
      console.warn(error);
      App.rootElement.innerText = 'Failed to load data';
    } finally {
      App.loadingElement.style.visibility = 'hidden';
    }
  }
}

export default App;
