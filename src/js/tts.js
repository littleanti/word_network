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

export function speakSequence(texts) {
  if (!TTS_AVAILABLE) return;
  import('./state.js').then(({ getState }) => {
    if (!getState().settings.ttsEnabled) return;
    speechSynthesis.cancel();
    const sayAt = (i) => {
      if (i >= texts.length) return;
      const utt = new SpeechSynthesisUtterance(texts[i]);
      utt.lang = 'ko-KR';
      utt.rate = 0.85;
      utt.pitch = 1.05;
      if (_koVoice) utt.voice = _koVoice;
      utt.onend = () => sayAt(i + 1);
      speechSynthesis.speak(utt);
    };
    sayAt(0);
  });
}

export function speakThen(text, callback) {
  if (!TTS_AVAILABLE) { if (callback) callback(); return; }
  import('./state.js').then(({ getState }) => {
    if (!getState().settings.ttsEnabled) { if (callback) callback(); return; }
    speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'ko-KR';
    utt.rate = 0.85;
    utt.pitch = 1.05;
    if (_koVoice) utt.voice = _koVoice;
    let fired = false;
    const fire = () => { if (!fired) { fired = true; callback?.(); } };
    utt.onend = fire;
    utt.onerror = fire;
    // fallback: onend가 오지 않을 경우 글자당 ~350ms 후 강제 실행
    setTimeout(fire, Math.max(600, text.length * 350));
    speechSynthesis.speak(utt);
  });
}

export function cancelSpeech() {
  if (TTS_AVAILABLE) speechSynthesis.cancel();
}
