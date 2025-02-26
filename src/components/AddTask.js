// src/components/AddTask.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

const AddTask = () => {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = async () => {
    if (taskName.trim()) {
      await addDoc(collection(db, 'tasks'), { name: taskName });
      setTaskName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
