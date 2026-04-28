export type Track = {
  slug: string;
  title: string;
  description: string;
  youtubeId: string;
  youtubeUrl: string;
  genreTags: string[];
  featured?: boolean;
};

export const ghostranceYouTubeChannelUrl =
  "https://www.youtube.com/@ghostrance101";

export const ghostranceYouTubeChannelName = "Ghostrance";

const youtubeWatchUrl = (videoId: string) =>
  `https://www.youtube.com/watch?v=${videoId}`;

export const tracks: Track[] = [
  {
    slug: "divine",
    title: "Divine - Ghostrance (Official Video) DnB",
    description:
      "A high-energy Ghostrance DnB track with driving rhythm, atmospheric electronic textures, and underground club energy.",
    youtubeId: "BMnicP-zPA0",
    youtubeUrl: youtubeWatchUrl("BMnicP-zPA0"),
    genreTags: ["DnB", "Drum and Bass", "Electronic"],
    featured: true,
  },
  {
    slug: "let-it-go",
    title: "Let It Go - Ghostrance (Official Video) Dance",
    description:
      "A melodic dance track from Ghostrance built around movement, release, and uplifting electronic energy.",
    youtubeId: "IaQ0KfItXYc",
    youtubeUrl: youtubeWatchUrl("IaQ0KfItXYc"),
    genreTags: ["Dance", "Electronic", "Club"],
  },
  {
    slug: "summer-love",
    title: "Summer Love - Ghostrance (Official Video) Dance",
    description:
      "A bright dance-focused Ghostrance track with summer energy, warm melodies, and feel-good club influence.",
    youtubeId: "SZk4AJBMM_Y",
    youtubeUrl: youtubeWatchUrl("SZk4AJBMM_Y"),
    genreTags: ["Dance", "Summer", "Electronic"],
  },
  {
    slug: "rambo",
    title: "Rambo - Ghostrance (Official Video) Techno",
    description:
      "A darker techno-driven Ghostrance track with heavy electronic movement and underground intensity.",
    youtubeId: "uowMGpwxRi8",
    youtubeUrl: youtubeWatchUrl("uowMGpwxRi8"),
    genreTags: ["Techno", "Electronic", "Underground"],
  },
  {
    slug: "hustler",
    title: "Hustler - Ghostrance (Official Video) Old School Hip Hop",
    description:
      "An old-school hip hop influenced Ghostrance track with urban character, rhythm, and street-focused energy.",
    youtubeId: "j7S3o55GLio",
    youtubeUrl: youtubeWatchUrl("j7S3o55GLio"),
    genreTags: ["Hip Hop", "Old School", "Urban"],
  },
  {
    slug: "believe",
    title: "Believe - Ghostrance (Official Video) Ambient",
    description:
      "An ambient Ghostrance track with atmospheric textures, reflective energy, and cinematic electronic mood.",
    youtubeId: "KKDkQI0juuI",
    youtubeUrl: youtubeWatchUrl("KKDkQI0juuI"),
    genreTags: ["Ambient", "Electronic", "Cinematic"],
  },
];
