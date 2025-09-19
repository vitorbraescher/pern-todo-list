import { useState } from "react";
import toast from 'react-hot-toast';

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [creating, setCreating] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        //Validation
        if (!title.trim() || !description.trim()) {
            toast.error('All fields are required');
            return;
        } else if (title.length > 100 || description.length > 255) {
            toast.error('Total size for fields [Title = 100, Description = 255]');
            return;
        }

        setCreating(true);
        addTodo({title, description});
        setCreating(false);

        //Reset fields
        setTitle('');
        setDescription('');
    };

    return (
        <form action="submit" onSubmit={onSubmit}>
            <div className="bg-gray-50 rounded-lg p-3 mb-3 border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:space-x-4 items-baseline-last">
                    <div className="flex flex-col">
                        <label htmlFor="title" className="text-gray-700 font-medium mb-1">Title:</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} id="title" type="text" className="p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description" className="text-gray-700 font-medium mb-1">Description:</label>
                        <input value={description} onChange={(e) => setDescription(e.target.value)} id="description" type="text" className="min-w-xs p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <button className="h-min w-full bg-blue-700 text-white font-semibold py-1 rounded-lg hover:bg-blue-900 transition-colors duration-200 cursor-pointer" disabled={creating}>ADD</button>
                </div>
            </div>
        </form>
    )
}

export default AddTodo
