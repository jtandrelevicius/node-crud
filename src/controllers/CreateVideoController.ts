import { Response, Request } from "express";
import { CreateVideoSercice } from "../services/CreateVideoService";


export class CreateVideoController{
    async hendle(req: Request, res: Response){
        const { name , description, duration, category_id} = req.body
        
        const service = new CreateVideoSercice;

        const result = await service.execute({
            name,
            description,
            duration,
            category_id
        });

        if (result instanceof Error){
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }
}