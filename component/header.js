class Header {
    constructor(headername){
        this.headername = headername;
        console.log("constructor header")
    }
    draw(){
        let txtHtml= `<div class="header">
        <a href="#default" class="logo">${this.headername}</a>
        <div class = "header-right">
            <a class="active" href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
        </div>`;
            return txtHtml;
    }
}
export default Header;