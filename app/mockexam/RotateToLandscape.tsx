import React from 'react';
import { IoPhonePortrait } from 'react-icons/io5';
import { motion } from 'framer-motion';
import useOrientation from './Orientation';
const RotateToLandscape: React.FC = ({  }) => {
  const isPortrait = useOrientation();

  return (
    <div className=''>
      {isPortrait ? (
        <div style={styles.overlay}>
          <div style={styles.message}>
            <motion.div
              animate={{ rotate: isPortrait ? 90 : 0 }}
              transition={{ duration: 2.5, ease: 'easeInOut',repeat: isPortrait ? Infinity : 0,repeatType: 'loop' }}
              style={{ display: 'inline-block', marginBottom: '1rem' }}
            >
              <IoPhonePortrait size={50} />
            </motion.div>
            <h2>សូមផ្តេកទូរស័ព្ទ</h2>
            <p>ការប្រលងសាកល្បងងាយស្រួលប្រើប្រាស់នៅពេលទូរស័ព្ទផ្តេក។</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    zIndex: 1000,
  },
  message: {
    textAlign: 'center' as 'center',
  },
};

export default RotateToLandscape;
