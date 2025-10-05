import PasswordProtectedLetter from "@/components/PasswordProtectedLetter";
import {letterConfig} from "@/components/letterConfig";

export default function LetterPage() {
  return (
    <PasswordProtectedLetter
      password={letterConfig.password}
      letterContent={letterConfig.content}
      letterTitle={letterConfig.title}
      images={letterConfig.images}
    />
  );
}
