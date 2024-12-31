import { Dispatch, SetStateAction } from "react";

interface Props {
  filters: { priority: string; status: string };
  setFilters: Dispatch<
    SetStateAction<{
      priority: string;
      status: string;
    }>
  >;
}
const FilterBar = ({ filters, setFilters }: Props) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-3">
      <select
        className="border p-2 w-full"
        value={filters.priority}
        onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
      >
        <option value="">All Priorities</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select
        className="border p-2 w-full"
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      >
        <option value="">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default FilterBar;
