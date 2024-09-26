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
const arrNFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _role, _ability, _title) {
    const NFT = {
        "name" : _name,
        "role" : _role,
        "ability" : _ability,
        "title" : _title
    }
    arrNFT.push(NFT);
    console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < arrNFT.length; i++){
        console.log("\nID: " + (i + 1));
        console.log("Name: " + arrNFT[i].name);
        console.log("Role: " + arrNFT[i].role);
        console.log("Ability: " + arrNFT[i].ability);
        console.log("Title: " + arrNFT[i].title);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number of NFT's minted: " + arrNFT.length);
}

// call your functions below this line
mintNFT("Juan", "Tank", "Wall of the Indomitable", "Ironhide Paladin");
mintNFT("Leon", "DPS", "Greatsword Strike", "Lionheart Knight");
mintNFT("Regulus", "Support", "Abyssal Cloak", "Shadowflame Rouge");
mintNFT("Emilia", "Healer", "Restoration Domain", "Snow-winged Mage");
mintNFT("Mari", "DPS", "Golden Arrow Piercer", "Gold-eye Hunter");
mintNFT("Gary", "Support", "Hollowblood Call", "Undead Whisperer");
listNFTs();
getTotalSupply();

