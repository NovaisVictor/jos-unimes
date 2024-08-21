/*
  Warnings:

  - A unique constraint covering the columns `[customerId]` on the table `Viewer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Viewer_customerId_key" ON "Viewer"("customerId");
