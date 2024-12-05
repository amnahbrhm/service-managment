import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    guid: { type: String, required: true },
    serviceName: { type: String, required: true },
    serviceNameAr: { type: String, required: true },
    code: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
    price: { type: Number, required: true },
    descriptionAr: { type: String, required: true },
    descriptionEn: { type: String, required: true },
    vattable: { type: Boolean, required: true },
    vatValue: { type: Number, required: true }
})


export const Service = mongoose.model("service", ServiceSchema)