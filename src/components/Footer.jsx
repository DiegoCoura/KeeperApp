export default function Footer(){
    const year = new Date().getFullYear();

    return(
        <div>
        <footer>
            <p>Copyright C {year}</p>
        </footer>
        </div>
    )
}