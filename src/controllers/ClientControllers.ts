import { Request, Response } from "express";
import { clientRepository } from "../repositories/ClientRepository";

export class ClientController {
  async list(req: Request, res: Response) {
    const clients = await clientRepository.find();

    return res.status(200).json(clients);
  }

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const foundEmail = await clientRepository.findOneBy({ email });

    if (foundEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    try {
      const newClient = clientRepository.create({
        name,
        email,
        password,
        products: [],
      });

      await clientRepository.save(newClient);

      return res.status(201).json(newClient);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
