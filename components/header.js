import Link from 'next/link'
import Image from 'next/image'


export default function Header(){
    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link href="#">
                        <a class="navbar-brand" >
                            <Image 
                                src="/images/logo.png" 
                                alt="FurniFuture" 
                                height="80"
                                width="100%" />
                        </a>
                    </Link>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
                        {/* style="justify-content: center;flex: 1;" */}
                        <li class="nav-item">
                            <Link href="#">
                                <a class="nav-link active" aria-current="page">Avaleht</a>
                            </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link href="#">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Mööbel</a>
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <Link href="#">
                                        <a class="dropdown-item">Kontor</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a class="dropdown-item disabled" id="" aria-disabled="true">Elutuba</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a class="dropdown-item disabled">Magamistuba</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a class="dropdown-item disabled">Köök</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a class="dropdown-item disabled">Vannituba</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link href="#kontakt">
                                <a class="nav-link" name="kontakt">Kontakt</a>
                            </Link>
                        </li>
                        </ul>

                        <form class=" justify-content-start">
                        <Link href="logisisse/index.html">
                            <a class="btn btn-outline-success me-2" type="button">Logi sisse</a>
                        </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

