import { MigrationInterface, QueryRunner } from 'typeorm';

export class relationshipUsersEvents1670105033949 implements MigrationInterface {
  name = 'relationshipUsersEvents1670105033949';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users_events\` (\`usersId\` varchar(36) NOT NULL, \`eventsId\` varchar(36) NOT NULL, INDEX \`IDX_ad9d09828401685632968794ea\` (\`usersId\`), INDEX \`IDX_37c9532f961927c3ad2db6adc4\` (\`eventsId\`), PRIMARY KEY (\`usersId\`, \`eventsId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_events\` ADD CONSTRAINT \`FK_ad9d09828401685632968794ea7\` FOREIGN KEY (\`usersId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users_events\` ADD CONSTRAINT \`FK_37c9532f961927c3ad2db6adc42\` FOREIGN KEY (\`eventsId\`) REFERENCES \`events\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`users_events\` DROP FOREIGN KEY \`FK_37c9532f961927c3ad2db6adc42\``);
    await queryRunner.query(`ALTER TABLE \`users_events\` DROP FOREIGN KEY \`FK_ad9d09828401685632968794ea7\``);
    await queryRunner.query(`DROP INDEX \`IDX_37c9532f961927c3ad2db6adc4\` ON \`users_events\``);
    await queryRunner.query(`DROP INDEX \`IDX_ad9d09828401685632968794ea\` ON \`users_events\``);
    await queryRunner.query(`DROP TABLE \`users_events\``);
  }
}
