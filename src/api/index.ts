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

export const getCert = async (token: any) => {
    try {
        const response = await axios.post(`${baseUrl}/inauguration/cert`, {
            "name": "Sh. Abhishek Singh, Dr. Pramod Varma, Mr. Venkatesh Hariharan",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlNoLiBBYmhpc2hlayBTaW5naCIsIm5hbWUiOiJTaC4gQWJoaXNoZWsgU2luZ2giLCJlbWFpbCI6ImNlb0BkaWdpdGFsaW5kaWEuZ292LmluIiwidHMiOjE2ODgwNDgzMjc4ODcsImlhdCI6MTY4ODA0ODMyNywiZXhwIjoxNjg4MTM0NzI3fQ.ONqR_smG5zYDGYG0w3fUoqV4AOYP2LK43t1KADrnzXU"
        });
        return response;
    } catch (error) {
        return error;
    }
};
