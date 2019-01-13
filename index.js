//const myElement = document.createElement('h1');
//myElement.className = "orange";
//myElement.innerText= 'Hello from Karan ;-)';

//const myReactElement = React.createElement('h1',
//    {className:'orange'},
//    'Hello from Karan ;-)');

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
    }

    tick() {
        this.setState(() => {
            return ({
                time: new Date().toLocaleString()
            });
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    render() {
        return React.createElement("h1", {
            className: "orange"
        }, "Hello from Karan ;-)" + this.state.time );
    }
};

//const Hello = function(props){
//    return React.createElement("h1",{
//        className: 'orange'
//    },"Hello from Karan ;-)" + props.time);
//}
//rootElement.appendChild(myElement);
ReactDOM.render(
    React.createElement(Hello, {time: new Date().toLocaleTimeString()},
        null),
    document.getElementById('app')
);
