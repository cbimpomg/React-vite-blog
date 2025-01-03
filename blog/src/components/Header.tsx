interface HeaderProps {
    title: string;
    subTitle: string;
    bgImage: string;
}

const Header = ({title, subTitle, bgImage}: HeaderProps) => {

    return (
        <header className="masthead" style={{backgroundImage: `url('assets/img/${bgImage}')`}}>
        <div className="container position-relative px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7" >
                    <div className="site-heading">
                        <h1>{title}</h1>
                        <span className="subheading">{subTitle}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
 

    )
}

export default  Header