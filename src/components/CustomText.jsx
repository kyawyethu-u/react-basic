import React from 'react'

const CustomText = (props) => {
    /*const CustomText = (textVal) => {
        ... 
          <h1>{textVal}</h1>*/
  return (
    <div>
      <h1>{props.textVal}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum dignissim a,
         cum porttitor risus facilisis sociosqu vulputate tellus proin orci. 
         Suspendisse gravida turpis molestie blandit mollis pretium mi iaculis 
         phasellus feugiat rhoncus justo, dui lectus taciti integer aptent nibh risus 
         tincidunt ante euismod convallis. Ultricies eu curae mus ligula accumsan non
          in habitant vel fames, nunc quisque at vivamus senectus ullamcorper semper primis 
          purus hendrerit lobortis, condimentum odio porttitor gravida cursus himenaeos et
         aenean scelerisque.
      </p>
    </div>
  )
}

export default CustomText