let _koVoice = null;
let _ttsReady = false;

export let TTS_AVAILABLE = 'speechSynthesis' in window;

function loadVoice() {
  const voices = speechSynthesis.getVoices();
  _koVoice = voices.find(v => v.lang.startsWith('ko')) ?? null;
  if (_koVoice || voices.length) _ttsReady = true;
}

if (TTS_AVAILABLE) {
  loadVoice();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoice;
  }
}

export function speak(text, btnEl) {
  if (!TTS_AVAILABLE) return;
  import('./state.js').then(({ getState }) => {
    if (!getState().settings.ttsEnabled) return;
    speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'ko-KR';
    utt.rate = 0.85;
    utt.pitch = 1.05;
    if (_koVoice) utt.voice = _koVoice;
    if (btnEl) {
      utt.onstart = () => btnEl.classList.add('speaking');
      utt.onend = () => btnEl.classList.remove('speaking');
    }
    speechSynthesis.speak(utt);
  });
}

export function cancelSpeech() {
  if (TTS_AVAILABLE) speechSynthesis.cancel();
}
