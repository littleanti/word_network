import { showScreen, showFlash } from './ui.js';
import { startGame } from './game.js';
import { loadSettings } from './storage.js';
import { getState } from './state.js';

function initApp() {
  // Load saved settings
  const saved = loadSettings();
  if (saved) {
    const state = getState();
    Object.assign(state.settings, saved);
    if (saved.categories) state.settings.categories = saved.categories;
  }

  // Button listeners
  const btnStart = document.getElementById('btn-quick-start');
  if (btnStart) btnStart.addEventListener('click', startGame);

  const btnPlayAgain = document.getElementById('btn-play-again');
  if (btnPlayAgain) btnPlayAgain.addEventListener('click', startGame);

  const btnSettings = document.getElementById('btn-settings');
  if (btnSettings) {
    btnSettings.addEventListener('click', () => {
      showFlash('설정 화면은 준비 중이에요! 😊', 'info');
    });
  }

  showScreen('screen-start');
}

document.addEventListener('DOMContentLoaded', initApp);
