import { GoogleLogin } from '@react-oauth/google';
import Image from 'next/image';
import Link from 'next/link';
import { createOrGetUser } from '../utils';
import Logo from '../utils/tiktik-logo.png';

const Navbar = () => {
  const user = false;
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2">
      <Link href={'/'}>
        <div className="w-[100px] md:w-[130px]">
          <Image className="cursor-pointer" src={Logo} alt="tik-tak"></Image>
        </div>
      </Link>
      <div>SEARCH</div>

      <div>
        {user ? (
          <div>Logged In</div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response)}
            onError={() => console.log('err')}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
