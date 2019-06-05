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
        ],
        backgroundImage: './padel-1.jpg'
    },
    {
        title: 'Erbjudanden',
        items: [
            'Morgontennis (10 klipp) - 700 kr',
            'Sommartennis (Obegränsat) - 1 495 kr',
            'PT Klippet (10 klipp) - 5 000 kr',
            'Sommarpadel (Obegränsat) - 1 495 kr'
        ]
    },
    {
        image: './A_Logo_Slogan_01.png'
    },
    {
        title: 'Kurser',
        items: [
            'Juniorträning 7-18 år',
            'Vuxenkurs',
            'Sommarkurs JUNIOR vecka 27 2019',
            'Sommarkurs JUNIOR vecka 29 2019',
            'Sommarkurs VUXNA vecka 27 2019',
            'Sommarkurs VUXNA vecka 29 2019'
        ],
        backgroundImage: './padel-2.jpg'
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
                    {item.title &&
                        <h3>{item.title}</h3>
                    }
                    {item.items &&
                        <ul>
                            {this.renderListItem(item.items)}
                        </ul>
                    }
                    {item.image &&
                        <img src={item.image} style={{width: '100%'}} />
                    }
                </li>
        );
    }
	
	render() {
		return (
            <FullscreenContext.Provider value={{ showFullscreen: this.state.showFullscreen, card: data[this.state.activeIndex] }}>
                <ul className="aside" style={{ backgroundImage: './A_Logo_Slogan_01.png' }}>
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
                console.log(context);
                return (
                    <div className={"backdrop " + (context.showFullscreen ? 'backdrop--show' : '')} style={{ backgroundImage: (context.card && context.card.backgroundImage ? `url(${context.card.backgroundImage })` : '') }}></div>
                )
            }}
        </FullscreenContext.Consumer>
    )
}


export { Sidemenu };