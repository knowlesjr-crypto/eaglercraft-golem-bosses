# Eaglercraft Elemental Golem Bosses

A starter mod concept for an Eaglercraft-style Minecraft project featuring giant boss golems with elemental powers.

## Features

- Four elemental boss variants:
  - Fire Golem: lava bursts, flame projectiles, molten shockwaves
  - Water Golem: tidal waves, freezing mist, healing pulse
  - Earth Golem: stone spikes, ground slam, shielded armor phase
  - Storm Golem: lightning bolts, magnetic pulls, aerial dash
- Giant boss-sized models and arena mechanics
- Special drops and boss-summoning ritual items
- Boss phases and elemental attack patterns

## Project structure

- `mod.json` — mod metadata
- `src/main.js` — mod bootstrap and registration
- `src/elementalGolemBosses.js` — boss definitions and combat logic

## Quick start

1. Place the files in your Eaglercraft or custom mod project.
2. Ensure your loader reads `mod.json` and loads `src/main.js`.
3. Add the boss spawn items or ritual blocks in your own world generation system.
4. Spawn or trigger a boss using the `spawnBoss` helper from the mod bootstrap.

## Example boss usage

```js
import { spawnBoss } from './elementalGolemBosses.js';

spawnBoss('fire');
spawnBoss('storm');
```

## Notes

This project is intentionally built as a strong mod starter and prototype. Eaglercraft client APIs vary between forks and custom loaders, so the code is designed to be easy to adapt into your specific game environment.

## Boss concept summary

### Fire Golem
- Behavior: close-range smash, fire waves, flaming armor
- Power: high damage and burn effects

### Water Golem
- Behavior: ranged splash attacks and area control
- Power: crowd control, healing, and water bursts

### Earth Golem
- Behavior: terrain disruption and armor-heavy defense
- Power: stuns, hard shield, spike walls

### Storm Golem
- Behavior: teleport strikes, lightning arcs, ranged field damage
- Power: aggressive burst and mobility

## Future additions

- boss arena structure
- custom boss bar UI
- elemental core drops
- summon ritual blocks
- boss music and sound effects
- unique loot tables
