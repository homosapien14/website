import axios from "axios";

const baseUrl = "https://verify.codeforgovtech.in";

export const verifyToken = async (token: any) => {
    try {
        const response = await axios.get(`${baseUrl}/inauguration/${token}`);
        return response;
    } catch (error) {
        return error;
    }
};

export const getProgress = async (token: any) => {
    try {
        const response = await axios.get(`${baseUrl}/inauguration/status/${token}`);
        return response;
    } catch (error) {
        return error;
    }
};

export const getCert = async () => {
    try {
        const response = await axios.post(`${baseUrl}/inauguration/cert`, {
            "name": "Sh. Abhishek Singh, Dr. Pramod Varma, Mr. Venkatesh Hariharan"
        });
        return response;
    } catch (error) {
        return error;
    }
};
