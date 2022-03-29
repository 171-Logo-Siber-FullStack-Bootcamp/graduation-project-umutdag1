module.exports = {
    file_path: 'v1/src/logs',
    logs: [
        {
            filename: 'info.log',
            level: 'info'
        },
        {
            filename: 'error.log',
            level: 'error'
        },
        {
            filename: 'warn.log',
            level: 'warn'
        },
        {
            filename: 'combined.log'
        }
    ],
    env: {
        development: "dev",
        test: "test",
        production: "prod"
    }
};