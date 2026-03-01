# Blog Images Directory

This directory contains images for blog posts.

## Usage

Place your blog post images in this directory and reference them in your blog posts using:
```
/photos/blog/your-image-name.jpg
```

## Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Recommended size**: 1200x630px (optimal for social sharing)
- **File naming**: Use descriptive, kebab-case names (e.g., `react-performance.jpg`)
- **Optimization**: Compress images before uploading for better performance

## Examples

If you add an image named `fullstack-app.jpg` to this directory, reference it in BlogPage.jsx as:
```javascript
image: "/photos/blog/fullstack-app.jpg"
```

## Notes

- Not all blog posts need images
- The blog layout gracefully handles posts with and without images
- Images display in a 16:9 aspect ratio
- Missing images will show a fallback placeholder
