function Apple () {
    return (
        <div>
            <h1 className="Benefit">Benefit</h1>
            <p className="Benefit-down">of apple</p>

            {/* Scroll Contant */}
            <div style={{ height:"100vh"}}>
            </div>

            {/* Image */}
            <img 
                src="/img/apple.png"
                alt="Apple"
                className="images"
            />

        </div>
    );
}

export default Apple

