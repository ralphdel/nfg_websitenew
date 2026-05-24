"use client";

import MuxPlayer from "@mux/mux-player-react";
import MuxPlayerLazy from "@mux/mux-player-react/lazy";

export function MuxVideoPlayer({
  playbackId,
  isLazy = true,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  poster,
  style,
  ariaLabel,
  preload = "none"
}) {
  if (!playbackId) return null;

  const playerProps = {
    playbackId,
    poster,
    autoPlay: autoPlay ? "any" : false, // MuxPlayer autoPlay accepts 'any', 'muted', or boolean
    muted,
    loop,
    playsInline,
    preload,
    style,
    "aria-label": ariaLabel,
    controls: false, // Standard background video doesn't need native playback controls
    // Add safety attributes for background video autoplay behavior
    crossOrigin: "anonymous"
  };

  if (isLazy) {
    return (
      <MuxPlayerLazy
        {...playerProps}
        loading="viewport"
      />
    );
  }

  return (
    <MuxPlayer
      {...playerProps}
    />
  );
}

export default MuxVideoPlayer;
