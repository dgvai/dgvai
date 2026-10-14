# dgvai.github.io

Source for [dgvai.github.io](https://dgvai.github.io), the academic website of Jalal Uddin.

It is a plain Jekyll site that GitHub Pages builds directly from the `main` branch. There is no build workflow, theme gem or JavaScript framework.

## Editing content

Almost everything lives in `_data/`:

| File                    | What it holds                                                  |
| ----------------------- | -------------------------------------------------------------- |
| `profile.yml`           | Name, title, affiliation, photo, research interests, links     |
| `news.yml`              | News items on the home page (newest first)                     |
| `publications.yml`      | Papers; `selected: true` puts one on the home page             |
| `projects.yml`          | Research projects                                              |
| `software.yml`          | Open-source apps and Laravel packages                          |
| `cv.yml`                | Education, experience, service, awards, skills for the CV page |

The home page bio is in `index.html`. Styles are in `assets/css/main.css`.

## Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Deployment

In the repository settings under **Pages**, set the source to **Deploy from a branch**, branch `main`, folder `/ (root)`. Every push to `main` republishes the site.

Icons are from [Font Awesome Free](https://fontawesome.com) (CC BY 4.0).
