import Component from '../component/component';

class Body extends Component{
    constructor(){
        super();
    }
    draw (){
        let txtHtml = `<p> ini body</p>`; 
        return txtHtml;
        
    }
}

export default Body;