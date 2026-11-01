# STUDIOS Client

**STUDIOS Client — the official PRO STUDIOS launcher, built on the open-source [XMCL launcher](https://github.com/Voxelum/x-minecraft-launcher) (MIT).**

A fast, full-featured Minecraft launcher for the PRO STUDIOS community, with the server right at your fingertips.

## Features

- **Microsoft login works out of the box** — sign in with your real Minecraft account in one click.
- **Mods manager** — browse, install, and update CurseForge and Modrinth mods; Fabric, Forge, NeoForge and Quilt supported out of the box.
- **Instances & game management** — separate game folders per instance, version selection, resource pack and shader pack management, screenshots browser, and world/backup management.
- **One-click modpack installs** — install from CurseForge and Modrinth modpacks directly.
- **Server status** — see player counts before you launch.
- **Multiplayer play with friends** — built-in LAN-style online play.
- **Highly customizable appearance** — themes, backgrounds, and a full settings surface.
- **Cross-platform** — Windows, macOS, and Linux.

## Connect to PRO STUDIOS

| Edition | Server address |
| --- | --- |
| Java | `play.prostudios.ice.lol` |
| Bedrock | `play.prostudios.2bd.net` |

More at [prostudios.net](https://prostudios.net).

## Downloads

Grab the latest installer from [GitHub Releases](https://github.com/GOPROmax2288/Studios-Client/releases).

## Building from source

Requirements: Node.js >= 22.16, pnpm 11.

```bash
pnpm install
pnpm dev:renderer   # UI in dev mode
pnpm dev:main       # Electron main process in dev mode
pnpm build:all      # production build
```

## Credits & licensing

STUDIOS Client is a fork of [X Minecraft Launcher (XMCL)](https://github.com/Voxelum/x-minecraft-launcher), copyright CI010 and XMCL contributors, originally licensed under the MIT License. The original LICENSE file is preserved and applies to all upstream code; see [NOTICE](./NOTICE) for details. Thank you to the XMCL team and community for building such a great launcher.

STUDIOS Client changes to upstream code are also licensed MIT.

NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.
