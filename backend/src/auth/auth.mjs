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
    jwt.verfiy(token, config.secertToken, (err, decodedToken) => {
        if (err) {
          return res
            .status(401)
            .send({ message: "failed", error: "Invalid credentials" });
        }
        req.user = decodedToken
        next()
    })
    
}
export default authentication;