export default function HobbyLinks() {
    let hobbyLinks = ["http://ebay.com", "http://amazon.com"];
    return(
       <div>
             <a href = {hobbyLinks[0]}>reselling</a>
<div>
             <a href = {hobbyLinks[1]}>buying.</a>
       </div>
       </div>
    );
 }