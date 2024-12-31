import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "../components/TaskForm";

describe("TaskForm Component", () => {
  beforeAll(() => {
    jest.spyOn(Date, "now").mockImplementation(() => 1735656849101); // Mocking Date.now()
  });

  afterAll(() => {
    jest.restoreAllMocks(); // Restore original implementation after tests
  });

  it("should call addTask with correct data when the form is submitted", () => {
    const mockAddTask = jest.fn(); // Mock function to simulate the prop
    render(<TaskForm addTask={mockAddTask} />);

    // Fill the form fields
    fireEvent.change(screen.getByPlaceholderText("Task Title"), {
      target: { value: "Test Task" },
    });
    fireEvent.change(screen.getByPlaceholderText("Task Description"), {
      target: { value: "This is a test task." },
    });
    fireEvent.change(screen.getByTitle("Task Due Date"), {
      target: { value: "2024-12-31" },
    });
    fireEvent.change(screen.getByTitle("Priority"), {
      target: { value: "High" },
    });
    fireEvent.change(screen.getByTitle("Status"), {
      target: { value: "Pending" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Add Task"));

    // Assert that the mockAddTask function was called with the correct data
    expect(mockAddTask).toHaveBeenCalledWith({
      id: 1735656849101,
      title: "Test Task",
      description: "This is a test task.",
      dueDate: "2024-12-31",
      priority: "High",
      status: "Pending",
    });
  });
});
