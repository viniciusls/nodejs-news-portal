function NewsDAO(connection) {
    this.connection = connection;
}

NewsDAO.prototype.save = function (callback, news) {
    this.connection.query('INSERT INTO news SET ?', news, callback);
};

NewsDAO.prototype.getAll = function (callback) {
    this.connection.query('SELECT * FROM noticias', callback);
};

NewsDAO.prototype.getById = function (callback, id) {
    this.connection.query('SELECT * FROM news WHERE ID = ?', id, callback);
};

module.exports = function () {
    return NewsDAO;
};
