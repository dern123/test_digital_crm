module.exports = {
    configure(app) {
      app.use('/api/crm', require("./crm.routes"));
    }
};