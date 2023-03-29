
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='header'>  <nav>
      <div c className="mainContainer">
        <img src={require("./img/logo.png")} alt="logo" className="logo" />

        <img src={require("./img/car-icons-16.png")} alt="moto" className="carIcon" />
        <a href="motors"
          className="find"
>
          MOTORS</a>

        <img src={require("./img/mall2.png" ) }alt="properties"className="mall" /><a
          href="properteis"
          className="find">
          PROPERTY</a>
      </div>
    </nav>
    <div className="searchbar">
      <img src={require("./img/olxlogo.jpg")} alt="logo" className="olxLogo" />
      <div className="srcIcon">
        <img src={require("./img/search.png")} alt="" className="serchImg" />
        <input type="text" name="" placeholder="Pakistan" className="pak"  />
    
      </div>
      <div className="findContainer">
        <div className="findInput">Find Cars, Mobile Phones and more...</div>
        <div className="findSearch">
           <img src={require("./img/searchwhite.png")} alt="" 
           className="findImg"
           />
            </div>
      </div>
     
      <a href="/" class="login"> Login</a>
      <button class="select">+select</button>
    </div>
    </div> 
    <div className="categories">
      <h3>ALL CATEGORIES</h3>
      <img src={require("./img/anglearrow.png")} alt="aero" width="2%"  className="categories-img"/>
      <a href='/'>Mobiles Phones</a>
      <a href='/'>Car</a>
      <a href='/'>Motorcycle</a>
      <a href='/'>Houses</a>
      <a href='/'>TV-Video-Audio</a>
      <a href='/'>Tablets</a>
      <a href='/'>Land & Plots</a>
    </div>
    <div class="add1">
      <img src={require("./img/add26 (1).png")} alt="add26" className="ad-img" />
    </div>

    <div className="ads">
      <img src={require("./img/add1.png")} alt="" className='addsImg'/>
  
     
    </div>
    <div class="recom">
      <h2 className='recomHeading'>Fresh recommendations</h2>
    </div>
    <div class="sell">
      <div class="sellContainer"><img src={require("./img/add2.png")} alt="add2" style={{width: '100%'}} /></div>
      <div class="sellContainer"><img src={require("./img/add3.png")} alt="add3" style={{width: '100%'}}/></div>
      <div class="sellContainer"><img src={require("./img/add4.png")} alt="add4" style={{width: '100%'}}/></div>
      <div class="sellContainer"><img src={require("./img/add5.png")} alt="add5"style={{width: '100%'}} /></div>
      <div class="sellContainer"><img src={require("./img/add7.png")} alt="add7"style={{width: '100%'}} /></div>
      <div class="see sellContainer" >
        <p class="fw-bolder">Want to see your stuff here?</p>
        <p class="fw-light">
          Make some extra cash by selling things in your community. Go on, it's
          quick and easy.
        </p>
        <button class="selling">start selling</button>
      </div>
      <div className="sellContainer"> <img src={require("./img/add9.png")} alt="add9" style={{width: '100%'}}/></div>
      <div className="sellContainer">
        <img src={require("./img/add9.png")} alt="add9" style={{width: '100%'}}/>
        </div>
      <div className="sellContainer">
        <img src={require("./img/add10.png")} alt="add10" style={{width: '100%'}}/>
        </div>
      <div className="sellContainer"><img src={require("./img/add11.png")} alt="add11" style={{width: '100%',}}/>
      </div>
      <div className="sellContainer"><img src={require("./img/add12.png")} alt="add12" style={{width: '100%'}}/>
      </div>
      <div className="sellContainer"><img src={require("./img/add13.png" )}alt="add13" style={{width: '100%'}}/>
      </div>
      <div className="sellContainer"><img src={require("./img/add14.png")} alt="add14" style={{width: '100%'}}/>
      </div>
      <div className="sellContainer"><img src={require("./img/add15.png")} alt="add15" style={{width: '100%'}}/>
      </div>

      <div className="sellContainer"><img src={require("./img/add16.png")} alt="add16" style={{width: '100%'}}/>
      </div>
      <div className="sellContainer"><img src={require("./img/add17.png")} alt="add17" style={{width: '100%'}}/>
      </div>
      <div className="sellContainer"><img src={require("./img/add18.png")} alt="add18" style={{width: '100%'}}/>
      </div>
      <div className="sellContainer"><img src={require("./img/add19.png")} alt="add19" style={{width: '100%'}}/>
      </div>
      <div className="sellContainer"><img src={require("./img/add20.png")} alt="add20" style={{width: '100%'}}/>
      </div>
      <div className="sellContainer"><img src={require("./img/add21.png")} alt="add21" style={{width: '100%'}}/>
      </div>
      <div className="sellContainer"><img src={require("./img/add22.png")} alt="add22" style={{width: '100%'}}/>
      </div>
      <div className="sellContainer"><img src={require("./img/add23.png")} alt="add23" style={{width: '100%'}}/>
      </div>
      <div className="sellContainer"><img src={require("./img/add24.png")} alt="add24" style={{width: '100%'}}/>
      </div>
      <div className="sellContainer"><img src={require("./img/add25.png")} alt="add25" style={{width: '100%'}}/>
      </div>
    </div>
    <div class="btn"><button class="btns">Load more</button></div>
    <div class="promote">
      <div class="band"><img src={require("./img/promo.png")} alt="promo" style={{width: '100%'}}/></div>
      <div class="prom">
        <h3 class="fw-bold">TRY THE OLX APP</h3>
        <p class="promP">
          Buy, sell and find just about anything using the app on your mobile.
        </p>
      </div>

      <div class="prom2">
        <p class="pera">GET YOUR APP TODAY</p>
        <div class="play">
         
            <img src={require("./img/appstore.jpg")} alt="appstore" class="store1" />
        
          
            <img src={require("./img/playstorelogo.jpg")} alt="logo" class="store2" />

          
          <img src={require("./img/appG.avif")} alt=""class="store1" />
        </div>
      </div>
    </div>
    <div class="lower">
      <ul class="lower-list">
        <p class="fw-semibold">POPULAR CATEGORIES</p>
        <li class="text-muted"><a href="/" class="tags">Cars</a></li>
        <li class="text-muted"><a href="/" class="tags">Flate for rent</a></li>
        <li class="text-muted"><a href="/" class="tags">Jobs</a></li>
        <li class="text-muted"><a href="/" class="tags">Mobile Phones</a></li>
      </ul>
      <ul class="lower-list">
        <p class="fw-semibold">TRENDING SEARCHES</p>
        <li class="text-muted"><a href="/" class="tags">Bikes</a></li>
        <li class="text-muted"><a href="/" class="tags">Watches</a></li>
        <li class="text-muted"><a href="/" class="tags">Books</a></li>
        <li class="text-muted"><a href="/" class="tags">Dogs</a></li>
      </ul>
      <ul class="lower-list">
        <p class="fw-semibold">ABOUT US</p>
        <li class="text-muted"><a href="/" class="tags">About OLX Group</a></li>
        <li class="text-muted"><a href="/" class="tags">OLX Blog</a></li>
        <li class="text-muted"><a href="/" class="tags">Contact Us</a></li>
        <li class="text-muted">
          <a href="/" class="tags">OLX for Businesses</a>
        </li>
      </ul>
      <ul class="lower-list">
        <p class="fw-semibold">OLX</p>
        <li class="text-muted"><a href="/" class="tags">Help </a></li>
        <li class="text-muted"><a href="/" class="tags">Sitemap</a></li>
        <li class="text-muted">
          <a href="/" class="tags">Legal &amp; Privacy information</a>
        </li>
    
      </ul>
      <div class="logo-app">
        <p class="fw-semibold">FOLLOW US</p>
        <img
          src={require("./img/facebooklogo.png")}
          alt="facebooklogo"
          class="lower-logo"
          width="10%"
        />
        <img
          src={require("./img/twiterlogo.png")}
          alt="twitterlogo "
          class="lower-logo"
          width="10%"
        />
        <img
          src={require("./img/youtubelogo.png")}
          alt="youtube"
          class="lower-logo"
          width="10%"
        />
        <img
          src={require("./img/instalogo.png")}
          alt="instalogo"
          class="lower-logo"
          width="10%"
        />
        <div class="play">
         
            <img src={require("./img/appstore.jpg")} alt="appstore" width="30%" class="footerimg" />
        
          
            <img src={require("./img/playstorelogo.jpg")} alt="logo" width="30%"  class="footerimg"/>

          
          <img src={require("./img/appG.avif")} alt="" width="30%" class="footerimg" />
        </div>
      </div>
    </div>
    <div class="footer"> <h2 class="footerheading">Free Classifieds in Pakistan . © 2006-2023 OLX</h2> 
    
    </div>
    </div>
  );
}

export default App;
