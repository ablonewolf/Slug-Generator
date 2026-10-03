# Slug Generator

A simple browser-based tool for converting title text into a clean slug.

The app allows users to enter a title, choose a separator style, optionally remove numeric-only words, generate a slug,
and copy the result to the clipboard.

## Features

- Generate slugs from title text
- Choose between dash-separated and underscore-separated output
- Optionally remove numeric-only words
- Copy the generated slug to the clipboard
- Clear the current input/output
- Reset the form to its initial state
- Runs entirely in the browser

## Tech Stack

- HTML
- CSS
- JavaScript
- Bootstrap 4 CDN

## Project Structure

```text
.
├── index.html
├── script.js
├── style.css
└── README.md
```

## Getting Started

This project does not require installation or a build step.

### Run Locally

Clone the repository:

```bash
git clone <repository-url>
```

Open the project directory:

```bash
cd <repository-name>
```

Then open `index.html` in your browser.

Alternatively, you can run a local static server:

```bash
npx serve .
```

Then open the local URL shown in your terminal.

## Usage

1. Enter title text in the input field.
2. Choose a separator:
    - Dash: `-`
    - Underscore: `_`
3. Optionally enable **Without Digits** to remove numeric-only words.
4. Click **Generate Slug**.
5. Click **Copy the Text** to copy the generated slug.

## Example

Input:

```text
My First Blog Post 2026
```

Dash-separated output:

```text
My-First-Blog-Post-2026
```

Dash-separated output with digits removed:

```text
My-First-Blog-Post
```

Underscore-separated output:

```text
My_First_Blog_Post_2026
```

## Notes

- The app is frontend-only and does not require a backend.
- Bootstrap is loaded from a CDN, so an internet connection is needed for Bootstrap styling.
- If Bootstrap is unavailable, the core slug generation functionality still works, but styling may differ.

## License

No license has been specified for this project.