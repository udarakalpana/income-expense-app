import axios from "axios";

export const addNewIncome = (incomeDetails) => {
    return axios.post('api/add-income', incomeDetails)
}
