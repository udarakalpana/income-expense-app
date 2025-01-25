import {useEffect, useState} from "react";
import axios from "axios";

const IncomeListTable = () => {
    const [availableIncomes, setAvailableIncomes] = useState([])
    useEffect(() => {
        fetchGetAllIncomes().then()
    }, []);

    const fetchGetAllIncomes = async () => {
        try {
            const response = await axios.get('api/get-incomes')
            const {all_incomes} = response.data
            setAvailableIncomes(all_incomes)

        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Income Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Income Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {availableIncomes.length > 0 && availableIncomes.map((incomeDetails) => (
                        <tr key={incomeDetails.id}>
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {incomeDetails.id}
                            </th>
                            <td className="px-6 py-4">
                                {incomeDetails.income_amount}
                            </td>
                            <td className="px-6 py-4">
                                {incomeDetails.income_category}
                            </td>
                            <td className="px-6 py-4">
                                <a href="#"
                                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default IncomeListTable;
