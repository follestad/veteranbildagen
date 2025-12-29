
Use the following command to download the website:

wget --recursive --domains veteranbildagen.no --no-parent --page-requisites --html-extension --convert-links veteranbildagen.no

Then I want you to convert from previous WordPress site to a static Astro site.
Your job is to create a full astro page with same content, same design, same images as the original WordPress site.

- The astro file should be set up with the domain https://veteranbildagen.no in config.
- Images MUST always be added to src/assets/images, except favicons, which can live in public folder. 
- Images must be imported with Astro Image component. 
- Astro must use typescript in strict mode. 
- Styles should be added to src/styles/global.scss and imported to layout file.
- Whenever repeating content is needed, use Astro components.
- Add a proper gitignore file for the astro project.

The page consist of a "bilder" page which is a gallery of images. Use astro content collection to list images in the gallery.
