import URL from "./url"
import api from "../api";

export const list_cart = async (user_id) => {
    const url = URL.CART.ADD
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
export const add_cart = async (cart) => {
    const url = URL.CART.ADD;
    try {
        const rs = await api.post(url, cart)
        return rs.data;
    }
    catch (error) {
        console.log(error)
        return {};
    }
}
export const modify_cart = async (cart) => {
    const url = URL.CART.MODIFY;
    try {
        const rs = await api.put(url, cart)
        return rs.data;
    }
    catch (error) {
        console.log(error)
        return {};
    }
}

