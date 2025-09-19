import { pool } from '../config/db.js'

export async function getAllTodos (req, res) {
    try {
        let { rows } = await pool.query('SELECT * FROM todos');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Failed to return TODOs', error);
        res.status(500).json({message: 'Failed to return TODOs', error: error.message});
    }
}

export async function getTodoById (req, res) {
    let id = req.params.id;
    
    try {
        let { rows } = await pool.query(
            'SELECT * FROM todos WHERE id = $1',
            [id]
        );
        
        let todo = rows[0];
        if (!todo) {
            res.status(404).json({message: `TODO with id ${id} was not found`});
            return;
        }
        
        res.status(200).json(todo);
    } catch (error) {
        console.error(`Failed to return TODO with id ${id}`, error);
        res.status(500).json({message: `Failed to return TODO with id ${id}`, error: error.message});
    }
}

export async function createTodo (req, res) {
    try {
        let { title, description} = req.body;
        const { rows } = await pool.query(
            'INSERT INTO todos(title, description) VALUES ($1, $2) RETURNING *', 
            [
                title, 
                description
            ]);
        
        res.status(201).json(rows[0]);
    } catch (error) {
        console.error('Failed to create TODO', error);
        res.status(500).json({message: 'Failed to create TODO', error: error,message});
    }
}

export async function deleteTodo (req, res) {
    let id = req.params.id;

    try {
        let { rows } = await pool.query(
            'DELETE FROM todos WHERE id = $1 RETURNING *',
            [id]
        );

        res.status(200).json(rows[0]);
    } catch (error) {
        console.error(`Failed to delete TODO with id ${id}`, error);
        res.status(500).json({message: `Failed to delete TODO with id ${id}`, error: error.message});
    }
}

export async function updateTodo (req, res) {
    let id = req.params.id;

    try {
        let { title, description, done } = req.body;
        const { rows } = await pool.query(
            'UPDATE todos SET title = $1, description = $2, done = $4 WHERE id = $3 RETURNING *',
            [
                title, 
                description, 
                id,
                done
            ]
        );

        res.status(200).json(rows[0]);
    } catch (error) {
        console.error(`Failed to update TODO with id ${id}`, error);
        res.status(500).json({message: `Failed to update TODO with id ${id}`, error: error.message});
    }
}