import express from "express";
import { index, testDelete, add, editTest } from "../controllers/servicesController"
// import t from "../middlewares/multer";
const router = express.Router()

router.delete("/",  testDelete)
router.get("/", index)
router.post("/", add)
router.put("/", editTest)
// router.put("/", passport.authenticate('jwt', { session: false }), upload.single('img'), editItem)

export const servicesRoutes = router




