export interface Move {
  id: string;
  name: string;
  chineseName: string;
  category: 'stance' | 'hand' | 'kick' | 'combined';
  description: string;
  introducedInLesson: number;
  tips: string[];
}

export const moves: Move[] = [
  {
    id: 'wuji-standing',
    name: 'Wuji Standing',
    chineseName: '无极桩',
    category: 'stance',
    description:
      'The primordial standing posture. Feet shoulder-width apart, knees softly bent, arms at your sides, spine tall. The foundation of all tai chi.',
    introducedInLesson: 1,
    tips: [
      'Imagine a thread gently pulling the crown of your head upward',
      'Let the shoulders drop away from the ears',
      'Soften the belly and breathe naturally',
    ],
  },
  {
    id: 'opening-form',
    name: 'Opening Form',
    chineseName: '起势',
    category: 'hand',
    description:
      'Arms float up to shoulder height and gently press back down. The opening sets the tone — calm, slow, and intentional.',
    introducedInLesson: 1,
    tips: [
      'Arms rise as if floating through water',
      'Keep the wrists relaxed throughout',
      'Exhale as the hands press downward',
    ],
  },
  {
    id: 'weight-shifting',
    name: 'Weight Shifting',
    chineseName: '重心转移',
    category: 'stance',
    description:
      'Transferring weight from one leg to the other while maintaining an upright posture. The basis of all tai chi stepping.',
    introducedInLesson: 2,
    tips: [
      'Feel the weight pour like water from one foot to the other',
      'Keep the hips level — do not sway',
      'Move slowly enough to stop at any point',
    ],
  },
  {
    id: 'empty-step',
    name: 'Empty Step',
    chineseName: '虚步',
    category: 'stance',
    description:
      'A step where one foot bears no weight — only the toe or heel lightly touches the ground. Used in many transitions.',
    introducedInLesson: 2,
    tips: [
      'All weight stays on the standing leg',
      'The empty foot should be able to lift freely at any time',
      'Maintain balance through the center of the standing foot',
    ],
  },
  {
    id: 'raising-hands',
    name: 'Raising Hands',
    chineseName: '提手上势',
    category: 'hand',
    description:
      'Both hands rise to shoulder height with palms facing down, then sink back. A fundamental arm exercise and part of many forms.',
    introducedInLesson: 3,
    tips: [
      'Elbows remain slightly lower than the wrists',
      'Imagine holding a balloon between your arms',
      'Let the breath initiate the movement',
    ],
  },
  {
    id: 'ward-off',
    name: 'Ward Off (Peng)',
    chineseName: '掤',
    category: 'combined',
    description:
      'An expansive, buoyant energy expressed through a rounded arm position. The first and most fundamental of the Eight Gates.',
    introducedInLesson: 4,
    tips: [
      'Maintain a round shape as if holding a large ball',
      'Peng energy comes from the ground through the legs',
      'Do not lift the shoulder of the warding arm',
    ],
  },
  {
    id: 'bow-stance',
    name: 'Bow Stance',
    chineseName: '弓步',
    category: 'stance',
    description:
      'The primary forward stance in tai chi. Front knee bends over the foot while the back leg remains straight but not locked.',
    introducedInLesson: 4,
    tips: [
      'Front knee tracks over the center of the foot',
      'Back heel stays firmly on the ground',
      'Weight distribution is approximately 70/30 front to back',
    ],
  },
  {
    id: 'roll-back',
    name: 'Roll Back (Lu)',
    chineseName: '捋',
    category: 'combined',
    description:
      'A yielding, redirecting energy. The body turns and the weight shifts back, leading incoming force past you.',
    introducedInLesson: 5,
    tips: [
      'Turn from the waist, not the arms',
      'Think of guiding rather than pulling',
      'The energy goes diagonally backward',
    ],
  },
  {
    id: 'press',
    name: 'Press (Ji)',
    chineseName: '挤',
    category: 'combined',
    description:
      'A focused, forward-directed energy. One hand presses against the wrist of the other, concentrating force into a small area.',
    introducedInLesson: 6,
    tips: [
      'Power comes from the back leg pressing into the ground',
      'Keep both hands connected — one supports the other',
      'Press forward and slightly upward',
    ],
  },
  {
    id: 'push',
    name: 'Push (An)',
    chineseName: '按',
    category: 'combined',
    description:
      'A downward-then-forward pushing energy using both palms. The whole body participates — not just the arms.',
    introducedInLesson: 6,
    tips: [
      'Sit back first, then push forward with the weight shift',
      'Palms face forward at the end of the push',
      'The push comes from the ground up through the body',
    ],
  },
  {
    id: 'grasp-sparrows-tail',
    name: "Grasp Sparrow's Tail",
    chineseName: '揽雀尾',
    category: 'combined',
    description:
      'The most important sequence in Yang-style tai chi, combining Ward Off, Roll Back, Press, and Push in a continuous flow.',
    introducedInLesson: 7,
    tips: [
      'Practice each component separately before combining',
      'The waist leads every transition',
      'There should be no stops or pauses in the sequence',
    ],
  },
  {
    id: 'single-whip',
    name: 'Single Whip',
    chineseName: '单鞭',
    category: 'combined',
    description:
      'One of the most recognizable tai chi postures. One hand forms a hook while the other extends in a wide, open posture.',
    introducedInLesson: 8,
    tips: [
      'The hook hand fingers gather lightly at the tips',
      'Extend through both arms equally',
      'The chest opens naturally — do not force it',
    ],
  },
  {
    id: 'hook-hand',
    name: 'Hook Hand',
    chineseName: '勾手',
    category: 'hand',
    description:
      'All five fingertips gather together and point downward, forming a beak-like shape. Used in Single Whip and other postures.',
    introducedInLesson: 8,
    tips: [
      'Fingertips touch lightly — no tension',
      'The wrist bends naturally, not sharply',
      'Keep the shoulder relaxed and dropped',
    ],
  },
  {
    id: 'white-crane-spreads-wings',
    name: 'White Crane Spreads Wings',
    chineseName: '白鹤亮翅',
    category: 'combined',
    description:
      'A graceful posture of differentiation — one hand rises while the other sinks, balancing on a single weighted leg.',
    introducedInLesson: 9,
    tips: [
      'All weight settles into the back leg',
      'Upper hand rises to temple height, palm facing out',
      'Lower hand sinks to hip height, palm facing down',
    ],
  },
  {
    id: 'brush-knee-twist-step',
    name: 'Brush Knee and Twist Step',
    chineseName: '搂膝拗步',
    category: 'combined',
    description:
      'A walking technique where the lead hand brushes past the knee while the rear hand pushes forward in coordination with a step.',
    introducedInLesson: 10,
    tips: [
      'Step first with an empty foot, then shift weight',
      'The brush and push arrive at the same moment',
      'Repeat on alternating sides for flowing practice',
    ],
  },
  {
    id: 'playing-the-lute',
    name: 'Playing the Lute',
    chineseName: '手挥琵琶',
    category: 'hand',
    description:
      'Hands frame an imaginary lute in front of the body. A quiet, transitional posture of stillness and centering.',
    introducedInLesson: 11,
    tips: [
      'Front foot is empty — heel only',
      'Hands align vertically as if holding strings',
      'Use this moment to recenter and breathe',
    ],
  },
  {
    id: 'repulse-monkey',
    name: 'Repulse Monkey',
    chineseName: '倒撵猴',
    category: 'combined',
    description:
      'A retreating sequence where you step backward while alternating push-and-withdraw hand movements. Strategic retreat, not weakness.',
    introducedInLesson: 12,
    tips: [
      'Step back with the toe first',
      'Eyes follow the pushing hand',
      'Keep the rhythm smooth and continuous',
    ],
  },
  {
    id: 'cloud-hands',
    name: 'Cloud Hands',
    chineseName: '云手',
    category: 'combined',
    description:
      'Hands trace gentle circles in front of the body while stepping side to side. One of the most meditative movements in all of tai chi.',
    introducedInLesson: 13,
    tips: [
      'Hands and waist turn together as one unit',
      'Side steps are small — feet come close but do not cross',
      'Let the gaze softly follow the upper hand',
    ],
  },
  {
    id: 'high-pat-on-horse',
    name: 'High Pat on Horse',
    chineseName: '高探马',
    category: 'combined',
    description:
      'Rise slightly from a lower stance as one hand extends forward with the palm facing down. A transitional posture of subtle energy change.',
    introducedInLesson: 14,
    tips: [
      'The rise comes from the legs, not the torso',
      'Front foot empties as you rise',
      'Hand extends naturally — do not reach',
    ],
  },
  {
    id: 'kick-right-heel',
    name: 'Kick with Right Heel',
    chineseName: '右蹬脚',
    category: 'kick',
    description:
      'A slow, controlled heel kick. Root deeply into the standing leg, gather your balance, then extend the kicking foot.',
    introducedInLesson: 15,
    tips: [
      'Root first — the kick comes from stability',
      'Kick slowly; speed is not the goal',
      'Hands separate outward as the foot extends',
    ],
  },
  {
    id: 'separate-hands',
    name: 'Separate Hands',
    chineseName: '分手',
    category: 'hand',
    description:
      'Hands cross at the wrists then separate outward, opening the chest. Often used as preparation for kicks.',
    introducedInLesson: 15,
    tips: [
      'Cross the wrists in front of the chest first',
      'Separate with a gentle outward arc',
      'Coordinate the separation with the leg movement',
    ],
  },
  {
    id: 'snake-creeps-down',
    name: 'Snake Creeps Down',
    chineseName: '蛇身下势',
    category: 'combined',
    description:
      'Drop into a deep crouch on one leg while the other extends sideways. Develops strength, flexibility, and humility.',
    introducedInLesson: 16,
    tips: [
      'Only go as low as is comfortable for your knees',
      'Keep the back as upright as possible',
      'Extended leg stays straight, foot flat on the floor',
    ],
  },
  {
    id: 'golden-rooster',
    name: 'Golden Rooster Stands on One Leg',
    chineseName: '金鸡独立',
    category: 'combined',
    description:
      'Rise from a low posture to balance on one leg with the opposite knee raised. A dramatic transition requiring strength and balance.',
    introducedInLesson: 17,
    tips: [
      'Press through the standing leg to rise',
      'Raised knee lifts to approximately hip height',
      'The hand on the same side as the raised knee also rises',
    ],
  },
  {
    id: 'fair-lady-shuttles',
    name: 'Fair Lady Works the Shuttles',
    chineseName: '玉女穿梭',
    category: 'combined',
    description:
      'A four-corner technique with turns to each diagonal, combining an overhead block with a forward push at each corner.',
    introducedInLesson: 18,
    tips: [
      'Turn to each diagonal corner distinctly',
      'One hand blocks overhead, the other pushes forward',
      'Each turn is initiated by the waist',
    ],
  },
  {
    id: 'cross-hands',
    name: 'Cross Hands',
    chineseName: '十字手',
    category: 'hand',
    description:
      'Hands cross at the wrists in front of the chest in a centering posture. Feet return to shoulder width. A moment of gathering.',
    introducedInLesson: 19,
    tips: [
      'Right hand crosses outside the left',
      'Wrists cross at chest height',
      'Return to a parallel, shoulder-width stance',
    ],
  },
  {
    id: 'closing-form',
    name: 'Closing Form',
    chineseName: '收势',
    category: 'hand',
    description:
      'The hands lower slowly along the centerline, releasing all tension. Return to Wuji standing. The form ends where it began.',
    introducedInLesson: 20,
    tips: [
      'Lower the hands as slowly as possible',
      'Feel the qi sink to the dantian with the hands',
      'Stand in stillness for three breaths before finishing',
    ],
  },
];

export function getMovesByLesson(lessonId: number): Move[] {
  return moves.filter(m => m.introducedInLesson === lessonId);
}

export function getMovesByCategory(category: Move['category']): Move[] {
  return moves.filter(m => m.category === category);
}
