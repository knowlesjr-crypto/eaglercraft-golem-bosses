const bossRegistry = new Map();

const elementalBossTemplates = {
  fire: {
    id: 'fire',
    name: 'Inferno Titan',
    element: 'fire',
    health: 360,
    damage: 18,
    armor: 12,
    behavior: ['lava_burst', 'fire_wave', 'magma_slam', 'inferno_roar'],
    color: '#ff6b2c',
    loot: ['fire_core', 'magma_fragment', 'ashen_crown'],
    phases: [
      { name: 'summon', threshold: 100 },
      { name: 'enraged', threshold: 60 },
      { name: 'final', threshold: 25 }
    ]
  },
  water: {
    id: 'water',
    name: 'Tidebreaker',
    element: 'water',
    health: 390,
    damage: 17,
    armor: 10,
    behavior: ['tidal_wave', 'freeze_burst', 'healing_pulse', 'riptide_spin'],
    color: '#42b8ff',
    loot: ['water_core', 'wave_sigil', 'deep_tide_crest'],
    phases: [
      { name: 'summon', threshold: 100 },
      { name: 'enraged', threshold: 60 },
      { name: 'final', threshold: 25 }
    ]
  },
  earth: {
    id: 'earth',
    name: 'Granite Warden',
    element: 'earth',
    health: 440,
    damage: 20,
    armor: 18,
    behavior: ['ground_slam', 'stone_spike', 'earth_shield', 'crystal_eruption'],
    color: '#8e6a42',
    loot: ['earth_core', 'obsidian_shard', 'granite_heart'],
    phases: [
      { name: 'summon', threshold: 100 },
      { name: 'enraged', threshold: 60 },
      { name: 'final', threshold: 25 }
    ]
  },
  storm: {
    id: 'storm',
    name: 'Tempest Colossus',
    element: 'storm',
    health: 410,
    damage: 19,
    armor: 14,
    behavior: ['lightning_arc', 'thunder_dash', 'storm_field', 'tempest_burst'],
    color: '#b3f0ff',
    loot: ['storm_core', 'charged_rod', 'thunder_crown'],
    phases: [
      { name: 'summon', threshold: 100 },
      { name: 'enraged', threshold: 60 },
      { name: 'final', threshold: 25 }
    ]
  }
};

function registerBoss(definition) {
  const boss = {
    ...elementalBossTemplates[definition.element] || {},
    ...definition,
    activeAttacks: definition.behavior || ['basic_smash'],
    spawnPosition: definition.spawnPosition || { x: 0, y: 64, z: 0 },
    alive: true,
    phase: 'summon'
  };

  bossRegistry.set(definition.id, boss);
  return boss;
}

function getBossRegistry() {
  return bossRegistry;
}

function createBossArena({ x, y, z, size = 12, element = 'fire' }) {
  return {
    center: { x, y, z },
    radius: size,
    element,
    pillars: [
      { x: x + size, y: y + 2, z: z },
      { x: x - size, y: y + 2, z: z },
      { x: x, y: y + 2, z: z + size },
      { x: x, y: y + 2, z: z - size }
    ],
    name: `${element.charAt(0).toUpperCase() + element.slice(1)} Arena`,
    locked: false
  };
}

function createBossPhaseSystem(boss) {
  const phaseOrder = boss.phases || [
    { name: 'summon', threshold: 100 },
    { name: 'enraged', threshold: 60 },
    { name: 'final', threshold: 25 }
  ];

  return {
    bossId: boss.id,
    phaseOrder,
    setPhase(currentHealth, maxHealth) {
      const ratio = (currentHealth / maxHealth) * 100;

      if (ratio <= 25) return 'final';
      if (ratio <= 60) return 'enraged';
      return 'summon';
    }
  };
}

function summonGolemBoss(id, options = {}) {
  const bossTemplate = bossRegistry.get(id) || elementalBossTemplates[id];

  if (!bossTemplate) {
    throw new Error(`Unknown boss id: ${id}`);
  }

  const boss = {
    ...bossTemplate,
    ...options,
    health: options.health ?? bossTemplate.health,
    maxHealth: options.maxHealth ?? bossTemplate.health,
    alive: true,
    activePhase: 'summon',
    attackCooldown: 0,
    loot: options.loot ?? bossTemplate.loot ?? []
  };

  boss.phaseSystem = createBossPhaseSystem(boss);
  return boss;
}

function getBossAttackPattern(element) {
  const patterns = {
    fire: ['lava_burst', 'magma_slam', 'fire_wave'],
    water: ['tidal_wave', 'ice_pulse', 'healing_pulse'],
    earth: ['ground_slam', 'stone_spike', 'earth_shield'],
    storm: ['lightning_arc', 'thunder_dash', 'storm_field']
  };

  return patterns[element] || ['basic_smash'];
}

function applyElementalEffect(target, element) {
  const effects = {
    fire: { burn: 5, damage: 4 },
    water: { slow: 20, heal: 6 },
    earth: { stun: 1.5, armor: 12 },
    storm: { shock: 3, knockback: 2 }
  };

  return {
    target,
    element,
    effect: effects[element] || { damage: 1 }
  };
}

export {
  registerBoss,
  getBossRegistry,
  createBossArena,
  createBossPhaseSystem,
  summonGolemBoss,
  getBossAttackPattern,
  applyElementalEffect,
  elementalBossTemplates
};

for (const key of Object.keys(elementalBossTemplates)) {
  if (!bossRegistry.has(key)) {
    registerBoss(elementalBossTemplates[key]);
  }
}

export default {
  registerBoss,
  getBossRegistry,
  createBossArena,
  createBossPhaseSystem,
  summonGolemBoss,
  getBossAttackPattern,
  applyElementalEffect,
  elementalBossTemplates
};
