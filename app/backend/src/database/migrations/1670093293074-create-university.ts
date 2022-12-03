import { MigrationInterface, QueryRunner } from "typeorm";

export class createUniversity1670093293074 implements MigrationInterface {
    name = 'createUniversity1670093293074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`universities\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_25b08a78732a663bb35872eaa7\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_25b08a78732a663bb35872eaa7\` ON \`universities\``);
        await queryRunner.query(`DROP TABLE \`universities\``);
    }

}
