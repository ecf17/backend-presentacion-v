export async function handleRequest(func, args, res) {
    try {
        const result = await func(...args);
        if (!result) return res.status(404).json({ message: '404 - Not Found' });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '500 - Internal Server Error' });
    }
}
