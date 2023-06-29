import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clients')
export class Client {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "text" })
    name: string
}