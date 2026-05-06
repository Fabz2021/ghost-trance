export type Track = {
  slug: string;
  title: string;
  description: string;
  youtubeVideoId: string;
  youtubeUrl: string;
  genreTags: string[];
  sourceChannel: "Ghostrance" | "Ghostrance - Topic";
  featured?: boolean;
  order: number;
};

export const ghostranceYouTubeChannelUrl =
  "https://www.youtube.com/@ghostrance101";

export const ghostranceYouTubeChannelName = "Ghostrance";

const youtubeWatchUrl = (videoId: string) =>
  `https://www.youtube.com/watch?v=${videoId}`;

export const tracks: Track[] = [
  {
    order: 1,
    slug: "wrongbeat",
    title: "GHOSTRANCE - Wrongbeat (Official Video)",
    description:
      "Official Ghostrance video for Wrongbeat, sourced from the Ghostrance YouTube channel.",
    youtubeVideoId: "2j4_EQ9Sro0",
    youtubeUrl: youtubeWatchUrl("2j4_EQ9Sro0"),
    genreTags: ["Electronic"],
    sourceChannel: "Ghostrance",
    featured: true,
  },
  {
    order: 2,
    slug: "divine",
    title: "GHOSTRANCE - Divine (Official Video) - DnB",
    description:
      "A high-energy DnB release from GHOSTRANCE with driving rhythm and underground electronic momentum.",
    youtubeVideoId: "BMnicP-zPA0",
    youtubeUrl: youtubeWatchUrl("BMnicP-zPA0"),
    genreTags: ["DnB", "Drum and Bass", "Electronic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 3,
    slug: "khabib",
    title: "GHOSTRANCE - Khabib (Official Video)",
    description:
      "Official Ghostrance video for Khabib, sourced from the Ghostrance YouTube channel.",
    youtubeVideoId: "7REsGspyg2Q",
    youtubeUrl: youtubeWatchUrl("7REsGspyg2Q"),
    genreTags: ["Electronic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 4,
    slug: "let-it-go",
    title: "GHOSTRANCE - Let It Go (Official Video) - Dance",
    description:
      "A melodic GHOSTRANCE dance release built around movement, release, and uplifting electronic energy.",
    youtubeVideoId: "IaQ0KfItXYc",
    youtubeUrl: youtubeWatchUrl("IaQ0KfItXYc"),
    genreTags: ["Dance", "Electronic", "Club"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 5,
    slug: "summer-love",
    title: "GHOSTRANCE - Summer Love (Official Video) - Dance",
    description:
      "A bright dance-focused GHOSTRANCE release with summer energy, warm melodies, and feel-good club influence.",
    youtubeVideoId: "SZk4AJBMM_Y",
    youtubeUrl: youtubeWatchUrl("SZk4AJBMM_Y"),
    genreTags: ["Dance", "Summer", "Electronic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 6,
    slug: "hustler",
    title: "GHOSTRANCE - Hustler (Official Video) - Old School Hip Hop",
    description:
      "An old-school hip hop influenced GHOSTRANCE track with summer chill and street-focused rhythm.",
    youtubeVideoId: "j7S3o55GLio",
    youtubeUrl: youtubeWatchUrl("j7S3o55GLio"),
    genreTags: ["Hip Hop", "Old School", "Urban"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 7,
    slug: "united",
    title: "GHOSTRANCE - United (Official Video)",
    description:
      "Official Ghostrance video for United, a Manchester United-inspired release from the Ghostrance YouTube channel.",
    youtubeVideoId: "fZJeehfjnnk",
    youtubeUrl: youtubeWatchUrl("fZJeehfjnnk"),
    genreTags: ["Electronic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 8,
    slug: "palestine",
    title: "GHOSTRANCE - Palestine (Official Video) - Drum and Bass",
    description:
      "A Drum and Bass GHOSTRANCE release with a direct call for peace.",
    youtubeVideoId: "3D6qOtnD5hg",
    youtubeUrl: youtubeWatchUrl("3D6qOtnD5hg"),
    genreTags: ["Drum and Bass", "DnB", "Electronic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 9,
    slug: "scream",
    title: "GHOSTRANCE - Scream (Official Video) - DnB",
    description:
      "A Halloween-leaning GHOSTRANCE DnB release with a dark, high-energy edge.",
    youtubeVideoId: "cNeMtBNYynk",
    youtubeUrl: youtubeWatchUrl("cNeMtBNYynk"),
    genreTags: ["DnB", "Drum and Bass", "Electronic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 10,
    slug: "cod-haters",
    title: "GHOSTRANCE - Cod Haters (Official Video) - Hip Hop",
    description:
      "A gaming-inspired GHOSTRANCE hip hop release made for Call of Duty fans.",
    youtubeVideoId: "bpYeaRQGIvw",
    youtubeUrl: youtubeWatchUrl("bpYeaRQGIvw"),
    genreTags: ["Hip Hop", "Gaming"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 11,
    slug: "rambo",
    title: "GHOSTRANCE - Rambo (Official Video) - Techno",
    description:
      "A darker techno-driven GHOSTRANCE track with heavy electronic movement and speaker-testing energy.",
    youtubeVideoId: "uowMGpwxRi8",
    youtubeUrl: youtubeWatchUrl("uowMGpwxRi8"),
    genreTags: ["Techno", "Electronic", "Underground"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 12,
    slug: "mantra",
    title: "GHOSTRANCE - Mantra (Official Video)",
    description:
      "A liquid DnB-style GHOSTRANCE release made with radio playlist energy in mind.",
    youtubeVideoId: "cUbZykps0_c",
    youtubeUrl: youtubeWatchUrl("cUbZykps0_c"),
    genreTags: ["Liquid DnB", "Drum and Bass", "Electronic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 13,
    slug: "the-prophecy",
    title: "GHOSTRANCE - The Prophecy (Official Video) - Dance / Techno",
    description:
      "A club anthem-style GHOSTRANCE release blending dance and techno energy.",
    youtubeVideoId: "yoqAhTThmKo",
    youtubeUrl: youtubeWatchUrl("yoqAhTThmKo"),
    genreTags: ["Dance", "Techno", "Club"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 14,
    slug: "hacienda-forever",
    title: "GHOSTRANCE - Hacienda Forever (Official Video) - House / Club",
    description:
      "A GHOSTRANCE tribute to Manchester club culture with house and club influence.",
    youtubeVideoId: "VCHEAF1G2AQ",
    youtubeUrl: youtubeWatchUrl("VCHEAF1G2AQ"),
    genreTags: ["House", "Club", "Dance"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 15,
    slug: "anthem",
    title: "GHOSTRANCE - Anthem (Official Video) - Dance",
    description:
      "An epic summer-facing GHOSTRANCE dance anthem with bright club energy.",
    youtubeVideoId: "Iq5wWq5UY-Y",
    youtubeUrl: youtubeWatchUrl("Iq5wWq5UY-Y"),
    genreTags: ["Dance", "Electronic", "Club"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 16,
    slug: "lockdown",
    title: "GHOSTRANCE - Lockdown (Official Video) - Hip Hop",
    description:
      "A GHOSTRANCE hip hop release from the official Ghostrance YouTube catalogue.",
    youtubeVideoId: "dCud0K4ncQ8",
    youtubeUrl: youtubeWatchUrl("dCud0K4ncQ8"),
    genreTags: ["Hip Hop", "Urban"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 17,
    slug: "trapped",
    title: "GHOSTRANCE - Trapped (Official Video)",
    description:
      "The nineteenth GHOSTRANCE release, presented as an official video on the Ghostrance channel.",
    youtubeVideoId: "A7PpHPoDpsk",
    youtubeUrl: youtubeWatchUrl("A7PpHPoDpsk"),
    genreTags: ["Electronic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 18,
    slug: "2-shots",
    title: "GHOSTRANCE - 2 Shots (Official Video) - Hip Hop",
    description:
      "A bass-heavy GHOSTRANCE hip hop melody from the official Ghostrance video catalogue.",
    youtubeVideoId: "C9LgJemc3po",
    youtubeUrl: youtubeWatchUrl("C9LgJemc3po"),
    genreTags: ["Hip Hop", "Bass"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 19,
    slug: "regging",
    title: "GHOSTRANCE - Regging (Official Video) - Dance",
    description:
      "A party-starting GHOSTRANCE dance release from the official Ghostrance channel.",
    youtubeVideoId: "_45PSSyWDig",
    youtubeUrl: youtubeWatchUrl("_45PSSyWDig"),
    genreTags: ["Dance", "Electronic", "Party"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 20,
    slug: "gun-shots",
    title: "GHOSTRANCE - Gun Shots (Official Video) - Reggae",
    description:
      "A reggae-focused GHOSTRANCE release from the official Ghostrance YouTube catalogue.",
    youtubeVideoId: "oszof8CHtF8",
    youtubeUrl: youtubeWatchUrl("oszof8CHtF8"),
    genreTags: ["Reggae", "Electronic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 21,
    slug: "imagine",
    title: "GHOSTRANCE - Imagine (Official Video) - Trap",
    description:
      "A trap-leaning GHOSTRANCE release built around imagination and atmosphere.",
    youtubeVideoId: "Ba5njhb46Po",
    youtubeUrl: youtubeWatchUrl("Ba5njhb46Po"),
    genreTags: ["Trap", "Electronic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 22,
    slug: "2020",
    title: "GHOSTRANCE - 2020 (Official Video) - Hip Hop / Gangster",
    description:
      "A GHOSTRANCE hip hop release shaped around the mood and imagery of 2020.",
    youtubeVideoId: "d3YMJFiIQMo",
    youtubeUrl: youtubeWatchUrl("d3YMJFiIQMo"),
    genreTags: ["Hip Hop", "Gangster"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 23,
    slug: "dreamer",
    title: "GHOSTRANCE - Dreamer (Official Video) - Trance",
    description:
      "A trance-focused GHOSTRANCE release built around the idea that everyone is a dreamer.",
    youtubeVideoId: "eRe6YyPnfAQ",
    youtubeUrl: youtubeWatchUrl("eRe6YyPnfAQ"),
    genreTags: ["Trance", "Electronic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 24,
    slug: "life",
    title: "GHOSTRANCE - Life (Official Video) - Dance",
    description:
      "A dance-led GHOSTRANCE release from the official Ghostrance YouTube catalogue.",
    youtubeVideoId: "Wuyv77OxNAQ",
    youtubeUrl: youtubeWatchUrl("Wuyv77OxNAQ"),
    genreTags: ["Dance", "Electronic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 25,
    slug: "music-came-first",
    title: "GHOSTRANCE - Music Came First (Official Video) - Hip Hop / Dance",
    description:
      "A chilled GHOSTRANCE release with hard beats and a melodic trance drop.",
    youtubeVideoId: "ft0JNeObLgE",
    youtubeUrl: youtubeWatchUrl("ft0JNeObLgE"),
    genreTags: ["Hip Hop", "Dance", "Trance"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 26,
    slug: "ali",
    title: "GHOSTRANCE - Ali (Official Video) - Hip Hop",
    description:
      "A hip hop GHOSTRANCE release inspired by greatness and legacy.",
    youtubeVideoId: "qUDyDWgJdrk",
    youtubeUrl: youtubeWatchUrl("qUDyDWgJdrk"),
    genreTags: ["Hip Hop"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 27,
    slug: "mya",
    title: "GHOSTRANCE - Mya (Official Video) - Hip Hop / Gangster",
    description:
      "A hard, powerful GHOSTRANCE hip hop release from the official video catalogue.",
    youtubeVideoId: "mbkFxyfHEvA",
    youtubeUrl: youtubeWatchUrl("mbkFxyfHEvA"),
    genreTags: ["Hip Hop", "Gangster"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 28,
    slug: "sally",
    title: "GHOSTRANCE - Sally (Official Video) - Drum and Bass / Hard",
    description:
      "A hard Drum and Bass GHOSTRANCE release built for dance-floor adrenaline.",
    youtubeVideoId: "LvFGQ1jIkBg",
    youtubeUrl: youtubeWatchUrl("LvFGQ1jIkBg"),
    genreTags: ["Drum and Bass", "DnB", "Hard"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 29,
    slug: "believe",
    title: "GHOSTRANCE - Believe (Official Video) - Ambient",
    description:
      "An ambient GHOSTRANCE track written to inspire belief in tomorrow.",
    youtubeVideoId: "KKDkQI0juuI",
    youtubeUrl: youtubeWatchUrl("KKDkQI0juuI"),
    genreTags: ["Ambient", "Electronic", "Cinematic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 30,
    slug: "vibes",
    title: "GHOSTRANCE - Vibes (Official Video) - Beach Party / Dance / Ambient",
    description:
      "A beach-party GHOSTRANCE release with dance, ambient, and sunset energy.",
    youtubeVideoId: "B_fKBRQh7lQ",
    youtubeUrl: youtubeWatchUrl("B_fKBRQh7lQ"),
    genreTags: ["Dance", "Ambient", "Beach Party"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 31,
    slug: "rebirth",
    title: "GHOSTRANCE - Rebirth (Official Video) - Dance",
    description:
      "The twenty first GHOSTRANCE release, presented as an official dance video.",
    youtubeVideoId: "HZq49SqubZg",
    youtubeUrl: youtubeWatchUrl("HZq49SqubZg"),
    genreTags: ["Dance", "Electronic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 32,
    slug: "love-me-2",
    title: "GHOSTRANCE - Love Me 2 (Official Video) - Hip Hop",
    description:
      "A GHOSTRANCE hip hop release with dope beats, a trippy hook, and melodic energy.",
    youtubeVideoId: "xu8S6aOYqT4",
    youtubeUrl: youtubeWatchUrl("xu8S6aOYqT4"),
    genreTags: ["Hip Hop"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 33,
    slug: "murder-murder-murder",
    title: "GHOSTRANCE - Murder Murder Murder (Official Video) - Gangster Hip Hop",
    description:
      "A gangster hip hop GHOSTRANCE release from the early official video catalogue.",
    youtubeVideoId: "GmoLkRlUi8I",
    youtubeUrl: youtubeWatchUrl("GmoLkRlUi8I"),
    genreTags: ["Hip Hop", "Gangster"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 34,
    slug: "phenomena-22",
    title: "GHOSTRANCE - Phenomena 22 (Official Video) - Ambient / Dance",
    description:
      "An ambient and dance GHOSTRANCE release with a relaxed, cinematic video mood.",
    youtubeVideoId: "vMJhP5GYl6w",
    youtubeUrl: youtubeWatchUrl("vMJhP5GYl6w"),
    genreTags: ["Ambient", "Dance", "Cinematic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 35,
    slug: "atomik",
    title: "GHOSTRANCE - Atomik (Official Video) - Indie / Dance / Soundtrack",
    description:
      "A GHOSTRANCE release combining indie, dance, and soundtrack influence.",
    youtubeVideoId: "SZb9_gn-Y_Y",
    youtubeUrl: youtubeWatchUrl("SZb9_gn-Y_Y"),
    genreTags: ["Indie", "Dance", "Soundtrack"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 36,
    slug: "30",
    title: "GHOSTRANCE - 30 (Official Video) - Dance / RnB",
    description:
      "A Soul II Soul tribute from GHOSTRANCE with dance and RnB influence.",
    youtubeVideoId: "KxUqJZcjUWY",
    youtubeUrl: youtubeWatchUrl("KxUqJZcjUWY"),
    genreTags: ["Dance", "RnB"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 37,
    slug: "england",
    title: "GHOSTRANCE - England (Official Video) - Hip Hop / Trap",
    description:
      "A five-minute GHOSTRANCE hip hop and trap release inspired by England football.",
    youtubeVideoId: "WcJhLYGGwn4",
    youtubeUrl: youtubeWatchUrl("WcJhLYGGwn4"),
    genreTags: ["Hip Hop", "Trap"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 38,
    slug: "henny-hoes",
    title: "GHOSTRANCE - Henny Hoes (Clean Version) (Official Video) - Trap / Hip Hop",
    description:
      "A clean-version GHOSTRANCE trap and hip hop release from the early official catalogue.",
    youtubeVideoId: "wi4BrgLC-Jk",
    youtubeUrl: youtubeWatchUrl("wi4BrgLC-Jk"),
    genreTags: ["Trap", "Hip Hop"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 39,
    slug: "breakbeat-master",
    title: "GHOSTRANCE - Breakbeat Master (Official Video) - Drum and Bass / Breakbeat",
    description:
      "The first official GHOSTRANCE release, combining old-school breakbeat energy with Drum and Bass.",
    youtubeVideoId: "sB7NrK1b1LQ",
    youtubeUrl: youtubeWatchUrl("sB7NrK1b1LQ"),
    genreTags: ["Drum and Bass", "Breakbeat", "Electronic"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 40,
    slug: "friday",
    title: "GHOSTRANCE - Friday (Official Video) - Trippy / Ambience / Study",
    description:
      "A long-form GHOSTRANCE ambience and study video with trippy background energy.",
    youtubeVideoId: "YTzGOZpSJFE",
    youtubeUrl: youtubeWatchUrl("YTzGOZpSJFE"),
    genreTags: ["Ambient", "Study", "Background"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 41,
    slug: "rain",
    title: "GHOSTRANCE - Rain (Official Video) - Study / Background",
    description:
      "A long-form GHOSTRANCE rain-sound video made for study, relaxation, and background listening.",
    youtubeVideoId: "rYesgPMwJkE",
    youtubeUrl: youtubeWatchUrl("rYesgPMwJkE"),
    genreTags: ["Study", "Background", "Ambient"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 42,
    slug: "thunder-and-rain",
    title: "GHOSTRANCE - Thunder and Rain (Official Video) - Study / Background",
    description:
      "A long-form GHOSTRANCE thunder-and-rain video for sleep, study, and relaxation.",
    youtubeVideoId: "w-KJJLC4bPk",
    youtubeUrl: youtubeWatchUrl("w-KJJLC4bPk"),
    genreTags: ["Study", "Background", "Ambient"],
    sourceChannel: "Ghostrance",
  },
  {
    order: 43,
    slug: "get-down",
    title: "GHOSTRANCE - Get Down",
    description:
      "A Ghostrance Topic track provided to YouTube by DistroKid.",
    youtubeVideoId: "atgULoh11D0",
    youtubeUrl: youtubeWatchUrl("atgULoh11D0"),
    genreTags: ["Electronic"],
    sourceChannel: "Ghostrance - Topic",
  },
  {
    order: 44,
    slug: "i-have-a-dream",
    title: "GHOSTRANCE - I Have a Dream",
    description:
      "A Ghostrance Topic track provided to YouTube by DistroKid.",
    youtubeVideoId: "O95Yj0noq3I",
    youtubeUrl: youtubeWatchUrl("O95Yj0noq3I"),
    genreTags: ["Electronic"],
    sourceChannel: "Ghostrance - Topic",
  },
  {
    order: 45,
    slug: "vibes-club",
    title: "GHOSTRANCE - Vibes (Club)",
    description:
      "A club version of Vibes from the Ghostrance Topic catalogue.",
    youtubeVideoId: "33XRb-1n0fQ",
    youtubeUrl: youtubeWatchUrl("33XRb-1n0fQ"),
    genreTags: ["Club", "Dance", "Ambient"],
    sourceChannel: "Ghostrance - Topic",
  },
  {
    order: 46,
    slug: "saturday",
    title: "GHOSTRANCE - Saturday",
    description:
      "A Ghostrance Topic track provided to YouTube by DistroKid.",
    youtubeVideoId: "gWfZ4-VaVUM",
    youtubeUrl: youtubeWatchUrl("gWfZ4-VaVUM"),
    genreTags: ["Electronic"],
    sourceChannel: "Ghostrance - Topic",
  },
  {
    order: 47,
    slug: "x-ta-c",
    title: "GHOSTRANCE - X Ta C",
    description:
      "A Ghostrance Topic track provided to YouTube by DistroKid.",
    youtubeVideoId: "dFt_OFxMh8g",
    youtubeUrl: youtubeWatchUrl("dFt_OFxMh8g"),
    genreTags: ["Electronic"],
    sourceChannel: "Ghostrance - Topic",
  },
  {
    order: 48,
    slug: "halloween",
    title: "GHOSTRANCE - Halloween",
    description:
      "A Ghostrance Topic track provided to YouTube by DistroKid.",
    youtubeVideoId: "Ln-yc2NLWnE",
    youtubeUrl: youtubeWatchUrl("Ln-yc2NLWnE"),
    genreTags: ["Electronic"],
    sourceChannel: "Ghostrance - Topic",
  },
  {
    order: 49,
    slug: "up-and-down",
    title: "GHOSTRANCE - Up and Down",
    description:
      "A Ghostrance Topic track provided to YouTube by DistroKid.",
    youtubeVideoId: "Ju-bRI5D_Vk",
    youtubeUrl: youtubeWatchUrl("Ju-bRI5D_Vk"),
    genreTags: ["Electronic"],
    sourceChannel: "Ghostrance - Topic",
  },
  {
    order: 50,
    slug: "kenobi",
    title: "GHOSTRANCE - Kenobi",
    description:
      "A Ghostrance Topic track provided to YouTube by DistroKid.",
    youtubeVideoId: "3iaCG_AYxGs",
    youtubeUrl: youtubeWatchUrl("3iaCG_AYxGs"),
    genreTags: ["Electronic"],
    sourceChannel: "Ghostrance - Topic",
  },
  {
    order: 51,
    slug: "tuesday",
    title: "GHOSTRANCE - Tuesday",
    description:
      "A Ghostrance Topic track provided to YouTube by DistroKid.",
    youtubeVideoId: "sf0WB--GSZo",
    youtubeUrl: youtubeWatchUrl("sf0WB--GSZo"),
    genreTags: ["Electronic"],
    sourceChannel: "Ghostrance - Topic",
  },
];

export function getTrackBySlug(slug: string) {
  return tracks.find((track) => track.slug === slug);
}

export function getRelatedTracks(slug: string, count = 3) {
  const currentTrack = getTrackBySlug(slug);

  if (!currentTrack) {
    return tracks.slice(0, count);
  }

  return tracks
    .filter((track) => track.slug !== slug)
    .map((track) => ({
      track,
      sharedTags: track.genreTags.filter((tag) =>
        currentTrack.genreTags.includes(tag),
      ).length,
    }))
    .sort((a, b) => b.sharedTags - a.sharedTags || a.track.order - b.track.order)
    .slice(0, count)
    .map(({ track }) => track);
}
