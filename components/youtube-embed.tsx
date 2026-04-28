type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
};

export function YouTubeEmbed({
  videoId,
  title,
  className = "",
}: YouTubeEmbedProps) {
  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-lg border border-[#d8b45d]/25 bg-black shadow-[0_18px_70px_rgba(0,0,0,0.5)] ${className}`}
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={`${title} on YouTube`}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
