import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { BsMouse } from 'react-icons/bs';
import { FaHeart, FaRegStickyNote } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import { IoReloadOutline } from 'react-icons/io5';

import WrappedBouquet from './components/WrappedBouquet';
import SunflowerBouquet from './components/SunflowerBouquet';
import FloatingPetals from './components/FloatingPetals';
import AudioControl from './components/AudioControl';
import LetterModal from './components/LetterModal';
import { soundFX } from './utils/soundEffects';

export default function App() {
  const [isUnwrapped, setIsUnwrapped] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Show quick toast notification
  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? '' : current));
    }, 2800);
  }, []);

  // Trigger celebratory confetti burst with sunflower & romantic colors
  const triggerConfetti = useCallback(() => {
    // Left cannon
    confetti({
      particleCount: 45,
      angle: 60,
      spread: 55,
      origin: { x: 0.2, y: 0.65 },
      colors: ['#FFD700', '#FFB703', '#FF4D8D', '#FF80AB', '#FFFFFF'],
    });
    // Right cannon
    confetti({
      particleCount: 45,
      angle: 120,
      spread: 55,
      origin: { x: 0.8, y: 0.65 },
      colors: ['#FFD700', '#FFB703', '#FF4D8D', '#FF80AB', '#FFFFFF'],
    });
  }, []);

  // Heart confetti for the proposal ring
  const triggerRingConfetti = useCallback(() => {
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { x: 0.35, y: 0.3 },
      colors: ['#E63946', '#FF4D6D', '#FFCCD5', '#FFD166'],
      shapes: ['circle'],
      scalar: 1.2
    });
  }, []);

  // Handle unwrap action (Click on Screen 1)
  const handleUnwrap = useCallback(() => {
    if (isUnwrapped) return;
    soundFX.playUnwrapSound();
    triggerConfetti();
    setIsUnwrapped(true);
    showToast('🌻 Buket Bunga Matahari berhasil dibuka!');
  }, [isUnwrapped, triggerConfetti, showToast]);

  // Handle rewrap / replay action
  const handleRewrap = useCallback((e) => {
    e.stopPropagation();
    setIsUnwrapped(false);
    setIsLetterOpen(false);
    showToast('🎁 Buket dibungkus kembali!');
  }, [showToast]);

  // Handle ring click
  const handleRingClick = useCallback((e) => {
    e.stopPropagation();
    soundFX.playRingChime();
    triggerRingConfetti();
    showToast('💍 Cincin permata hati melambangkan cinta yang tulus...');
  }, [triggerRingConfetti, showToast]);

  // Handle flower click
  const handleFlowerClick = useCallback((e) => {
    e.stopPropagation();
    soundFX.playSparkle();
    triggerConfetti();
    showToast('✨ Bunga matahari mekar dengan penuh kehangatan!');
  }, [triggerConfetti, showToast]);

  return (
    <div
      className="app-container"
      onClick={!isUnwrapped ? handleUnwrap : undefined}
      style={{ cursor: !isUnwrapped ? 'pointer' : 'default' }}
    >
      {/* 🌸 Ambient Floating Petals Background */}
      <FloatingPetals count={20} />

      {/* 🎵 BGM Music Control Button */}
      <AudioControl />

      <AnimatePresence mode="wait">
        {!isUnwrapped ? (
          /* ======================================================== */
          /* SCREEN 1: A gift has arrived for you (Matching Image 1)  */
          /* ======================================================== */
          <motion.div
            key="screen-1"
            className="center-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {/* Ambient Aura Glow behind the gift */}
            <div className="aura-glow" />

            {/* Wrapped Bouquet Graphic with gentle floating animation */}
            <div className="animate-floating" style={{ width: '100%', maxWidth: '240px', margin: '0 auto', zIndex: 10 }}>
              <WrappedBouquet className="w-full h-auto" />
            </div>

            {/* Title from Image 1 */}
            <h1 className="gift-title">
              A gift has arrived for you
            </h1>

            {/* Subtitle from Image 1 */}
            <p className="gift-subtitle">
              TAP ANYWHERE TO UNWRAP
            </p>

            {/* Interactive Mouse / Tap Indicator from Image 1 */}
            <div className="mouse-indicator-container" title="Klik di mana saja untuk membuka hadiah">
              <div className="mouse-icon-badge">
                <BsMouse className="mouse-icon-pulse" />
              </div>
            </div>
          </motion.div>
        ) : (
          /* ======================================================== */
          /* SCREEN 2: Sunflower Bouquet Revealed (Matching Image 2)  */
          /* ======================================================== */
          <motion.div
            key="screen-2"
            className="center-content"
            initial={{ opacity: 0, scale: 0.82, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 220 }}
          >
            {/* Ambient Glow */}
            <div className="aura-glow" style={{ width: '380px', height: '380px', top: '15%' }} />

            {/* Main Sunflower Bouquet Component (Image 2) */}
            <SunflowerBouquet
              onCardClick={() => setIsLetterOpen(true)}
              onRingClick={handleRingClick}
              onFlowerClick={handleFlowerClick}
            />

            {/* Interactive Action Bar at Bottom */}
            <motion.div
              className="action-bar"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  soundFX.playSparkle();
                  setIsLetterOpen(true);
                }}
                className="btn-romantic btn-primary-gradient"
                title="Buka notes"
              >
                <FaRegStickyNote style={{ width: '16px', height: '16px' }} />
                <span>Notes</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  soundFX.playSparkle();
                  triggerConfetti();
                }}
                className="btn-romantic btn-secondary-glass"
                title="Taburkan kelopak bunga & konfeti"
              >
                <HiSparkles style={{ width: '16px', height: '16px', color: '#F59E0B' }} />
                <span>Tabur Kelopak</span>
              </button>

              <button
                onClick={handleRewrap}
                className="btn-romantic btn-secondary-glass"
                title="Bungkus kembali kado bunga"
              >
                <IoReloadOutline style={{ width: '16px', height: '16px' }} />
                <span>Bungkus Ulang</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 💌 Love Letter Modal */}
      <LetterModal
        isOpen={isLetterOpen}
        onClose={() => setIsLetterOpen(false)}
      />

      {/* 💬 Sweet Toast Notice */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="toast-notice"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
          >
            <FaHeart style={{ width: '14px', height: '14px', color: '#FF4D8D' }} />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
