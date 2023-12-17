import './Card.css'
function card(){
    return(

            <div className="card text-center d-inline-flex   " styles="width: 800rem;">
            <div className="card-body d-flex p-2 flex-column mb-3 justify-content-around">
                <h5 className="card-title">Nákup</h5>
                <a href="#" className="btn btn-primary rounded-pill   mx-auto  ">Podívat se na seznam</a>
                <button type="button" className="btn btn-danger rounded-pill  mx-auto">Odstranit</button>
            </div>
        </div>
    );
}
export default card;