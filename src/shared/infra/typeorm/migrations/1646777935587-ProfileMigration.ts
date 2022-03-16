import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ProfileMigration1646777935587 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tbl_profiles',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        default: null,
                        isGenerated: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        width: 50,
                    },
                    {
                        name: 'is_active',
                        type: 'integer',
                        width: 1,
                        default: 1,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
