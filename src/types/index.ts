export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: string
  href: string
  icon: string
}

export interface Pillar {
  title: string
  icon: string
  description: string
}

export interface Association {
  name: string
  logo: string
  href: string
}

export interface Event {
  title: string
  subtitle: string
  description: string
  location: string
  schedule: string
  ageGroup: string
  poster?: string
  tags: string[]
}

export interface PastEvent {
  title: string
  year: string
  description: string
  photos: string[]
  location?: string
  time?: string
  scripture?: { text: string; reference: string }
  program?: string[]
  speakers?: { name: string; role: string }[]
}

export interface SingleRelease {
  title: string
  artist: string
  spotifyUrl: string
  spotifyEmbedUrl: string
  description: string
}
