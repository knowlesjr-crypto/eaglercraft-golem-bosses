export function createBossRitual({ element = 'fire', x = 0, y = 64, z = 0 }) {
  return {
    element,
    center: { x, y, z },
    size: 8,
    requiredItems: [
      `${element}_core`,
      'golem_heart',
      'ancient_rune'
    ],
    isActive: false,
    bossId: `${element}_golem`
  };
}

export function activateBossRitual(ritual) {
  const activated = {
    ...ritual,
    isActive: true,
    completedAt: Date.now(),
    beginsSummon: true
  };

  return activated;
}

export function createRitualSequence(element) {
  return [
    `${element}_core`,
    'golem_heart',
    'ancient_rune',
    'boss_altar'
  ];
}

export default {
  createBossRitual,
  activateBossRitual,
  createRitualSequence
};
