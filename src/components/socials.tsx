import Link from "next/link"
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6"
import { MdMarkEmailRead } from "react-icons/md"

export default function SocialPages() {
    return (
        <div className='flex gap-2 justify-center text-slate-50 dark:text-sky-800'>
            <Link
                href='https://github.com/felipecalderon'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex gap-1 items-center py-1 px-2 bg-sky-700 dark:bg-slate-100 rounded-lg'
            >
                <FaGithub className='text-xl' /> GitHub
            </Link>
            <Link
                href='https://www.facebook.com/felipecalderon321/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex gap-1 items-center py-1 px-2 bg-sky-700 dark:bg-slate-100 rounded-lg'
            >
                <FaFacebookF className='text-xl' /> Facebook
            </Link>
            <Link
                href='https://www.linkedin.com/in/felipecalderone/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex gap-1 items-center py-1 px-2 bg-sky-700 dark:bg-slate-100 rounded-lg'
            >
                <FaLinkedin className='text-xl' /> LinkedIn
            </Link>
            <a
                href='mailto:felipe.calderon321@gmail.com?Subject=Solicito un presupuesto de desarrollo digital'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex gap-1 items-center py-1 px-2 bg-sky-700 dark:bg-slate-100 rounded-lg'
            >
                <MdMarkEmailRead className='text-xl' /> Correo
            </a>
        </div>
    )
}
