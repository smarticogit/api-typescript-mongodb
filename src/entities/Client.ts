import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  email: string;

  @Column({ type: "text" })
  password: string;

  @OneToMany(() => Product, (product) => product.client)
  products: Product[];
}
