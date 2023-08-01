import axios from "axios";
import { createClient } from '@supabase/supabase-js'

const baseUrl = "https://verify.codeforgovtech.in";
const supabase = createClient("https://kcavhjwafgtoqkqbbqrd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjYXZoandhZmd0b3FrcWJicXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5NTQxMzIsImV4cCI6MjAwMDUzMDEzMn0.8PKGvntMY7kw5-wmvG2FBOCxf-OrA2yV5fnudeA6SVQ")

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

export const getLeaderboard = async () => {
    try {
        const response = await supabase
            .from('leaderboard')
            .select()
            .gt('points', 0)
            .order('points', { ascending: false })
        return response;
    } catch (error) {
        return error;
    }
};
