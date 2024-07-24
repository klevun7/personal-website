import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons";



const Navbar = () => {
    return (
        <nav>
            <div className='flex justify-between h-[100px] items-center'>
                <Link href = '/'>kevincao</Link>
                <div className='flex gap-2'>
                    <Link href= {"https://www.linkedin.com/in/kevin-cao7/"} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className='h-[40px] text-blue-500'/>
                    </Link>
                    <Link href={"https://github.com/klevun7"} target='_blank rel="noopener noreferrer'>
                    <FontAwesomeIcon icon={faGithubSquare} className='h-[40px]'/>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;