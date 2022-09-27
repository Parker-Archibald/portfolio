import React, {Component} from 'react';
import '../Styles/Solitude.css';

const heartsImageURL = '../Styles/Pictures/hearts.png';
let allCards = [];

            allCards.Spades = [
                {
                    name: 'A',
                    suite: 'spades', 
                },
                {
                    name: 1,
                    symbol: 'spades', 
                },
                {
                    name: 2,
                    symbol: 'spades', 
                },
                {
                    name: 3,
                    symbol: 'spades', 
                },
                {
                    name: 4,
                    symbol: 'spades', 
                },
                {
                    name: 5,
                    symbol: 'spades', 
                },
                {
                    name: 6,
                    symbol: 'spades', 
                },
                {
                    name: 7,
                    symbol: 'spades', 
                },
                {
                    name: 8,
                    symbol: 'spades', 
                },
                {
                    name: 9,
                    symbol: 'spades', 
                },
                {
                    name: 10,
                    symbol: 'spades', 
                },
                {
                    name: 'J',
                    symbol: 'spades', 
                },
                {
                    name: 'Q',
                    symbol: 'Diamonds', 
                },
                {
                    name: 'K',
                    symbol: 'spades', 
                }
            ]
    
            allCards.Clubs = [
                {
                    name: 'A',
                    suite: 'Clubs', 
                },
                {
                    name: 1,
                    symbol: 'Clubs', 
                },
                {
                    name: 2,
                    symbol: 'Clubs', 
                },
                {
                    name: 3,
                    symbol: 'Clubs', 
                },
                {
                    name: 4,
                    symbol: 'Clubs', 
                },
                {
                    name: 5,
                    symbol: 'Clubs', 
                },
                {
                    name: 6,
                    symbol: 'Clubs', 
                },
                {
                    name: 7,
                    symbol: 'Clubs', 
                },
                {
                    name: 8,
                    symbol: 'Clubs', 
                },
                {
                    name: 9,
                    symbol: 'Clubs', 
                },
                {
                    name: 10,
                    symbol: 'Clubs', 
                },
                {
                    name: 'J',
                    symbol: 'Clubs', 
                },
                {
                    name: 'Q',
                    symbol: 'Clubs', 
                },
                {
                    name: 'K',
                    symbol: 'Clubs', 
                }
            ]
    
            allCards.Diamonds = [
                {
                    name: 'A',
                    suite: 'Diamonds', 
                },
                {
                    name: 1,
                    symbol: 'Diamonds', 
                },
                {
                    name: 2,
                    symbol: 'Diamonds', 
                },
                {
                    name: 3,
                    symbol: 'Diamonds', 
                },
                {
                    name: 4,
                    symbol: 'Diamonds', 
                },
                {
                    name: 5,
                    symbol: 'Diamonds', 
                },
                {
                    name: 6,
                    symbol: 'Diamonds', 
                },
                {
                    name: 7,
                    symbol: 'Diamonds', 
                },
                {
                    name: 8,
                    symbol: 'Diamonds', 
                },
                {
                    name: 9,
                    symbol: 'Diamonds', 
                },
                {
                    name: 10,
                    symbol: 'Diamonds', 
                },
                {
                    name: 'J',
                    symbol: 'Diamonds', 
                },
                {
                    name: 'Q',
                    symbol: 'Diamonds', 
                },
                {
                    name: 'K',
                    symbol: 'Diamonds', 
                }
            ]
    
            allCards.Hearts = [
                {
                    name: 'A',
                    suite: 'Hearts', 
                    styling: {
                        
                    }
                },
                {
                    name: 2,
                    suite: 'Hearts', 
                },
                {
                    name: 3,
                    suite: 'Hearts', 
                },
                {
                    name: 4,
                    suite: 'Hearts', 
                },
                {
                    name: 5,
                    suite: 'Hearts', 
                },
                {
                    name: 6,
                    suite: 'Hearts', 
                },
                {
                    name: 7,
                    suite: 'Hearts', 
                },
                {
                    name: 8,
                    suite: 'Hearts', 
                },
                {
                    name: 9,
                    suite: 'Hearts', 
                },
                {
                    name: 10,
                    suite: 'Hearts', 
                },
                {
                    name: 'J',
                    suite: 'Hearts', 
                },
                {
                    name: 'Q',
                    suite: 'Hearts', 
                },
                {
                    name: 'K',
                    suite: 'Hearts', 
                }
            ]


