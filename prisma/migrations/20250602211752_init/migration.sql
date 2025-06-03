/*
  Warnings:

  - You are about to alter the column `enviado_el` on the `Cotizacion` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `Cotizacion` MODIFY `enviado_el` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP();
