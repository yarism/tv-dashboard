import React from 'react';

const FullscreenContext = React.createContext();

const data = [
    {
        title: 'Aktiviteter',
        items: [
            '29/6 - Lär dig tennis',
            '2/7 - Hur yoga förbättrar din smash',
            '4/7 - Gruppträning med Leffe',
            '12/7 - Minitunering i padel',
            '14/7 - Gruppstretch'
        ]
    },
    {
        title: 'Nyheter',
        items: [
            '5/7 - Invigning!'
        ]
    },
    {
        title: 'Erbjudande',
    },
    {
        title: 'mjau',
    }
];

class Sidemenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showFullscreen: false,
            activeIndex: -1
        }
    }

    componentDidMount() {
		setInterval(this.update.bind(this), 10000)
	}
	
	update() {
        if (!this.state.showFullscreen) {
            this.showNextCard();
        }
        else {
            this.hideFullscreen();
        }
    };
    
    showNextCard() {
        this.setState({
            showFullscreen: true,
            activeIndex: this.nextCard()
        });
    }

    nextCard() {
        if (this.state.activeIndex === data.length - 1) {
            return 0;
        }
        else {
            return this.state.activeIndex + 1;
        }
    }

    hideFullscreen() {
        this.setState({
            showFullscreen: false
        });
    }

    renderListItem(listItems) {
        return listItems.map(item => <li key={item}>{item}</li>);
    }
    
    renderCard() {
        return data.map((item, index) =>
                <li key={item.title} className={"grid__card " + (index === this.state.activeIndex && this.state.showFullscreen ? 'grid__card--full ' : '') + (index !== this.state.activeIndex && this.state.showFullscreen ? 'grid__card--hide' : '') }>
                    <h3>{item.title}</h3>
                    {item.items &&
                        <ul>
                            {this.renderListItem(item.items)}
                        </ul>
                    }
                </li>
        );
    }
	
	render() {
		return (
            <FullscreenContext.Provider value={{ showFullscreen: this.state.showFullscreen }}>
                <ul className="aside">
                    {this.renderCard()}
                </ul>
                {Backdrop()}
            </FullscreenContext.Provider>
		)
	}
}

const Backdrop = () => {
    return (
        <FullscreenContext.Consumer>
            {context => {
                return (
                    <div className={"backdrop " + (context.showFullscreen ? 'backdrop--show' : '') }></div>
                )
            }}
        </FullscreenContext.Consumer>
    )
}


export { Sidemenu };