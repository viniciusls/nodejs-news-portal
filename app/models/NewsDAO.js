function NewsDAO(connection) {
    this.connection = connection;
}

NewsDAO.prototype.save = function (news, callback) {
    this.connection.query('INSERT INTO news SET ?', news, callback);
};

NewsDAO.prototype.getAll = function (callback) {
    this.connection.query('SELECT * FROM news', callback);
};

NewsDAO.prototype.getById = function (id, callback) {
    this.connection.query('SELECT * FROM news WHERE ID = ?', id, callback);
};

module.exports = function () {
    return NewsDAO;
};
