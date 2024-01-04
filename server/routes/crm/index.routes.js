module.exports = {
    configure(app) {
      app.use('/api/leads', require("./leads.routes"));
      app.use('/api/statistic', require("./statistic.routes"));
    }
};