import axios, {AxiosResponse} from "axios";
import UrlApiStorage from "../../../utils/UrlApiStorage.ts";
import AdminService from "../../../services/AdminService.ts";


export const getAdmin = async (idAdmin : number): Promise<AxiosResponse> => {
    try {
        const response = await axios.get(UrlApiStorage.adminGet + idAdmin , {
            headers: {
                'Authorization' : AdminService.basicAuth,
                'Content-Type' : 'application/json'
            } ,
        });
        return response;
    } catch (error: any) {
        // Handle axios-specific error response
        if (error.response) {
            throw new Error(error.response.data);
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
};