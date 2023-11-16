export const getExepleTasks = async () => {
    const response = await fetch("/todos-list-react/exepleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};