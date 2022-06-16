import React from "react";
export default class ShopItemFunc extends React.Component  {

    constructor(props) {
        super(props)
            Object.assign(this , props.item)
    }
    render() {
        return <>
            <div className="main-content">
                <h2>{this.brand}</h2>
                <h1>{this.title}</h1>
                <h3>{this.description}</h3>
                <div className="description">
                    {this.descriptionFull}
                </div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">{this.currency + this.price}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        </>;
    }


}