import { MigrationInterface, QueryRunner } from "typeorm";

export class createCompany1670093199076 implements MigrationInterface {
    name = 'createCompany1670093199076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`companies\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_3dacbb3eb4f095e29372ff8e13\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_3dacbb3eb4f095e29372ff8e13\` ON \`companies\``);
        await queryRunner.query(`DROP TABLE \`companies\``);
    }

}
