import prisma from "./prisma";

export async function addCotization({values = {}}) {

    const cotization = prisma.cotizacion.create({
        data: values,
    });

    return cotization;
}