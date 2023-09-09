import ClockIcon from "../../assets/icon-clock.svg";
import EthereumIcon from "../../assets/icon-ethereum.svg";
import EquilibriumIcon from "../../assets/image-equilibrium.jpg";
import AvatarIcon from "../../assets/image-avatar.png";

export const NftPreview = () => {
   return (
      <div>
         <div>
            <div>
               <img src={EquilibriumIcon} alt='' />
            </div>
            <div>
               <h1>Equilibrium #3429</h1>
               <p>Our Equilibrium collection promotes balance and calm.</p>
               <div>
                  <div>
                     <img src={EthereumIcon} alt='' />
                     <span>0.041 ETH</span>
                  </div>

                  <div>
                     <img src={ClockIcon} alt='' />
                     <span>3 days left</span>
                  </div>
               </div>
               <hr />
               <div>
                  <img src={AvatarIcon} alt='' />
                  <p>Creation of Jules Wyvern</p>
               </div>
            </div>
         </div>
      </div>
   );
};
