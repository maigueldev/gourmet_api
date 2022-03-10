import {
    Column,
    CreateDateColumn,
    Entity,
    Generated,
    JoinColumn,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import Profile from '@modules/profiles/infra/typeorm/entities/Profile';

@Entity('tbl_users')
class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated("uuid")
    uuid: string;

    @PrimaryColumn()
    email: string;

    @Column({
        length: 100,
    })
    first_name: string;

    @Column({
        nullable: true,
        length: 100,
    })
    last_name: string;

    @Column({
        type: 'int',
        width: 1,
        default: 1,
    })
    is_active: number;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile_id: Profile;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default User;