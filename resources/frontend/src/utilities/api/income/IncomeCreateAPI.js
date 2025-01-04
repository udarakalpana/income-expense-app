import axios from "axios";

export const addNewIncome = (incomeDetails) => {
    return axios.post('http://127.0.0.1:8000/api/add-income', incomeDetails)
}
