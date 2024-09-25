export default function CookieReceiver(req, res) {
    if (req.method === "GET") {
        const cookie = req.query.cookie; // 从查询参数获取 cookie
        if (cookie) {
            console.log("Received cookie:", cookie); // 打印到服务器日志
        }
        res.status(200).send("Cookie received");
    } else {
        res.status(405).send("Method not allowed");
    }
}
