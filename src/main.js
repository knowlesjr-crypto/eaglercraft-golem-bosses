import { getBossRegistry, registerBoss, spawnBoss, createBossArena } from './elementalGolemBosses.js';

const mod = {
  id: 'eaglercraft_elemental_golems',
  name: 'Elemental Golem Bosses',
  version: '0.1.0',

  init() {
    const bossRegistry = getBossRegistry();

    if (!bossRegistry || bossRegistry.size === 0) {
      registerBoss({
        id: 'fire',
        name: 'Inferno Titan',
        element: 'fire',
        health: 320,
        damage: 16,
        behavior: ['lava_burst', 'fire_wave', 'magma_slam'],
        color: '#ff6b2c'
      });

      registerBoss({
        id: 'water',
        name: 'Tidebreaker',
        element: 'water',
        health: 340,
        damage: 15,
        behavior: ['tidal_wave', 'freeze_burst', 'healing_pulse'],
        color: '#42b8ff'
      });

      registerBoss({
        id: 'earth',
        name: 'Granite Warden',
        element: 'earth',
        health: 380,
        damage: 18,
        behavior: ['ground_slam', 'stone_spike', 'earth_shield'],
        color: '#8e6a42'
      });

      registerBoss({
        id: 'storm',
        name: 'Tempest Colossus',
        element: 'storm',
        health: 360,
        damage: 17,
        behavior: ['lightning_arc', 'thunder_dash', 'storm_field'],
        color: '#b3f0ff'
      });
    }

    console.log('[Elemental Golems] Registered boss loadout:', [...bossRegistry.keys()]);

    if (typeof world !== 'undefined') {
      world.events?.on('entitySpawn', (entity) => {
        if (entity && entity.type === 'golem') {
          entity.elemental = entity.elemental || 'earth';
        }
      });
    }
  },

  onWorldLoad() {
    const arena = createBossArena({
      x: 0,
      y: 64,
      z: 0,
      size: 12,
      element: 'storm'
    });

    console.log('[Elemental Golems] Arena initialized:', arena);
  },

  onClientTick() {
    // add custom boss-trigger checks here
  }
};

if (typeof window !== 'undefined') {
  window.EaglercraftMod = window.EaglercraftMod || {};
  window.EaglercraftMod.elementalGolems = mod;
}

export default mod;

if (typeof globalThis !== 'undefined') {
  globalThis.ElementalGolemMod = mod;
  globalThis.ElementalGolemMod.init();
}

console.log('[Elemental Golems] Mod bootstrap loaded.');
