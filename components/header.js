import Link from 'next/link'
import Image from 'next/image'


export default function Header(){
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link href="#">
                        <a className="navbar-brand" >
                            <Image 
                                src="/images/logo.png" 
                                alt="FurniFuture" 
                                height="80"
                                width="100%" />
                        </a>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                        {/* style="justify-content: center;flex: 1;" */}
                        <li className="nav-item">
                            <Link href="#">
                                <a className="nav-link active" aria-current="page">Avaleht</a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link href="#">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Mööbel</a>
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <Link href="#">
                                        <a className="dropdown-item">Kontor</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="dropdown-item disabled" id="" aria-disabled="true">Elutuba</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="dropdown-item disabled">Magamistuba</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="dropdown-item disabled">Köök</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="dropdown-item disabled">Vannituba</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="#kontakt">
                                <a className="nav-link" name="kontakt">Kontakt</a>
                            </Link>
                        </li>
                        </ul>

                        <form className=" justify-content-start">
                        <Link href="logisisse/index.html">
                            <a className="btn btn-outline-success me-2" type="button">Logi sisse</a>
                        </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

