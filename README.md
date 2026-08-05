# Polis Experiments

Ethereum social experiments using [Polis](https://compdemocracy.org/Polis/) to find common ground on contentious topics.

Forked from [dionysuzx/polis-experiments](https://github.com/dionysuzx/polis-experiments) and retargeted at the Ethereum issuance-curve debate.

## Experiments

| Experiment | Status | Polis Link |
|---|---|---|
| [The Issuance Curve](experiments/issuance-curve/) | Active | [Join](https://pu5ha.github.io/polis-experiments/issuance-curve/) |

The Issuance Curve conversation is seeded from the [EIP-8363 "Tapered Issuance & Burn"](https://ethereum-magicians.org/t/eip-8363-tapered-issuance-burn/29263) debate on Ethereum Magicians — see [`experiments/issuance-curve/SEED_STATEMENTS.md`](experiments/issuance-curve/SEED_STATEMENTS.md) for the curated seed statements and their sourcing.

## Adding a New Experiment

1. Copy an existing experiment folder
2. Update `src/config.ts` with your topic, description, and Polis conversation ID
3. Replace static assets (diagram, og-image, favicon)
4. Add a build step in `.github/workflows/deploy.yml`

## Development

```bash
cd experiments/issuance-curve
bun install
bun dev
```

## Deployment

Deployed automatically to GitHub Pages on push to `main`.

## License

MIT License
