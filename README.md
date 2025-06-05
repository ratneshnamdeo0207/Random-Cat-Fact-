# 🐱 Random Cat Fact Generator

This is a fun and simple frontend project that fetches and displays a **random cat fact** along with a **random cat image** using two public APIs.

## 📸 Screenshots

### 💻 Desktop View
![Mobile View](Screenshot%20(350).png)

![Desktop View](Screenshot%20(351).png)

## 🛠️ Features

- Click a button to fetch:
  - A **random cat fact** from [catfact.ninja](https://catfact.ninja/fact)
  - A **random cat image** from [The Cat API](https://thecatapi.com/)
- User-friendly and interactive layout

---

## 🌐 Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- **Axios** (for making API requests)

---

## 📦 APIs Used

1. 🐾 **Cat Facts API**  
   `https://catfact.ninja/fact`  
   Returns a random cat fact in JSON format.

2. 🐈 **The Cat API**  
   `https://api.thecatapi.com/v1/images/search`  
   Returns a random cat image in JSON format.

---

## 🧠 How It Works

1. When the user clicks the **"New Fact"** button:
   - An `async` function (`getFact`) is triggered.
   - It fetches data from both APIs.
   - Displays the cat fact and cat image in the DOM.

