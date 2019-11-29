import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import sprites from '../assets/sprites.png';

export default class PokeMan1 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        var myItemObjectArray = new Array();
        var currentItemIndex = 5;
    }




    render() {
        const { data } = this.props;
        return (
            <>


                <section className="news-grid grid">
                    <div className="container">
                        <div className="row">


                            {
                                data && data.map((data1, index) => (


                                    <div className="pokemon--species" id="image_slider" key={index}>
                                        <div className="pokemon--species--name text-left" > {data1.name.toUpperCase()}    {index + 1}</div>
                                        <div className="pokemon--species--container">
                                            <div className="pokemon--species--sprite">
                                                <img src={`/sprites/${index + 1}.png`} alt={data1.name} />
                                            </div>

                                        </div>
                                    </div>

                                ))
                            }
                            <button className="button" >Prev</button>
                            <button className="button" style={{ float: 'right' }} onClick={this.next()}>Next</button>

                        </div>

                    </div>
                </section>
            </>
        )
    }
}




