import ErrorHandler from '../error/error.js';
import { Reservation } from '../models/reservationSchema.js';
import Joi from 'joi';

const reservationSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    time: Joi.string().required(),
    date: Joi.string().required(),
});

export const sendReservation = async (req, res, next) => {
    const { error } = reservationSchema.validate(req.body);
    if (error) {
        return next(new ErrorHandler(error.details.map(detail => detail.message).join(','), 400));
    }

    const { firstName, lastName, email, phone, time, date } = req.body;

    try {
        await Reservation.create({ firstName, lastName, email, phone, time, date });
        res.status(200).json({
            success: true,
            message: "Reservation Sent Successfully",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            return next(new ErrorHandler(validationErrors.join(","), 400));
        } else {
            return next(new ErrorHandler(error.message, 500));
        }
    }
};
