const Router = require("express");
const router = Router();
const crmController = require("../../controllers/crm/crm.controller");


router.post("/create", crmController.create);

router.get("/get", crmController.get);
router.get("/get/:id", crmController.getById);

router.put("/update/:id", crmController.update);

router.delete("/delete/:id", crmController.delete);

module.exports = router;