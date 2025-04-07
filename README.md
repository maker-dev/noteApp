# 📝 NoteApp - Simple Todo List with LocalStorage  

**A lightweight, offline-friendly note-taking app** that saves your tasks using the browser's LocalStorage.  

---

## ✨ Features  

✅ **Add and delete notes**  
✅ **Auto-saves to LocalStorage** (no data loss on refresh)  
✅ **Clean, responsive design** (works on mobile & desktop)  
✅ **No backend needed** – 100% frontend JavaScript  
---

## 🚀 Quick Start  
1. **Clone or Download**  
   ```bash
   git clone https://github.com/yourusername/NoteApp.git
   ```
2. **Open `index.html`** in any modern browser (Chrome, Firefox, Edge).  
3. **Start typing!** Notes save automatically.  

---

## 🛠️ How It Works  
### 📦 **Data Storage**  
- Uses `localStorage` to persist notes in JSON format:  
  ```javascript
  // Save
  localStorage.setItem('notes', JSON.stringify(notesList));

  // Load
  const savedNotes = JSON.parse(localStorage.getItem('notes'));
  ```

**Happy Note-Taking!** ✏️🚀
