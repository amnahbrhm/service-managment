import { Request, Response } from "express";
import { Service } from "../models/service";
// import { Service } from "../models/service";
// import path from "path";

declare global {
	interface Error {
		statusCode: number;
	}
	namespace Express {
		interface User {
			id: any;
			role: string
		}
	}
}


export const index = async (req: Request, res: Response, next: any) => {
	try {
		if (req.query.id) {
			const Service = await getServiceById(req.query.id)
			if (!Service) {
			const error = new Error("Service not found");
			error.statusCode = 404;
			throw error;
		}
		res.status(200).send(Service);
		}
		else {
			const pagination: number = +req.query.pagination!;
			const page: number = +req.query.page!;
			const Services = await Service.find({})
				.skip((page-1) * pagination)
				.limit(pagination)
				.sort({ createdAt: -1 });
			const rowsCount: number = (await Service.find({})).length
			res.status(200).send({ Services, rowsCount });
		}
	} catch (error) {
		next(error);
	}
};

export const add = async (req: Request, res: Response, next: any) => {
	try {
		console.log({...req.body})
		let service = new Service({...req.body});
		await service.save();
		res.status(200).send({});
	} catch (err) {
		next(err);
	}
};

async function getServiceById(id: any): Promise<any> {
	return await Service.findById(id)
}


// export const getIamge = async (req: Request, res: Response, next: any) => {
// 	try {
// 		res.sendFile(path.join(__dirname, `/../uploads/${req.params.id}`));
// 	} catch (err) {
// 		next(err);
// 	}
// };

export const testDelete = async (req: Request, res: Response, next: any) => {
	try {
		let service = await Service.findById(req.query.id);
		if (service) {
			await service.deleteOne();
		}
		else {
			const error = new Error("Service not found");
			error.statusCode = 404;
			throw error;
		}
		res.status(200).send({ messege: "Success" });
	} catch (err) {
		next(err);
	}
};

export const editTest = async (req: Request, res: Response, next: any) => {
	try {
		console.log(req.query.id)
		let test = await Service.findById(req.query.id);
		if (test) {
			await Service.updateOne({...req.body});
			res.status(200).send({ messege: "Success" });
		}
	} catch (err) {
		next(err);
	}
};

// export const getMulti = async (req: Request, res: Response, next: any) => {
// 	try {
// 		const arr = (req.query.list as string).split(',')
// 		const tests = await Test.find({ "_id": { "$in": arr } })
// 		res.status(200).send({ tests });
// 	} catch (error) {
// 		next(error);
// 	}
// };
