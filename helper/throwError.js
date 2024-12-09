import { HttpStatus } from "../constant/constant.js";

export const failResponseData = ({
    res,
    data = null,
    message = "",
    statusCode = HttpStatus.OK
}) => {
    res.status(statusCode).json({
        success: false,
        ...(data && { data }),
        ...(message && { message }),
    });
};