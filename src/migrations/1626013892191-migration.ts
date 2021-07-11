import { createHash } from 'src/utils/hashmiddle';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1626013892191 implements MigrationInterface {
  name = 'migration1626013892191';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "board" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(30) NOT NULL, "columns" json NOT NULL, CONSTRAINT "PK_865a0f2e22c140d261b1df80eb1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "colmn" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(30) NOT NULL, "order" integer NOT NULL, CONSTRAINT "PK_e03b29e03aa1b0d2079b82c036f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tasks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying, "order" integer NOT NULL, "description" character varying, "userId" text, "columnId" character varying, "boardId" text, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(30) NOT NULL, "login" character varying(20) NOT NULL, "password" text, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `INSERT INTO "user" (name, login, password) VALUES ('admin', 'admin', '${await createHash(
        'admin',
      )}')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "task"`);
    await queryRunner.query(`DROP TABLE "colmn"`);
    await queryRunner.query(`DROP TABLE "board"`);
  }
}
