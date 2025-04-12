import instance from "..";

export const getCollection = async () => {
    try {
        const res = await instance.get('fixture/collection.json')
        return {
            statusCode: res.status,
            data: res.data,
            success: true
        }
    } catch (err) {
        return {
            data: err,
            success: false
        }
    }
}