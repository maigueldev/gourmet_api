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


@Entity('tbl_users_requests')
class UserRequests {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated('uuid')
    uuid: string;

    @Column({
        type: 'timestamp',
        nullable: true,
    })
    accepted_at: Date;

    @Column({
        type: 'timestamp',
        nullable: true,
    })
    canceled_at: Date;

    @Column({
        type: "varchar",
        nullable: true,
    })
    observation_canceled: string;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    food_plates_ids: string;

    @Column({
        type: 'int',
        width: 1,
        default: 0,
    })
    removed: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    /** Relations **/

    @OneToOne(() => User)
    @JoinColumn()
    user_request_id: User;

    @OneToOne(() => User, { nullable: true })
    @JoinColumn()
    user_chef_id: User;

}

export default UserRequests;
