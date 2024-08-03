import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEmployee1722713140904 implements MigrationInterface {
  name = 'CreateEmployee1722713140904';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`employee\` (\`employee_id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`phone_number\` varchar(15) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`employee_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`id\` \`id\` int NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP PRIMARY KEY`);
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`id\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`user_id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`,
    );
    await queryRunner.query(`ALTER TABLE \`user\` ADD \`employeeId\` int NULL`);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_ab4a80281f1e8d524714e00f38\` (\`employeeId\`)`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`REL_ab4a80281f1e8d524714e00f38\` ON \`user\` (\`employeeId\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_ab4a80281f1e8d524714e00f38f\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`employee_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_ab4a80281f1e8d524714e00f38f\``,
    );
    await queryRunner.query(
      `DROP INDEX \`REL_ab4a80281f1e8d524714e00f38\` ON \`user\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP INDEX \`IDX_ab4a80281f1e8d524714e00f38\``,
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`employeeId\``);
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`user_id\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`id\` int NOT NULL AUTO_INCREMENT`,
    );
    await queryRunner.query(`ALTER TABLE \`user\` ADD PRIMARY KEY (\`id\`)`);
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`,
    );
    await queryRunner.query(`DROP TABLE \`employee\``);
  }
}
