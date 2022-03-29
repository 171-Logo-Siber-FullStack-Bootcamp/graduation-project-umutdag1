// External Modules
const winston = require('winston');

// Internal Modules
const {file_path, logs, env} = require('../../config/logger.config');

const timezoned = () => {
    return new Date().toLocaleString('en-US', {
        timeZone: 'Europe/Istanbul'
    });
}

const loggerEnv = env[process.env.NODE_ENV];
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({format: timezoned}),
        winston.format.json(),
        winston.format.prettyPrint()
    ),
    defaultMeta: {service: 'user-service'},
    transports: logs.map(log => new winston.transports.File(
        log?.level ?
            {
                filename: `${file_path}/Users_${loggerEnv}/${log.filename}`,
                level: log.level
            } :
            {
                filename: `${file_path}/Users_${loggerEnv}/${log.filename}`,
            }
    ))
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

module.exports = (level, message) => logger.log({
    level,
    message
});

