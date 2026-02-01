# Pb.OS Terminal Portfolio - Shaping Notes

## Problem Statement

José Chumbo needs a portfolio website that stands out from typical developer portfolios. The site should showcase personality while demonstrating technical ability.

## Solution: Retro Terminal Aesthetic

A CRT terminal-themed site branded as "Pb.OS" (Lead Operating System, playing on José's surname "Chumbo" which means "lead" in Portuguese).

## Key Decisions

### Visual Style
- **Green phosphor CRT** - Classic hacker/terminal aesthetic
- **Weyland-Yutani inspiration** - Clean corporate terminal from Alien franchise
- **Not full CLI** - Uses terminal visual style but with clickable UI elements

### Technical Choices
- **Vite + React** - Fast development, modern tooling
- **Tailwind CSS v4** - Rapid styling with new CSS-first config
- **TypeScript** - Type safety for maintainability
- **Cloudflare Pages** - Free, fast, global CDN

### UX Decisions
- **Boot sequence** - Creates immersion, but skippable
- **Keyboard + mouse** - Accessible to all users
- **Two main sections** - Keep it simple: profile and social links
- **Dithered images** - Reinforces CRT aesthetic, technically interesting

### Scope Boundaries
- No actual CLI commands or text input
- No complex routing (just tab switching)
- No backend or database
- Mobile-friendly but desktop-optimized

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Effects hurt performance | Use CSS transforms, will-change; test on low-end devices |
| Accessibility concerns | Maintain semantic HTML, keyboard nav, sufficient contrast |
| Boot sequence annoys users | Skip on any keypress; consider localStorage to skip on return visits |
| Dithering too slow | Pre-generate if needed; optimize algorithm |

## Open Questions (Resolved)

1. ~~Profile photo source?~~ → Use frontend-examples/Jose Chumbo profile.png
2. ~~Logo source?~~ → Convert frontend-examples/logo.jpg to ASCII
3. ~~Exact social links?~~ → Use placeholders, user will provide actual URLs
