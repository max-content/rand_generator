var article, adjective, noun, verbClause

article = ["a", "the"];

adjective = ["metal", "lavender", "mountainous","paper", "velet", "lingering", "generous", "dischordant", "textured","jealous", "vaulted", "eldritch", "grainy", "amenable", "concrete", "towering", "tenuous", "decaying", "radiant", "chromatic", "quiet", "gracefully", "frayed", "shallow", "sparkling", "liminal", "cacophonous", "ghostly", "crushed", "twinkling", "charcoal", "momentous", "silken", "pretentious", "studious","trivially", "graphite", "dyed", "gentle", "silvered", "cursed", "chaotic", "pretty", "riveting", "amicable", "hearty", "pearlescent", "focused", "dreary", "shadowed","weathered"];

noun = ["canvas", "silence", "form", "compass", "stone", "lens", "strain", "potion", "light", "body", "circuit", "name","poem", "storm", "lines","die", "dice", "plums", "monument","cries", "mountain", "thread", "map", "amulet", "ghost","wraith", "shadow", "tufts", "filter", "ststem", "vault", "drought", "surface", "glance", "detritus", "glass", "silhouette", "blood", "platter", "plume", "sextant", "ship", "clock", "basket", "grains", "spokes", "broach", "sign", "palm"];

verbClause = ["riddled with bullet holes", "waiting patiently", "stretching toward the sun", "completely destroyed", "sleeping, dreaming, wishing", "resting peacefully", "resigning itself to isolation", "collapsing all at once", "drenched in blood", "leaning outward, yearning", "erupting with energy","drifting into the ether", "slowly fading away", "draining the life out of all it touches", "etched in stone", "listening for a signal", "radiating in concentric circles", "hiding the truth", "running toward the bottom", "resting a last", "fading through time", "grazing along the edge", "singing with the wind", "shifting every moment", "dripping with cadence", "crying out to anyone", "vaulting with abandon", "dancing across the surface", "exploding with life", "painting the atmosphere", "crumbling to pieces", "barely hanging on", "sinking into the depths", "rising from below", "brimming with secrets", "erasing the past", "sizzling with anticipation", "wishing. just wishing", "wrought in iron", "vibrating like a cicada", "twisting into something else", "sliding in all directions", "dying slowly, quietly", "blending into itself", "falling into each other", "illuminating the sky", "moving erratically"]

function randGen() {
    return Math.floor(Math.random() * 4);
    //Math.floor will return the largest integer less than or equal to a given numer 
    //Math.random will return a floating-point pseudo-random number between 0 and less than one that does not include either 0 or 1 
    //by using Math.floor around Math.random * a number you're telling the computer to select a number up that numer and round down to the lowest whole number
}

function sentence() {
    var randArt = Math.floor(Math.random() * article.length);
    var randAdj = Math.floor(Math.random() * adjective.length);
    var randNoun = Math.floor(Math.random() * noun.length);
    var randVerbClause = Math.floor(Math.random() * verbClause.length);

var content = article[randArt] + " " + adjective[randAdj] + " " + noun[randNoun] + " " + verbClause[randVerbClause];

document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";

};
sentence();