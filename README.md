# Eaglercraft Elemental Golem Bosses

A complete starter mod for an Eaglercraft-compatible boss mod featuring massive elemental golems with arena mechanics, boss phases, ritual summoning, and special loot.

**Repository:** [https://github.com/knowlesjr-crypto/eaglercraft-golem-bosses](https://github.com/knowlesjr-crypto/eaglercraft-golem-bosses)

## Included features

- Fire, Water, Earth, and Storm golem bosses
- Boss phase states: summon, enraged, final form
- Elemental attack patterns and status effects
- Boss arena generation helper
- Ritual-based summoning system
- Loot tables and boss drops
- Startup registration logic for custom mod loaders

## Boss lineup

### Inferno Titan (Fire)
- Lava bursts
- Molten shockwaves
- Flame breath
- Burn effect on players
- **Drops:** fire_core, magma_fragment, ashen_crown
- **Health:** 360 | **Damage:** 18 | **Armor:** 12

### Tidebreaker (Water)
- Tidal waves
- Frost pulses
- Healing aura when below 40% HP
- Water control and slowdown effects
- **Drops:** water_core, wave_sigil, deep_tide_crest
- **Health:** 390 | **Damage:** 17 | **Armor:** 10

### Granite Warden (Earth)
- Ground smash
- Stone spike barrage
- Shielded armor phase
- High defense and stun pressure
- **Drops:** earth_core, obsidian_shard, granite_heart
- **Health:** 440 | **Damage:** 20 | **Armor:** 18

### Tempest Colossus (Storm)
- Air dashes
- Lightning arcs
- Thunder pulses
- Electric knockback and mobility pressure
- **Drops:** storm_core, charged_rod, thunder_crown
- **Health:** 410 | **Damage:** 19 | **Armor:** 14

## Boss phases

Each boss has three phases:

1. **Summon Phase** (100% - 60% health)
   - Standard attacks
   - Arena introduction

2. **Enraged Phase** (60% - 25% health)
   - Increased attack speed
   - Stronger elemental effects
   - More aggressive behavior

3. **Final Phase** (Below 25% health)
   - Ultimate elemental burst
   - Maximum power output
   - Last stand mechanics

## Ritual summoning

The project includes a ritual system that defines the required pattern for summoning bosses using elemental cores and a center altar. This is designed to be easy to map to custom blocks, world events, or server-side commands.

### Ritual requirements

Each boss requires:
- `{element}_core` (fire_core, water_core, earth_core, or storm_core)
- `golem_heart` (universal summoning component)
- `ancient_rune` (ritual catalyst)

### Ritual activation

Place ritual components in a circular pattern around a central altar block to summon the boss.

## Files

- `mod.json` — mod metadata
- `src/main.js` — mod bootstrap and boss initialization
- `src/elementalGolemBosses.js` — boss registry, stats, phases, loot, and arena generation
- `src/rituals.js` — summon ritual logic for boss activation

## Quick start

### Installation

1. Clone or download this repository
2. Place files in your Eaglercraft custom mod project
3. Ensure your loader reads `mod.json` and loads `src/main.js`

### Usage

```js
import { summonGolemBoss } from './elementalGolemBosses.js';

// Summon a fire golem boss
const boss = summonGolemBoss('fire', {
  x: 100,
  y: 64,
  z: 100,
  difficulty: 'hard'
});

console.log('Boss spawned:', boss.name);
```

### Triggering a ritual

```js
import { createBossRitual, activateBossRitual } from './rituals.js';

const ritual = createBossRitual({
  element: 'storm',
  x: 0,
  y: 64,
  z: 0
});

const activated = activateBossRitual(ritual);
console.log('Ritual activated:', activated);
```

## Example arena setup

```js
import { createBossArena } from './elementalGolemBosses.js';

const arena = createBossArena({
  x: 0,
  y: 64,
  z: 0,
  size: 12,
  element: 'fire'
});

console.log('Arena center:', arena.center);
console.log('Pillars:', arena.pillars);
```

## Integration guide

If you are integrating this into a custom Eaglercraft client or fork, the next steps are:

1. Create custom boss entity classes in the entity layer
2. Hook the boss registry into your entity spawner
3. Bind the ritual objects to blocks or item interactions
4. Add custom textures and boss bars
5. Balance the health/damage values for your specific game version

## Elemental effects

### Fire
- **Burn:** 5 tick duration, 4 damage per tick
- **Element color:** #ff6b2c (orange-red)

### Water
- **Slow:** 20 tick duration, movement reduction
- **Heal:** 6 HP recovery on self
- **Element color:** #42b8ff (bright blue)

### Earth
- **Stun:** 1.5 second duration
- **Armor:** +12 defense bonus
- **Element color:** #8e6a42 (brown)

### Storm
- **Shock:** 3 tick duration, electric damage
- **Knockback:** Force 2 pushback
- **Element color:** #b3f0ff (light cyan)

## Suggested future upgrades

- Add a final boss: The Worldforger or Primordial Golem
- Add custom boss music and roar samples
- Add elemental armor and weapons as drops
- Add unique achievements or titles
- Create a special arena biome
- Implement boss health bars and UI
- Add custom particle effects for elemental attacks
- Create a complete progression system

## Project structure

```
eaglercraft-golem-bosses/
├── mod.json
├── README.md
├── src/
│   ├── main.js
│   ├── elementalGolemBosses.js
│   └── rituals.js
```

## Notes

This project is intentionally built as a strong mod starter and prototype. Eaglercraft client APIs vary between forks and custom loaders, so the code is designed to be easy to adapt into your specific game environment.

The mod is modular and self-contained, making it easy to expand without replacing the whole structure.

## License

This project is open source and available for use in your Eaglercraft modifications.

---

**Repository:** [https://github.com/knowlesjr-crypto/eaglercraft-golem-bosses](https://github.com/knowlesjr-crypto/eaglercraft-golem-bosses)

