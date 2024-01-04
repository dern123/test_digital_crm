const pool = require("../../db/pool");


module.exports = {
    get: async(req,res) => {
        try{
            await pool.query(
                'SELECT channel_traffic.company_id, ' +
                'company.company_name, ' +
                'COUNT(DISTINCT installs) AS leads_count, ' +
                'SUM(COALESCE(installs, 0)) AS installs, ' +
                'SUM(COALESCE(impressions, 0)) AS impressions, ' +
                'SUM(COALESCE(ctr, 0)) AS ctr, ' +
                'SUM(COALESCE(reattrebutions, 0)) AS reattrebutions, ' +
                'SUM(COALESCE(daus, 0)) AS daus, ' +
                'SUM(COALESCE(waus, 0)) AS waus, ' +
                'SUM(COALESCE(ecpi, 0)) AS ecpi, ' +
                'SUM(COALESCE(ccr, 0)) AS ccr, ' +
                'SUM(COALESCE(roas, 0)) AS roas, ' +
                'SUM(COALESCE(maus, 0)) AS maus, ' +
                'SUM(COALESCE(revenues, 0)) AS revenues, ' +
                'SUM(COALESCE(spead, 0)) AS spead, ' +
                'SUM(COALESCE(events, 0)) AS events, ' +
                'SUM(COALESCE(other, 0)) AS other ' +
                'FROM channel_traffic ' +
                'JOIN company ON channel_traffic.company_id = company.company_id ' +
                'GROUP BY channel_traffic.company_id, company.company_name',
                (error, results) => {
                  if (error) {
                    throw error;
                  }
                  res.status(200).json({ status: true, data: results.rows });
                }
              );
        } catch (e) {
            console.log(e);
            res.status(500);
        }
    },

    getById: async(req,res) => {
        try{
            const company_id = parseInt(req.params.id);
            await pool.query(
                'SELECT channel_traffic.company_id, ' +
                'company.company_name, ' +
                'COUNT(DISTINCT installs) AS leads_count, ' +
                'SUM(COALESCE(installs, 0)) AS installs, ' +
                'SUM(COALESCE(impressions, 0)) AS impressions, ' +
                'SUM(COALESCE(ctr, 0)) AS ctr, ' +
                'SUM(COALESCE(reattrebutions, 0)) AS reattrebutions, ' +
                'SUM(COALESCE(daus, 0)) AS daus, ' +
                'SUM(COALESCE(waus, 0)) AS waus, ' +
                'SUM(COALESCE(ecpi, 0)) AS ecpi, ' +
                'SUM(COALESCE(ccr, 0)) AS ccr, ' +
                'SUM(COALESCE(roas, 0)) AS roas, ' +
                'SUM(COALESCE(maus, 0)) AS maus, ' +
                'SUM(COALESCE(revenues, 0)) AS revenues, ' +
                'SUM(COALESCE(spead, 0)) AS spead, ' +
                'SUM(COALESCE(events, 0)) AS events, ' +
                'SUM(COALESCE(other, 0)) AS other ' +
                'FROM channel_traffic ' +
                'JOIN company ON channel_traffic.company_id = company.company_id ' +
                'WHERE channel_traffic.company_id = $1 ' +
                'GROUP BY channel_traffic.company_id, company.company_name', 
                [company_id],
                (error, results) => {
                  if (error) {
                    throw error;
                  }
                  res.status(200).json({status: true, data: results.rows});
                }
            );
        }catch(e){
            console.log(e);
            res.status(500);
        }
    },

    filters: async(req, res) => {
        try{

        } catch (e) {
            console.log(e);
            res.status(500); 
        }
    },

    search: async(req, res) => {
        try{
            const searchValue = req.params.search;
            await pool.query(
                'SELECT channel_traffic.company_id, ' +
                'company.company_name, ' +
                'COUNT(DISTINCT installs) AS leads_count, ' +
                'SUM(COALESCE(installs, 0)) AS installs, ' +
                'SUM(COALESCE(impressions, 0)) AS impressions, ' +
                'SUM(COALESCE(ctr, 0)) AS ctr, ' +
                'SUM(COALESCE(reattrebutions, 0)) AS reattrebutions, ' +
                'SUM(COALESCE(daus, 0)) AS daus, ' +
                'SUM(COALESCE(waus, 0)) AS waus, ' +
                'SUM(COALESCE(ecpi, 0)) AS ecpi, ' +
                'SUM(COALESCE(ccr, 0)) AS ccr, ' +
                'SUM(COALESCE(roas, 0)) AS roas, ' +
                'SUM(COALESCE(maus, 0)) AS maus, ' +
                'SUM(COALESCE(revenues, 0)) AS revenues, ' +
                'SUM(COALESCE(spead, 0)) AS spead, ' +
                'SUM(COALESCE(events, 0)) AS events, ' +
                'SUM(COALESCE(other, 0)) AS other ' +
                'FROM channel_traffic ' +
                'JOIN company ON channel_traffic.company_id = company.company_id ' +
                'WHERE channel_traffic.company_id = $1 OR company.company_name ILIKE $2 ' +
                'GROUP BY channel_traffic.company_id, company.company_name', 
                [ parseInt(searchValue)?searchValue:-1, searchValue],
                (error, results) => {
                    if (error) {
                        throw error;
                    }
                    res.status(200).json(results.rows);
                }
            );
        } catch (e) {
            console.log(e);
            res.status(500); 
        }
    }
}  