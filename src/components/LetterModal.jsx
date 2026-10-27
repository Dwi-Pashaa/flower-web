import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function LetterModal({ isOpen, onClose }) {
  const letterText = `Sabar yaa, jangan marah-marah mulu napa kalo lagi haid tuh... Paham kok pasti perutnya lagi ga enak banget terus bawaannya pengen kesel mulu, tapi jangan cemberut terus dong yaa.\n\nNih terima dulu bunga matahari online-nya biar harimu agak cerahan dikit. Buat bunga aslinya nanti yaa, pas kita ketemu kita beli bareng-bareng! Senyum dulu dongg 🌻💛✨`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 24 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="modal-header">
              <div className="modal-title-box">
                <h3 className="modal-title">Special Notes</h3>
              </div>

              <button
                onClick={onClose}
                className="modal-close-btn"
                aria-label="Tutup"
              >
                <IoClose style={{ width: "24px", height: "24px" }} />
              </button>
            </div>

            {/* Content Text */}
            <div className="modal-body">
              <div className="letter-paper">{letterText}</div>
            </div>

            {/* Footer */}
            <div
              className="modal-actions"
              style={{ justifyContent: "flex-end" }}
            >
              <button
                onClick={onClose}
                className="btn-romantic btn-primary-gradient"
                style={{ padding: "8px 24px", fontSize: "0.875rem" }}
              >
                Tutup
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
