// Web Audio API Synthesizer for Romantic Music & Sound FX
class SoundFX {
  constructor() {
    this.ctx = null;
    this.bgmPlaying = false;
    this.bgmTimer = null;
    this.bgmStep = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Soft sparkle chime sound when tapping flowers or ring
  playSparkle() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const freqs = [1046.5, 1318.5, 1567.98, 2093.0]; // C6, E6, G6, C7
    freqs.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + i * 0.06);

      gain.gain.setValueAtTime(0, now + i * 0.06);
      gain.gain.linearRampToValueAtTime(0.08, now + i * 0.06 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.4);
    });
  }

  // Magical celebratory chime when unwrapping
  playUnwrapSound() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Ascending arpeggio (C major 9)
    const notes = [523.25, 659.25, 783.99, 987.77, 1046.5, 1318.51, 1567.98];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.55);
    });
  }

  // Heart ring twinkle sound
  playRingChime() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const freqs = [1760, 2637, 3520]; // A6, E7, A7
    freqs.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.05);

      gain.gain.setValueAtTime(0, now + i * 0.05);
      gain.gain.linearRampToValueAtTime(0.06, now + i * 0.05 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.05 + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.05);
      osc.stop(now + i * 0.05 + 0.45);
    });
  }

  // Gentle music box lullaby/romantic melody
  toggleRomanticBGM(onStateChange) {
    this.init();
    if (this.bgmPlaying) {
      this.stopRomanticBGM();
      if (onStateChange) onStateChange(false);
      return false;
    } else {
      this.startRomanticBGM();
      if (onStateChange) onStateChange(true);
      return true;
    }
  }

  startRomanticBGM() {
    if (!this.ctx) return;
    this.bgmPlaying = true;
    this.bgmStep = 0;

    // Canon in D / Romance inspired music box progression notes (Hz)
    const melody = [
      659.25, 587.33, 523.25, 493.88, 440.00, 392.00, 440.00, 493.88,
      523.25, 587.33, 659.25, 783.99, 659.25, 587.33, 523.25, 587.33,
      659.25, 783.99, 880.00, 783.99, 659.25, 587.33, 523.25, 440.00,
      392.00, 440.00, 493.88, 523.25, 587.33, 493.88, 523.25, 523.25
    ];

    const harmony = [
      261.63, 196.00, 220.00, 164.81, 174.61, 130.81, 174.61, 196.00
    ];

    const playNextNote = () => {
      if (!this.bgmPlaying || !this.ctx) return;

      const now = this.ctx.currentTime;
      const noteFreq = melody[this.bgmStep % melody.length];
      
      // Melody note
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(noteFreq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.045, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.6);

      // Bass / harmony every 4 steps
      if (this.bgmStep % 4 === 0) {
        const bassOsc = this.ctx.createOscillator();
        const bassGain = this.ctx.createGain();
        const bassFreq = harmony[Math.floor(this.bgmStep / 4) % harmony.length];
        bassOsc.type = 'triangle';
        bassOsc.frequency.setValueAtTime(bassFreq, now);

        bassGain.gain.setValueAtTime(0, now);
        bassGain.gain.linearRampToValueAtTime(0.035, now + 0.05);
        bassGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

        bassOsc.connect(bassGain);
        bassGain.connect(this.ctx.destination);

        bassOsc.start(now);
        bassOsc.stop(now + 1.3);
      }

      this.bgmStep++;
      this.bgmTimer = setTimeout(playNextNote, 340);
    };

    playNextNote();
  }

  stopRomanticBGM() {
    this.bgmPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }
}

export const soundFX = new SoundFX();
