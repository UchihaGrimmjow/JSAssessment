/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let no_of_NFT = 0
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_uid,_name,_class,_age) {
    const NFT ={
        "uid":_uid,
        "name":_name,
        "class":_class,
        "age":_age

    };
    no_of_NFT++;
    return NFT;


}

// create an array to hold minted nfts
const nftstudents =[];

// create an nft and store it in array
const NFTa = mintNFT("22bcs1666","Romeo","8","18");
nftstudents.push(NFTa);
//similarly create other nfts
const NFTb = mintNFT("22bcs1689","Sam","9","19");
nftstudents.push(NFTb);
const NFTc = mintNFT("22bcs1701","Mohit","7","17");
nftstudents.push(NFTc);
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs (){
 for(let i=0; i < nftstudents.length; i++){
 const NFT = nftstudents[i];   
 console.log("uid:" + NFT.uid);
 console.log("name:" +NFT.name );
 console.log("class:" + NFT.class);
 console.log("age:"+ NFT.age);
 }
} 
//print total no. of NFTs we have minted to console
function getTotalSupply() {
    console.log("total no. of NFTs minted:"+ no_of_NFT);
}
listNFTs();
getTotalSupply();
