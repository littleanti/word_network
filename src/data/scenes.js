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
    bgImage: 'https://source.unsplash.com/featured/800x600/?rain,rainy&sig=1',
  },
  {
    id: 'forest',
    name: '숲 속',
    emoji: '🌲',
    description: '초록 나무가 가득한 숲이에요.',
    category: '자연',
    bgEmojis: ['🌲', '🌳', '🍃', '🌱', '🍀'],
    bgColors: ['#c8e6c9', '#81c784'],
    bgImage: 'https://source.unsplash.com/featured/800x600/?forest,trees&sig=2',
  },
  {
    id: 'sea',
    name: '바닷가',
    emoji: '🌊',
    description: '넓고 파란 바다예요.',
    category: '자연',
    bgEmojis: ['🌊', '🐚', '⭐', '🐠', '🏖️'],
    bgColors: ['#b3e5fc', '#4fc3f7'],
    bgImage: 'https://source.unsplash.com/featured/800x600/?beach,ocean&sig=3',
  },
  {
    id: 'farm',
    name: '동물 농장',
    emoji: '🐄',
    description: '동물 친구들이 사는 농장이에요.',
    category: '동물',
    bgEmojis: ['🌱', '🌻', '🏡', '🍃', '☀️'],
    bgColors: ['#fff9c4', '#f9a825'],
    bgImage: 'https://source.unsplash.com/featured/800x600/?farm,countryside&sig=4',
  },
  {
    id: 'meadow',
    name: '꽃밭',
    emoji: '🌸',
    description: '예쁜 꽃이 피어 있어요.',
    category: '동물',
    bgEmojis: ['🌸', '🌺', '🌼', '🌻', '🍃'],
    bgColors: ['#fce4ec', '#f48fb1'],
    bgImage: 'https://source.unsplash.com/featured/800x600/?flowers,meadow&sig=5',
  },
  {
    id: 'pond',
    name: '연못가',
    emoji: '🐸',
    description: '연못 주변 친구들이에요.',
    category: '동물',
    bgEmojis: ['💧', '🍃', '🌸', '🐟', '🌊'],
    bgColors: ['#e0f7fa', '#4dd0e1'],
    bgImage: 'https://source.unsplash.com/featured/800x600/?pond,lake,nature&sig=6',
  },
  {
    id: 'morning',
    name: '아침 풍경',
    emoji: '🌅',
    description: '눈을 뜨는 아침이에요.',
    category: '일상',
    bgEmojis: ['🌅', '☀️', '⛅', '🌈', '✨'],
    bgColors: ['#fff3e0', '#ffb74d'],
    bgImage: 'https://source.unsplash.com/featured/800x600/?sunrise,morning&sig=7',
  },
  {
    id: 'playground',
    name: '놀이터',
    emoji: '🎠',
    description: '신나게 노는 놀이터예요.',
    category: '일상',
    bgEmojis: ['🎠', '🎡', '⛲', '🌳', '☀️'],
    bgColors: ['#f3e5f5', '#ce93d8'],
    bgImage: 'https://source.unsplash.com/featured/800x600/?playground,park&sig=8',
  },
];

export const SCENES_BY_ID = Object.fromEntries(SCENES.map(s => [s.id, s]));

export function getSceneWords(sceneId) {
  return WORDS_BY_SCENE[sceneId] || [];
}
