import { Request, Response } from "express";
import { productRepository } from "../repositories/ProductRepository";

export class ProductController {
  async list(req: Request, res: Response) {
    const products = await productRepository.find();

    return res.status(200).json(products);
  }
  async create(req: Request, res: Response) {
    const { name, description, price } = req.body;

    try {
      const newProduct = await productRepository.create({
        name,
        description,
        price,
        isActive: true,
      });

      const productSaved = await productRepository.save(newProduct);

      return res.status(201).json(productSaved);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
