# Blog Images Directory

This directory stores blog header images used by the blog cards on `/blog`.

## Current expected files

The current blog data in `src/components/BlogPage.jsx` expects these two header images:

- `accenture-slp-header.png`
- `kohls-ets-header.png`

These image files do not need to exist yet. The UI already falls back to a placeholder state when an image is missing.

## How to create new blog headers

Use a 16:9 cover image, ideally `1200x675` or larger, then export as PNG, JPG, or WebP.

Suggested prompt/input for an AI image workflow:

- Create a professional blog header image for a personal career reflection post.
- Keep the composition wide and cinematic with clear empty space for overlaid text.
- Avoid embedded text in the image.
- Use corporate/professional visual cues that match the post topic.
- Prefer clean lighting, subtle depth, and portfolio-friendly colors.

## Post-specific direction

### `accenture-slp-header.png`

Theme: leadership, mentorship, consulting, early-career growth.

Possible visual direction: modern office setting, collaborative team energy, polished corporate atmosphere, subtle purple accents.

### `kohls-ets-header.png`

Theme: engineering interview experience, retail tech, systems thinking, professional growth.

Possible visual direction: modern technology workspace, commerce/retail signals, laptop/dashboard surfaces, calm blue neutrals.

## How to wire a new header image

Place the file in this folder and point the `image` field in `src/components/BlogPage.jsx` to:

```text
/photos/blog/<file-name>
```

## Notes

- The card layout uses a 16:9 header area.
- Missing images intentionally render a placeholder fallback for now.
- Keep filenames lowercase and kebab-case.
