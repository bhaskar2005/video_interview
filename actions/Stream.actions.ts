"use server";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
    const user = await currentUser();

    if(!user) {
        throw new Error('User not found');
    } if (!apiKey) {
        throw new Error('API key is not set');
    } if (!apiSecret) {
        throw new Error('API secret is not set');
    }
}