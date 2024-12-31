import { render, screen, fireEvent } from "@testing-library/react";
import EditTask from "../components/EdtiTaskForm";

test("it should render the task data in the inputs and call editTask with updated task values on submit", () => {
  const task = {
    id: 1735656849101,
    title: "Test Task",
    description: "This is a test task.",
    dueDate: "2024-12-31",
    priority: "High",
    status: "Pending",
  };
  const mockEditTask = jest.fn();

  render(<EditTask task={task} editTask={mockEditTask} />);

  // Asserting that the task title and description are rendered correctly in the inputs
  const titleInput = screen.getByPlaceholderText(
    "Task Title"
  ) as HTMLInputElement;
  const descriptionInput = screen.getByPlaceholderText(
    "Task Description"
  ) as HTMLInputElement;
  const dueDateInput = screen.getByTitle("Task Due Date") as HTMLInputElement;
  const priorityInput = screen.getByTitle("Priority") as HTMLInputElement;
  const statusInput = screen.getByTitle("Status") as HTMLInputElement;

  expect(titleInput.value).toBe(task.title);
  expect(descriptionInput.value).toBe(task.description);
  expect(dueDateInput.value).toBe(task.dueDate);
  expect(priorityInput.value).toBe(task.priority);
  expect(statusInput.value).toBe(task.status);

  // Simulate editing some task values
  fireEvent.change(titleInput, { target: { value: "New Task Title" } });
  fireEvent.change(descriptionInput, {
    target: { value: "New Task Description" },
  });

  // Submit the form
  fireEvent.click(screen.getByText("Edit"));

  // Assert that the editTask function was called with the updated task
  expect(mockEditTask).toHaveBeenCalledWith({
    id: 1735656849101,
    title: "New Task Title",
    description: "New Task Description",
    dueDate: "2024-12-31",
    priority: "High",
    status: "Pending",
  });
});
