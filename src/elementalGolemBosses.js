const bossRegistry = new Map();

function registerBoss(definition) {
  const boss = {
    ...definition,
    phases: [
      { name: 'summon', threshold: 100 },
      { name: 'enraged', threshold: 60 },
      { name: 'final', threshold: 25 }
    ],
    activeAttacks: definition.behavior || ['basic_smash'],
    spawnPosition: definition.spawnPosition || { x: 0, y: 64, z: 0 }
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
    name: `${element.charAt(0).toUpperCase() + element.slice(1)} Arena`
  };
}

function spawnBoss(id, options = {}) {
  const boss = bossRegistry.get(id);

  if (!boss) {
    throw new Error(`Unknown boss id: ${id}`);
  }

  const spawnedBoss = {
    ...boss,
    ...options,
    health: options.health ?? boss.health,
    alive: true,
    activePhase: 'summon',
    attackCooldown: 0
  };

  return spawnedBoss;
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
  spawnBoss,
  getBossAttackPattern,
  applyElementalEffect
};
