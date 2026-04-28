import { ghostranceYouTubeChannelUrl, type Track } from "@/data/tracks";
import { YouTubeEmbed } from "@/components/youtube-embed";

type TrackCardProps = {
  track: Track;
};

export function TrackCard({ track }: TrackCardProps) {
  const youtubeUrl = track.youtubeUrl ?? ghostranceYouTubeChannelUrl;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#111111]/90 shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#d8b45d]/45 hover:bg-[#15120b]">
      <YouTubeEmbed videoId={track.youtubeId} title={track.title} />
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[#d8b45d]/30 bg-[#d8b45d]/10 px-3 py-1 text-xs font-semibold uppercase text-[#f0d38a]">
            {track.genre}
          </span>
          {track.featured ? (
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase text-zinc-300">
              Featured
            </span>
          ) : null}
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-50">{track.title}</h2>
          <p className="text-sm leading-6 text-zinc-400">{track.description}</p>
        </div>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex w-fit items-center justify-center rounded-full border border-[#d8b45d]/35 px-4 py-2 text-sm font-semibold text-[#f0d38a] transition hover:border-[#f0d38a] hover:bg-[#d8b45d] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
        >
          Watch on YouTube
        </a>
      </div>
    </article>
  );
}
