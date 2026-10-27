import React, { useState } from 'react';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import { soundFX } from '../utils/soundEffects';

export default function AudioControl() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation();
    soundFX.toggleRomanticBGM((active) => {
      setIsPlaying(active);
    });
  };

  return (
    <button
      onClick={handleToggle}
      className="audio-toggle-btn"
      title={isPlaying ? "Matikan Musik Latar" : "Putar Musik Romantis"}
      aria-label="Toggle Romantic Music"
    >
      {isPlaying ? (
        <>
          <FiVolume2 style={{ width: '18px', height: '18px', color: '#D81B60' }} />
          <span className="audio-btn-label">
            Musik Aktif
          </span>
        </>
      ) : (
        <>
          <FiVolumeX style={{ width: '18px', height: '18px', color: '#718096' }} />
          <span className="audio-btn-label" style={{ color: '#718096' }}>
            Putar Musik
          </span>
        </>
      )}
    </button>
  );
}
