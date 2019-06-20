import React from 'react';

import Modal from './Modal';
import JoinableSlots from './JoinableSlots';
import Activities from './Activities';
import You from './You';

const FullscreenContext = React.createContext();

const data = [
    {
        title: 'Speltillfällen',
        items2: [
            {
                title: '18:00',
                desc: <span>2/4 lediga - <b>Bana 2</b></span>
            },
            {
                title: '19:00',
                desc: <span>2/4 lediga - <b>Bana 8</b></span>
            },
            {
                title: '12/7',
                desc: <span>1/4 lediga - <b>Bana 4</b></span>,
                borderTop: true
            }
        ],
        component: <JoinableSlots />
    },
    {
        title: 'Aktiviteter',
        items2: [
            {
                title: '29/6',
                desc: <span>Gruppträning med Leffe</span>
            },
            {
                title: '6/7',
                desc: <span>Sommarkurs JUNIOR</span>
            },
            {
                title: '12/7',
                desc: <span>Minitunering i padel</span>
            }
        ],
        component: <Activities />
    },
    {
        title: 'För dig',
        items2: [
            {
                desc: <span><b>Morgontennis</b> (10 klipp) - <b>700 kr</b></span>
            },
            {
                desc: <span><b>PT Klippet</b> (10 klipp) - <b>4 995 kr</b></span>
            },
            {
                desc: <span><b>Sommarklippet</b> (10 klipp) - <b>4 995 kr</b></span>
            }
        ],
        component: <You />
    },
    {
        image: './shoe_ad3.png',
        notInSlideshow: true
    },
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
        //this.showNextCard();
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
    
    renderListItem2(listItems) {
        return listItems.map(item =><li className={'card__list__item ' + (item.borderTop ? 'card__list__item--border ' : '')} key={item.desc}><b style={{ marginRight: '2rem'}}>{item.title && item.title}</b>{item.desc}</li>)
    }
    
    renderCard() {
        return data.map((item, index) =>
            <React.Fragment>
                <li key={item.title} className={"card"}>
                    {item.title &&
                        <h3 className={"aside__card__headline " + (index - 1 === this.state.activeIndex && !this.state.showFullscreen ? "aside__card__headline--animate" : "")}>{item.title}</h3>
                    }
                    {item.items &&
                        <ul>
                            {this.renderListItem(item.items)}
                        </ul>
                    }
                    {item.items2 && 
                        <ul className="card__list">
                            {this.renderListItem2(item.items2)}
                        </ul>
                    }
                    {item.image &&
                        <img src={item.image} style={{width: '100%'}} />
                    }
                </li>
                <Modal show={index === this.state.activeIndex && this.state.showFullscreen}>{item.component}</Modal>
            </React.Fragment>
        );
    }
	
	render() {
		return (
            <FullscreenContext.Provider value={{ showFullscreen: this.state.showFullscreen, card: data[this.state.activeIndex] }}>
                <ul className="aside">
                    {this.renderCard()}
                </ul>
                {Backdrop(data[this.state.activeIndex])}
            </FullscreenContext.Provider>
		)
	}
}

const Backdrop = (item) => {
    return (
        <FullscreenContext.Consumer>
            {context => {
                return (
                    <div className={"backdrop " + (context.showFullscreen && !item.notInSlideshow ? 'backdrop--show' : '')} style={{ backgroundImage: (context.card && context.card.backgroundImage ? `url(${context.card.backgroundImage })` : '') }}></div>
                )
            }}
        </FullscreenContext.Consumer>
    )
}


export { Sidemenu };