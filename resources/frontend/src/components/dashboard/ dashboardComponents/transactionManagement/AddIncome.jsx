import React, {useState} from 'react';
import axios from "axios";
import {addNewIncome} from "../../../../utilities/api/income/IncomeCreateAPI.js";

const AddIncome = () => {
    const [incomeDetails, setIncomeDetails] = useState({
        income_amount: 0,
        income_category: ''
    })
    const [message, setMessage] = useState('')
    const [isIncomeAmountFieldEmpty, setIsIncomeAmountFieldEmpty] = useState(false)
    const [isIncomeCategoryFieldEmpty, setIsIncomeCategoryFieldEmpty] = useState(false)

    const handleInputFieldChange = (event) => {
        const {name, value} = event.target;

        setIsIncomeAmountFieldEmpty(false)
        setIsIncomeCategoryFieldEmpty(false)

        setIncomeDetails((prevState) => (
            {...prevState, [name]: value}
        ))
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!incomeDetails.income_amount) {
            setIsIncomeAmountFieldEmpty(true)
            return
        }

        if (!incomeDetails.income_category) {
            setIsIncomeCategoryFieldEmpty(true)
            return
        }

        const response = await addNewIncome(incomeDetails)

        const {message} = response.data
        setMessage(message)
    }

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add Income</h2>
                    </div>
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </p>
                    </div>
                </div>
                <div className="mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <section className="bg-white dark:bg-gray-900">
                        <div className="py-1 w-3/4 m-auto lg:py-16">
                            {message && <div id="alert-1"
                                             className="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                                             role="alert">
                                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                </svg>
                                <span className="sr-only">Info</span>
                                <div className="ms-3 text-sm font-medium">
                                    {message}
                                </div>
                                <button type="button"
                                        className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                                        data-dismiss-target="#alert-1" aria-label="Close">
                                    <span className="sr-only">Close</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                </button>
                            </div>}


                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="income_amount"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Income
                                            Amount</label>
                                        <input type="number" name="income_amount" id="income_amount"
                                               onChange={handleInputFieldChange}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                               placeholder="Type income amount" required=""/>
                                        {isIncomeAmountFieldEmpty && <div className="text-red-500 text-sm">Income amount required!</div>}
                                    </div>
                                    <div>
                                        <label htmlFor="category"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                        <select
                                            id="category"
                                            name="income_category"
                                            onChange={handleInputFieldChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                            <option selected="">Select Income Type</option>
                                            <option value="salary">Salary</option>
                                            <option value="side project">Side Project</option>
                                            <option value="youtube revenue">YouTube Revenue</option>
                                        </select>
                                        {isIncomeCategoryFieldEmpty && <div className="text-red-500 text-sm">Income category required!</div>}
                                    </div>
                                </div>
                                <button type="submit"
                                        className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                    Add Income
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AddIncome;
