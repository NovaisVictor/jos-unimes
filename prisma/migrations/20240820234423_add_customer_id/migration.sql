/*
  Warnings:

  - Added the required column `customerId` to the `Viewer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Viewer" ADD COLUMN     "customerId" TEXT NOT NULL;
