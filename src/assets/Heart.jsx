function Heart () {
    return (
        <div className="container">
            <img 
                src="./img/heart.png"
                alt="Heart"
                className="images"
            />

            {/* The Blur Box */}
            <div className="blur-box">
                <p>Apple helps lower "bad" LDL cholesterol,<br/>
                     reduce blood pressure and stroke risk</p>
            </div>
        </div>
    );
}

export default Heart
