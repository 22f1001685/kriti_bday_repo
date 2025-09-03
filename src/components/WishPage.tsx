import {MagicText} from "@/components/ui/magic-text";
import {DotPattern} from "@/components/ui/dot-pattern";
import {cn} from "@/components/libs/utils";

const Demo = () => {
  return (
    <div className="relative h-screenmd:py-24 bg-gradient-to-br from-black via-gray-900 to-black shadow-xl">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="w-full md:px-8">
        <MagicText
          text={
            "Wishing  you  a  very  Happy  Birthday,  Megha!  Keep  Smiling  and  shining  bright  this  year  and  always.  I  wish  for  you  is  that  this  year  becomes  all  you  want  it  to.....  Your  dreams  stays  big.....  Your  worries  never  even  born... May  god  gives  you  everything  you  desire.  You  deserve  all  the  wonderful  things  life  has  to  offer...  So  have  great  fun  today,  tomorrow  and  always.  Keep  Growing  and  be  the  bestest  version of  yourself.. and  a  special  thank  you  to  the  god  who  has  sent  me  such  a  purest  soul.  Thank  you  for  eveything  you  have  done  so  far  for  me.  Each  and  everyday  with  you  is  very  special  and  I  hope  that  you  keep  smiling  and  be  chaotic  throughout  your  life.  Every  day,  every  moemories,  every  fight  is  just  very  memorable.  I  adore  every  side  of  yours  either  it's  fun  side  or  it's  emotional  side.  "
          }
        />
      </div>
    </div>
  );
};

export default Demo;
