import React from "react";
export default function Progressor() {
  return (
    <div>
      <div className="flex flex-start max-w-screen-lg w-full mx-auto mt-10">
        <div className="w-full">
            <div className="flex items-center w-full">
          <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
            <span className="text-base text-color-black font-bold">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-blue-500"></div>
        </div>
         <div className="mt-2 mr-4"> 
            <h6 className="text-base font-bold text-amber-500">Step:01 Choose your Food</h6>
            <p className="italic text-xs text-white">Explore Our delicious menu and select your meal</p>
         </div>
      </div>
      <div className="w-full">
            <div className="flex items-center w-full">
          <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
            <span className="text-base text-color-black font-bold">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-blue-500"></div>
        </div>
         <div className="mt-2 mr-4"> 
            <h6 className="text-base font-bold text-amber-500">Step:02 Coustomize Your Order</h6>
            <p className="italic text-xs text-white">Tailor your meal to your taste</p>
         </div>
         </div>
         <div className="w-full">
            <div className="flex items-center w-full">
          <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
            <span className="text-base text-color-black font-bold">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-blue-500"></div>
        </div>
         <div className="mt-2 mr-4"> 
            <h6 className="text-base font-bold text-amber-500">Step:03 Place your Order</h6>
            <p className="italic text-xs text-white">Ready to eat proced to <br/>
             checkout and complete your order</p>
         </div>
      </div>
    </div>
    </div>
  );
}
