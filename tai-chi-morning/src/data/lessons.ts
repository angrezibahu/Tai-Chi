export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  youtubeVideoId: string;
  movesIntroduced: string[];
  keyPrinciples: string[];
  breathingFocus: string;
  dayWisdom: { text: string; source: string };
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Opening the Door',
    description:
      'Begin your tai chi journey with the fundamental standing posture (Wuji) and Opening Form. Learn to root your feet, align your spine, and calm the mind through natural breathing.',
    duration: '8 min',
    youtubeVideoId: 'jO0Y8e9phHg',
    movesIntroduced: ['Wuji Standing', 'Opening Form'],
    keyPrinciples: [
      'Stand with feet shoulder-width apart',
      'Soften the knees slightly',
      'Relax the shoulders downward',
      'Tongue rests gently on the roof of the mouth',
    ],
    breathingFocus:
      'Natural abdominal breathing — inhale through the nose allowing the belly to expand gently, exhale and let it fall.',
    dayWisdom: {
      text: 'A journey of a thousand miles begins with a single step.',
      source: 'Lao Tzu, Tao Te Ching, Chapter 64',
    },
  },
  {
    id: 2,
    title: 'Sinking the Roots',
    description:
      'Deepen your Wuji standing practice and learn weight shifting from side to side. Feel the connection between your feet and the earth.',
    duration: '10 min',
    youtubeVideoId: 'C0oAPs8fKgI',
    movesIntroduced: ['Weight Shifting', 'Empty Step'],
    keyPrinciples: [
      'Feel the weight transfer through the feet',
      'Keep the hips level during shifting',
      'Maintain upright posture throughout',
    ],
    breathingFocus:
      'Coordinate breath with weight shifts — inhale as you center, exhale as you settle into one side.',
    dayWisdom: {
      text: 'The root is in the feet, issued through the legs, directed by the waist, and expressed through the fingers.',
      source: 'Tai Chi Classics',
    },
  },
  {
    id: 3,
    title: 'Lifting Water',
    description:
      'Learn the graceful arm movements of Raising Hands (Lifting Water). Your arms float upward like they are rising through water, guided by breath.',
    duration: '10 min',
    youtubeVideoId: 'f0MG2FCLUsw',
    movesIntroduced: ['Raising Hands', 'Lowering Hands'],
    keyPrinciples: [
      'Arms rise and fall with the breath',
      'Elbows stay slightly bent and heavy',
      'Wrists are relaxed — "beautiful lady\'s wrist"',
    ],
    breathingFocus:
      'Inhale as the arms float up to shoulder height, exhale as they sink back down. Let the breath lead the movement.',
    dayWisdom: {
      text: 'The highest good is like water. Water gives life to the ten thousand things and does not strive.',
      source: 'Lao Tzu, Tao Te Ching, Chapter 8',
    },
  },
  {
    id: 4,
    title: 'Parting the Clouds',
    description:
      'Introduce the foundational Ward Off (Peng) energy, the first of the Eight Gates. Ward Off is an expansive, buoyant energy like holding a large ball.',
    duration: '12 min',
    youtubeVideoId: '96aWAOVNtCw',
    movesIntroduced: ['Ward Off (Peng)', 'Bow Stance'],
    keyPrinciples: [
      'Peng energy is round and expansive',
      'Front knee does not extend past the toes',
      'Weight distribution: 70% front, 30% back',
    ],
    breathingFocus:
      'Breathe naturally while holding Ward Off. Feel the expansion on the inhale, maintain structure on the exhale.',
    dayWisdom: {
      text: 'The ten thousand things carry yin and embrace yang. They achieve harmony by combining these forces.',
      source: 'Lao Tzu, Tao Te Ching, Chapter 42',
    },
  },
  {
    id: 5,
    title: 'Rolling the Ball',
    description:
      'Learn Roll Back (Lu), the yielding complement to Ward Off. Practice the interplay of Peng and Lu — advancing and retreating like ocean waves.',
    duration: '12 min',
    youtubeVideoId: '4sWKwtnNxpM',
    movesIntroduced: ['Roll Back (Lu)'],
    keyPrinciples: [
      'Lu redirects force rather than resisting it',
      'Turn from the waist, not the shoulders',
      'Shift weight back as you roll back',
    ],
    breathingFocus:
      'Inhale with Ward Off (expanding), exhale with Roll Back (yielding). The breath and body move as one.',
    dayWisdom: {
      text: 'Nothing in the world is as soft and yielding as water. Yet for dissolving the hard and inflexible, nothing can surpass it.',
      source: 'Lao Tzu, Tao Te Ching, Chapter 78',
    },
  },
  {
    id: 6,
    title: 'Pressing Forward',
    description:
      'Add Press (Ji) and Push (An) to complete the four primary energies. These four together form the core of tai chi practice and the Grasp Sparrow\'s Tail sequence.',
    duration: '14 min',
    youtubeVideoId: 'PLACEHOLDER_6',
    movesIntroduced: ['Press (Ji)', 'Push (An)'],
    keyPrinciples: [
      'Ji is focused and directed forward',
      'An pushes with the whole body, not just the arms',
      'All four energies flow in a continuous cycle',
    ],
    breathingFocus:
      'Exhale on Press and Push. Feel the breath support each expression of energy from the dantian.',
    dayWisdom: {
      text: 'From the most soft and yielding, one arrives at the most powerful and unyielding.',
      source: 'Wang Zongyue, Treatise on Tai Chi Chuan',
    },
  },
  {
    id: 7,
    title: "Grasp the Sparrow's Tail",
    description:
      'Combine Ward Off, Roll Back, Press, and Push into the flowing Grasp Sparrow\'s Tail sequence — the most important sequence in Yang-style tai chi.',
    duration: '15 min',
    youtubeVideoId: 'PLACEHOLDER_7',
    movesIntroduced: ["Grasp Sparrow's Tail (full sequence)"],
    keyPrinciples: [
      'Each transition is smooth and continuous',
      'The waist leads every change of direction',
      'No breaks or pauses between the four energies',
    ],
    breathingFocus:
      'Let the breath find its own natural rhythm within the sequence. Do not force the breath to match every movement.',
    dayWisdom: {
      text: 'Tai chi is like a great river rolling on unceasingly. Each movement is linked to the next without interruption.',
      source: 'Chen Weiming, The Art of Tai Chi Chuan',
    },
  },
  {
    id: 8,
    title: 'The Single Whip',
    description:
      'Learn Single Whip (Dan Bian), one of the most iconic tai chi postures. Practice the hook hand and the wide, open stance that stretches across the body.',
    duration: '12 min',
    youtubeVideoId: 'PLACEHOLDER_8',
    movesIntroduced: ['Single Whip', 'Hook Hand'],
    keyPrinciples: [
      'The hook hand fingers gather gently at a point',
      'Open the chest as you extend into Single Whip',
      'Weight settles into the front leg',
    ],
    breathingFocus:
      'Exhale as you extend into the full Single Whip posture. Feel the breath open the chest and back.',
    dayWisdom: {
      text: 'Stand like a balanced scale and rotate actively like a wheel.',
      source: 'Tai Chi Classics',
    },
  },
  {
    id: 9,
    title: 'White Crane Spreads Wings',
    description:
      'A beautiful, meditative posture that develops balance and differentiation between substantial and insubstantial. One hand rises like a wing while the other sinks.',
    duration: '10 min',
    youtubeVideoId: 'PLACEHOLDER_9',
    movesIntroduced: ['White Crane Spreads Wings'],
    keyPrinciples: [
      'All weight settles into one leg',
      'Upper hand rises, lower hand sinks — yin and yang',
      'Spine stays vertical, crown lifts upward',
    ],
    breathingFocus:
      'Inhale as the arms separate and rise. Feel lightness at the crown of the head. Exhale and maintain the posture.',
    dayWisdom: {
      text: 'Distinguish clearly between substantial and insubstantial. If you shift your weight to the right, then the right is substantial and the left is insubstantial.',
      source: 'Yang Chengfu, Ten Important Points of Tai Chi Chuan',
    },
  },
  {
    id: 10,
    title: 'Brush Knee and Twist Step',
    description:
      'A walking technique that teaches coordinated stepping with hand techniques. The lead hand brushes past the knee while the rear hand pushes forward.',
    duration: '14 min',
    youtubeVideoId: 'PLACEHOLDER_10',
    movesIntroduced: ['Brush Knee and Twist Step'],
    keyPrinciples: [
      'Step first, then shift weight forward',
      'The pushing hand and stepping foot arrive together',
      'The waist turns to power both the brush and the push',
    ],
    breathingFocus:
      'Inhale during the preparatory turn, exhale as you step and push forward. Match the length of the breath to the movement.',
    dayWisdom: {
      text: 'The body should be upright and comfortable, able to support the eight directions. Move like a cat walking.',
      source: 'Cheng Man-ch\'ing, Thirteen Chapters on Tai Chi Chuan',
    },
  },
  {
    id: 11,
    title: 'Playing the Lute',
    description:
      'A compact posture of stillness amid the flowing form. Both hands frame an imaginary lute as you settle into an empty stance.',
    duration: '10 min',
    youtubeVideoId: 'PLACEHOLDER_11',
    movesIntroduced: ['Playing the Lute (Pi Pa)'],
    keyPrinciples: [
      'Front foot is empty — only the heel touches',
      'Hands align vertically as if holding an instrument',
      'Find stillness and centering within the form',
    ],
    breathingFocus:
      'Use this quieter moment to deepen your breath. Let each exhale bring you more deeply into the posture.',
    dayWisdom: {
      text: 'When the shoe fits, the foot is forgotten. When the belt fits, the belly is forgotten. When the heart is right, for and against are forgotten.',
      source: 'Zhuangzi, Chapter 19',
    },
  },
  {
    id: 12,
    title: 'Repulse the Monkey',
    description:
      'Learn to step backward while your hands alternate in push-and-withdraw motions. This retreat is not weakness — it is tactical yielding.',
    duration: '14 min',
    youtubeVideoId: 'PLACEHOLDER_12',
    movesIntroduced: ['Repulse Monkey (left and right)'],
    keyPrinciples: [
      'Step back with the toe first, then settle the heel',
      'Eyes follow the pushing hand',
      'Alternate hands in a rhythmic, flowing pattern',
    ],
    breathingFocus:
      'Exhale with each backward push. Inhale as you draw the hand back to prepare. Find calm in retreat.',
    dayWisdom: {
      text: 'Returning is the motion of the Tao. Yielding is the way of the Tao.',
      source: 'Lao Tzu, Tao Te Ching, Chapter 40',
    },
  },
  {
    id: 13,
    title: 'Cloud Hands',
    description:
      'One of the most meditative movements in tai chi. Your hands trace gentle circles as you step side to side, like clouds drifting across the sky.',
    duration: '14 min',
    youtubeVideoId: 'PLACEHOLDER_13',
    movesIntroduced: ['Cloud Hands (Yun Shou)'],
    keyPrinciples: [
      'Hands and waist move together as one unit',
      'Side steps are small and controlled',
      'The gaze follows the upper hand softly',
    ],
    breathingFocus:
      'Let the breath become circular like the hands. There is no sharp beginning or end — just continuous flow.',
    dayWisdom: {
      text: 'Flow with whatever may happen and let your mind be free. Stay centered by accepting whatever you are doing.',
      source: 'Zhuangzi',
    },
  },
  {
    id: 14,
    title: 'High Pat on Horse',
    description:
      'A transitional posture that teaches you to change height and energy. Rise slightly as one hand pats forward and downward.',
    duration: '10 min',
    youtubeVideoId: 'PLACEHOLDER_14',
    movesIntroduced: ['High Pat on Horse'],
    keyPrinciples: [
      'The rise is subtle — initiated from the legs',
      'Front foot empties as you rise',
      'Hand extends forward with palm facing down',
    ],
    breathingFocus:
      'Inhale as you rise, exhale as the hand extends. Feel the shift from low to high energy in the body.',
    dayWisdom: {
      text: 'The mind is the commander, the qi is the flag, and the waist is the banner.',
      source: 'Wu Yuxiang, Expositions of Insights into the Practice of the Thirteen Postures',
    },
  },
  {
    id: 15,
    title: 'Kick with Right Heel',
    description:
      'Your first kicking technique. Root deeply into the standing leg, gather your balance, and extend a slow, controlled heel kick.',
    duration: '12 min',
    youtubeVideoId: 'PLACEHOLDER_15',
    movesIntroduced: ['Separate Hands', 'Kick with Right Heel'],
    keyPrinciples: [
      'Root deeply into the standing leg before kicking',
      'The kick is slow and controlled — never forced',
      'Hands separate outward as the foot extends',
    ],
    breathingFocus:
      'Inhale to gather and balance. Exhale slowly as you extend the kick. The breath stabilizes you.',
    dayWisdom: {
      text: 'In every movement the entire body should be light and agile, and all of its parts connected like a string of pearls.',
      source: 'Wu Yuxiang, Thirteen Postures',
    },
  },
  {
    id: 16,
    title: 'Snake Creeps Down',
    description:
      'Drop low into a deep crouch on one leg while the other extends. This move develops leg strength, flexibility, and the courage to go low.',
    duration: '12 min',
    youtubeVideoId: 'PLACEHOLDER_16',
    movesIntroduced: ['Snake Creeps Down'],
    keyPrinciples: [
      'Lower as far as is comfortable — do not force depth',
      'Keep the back upright even in the low posture',
      'Extended leg stays straight with foot flat on the floor',
    ],
    breathingFocus:
      'Exhale as you descend. Use the breath to relax deeper into the posture rather than muscling through it.',
    dayWisdom: {
      text: 'The stiff and unbending is the disciple of death. The soft and yielding is the disciple of life.',
      source: 'Lao Tzu, Tao Te Ching, Chapter 76',
    },
  },
  {
    id: 17,
    title: 'Golden Rooster Stands on One Leg',
    description:
      'Rise directly from Snake Creeps Down into a one-legged balance. This dramatic transition teaches you to move between extremes with grace.',
    duration: '10 min',
    youtubeVideoId: 'PLACEHOLDER_17',
    movesIntroduced: ['Golden Rooster Stands on One Leg'],
    keyPrinciples: [
      'Rise from the low posture by pressing through the standing leg',
      'Raised knee lifts to hip height',
      'Opposite hand rises with the knee',
    ],
    breathingFocus:
      'Inhale powerfully as you rise from Snake Creeps Down. Feel the breath lift you upward from the dantian.',
    dayWisdom: {
      text: 'Sink the qi to the dantian. Do not raise it, for then the breath will be obstructed and the body will float upward, losing its root.',
      source: 'Yang Chengfu, Ten Important Points of Tai Chi Chuan',
    },
  },
  {
    id: 18,
    title: 'Fair Lady Works the Shuttles',
    description:
      'A four-corner technique where you turn to each diagonal direction with a combined block and strike. Develops spatial awareness and turning skill.',
    duration: '15 min',
    youtubeVideoId: 'PLACEHOLDER_18',
    movesIntroduced: ['Fair Lady Works the Shuttles'],
    keyPrinciples: [
      'Turn to each of the four diagonal corners',
      'One hand blocks overhead while the other pushes forward',
      'Each turn is led by the waist',
    ],
    breathingFocus:
      'Inhale during the turn and preparation. Exhale on the block and push. Find rhythm across all four corners.',
    dayWisdom: {
      text: 'A force of four ounces deflects a thousand pounds. It is evident that this is not accomplished through strength.',
      source: 'Wang Zongyue, Treatise on Tai Chi Chuan',
    },
  },
  {
    id: 19,
    title: 'Cross Hands',
    description:
      'A centering posture where the hands cross at the wrists in front of the chest. Practice drawing all your energy inward and finding stillness.',
    duration: '10 min',
    youtubeVideoId: 'PLACEHOLDER_19',
    movesIntroduced: ['Cross Hands'],
    keyPrinciples: [
      'Feet come together to parallel, shoulder-width stance',
      'Hands cross at the wrists — right hand outside',
      'Return to center and find the stillness of Wuji',
    ],
    breathingFocus:
      'Deep, slow breaths as you settle into Cross Hands. Let the breath gather your energy to the dantian.',
    dayWisdom: {
      text: 'The practice of internal martial arts begins with wuji, proceeds to tai chi, and returns to wuji. This is the way of emptiness and fullness.',
      source: 'Sun Lutang, A Study of Tai Chi Chuan',
    },
  },
  {
    id: 20,
    title: 'Closing Form — Returning to Stillness',
    description:
      'The Closing Form brings you full circle. Lower the hands, release all tension, and stand in Wuji once more. The form ends where it began — in quiet stillness.',
    duration: '10 min',
    youtubeVideoId: 'PLACEHOLDER_20',
    movesIntroduced: ['Closing Form'],
    keyPrinciples: [
      'Lower the hands slowly along the centerline',
      'Feel the qi settle to the dantian',
      'Stand in Wuji for a few breaths before finishing',
      'Carry this stillness into your day',
    ],
    breathingFocus:
      'Three deep breaths to close. With each exhale, release tension from the body. On the final exhale, simply stand and be.',
    dayWisdom: {
      text: 'When I let go of what I am, I become what I might be.',
      source: 'Lao Tzu, Tao Te Ching',
    },
  },
];
