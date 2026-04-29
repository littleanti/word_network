import { SCENES } from '../data/scenes.js';
import { WORDS_BY_SCENE } from '../data/words.js';
import { getState, resetGame, getCurrentTargetWord } from './state.js';
import { buildDock, renderDock, markUsed, unmarkUsed } from './syllable-dock.js';
import { renderSlots, fillNextSlot, checkSlots, lockSlots, clearSlotsFrom, markSlotsWrong, celebrateSlots, shakeSlots } from './slot.js';
import { renderScene, markWordMatched } from './scene.js';
import { showScreen, showFlash, updateProgress, updateScore } from './ui.js';
import { vibrate } from './utils.js';
import { speak } from './tts.js';

const ENCOURAGEMENT = [
  '정말 잘했어요! 👏',
  '훌륭해요! 🌟',
  '최고예요! 🏆',
  '대단해요! 🎉',
  '완벽해요! ✨',
  '멋져요! 🦋',
];

function pickScenes(settings) {
  const { categories, sceneCount, difficulty } = settings;
  const available = SCENES.filter(s => {
    const words = WORDS_BY_SCENE[s.id] ?? [];
    return words.length > 0 && (categories.has(s.category) || categories.size === 0);
  });
  if (available.length === 0) return SCENES.slice(0, 1);
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(sceneCount, shuffled.length)).map(scene => ({
    ...scene,
    words: (WORDS_BY_SCENE[scene.id] ?? []).slice(0, 3),
  }));
}

export function startGame() {
  const state = getState();
  resetGame();

  state.game.scenes = pickScenes(state.settings);
  if (state.game.scenes.length === 0) {
    showFlash('장면이 없어요. 카테고리를 선택해 주세요.', 'error');
    return;
  }
  state.game.currentIdx = 0;
  state.game.targetWordIdx = 0;

  showScreen('screen-play');
  updateProgress(0, state.game.scenes.length);
  updateScore(0);
  loadCurrentScene();
}

function loadCurrentScene() {
  const state = getState();
  const scene = state.game.scenes[state.game.currentIdx];
  if (!scene) { endGame(); return; }

  state.game.targetWordIdx = 0;
  state.game.slot = { filled: [], lockedCount: 0 };

  renderScene(scene, scene.words);
  loadCurrentWord();
  updateProgress(state.game.currentIdx, state.game.scenes.length);
}

function loadCurrentWord() {
  const state = getState();
  const scene = state.game.scenes[state.game.currentIdx];
  const targetIdx = state.game.targetWordIdx;
  const word = scene.words[targetIdx];
  if (!word) { advanceScene(); return; }

  state.game.slot = { filled: new Array(word.syllables.length).fill(null), lockedCount: 0 };

  // Build dock for ALL remaining words in scene
  const remainingWords = scene.words.slice(targetIdx);
  const dock = buildDock(remainingWords, state.settings.difficulty);
  state.game.dock = dock;

  renderSlots(word);
  renderDock(dock, onSyllableTap);
}

function onSyllableTap(syllable) {
  const state = getState();
  const word = getCurrentTargetWord();
  if (!word) return;

  const { slot } = state.game;

  // find next empty index
  const emptyIdx = slot.filled.findIndex((v, i) => i >= slot.lockedCount && v === null);
  if (emptyIdx === -1) return; // all slots filled, shouldn't happen

  slot.filled[emptyIdx] = syllable;
  syllable.used = true;
  markUsed(syllable.id);
  fillNextSlot(syllable.char, slot.lockedCount);

  vibrate(15);

  // Check if all slots filled
  if (slot.filled.every(v => v !== null)) {
    validateAnswer(word);
  }
}

function validateAnswer(word) {
  const result = checkSlots(word);
  const state = getState();

  if (result === 'correct') {
    celebrateSlots();
    vibrate(30);
    speak(word.word);
    markWordMatched(word.id);
    state.game.score += 10;
    updateScore(state.game.score);
    state.game.stickers.push(word.emoji);

    showFlash(`${word.word}! 정답이에요! 🎉`, 'success');

    setTimeout(() => {
      state.game.targetWordIdx += 1;
      state.game.slot = { filled: [], lockedCount: 0 };
      loadCurrentWord();
    }, 1200);

  } else if (result && result.status === 'wrong') {
    shakeSlots();
    vibrate(50);
    markSlotsWrong(result.correctPrefixLen);

    // Return wrong syllables to dock
    const { filled } = state.game.slot;
    for (let i = result.correctPrefixLen; i < filled.length; i++) {
      if (filled[i]) {
        filled[i].used = false;
        unmarkUsed(filled[i].id);
        filled[i] = null;
      }
    }
    clearSlotsFrom(result.correctPrefixLen);

    // Lock correct prefix
    if (result.correctPrefixLen > 0) {
      state.game.slot.lockedCount = result.correctPrefixLen;
      lockSlots(result.correctPrefixLen);
    }

    // Re-attach tap listeners after partial reset
    setTimeout(() => {
      renderDock(state.game.dock, onSyllableTap);
    }, 50);
  }
}

function advanceScene() {
  const state = getState();
  state.game.currentIdx += 1;
  state.game.targetWordIdx = 0;

  if (state.game.currentIdx >= state.game.scenes.length) {
    endGame();
  } else {
    updateProgress(state.game.currentIdx, state.game.scenes.length);
    setTimeout(loadCurrentScene, 300);
  }
}

function endGame() {
  const state = getState();
  showScreen('screen-end');

  const stickersEl = document.getElementById('end-stickers');
  if (stickersEl) {
    stickersEl.innerHTML = '';
    for (const emoji of state.game.stickers) {
      const span = document.createElement('span');
      span.className = 'sticker';
      span.textContent = emoji;
      stickersEl.appendChild(span);
    }
  }

  const scoreEl = document.getElementById('end-score-text');
  if (scoreEl) scoreEl.textContent = `${state.game.score}점`;

  const enc = ENCOURAGEMENT[Math.floor(Math.random() * ENCOURAGEMENT.length)];
  const encEl = document.getElementById('end-encouragement');
  if (encEl) encEl.textContent = enc;
}
