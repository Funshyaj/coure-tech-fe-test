import { useState } from "react";
import { Task } from "./types";
import { demoTasks } from "./data/demoTask";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import ModalContainer from "./components/ModalContainer";
import PrimaryButton from "./components/PrimaryButtont";
import Header from "./components/Header";
import EditTaskForm from "./components/EdtiTaskForm ";
import useLocalStorageState from "use-local-storage-state";

const App = () => {
  // const [tasks, setTasks] = useState<Task[]>(demoTasks || []);
  const [tasks, setTasks] = useLocalStorageState<Task[]>("tasks", {
    defaultValue: demoTasks,
  });
  const [filters, setFilters] = useState({ priority: "", status: "" });
  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);
  const [editTaskModalOpen, setEditTaskModalOpen] = useState(false);
  const [task, setTask] = useState<Task>({
    id: 2,
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
    status: "Pending",
  });

  const toggleAddTaskMOdal = () => setAddTaskModalOpen(!addTaskModalOpen);
  const toggleEditTaskModal = () => setEditTaskModalOpen(!editTaskModalOpen);
  const addTask = (task: Task) => setTasks([...tasks, task]);

  // funtion to edit a create task
  const editTask = (updatedTask: Task) => {
    setTask(updatedTask);
    setTasks((prev) => {
      return prev.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
    });
  };
  const updateTask = (updatedTask: Task) => {
    setTasks((prev) => {
      return prev.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
    });
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(
    (task: Task) =>
      (filters.priority ? task.priority === filters.priority : true) &&
      (filters.status ? task.status === filters.status : true)
  );

  return (
    <div className="container md:max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>
      {/* Sticky Header */}
      <Header>
        <PrimaryButton label="Create Task" onClick={toggleAddTaskMOdal} />
        <FilterBar filters={filters} setFilters={setFilters} />
      </Header>

      <div className="mt-52 md:mt-28">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`${
              task.status === "Completed"
                ? "bg-green-100"
                : task.status === "In Progress"
                ? "bg-orange-100"
                : "bg-white"
            } shadow-md rounded-lg p-4 mb-4 border border-gray-200`}
          >
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <p>{task.description}</p>
            <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
            <div className="mt-2 space-x-3">
              <button
                className="bg-blue-500 rounded py-1 px-2 text-white"
                onClick={() => {
                  setTask(task);
                  toggleEditTaskModal();
                }}
              >
                Edit
              </button>
              <button
                className="bg-green-500 rounded py-1 px-2 text-white"
                onClick={() => updateTask({ ...task, status: "Completed" })}
              >
                Complete
              </button>
              <button
                className="bg-red-500 rounded py-1 px-2 text-white"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Task modal */}
      {addTaskModalOpen && (
        <ModalContainer toggleModal={toggleAddTaskMOdal}>
          <TaskForm addTask={addTask} />
        </ModalContainer>
      )}

      {/* Edit Task modal */}
      {editTaskModalOpen && (
        <ModalContainer toggleModal={toggleEditTaskModal}>
          <EditTaskForm editTask={editTask} task={task} />
        </ModalContainer>
      )}
    </div>
  );
};

export default App;
