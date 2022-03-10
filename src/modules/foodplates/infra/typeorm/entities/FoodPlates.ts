import {
    Column,
    CreateDateColumn,
    Entity,
    Generated,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

import User from "@modules/users/infra/typeorm/entities/User";


@Entity()
class FoodPlates {

    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryGeneratedColumn()
    @Generated('uuid')
    uuid: string;

    @Column({
        type: 'varchar',
        width: 100,
        nullable: false,
    })
    name: string;

    @Column({
        type: 'text',
        nullable: true,
    })
    description: string;

    @Column({
        type: 'text',
        nullable: true,
    })
    content: string;

    @Column({
        type: 'tinyint',
        default: 0,
    })
    removed: number;

    @Column({
        type: 'tinyint',
        default: 1,
    })
    is_active: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    /* Relations */
    @OneToOne(() => User)
    @JoinColumn()
    user_request_id: User;

}

export default FoodPlates;
