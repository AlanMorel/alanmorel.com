import { Logger } from "@/tools/Logger";
import { Server, Socket } from "net";

export default (server: Server): void => {
    let connections: Socket[] = [];

    server.on("connection", connection => {
        connections.push(connection);
        connection.on("close", () => (connections = connections.filter(con => con !== connection)));
    });

    const shutdown = (): void => {
        Logger.log("Received kill signal, shutting down gracefully");

        server.close(() => {
            Logger.log("Closed out remaining connections");
            process.exit(0);
        });

        setTimeout(() => {
            Logger.error("Could not close connections in time, forcefully shutting down");
            process.exit(1);
        }, 10000);

        Logger.log("Ending all connections");
        connections.forEach(con => con.end());

        setTimeout(() => {
            Logger.log("Destorying all connections");
            connections.forEach(con => con.destroy());
        }, 5000);
    };

    process.on("SIGTERM", shutdown);
    process.on("SIGINT", shutdown);
};
