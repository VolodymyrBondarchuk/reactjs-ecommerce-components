import Currency from '../../constants/currency'
import Color from '../../constants/color'
import Image from '../../constants/imgs'
import "./product-card.css"
import ShiftBy from '../utils/shift-by'

const ProductCard =
    ({
         title = '',
         subtitle = '',
         price = 0.0,
         currency = Currency.DOLLAR,
         img = Image.PRODUCT_IMG_DEFAULT,
         backgroundColor = Color.WHITE,
         titleColor = Color.ORANGE_LIGHT,
         subtitleColor = Color.GREY,
         priceColor = Color.DARK,

         imgShiftX = 0,
         imgShiftY = 0,
         titleShiftX = 0,
         titleShiftY = 0,
         subtitleShiftX = 0,
         subtitleShiftY = 0,
         priceShiftX = 0,
         priceShiftY = 0

     }) => {


    return (

        <>
            <div className='product-card-container' style={{backgroundColor:backgroundColor}}>


                <div className='product-card-image-container'>
                    <ShiftBy x={imgShiftX} y={imgShiftY}>
                        <img src={img}/>
                    </ShiftBy>
                </div>
                <div className='product-card-body'>
                    <ShiftBy x={titleShiftX} y={titleShiftY}>
                        <div className='product-card-title' style={{color:titleColor}}>
                            {title}
                        </div>
                    </ShiftBy>
                    <ShiftBy x={subtitleShiftX} y={subtitleShiftY}>
                        <div className='product-card-subtitle' style={{color:subtitleColor}}>
                            {subtitle}
                        </div>
                    </ShiftBy>
                    <ShiftBy x={priceShiftX} y={priceShiftY}>
                        <div className='product-card-price' style={{color:priceColor}}>
                            {currency.sign + '' + price}
                        </div>
                    </ShiftBy>
                </div>
            </div>
        </>
    )
}

export default ProductCard;