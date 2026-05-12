import type { NavLink, SocialLink, Pillar, Association, Event, PastEvent, SingleRelease } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', href: 'https://instagram.com/throneway', icon: 'instagram' },
  { platform: 'Facebook', href: 'https://www.facebook.com/throneway/', icon: 'facebook' },
  { platform: 'YouTube', href: 'https://www.youtube.com/channel/UCZ7w2jvFd9_Is-R7dMQiJZw', icon: 'youtube' },
  { platform: 'Spotify', href: 'https://open.spotify.com/artist/52QRkOMy637alursB1Qybs?si=iBNtDDbTSYmS4m5ehM9UZQ', icon: 'spotify' },
  { platform: 'TikTok', href: 'https://tiktok.com/@throneway', icon: 'tiktok' },
]

export const RUNNING_SINGLE: SingleRelease = {
  title: 'Running',
  artist: 'Throneway',
  spotifyUrl: 'https://open.spotify.com/artist/52QRkOMy637alursB1Qybs?si=iBNtDDbTSYmS4m5ehM9UZQ',
  spotifyEmbedUrl: 'https://open.spotify.com/embed/track/22oYDCJVaABHguR5BaJPwJ',
  description: 'Our debut single — a declaration of pursuit, surrender, and faith in motion.',
}

export const DONATE_URL = 'https://jycanada.breezechms.com/give/online?fund_id=2286215'

export const SIX_PILLARS: Pillar[] = [
  {
    title: 'Prayer',
    icon: 'hands-praying',
    description: "Daily quiet time with the Lord that leads to an experience of loving friendship with Jesus and fosters a joyful attitude to life.",
  },
  {
    title: 'Word of God',
    icon: 'book-open',
    description: "A regular time for meditative reading of Sacred Scripture, shaping our lives according to God's will.",
  },
  {
    title: 'Sacraments',
    icon: 'cross',
    description: 'Participating fully in the Sacramental life of the Catholic Church, living a life of grace and holiness.',
  },
  {
    title: 'Fellowship',
    icon: 'users',
    description: 'Deep spiritual friendships and sustained life of communion through mutual support and encouragement.',
  },
  {
    title: 'Evangelisation',
    icon: 'megaphone',
    description: 'Sharing Jesus with others in genuine, simple, and innovative ways every day.',
  },
  {
    title: 'Option for the Poor',
    icon: 'heart',
    description: 'Standing by, supporting, and helping the poor, the sidelined, and the marginalized.',
  },
]

export const ASSOCIATIONS: Association[] = [
  { name: 'Jesus Youth Canada', logo: '/logos/JY Logo.png', href: 'https://jycanada.ca' },
  { name: 'Archdiocese of Toronto', logo: '/logos/arch-toronto.png', href: 'https://www.archtoronto.org' },
  { name: 'Vocations Toronto', logo: '/logos/vocations-toronto.png', href: 'https://www.vocationstoronto.ca' },
  { name: 'Office of Catholic Youth', logo: '/logos/ocy.png', href: 'https://www.archtoronto.org/en/outreach/offices/catholic-youth/' },
]

export const UPCOMING_EVENTS: Event[] = [
  {
    title: 'Throneway Heights',
    subtitle: 'Catholic Young Adult Gathering',
    description:
      'An immersive evening of praise & worship, faith talks, prayer, and community — designed for young adults who want more in their faith life. Expect live music, amazing speakers, and the kind of fellowship that lasts.',
    location: "St. Gregory's Parish, Etobicoke",
    schedule: 'Every other Friday, 7–9 PM',
    ageGroup: '18+',
    tags: ['Worship', 'Music', 'Fellowship', 'Prayer'],
  },
]

export const PAST_EVENTS: PastEvent[] = [
  {
    title: 'Throneway \'22: Renewal',
    year: '2022',
    description: 'A conference bringing together hundreds across Toronto for worship, art, and community — the event where Throneway began.',
    photos: ['/photos/Image.360.JPG', '/photos/Image.380.JPG'],
    location: 'Noble Hall, Oakville, Ontario',
    time: '2 PM – 7 PM',
    scripture: { text: 'Iron sharpens iron, and one man sharpens another.', reference: 'Proverbs 27:17' },
    program: ['Art Showcase', 'Holy Mass', 'Keynote', 'Talk Show', 'Adoration', 'Concert Worship', 'Fellowship'],
    speakers: [
      { name: 'Fr. Kevin Belgrave', role: 'Keynote — Director, Institute of Theology at St. Augustine\'s Seminary' },
      { name: 'Steadfast Worship', role: 'Concert Worship — Young adults band from the Archdiocese of Toronto' },
      { name: 'Fr. Peter Bisonnette', role: 'Panel Host — "Youth Revival" discussion on young adult ministry' },
    ],
  },
]
