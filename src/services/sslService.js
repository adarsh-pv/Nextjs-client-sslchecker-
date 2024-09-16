"use client"
import axios from "axios";

export const fetchSSLCertificate = async (domain) => {
    try {
        const response = await axios.post('http://localhost:4000/api/v1/sslroutes/check-ssl',{domain})
        console.log(response,"response")
        const {data} = response;
        console.log(data,"complete response")
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
  };