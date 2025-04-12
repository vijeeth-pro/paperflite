type MediaType = "audio" | "video" | "image" | "audios" | "videos" | "images";

export interface MediaItem {
  type: MediaType;
  title: string;
  url: string;
  thumbnail: string;
}

export interface MediaCollection {
  name: string;
  items: MediaItem[];
  type: MediaType;
  thumbnail: string;
}

export type MediaCollections = MediaCollection[];
