import { GameController } from './controllers/game.controller';
import { SettingsController } from './controllers/settings.controller';

class App {
  _init() {
    console.log('start');
    const gameController = GameController;
    const settingsController = SettingsController;
  }
}

export default App;
