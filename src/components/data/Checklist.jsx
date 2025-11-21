import { useState, useEffect } from 'react';

const Checklist = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const storedTasksArray = JSON.parse(storedTasks);
      const today = new Date().toDateString();
      const storedDate = localStorage.getItem('date');
      if (storedDate === today) {
        setTasks(storedTasksArray);
      } else {
        localStorage.removeItem('tasks');
        localStorage.removeItem('date');
        const defaultTasks = [
          { id: 1, text: 'Went to bed & woke up on time', completed: false },
          { id: 2, text: 'Bathed & Groomed', completed: false },
          { id: 3, text: 'Walked >7000 steps', completed: false },
          { id: 4, text: 'Meditated for a minimum of 15min', completed: false },
          { id: 5, text: 'Read 10 pages or for 15min', completed: false },
          { id: 6, text: 'Drank 2L of water', completed: false },
          { id: 7, text: 'No Alcohol', completed: false },
          { id: 8, text: 'No Junk Food', completed: false },
          { id: 9, text: 'Stretched for >5min', completed: false },
          { id: 10, text: 'Exercised for 15-30min', completed: false },
        ];
        setTasks(defaultTasks);
        localStorage.setItem('tasks', JSON.stringify(defaultTasks));
        localStorage.setItem('date', today);
      }
    } else {
      const defaultTasks = [
        { id: 1, text: 'Went to bed & woke up on time', completed: false },
        { id: 2, text: 'Bathed & Groomed', completed: false },
        { id: 3, text: 'Walked >7000 steps', completed: false },
        { id: 4, text: 'Meditated for a minimum of 15min', completed: false },
        { id: 5, text: 'Read 10 pages or for 15min', completed: false },
        { id: 6, text: 'Drank 2L of water', completed: false },
        { id: 7, text: 'No Alcohol', completed: false },
        { id: 8, text: 'No Junk Food', completed: false },
        { id: 9, text: 'Stretched for >5min', completed: false },
        { id: 10, text: 'Exercised for 15-30min', completed: false },
      ];
      setTasks(defaultTasks);
      localStorage.setItem('tasks', JSON.stringify(defaultTasks));
      localStorage.setItem('date', new Date().toDateString());
    }
  }, []);

  useEffect(() => {
    if (tasks !== null) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleToggle = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  if (tasks === null) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="systemList">
      {tasks.map((task) => (
        <li key={task.id}>
          <input type="checkbox" checked={task.completed} onChange={() => handleToggle(task.id)} />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Checklist;