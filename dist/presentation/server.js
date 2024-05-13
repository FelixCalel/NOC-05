"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const cron_service_1 = require("./cron/cron-service");
const cheskservice_1 = require("../domain/use-cases/checks/cheskservice");
class Server {
    static start() {
        cron_service_1.CronService.createJob('*/5 * * * * *', () => {
            new cheskservice_1.CheckService(() => {
                console.log('Success');
            }, () => {
                console.log('Error');
            }).execute('http://google.com');
        });
    }
}
exports.Server = Server;
