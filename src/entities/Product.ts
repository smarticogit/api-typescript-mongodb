import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string
}