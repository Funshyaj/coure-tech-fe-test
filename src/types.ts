export interface Task {
    id: number,
    title: string,
    description: string,
    // status: 'Pending' | 'Completed',
    status: string,
    priority: string,
    dueDate: string
}