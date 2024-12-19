import React, { useEffect, useRef, useCallback } from 'react';
import styles from './VideoHorizontal.module.scss';

function VideoHorizontal({ videoUrl }) {
  const videoRef = useRef(null); // Для отслеживания видео элемента

  // Функция для извлечения ID YouTube видео из URL
  const getYouTubeId = useCallback((url) => {
    const youtubeMatch = url.match(/[?&]v=([^&]+)/);
    const youtubeShortMatch = url.match(/youtu\.be\/([^?&]+)/);
    return youtubeMatch ? youtubeMatch[1] : youtubeShortMatch ? youtubeShortMatch[1] : null;
  }, []);

  // Функция для отправки команд в видео плеер (например, YouTube или Rutube)
  const sendPlayerCommands = useCallback((iframe) => {
    if (iframe) {
      try {
        iframe.contentWindow?.postMessage(JSON.stringify({ type: 'player:mute', data: {} }), '*');
        iframe.contentWindow?.postMessage(JSON.stringify({ type: 'player:play', data: {} }), '*');
        iframe.contentWindow?.postMessage(JSON.stringify({ type: 'player:hideControls', data: {} }), '*');
      } catch (error) {
        console.error('Error sending commands to iframe:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Проверка, если видео с встраиваемым плеером (YouTube)
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      const iframe = videoRef.current;
      if (iframe) {
        iframe.onload = () => sendPlayerCommands(iframe);
      }
    }
  }, [videoUrl, sendPlayerCommands]);

  const renderVideoPlayer = useCallback(() => {
    if (!videoUrl) return null;

    const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
    const isRutube = videoUrl.includes('rutube.ru');
    const isMP4 = videoUrl.endsWith('.mp4');

    if (isYouTube) {
      const videoId = getYouTubeId(videoUrl);
      if (videoId) {
        const embeddedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0`;
        return (
          <iframe
            ref={videoRef}
            className={styles.VideoHorizontal__video}
            src={embeddedUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            playsInline
            allowFullScreen
            loading="lazy"
          />
        );
      }
    }

    if (isRutube) {
      const rutubeEmbedUrl = videoUrl.replace('/video/', '/play/embed/') + '?autoplay=1&muted=1&controls=0';
      return (
        <iframe
          ref={videoRef}
          className={styles.VideoHorizontal__video}
          src={rutubeEmbedUrl}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={() => sendPlayerCommands(videoRef.current)}
        />
      );
    }

    if (isMP4) {
      return (
        <video ref={videoRef} className={styles.VideoHorizontal__video} autoPlay muted loop preload="metadata" controls={false} loading="lazy">
          <source src={videoUrl} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      );
    }

    return null;
  }, [videoUrl, getYouTubeId, sendPlayerCommands]);

  return (
    <section className={styles.VideoHorizontal}>
      <div className={styles.VideoHorizontal__container}>{renderVideoPlayer()}</div>
    </section>
  );
}

export default VideoHorizontal;
