# fromPolandWithDev-exercise

## Project Overview

This project is a Jekyll-based static site that uses Alpine.js, Swiper, and Tailwind CSS for a dynamic product page experience. It features product variant selection, image galleries, and recommendations.

---

## Prerequisites

- [Git](https://git-scm.com/)
- [Node.js & npm](https://nodejs.org/) (for asset building, if needed)
- [Ruby](https://www.ruby-lang.org/en/) (for Jekyll)
- [Bundler](https://bundler.io/) (`gem install bundler`)
- [Jekyll](https://jekyllrb.com/) (`gem install jekyll`)
- [Laragon](https://laragon.org/) (optional, for Windows local development)

---

## Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd fromPolandWithDev-exercise
   ```

2. **Install Ruby dependencies:**
   ```sh
   bundle install
   ```

3. **Install Node dependencies (if you use npm for assets):**
   ```sh
   npm install
   ```

---

## Running the Project Locally

### Using Jekyll

1. **Serve the site:**
   ```sh
   bundle exec jekyll serve
   ```
   By default, the site will be available at [http://localhost:4000](http://localhost:4000).

2. **If using Laragon:**
   - Place the project folder in your Laragon `www` directory.
   - Start Laragon and use its quick app links or configure a virtual host as needed.

---

## Development Notes

- **Assets:**  
  Tailwind CSS and Swiper are loaded via CDN. If you want to build assets locally, configure your build tools as needed.

- **Product Data:**  
  Product variants and images are managed via JSON and YAML files in the project.

- **Dynamic Features:**  
  Alpine.js is used for interactivity (variant selection, modals, etc.).

---
