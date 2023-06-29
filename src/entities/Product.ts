import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./Client";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "decimal" })
  price: number;

  @Column({ type: "boolean" })
  isActive: boolean;

  @ManyToOne(() => Client, (cliente) => cliente.products)
  @JoinColumn({ name: "client_id" })
  client: Product;
}
