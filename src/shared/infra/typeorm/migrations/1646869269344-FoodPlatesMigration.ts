import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class FoodPlatesMigration1646869269344 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tbl_food_plates',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        default: null,
                        isGenerated: true,
                    },
                    {
                        name: 'uuid',
                        type: 'varchar',
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        width: 100,
                        isNullable: false,
                    },
                    {
                        name: 'description',
                        type: 'text',
                        isNullable: true,
                    },
                    {
                        name: 'content',
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

        await queryRunner.addColumn("tbl_food_plates", new TableColumn({
            name: "user_id",
            type: "int"
        }));

        await queryRunner.createForeignKey("tbl_food_plates", new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "tbl_users",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tbl_food_plates');
    }

}
