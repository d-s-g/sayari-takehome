
import { NextFunction, Request, Response } from "express"

export class IndexController {
   async home(request: Request, response: Response, next: NextFunction) {
    return response.status(200).send('Hello world')
   }
}