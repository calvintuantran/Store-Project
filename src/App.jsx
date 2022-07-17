import moon from "./moon.png";
import land from "./land.png";
import cat from "./cat.gif";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  //jump around to pages more quickly

  return (
    <div>
      <Parallax pages={4} >
        {/*Pages of the wefbsite */}
        {/*factor => sets the page on different sides */}
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{ backgroundImage: `url(${moon})`, backgroundSize: "cover" }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed ={1}
          factor={4}
          style ={{backgroundImage : `url(${land})`, backgroundSize: 'cover'}}>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.5, end: 3.2 }}
          style={{ textAlign: "center" }}
        >
          <img src={cat} />
        </ParallaxLayer>
        {/*Each layer is a page that takes up the entire screen */}
        {/* offset => starts on the set*/}
        {/*Each layer is a page that takes up the entire screen */}
      </Parallax>
    </div>
  );
}

export default App;
