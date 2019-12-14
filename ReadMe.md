# Running Project


1. Install `mysql-installer-community-8.0.18.0` or newer

2. Create database `bitcorn`  (be sure the Service `MySQL80` is running)![mysql_8_service](D:\Documents\IdeaProjects\bitcorn\pics\mysql_8_service.png)

3. Create tables by using `generators\mysql\generate_databases.sql`

4. Run jOOQ-generator `bat`-file under `generators\jooq\generate_code.bat`

5. Start frontend server in the `client`-project using command `ember serve` to update the `dist`-folder under `src\main\resources` of the `server`-project

6. Start the backend `server`-project (usually Maven-project is recognized by your IDE)

   