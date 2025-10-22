import React from 'react';

export interface VideoProps {
  /** Video source URL (Wistia, YouTube, Vimeo, etc.) */
  src: string;
  /** Video title for accessibility */
  title: string;
  /** Video aspect ratio (default: 16:9) */
  aspectRatio?: '16:9' | '4:3' | '21:9' | '1:1';
  /** Additional CSS classes */
  className?: string;
  /** Whether to allow fullscreen */
  allowFullScreen?: boolean;
  /** Additional iframe props */
  frameBorder?: string | number;
}

/**
 * A responsive video embed component that eliminates black bars by maintaining
 * proper aspect ratios. Supports Wistia, YouTube, Vimeo, and other iframe embeds.
 *
 * @example
 * ```mdx
 * import Video from '@site/src/components/Video';
 *
 * <Video
 *   src="https://fast.wistia.net/embed/iframe/your-video-id"
 *   title="Product Demo"
 * />
 * ```
 */
export default function Video({
  src,
  title,
  aspectRatio = '16:9',
  className,
  allowFullScreen = true,
  frameBorder = '0',
}: VideoProps): JSX.Element {
  const aspectRatioMap = {
    '16:9': '56.25%',
    '4:3': '75%',
    '21:9': '42.86%',
    '1:1': '100%',
  };

  const paddingBottom = aspectRatioMap[aspectRatio];

  return (
    <div
      className={['video-container', className].filter(Boolean).join(' ')}
      style={{
        position: 'relative',
        paddingBottom,
        height: 0,
        overflow: 'hidden',
      }}
    >
      <iframe
        src={src}
        title={title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        frameBorder={frameBorder}
        allowFullScreen={allowFullScreen}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
