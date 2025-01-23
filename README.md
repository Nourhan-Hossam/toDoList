# To-Do List Project

## Description
The To-Do List project is a simple React-based application that allows users to manage their daily tasks. The app supports adding, deleting, marking tasks as completed, and filtering tasks by their status (all, completed, or uncompleted). Tasks persist in the browser's local storage, ensuring users don't lose their data on page reloads.

## Features
- **Add Tasks:** Users can add new tasks to their to-do list.
- **Mark as Completed:** Users can mark tasks as completed or uncompleted.
- **Delete Tasks:** Remove tasks from the list.
- **Filter Tasks:** View tasks based on their status:
  - All tasks
  - Completed tasks
  - Uncompleted tasks
- **Local Storage Persistence:** Tasks are saved in the browser's local storage.

## Installation
To set up and run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nourhan-Hossam/todo-list-react.git
   cd todo-list-react
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open the application:**
   Navigate to `http://localhost:3000` in your web browser.

## Usage
1. Enter a task in the input field and click the **Add** button to add it to your list.
2. Use the **👍** button to mark a task as completed or uncompleted.
3. Click the **❌** button to delete a task.
4. Use the filter buttons (**All**, **Completed**, **Uncompleted**) to view specific tasks.

## Code Structure
- **State Management:** The application uses React's `useState` hook to manage the list of tasks and the current filter.
- **Local Storage Integration:** React's `useEffect` hook ensures tasks are loaded from and saved to local storage.
- **Filtering:** Tasks are filtered dynamically based on the selected filter option.

## File Structure
```
project-folder/
├── src/
│   ├── App.js       // Main component
│   ├── index.js     // Entry point
│   ├── App.css      // Styles for the application
│
├── public/
│   ├── index.html   // HTML template
│
└── package.json     // Project metadata and dependencies
```

## Technologies Used
- **React:** Front-end library for building the user interface.
- **CSS:** Styling the application.
- **Local Storage:** For saving tasks persistently.

## Customization
Feel free to customize the application by:
1. Changing the color scheme in `App.css`.
2. Adding more features, such as due dates or task categories.
3. Integrating with external APIs for task management.

## Future Improvements
- Add drag-and-drop functionality to reorder tasks.
- Integrate a backend to manage tasks across devices.
- Add user authentication for personalized task lists.


---

Happy task managing! 🚀
