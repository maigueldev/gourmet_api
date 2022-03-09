import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class UserRequestsMigration1646867687354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tbl_users_requests',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        default: null,
                    },
                    {
                        name: 'uuid',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: 'accepted_at',
                        type: 'timestamp',
                        isNullable: true,
                    },
                    {
                        name: 'canceled_at',
                        type: 'timestamp',
                        isNullable: true,
                    },
                    {
                        name: 'observation_canceled',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'food_plates_ids',
                        type: 'text',
                        isNullable: true,
                    },
                    {
                        name: 'removed',
                        type: 'integer',
                        width: 1,
                        default: 0,
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

        // Columns for ForeignKey
        await queryRunner.addColumn("tbl_users_requests", new TableColumn({
            name: "user_request_id",
            type: "int"
        }));
        await queryRunner.addColumn("tbl_users_requests", new TableColumn({
            name: "user_chef_id",
            type: "int",
            isNullable: true,
        }));

        // References
        await queryRunner.createForeignKey("tbl_users_requests", new TableForeignKey({
            columnNames: ["user_request_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "tbl_users",
            onDelete: "CASCADE"
        }));
        await queryRunner.createForeignKey("tbl_users_requests", new TableForeignKey({
            columnNames: ["user_chef_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "tbl_users",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tbl_users_requests');
    }

}
