import { MigrationInterface, QueryRunner } from "typeorm";

export class relationshipCompanyUniversityEvents1670094152888 implements MigrationInterface {
    name = 'relationshipCompanyUniversityEvents1670094152888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`events\` ADD \`universityId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`events\` ADD \`companyId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`events\` ADD CONSTRAINT \`FK_8fb04be8578d4e64b5af65110e8\` FOREIGN KEY (\`universityId\`) REFERENCES \`universities\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`events\` ADD CONSTRAINT \`FK_b42eb62a0da91cc26d953db93cd\` FOREIGN KEY (\`companyId\`) REFERENCES \`companies\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`events\` DROP FOREIGN KEY \`FK_b42eb62a0da91cc26d953db93cd\``);
        await queryRunner.query(`ALTER TABLE \`events\` DROP FOREIGN KEY \`FK_8fb04be8578d4e64b5af65110e8\``);
        await queryRunner.query(`ALTER TABLE \`events\` DROP COLUMN \`companyId\``);
        await queryRunner.query(`ALTER TABLE \`events\` DROP COLUMN \`universityId\``);
    }

}
