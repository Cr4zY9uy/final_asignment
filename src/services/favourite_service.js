import URL from "./url"
import api from "../api";

export const list_favourite = async (user_id) => {
    const url = URL.FAVOURITE.LIST
    console.log(user_id);
    try {
        const rs = await api.get(url, {
            body: user_id
        })
        return rs.data;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
export const add_favourite = async (favourite) => {
    const url = URL.FAVOURITE.ADD;
    try {
        const rs = await api.post(url, favourite)
        return rs.data;
    }
    catch (error) {
        console.log(error)
        return [];
    }
}
export const modify_favourite = async (favourite) => {
    const url = URL.FAVOURITE.MODIFY;
    try {
        const rs = await api.put(url, favourite)
        return rs.data;
    }
    catch (error) {
        console.log(error)
        return {};
    }
}
