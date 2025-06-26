const wasteData = [
  // ==================== ORGANIC WASTE (60 items) ====================
  {
    name: "Apple Core", category: "organic", description: "Remains of eaten apples",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Can be added directly to compost piles",
    image: "apple-core.jpg"
  },
  {
    name: "Banana Peel", category: "organic", description: "Outer skin of bananas",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Breaks down quickly in compost",
    image: "banana-peel.jpg"
  },
  {
    name: "Orange Peels", category: "organic", description: "Citrus fruit rinds",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Chop into smaller pieces for faster decomposition",
    image: "orange-peels.jpg"
  },
  {
    name: "Coffee Grounds", category: "organic", description: "Used coffee filter contents",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Great nitrogen source for compost",
    image: "coffee-grounds.jpg"
  },
  {
    name: "Tea Bags", category: "organic", description: "Used tea leaves in bags",
    disposalMethod: "Compost (remove staples)", binType: "Green Bin", tips: "Check if bags are plastic-free before composting",
    image: "tea-bags.jpg"
  },
  {
    name: "Eggshells", category: "organic", description: "Crushed egg remains",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Crush before composting for faster breakdown",
    image: "eggshells.jpg"
  },
  {
    name: "Vegetable Scraps", category: "organic", description: "Peels and ends from vegetables",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Excellent for composting - adds nutrients",
    image: "vegetable-scraps.jpg"
  },
  {
    name: "Bread", category: "organic", description: "Stale or moldy bread products",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Break into smaller pieces for faster decomposition",
    image: "bread.jpg"
  },
  {
    name: "Fruit Pits", category: "organic", description: "Seeds from fruits like peaches or avocados",
    disposalMethod: "Compost (takes longer)", binType: "Green Bin", tips: "Crush or break pits to speed up decomposition",
    image: "fruit-pits.jpg"
  },
  {
    name: "Nut Shells", category: "organic", description: "Hard outer shells of nuts",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Break into smaller pieces for better composting",
    image: "nut-shells.jpg"
  },
  {
    name: "Corn Cobs", category: "organic", description: "Inner core of corn ears",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Takes longer to decompose - consider chopping",
    image: "corn-cobs.jpg"
  },
  {
    name: "Potato Peels", category: "organic", description: "Skin from potatoes",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Composts quickly when mixed with other materials",
    image: "potato-peels.jpg"
  },
  {
    name: "Avocado Skin", category: "organic", description: "Outer covering of avocados",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Takes longer to break down than other fruit waste",
    image: "avocado-skin.jpg"
  },
  {
    name: "Melon Rinds", category: "organic", description: "Hard outer shells of melons",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Cut into smaller pieces for faster composting",
    image: "melon-rinds.jpg"
  },
  {
    name: "Pineapple Top", category: "organic", description: "Leafy crown of pineapple",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Can be planted to grow new pineapple plants",
    image: "pineapple-top.jpg"
  },
  {
    name: "Mushroom Stems", category: "organic", description: "Base of mushrooms",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Compost well with other vegetable matter",
    image: "mushroom-stems.jpg"
  },
  {
    name: "Onion Skins", category: "organic", description: "Papery outer layers of onions",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Add to compost in moderation",
    image: "onion-skins.jpg"
  },
  {
    name: "Garlic Peels", category: "organic", description: "Papery covering of garlic cloves",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Break down slower than other compost materials",
    image: "garlic-peels.jpg"
  },
  {
    name: "Citrus Pulp", category: "organic", description: "Leftover fruit flesh from juicing",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Mix with browns to balance acidity",
    image: "citrus-pulp.jpg"
  },
  {
    name: "Tomato Ends", category: "organic", description: "Stem ends and cores of tomatoes",
    disposalMethod: "Compost", binType: "Green Bin", tips: "Avoid composting diseased plants",
    image: "tomato-ends.jpg"
  },
  // ==================== ORGANIC WASTE (Additional 40 items) ====================
{
  name: "Carrot Tops",
  category: "organic",
  description: "Green leafy parts of carrots",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Can be used to make pesto before composting",
  image: "carrot-tops.jpg"
},
{
  name: "Celery Ends",
  category: "organic",
  description: "Base and leaves of celery stalks",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "High water content helps compost moisture",
  image: "celery-ends.jpg"
},
{
  name: "Berry Moldy Fruit",
  category: "organic",
  description: "Spoiled strawberries, blueberries, etc.",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Bury deeper in compost to avoid attracting pests",
  image: "moldy-berries.jpg"
},
{
  name: "Pumpkin Guts",
  category: "organic",
  description: "Stringy interior and seeds from pumpkins",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Remove seeds first if you don't want volunteer plants",
  image: "pumpkin-guts.jpg"
},
{
  name: "Cucumber Ends",
  category: "organic",
  description: "Stem and blossom ends of cucumbers",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Compost quickly due to high water content",
  image: "cucumber-ends.jpg"
},
{
  name: "Lettuce Wilted",
  category: "organic",
  description: "Spoiled or wilted leafy greens",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Mix with browns to prevent matting in compost",
  image: "wilted-lettuce.jpg"
},
{
  name: "Pea Pods",
  category: "organic",
  description: "Empty shells from peas",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Chop tough pods for faster breakdown",
  image: "pea-pods.jpg"
},
{
  name: "Zucchini Ends",
  category: "organic",
  description: "Stem ends of zucchini squash",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Composts faster when cut into pieces",
  image: "zucchini-ends.jpg"
},
{
  name: "Herb Stems",
  category: "organic",
  description: "Woody stems from basil, cilantro, etc.",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Softer stems break down faster than woody ones",
  image: "herb-stems.jpg"
},
{
  name: "Pepper Cores",
  category: "organic",
  description: "Seeds and membranes from bell peppers",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Hot pepper seeds may survive composting",
  image: "pepper-cores.jpg"
},
{
  name: "Grape Stems",
  category: "organic",
  description: "Vine stems from grape clusters",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Break into small pieces for faster decomposition",
  image: "grape-stems.jpg"
},
{
  name: "Mango Pit",
  category: "organic",
  description: "Large seed from mango fruit",
  disposalMethod: "Compost (slow)",
  binType: "Green Bin",
  tips: "Takes months to decompose - consider burying",
  image: "mango-pit.jpg"
},
{
  name: "Kiwi Peels",
  category: "organic",
  description: "Fuzzy outer skin of kiwifruit",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Contains beneficial nutrients for compost",
  image: "kiwi-peels.jpg"
},
{
  name: "Pomegranate Rind",
  category: "organic",
  description: "Tough outer shell of pomegranates",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Break into pieces to speed decomposition",
  image: "pomegranate-rind.jpg"
},
{
  name: "Coconut Husk",
  category: "organic",
  description: "Fibrous outer shell of coconuts",
  disposalMethod: "Compost (slow)",
  binType: "Green Bin",
  tips: "Shred for mulch or soak to speed breakdown",
  image: "coconut-husk.jpg"
},
{
  name: "Artichoke Leaves",
  category: "organic",
  description: "Tough outer leaves of artichokes",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Best for hot composting systems",
  image: "artichoke-leaves.jpg"
},
{
  name: "Asparagus Ends",
  category: "organic",
  description: "Woody stem bases of asparagus",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Save to make vegetable stock first",
  image: "asparagus-ends.jpg"
},
{
  name: "Broccoli Stalks",
  category: "organic",
  description: "Thick stems of broccoli",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Peel and eat the tender inner stalks",
  image: "broccoli-stalks.jpg"
},
{
  name: "Cauliflower Leaves",
  category: "organic",
  description: "Outer green leaves of cauliflower",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Edible - consider sautéing before composting",
  image: "cauliflower-leaves.jpg"
},
{
  name: "Rhubarb Leaves",
  category: "organic",
  description: "Large poisonous leaves of rhubarb",
  disposalMethod: "Compost (small amounts)",
  binType: "Green Bin",
  tips: "Oxalic acid breaks down during composting",
  image: "rhubarb-leaves.jpg"
},
{
  name: "Turnip Greens",
  category: "organic",
  description: "Leafy tops of turnips",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Nutrient-rich addition to compost",
  image: "turnip-greens.jpg"
},
{
  name: "Beet Greens",
  category: "organic",
  description: "Leaves and stems of beetroot",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "High in minerals - excellent compost input",
  image: "beet-greens.jpg"
},
{
  name: "Radish Tops",
  category: "organic",
  description: "Leafy parts of radishes",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Edible - makes good pesto before composting",
  image: "radish-tops.jpg"
},
{
  name: "Bok Choy Ends",
  category: "organic",
  description: "Base of Chinese cabbage",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Can regrow in water before composting",
  image: "bok-choy-ends.jpg"
},
{
  name: "Leek Greens",
  category: "organic",
  description: "Dark green tops of leeks",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Use in stock before composting",
  image: "leek-greens.jpg"
},
{
  name: "Fennel Fronds",
  category: "organic",
  description: "Feathery leaves of fennel",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Adds pleasant aroma to compost",
  image: "fennel-fronds.jpg"
},
{
  name: "Cantaloupe Rind",
  category: "organic",
  description: "Tough outer skin of melon",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Cut into strips for faster breakdown",
  image: "cantaloupe-rind.jpg"
},
{
  name: "Watermelon Rind",
  category: "organic",
  description: "Green/white part of watermelon",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Can be pickled before composting",
  image: "watermelon-rind.jpg"
},
{
  name: "Honeydew Skin",
  category: "organic",
  description: "Smooth outer skin of honeydew",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Thinner than other melon skins - breaks down faster",
  image: "honeydew-skin.jpg"
},
{
  name: "Papaya Seeds",
  category: "organic",
  description: "Black seeds from papaya",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "May sprout if compost doesn't get hot enough",
  image: "papaya-seeds.jpg"
},
{
  name: "Guava Skins",
  category: "organic",
  description: "Outer skin of guava fruit",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Edible but often discarded",
  image: "guava-skins.jpg"
},
{
  name: "Passionfruit Shells",
  category: "organic",
  description: "Hard outer rind of passionfruit",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Break into pieces for faster decomposition",
  image: "passionfruit-shells.jpg"
},
{
  name: "Dragon Fruit Skin",
  category: "organic",
  description: "Vibrant pink/white outer skin",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Contains beneficial antioxidants",
  image: "dragonfruit-skin.jpg"
},
{
  name: "Star Fruit Ends",
  category: "organic",
  description: "Tips and seeds from star fruit",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Small seeds compost quickly",
  image: "starfruit-ends.jpg"
},
{
  name: "Persimmon Calyx",
  category: "organic",
  description: "Leafy base of persimmon fruit",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Remove before eating the fruit",
  image: "persimmon-calyx.jpg"
},
{
  name: "Lychee Peels",
  category: "organic",
  description: "Bumpy red outer skin of lychee",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Breaks down faster when torn",
  image: "lychee-peels.jpg"
},
{
  name: "Rambutan Skin",
  category: "organic",
  description: "Hairy exterior of rambutan",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Wash off sticky residue first",
  image: "rambutan-skin.jpg"
},
{
  name: "Jackfruit Core",
  category: "organic",
  description: "Central stem of jackfruit",
  disposalMethod: "Compost (slow)",
  binType: "Green Bin",
  tips: "Fibrous material takes months to break down",
  image: "jackfruit-core.jpg"
},
{
  name: "Plantain Peels",
  category: "organic",
  description: "Thick skins of cooking bananas",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Can be dried and powdered as fertilizer",
  image: "plantain-peels.jpg"
},
{
  name: "Breadfruit Skin",
  category: "organic",
  description: "Knobby exterior of breadfruit",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "Chop into pieces before composting",
  image: "breadfruit-skin.jpg"
},
{
  name: "Soursop Fibers",
  category: "organic",
  description: "Stringy fruit pulp remnants",
  disposalMethod: "Compost",
  binType: "Green Bin",
  tips: "High in organic acids - balance with browns",
  image: "soursop-fibers.jpg"
},


  // ==================== RECYCLABLE WASTE (100 items) ====================
  {
    name: "Plastic Water Bottle", category: "recyclable", description: "Empty single-use plastic water bottles",
    disposalMethod: "Recycle after rinsing", binType: "Blue Bin", tips: "Remove caps and crush bottles to save space",
    image: "plastic-bottle.jpg"
  },
  {
    name: "Aluminum Can", category: "recyclable", description: "Soda or beer cans",
    disposalMethod: "Recycle", binType: "Blue Bin", tips: "Crush cans to save space in recycling bin",
    image: "aluminum-can.jpg"
  },
  {
    name: "Glass Jar", category: "recyclable", description: "Empty glass food containers",
    disposalMethod: "Recycle after cleaning", binType: "Blue Bin", tips: "Remove metal lids and recycle separately",
    image: "glass-jar.jpg"
  },
  {
    name: "Newspaper", category: "recyclable", description: "Old newsprint",
    disposalMethod: "Recycle", binType: "Blue Bin", tips: "Keep dry and bundle with twine",
    image: "newspaper.jpg"
  },
  {
    name: "Cardboard Box", category: "recyclable", description: "Shipping or packaging boxes",
    disposalMethod: "Recycle (flattened)", binType: "Blue Bin", tips: "Remove tape and labels if possible",
    image: "cardboard-box.jpg"
  },
  {
    name: "Plastic Milk Jug", category: "recyclable", description: "Empty plastic milk containers",
    disposalMethod: "Recycle after rinsing", binType: "Blue Bin", tips: "Replace cap before recycling",
    image: "milk-jug.jpg"
  },
  {
    name: "Steel Can", category: "recyclable", description: "Food or beverage cans",
    disposalMethod: "Recycle after rinsing", binType: "Blue Bin", tips: "Remove paper labels if possible",
    image: "steel-can.jpg"
  },
  {
    name: "Magazines", category: "recyclable", description: "Glossy printed periodicals",
    disposalMethod: "Recycle", binType: "Blue Bin", tips: "Remove any plastic wrapping",
    image: "magazines.jpg"
  },
  {
    name: "Paper Bags", category: "recyclable", description: "Grocery or shopping bags",
    disposalMethod: "Recycle", binType: "Blue Bin", tips: "Can be reused multiple times before recycling",
    image: "paper-bags.jpg"
  },
  {
    name: "Plastic Food Containers", category: "recyclable", description: "Clean plastic food packaging",
    disposalMethod: "Recycle after washing", binType: "Blue Bin", tips: "Check resin number on bottom",
    image: "plastic-containers.jpg"
  },
  // ==================== RECYCLABLE WASTE (Additional 90 items) ====================
{
  name: "Aluminum Foil",
  category: "recyclable",
  description: "Clean household aluminum foil",
  disposalMethod: "Recycle (balled up)",
  binType: "Blue Bin",
  tips: "Must be clean of food residue",
  image: "aluminum-foil.jpg"
},
{
  name: "Pie Tins",
  category: "recyclable",
  description: "Aluminum pie plates",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Scrape clean before recycling",
  image: "pie-tins.jpg"
},
{
  name: "Baking Trays",
  category: "recyclable",
  description: "Aluminum baking sheets",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "No non-stick coatings accepted",
  image: "baking-trays.jpg"
},
{
  name: "Soda Can Tabs",
  category: "recyclable",
  description: "Pull tabs from aluminum cans",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Can be left attached to cans",
  image: "can-tabs.jpg"
},
{
  name: "Pet Food Cans",
  category: "recyclable",
  description: "Aluminum or steel pet food containers",
  disposalMethod: "Recycle after rinsing",
  binType: "Blue Bin",
  tips: "Remove paper labels if possible",
  image: "pet-food-cans.jpg"
},
{
  name: "Soup Cans",
  category: "recyclable",
  description: "Steel cans with tin coating",
  disposalMethod: "Recycle after washing",
  binType: "Blue Bin",
  tips: "Place lid inside can and pinch top",
  image: "soup-cans.jpg"
},
{
  name: "Tuna Cans",
  category: "recyclable",
  description: "Small steel fish cans",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Check for plastic film lining",
  image: "tuna-cans.jpg"
},
{
  name: "Coffee Cans",
  category: "recyclable",
  description: "Metal coffee containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove plastic lids separately",
  image: "coffee-cans.jpg"
},
{
  name: "Baby Food Jars",
  category: "recyclable",
  description: "Small glass jars with lids",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove rubber seals from lids",
  image: "baby-food-jars.jpg"
},
{
  name: "Pasta Sauce Jars",
  category: "recyclable",
  description: "Glass jars from food products",
  disposalMethod: "Recycle after washing",
  binType: "Blue Bin",
  tips: "Reuse for food storage first",
  image: "pasta-jars.jpg"
},
// ... (80 more recyclable items below) ...
{
  name: "Jam Jars",
  category: "recyclable",
  description: "Glass preserve containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Soak to remove sticky labels",
  image: "jam-jars.jpg"
},
{
  name: "Beer Bottles",
  category: "recyclable",
  description: "Glass beer containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Return for deposit refund where available",
  image: "beer-bottles.jpg"
},
{
  name: "Wine Bottles",
  category: "recyclable",
  description: "Glass wine containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove corks and recycle separately",
  image: "wine-bottles.jpg"
},
{
  name: "Liquor Bottles",
  category: "recyclable",
  description: "Glass spirit containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Check for local bottle bank options",
  image: "liquor-bottles.jpg"
},
{
  name: "Perfume Bottles",
  category: "recyclable",
  description: "Glass fragrance containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove plastic spray mechanisms",
  image: "perfume-bottles.jpg"
},
{
  name: "Candle Jars",
  category: "recyclable",
  description: "Glass candle containers",
  disposalMethod: "Recycle after cleaning",
  binType: "Blue Bin",
  tips: "Remove all wax residue first",
  image: "candle-jars.jpg"
},
{
  name: "Broken Glass",
  category: "recyclable",
  description: "Clean broken glass pieces",
  disposalMethod: "Recycle (carefully packaged)",
  binType: "Blue Bin",
  tips: "Wrap in paper and label as broken glass",
  image: "broken-glass.jpg"
},
{
  name: "Window Glass",
  category: "recyclable",
  description: "Flat glass from windows",
  disposalMethod: "Special glass recycling",
  binType: "Blue Bin",
  tips: "Not accepted in all programs - check locally",
  image: "window-glass.jpg"
},
{
  name: "Drinking Glasses",
  category: "recyclable",
  description: "Tempered glassware",
  disposalMethod: "Special glass recycling",
  binType: "Blue Bin",
  tips: "Different composition than container glass",
  image: "drinking-glasses.jpg"
},
{
  name: "Glass Vases",
  category: "recyclable",
  description: "Flower containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove any decorative elements first",
  image: "glass-vases.jpg"
},
{
  name: "Phone Books",
  category: "recyclable",
  description: "Paper telephone directories",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Becoming obsolete but still recycled",
  image: "phone-books.jpg"
},
{
  name: "Junk Mail",
  category: "recyclable",
  description: "Unwanted paper advertisements",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove plastic windows from envelopes",
  image: "junk-mail.jpg"
},
{
  name: "Cereal Boxes",
  category: "recyclable",
  description: "Cardboard food packaging",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Flatten to save space",
  image: "cereal-boxes.jpg"
},
{
  name: "Shoe Boxes",
  category: "recyclable",
  description: "Cardboard packaging from shoes",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Great for home organizing before recycling",
  image: "shoe-boxes.jpg"
},
{
  name: "Egg Cartons",
  category: "recyclable",
  description: "Paper pulp egg containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Plastic cartons go in different stream",
  image: "egg-cartons.jpg"
},
{
  name: "Toilet Paper Rolls",
  category: "recyclable",
  description: "Cardboard tube cores",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Great for kids' crafts before recycling",
  image: "tp-rolls.jpg"
},
{
  name: "Wrapping Paper",
  category: "recyclable",
  description: "Non-metallic gift wrap",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "No foil or glitter-covered paper",
  image: "wrapping-paper.jpg"
},
{
  name: "Paper Bags",
  category: "recyclable",
  description: "Grocery/shopping bags",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Reuse multiple times first",
  image: "paper-bags.jpg"
},
{
  name: "Shipping Boxes",
  category: "recyclable",
  description: "Corrugated cardboard boxes",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove all packing tape",
  image: "shipping-boxes.jpg"
},
{
  name: "Milk Cartons",
  category: "recyclable",
  description: "Paperboard liquid containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Rinse and flatten",
  image: "milk-cartons.jpg"
},
{
  name: "Juice Boxes",
  category: "recyclable",
  description: "Aseptic drink containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Check for local specialized recycling",
  image: "juice-boxes.jpg"
},
{
  name: "Yogurt Containers",
  category: "recyclable",
  description: "Plastic #5 containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Check local acceptance of #5 plastic",
  image: "yogurt-containers.jpg"
},
{
  name: "Butter Tubs",
  category: "recyclable",
  description: "Plastic dairy containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Clean thoroughly before recycling",
  image: "butter-tubs.jpg"
},
{
  name: "Ice Cream Tubs",
  category: "recyclable",
  description: "Plastic frozen dessert containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "No greasy residue allowed",
  image: "ice-cream-tubs.jpg"
},
{
  name: "Takeout Containers",
  category: "recyclable",
  description: "Clean plastic food boxes",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Must be completely grease-free",
  image: "takeout-containers.jpg"
},
{
  name: "Berry Containers",
  category: "recyclable",
  description: "Plastic clamshell packages",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove all stickers and labels",
  image: "berry-containers.jpg"
},
{
  name: "Salad Bags",
  category: "recyclable",
  description: "Plastic produce bags",
  disposalMethod: "Special plastic bag recycling",
  binType: "Blue Bin",
  tips: "Many supermarkets have collection bins",
  image: "salad-bags.jpg"
},
{
  name: "Bubble Wrap",
  category: "recyclable",
  description: "Plastic packaging material",
  disposalMethod: "Special plastic recycling",
  binType: "Blue Bin",
  tips: "Collect with plastic bags for recycling",
  image: "bubble-wrap.jpg"
},
{
  name: "Air Pillows",
  category: "recyclable",
  description: "Plastic shipping cushions",
  disposalMethod: "Special plastic recycling",
  binType: "Blue Bin",
  tips: "Deflate before recycling",
  image: "air-pillows.jpg"
},
{
  name: "Shampoo Bottles",
  category: "recyclable",
  description: "Empty plastic toiletry containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove pumps and caps separately",
  image: "shampoo-bottles.jpg"
},
{
  name: "Detergent Bottles",
  category: "recyclable",
  description: "Plastic laundry soap containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Rinse thoroughly",
  image: "detergent-bottles.jpg"
},
{
  name: "Bleach Bottles",
  category: "recyclable",
  description: "Plastic household cleaner containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Must be completely empty",
  image: "bleach-bottles.jpg"
},
{
  name: "Spray Bottles",
  category: "recyclable",
  description: "Plastic trigger sprayers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove metal springs if possible",
  image: "spray-bottles.jpg"
},
{
  name: "Medicine Bottles",
  category: "recyclable",
  description: "Empty plastic prescription containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove all personal information first",
  image: "medicine-bottles.jpg"
},
{
  name: "CD Cases",
  category: "recyclable",
  description: "Plastic CD/DVD holders",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove paper inserts separately",
  image: "cd-cases.jpg"
},
{
  name: "DVD Cases",
  category: "recyclable",
  description: "Plastic movie containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Check for local electronics recycling",
  image: "dvd-cases.jpg"
},
{
  name: "Plastic Utensils",
  category: "recyclable",
  description: "Clean plastic cutlery",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Many programs don't accept - check locally",
  image: "plastic-utensils.jpg"
},
{
  name: "Plastic Cups",
  category: "recyclable",
  description: "Disposable drink cups",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "No wax-coated cups accepted",
  image: "plastic-cups.jpg"
},
{
  name: "Plastic Plates",
  category: "recyclable",
  description: "Disposable dinnerware",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Must be completely clean",
  image: "plastic-plates.jpg"
},
{
  name: "Plastic Hangers",
  category: "recyclable",
  description: "Clothing hangers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Many dry cleaners will reuse",
  image: "plastic-hangers.jpg"
},
{
  name: "Plastic Toys",
  category: "recyclable",
  description: "Hard plastic children's toys",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Donate usable toys first",
  image: "plastic-toys.jpg"
},
{
  name: "Plastic Buckets",
  category: "recyclable",
  description: "Household pails",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove metal handles if possible",
  image: "plastic-buckets.jpg"
},
{
  name: "Plastic Flower Pots",
  category: "recyclable",
  description: "Garden plant containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove all soil and plant matter",
  image: "flower-pots.jpg"
},
{
  name: "Plastic Storage Bins",
  category: "recyclable",
  description: "Household organization containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Donate usable containers first",
  image: "storage-bins.jpg"
},
{
  name: "Plastic Furniture",
  category: "recyclable",
  description: "Outdoor chairs/tables",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Break down large items first",
  image: "plastic-furniture.jpg"
},
{
  name: "Plastic Shelving",
  category: "recyclable",
  description: "Storage shelves",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Disassemble before recycling",
  image: "plastic-shelving.jpg"
},
{
  name: "Plastic Tool Handles",
  category: "recyclable",
  description: "Hard plastic tool parts",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove any metal components",
  image: "tool-handles.jpg"
},
{
  name: "Plastic Coat Hangers",
  category: "recyclable",
  description: "Garment hangers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Many dry cleaners accept for reuse",
  image: "coat-hangers.jpg"
},
{
  name: "Plastic Baskets",
  category: "recyclable",
  description: "Household storage baskets",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Check for local textile recycling if woven",
  image: "plastic-baskets.jpg"
},
{
  name: "Plastic Crates",
  category: "recyclable",
  description: "Shipping/milk crates",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Return to distributors if possible",
  image: "plastic-crates.jpg"
},
{
  name: "Plastic Signs",
  category: "recyclable",
  description: "Yard/real estate signs",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove all metal stakes",
  image: "plastic-signs.jpg"
},
{
  name: "Plastic Coolers",
  category: "recyclable",
  description: "Insulated drink containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove any non-plastic components",
  image: "plastic-coolers.jpg"
},
{
  name: "Plastic Storage Totes",
  category: "recyclable",
  description: "Large lidded containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Donate if still usable",
  image: "storage-totes.jpg"
},
{
  name: "Plastic Pet Carriers",
  category: "recyclable",
  description: "Animal transport crates",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove all metal parts first",
  image: "pet-carriers.jpg"
},
{
  name: "Plastic Laundry Baskets",
  category: "recyclable",
  description: "Clothes hampers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Check for local textile recycling if woven",
  image: "laundry-baskets.jpg"
},
{
  name: "Plastic Recycling Bins",
  category: "recyclable",
  description: "Curbside collection containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Many municipalities will replace damaged bins",
  image: "recycling-bins.jpg"
},
{
  name: "Plastic Trash Cans",
  category: "recyclable",
  description: "Outdoor garbage bins",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Check with waste company for replacement programs",
  image: "trash-cans.jpg"
},
{
  name: "Plastic Storage Drawers",
  category: "recyclable",
  description: "Modular drawer units",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Disassemble before recycling",
  image: "storage-drawers.jpg"
},
{
  name: "Plastic Shelving Units",
  category: "recyclable",
  description: "Freestanding shelves",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Break down into components",
  image: "shelving-units.jpg"
},
{
  name: "Plastic Step Stools",
  category: "recyclable",
  description: "Small household steps",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove any rubber feet",
  image: "step-stools.jpg"
},
{
  name: "Plastic Patio Chairs",
  category: "recyclable",
  description: "Outdoor seating",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Disassemble if possible",
  image: "patio-chairs.jpg"
},
{
  name: "Plastic Storage Sheds",
  category: "recyclable",
  description: "Outdoor garden sheds",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "May require special bulk recycling",
  image: "storage-sheds.jpg"
},
{
  name: "Plastic Playhouses",
  category: "recyclable",
  description: "Children's outdoor playsets",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Donate if still usable",
  image: "playhouses.jpg"
},
{
  name: "Plastic Sandboxes",
  category: "recyclable",
  description: "Children's play sand containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Clean thoroughly before recycling",
  image: "sandboxes.jpg"
},
{
  name: "Plastic Swimming Pools",
  category: "recyclable",
  description: "Inflatable or rigid kiddie pools",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Deflate and dry completely",
  image: "swimming-pools.jpg"
},
{
  name: "Plastic Dog Houses",
  category: "recyclable",
  description: "Pet shelters",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Break down large pieces",
  image: "dog-houses.jpg"
},
{
  name: "Plastic Greenhouses",
  category: "recyclable",
  description: "Garden plant shelters",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Disassemble panels separately",
  image: "greenhouses.jpg"
},
{
  name: "Plastic Decking",
  category: "recyclable",
  description: "Composite outdoor flooring",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Specialized recycling programs often available",
  image: "plastic-decking.jpg"
},
{
  name: "Plastic Fencing",
  category: "recyclable",
  description: "Vinyl or composite fencing",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove all metal posts and hardware",
  image: "plastic-fencing.jpg"
},
{
  name: "Plastic Lumber",
  category: "recyclable",
  description: "Recycled plastic building material",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Many manufacturers take back for recycling",
  image: "plastic-lumber.jpg"
},
{
  name: "Plastic Pallets",
  category: "recyclable",
  description: "Shipping platforms",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Many businesses will reuse",
  image: "plastic-pallets.jpg"
},
{
  name: "Plastic Shipping Crates",
  category: "recyclable",
  description: "Industrial transport containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Return to supplier if possible",
  image: "shipping-crates.jpg"
},
{
  name: "Plastic Display Racks",
  category: "recyclable",
  description: "Retail merchandise displays",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Disassemble before recycling",
  image: "display-racks.jpg"
},
{
  name: "Plastic Automotive Parts",
  category: "recyclable",
  description: "Vehicle interior/exterior components",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove any fluids or hazardous materials first",
  image: "auto-parts.jpg"
},
{
  name: "Plastic Boat Parts",
  category: "recyclable",
  description: "Marine components",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Specialized marine recycling programs available",
  image: "boat-parts.jpg"
},
{
  name: "Plastic Stadium Seats",
  category: "recyclable",
  description: "Bleacher seating components",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Often accepted at specialized plastic recyclers",
  image: "stadium-seats.jpg"
},
{
  name: "Plastic Playground Equipment",
  category: "recyclable",
  description: "Park playset components",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Check with municipality for bulk recycling",
  image: "playground-equipment.jpg"
},
{
  name: "Plastic Traffic Barriers",
  category: "recyclable",
  description: "Road construction barriers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Many DOTs have recycling programs",
  image: "traffic-barriers.jpg"
},
{
  name: "Plastic Road Cones",
  category: "recyclable",
  description: "Traffic safety cones",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Check with local public works departments",
  image: "road-cones.jpg"
},
{
  name: "Plastic Signage",
  category: "recyclable",
  description: "Outdoor signs and billboards",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove all metal framing and electrical components",
  image: "plastic-signage.jpg"
},
{
  name: "Plastic Industrial Containers",
  category: "recyclable",
  description: "Bulk chemical/food containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Must be thoroughly cleaned of all contents",
  image: "industrial-containers.jpg"
},
{
  name: "Plastic Drums",
  category: "recyclable",
  description: "55-gallon industrial barrels",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Many companies offer drum return programs",
  image: "plastic-drums.jpg"
},
{
  name: "Plastic IBC Totes",
  category: "recyclable",
  description: "Intermediate bulk containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Specialized recyclers often accept these",
  image: "ibc-totes.jpg"
},
{
  name: "Plastic Medical Equipment",
  category: "recyclable",
  description: "Non-hazardous medical plastics",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Must be properly sterilized first",
  image: "medical-equipment.jpg"
},
{
  name: "Plastic Laboratory Equipment",
  category: "recyclable",
  description: "Non-contaminated lab plastics",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Check for specialized science equipment recyclers",
  image: "lab-equipment.jpg"
},
{
  name: "Plastic Agricultural Film",
  category: "recyclable",
  description: "Farm plastic sheeting",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Many states have agricultural plastic recycling programs",
  image: "ag-film.jpg"
},
{
  name: "Plastic Mulch",
  category: "recyclable",
  description: "Landscaping ground cover",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Must be cleaned of all soil and debris",
  image: "plastic-mulch.jpg"
},
{
  name: "Plastic Pond Liners",
  category: "recyclable",
  description: "Water garden membranes",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Specialized pond supply stores may recycle",
  image: "pond-liners.jpg"
},
{
  name: "Plastic Tarps",
  category: "recyclable",
  description: "Heavy-duty protective covers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Must be clean and dry",
  image: "plastic-tarps.jpg"
},
{
  name: "Plastic Shower Curtains",
  category: "recyclable",
  description: "Bathroom liners",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove all metal grommets",
  image: "shower-curtains.jpg"
},
{
  name: "Plastic Tablecloths",
  category: "recyclable",
  description: "Disposable or reusable covers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Must be clean and dry",
  image: "tablecloths.jpg"
},
{
  name: "Plastic Drop Cloths",
  category: "recyclable",
  description: "Painting protection sheets",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Cannot have paint residue",
  image: "drop-cloths.jpg"
},
{
  name: "Plastic Inflatable Items",
  category: "recyclable",
  description: "Air-filled toys and furniture",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Deflate completely before recycling",
  image: "inflatable-items.jpg"
},
{
  name: "Plastic Holiday Decorations",
  category: "recyclable",
  description: "Seasonal plastic items",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove all lights and electrical components",
  image: "holiday-decorations.jpg"
},
{
  name: "Plastic Flower Arrangements",
  category: "recyclable",
  description: "Artificial floral displays",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove any wire stems",
  image: "plastic-flowers.jpg"
},
{
  name: "Plastic Christmas Trees",
  category: "recyclable",
  description: "Artificial holiday trees",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Many municipalities have special collection days",
  image: "plastic-trees.jpg"
},
{
  name: "Plastic Wreaths",
  category: "recyclable",
  description: "Decorative holiday rings",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove all non-plastic decorations first",
  image: "plastic-wreaths.jpg"
},
{
  name: "Plastic Mardi Gras Beads",
  category: "recyclable",
  description: "Festival necklaces",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Many organizations collect for reuse",
  image: "mardi-gras-beads.jpg"
},
{
  name: "Plastic Costumes",
  category: "recyclable",
  description: "Halloween or party outfits",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Donate usable costumes first",
  image: "plastic-costumes.jpg"
},
{
  name: "Plastic Party Supplies",
  category: "recyclable",
  description: "Disposable celebration items",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Must be clean and dry",
  image: "party-supplies.jpg"
},
{
  name: "Plastic Sporting Goods",
  category: "recyclable",
  description: "Athletic equipment",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Donate usable equipment first",
  image: "sporting-goods.jpg"
},
{
  name: "Plastic Golf Tees",
  category: "recyclable",
  description: "Golf course accessories",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Too small for most curbside - collect in bulk",
  image: "golf-tees.jpg"
},
{
  name: "Plastic Fishing Gear",
  category: "recyclable",
  description: "Angling equipment",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Specialized fishing line recycling programs exist",
  image: "fishing-gear.jpg"
},
{
  name: "Plastic Snow Sleds",
  category: "recyclable",
  description: "Winter sliding toys",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Donate usable sleds first",
  image: "snow-sleds.jpg"
},
{
  name: "Plastic Pool Toys",
  category: "recyclable",
  description: "Water play items",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Dry completely before recycling",
  image: "pool-toys.jpg"
},
{
  name: "Plastic Beach Toys",
  category: "recyclable",
  description: "Sand play items",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Rinse off all sand first",
  image: "beach-toys.jpg"
},
{
  name: "Plastic Cooler Parts",
  category: "recyclable",
  description: "Insulated container components",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove any non-plastic insulation",
  image: "cooler-parts.jpg"
},
{
  name: "Plastic Ice Packs",
  category: "recyclable",
  description: "Reusable cold compresses",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Puncture and drain gel contents first",
  image: "ice-packs.jpg"
},
{
  name: "Plastic Cutting Boards",
  category: "recyclable",
  description: "Kitchen food preparation surfaces",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Must be clean and free of deep grooves",
  image: "cutting-boards.jpg"
},
{
  name: "Plastic Dish Drainers",
  category: "recyclable",
  description: "Kitchen drying racks",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove any metal components",
  image: "dish-drainers.jpg"
},
{
  name: "Plastic Food Storage Lids",
  category: "recyclable",
  description: "Container tops without bottoms",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Check local acceptance - some programs don't take lids alone",
  image: "storage-lids.jpg"
},
{
  name: "Plastic Spice Jars",
  category: "recyclable",
  description: "Empty herb/seasoning containers",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove paper labels if possible",
  image: "spice-jars.jpg"
},
{
  name: "Plastic Toothbrush Handles",
  category: "recyclable",
  description: "Oral care tool parts",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Specialized toothbrush recycling programs exist",
  image: "toothbrush-handles.jpg"
},
{
  name: "Plastic Razor Handles",
  category: "recyclable",
  description: "Shaving tool components",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Remove metal blades first",
  image: "razor-handles.jpg"
},
{
  name: "Plastic Cosmetic Containers",
  category: "recyclable",
  description: "Empty makeup packaging",
  disposalMethod: "Recycle",
  binType: "Blue Bin",
  tips: "Many beauty brands have take-back programs",
  image
: "cosmetic-containers.jpg"
},
  // ... (90 more recyclable items) ...

  // ==================== HAZARDOUS WASTE (60 items) ====================
  {
    name: "AA Battery", category: "hazardous", description: "Single-use alkaline batteries",
    disposalMethod: "Hazardous waste facility", binType: "Red Bin", tips: "Many electronics stores accept batteries for recycling",
    image: "aa-battery.jpg"
  },
  {
    name: "Paint Cans", category: "hazardous", description: "Leftover paint containers",
    disposalMethod: "Hazardous waste facility", binType: "Red Bin", tips: "Let paint dry completely if disposing small amounts",
    image: "paint-can.jpg"
  },
  {
    name: "Motor Oil", category: "hazardous", description: "Used vehicle engine oil",
    disposalMethod: "Hazardous waste facility", binType: "Red Bin", tips: "Many auto shops accept used oil for recycling",
    image: "motor-oil.jpg"
  },
  {
    name: "Fluorescent Bulb", category: "hazardous", description: "Energy-efficient light bulbs",
    disposalMethod: "Hazardous waste facility", binType: "Red Bin", tips: "Handle carefully to avoid breakage and mercury exposure",
    image: "fluorescent-bulb.jpg"
  },
  {
    name: "Cleaning Chemicals", category: "hazardous", description: "Household cleaning products",
    disposalMethod: "Hazardous waste facility", binType: "Red Bin", tips: "Never mix different chemicals",
    image: "cleaning-chemicals.jpg"
  },
// ==================== HAZARDOUS WASTE (Additional 55 items) ====================
{
  name: "Lithium Batteries",
  category: "hazardous",
  description: "Rechargeable batteries from electronics",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Tape terminals to prevent fires",
  image: "lithium-batteries.jpg"
},
{
  name: "Button Batteries",
  category: "hazardous",
  description: "Small round batteries from watches/calculators",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Extremely dangerous if swallowed - store safely",
  image: "button-batteries.jpg"
},
{
  name: "Lead-Acid Batteries",
  category: "hazardous",
  description: "Car/truck/marine batteries",
  disposalMethod: "Auto parts store take-back",
  binType: "Red Bin",
  tips: "Never dispose in regular trash due to lead content",
  image: "lead-acid-batteries.jpg"
},
{
  name: "NiCad Batteries",
  category: "hazardous",
  description: "Rechargeable nickel-cadmium batteries",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Cadmium is highly toxic - must be recycled",
  image: "nicad-batteries.jpg"
},
{
  name: "Zinc-Air Batteries",
  category: "hazardous",
  description: "Hearing aid batteries",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Many audiologists collect for recycling",
  image: "zinc-air-batteries.jpg"
},
{
  name: "Silver Oxide Batteries",
  category: "hazardous",
  description: "Watch/calculator batteries",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Contains heavy metals - do not incinerate",
  image: "silver-oxide-batteries.jpg"
},
{
  name: "Mercury Batteries",
  category: "hazardous",
  description: "Older camera/medical device batteries",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Handle carefully to avoid mercury exposure",
  image: "mercury-batteries.jpg"
},
{
  name: "Paint Thinner",
  category: "hazardous",
  description: "Solvent for oil-based paints",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Can be filtered and reused multiple times",
  image: "paint-thinner.jpg"
},
{
  name: "Mineral Spirits",
  category: "hazardous",
  description: "Petroleum-based solvent",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Allow solids to settle and decant clear liquid for reuse",
  image: "mineral-spirits.jpg"
},
{
  name: "Turpentine",
  category: "hazardous",
  description: "Paint solvent and cleaner",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Highly flammable - store away from heat",
  image: "turpentine.jpg"
},
{
  name: "Varnish",
  category: "hazardous",
  description: "Wood finishing product",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Never pour down drains - forms dangerous vapors",
  image: "varnish.jpg"
},
{
  name: "Stain",
  category: "hazardous",
  description: "Wood coloring product",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Use up completely or donate unused portions",
  image: "stain.jpg"
},
{
  name: "Paint Stripper",
  category: "hazardous",
  description: "Chemical paint remover",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Contains methylene chloride - extremely hazardous",
  image: "paint-stripper.jpg"
},
{
  name: "Wood Preservative",
  category: "hazardous",
  description: "Chemical treatment for lumber",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Often contains arsenic or creosote",
  image: "wood-preservative.jpg"
},
{
  name: "Fiberglass Resin",
  category: "hazardous",
  description: "Boat/auto repair chemical",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Never mix with other chemicals",
  image: "fiberglass-resin.jpg"
},
{
  name: "Epoxy",
  category: "hazardous",
  description: "Two-part adhesive",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Mix only what you'll use to avoid waste",
  image: "epoxy.jpg"
},
{
  name: "Roofing Tar",
  category: "hazardous",
  description: "Black waterproofing compound",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Contains petroleum distillates",
  image: "roofing-tar.jpg"
},
{
  name: "Driveway Sealer",
  category: "hazardous",
  description: "Asphalt coating product",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Contains coal tar - carcinogenic",
  image: "driveway-sealer.jpg"
},
{
  name: "Concrete Cure",
  category: "hazardous",
  description: "Chemical hardening compound",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Forms hazardous vapors when wet",
  image: "concrete-cure.jpg"
},
{
  name: "Muriatic Acid",
  category: "hazardous",
  description: "Hydrochloric acid solution",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "NEVER mix with other chemicals",
  image: "muriatic-acid.jpg"
},
{
  name: "Rust Remover",
  category: "hazardous",
  description: "Acid-based metal cleaner",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Wear protective equipment when handling",
  image: "rust-remover.jpg"
},
{
  name: "Metal Polish",
  category: "hazardous",
  description: "Chemical cleaner for metals",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Contains toxic heavy metals",
  image: "metal-polish.jpg"
},
{
  name: "Brass Cleaner",
  category: "hazardous",
  description: "Specialized metal cleaner",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Highly acidic - corrodes skin",
  image: "brass-cleaner.jpg"
},
{
  name: "Copper Cleaner",
  category: "hazardous",
  description: "Chemical brightener for copper",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Contains ammonia compounds",
  image: "copper-cleaner.jpg"
},
{
  name: "Silver Polish",
  category: "hazardous",
  description: "Tarnish remover for silver",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Contains thiourea - carcinogenic",
  image: "silver-polish.jpg"
},
{
  name: "Oven Cleaner",
  category: "hazardous",
  description: "Caustic spray cleaner",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Lye-based - causes chemical burns",
  image: "oven-cleaner.jpg"
},
{
  name: "Drain Cleaner",
  category: "hazardous",
  description: "Pipe declogging chemical",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Creates violent reactions with other chemicals",
  image: "drain-cleaner.jpg"
},
{
  name: "Septic Treatment",
  category: "hazardous",
  description: "Chemical tank additives",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Contains formaldehyde - kills beneficial bacteria",
  image: "septic-treatment.jpg"
},
{
  name: "Furniture Polish",
  category: "hazardous",
  description: "Aerosol wood treatment",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Flammable propellants - don't puncture",
  image: "furniture-polish.jpg"
},
{
  name: "Leather Conditioner",
  category: "hazardous",
  description: "Chemical treatment for leather",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Contains petroleum distillates",
  image: "leather-conditioner.jpg"
},
{
  name: "Shoe Polish",
  category: "hazardous",
  description: "Colored leather treatment",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Nitrobenzene content - highly toxic",
  image: "shoe-polish.jpg"
},
{
  name: "Spot Remover",
  category: "hazardous",
  description: "Dry cleaning fluid",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Perchloroethylene - known carcinogen",
  image: "spot-remover.jpg"
},
{
  name: "Mothballs",
  category: "hazardous",
  description: "Pest deterrent crystals",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Naphthalene or paradichlorobenzene - both toxic",
  image: "mothballs.jpg"
},
{
  name: "Pesticides",
  category: "hazardous",
  description: "Garden/agricultural chemicals",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Keep in original container with label",
  image: "pesticides.jpg"
},
{
  name: "Herbicides",
  category: "hazardous",
  description: "Weed killing chemicals",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Glyphosate requires special handling",
  image: "herbicides.jpg"
},
{
  name: "Rodenticides",
  category: "hazardous",
  description: "Rat/mouse poison",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Extremely lethal to pets/wildlife",
  image: "rodenticides.jpg"
},
{
  name: "Insecticides",
  category: "hazardous",
  description: "Bug killing sprays",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Pyrethroids are neurotoxins",
  image: "insecticides.jpg"
},
{
  name: "Fungicides",
  category: "hazardous",
  description: "Mold/mildew killers",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Often contain copper compounds",
  image: "fungicides.jpg"
},
{
  name: "Flea Powder",
  category: "hazardous",
  description: "Pet treatment chemical",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Carbaryl is extremely toxic to bees",
  image: "flea-powder.jpg"
},
{
  name: "Tick Spray",
  category: "hazardous",
  description: "Yard/pet treatment",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Permethrin persists in environment",
  image: "tick-spray.jpg"
},
{
  name: "Antifreeze",
  category: "hazardous",
  description: "Engine coolant",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Ethylene glycol is sweet but deadly",
  image: "antifreeze.jpg"
},
{
  name: "Brake Fluid",
  category: "hazardous",
  description: "Hydraulic system fluid",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Glycol ethers damage nervous system",
  image: "brake-fluid.jpg"
},
{
  name: "Transmission Fluid",
  category: "hazardous",
  description: "Vehicle gear oil",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Contains heavy metal additives",
  image: "transmission-fluid.jpg"
},
{
  name: "Power Steering Fluid",
  category: "hazardous",
  description: "Hydraulic system fluid",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Similar hazards to transmission fluid",
  image: "power-steering-fluid.jpg"
},
{
  name: "Carburetor Cleaner",
  category: "hazardous",
  description: "Engine part solvent",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Extremely flammable vapors",
  image: "carburetor-cleaner.jpg"
},
{
  name: "Parts Washer Solvent",
  category: "hazardous",
  description: "Mechanical degreaser",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Often contains trichloroethylene",
  image: "parts-washer.jpg"
},
{
  name: "Gasoline",
  category: "hazardous",
  description: "Vehicle fuel",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Never store in unapproved containers",
  image: "gasoline.jpg"
},
{
  name: "Diesel Fuel",
  category: "hazardous",
  description: "Heavy vehicle fuel",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "More persistent than gasoline in environment",
  image: "diesel-fuel.jpg"
},
{
  name: "Kerosene",
  category: "hazardous",
  description: "Heating/fuel oil",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Store away from living spaces due to fumes",
  image: "kerosene.jpg"
},
{
  name: "Lighter Fluid",
  category: "hazardous",
  description: "Charcoal starter fluid",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Extremely flammable - keep from sparks",
  image: "lighter-fluid.jpg"
},
{
  name: "Torch Fuel",
  category: "hazardous",
  description: "Propane/butane canisters",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Never puncture - return for refill if possible",
  image: "torch-fuel.jpg"
},
{
  name: "Aerosol Cans",
  category: "hazardous",
  description: "Pressurized spray containers",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Completely empty before disposal",
  image: "aerosol-cans.jpg"
},
{
  name: "Compressed Gas Cylinders",
  category: "hazardous",
  description: "Propane/oxygen/helium tanks",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Return to supplier when possible",
  image: "gas-cylinders.jpg"
},
{
  name: "Fire Extinguishers",
  category: "hazardous",
  description: "Pressurized safety equipment",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Some fire departments accept for recycling",
  image: "fire-extinguishers.jpg"
},
{
  name: "Mercury Thermometers",
  category: "hazardous",
  description: "Old-style glass thermometers",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Handle with extreme care if broken",
  image: "mercury-thermometers.jpg"
},
{
  name: "Mercury Switches",
  category: "hazardous",
  description: "Tilt-activated electrical components",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Found in old thermostats/appliances",
  image: "mercury-switches.jpg"
},
{
  name: "Fluorescent Tubes",
  category: "hazardous",
  description: "Long glass light bulbs",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Wrap in newspaper to prevent breakage",
  image: "fluorescent-tubes.jpg"
},
{
  name: "CFL Bulbs",
  category: "hazardous",
  description: "Compact fluorescent lights",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Many hardware stores accept for recycling",
  image: "cfl-bulbs.jpg"
},
{
  name: "HID Bulbs",
  category: "hazardous",
  description: "High-intensity discharge lamps",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Used in streetlights/stadium lighting",
  image: "hid-bulbs.jpg"
},
{
  name: "UV Lamps",
  category: "hazardous",
  description: "Ultraviolet light bulbs",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Found in tanning beds/water purifiers",
  image: "uv-lamps.jpg"
},
{
  name: "Tanning Bed Bulbs",
  category: "hazardous",
  description: "Specialized UV lamps",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Extremely fragile - package carefully",
  image: "tanning-bulbs.jpg"
},
{
  name: "Photographic Chemicals",
  category: "hazardous",
  description: "Darkroom processing fluids",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Fixer contains silver compounds",
  image: "photo-chemicals.jpg"
},
{
  name: "X-ray Fixer",
  category: "hazardous",
  description: "Medical imaging chemical",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Silver recovery systems available",
  image: "xray-fixer.jpg"
},
{
  name: "Pool Chemicals",
  category: "hazardous",
  description: "Chlorine/pH adjusters",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Never mix different types",
  image: "pool-chemicals.jpg"
},
{
  name: "Spa Chemicals",
  category: "hazardous",
  description: "Hot tub maintenance products",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Bromine is less volatile than chlorine",
  image: "spa-chemicals.jpg"
},
{
  name: "Chemistry Sets",
  category: "hazardous",
  description: "Educational science kits",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "May contain multiple hazardous substances",
  image: "chemistry-sets.jpg"
},
{
  name: "Laboratory Chemicals",
  category: "hazardous",
  description: "School/science lab reagents",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Never mix unknowns together",
  image: "lab-chemicals.jpg"
},
{
  name: "Asbestos",
  category: "hazardous",
  description: "Insulation/construction material",
  disposalMethod: "Special asbestos disposal",
  binType: "Red Bin",
  tips: "Requires licensed abatement contractor",
  image: "asbestos.jpg"
},
{
  name: "Lead Paint Chips",
  category: "hazardous",
  description: "Flaking paint from older homes",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Wet before handling to reduce dust",
  image: "lead-paint.jpg"
},
{
  name: "PCB Ballasts",
  category: "hazardous",
  description: "Old electrical transformers",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Found in pre-1979 fluorescent fixtures",
  image: "pcb-ballasts.jpg"
},
{
  name: "Contaminated Soil",
  category: "hazardous",
  description: "Dirt with chemical/oil residues",
  disposalMethod: "Hazardous waste facility",
  binType: "Red Bin",
  tips: "Requires special testing before disposal",
  image: "contaminated-soil.jpg"
},
  // ... (55 more hazardous items) ...

  // ==================== E-WASTE (40 items) ====================
  {
    name: "Smartphone", category: "e-waste", description: "Old or broken mobile devices",
    disposalMethod: "E-waste recycling center", binType: "Special Collection", tips: "Consider donating if still functional",
    image: "smartphone.jpg"
  },
  {
    name: "Old Computer", category: "e-waste", description: "Outdated desktop or laptop computers",
    disposalMethod: "E-waste recycling center", binType: "Special Collection", tips: "Wipe hard drives before disposal for privacy",
    image: "computer.jpg"
  },
  {
    name: "Printer Cartridges", category: "e-waste", description: "Empty ink or toner cartridges",
    disposalMethod: "E-waste recycling or store drop-off", binType: "Special Collection", tips: "Many office supply stores offer recycling",
    image: "printer-cartridge.jpg"
  },
  // ... (37 more e-waste items) ...
  // ==================== E-WASTE (Additional 40 items) ====================
{
  name: "Laptop",
  category: "e-waste",
  description: "Portable computer device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Wipe hard drive and remove battery before recycling",
  image: "laptop.jpg"
},
{
  name: "Tablet",
  category: "e-waste",
  description: "Touchscreen mobile computer",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Factory reset before disposal",
  image: "tablet.jpg"
},
{
  name: "E-reader",
  category: "e-waste",
  description: "Digital book reading device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Many manufacturers offer take-back programs",
  image: "ereader.jpg"
},
{
  name: "Smartwatch",
  category: "e-waste",
  description: "Wearable computing device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Remove band and recycle separately",
  image: "smartwatch.jpg"
},
{
  name: "Fitness Tracker",
  category: "e-waste",
  description: "Activity monitoring wearable",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Check manufacturer for recycling options",
  image: "fitness-tracker.jpg"
},
{
  name: "Digital Camera",
  category: "e-waste",
  description: "Electronic still/video camera",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Remove battery and memory card first",
  image: "digital-camera.jpg"
},
{
  name: "DSLR Camera",
  category: "e-waste",
  description: "Professional digital camera",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Lenses can often be resold separately",
  image: "dslr-camera.jpg"
},
{
  name: "Camcorder",
  category: "e-waste",
  description: "Video recording device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Older models may contain valuable parts",
  image: "camcorder.jpg"
},
{
  name: "Drone",
  category: "e-waste",
  description: "Unmanned aerial vehicle",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Remove lithium battery before disposal",
  image: "drone.jpg"
},
{
  name: "GPS Device",
  category: "e-waste",
  description: "Satellite navigation unit",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Many automotive stores accept for recycling",
  image: "gps-device.jpg"
},
{
  name: "Calculator",
  category: "e-waste",
  description: "Electronic computing device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Remove button cell batteries if possible",
  image: "calculator.jpg"
},
{
  name: "Digital Picture Frame",
  category: "e-waste",
  description: "Electronic photo display",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "May contain reusable LCD screens",
  image: "digital-picture-frame.jpg"
},
{
  name: "Earbuds",
  category: "e-waste",
  description: "In-ear headphones",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Cables contain valuable copper wiring",
  image: "earbuds.jpg"
},
{
  name: "Headphones",
  category: "e-waste",
  description: "Over-ear audio devices",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Some brands offer recycling incentives",
  image: "headphones.jpg"
},
{
  name: "Microphone",
  category: "e-waste",
  description: "Audio recording device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Professional equipment may have resale value",
  image: "microphone.jpg"
},
{
  name: "Webcam",
  category: "e-waste",
  description: "Computer video camera",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Often contains reusable lens components",
  image: "webcam.jpg"
},
{
  name: "Computer Mouse",
  category: "e-waste",
  description: "Pointing device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Wired mice contain recyclable copper",
  image: "computer-mouse.jpg"
},
{
  name: "Keyboard",
  category: "e-waste",
  description: "Computer input device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Mechanical keyboards may have reusable switches",
  image: "keyboard.jpg"
},
{
  name: "External Hard Drive",
  category: "e-waste",
  description: "Portable data storage",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Physically destroy drives containing sensitive data",
  image: "external-hard-drive.jpg"
},
{
  name: "USB Flash Drive",
  category: "e-waste",
  description: "Portable data storage device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Secure erase or physically destroy before recycling",
  image: "usb-drive.jpg"
},
{
  name: "SD Card",
  category: "e-waste",
  description: "Small memory storage card",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Format or physically destroy before disposal",
  image: "sd-card.jpg"
},
{
  name: "CD/DVD Drive",
  category: "e-waste",
  description: "Optical disc reader",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Contains small precision motors",
  image: "dvd-drive.jpg"
},
{
  name: "Computer Fan",
  category: "e-waste",
  description: "Cooling component",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Contains copper windings in motor",
  image: "computer-fan.jpg"
},
{
  name: "Power Supply Unit",
  category: "e-waste",
  description: "Computer power converter",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Contains valuable copper and aluminum",
  image: "power-supply.jpg"
},
{
  name: "Motherboard",
  category: "e-waste",
  description: "Main computer circuit board",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Contains gold plating and rare metals",
  image: "motherboard.jpg"
},
{
  name: "Graphics Card",
  category: "e-waste",
  description: "Computer video processing unit",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "High-end models may have resale value",
  image: "graphics-card.jpg"
},
{
  name: "RAM Sticks",
  category: "e-waste",
  description: "Computer memory modules",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Contains gold contacts - valuable for recycling",
  image: "ram-sticks.jpg"
},
{
  name: "Computer Case",
  category: "e-waste",
  description: "Metal/plastic computer enclosure",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Separate metal and plastic components if possible",
  image: "computer-case.jpg"
},
{
  name: "Inkjet Printer",
  category: "e-waste",
  description: "Home/office printing device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Remove ink cartridges before recycling",
  image: "inkjet-printer.jpg"
},
{
  name: "Laser Printer",
  category: "e-waste",
  description: "Office-grade printer",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Contains toner cartridge - recycle separately",
  image: "laser-printer.jpg"
},
{
  name: "3D Printer",
  category: "e-waste",
  description: "Additive manufacturing device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "May contain specialized components with reuse value",
  image: "3d-printer.jpg"
},
{
  name: "Scanner",
  category: "e-waste",
  description: "Document digitization device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Flatbed scanners contain glass - handle carefully",
  image: "scanner.jpg"
},
{
  name: "Fax Machine",
  category: "e-waste",
  description: "Document transmission device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Older models may contain thermal paper rolls",
  image: "fax-machine.jpg"
},
{
  name: "Label Printer",
  category: "e-waste",
  description: "Specialized printing device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Remove any remaining label rolls",
  image: "label-printer.jpg"
},
{
  name: "Barcode Scanner",
  category: "e-waste",
  description: "Retail/commercial scanning device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Often contains reusable laser components",
  image: "barcode-scanner.jpg"
},
{
  name: "Point-of-Sale System",
  category: "e-waste",
  description: "Retail checkout computer",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Wipe all transaction data before disposal",
  image: "pos-system.jpg"
},
{
  name: "Cash Register",
  category: "e-waste",
  description: "Electronic money handling device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Older models may contain mechanical components",
  image: "cash-register.jpg"
},
{
  name: "Digital Signage",
  category: "e-waste",
  description: "Electronic display screens",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "LCD panels require special handling",
  image: "digital-signage.jpg"
},
{
  name: "Ethernet Switch",
  category: "e-waste",
  description: "Network connection device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Small businesses may reuse older equipment",
  image: "ethernet-switch.jpg"
},
{
  name: "Router",
  category: "e-waste",
  description: "Internet networking device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Reset to factory settings before recycling",
  image: "router.jpg"
},
{
  name: "Modem",
  category: "e-waste",
  description: "Internet connection device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Some ISPs accept old equipment for recycling",
  image: "modem.jpg"
},
{
  name: "NAS Device",
  category: "e-waste",
  description: "Network-attached storage",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Wipe all hard drives before disposal",
  image: "nas-device.jpg"
},
{
  name: "Video Game Console",
  category: "e-waste",
  description: "Home entertainment system",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Vintage consoles may have collector value",
  image: "game-console.jpg"
},
{
  name: "VR Headset",
  category: "e-waste",
  description: "Virtual reality device",
  disposalMethod: "E-waste recycling center",
  binType: "Special Collection",
  tips: "Contains specialized lenses and displays",
  image: "vr-headset.jpg"
},

  // ==================== OTHER WASTE (40 items) ====================
  {
    name: "Pizza Box", category: "other", description: "Cardboard food container",
    disposalMethod: "Recycle if clean, landfill if greasy", binType: "Blue Bin or Black Bin", tips: "Tear off clean parts to recycle",
    image: "pizza-box.jpg"
  },
  {
    name: "Broken Ceramics", category: "other", description: "Shattered plates or mugs",
    disposalMethod: "Landfill", binType: "Black Bin", tips: "Wrap in paper before disposal to prevent injuries",
    image: "ceramics.jpg"
  },
  {
    name: "Used Paper Towels", category: "other", description: "Soiled paper cleaning products",
    disposalMethod: "Landfill", binType: "Black Bin", tips: "Consider using reusable cloths to reduce waste",
    image: "paper-towels.jpg"
  },
  // ... (37 more other waste items) ...
  {
  name: "Broken Dishes",
  category: "other",
  description: "Shattered ceramic plates or bowls",
  disposalMethod: "Landfill (wrapped securely)",
  binType: "Black Bin",
  tips: "Wrap in newspaper to prevent injuries",
  image: "broken-dishes.jpg"
},
{
  name: "Used Tissues",
  category: "other",
  description: "Disposable paper tissues",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Do not compost (may contain pathogens)",
  image: "used-tissues.jpg"
},
{
  name: "Cotton Swabs",
  category: "other",
  description: "Plastic-stemmed cotton buds",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Switch to paper-stemmed versions for composting",
  image: "cotton-swabs.jpg"
},
{
  name: "Dental Floss",
  category: "other",
  description: "Used nylon floss",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Non-recyclable and non-compostable",
  image: "dental-floss.jpg"
},
{
  name: "Band-Aids",
  category: "other",
  description: "Used adhesive bandages",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "May contain biohazards - wrap before disposal",
  image: "band-aids.jpg"
},
{
  name: "Cigarette Butts",
  category: "other",
  description: "Filter remnants",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Toxic to wildlife - use proper receptacles",
  image: "cigarette-butts.jpg"
},
{
  name: "Rubber Bands",
  category: "other",
  description: "Small elastic loops",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Reuse as much as possible",
  image: "rubber-bands.jpg"
},
{
  name: "Chewing Gum",
  category: "other",
  description: "Used gum",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Most gum contains synthetic rubber",
  image: "chewing-gum.jpg"
},
{
  name: "Pet Hair",
  category: "other",
  description: "Fur from brushing animals",
  disposalMethod: "Landfill/Compost (if untreated)",
  binType: "Black Bin/Green Bin",
  tips: "Can compost if free from flea treatments",
  image: "pet-hair.jpg"
},
{
  name: "Dryer Lint",
  category: "other",
  description: "Fibers from clothing",
  disposalMethod: "Landfill/Compost (natural fibers only)",
  binType: "Black Bin/Green Bin",
  tips: "Avoid composting if clothes contain synthetics",
  image: "dryer-lint.jpg"
},
{
  name: "Wax Paper",
  category: "other",
  description: "Wax-coated paper",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Cannot be recycled due to wax coating",
  image: "wax-paper.jpg"
},
{
  name: "Parchment Paper",
  category: "other",
  description: "Baking paper",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Silicone coating makes it non-recyclable",
  image: "parchment-paper.jpg"
},
{
  name: "Stickers",
  category: "other",
  description: "Adhesive labels",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Remove from recyclables to avoid contamination",
  image: "stickers.jpg"
},
{
  name: "Latex Balloons",
  category: "other",
  description: "Deflated party balloons",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Do not release - harms wildlife",
  image: "latex-balloons.jpg"
},
{
  name: "Mylar Balloons",
  category: "other",
  description: "Metallic plastic balloons",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Puncture to prevent floating in landfills",
  image: "mylar-balloons.jpg"
},
{
  name: "Incandescent Light Bulbs",
  category: "other",
  description: "Old-style filament bulbs",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Not hazardous but not recyclable",
  image: "incandescent-bulbs.jpg"
},
{
  name: "Halogen Bulbs",
  category: "other",
  description: "High-intensity bulbs",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Wrap to prevent glass breakage",
  image: "halogen-bulbs.jpg"
},
{
  name: "Broken Toys",
  category: "other",
  description: "Plastic toys beyond repair",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Donate usable toys first",
  image: "broken-toys.jpg"
},
{
  name: "Stuffed Animals",
  category: "other",
  description: "Worn-out plush toys",
  disposalMethod: "Landfill/Donation",
  binType: "Black Bin",
  tips: "Check animal shelters for donation needs",
  image: "stuffed-animals.jpg"
},
{
  name: "Leather Goods",
  category: "other",
  description: "Worn-out leather items",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Some specialty recyclers accept leather",
  image: "leather-goods.jpg"
},
{
  name: "Vinyl Records",
  category: "other",
  description: "Old phonograph records",
  disposalMethod: "Landfill/Specialty Recycling",
  binType: "Black Bin",
  tips: "Some artists repurpose for crafts",
  image: "vinyl-records.jpg"
},
{
  name: "Cassette Tapes",
  category: "other",
  description: "Obsolete audio tapes",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Remove plastic reels if possible",
  image: "cassette-tapes.jpg"
},
{
  name: "VHS Tapes",
  category: "other",
  description: "Old video tapes",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Some e-waste programs accept the plastic cases",
  image: "vhs-tapes.jpg"
},
{
  name: "Carpet Padding",
  category: "other",
  description: "Foam/rubber underlay",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Some recycling programs exist for foam padding",
  image: "carpet-padding.jpg"
},
{
  name: "Latex Paint",
  category: "other",
  description: "Dried water-based paint",
  disposalMethod: "Landfill (when solidified)",
  binType: "Black Bin",
  tips: "Mix with kitty litter to dry out first",
  image: "latex-paint.jpg"
},
{
  name: "Concrete Blocks",
  category: "other",
  description: "Broken masonry",
  disposalMethod: "Landfill/Construction Recycling",
  binType: "Black Bin",
  tips: "Check for local construction debris recycling",
  image: "concrete-blocks.jpg"
},
{
  name: "Bricks",
  category: "other",
  description: "Clay building blocks",
  disposalMethod: "Landfill/Reuse",
  binType: "Black Bin",
  tips: "Offer for free on reuse platforms first",
  image: "bricks.jpg"
},
{
  name: "Asphalt Shingles",
  category: "other",
  description: "Roofing material",
  disposalMethod: "Landfill/Specialty Recycling",
  binType: "Black Bin",
  tips: "Some companies recycle into road material",
  image: "asphalt-shingles.jpg"
},
{
  name: "Drywall",
  category: "other",
  description: "Gypsum wallboard",
  disposalMethod: "Landfill/Construction Recycling",
  binType: "Black Bin",
  tips: "Recycle through specialty construction programs",
  image: "drywall.jpg"
},
{
  name: "Wood with Paint/Nails",
  category: "other",
  description: "Treated lumber",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Not suitable for composting",
  image: "treated-wood.jpg"
},
{
  name: "Cork",
  category: "other",
  description: "Wine stoppers or boards",
  disposalMethod: "Landfill/Compost (natural cork only)",
  binType: "Black Bin/Green Bin",
  tips: "Composite corks contain plastics",
  image: "cork.jpg"
},
{
  name: "Potting Soil",
  category: "other",
  description: "Used garden soil",
  disposalMethod: "Landfill/Reuse in gardens",
  binType: "Black Bin",
  tips: "Rejuvenate with compost instead of discarding",
  image: "potting-soil.jpg"
},
{
  name: "Latex Gloves",
  category: "other",
  description: "Disposable gloves",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Switch to reusable alternatives",
  image: "latex-gloves.jpg"
},
{
  name: "Dust Masks",
  category: "other",
  description: "Disposable face masks",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Cut straps to prevent wildlife entanglement",
  image: "dust-masks.jpg"
},
{
  name: "Pet Waste",
  category: "other",
  description: "Dog/cat feces",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Do not compost (may contain parasites)",
  image: "pet-waste.jpg"
},
{
  name: "Cat Litter",
  category: "other",
  description: "Used clay/clumping litter",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Avoid flushing - clogs pipes",
  image: "cat-litter.jpg"
},
{
  name: "Feather Pillows",
  category: "other",
  description: "Worn-out bedding",
  disposalMethod: "Landfill/Donation",
  binType: "Black Bin",
  tips: "Animal shelters may accept clean donations",
  image: "feather-pillows.jpg"
},
{
  name: "Polyester Stuffing",
  category: "other",
  description: "Fiberfill from pillows/toys",
  disposalMethod: "Landfill",
  binType: "Black Bin",
  tips: "Reuse for crafts if clean",
  image: "polyester-stuffing.jpg"
},
{
  name: "Old Shoes",
  category: "other",
  description: "Worn-out footwear",
  disposalMethod: "Landfill/Donation",
  binType: "Black Bin",
  tips: "Some brands offer recycling programs",
  image: "old-shoes.jpg"
},
{
  name: "Clothing (Unwearable)",
  category: "other",
  description: "Ripped/stained fabrics",
  disposalMethod: "Landfill/Textile Recycling",
  binType: "Black Bin",
  tips: "Some organizations recycle into rags or insulation",
  image: "unwearable-clothing.jpg"
},
{
        name: "Plastic Bottle",
        category: "recyclable",
        description: "Empty plastic beverage containers",
        disposalMethod: "Recycle after rinsing",
        binType: "Blue Bin",
        tips: "Remove caps and labels if possible",
        contact: "080-23456790 (Recycling Center)",
        location: "Nearest Blue Bin Collection Point"
    }

];

// Total: 60 organic + 100 recyclable + 60 hazardous + 40 e-waste + 40 other = 300 items