import config from "../../config.mjs";
import jwt from "jsonwebtoken"
const authentication = async (req, res, next) => {
    let token = req.Header["authorization"];
    token = token.split(' ')[1]
    if (!token) {
        return res
          .status(401)
          .send({
            message: "failed",
            error: "Please login to access this resource",
          });
    }
    
 }