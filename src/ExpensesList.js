// src/ExpensesList.js
import React, { useEffect, useState } from 'react';
// Uncomment the line below if using Axios
// import axios from 'axios';

const ExpensesList = () => {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                // Using fetch
                const response = await fetch('http://localhost:5000/api/expenses');
                const data = await response.json();
                setExpenses(data);

                // Uncomment this block if using Axios
                // const response = await axios.get('http://localhost:5000/api/expenses');
                // setExpenses(response.data);
            } catch (error) {
                console.error('Error fetching expenses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchExpenses();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Expenses</h1>
            <ul>
                {expenses.map(expense => (
                    <li key={expense.id}>
                        {expense.description}: ${expense.amount} on {expense.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpensesList;
