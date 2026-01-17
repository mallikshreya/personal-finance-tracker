// src/components/ExpenseTracker.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
        try {
            const response = await axios.get('http://localhost:5000/expenses');
            setExpenses(response.data);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <div>
            <h1>Expense Tracker</h1>
            <ul>
                {expenses.map(expense => (
                    <li key={expense.id}>{expense.description}: ${expense.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseTracker;
