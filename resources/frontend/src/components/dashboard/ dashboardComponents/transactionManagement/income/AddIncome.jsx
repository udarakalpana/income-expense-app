import React, { useState } from "react";
import axios from "axios";
import { addNewIncome } from "../../../../../utilities/api/income/IncomeCreateAPI.js";
import FormSuccessAlert from "../../../../common/alert/FormSuccessAlert.jsx";
import AddNewIncomeModal from "./AddNewIncomeModal.jsx";
import IncomeListTable from "./IncomeListTable.jsx";

const AddIncome = () => {
    const [incomeDetails, setIncomeDetails] = useState({
        income_amount: 0,
        income_category: "",
    });
    const [message, setMessage] = useState("");
    const [isIncomeAmountFieldEmpty, setIsIncomeAmountFieldEmpty] =
        useState(false);
    const [isIncomeCategoryFieldEmpty, setIsIncomeCategoryFieldEmpty] =
        useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpenAndClose = () => {
        setIsModalOpen((prevState) => !prevState);
    };

    const handleInputFieldChange = (event) => {
        const { name, value } = event.target;

        setIsIncomeAmountFieldEmpty(false);
        setIsIncomeCategoryFieldEmpty(false);

        setIncomeDetails((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!incomeDetails.income_amount) {
            setIsIncomeAmountFieldEmpty(true);
            return;
        }

        if (!incomeDetails.income_category) {
            setIsIncomeCategoryFieldEmpty(true);
            return;
        }

        const response = await addNewIncome(incomeDetails);

        if (response.status === 200) {
            const { message } = response.data;
            setMessage(message);

            window.location.reload()
        }


    };

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4">
                <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <button
                            type="button"
                            onClick={() => handleModalOpenAndClose()}
                            className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            Create new income
                        </button>
                    </div>
                </div>
                <div className="mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <section className="bg-white dark:bg-gray-900">
                        <div className="py-1 w-3/4 m-auto lg:py-16">
                            <FormSuccessAlert message={message} />
                            <AddNewIncomeModal
                                isModalOpen={isModalOpen}
                                isIncomeAmountFieldEmpty={isIncomeAmountFieldEmpty}
                                isIncomeCategoryFieldEmpty={isIncomeCategoryFieldEmpty}
                                handleModalOpenAndClose={handleModalOpenAndClose}
                                handleSubmit={handleSubmit}
                                handleInputFieldChange={handleInputFieldChange}
                            />
                        </div>
                    </section>
                </div>
                <div className="mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <IncomeListTable />
                </div>
            </div>
        </div>
    );
};

export default AddIncome;
