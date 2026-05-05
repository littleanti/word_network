import { WORDS_BY_SCENE } from './words.js';

export const SCENES = [
  {
    id: 'rain',
    name: '비 오는 날',
    emoji: '🌧️',
    description: '비가 촉촉이 내리는 날이에요.',
    category: '자연',
    bgEmojis: ['🌧️', '☁️', '💧', '💦', '🍃'],
    bgColors: ['#b8d4f0', '#8ab4d8'],
    bgImage: 'https://images.unsplash.com/photo-1727373217103-d64866ce6ee8?w=800&q=80',
  },
  {
    id: 'forest',
    name: '숲 속',
    emoji: '🌲',
    description: '초록 나무가 가득한 숲이에요.',
    category: '자연',
    bgEmojis: ['🌲', '🌳', '🍃', '🌱', '🍀'],
    bgColors: ['#c8e6c9', '#81c784'],
    bgImage: 'https://images.unsplash.com/photo-1753246281088-51bbd10df0f2?w=800&q=80',
  },
  {
    id: 'sea',
    name: '바닷가',
    emoji: '🌊',
    description: '넓고 파란 바다예요.',
    category: '자연',
    bgEmojis: ['🌊', '🐚', '⭐', '🐠', '🏖️'],
    bgColors: ['#b3e5fc', '#4fc3f7'],
    bgImage: 'https://images.unsplash.com/photo-1770110628704-86ba8c7b3b1c?w=800&q=80',
  },
  {
    id: 'farm',
    name: '동물 농장',
    emoji: '🐄',
    description: '동물 친구들이 사는 농장이에요.',
    category: '동물',
    bgEmojis: ['🌱', '🌻', '🏡', '🍃', '☀️'],
    bgColors: ['#fff9c4', '#f9a825'],
    bgImage: 'https://images.unsplash.com/photo-1642285777960-b4bb6c62116f?w=800&q=80',
  },
  {
    id: 'meadow',
    name: '꽃밭',
    emoji: '🌸',
    description: '예쁜 꽃이 피어 있어요.',
    category: '동물',
    bgEmojis: ['🌸', '🌺', '🌼', '🌻', '🍃'],
    bgColors: ['#fce4ec', '#f48fb1'],
    bgImage: 'https://images.unsplash.com/photo-1674668560191-536c9fd88b8d?w=800&q=80',
  },
  {
    id: 'pond',
    name: '연못가',
    emoji: '🐸',
    description: '연못 주변 친구들이에요.',
    category: '동물',
    bgEmojis: ['💧', '🍃', '🌸', '🐟', '🌊'],
    bgColors: ['#e0f7fa', '#4dd0e1'],
    bgImage: 'https://images.unsplash.com/photo-1688410105308-1cc193fb9a2e?w=800&q=80',
  },
  {
    id: 'morning',
    name: '아침 풍경',
    emoji: '🌅',
    description: '눈을 뜨는 아침이에요.',
    category: '일상',
    bgEmojis: ['🌅', '☀️', '⛅', '🌈', '✨'],
    bgColors: ['#fff3e0', '#ffb74d'],
    bgImage: 'https://images.unsplash.com/photo-1743309411498-a0f4f4b96b65?w=800&q=80',
  },
  {
    id: 'playground',
    name: '놀이터',
    emoji: '🎠',
    description: '신나게 노는 놀이터예요.',
    category: '일상',
    bgEmojis: ['🎠', '🎡', '⛲', '🌳', '☀️'],
    bgColors: ['#f3e5f5', '#ce93d8'],
    bgImage: 'https://images.unsplash.com/photo-1632667885254-2b7db795d58f?w=800&q=80',
  },
];

export const SCENES_BY_ID = Object.fromEntries(SCENES.map(s => [s.id, s]));

export function getSceneWords(sceneId) {
  return WORDS_BY_SCENE[sceneId] || [];
}
