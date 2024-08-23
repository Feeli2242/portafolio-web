"use server"
import { habilidades } from "@/contants/habildades"
import NewTooltip from "./newTooltip"

export default async function Habilidades() {
    return (
        <section id='habs'>
            <h2 className='text-2xl font-semibold mb-4 text-center'>Conocimientos</h2>
            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4'>
                {habilidades.map((habilidad) => (
                    <NewTooltip key={habilidad.nombre} nombre={habilidad.nombre}>
                        <habilidad.Icono className='text-2xl dark:text-amber-50' />
                    </NewTooltip>
                ))}
            </div>
        </section>
    )
}
