import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableColumn,
    TableForeignKey,
} from "typeorm";

export class UserMigration1646795559268 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'tbl_users',
              columns: [
                {
                  name: 'id',
                  type: 'integer',
                  isPrimary: true,
                  default: 'null',
                  isGenerated: true,
                },
                {
                  name: 'uuid',
                  type: 'varchar',
                  isNullable: false,
                  isUnique: true,
                },
                {
                  name: 'email',
                  type: 'varchar',
                  isUnique: true,
                },
                {
                  name: 'password',
                  type: 'varchar',
                },
                {
                  name: 'first_name',
                  type: 'varchar',
                  isNullable: false,
                },
                {
                  name: 'last_name',
                  type: 'varchar',
                  isNullable: true,
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
                },
              ],
            }),
          );

        await queryRunner.addColumn("tbl_users", new TableColumn({
            name: "profile_id",
            type: "int"
        }));

        await queryRunner.createForeignKey("tbl_users", new TableForeignKey({
            columnNames: ["profile_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "tbl_profiles",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tbl_users');
    }

}
