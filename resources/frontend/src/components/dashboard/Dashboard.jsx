import React from 'react';
import MainDashboard from "./ dashboardComponents/MainDashboard.jsx";
import {Route, Routes} from "react-router";
import AddIncome from "./ dashboardComponents/transactionManagement/AddIncome.jsx";
import AddExpense from "./ dashboardComponents/transactionManagement/AddExpense.jsx";

const Dashboard = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainDashboard />} />
                <Route path="/add-income" element={<AddIncome />} />
                <Route path="/add-expense" element={<AddExpense />} />
            </Routes>

        </>
    );
};

export default Dashboard;
