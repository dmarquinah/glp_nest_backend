import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserRole1722194110358 implements MigrationInterface {
  name = 'AddUserRole1722194110358';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`is_active\` tinyint NOT NULL DEFAULT 1`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`role\` varchar(50) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`role\``);
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`is_active\``);
  }
}
