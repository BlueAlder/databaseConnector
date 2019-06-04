const { Pool } = require('pg');

const pool = new Pool();

exports.allThreads = async (req, res, next) => {
    const query = "SELECT name from download_message_key ORDER BY name";
    const dbRes = await pool.query(query);

    res.send(dbRes.rows);
};

exports.weeklyAverage = async (req, res, next) => {
    // const query = "SELECT date_part('year', sent_time::date) as year, date_part('week', sent_time::date) as week, count(body) FROM download_messages join download_message_key dmk on download_messages.thread_id = dmk.id where dmk.name = $1 GROUP BY year, week ORDER BY year, week;"
    const query = "SELECT * FROM weekly_messages($1)";
    const values = [req.params.group_name];

    const dbRes = await pool.query(query, values);
    res.send(dbRes.rows);
};

exports.monthlyAverage = async (req, res, next) => {
    // const query = "SELECT date_part('year', sent_time::date) as year, date_part('week', sent_time::date) as week, count(body) FROM download_messages join download_message_key dmk on download_messages.thread_id = dmk.id where dmk.name = $1 GROUP BY year, week ORDER BY year, week;"
    const query = "SELECT * FROM monthly_messages($1)";
    const values = [req.params.group_name];

    const dbRes = await pool.query(query, values);
    res.send(dbRes.rows);
};
