import {MagicText} from "@/components/ui/magic-text";

import React from "react";

export default function FinalText() {
  return (
    <div className="relative bg-black py-20 px-5 md:px-10">
      <div className="max-w-8xl mx-auto">
        <h4 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white mb-12 px-4">
          Until we Meet Again
        </h4>
        <div className="w-full">
          <MagicText text="" />
        </div>
      </div>
    </div>
  );
}
