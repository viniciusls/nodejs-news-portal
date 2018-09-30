function NewsDAO(connection) {
    this.connection = connection;
}

NewsDAO.prototype.save = function (news, callback) {
    this.connection.query('INSERT INTO news SET ?', news, callback);
};

NewsDAO.prototype.getAll = function (limit = 50, offset = 0, callback) {
    console.log(limit, offset);
    this.connection.query('SELECT * FROM news ORDER BY news_at DESC, id DESC LIMIT ? OFFSET ?', [limit, offset], callback);
};

NewsDAO.prototype.getById = function (id, callback) {
    this.connection.query('SELECT * FROM news WHERE id = ?', id, (error, result) => callback(error, result[0]));
};

module.exports = function () {
    return NewsDAO;
};
