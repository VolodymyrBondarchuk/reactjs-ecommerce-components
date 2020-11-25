import ProductCard from "../../components/product-card/product-card";
import Currency from "../../constants/currency";
import Color from "../../constants/color";
import Image from "../../constants/imgs";
import "./best-sellers.css"

const BestSellerPage = () => {

    return (
        <>
            <div className='best-seller-container'>
                <div className='best-seller-title'>Bestsellers</div>
                <ProductCard title='Nike Air Max 270'
                             subtitle='Nike'
                             price='195.80'
                             currency={Currency.DOLLAR}
                             img={Image.AIR_MAX_270}
                             imgShiftY={5}
                             backgroundColor={Color.PINK_LIGHT}/>

                <ProductCard title='Nike Air Max 90'
                             subtitle='Nike'
                             subtitleShiftY={-3}
                             price='195.80'
                             currency={Currency.DOLLAR}
                             img={Image.AIR_MAX_90}
                             imgShiftX={1}
                             backgroundColor={Color.WHITE}/>

                <ProductCard title='Nike Air Max Plus'
                             subtitle='Nike'
                             subtitleShiftY={-3}
                             price='195.80'
                             currency={Currency.DOLLAR}
                             img={Image.AIR_MAX_PLUS}
                             imgShiftX={-5}
                             imgShiftY={-2}
                             backgroundColor={Color.WHITE}/>
            </div>
        </>
    )
}

export default BestSellerPage