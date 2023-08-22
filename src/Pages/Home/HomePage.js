import React from 'react'
import Slider from '../../Components/Home/Slider'
import HomeCatogre from '../../Components/Home/HomeCatogre'
import CardProdactcomponent from '../../Components/Products/CardProdactcomponent'
import Picsection from '../../Components/Home/Picsection'
import BrandFeatured from '../../Components/Brand/BrandFeatured'



function HomePage() {
  return (
    <div className='font' style={{minHeight:'670px'}}>
       
       <Slider/>
       <HomeCatogre/>
       <CardProdactcomponent titl="Best Selery" btntitle="More"/>
       <Picsection/>
       <CardProdactcomponent titl="Most Rated" btntitle="More"/>
       <BrandFeatured/>
      
    </div>
  )
}
export default HomePage

