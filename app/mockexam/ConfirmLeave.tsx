import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ConfirmLeave: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleLeaveClick = () => {
    setShowModal(true);
  };

  const confirmLeave = () => {
    setShowModal(false);
    router.push("/");
  };

  const cancelLeave = () => {
    setShowModal(false);
  };

  return (
    <div style={styles.container}>
      <button onClick={handleLeaveClick} style={styles.button}>
        Leave Page
      </button>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2>Are you sure you want to leave?</h2>
            <p>This action will redirect you to the homepage.</p>
            <div style={styles.buttonContainer}>
              <button onClick={confirmLeave} style={styles.confirmButton}>
                Yes, Leave
              </button>
              <button onClick={cancelLeave} style={styles.cancelButton}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  modalOverlay: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center' as 'center',
    width: '80%',
    maxWidth: '400px',
  },
  buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-around',
  },
  confirmButton: {
    padding: '10px 20px',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  cancelButton: {
    padding: '10px 20px',
    backgroundColor: '#ccc',
    color: '#333',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ConfirmLeave;
