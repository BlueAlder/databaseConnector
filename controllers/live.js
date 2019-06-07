const {Pool} = require('pg');
const pool = new Pool();

exports.allSenders = async (req, res, next) => {
    const query = "SELECT name FROM sender_dic";
    const dbRes = await pool.query(query);

    res.send(dbRes.rows);
};

exports.allSentiments = async (req, res, next) => {
    const query = "SELECT name, avg(sentiment_score) sentiment_score from messages m join sender_dic s on m.sender_id = s.sender_id where sentiment_score != 0 GROUP BY name"
    const dbRes = await pool.query(query);

    res.send(dbRes.rows);
}
