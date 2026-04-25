export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Skribble Lite',
    description:
      'A multiplayer drawing and guessing game inspired by Skribbl.io, where players can create private rooms, invite friends, and compete by sketching words while others try to guess them in real time. Designed for fun, fast, and interactive gameplay with a smooth user experience.',
    logo: '/logos/Skribbl.io.svg',
    link: 'https://github.com/chinmoy-2004/skribble_lite',
    slug: 'skribble-lite',
  },
  {
    title: 'DeadSwitch',
    description:
      'A secure digital legacy platform that automatically shares important messages, credentials, or documents with trusted contacts if the user becomes inactive for a defined period. Built with custom authentication, MongoDB, and Redis-based expiration handling for reliable trigger-based delivery.',
    logo: '/logos/deadswitch.png',
    link: 'https://github.com/chinmoy-2004/dead-switch',
    slug: 'deadswitch',
  },
  {
    title: 'VibeTalk',
    description:
      'An AI-powered real-time communication platform focused on seamless voice interactions, smart conversations, and engaging user experiences. It enables natural communication flows with intelligent response handling and personalized user interaction.',
    logo: '/logos/vibetalk.webp',
    link: 'https://github.com/chinmoy-2004/fullstack-vibetalk',
    slug: 'vibetalk',
  },
  {
    title: 'CALL.E',
    description:
      'An AI-powered bulk calling agent designed for customer outreach, surveys, appointment booking, and feedback collection. It supports thousands of simultaneous calls using real-time WebSocket architecture and serves industries like healthcare, banking, education, and marketing.',
    logo: '/logos/calle.png',
    link: 'https://github.com/bisal2003/Call_Agent_AI',
    slug: 'call-e',
  },
];