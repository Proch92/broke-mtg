# Broke - MTG Format Webpage

A simple, slick, static webpage for the **Broke** Magic: The Gathering format. Designed to run on free GitHub Pages with zero backend required.

---

## 🚀 How to Run Locally

Because this is a pure static site (HTML, CSS, JS), you can view and test your changes locally using any of the options below:

### Option 1: Direct File Open (Fastest)
1. Double-click `index.html` in your file explorer, **OR**
2. Drag and drop `index.html` into any browser window (Chrome, Firefox, Edge, Safari).

### Option 2: Local HTTP Server (Recommended)
Running a local web server prevents potential browser CORS issues when loading local assets.

- **Using Python (built-in on most systems):**
  ```bash
  # Python 3
  python -m http.server 8000
  ```
  Then open your browser to `http://localhost:8000`.

- **Using Node.js / npx:**
  ```bash
  npx serve .
  ```

- **Using VS Code / Zed Extension:**
  - In VS Code, install the **Live Server** extension and click **"Go Live"**.

---

## 🛠️ Customizing the Page

- **Format Description & Banlist:** Edit `index.html`.
- **Premade Decks:** Add/edit deck objects in `script.js` in the `exampleDecks` array:
  ```javascript
  {
      name: "Deck Name",
      colors: ["R", "G"],
      archetype: "Aggro",
      author: "Player Name",
      url: "https://moxfield.com/decks/..."
  }
  ```
- **Styling:** Tweak colors, fonts, and spacing in `styles.css`.

---

## 🌐 Deploying to GitHub Pages

1. Push this repository to GitHub.
2. Go to your repository **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder, then click **Save**.
5. Your site will be live in a few minutes at `https://<your-username>.github.io/<repo-name>/`.
