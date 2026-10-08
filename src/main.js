import { getBossRegistry, registerBoss, summonGolemBoss, createBossArena, getBossAttackPattern, applyElementalEffect } from './elementalGolemBosses.js';
import { createBossRitual, activateBossRitual } from './rituals.js';

const mod = {
  id: 'eaglercraft_elemental_golems',
  name: 'Elemental Golem Bosses',
  version: '0.2.0',

  init() {
    const registry = getBossRegistry();

    if (!registry || registry.size === 0) {
      registerBoss({
        id: 'fire',
        name: 'Inferno Titan',
        title: 'The Furnace Colossus',
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
      });

      registerBoss({
        id: 'water',
        name: 'Tidebreaker',
        title: 'The Abyssal Sentinel',
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
      });

      registerBoss({
        id: 'earth',
        name: 'Granite Warden',
        title: 'The Mountain Guardian',
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
      });

      registerBoss({
        id: 'storm',
        name: 'Tempest Colossus',
        title: 'The Skybreaker',
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
      });
    }

    console.log('[Elemental Golems] Boss registry ready:', [...registry.keys()]);

    if (typeof world !== 'undefined') {
      world.events?.on('entitySpawn', (entity) => {
        if (entity && entity.type === 'golem') {
          entity.elemental = entity.elemental || 'earth';
          entity.bossTier = entity.bossTier || 'normal';
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

    const ritual = createBossRitual({
      element: 'storm',
      x: arena.center.x,
      y: arena.center.y,
      z: arena.center.z
    });

    console.log('[Elemental Golems] Boss arena loaded:', arena);
    console.log('[Elemental Golems] Ritual prepared:', ritual);
  },

  onClientTick() {
    // Hook for boss-raid checks or world triggers.
  },

  summonBoss(id, options = {}) {
    const boss = summonGolemBoss(id, options);
    console.log('[Elemental Golems] Summoned boss:', boss);
    return boss;
  },

  triggerRitual(element, options = {}) {
    const ritual = createBossRitual({ element, ...options });
    return activateBossRitual(ritual);
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

console.log('[Elemental Golems] Advanced boss mod bootstrap loaded.');

export {
  getBossRegistry,
  registerBoss,
  summonGolemBoss,
  createBossArena,
  getBossAttackPattern,
  applyElementalEffect
};
