import './NavBar.css'

function navBar(){
    return(
        <nav className="navbar sticky-top bg-body-tertiary">
            <div className="container-fluid">
                <div className="navBarFlags">
                    <button id="flagButton">
                        <img id="flags" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAAIVBMVEX////XFBoRRX5YfKTn7PJTNV3GGCIhUYegtcsiQXaVJDv1T9UEAAADGUlEQVR4nOXSCXbbUAxD0UCdu/8F123a1HFkDV/8JAByBbwH7+XT55fWt3z7Xv1C6S3L0jqBm791Asuf65vAq79vAsu/a5rAm79pAsvddUzg3t8xgeX9tUvgwd8ugUd/twQ++nslsOJvlcCqv1EC6/4+CTzzd0ngqb9JAhv+Fgls+TsksO33T2DHb5/Art88gX2/dwJH/M4JHPIbJ3DQb5vAUb9rAsf9ngmc8FsmcMpvmMA5v18CZ/1uCZz2myUw4LdKYMTvlMCY3yeBQb9NAsN+kwTG/R4JXPE7JHDJb5DARb98Alf96glc92snEOCXTiDEL5xAjF83gSi/agJhftEEAv2SCUT6FROI9eslEOyXSyDcL5ZAvF8rgRl+pQSm+IUSmOSXSWCWXyWBeX6NBCb6JRKY6hdIYK6fP4HZfvYEpvvJE0jwUyeQ4WdOIMfPm0CSnzaBND9pAnl+zgQy/YwJpPoJE0j20yWQ7WdLIN/PlUCBnyqBEj9RAjV+ngSq/CwJlPlJEij0UyRQ6WdIoNb/5Stqr9T/42exvtZfPn6pn2B8FPoZxkeZn2N8VPlJxkeNn2Z8lPh5xkeBn2l85Pupxke2n2x8JPvZxkeqn298ZPoJx0een3J8pPk5x0eSn3V85Phpx0eGn3h8JPiZx8d0P/f4mO0nHx9z/fTjY6qff3xM9CuMj3l+ifExyy8yPib5VcbHFL/O+JjhFxof8X6p8RHu1xofwX618RHrlxsfkX7B8RHoVxwfYX7N8RHlFx0fMX7Z8RHi1x0fAX7l8XHdLz0+rvrFx8dFv/r4uOTXHx9X/AbjY9xvMT6G/R7jY9DvMj7G/DbjY8RvND4G/E7j47Tfa3yc9ZuNj3N+u/Fxyu83Pk74HcfHcb/l+DjqNx0fB/2u4+OQ33d8HPEbj499v/X42PV7j48dv/v42Pbbj48tf4PxseHvMD6e+nuMj2f+JuNj3d9mfKz6+4yPFX+n8fHR32p8PPqbjY8Hf7fx8c7fb3zc+xuOj//+luPjzd9zfPz1dx0fr/624+O3v/H4t3vpPP7tfgGGgJseBZBUxAAAAABJRU5ErkJggg=="/>
                    </button>

                    <button id="flagButton">
                        <img id="flags" src="data:image/png;base64,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" alt=""/>
                    </button>
                </div>
            </div>

            <input type="checkbox" id="toggle"/>

        </nav>

    );
}
export default navBar;