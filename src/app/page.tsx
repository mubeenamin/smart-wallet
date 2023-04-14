"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import MyApp from "./components/app";
import Link from "next/link";



const Home = () => {
  return (
    <div className="flex flex-col gap-y-10 justify-center w-full mx-auto items-center h-screen">
     <MyApp/>
     <h1 className="text-5xl font-bold">
        Welcome to Panaverse-DAO
     </h1>
     <h2 className="text-4xl font-bold">
        Account Abstraction Wallet Assignment
     </h2>
     <div className="flex flex-col  sm:gap-y-6 text-3xl">
      <Link href={'https://goerli.etherscan.io/address/0x20e313b0546d87845ab3bd02b1852d01c2dc1e52'}>
        Wallet Address
      </Link>
      <Link href={'https://goerli.etherscan.io/tx/0x38c11852ad45e61301daed4581ab411c457cb214667b18bf86a42d6a08e09451'}>
        Self Transfer
      </Link>
      <Link href={'https://goerli.etherscan.io/tx/0xb09fc9f5532e4aef1f5dd2ec30b0695e07992d1410041dd3437d6e95dfc61fef'}>
        Batch Transfer
      </Link>
      <Link href={'https://mumbai.polygonscan.com/tx/0x9c3dd33a819540bc5a755414aeeb30f5301d767d05eb507df6f4a6ad5c8286ae'}>
      Nft mint ERC-721
      </Link>
      </div>
    </div>
  );
};

export default Home;