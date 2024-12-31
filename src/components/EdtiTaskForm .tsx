import { FormEvent, useState } from "react";
import { Task } from "../types";
import PrimaryButton from "./PrimaryButtont";

interface Props {
  editTask: (updatedTask: Task) => void;
  task: Task;
}
const EditTaskForm = ({ editTask, task }: Props) => {
  const [form, setForm] = useState<Task>(task);
  const [formNotUpdated, setFormNotUpdated] = useState(true);

  const handleFormUpdate = () => setFormNotUpdated(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    editTask(form);
  };

  return (
    <div className="space-y-1">
      <h2 className="text-xl md:text-2xl font-semibold text-center">
        Edit Task
      </h2>

      <form
        id="editForm"
        className="p-4 mb-4"
        onChange={handleFormUpdate}
        onSubmit={handleSubmit}
      >
        <input
          className="border p-2 w-full mb-2"
          placeholder="Task Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Task Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <input
          type="date"
          className="border p-2 w-full mb-2"
          value={form.dueDate}
          onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
          required
        />
        <select
          className="border p-2 w-full mb-2"
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
          required
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select
          className="border p-2 w-full mb-4"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <PrimaryButton
          formId="editForm"
          label="Edit Task"
          disabled={formNotUpdated}
        />
      </form>
    </div>
  );
};

export default EditTaskForm;
