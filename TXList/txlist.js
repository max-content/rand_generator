var article, noun, adjective, verb, adverb

article = ["a", "the"];

noun = ["affect", "flesh", "pataphysician", "'pataphysics", "epistemology", "value", "holotype", "catechism", "practice", "variable", "pain", "motherfucker", "capital", "spandrel", "methodology", "queer", "tourmaline", "capitalist", "commodity","capitalism", "skin", "aesthetic", "pizza", "beef", "implication","chance", "cacophony", "keyboard"];

adjective = ["legible", "liminal", "beige","purple", "nonzero", "transitive", "fleshy", "sinuous", "pearlescent", "eldritch", "violent", "'pataphysical", "corollary", "parasocial", "categorical", "instrumental", "chaotic", "tentative", "schismatic", "motherfucking","none", "left", "cacophonous", "otolithic", "aeleotoric"];

verb = ["slakes", "scours", "ameliorates", "alienates", "flenses", "queers", "disintegrates","commodifies", "exploits","volunteers", "values", "practices", "ascends", "invokes", "hospitalizes","transitions", "aspires", "aspirates", "prefigures","embraces"];

adverb = ["greenly", "milkily", "caustically", "warmly", "wetly", "heavily", "widdershins"];

function randGen() {
    return Math.floor(Math.random() * 6);
    //Math.floor will return the largest integer less than or equal to a given numer 
    //Math.random will return a floating-point pseudo-random number between 0 and less than one that does not include either 0 or 1 
    //by using Math.floor around Math.random * a number you're telling the computer to select a number up that numer and round down to the lowest whole number
}

function sentence() {
    var randArt = Math.floor(Math.random() * article.length);
    var randArt2 = Math.floor(Math.random() * article.length);
    var randAdj = Math.floor(Math.random() * adjective.length);
    var randNoun = Math.floor(Math.random() * noun.length);
    var randNoun2 = Math.floor(Math.random() * noun.length);
    var randVerb = Math.floor(Math.random() * verb.length);
    var randAdv = Math.floor(Math.random() * adverb.length);

    var content = article[randArt] + " " + adjective[randAdj] + " " + noun[randNoun]  + " " + verb[randVerb] + ", " + adverb[randAdv] + ", " + article[randArt2] + " " + noun[randNoun2];

document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";

};
sentence();