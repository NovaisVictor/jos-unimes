-- CreateEnum
CREATE TYPE "teacherFormingEnum" AS ENUM ('TEACHER', 'FORMING');

-- AlterTable
ALTER TABLE "Viewer" ADD COLUMN     "teacherForming" "teacherFormingEnum" NOT NULL DEFAULT 'FORMING';
