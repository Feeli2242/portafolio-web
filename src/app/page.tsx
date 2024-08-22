import ChatBot from "@/components/chatbot"
import VSCodeDemostracion from "@/components/demovscode"
import Experiencias from "@/components/experiencia"
import Habilidades from "@/components/habilidades"
import HeaderBottom from "@/components/header-bottom"
import HeaderTop from "@/components/header-top"
import Clima from "@/components/ipguide"
import SobreMi from "@/components/sobre-mi"
import SocialPages from "@/components/socials"

export default function Home() {
    return (
        <>
            <section className='relative'>
                <Clima />
                <VSCodeDemostracion />
                <HeaderTop />
                <HeaderBottom>
                    <SobreMi />
                </HeaderBottom>
            </section>
            <main className='container mx-auto space-y-20 md:space-y-10 md:mt-10 p-8 max-w-2xl'>
                <Experiencias />
                <Habilidades />
                <ChatBot />
                <SocialPages />
            </main>
            <footer className='bg-sky-800 text-white p-4 text-center md:mt-3'>
                <p>2024 &copy; Felipe Calderón</p>
                <p className='max-w-3xl mx-auto px-4 text-pretty text-xs font-light'>
                    Todos los derechos reservados sobre las imágenes y textos personales. Los íconos y otros elementos gráficos utilizados en este sitio son
                    propiedad de sus respectivos autores y están sujetos a las licencias internacionales correspondientes. La reproducción de imágenes y textos
                    personales sin permiso está prohibida, el uso no autorizado puede resultar en acciones legales.
                </p>
            </footer>
        </>
    )
}
