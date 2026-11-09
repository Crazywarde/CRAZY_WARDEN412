# CRAZY_WARDEN412 — 3D Portfolio

Game Developer · Game Designer · Creative Programmer  
*Turning ideas into playable worlds through code and creativity.*

An interactive 3D room with a retro computer. Click the monitor to open **WardenOS**, which holds my About, Journey, Projects and Contact pages, plus a few retro games.

## Editing your info

The monitor shows a retro desktop ("WardenOS") that lives in `inner-site/`.

- **Pages on the monitor:** `inner-site/src/components/showcase/` (Home, About, Experience = Journey, Projects, Contact, and `projects/Games.tsx`, `Programs.tsx`, `Web.tsx`)
- **After changing the OS site, run:** `npm run build:os` (rebuilds it and copies it into `static/os/`)
- **Name/title typed on the overlay:** `src/Application/UI/components/InfoOverlay.tsx`
- **Boot screen text:** `src/Application/UI/components/LoadingScreen.tsx`
- **Page title / meta tags:** `src/index.html`

## Run it

```bash
npm i
npm run dev      # local dev server
npm run build    # production build into /public
npm start        # serve the build with express
```

## Credits

Based on the open-source [portfolio-website](https://github.com/henryjeff/portfolio-website) and [portfolio-inner-site](https://github.com/henryjeff/portfolio-inner-site) by Henry Heffernan (MIT license, see `LICENSE.md`). The 3D room, models, textures and the OS look are from those projects.
