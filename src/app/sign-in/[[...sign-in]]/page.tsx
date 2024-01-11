import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -transalte-y-1/2 ">
        <SignIn />
    </div>
  );
}