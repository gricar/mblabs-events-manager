import { MigrationInterface, QueryRunner } from 'typeorm';

export class relationshipUsersEvents1670094811968 implements MigrationInterface {
  name = 'relationshipUsersEvents1670094811968';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users_events\` (\`userId\` varchar(36) NOT NULL, \`eventId\` varchar(36) NOT NULL, INDEX \`IDX_8512305a673840e908a8d9e0a8\` (\`userId\`), INDEX \`IDX_16e693c77f1dd54f9af4ca94a3\` (\`eventId\`), PRIMARY KEY (\`userId\`, \`eventId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_events\` ADD CONSTRAINT \`FK_8512305a673840e908a8d9e0a8e\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_events\` ADD CONSTRAINT \`FK_16e693c77f1dd54f9af4ca94a31\` FOREIGN KEY (\`eventId\`) REFERENCES \`events\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`users_events\` DROP FOREIGN KEY \`FK_16e693c77f1dd54f9af4ca94a31\``);
    await queryRunner.query(`ALTER TABLE \`users_events\` DROP FOREIGN KEY \`FK_8512305a673840e908a8d9e0a8e\``);
    await queryRunner.query(`DROP INDEX \`IDX_16e693c77f1dd54f9af4ca94a3\` ON \`users_events\``);
    await queryRunner.query(`DROP INDEX \`IDX_8512305a673840e908a8d9e0a8\` ON \`users_events\``);
    await queryRunner.query(`DROP TABLE \`users_events\``);
  }
}
