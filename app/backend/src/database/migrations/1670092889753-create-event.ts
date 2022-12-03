import { MigrationInterface, QueryRunner } from 'typeorm';

export class createEvent1670092889753 implements MigrationInterface {
  name = 'createEvent1670092889753';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`events\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`event_day\` datetime NOT NULL, \`people_capacity\` int NOT NULL, \`tickets_available\` int NOT NULL, \`sold_out\` tinyint NOT NULL DEFAULT 0, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_dfa3d03bef3f90f650fd138fb3\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX \`IDX_dfa3d03bef3f90f650fd138fb3\` ON \`events\``);
    await queryRunner.query(`DROP TABLE \`events\``);
  }
}
