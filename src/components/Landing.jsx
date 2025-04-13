import { useEffect, useState, useRef } from 'react';
import './Landing.css';

export default function Landing() {
  const [showButton, setShowButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="landing-container">
      <div className="landing-background" />
      <div className="landing-overlay" />

      <h1 className="band-title">Raynah and the Holis7ics</h1>

      {showButton && (
        <>
          <button className="play-button" onClick={togglePlay}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          <audio
            ref={audioRef}
            src="/clip.mp3"
            onEnded={() => setIsPlaying(false)}
          />
        </>
      )}
    </div>
  );
}
