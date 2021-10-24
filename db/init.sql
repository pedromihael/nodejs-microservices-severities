CREATE DATABASE ms_severities;

CREATE USER ms_dev with password 'docker';

GRANT ALL PRIVILEGES ON DATABASE ms_severities TO ms_dev;
