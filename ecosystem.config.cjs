module.exports = {
    apps: [
        {
            name: 'robot-server',
            cwd: './',
            script: 'dist/server/entry.mjs',
            env: {
                NODE_ENV: 'production'
            },
            env_dev: {
                NODE_ENV: 'development'
            },
            env_test: {
                NODE_ENV: 'test'
            },
            max_memory_restart: '1024M',
            merge_logs: true,
            error_file: './logs/err.log',
            out_file: './logs/out.log',
            log_date_format: 'YYYY-MM-DD HH:mm:ss'
        }
    ]
}
