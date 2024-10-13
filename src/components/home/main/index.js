import DeepLink from "./deepLink"
import AmazingOffer from "./amazingOffer"
import FreshIncredibleOfferProducts from "./freshIncredibleOfferProduts"
import PopularBrands from "./popularBrands"
import MainBanners from "./banner"
import MainCategory from "./mainCategory"
import HotProducts from "./hotProducts"
import RecomendationProducts from "./recomendationProducts"
import Digiclub from "./digiclub"
import SelectedAuctionProducts from "./selectedAuctionProducts"
import MagazinePosts from "./magazinePosts"
import PageAccessibilites from "./PageAccessibilites"

export default function Main() {
    return <main className="m-auto w-full max-w-[1336px]">
        <DeepLink />
        <AmazingOffer />
        <FreshIncredibleOfferProducts />
        <MainBanners identifier="banners_home_web_zone_top" aspectRatio={4/3}/>
        <MainCategory />
        <MainBanners identifier="banners_home_web_zone_middle" aspectRatio={5/2}/>
        <PopularBrands />
        <MainBanners identifier="banners_home_web_zone_middle_third" aspectRatio={5/2}/>
        <RecomendationProducts part={1} />
        <Digiclub />
        <HotProducts identifier="best_selling_products_ordered" prefixSelector="best-ordered"/>
        <RecomendationProducts part={2} />
        <MainBanners identifier="banners_home_web_zone_bottom" aspectRatio={8/1}/>
        <SelectedAuctionProducts identifier="selling_and_sales_products_grid"/>
        <HotProducts identifier="trending_products_ordered" prefixSelector="trending-ordered"/>
        <MagazinePosts />
        <PageAccessibilites />
    </main>
}