class Solitude extends Component {
    render() {

        // Timer
 
        let start = false;
        let seconds = 0;
        let minutes = 0;

        function startGame() {
            start = true;
            playTime();
        }

        function stopGame() {
            start = false;
            
            document.getElementById('timer').innerHTML = minutes + ':' + seconds;

            document.getElementById('startTimeButton').className = 'startTimeButton';
            document.getElementById('pauseButton').className = 'pauseButton';

            clearTimeout(playTime);
        }

        function playTime() {
            
            if(start === true) {
                seconds = parseInt(seconds);
                minutes = parseInt(minutes);

                document.getElementById('startTimeButton').className = 'startTimeButtonAfter';
                document.getElementById('pauseButton').className = 'pauseButtonAfter';

                seconds = seconds + 1;

                if(seconds === 60) {
                    minutes = minutes + 1;
                    seconds = 0;
                }

                if(seconds < 10 || seconds === 0) {
                    seconds = '0' + seconds;
                }
                if(minutes < 10 || minutes === 0) {
                    minutes = '0' + minutes;
                }

                document.getElementById('timer').innerHTML = minutes + ':' + seconds

                setTimeout(playTime, 1000);
            }

            else if(start === false) {
                document.getElementById('timer').innerHTML = minutes + ':' + seconds;

                document.getElementById('startTimeButton').className = 'startTimeButton';
                document.getElementById('pauseButton').className = 'pauseButton';
            }
        }

        //Moving cards

        let positionCard1 = false;
        let positionCard2 = false;

        // const handleAceClick = (e) => {
        //     document.getElementById(e.target.id).style.backgroundColor= 'yellow';
        // }

        const handleClickCard = (e) => {
            
            // const element = document.getElementById(e.target.id);
            // let positionTop = element.offsetTop;
            // let positionLeft = element.offsetLeft;

            // if(positionCard1 === false) {
            //     positionCard1 = {
            //         fromTop: positionTop,
            //         fromLeft: positionLeft,
            //         id: e.target.id
            //     }
            //     alert(positionCard1.fromTop)
                
            // }
            // else if(positionCard2 === false) {
                
            //     positionCard2 = {
            //         fromTop: positionTop,
            //         fromLeft: positionLeft
            //     }
            //     alert(positionCard2.fromTop)
            //     document.getElementById(positionCard1.id).style.top = 0 + 'vw';
            //     document.getElementById(positionCard1.id).style.top = positionCard2.fromTop + 'px';
            //     document.getElementById(positionCard1.id).style.zIndex = 200;
            //     positionCard1 = false;
            //     positionCard2 = false;
            // }

            let element = document.getElementById(e.target.id);

            if(e.target.id.includes('Container') === false) {
                element = document.getElementById(element.parentNode.id);
            }

            if(positionCard2 === false && positionCard1 === false) {
                positionCard1 = element;
                alert(element.parentNode.id + ' ' + e.target.id)
            }
            else if(positionCard1 != false && positionCard2 === false) {
                positionCard2 = element.parentNode.id;
                document.getElementById(element.parentNode.id).appendChild(positionCard1);
                positionCard1 = false;
                positionCard2 = false;
                
            }
        }

        const AceOfHearts = () => {
            return(
                <div id='aceOfHeartsContainer' className='cardStyle' onClick={handleClickCard}>
                    <div id='numberTop'>{allCards.Hearts[0].name}</div>
                    <div id='aceOfHearts'></div>
                    <div id='numberBottom'>{allCards.Hearts[0].name}</div>
                </div>
            )
        }

        const TwoOfHearts = () => {
            return(    
                <div id='twoOfHeartsContainer' className='cardStyle' onClick={handleClickCard}>
                    <div id='numberTop'>{allCards.Hearts[1].name}</div>
                    <div id='twoOfHearts'></div>
                    <div id='twoOfHeartsUpsideDown'></div>
                    <div id='numberBottom'>{allCards.Hearts[1].name}</div>
                </div>
            )
        }

        const ThreeOfHearts = () => {
            return(
            <div id='threeOfHeartsContainer' className='cardStyle' onClick={handleClickCard}>
                <div id='numberTop'>{allCards.Hearts[2].name}</div>
                <div id='threeOfHearts'></div>
                <div id='threeOfHeartsUpsideDown'></div>
                <div id='threeOfHeartsUpsideDown1'></div>
                <div id='numberBottom'>{allCards.Hearts[2].name}</div>
            </div>
            )
        }

        const FourOfHearts = () => {
            return(
                <div id='fourOfHeartsContainer' className='cardStyle' onClick={handleClickCard}>
                    <div id='numberTop'>{allCards.Hearts[3].name}</div>
                    <div id='fourOfHearts'></div>
                    <div id='fourOfHearts1'></div>
                    <div id='fourOfHeartsUpsideDown'></div>
                    <div id='fourOfHeartsUpsideDown1'></div>
                    <div id='numberBottom'>{allCards.Hearts[3].name}</div>
                </div>
            )
        }

        const FiveOfHearts = () => {
            return(
                <div id='fiveOfHeartsContainer' className='cardStyle' onClick={handleClickCard}>
                    <div id='numberTop'>{allCards.Hearts[4].name}</div>
                    <div id='fiveOfHearts'></div>
                    <div id='fiveOfHearts1'></div>
                    <div id='fiveOfHearts2'></div>
                    <div id='fiveOfHeartsUpsideDown'></div>
                    <div id='fiveOfHeartsUpsideDown1'></div>
                    <div id='numberBottom'>{allCards.Hearts[4].name}</div>
                </div>
            )
        }

        const SixOfHearts = () => {
            return(
                <div id='sixOfHeartsContainer' className='cardStyle' onClick={handleClickCard}>
                    <div id='numberTop'>{allCards.Hearts[5].name}</div>
                    <div id='sixOfHearts'></div>
                    <div id='sixOfHearts1'></div>
                    <div id='sixOfHearts2'></div>
                    <div id='sixOfHearts3'></div>
                    <div id='sixOfHeartsUpsideDown'></div>
                    <div id='sixOfHeartsUpsideDown1'></div>
                    <div id='numberBottom'>{allCards.Hearts[5].name}</div>
                </div>
            )
        }

        const SevenOfHearts = () => {
            return(
                <div id='sevenOfHeartsContainer' className='cardStyle' onClick={handleClickCard}>
                    <div id='numberTop'>{allCards.Hearts[6].name}</div>
                    <div id='sixOfHearts'></div>
                    <div id='sixOfHearts1'></div>
                    <div id='sixOfHearts2'></div>
                    <div id='sixOfHearts3'></div>
                    <div id='sevenOfHearts'></div>
                    <div id='sixOfHeartsUpsideDown'></div>
                    <div id='sixOfHeartsUpsideDown1'></div>
                    <div id='numberBottom'>{allCards.Hearts[6].name}</div>
                </div>
            )
        }

        const EightOfHearts = () => {
            return(
                <div id='eightOfHeartsContainer' className='cardStyle' onClick={handleClickCard}>
                    <div id='numberTop'>{allCards.Hearts[7].name}</div>
                    <div id='sixOfHearts'></div>
                    <div id='sixOfHearts1'></div>
                    <div id='sixOfHearts2'></div>
                    <div id='sixOfHearts3'></div>
                    <div id='sevenOfHearts'></div>
                    <div id='sixOfHeartsUpsideDown'></div>
                    <div id='sixOfHeartsUpsideDown1'></div>
                    <div id='eightOfHearts'></div>
                    <div id='numberBottom'>{allCards.Hearts[7].name}</div>
                </div>
            )
        }

        const NineOfHearts = () => {
            return(
                <div id='nineOfHeartsContainer' className='cardStyle' onClick={handleClickCard}>
                    <div id='numberTop'>{allCards.Hearts[8].name}</div>
                    <div id='nineOfHearts'></div>
                    <div id='nineOfHearts1'></div>
                    <div id='nineOfHearts2'></div>
                    <div id='nineOfHearts3'></div>
                    <div id='nineOfHearts4'></div>
                    <div id='nineOfHeartsUpsideDown'></div>
                    <div id='nineOfHeartsUpsideDown1'></div>
                    <div id='nineOfHeartsUpsideDown2'></div>
                    <div id='nineOfHeartsUpsideDown3'></div>
                    <div id='numberBottom'>{allCards.Hearts[8].name}</div>
                </div>
            )
        }

        const TenOfHearts = () => {
            return(
                <div id='tenOfHeartsContainer' className='cardStyle' onClick={handleClickCard}>
                    <div id='numberTop'>{allCards.Hearts[9].name}</div>
                    <div id='nineOfHearts'></div>
                    <div id='nineOfHearts1'></div>
                    <div id='nineOfHearts2'></div>
                    <div id='nineOfHearts3'></div>
                    <div id='nineOfHearts4'></div>
                    <div id='tenOfHearts'></div>
                    <div id='nineOfHeartsUpsideDown'></div>
                    <div id='nineOfHeartsUpsideDown1'></div>
                    <div id='nineOfHeartsUpsideDown2'></div>
                    <div id='nineOfHeartsUpsideDown3'></div>
                    <div id='numberBottom'>{allCards.Hearts[9].name}</div>
                </div>
            )
    }

    const JackOfHearts = () => {
        return(
            <div id='jackOfHeartsContainer' className='cardStyle' onClick={handleClickCard}>
                <div id='numberTop'>{allCards.Hearts[10].name}</div>
                <div id='jackOfHearts'></div>
                <div id='jackOfHearts1'></div>
                <div id='jackOfHearts2'></div>
                <div id='numberBottom'>{allCards.Hearts[10].name}</div>
            </div>
        )
    }

    const QueenOfHearts = () => {
        return(
            <div id='queenOfHeartsContainer' className='cardStyle' onClick={handleClickCard}>
                <div id='numberTop'>{allCards.Hearts[11].name}</div>
                <div id='queenOfHearts'></div>
                <div id='jackOfHearts1'></div>
                <div id='jackOfHearts2'></div>
                <div id='numberBottom'>{allCards.Hearts[11].name}</div>
            </div>
        )
    }

    const KingOfHearts = () => {
        return(
            <div id='kingOfHeartsContainer' className='cardStyle' onClick={handleClickCard}>
                <div id='numberTop'>{allCards.Hearts[12].name}</div>
                <div id='kingOfHearts'></div>
                <div id='jackOfHearts1'></div>
                <div id='jackOfHearts2'></div>
                <div id='numberBottom'>{allCards.Hearts[12].name}</div>
            </div> 
        )
    }
    
        return(
            <div id='solitudeContainer'>
                <div id='timerContainer'>
                    <div id='startTimeButton' className='startTimeButton' onClick={startGame}>Start</div>
                    <div id='pauseButton' className='pauseButton' onClick={stopGame}>Pause</div>
                    <div id='timer'>00:00</div> 
                </div>
                <div id='cards'>
                    <div id='firstSlot'>
                        <AceOfHearts/>
                        <TwoOfHearts/>
                        <ThreeOfHearts/>
                    </div> 
                <div id='secondSlot'>
                        <FourOfHearts/>
                        <FiveOfHearts/>
                        <SixOfHearts/>
                </div>
                <div id='thirdSlot'>
                    <SevenOfHearts/>
                    <EightOfHearts/>
                    <NineOfHearts/>
                </div>
                <div id='fourthSlot'>
                    <TenOfHearts/>
                </div>
                <div id = 'fifthSlot'>
                    <JackOfHearts/>
                </div>
                <div id='sixthSlot'>
                    <QueenOfHearts/>
                </div>
                <div id='seventhSlot'>
                    <KingOfHearts/>
                </div>
            </div>
        </div>  
          
        )
    }
}

export default Solitude;