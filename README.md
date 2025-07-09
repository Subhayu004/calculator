# 🧮 Stylish Calculator App

A sleek, modern calculator web app with a clean UI, built using **HTML**, **CSS**, **JavaScript**, and **Flask** as the backend.  
Supports real-time math operations, history tracking, and smart input behavior — all wrapped in a stylish glassmorphism interface.

---

## 🚀 Features

- ✅ **User-Friendly UI** – Minimalist design with soft shadows and blur effects
- ✅ **Basic Operations** – +, −, ×, ÷, %, decimals
- ✅ **Smart Input** – Supports integer and float (decimal) calculations
- ✅ **Clear and Backspace** – 
  - `C` clears the entire expression
  - `⌫` removes one digit at a time
- ✅ **Calculation History** – Tracks last 50 calculations in a beautiful modal
- ✅ **Keyboard Support** – Works like a real calculator using your keyboard
- ✅ **Responsive Design** – Works smoothly on both mobile and desktop screens

---

## 🧠 Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | `HTML`, `CSS`, `JavaScript` |
| Styling    | Custom `CSS3` with glassmorphism |
| Backend    | `Python` with `Flask` |
| Data Flow  | REST API (Flask handles evaluation) |
| Templating | `Jinja2` in Flask |

---

## 📁 Folder Structure

calculator-app/
│
├── app.py # Flask backend logic
│
├── static/ # Static files (CSS & JS)
│ ├── style.css # Calculator styles
│ └── app.js # JS logic for UI & API calls
│
├── templates/
│ └── index.html # Main HTML UI file
│
└── README.md # Project documentation

---

## ⚙️ How to Run

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/stylish-calculator.git
cd stylish-calculator

Set up virtual environment
python -m venv venv
source venv/Scripts/activate      # Git Bash or WSL
# OR
venv\Scripts\activate.bat         # CMD
# OR
source venv/bin/activate          # macOS/Linux

Install Flask
pip install flask


Run the app
python app.py

Open in browser
http://127.0.0.1:5000/

🛠 How It Works
Calculator logic runs in the browser using JavaScript.

When user presses =, the expression is sent to Flask (/calculate route).

Flask safely evaluates the expression and sends the result back.

Result is shown and also saved in the browser's history modal.

📌 Future Improvements
 Scientific operations (sin, cos, √, ^, etc.)
 Save history using localStorage or database
 Light/Dark mode toggle
 Deploy to cloud (Render/Heroku)


---

Copy this whole `README.md` and paste it into your project folder.  
VS Code will automatically show it in monospaced font in the preview window when you hit `Ctrl + Shift + V`.

Let me know if you want it styled for GitHub Pages or deployed online 🚀
