export const WORDS = [
  // NATURE (자연) - 12 words
  {id:'rain_cloud', word:'구름', syllables:['구','름'], category:'자연', sceneId:'rain', emoji:'☁️', hint:'하늘에 떠 있는 것', hotspot:{x:0.55,y:0.18,r:0.12}},
  {id:'rain_raindrop', word:'빗방울', syllables:['빗','방','울'], category:'자연', sceneId:'rain', emoji:'💧', hint:'비가 올 때 떨어져요', hotspot:{x:0.75,y:0.52,r:0.09}},
  {id:'forest_tree', word:'나무', syllables:['나','무'], category:'자연', sceneId:'forest', emoji:'🌳', hint:'숲에 있는 큰 식물', hotspot:{x:0.30,y:0.45,r:0.15}},
  {id:'forest_dew', word:'이슬', syllables:['이','슬'], category:'자연', sceneId:'forest', emoji:'💦', hint:'아침에 풀잎에 맺혀요', hotspot:{x:0.68,y:0.78,r:0.08}},
  {id:'sea_sea', word:'바다', syllables:['바','다'], category:'자연', sceneId:'sea', emoji:'🌊', hint:'넓고 파란 물', hotspot:{x:0.50,y:0.60,r:0.15}},
  {id:'sea_wave', word:'파도', syllables:['파','도'], category:'자연', sceneId:'sea', emoji:'🌊', hint:'바다에서 일렁여요', hotspot:{x:0.30,y:0.70,r:0.10}},
  {id:'sea_rainbow', word:'무지개', syllables:['무','지','개'], category:'자연', sceneId:'sea', emoji:'🌈', hint:'비 온 뒤 하늘에 떠요', hotspot:{x:0.50,y:0.20,r:0.14}},
  {id:'meadow_wind', word:'바람', syllables:['바','람'], category:'자연', sceneId:'meadow', emoji:'💨', hint:'눈에 안 보이지만 느껴요', hotspot:{x:0.20,y:0.30,r:0.10}},
  {id:'sky_sky', word:'하늘', syllables:['하','늘'], category:'자연', sceneId:'sky', emoji:'⛅', hint:'위를 올려다봐요', hotspot:{x:0.50,y:0.20,r:0.15}},
  {id:'sky_sunset', word:'노을', syllables:['노','을'], category:'자연', sceneId:'sky', emoji:'🌅', hint:'저녁 하늘이 빨개요', hotspot:{x:0.75,y:0.35,r:0.12}},
  {id:'sky_shower', word:'소나기', syllables:['소','나','기'], category:'자연', sceneId:'sky', emoji:'🌦️', hint:'갑자기 왔다 가는 비', hotspot:{x:0.30,y:0.55,r:0.10}},
  {id:'winter_snowflake', word:'눈송이', syllables:['눈','송','이'], category:'자연', sceneId:'winter', emoji:'❄️', hint:'하늘에서 내리는 하얀 것', hotspot:{x:0.50,y:0.30,r:0.10}},

  // ANIMALS (동물) - 12 words
  {id:'farm_puppy', word:'강아지', syllables:['강','아','지'], category:'동물', sceneId:'farm', emoji:'🐶', hint:'멍멍 짖어요', hotspot:{x:0.65,y:0.70,r:0.10}},
  {id:'morning_cat', word:'고양이', syllables:['고','양','이'], category:'동물', sceneId:'morning', emoji:'🐱', hint:'야옹 울어요', hotspot:{x:0.70,y:0.65,r:0.10}},
  {id:'meadow_butterfly', word:'나비', syllables:['나','비'], category:'동물', sceneId:'meadow', emoji:'🦋', hint:'꽃에서 꽃으로 날아요', hotspot:{x:0.65,y:0.35,r:0.09}},
  {id:'forest_butterfly2', word:'다람쥐', syllables:['다','람','쥐'], category:'동물', sceneId:'forest', emoji:'🐿️', hint:'도토리를 모아요', hotspot:{x:0.55,y:0.68,r:0.09}},
  {id:'pond_frog', word:'개구리', syllables:['개','구','리'], category:'동물', sceneId:'pond', emoji:'🐸', hint:'개굴개굴 울어요', hotspot:{x:0.35,y:0.72,r:0.10}},
  {id:'meadow_dragonfly', word:'잠자리', syllables:['잠','자','리'], category:'동물', sceneId:'meadow', emoji:'🦗', hint:'하늘을 날아다녀요', hotspot:{x:0.50,y:0.25,r:0.08}},
  {id:'pond_sparrow', word:'참새', syllables:['참','새'], category:'동물', sceneId:'pond', emoji:'🐦', hint:'짹짹 울어요', hotspot:{x:0.70,y:0.25,r:0.09}},
  {id:'pond_turtle', word:'거북이', syllables:['거','북','이'], category:'동물', sceneId:'pond', emoji:'🐢', hint:'등껍데기를 지고 다녀요', hotspot:{x:0.55,y:0.78,r:0.10}},
  {id:'farm_chick', word:'병아리', syllables:['병','아','리'], category:'동물', sceneId:'farm', emoji:'🐥', hint:'삐약삐약 귀여워요', hotspot:{x:0.30,y:0.75,r:0.09}},
  {id:'farm_calf', word:'송아지', syllables:['송','아','지'], category:'동물', sceneId:'farm', emoji:'🐄', hint:'음매 하고 울어요', hotspot:{x:0.50,y:0.60,r:0.12}},
  {id:'farm_foal', word:'망아지', syllables:['망','아','지'], category:'동물', sceneId:'farm', emoji:'🐴', hint:'히힝 뛰어다녀요', hotspot:{x:0.25,y:0.55,r:0.12}},
  {id:'forest_rabbit', word:'토끼', syllables:['토','끼'], category:'동물', sceneId:'forest', emoji:'🐰', hint:'귀가 길고 깡충깡충', hotspot:{x:0.75,y:0.72,r:0.09}},

  // DAILY OBJECTS (일상) - 12 words
  {id:'rain_umbrella', word:'우산', syllables:['우','산'], category:'일상', sceneId:'rain', emoji:'☂️', hint:'비 올 때 쓰는 것', hotspot:{x:0.30,y:0.68,r:0.10}},
  {id:'playground_shoes', word:'신발', syllables:['신','발'], category:'일상', sceneId:'playground', emoji:'👟', hint:'발에 신어요', hotspot:{x:0.65,y:0.80,r:0.09}},
  {id:'playground_swing', word:'그네', syllables:['그','네'], category:'일상', sceneId:'playground', emoji:'🌟', hint:'앞뒤로 흔들어요', hotspot:{x:0.25,y:0.50,r:0.10}},
  {id:'playground_seesaw', word:'시소', syllables:['시','소'], category:'일상', sceneId:'playground', emoji:'⚖️', hint:'올라갔다 내려가요', hotspot:{x:0.55,y:0.65,r:0.11}},
  {id:'playground_sand', word:'모래', syllables:['모','래'], category:'일상', sceneId:'playground', emoji:'🏖️', hint:'손으로 쥐면 술술 빠져요', hotspot:{x:0.75,y:0.82,r:0.10}},
  {id:'morning_bag', word:'가방', syllables:['가','방'], category:'일상', sceneId:'morning', emoji:'🎒', hint:'학교 갈 때 메요', hotspot:{x:0.35,y:0.55,r:0.10}},
  {id:'morning_blanket', word:'이불', syllables:['이','불'], category:'일상', sceneId:'morning', emoji:'🛏️', hint:'잘 때 덮어요', hotspot:{x:0.55,y:0.45,r:0.12}},
  {id:'morning_pillow', word:'베개', syllables:['베','개'], category:'일상', sceneId:'morning', emoji:'😴', hint:'머리를 베고 자요', hotspot:{x:0.40,y:0.30,r:0.09}},
  {id:'classroom_eraser', word:'지우개', syllables:['지','우','개'], category:'일상', sceneId:'classroom', emoji:'📝', hint:'틀린 글자를 지워요', hotspot:{x:0.60,y:0.55,r:0.08}},
  {id:'kitchen_spoon', word:'숟가락', syllables:['숟','가','락'], category:'일상', sceneId:'kitchen', emoji:'🥄', hint:'국을 떠먹어요', hotspot:{x:0.35,y:0.60,r:0.09}},
  {id:'kitchen_pot', word:'냄비', syllables:['냄','비'], category:'일상', sceneId:'kitchen', emoji:'🍲', hint:'음식을 끓여요', hotspot:{x:0.55,y:0.50,r:0.12}},
  {id:'kitchen_basket', word:'바구니', syllables:['바','구','니'], category:'일상', sceneId:'kitchen', emoji:'🧺', hint:'물건을 담아요', hotspot:{x:0.70,y:0.70,r:0.10}},
  {id:'playground_balloon', word:'풍선', syllables:['풍','선'], category:'일상', sceneId:'playground', emoji:'🎈', hint:'바람을 넣으면 커져요', hotspot:{x:0.40,y:0.30,r:0.10}},
  {id:'classroom_pencil_case', word:'필통', syllables:['필','통'], category:'일상', sceneId:'classroom', emoji:'✏️', hint:'연필을 넣어요', hotspot:{x:0.35,y:0.45,r:0.09}},
  {id:'kitchen_bowl', word:'그릇', syllables:['그','릇'], category:'일상', sceneId:'kitchen', emoji:'🍽️', hint:'음식을 담는 것', hotspot:{x:0.50,y:0.65,r:0.09}},

  // ACTIONS (행동) - 8 words
  {id:'action_run', word:'달리다', syllables:['달','리','다'], category:'행동', sceneId:'actions', emoji:'🏃', hint:'빠르게 두 발로 움직여요', hotspot:{x:0.25,y:0.50,r:0.10}},
  {id:'action_eat', word:'먹다', syllables:['먹','다'], category:'행동', sceneId:'actions', emoji:'🍽️', hint:'입으로 음식을 넣어요', hotspot:{x:0.45,y:0.45,r:0.10}},
  {id:'action_sleep', word:'자다', syllables:['자','다'], category:'행동', sceneId:'actions', emoji:'😴', hint:'눈을 감고 쉬어요', hotspot:{x:0.65,y:0.55,r:0.10}},
  {id:'action_jump', word:'뛰다', syllables:['뛰','다'], category:'행동', sceneId:'actions', emoji:'🤸', hint:'높이 발을 올려요', hotspot:{x:0.30,y:0.35,r:0.09}},
  {id:'action_laugh', word:'웃다', syllables:['웃','다'], category:'행동', sceneId:'actions', emoji:'😄', hint:'기분 좋을 때 해요', hotspot:{x:0.55,y:0.30,r:0.09}},
  {id:'action_cry', word:'울다', syllables:['울','다'], category:'행동', sceneId:'actions', emoji:'😢', hint:'슬플 때 눈물이 나요', hotspot:{x:0.75,y:0.40,r:0.09}},
  {id:'action_draw', word:'그리다', syllables:['그','리','다'], category:'행동', sceneId:'actions', emoji:'✏️', hint:'종이에 모양을 만들어요', hotspot:{x:0.40,y:0.65,r:0.09}},
  {id:'action_play', word:'놀다', syllables:['놀','다'], category:'행동', sceneId:'actions', emoji:'🎮', hint:'즐겁게 시간을 보내요', hotspot:{x:0.65,y:0.70,r:0.10}},

  // EMOTIONS (감정) - 6 words
  {id:'emotion_joy', word:'기쁨', syllables:['기','쁨'], category:'감정', sceneId:'emotions', emoji:'😊', hint:'행복하고 신날 때', hotspot:{x:0.20,y:0.40,r:0.10}},
  {id:'emotion_sadness', word:'슬픔', syllables:['슬','픔'], category:'감정', sceneId:'emotions', emoji:'😢', hint:'눈물이 날 때의 느낌', hotspot:{x:0.40,y:0.45,r:0.10}},
  {id:'emotion_fear', word:'무서움', syllables:['무','서','움'], category:'감정', sceneId:'emotions', emoji:'😨', hint:'무서울 때의 느낌', hotspot:{x:0.60,y:0.40,r:0.10}},
  {id:'emotion_flutter', word:'설렘', syllables:['설','렘'], category:'감정', sceneId:'emotions', emoji:'🤩', hint:'두근두근 기대될 때', hotspot:{x:0.75,y:0.55,r:0.09}},
  {id:'emotion_longing', word:'그리움', syllables:['그','리','움'], category:'감정', sceneId:'emotions', emoji:'🥺', hint:'보고 싶을 때의 느낌', hotspot:{x:0.35,y:0.65,r:0.09}},
  {id:'emotion_surprise', word:'놀라움', syllables:['놀','라','움'], category:'감정', sceneId:'emotions', emoji:'😲', hint:'깜짝 놀랐을 때', hotspot:{x:0.55,y:0.65,r:0.09}},
];

export const WORDS_BY_ID = Object.fromEntries(WORDS.map(w => [w.id, w]));
export const WORDS_BY_SCENE = WORDS.reduce((acc, w) => {
  if (!acc[w.sceneId]) acc[w.sceneId] = [];
  acc[w.sceneId].push(w);
  return acc;
}, {});
