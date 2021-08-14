import type { Member } from '../types';

export const members: Member[] = [
  {
    name: 'Siraj Chokshi',
    position: 'Co-Founder & Lead',
    image: '/headshots/siraj.jpg',
    website: 'https://sirajchokshi.com',
    linkedin: 'https://linkedin.com/in/sirajchokshi',
    github: 'https://github.com/sirajchokshi',
  },
  {
    name: 'Davis Keene',
    position: 'Co-Founder & Lead',
    image: '/headshots/davis.jpg',
    website: 'https://daviskeene.com',
    linkedin: 'https://linkedin.com/in/daviskeene',
    github: 'https://github.com/daviskeene',
  },
  {
    name: 'Gene Wang',
    position: 'Software Architect',
    image: '/headshots/gene.jpg',
    linkedin: 'https://linkedin.com/in/genewang0',
    github: 'https://github.com/gwang0136',
  },
  {
    name: 'Neeraj Aggarwal',
    position: 'Technical Advisor',
    image: '/headshots/neeraj.jpg',
    website: 'https://neeraj.lol',
    linkedin: 'https://linkedin.com/in/neeraj-aggarwal',
    github: 'https://github.com/n3a9',
    isAlumni: true,
  },
  {
    name: 'Jonathan Shi',
    position: 'Software Developer',
    image: '/headshots/jonathan.jpg',
    linkedin: 'https://www.linkedin.com/in/jonathan-shi-5219b3180/',
    github: 'https://github.com/jonathanshi568',
  },
  {
    name: 'Leo Galindo',
    position: 'Software Developer',
    image: '/headshots/leo.jpg',
    website: 'http://http://leonardogalindo.me/',
    linkedin: 'https://www.linkedin.com/in/leonardo-galindo-frias/',
    github: 'https://github.com/Leundai',
  },
  {
    name: 'Mahi Kolla',
    position: 'Software Developer',
    image: '/headshots/mahi.jpg',
    linkedin: 'https://www.linkedin.com/in/mahi-kolla-39422b139/',
    github: 'https://github.com/24mahik',
  },
  {
    name: 'Praneeth Guduguntla',
    position: 'Software Developer',
    image: '/headshots/praneeth.jpg',
    website: 'http://praneethguduguntla.com',
    linkedin: 'https://www.linkedin.com/in/praneeth-g-277128133/',
    github: 'https://github.com/pguduguntla',
  },
];

// .map((m) => ({
//   ...m,
//   isActive: m.isActive ?? true,
//   linkedin: (m.linkedin as url) ?? undefined,
//   github: (m.github as url) ?? undefined,
//   website: (m.website as url) ?? undefined,
// }));
