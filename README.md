# Eaglercraft Elemental Golem Bosses

A stronger starter pack for an Eaglercraft-compatible boss mod featuring massive elemental golems with arena mechanics, boss phases, ritual summoning, and special loot.

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

### Tidebreaker (Water)
- Tidal waves
- Frost pulses
- Healing aura when below 40% HP
- Water control and slowdown effects

### Granite Warden (Earth)
- Ground smash
- Stone spike barrage
- Shielded armor phase
- High defense and stun pressure

### Tempest Colossus (Storm)
- Air dashes
- Lightning arcs
- Thunder pulses
- Electric knockback and mobility pressure

## Ritual summoning

The project now includes a ritual system that defines the required pattern for summoning bosses using elemental cores and a center altar. This is designed to be easy to map to custom blocks, world events, or server-side commands.

## Files

- `mod.json` — mod metadata
- `src/main.js` — mod bootstrap
- `src/elementalGolemBosses.js` — boss registry, stats, phases, loot, and arena generation
- `src/rituals.js` — summon ritual logic for boss activation

## Example usage

```js
import { summonGolemBoss } from './elementalGolemBosses.js';

const boss = summonGolemBoss('storm', {
  x: 100,
  y: 64,
  z: 100,
  difficulty: 'hard'
});

console.log('Boss spawned:', boss.name);
```

## Inspiration for your actual Eaglercraft setup

If you are integrating this into a custom client or fork of Eaglercraft, the next steps are:

1. Create custom boss entity classes in the entity layer.
2. Hook the boss registry into your entity spawner.
3. Bind the ritual objects to blocks or item interactions.
4. Add custom textures and boss bars.
5. Balance the health/damage values for your specific game version.

## Suggested next upgrades

- Add a final boss: The Worldforger or Primordial Golem
- Add custom boss music and roar samples
- Add elemental armor and weapons as drops
- Add unique achievements or titles
- Create a special arena biome

This starter kit is intentionally modular so you can expand it without replacing the whole structure.