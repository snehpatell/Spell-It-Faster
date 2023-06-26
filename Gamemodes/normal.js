//Normal Mode

var gameState = false
var wordList = ['WHICH', 'THERE', 'THEIR', 'ABOUT', 'WOULD', 'THESE', 'OTHER', 'WORDS', 'COULD', 'WRITE', 'FIRST', 'WATER', 'AFTER', 'WHERE', 'RIGHT', 'THINK', 'THREE', 'YEARS', 'PLACE', 'SOUND', 'GREAT', 'AGAIN', 'STILL', 'EVERY', 'SMALL', 'FOUND', 'THOSE', 'NEVER', 'UNDER', 'MIGHT', 'WHILE', 'HOUSE', 'WORLD', 'BELOW', 'ASKED', 'GOING', 'LARGE', 'UNTIL', 'ALONG', 'SHALL', 'BEING', 'OFTEN', 'EARTH', 'BEGAN', 'SINCE', 'STUDY', 'NIGHT', 'LIGHT', 'ABOVE', 'PAPER', 'PARTS', 'YOUNG', 'STORY', 'POINT', 'TIMES', 'HEARD', 'WHOLE', 'WHITE', 'GIVEN', 'MEANS', 'MUSIC', 'MILES', 'THING', 'TODAY', 'LATER', 'USING', 'MONEY', 'LINES', 'ORDER', 'GROUP', 'AMONG', 'LEARN', 'KNOWN', 'SPACE', 'TABLE', 'EARLY', 'TREES', 'SHORT', 'HANDS', 'STATE', 'BLACK', 'SHOWN', 'STOOD', 'FRONT', 'VOICE', 'KINDS', 'MAKES', 'COMES', 'CLOSE', 'POWER', 'LIVED', 'VOWEL', 'TAKEN', 'BUILT', 'HEART', 'READY', 'QUITE', 'CLASS', 'BRING', 'ROUND', 'HORSE', 'SHOWS', 'PIECE', 'GREEN', 'STAND', 'BIRDS', 'START', 'RIVER', 'TRIED', 'LEAST', 'FIELD', 'WHOSE', 'GIRLS', 'LEAVE', 'ADDED', 'COLOR', 'THIRD', 'HOURS', 'MOVED', 'PLANT', 'DOING', 'NAMES', 'FORMS', 'HEAVY', 'IDEAS', 'CRIED', 'CHECK', 'FLOOR', 'BEGIN', 'WOMAN', 'ALONE', 'PLANE', 'SPELL', 'WATCH', 'CARRY', 'WROTE', 'CLEAR', 'NAMED', 'BOOKS', 'CHILD', 'GLASS', 'HUMAN', 'TAKES', 'PARTY', 'BUILD', 'SEEMS', 'BLOOD', 'SIDES', 'SEVEN', 'MOUTH', 'SOLVE', 'NORTH', 'VALUE', 'DEATH', 'MAYBE', 'HAPPY', 'TELLS', 'GIVES', 'LOOKS', 'SHAPE', 'LIVES', 'STEPS', 'AREAS', 'SENSE', 'SPEAK', 'FORCE', 'OCEAN', 'SPEED', 'WOMEN', 'METAL', 'SOUTH', 'GRASS', 'SCALE', 'CELLS', 'LOWER', 'SLEEP', 'WRONG', 'PAGES', 'SHIPS', 'NEEDS', 'ROCKS', 'EIGHT', 'MAJOR', 'LEVEL', 'TOTAL', 'AHEAD', 'REACH', 'STARS', 'STORE', 'SIGHT', 'TERMS', 'CATCH', 'WORKS', 'BOARD', 'COVER', 'SONGS', 'EQUAL', 'STONE', 'WAVES', 'GUESS', 'DANCE', 'SPOKE', 'BREAK', 'CAUSE', 'RADIO', 'WEEKS', 'LANDS', 'BASIC', 'LIKED', 'TRADE', 'FRESH', 'FINAL', 'FIGHT', 'MEANT', 'DRIVE', 'SPENT', 'LOCAL', 'WAXES', 'KNOWS', 'TRAIN', 'BREAD', 'HOMES', 'TEETH', 'COAST', 'THICK', 'BROWN', 'CLEAN', 'QUIET',
'SUGAR', 'FACTS', 'STEEL', 'FORTH', 'RULES', 'NOTES', 'UNITS', 'PEACE', 'MONTH', 'VERBS', 'SEEDS', 'HELPS', 'SHARP', 'VISIT', 'WOODS', 'CHIEF', 'WALLS', 'CROSS', 'WINGS', 'GROWN', 'CASES', 'FOODS', 'CROPS', 'FRUIT', 'STICK', 'WANTS', 'STAGE', 'SHEEP', 'NOUNS', 'PLAIN', 'DRINK', 'BONES', 'APART', 'TURNS', 'MOVES', 'TOUCH', 'ANGLE', 'BASED', 'RANGE', 'MARKS', 'TIRED', 'OLDER', 'FARMS', 'SPEND', 'SHOES', 'GOODS', 'CHAIR', 'TWICE', 'CENTS', 'EMPTY', 'ALIKE', 'STYLE', 'BROKE', 'PAIRS', 'COUNT', 'ENJOY', 'SCORE', 'SHORE', 'ROOTS', 'PAINT', 'HEADS', 'SHOOK', 'SERVE', 'ANGRY', 'CROWD', 'WHEEL', 'QUICK', 'DRESS', 'SHARE', 'ALIVE', 'NOISE', 'SOLID', 'CLOTH', 'SIGNS', 'HILLS', 'TYPES', 'DRAWN', 'WORTH', 'TRUCK', 'PIANO', 'UPPER', 'LOVED', 'USUAL', 'FACES', 'DROVE', 'CABIN', 'BOATS', 'TOWNS', 'PROUD', 'COURT', 'MODEL', 'PRIME', 'FIFTY', 'PLANS', 'YARDS', 'PROVE', 'TOOLS', 'PRICE', 'SHEET', 'SMELL', 'BOXES', 'RAISE', 'MATCH', 'TRUTH', 'ROADS', 'THREW', 'ENEMY', 'LUNCH', 'CHART', 'SCENE', 'GRAPH', 'DOUBT', 'GUIDE', 'WINDS', 'BLOCK', 'GRAIN', 'SMOKE', 'MIXED', 'GAMES', 'WAGON', 'SWEET', 'TOPIC', 'EXTRA', 'PLATE', 'TITLE', 'KNIFE', 'FENCE', 'FALLS', 'CLOUD', 'WHEAT', 'PLAYS', 'ENTER', 'BROAD', 'STEAM', 'ATOMS', 'PRESS', 'LYING', 'BASIS', 'CLOCK', 'TASTE', 'GROWS', 'THANK', 'STORM', 'AGREE', 'BRAIN', 'TRACK', 'SMILE', 'FUNNY', 'BEACH', 'STOCK', 'HURRY', 'SAVED', 'SORRY', 'GIANT', 'TRAIL', 'OFFER', 'OUGHT', 'ROUGH', 'DAILY', 'AVOID', 'KEEPS', 'THROW', 'ALLOW', 'CREAM', 'LAUGH', 'EDGES', 'TEACH', 'FRAME', 'BELLS', 'DREAM', 'MAGIC', 'OCCUR', 'ENDED', 'CHORD', 'FALSE', 'SKILL', 'HOLES', 'DOZEN', 'BRAVE', 'APPLE', 'CLIMB', 'OUTER', 'PITCH', 'RULER', 'HOLDS', 'FIXED', 'COSTS', 'CALLS', 'BLANK', 'STAFF', 'LABOR', 'EATEN', 'YOUTH', 'TONES', 'HONOR', 'GLOBE', 'GASES', 'DOORS', 'POLES', 'LOOSE', 'APPLY', 'TEARS', 'EXACT', 'BRUSH', 'CHEST', 'LAYER', 'WHALE', 'MINOR', 'FAITH', 'TESTS', 'JUDGE', 'ITEMS', 'WORRY', 'WASTE', 'HOPED', 'STRIP', 'BEGUN', 'ASIDE', 'LAKES', 'BOUND', 'DEPTH', 'CANDY', 'EVENT', 'WORSE', 'AWARE', 'SHELL', 'ROOMS', 'RANCH',
'IMAGE', 'SNAKE', 'ALOUD', 'DRIED', 'LIKES', 'MOTOR', 'POUND', 'KNEES', 'REFER', 'FULLY', 'CHAIN', 'SHIRT', 'FLOUR', 'DROPS', 'SPITE', 'ORBIT', 'BANKS', 'SHOOT', 'CURVE', 'TRIBE', 'TIGHT', 'BLIND', 'SLEPT', 'SHADE', 'CLAIM', 'FLIES', 'THEME', 'QUEEN', 'FIFTH', 'UNION', 'HENCE', 'STRAW', 'ENTRY', 'ISSUE', 'BIRTH', 'FEELS', 'ANGER', 'BRIEF', 'RHYME', 'GLORY', 'GUARD', 'FLOWS', 'FLESH', 'OWNED', 'TRICK', 'YOURS', 'SIZES', 'NOTED', 'WIDTH', 'BURST', 'ROUTE', 'LUNGS', 'UNCLE', 'BEARS', 'ROYAL', 'KINGS', 'FORTY', 'TRIAL', 'CARDS', 'BRASS', 'OPERA', 'CHOSE', 'OWNER', 'VAPOR', 'BEATS', 'MOUSE', 'TOUGH', 'WIRES', 'METER', 'TOWER', 'FINDS', 'INNER', 'STUCK', 'ARROW', 'POEMS', 'LABEL', 'SWING', 'SOLAR', 'TRULY', 'TENSE', 'BEANS', 'SPLIT', 'RISES', 'WEIGH', 'HOTEL', 'STEMS', 'PRIDE', 'SWUNG', 'GRADE', 'DIGIT', 'BADLY', 'BOOTS', 'PILOT', 'SALES', 'SWEPT', 'LUCKY', 'PRIZE', 'STOVE', 'TUBES', 'ACRES', 'WOUND', 'STEEP', 'SLIDE', 'TRUNK', 'ERROR', 'PORCH', 'SLAVE', 'EXIST', 'FACED', 'MINES', 'MARRY', 'JUICE', 'RACED', 'WAVED', 'GOOSE', 'TRUST', 'FEWER', 'FAVOR', 'MILLS', 'VIEWS', 'JOINT', 'EAGER', 'SPOTS', 'BLEND', 'RINGS', 'ADULT', 'INDEX', 'NAILS', 'HORNS', 'BALLS', 'FLAME', 'RATES', 'DRILL', 'TRACE', 'SKINS', 'WAXED', 'SEATS', 'STUFF', 'RATIO', 'MINDS', 'DIRTY', 'SILLY', 'COINS', 'HELLO', 'TRIPS', 'LEADS', 'RIFLE', 'HOPES', 'BASES', 'SHINE', 'BENCH', 'MORAL', 'FIRES', 'MEALS', 'SHAKE', 'SHOPS', 'CYCLE', 'MOVIE', 'SLOPE', 'CANOE', 'TEAMS', 'FOLKS', 'FIRED', 'BANDS', 'THUMB', 'SHOUT', 'CANAL', 'HABIT', 'REPLY', 'RULED', 'FEVER', 'CRUST', 'SHELF', 'WALKS', 'MIDST', 'CRACK', 'PRINT', 'TALES', 'COACH', 'STIFF', 'FLOOD', 'VERSE', 'AWAKE', 'ROCKY', 'MARCH', 'FAULT', 'SWIFT', 'FAINT', 'CIVIL', 'GHOST', 'FEAST', 'BLADE', 'LIMIT', 'GERMS', 'READS', 'DUCKS', 'DAIRY', 'WORST', 'GIFTS', 'LISTS', 'STOPS', 'RAPID', 'BRICK', 'CLAWS', 'BEADS', 'BEAST', 'SKIRT', 'CAKES', 'LIONS', 'FROGS', 'TRIES', 'NERVE', 'GRAND', 'ARMED', 'TREAT', 'HONEY', 'MOIST', 'LEGAL', 'PENNY', 'CROWN', 'SHOCK', 'TAXES', 'SIXTY', 'ALTAR', 'PULLS', 'SPORT', 'DRUMS', 'TALKS',
'DYING', 'DATES', 'DRANK', 'BLOWS', 'LEVER', 'WAGES', 'PROOF', 'DRUGS', 'TANKS', 'SINGS', 'TAILS', 'PAUSE', 'HERDS', 'AROSE', 'HATED', 'CLUES', 'NOVEL', 'SHAME', 'BURNT', 'RACES', 'FLASH', 'WEARY', 'HEELS', 'TOKEN', 'COATS', 'SPARE', 'SHINY', 'ALARM', 'DIMES', 'SIXTH', 'CLERK', 'MERCY', 'SUNNY', 'GUEST', 'FLOAT', 'SHONE', 'PIPES', 'WORMS', 'BILLS', 'SWEAT', 'SUITS', 'SMART', 'UPSET', 'RAINS', 'SANDY', 'RAINY', 'PARKS', 'SADLY', 'FANCY', 'RIDER', 'UNITY', 'BUNCH', 'ROLLS', 'CRASH', 'CRAFT', 'NEWLY', 'GATES', 'HATCH', 'PATHS', 'FUNDS', 'WIDER', 'GRACE', 'GRAVE', 'TIDES', 'ADMIT', 'SHIFT', 'SAILS', 'PUPIL', 'TIGER', 'ANGEL', 'CRUEL', 'AGENT', 'DRAMA', 'URGED', 'PATCH', 'NESTS', 'VITAL', 'SWORD', 'BLAME', 'WEEDS', 'SCREW', 'VOCAL', 'BACON', 'CHALK', 'CARGO', 'CRAZY', 'ACTED', 'GOATS', 'ARISE', 'WITCH', 'LOVES', 'QUEER', 'DWELL', 'BACKS', 'ROPES', 'SHOTS', 'MERRY', 'PHONE', 'CHEEK', 'PEAKS', 'IDEAL', 'BEARD', 'EAGLE', 'CREEK', 'CRIES', 'ASHES', 'STALL', 'YIELD', 'MAYOR', 'OPENS', 'INPUT', 'FLEET', 'TOOTH', 'CUBIC', 'WIVES', 'BURNS', 'POETS', 'APRON', 'SPEAR', 'ORGAN', 'CLIFF', 'STAMP', 'PASTE', 'RURAL', 'BAKED', 'CHASE', 'SLICE', 'SLANT', 'KNOCK', 'NOISY', 'SORTS', 'STAYS', 'WIPED', 'BLOWN', 'PILED', 'CLUBS', 'CHEER', 'WIDOW', 'TWIST', 'TENTH', 'HIDES', 'COMMA', 'SWEEP', 'SPOON', 'STERN', 'CREPT', 'MAPLE', 'DEEDS', 'RIDES', 'MUDDY', 'CRIME', 'JELLY', 'RIDGE', 'DRIFT', 'DUSTY', 'DEVIL', 'TEMPO', 'HUMOR', 'SENDS', 'STEAL', 'TENTS', 'WAIST', 'ROSES', 'REIGN', 'NOBLE', 'CHEAP', 'DENSE', 'LINEN', 'GEESE', 'WOVEN', 'POSTS', 'HIRED', 'WRATH', 'SALAD', 'BOWED', 'TIRES', 'SHARK', 'BELTS', 'GRASP', 'BLAST', 'POLAR', 'FUNGI', 'TENDS', 'PEARL', 'LOADS', 'JOKES', 'VEINS', 'FROST', 'HEARS', 'LOSES', 'HOSTS', 'DIVER', 'PHASE', 'TOADS', 'ALERT', 'TASKS', 'SEAMS', 'CORAL', 'FOCUS', 'NAKED', 'PUPPY', 'JUMPS', 'SPOIL', 'QUART', 'MACRO', 'FEARS', 'FLUNG', 'SPARK', 'VIVID', 'BROOK', 'STEER', 'SPRAY', 'DECAY', 'PORTS', 'SOCKS', 'URBAN', 'GOALS', 'GRANT', 'MINUS', 'FILMS', 'TUNES', 'SHAFT', 'FIRMS', 'SKIES', 'BRIDE', 'WRECK', 'FLOCK', 'STARE',
'HOBBY', 'BONDS', 'DARED', 'FADED', 'THIEF', 'CRUDE', 'PANTS', 'FLUTE', 'VOTES', 'TONAL', 'RADAR', 'WELLS', 'SKULL', 'HAIRS', 'ARGUE', 'WEARS', 'DOLLS', 'VOTED', 'CAVES', 'CARED', 'BROOM', 'SCENT', 'PANEL', 'FAIRY', 'OLIVE', 'BENDS', 'PRISM', 'LAMPS', 'CABLE', 'PEACH', 'RUINS', 'RALLY', 'SCHWA', 'LAMBS', 'SELLS', 'COOLS', 'DRAFT', 'CHARM', 'LIMBS', 'BRAKE', 'GAZED', 'CUBES', 'DELAY', 'BEAMS', 'FETCH', 'RANKS', 'ARRAY', 'HARSH', 'CAMEL', 'VINES', 'PICKS', 'NAVAL', 'PURSE', 'RIGID', 'CRAWL', 'TOAST', 'SOILS', 'SAUCE', 'BASIN', 'PONDS', 'TWINS', 'WRIST', 'FLUID', 'POOLS', 'BRAND', 'STALK', 'ROBOT', 'REEDS', 'HOOFS', 'BUSES', 'SHEER', 'GRIEF', 'BLOOM', 'DWELT', 'MELTS', 'RISEN', 'FLAGS', 'KNELT', 'FIBER', 'ROOFS', 'FREED', 'ARMOR', 'PILES', 'AIMED', 'ALGAE', 'TWIGS', 'LEMON', 'DITCH', 'DRUNK', 'RESTS', 'CHILL', 'SLAIN', 'PANIC', 'CORDS', 'TUNED', 'CRISP', 'LEDGE', 'DIVED', 'SWAMP', 'CLUNG', 'STOLE', 'MOLDS', 'YARNS', 'LIVER', 'GAUGE', 'BREED', 'STOOL', 'GULLS', 'AWOKE', 'GROSS', 'DIARY', 'RAILS', 'BELLY', 'TREND', 'FLASK', 'STAKE', 'FRIED', 'DRAWS', 'ACTOR', 'HANDY', 'BOWLS', 'HASTE', 'SCOPE', 'DEALS', 'KNOTS', 'MOONS', 'ESSAY', 'THUMP', 'HANGS', 'BLISS', 'DEALT', 'GAINS', 'CLOWN', 'PALMS', 'CONES', 'ROAST', 'TIDAL', 'BORED', 'CHANT', 'ACIDS', 'DOUGH', 'CAMPS', 'SWORE', 'LOVER', 'HOOKS', 'MALES', 'COCOA', 'PUNCH', 'AWARD', 'REINS', 'NINTH', 'NOSES', 'LINKS', 'DRAIN', 'FILLS', 'NYLON', 'LUNAR', 'PULSE', 'FLOWN', 'ELBOW', 'FATAL', 'SITES', 'MOTHS', 'MEATS', 'FOXES', 'MINED', 'ATTIC', 'FIERY', 'MOUNT', 'USAGE', 'SWEAR', 'SNOWY', 'RUSTY', 'SCARE', 'TRAPS', 'RELAX', 'REACT', 'VALID', 'ROBIN', 'CEASE', 'GILLS', 'PRIOR', 'SAFER', 'POLIO', 'LOYAL', 'SWELL', 'SALTY', 'MARSH', 'VAGUE', 'WEAVE', 'MOUND', 'SEALS', 'MULES', 'VIRUS', 'SCOUT', 'ACUTE', 'WINDY', 'STOUT', 'FOLDS', 'SEIZE', 'HILLY', 'JOINS', 'PLUCK', 'STACK', 'LORDS', 'DUNES', 'BURRO', 'HAWKS', 'TROUT', 'FEEDS', 'SCARF', 'HALLS', 'COALS', 'TOWEL', 'SOULS', 'ELECT', 'BUGGY', 'PUMPS', 'LOANS', 'SPINS', 'FILES', 'OXIDE', 'PAINS', 'PHOTO', 'RIVAL', 'FLATS', 'SYRUP',
'RODEO', 'SANDS', 'MOOSE', 'PINTS', 'CURLY', 'COMIC', 'CLOAK', 'ONION', 'CLAMS', 'SCRAP', 'DIDST', 'COUCH', 'CODES', 'FAILS', 'OUNCE', 'LODGE', 'GREET', 'GYPSY', 'UTTER', 'PAVED', 'ZONES', 'FOURS', 'ALLEY', 'TILES', 'BLESS', 'CREST', 'ELDER', 'KILLS', 'YEAST', 'BUGLE', 'MEDAL', 'ROLES', 'HOUND', 'SNAIL', 'ALTER', 'ANKLE', 'RELAY', 'LOOPS', 'ZEROS', 'BITES', 'MODES', 'DEBTS', 'REALM', 'GLOVE', 'RAYON', 'SWIMS', 'POKED', 'STRAY', 'LIFTS', 'MAKER', 'LUMPS', 'GRAZE', 'DREAD', 'BARNS', 'DOCKS', 'MASTS', 'POURS', 'WHARF', 'CURSE', 'PLUMP', 'ROBES', 'SEEKS', 'CEDAR', 'CURLS', 'JOLLY', 'MYTHS', 'CAGES', 'GLOOM', 'LOCKS', 'PEDAL', 'BEETS', 'CROWS', 'ANODE', 'SLASH', 'CREEP', 'ROWED', 'CHIPS', 'FISTS', 'WINES', 'CARES', 'VALVE', 'NEWER', 'MOTEL', 'IVORY', 'NECKS', 'CLAMP', 'BARGE', 'BLUES', 'ALIEN', 'FROWN', 'STRAP', 'CREWS', 'SHACK', 'GONNA', 'SAVES', 'STUMP', 'FERRY', 'IDOLS', 'COOKS', 'JUICY', 'GLARE', 'CARTS', 'ALLOY', 'BULBS', 'LAWNS', 'LASTS', 'FUELS', 'ODDLY', 'CRANE', 'FILED', 'WEIRD', 'SHAWL', 'SLIPS', 'TROOP', 'BOLTS', 'SUITE', 'SLEEK', 'QUILT', 'TRAMP', 'BLAZE', 'ATLAS', 'ODORS', 'SCRUB', 'CRABS', 'PROBE', 'LOGIC', 'ADOBE', 'EXILE', 'REBEL', 'GRIND', 'STING', 'SPINE', 'CLING', 'DESKS', 'GROVE', 'LEAPS', 'PROSE', 'LOFTY', 'AGONY', 'SNARE', 'TUSKS', 'BULLS', 'MOODS', 'HUMID', 'FINER', 'DIMLY', 'PLANK', 'CHINA', 'PINES', 'GUILT', 'SACKS', 'BRACE', 'QUOTE', 'LATHE', 'GAILY', 'FONTS', 'SCALP', 'ADOPT', 'FOGGY', 'FERNS', 'GRAMS', 'CLUMP', 'PERCH', 'TUMOR', 'TEENS', 'CRANK', 'FABLE', 'HEDGE', 'GENES', 'SOBER', 'BOAST', 'TRACT', 'CIGAR', 'UNITE', 'OWING', 'THIGH', 'HAIKU', 'SWISH', 'DIKES', 'WEDGE', 'BOOTH', 'EASED', 'FRAIL', 'COUGH', 'TOMBS', 'DARTS', 'FORTS', 'CHOIR', 'POUCH', 'PINCH', 'HAIRY', 'BUYER', 'TORCH', 'VIGOR', 'WALTZ', 'HEATS', 'HERBS', 'USERS', 'FLINT', 'CLICK', 'MADAM', 'BLEAK', 'BLUNT', 'AIDED', 'LACKS', 'MASKS', 'WADED', 'RISKS', 'NURSE', 'CHAOS', 'SEWED', 'CURED', 'AMPLE', 'LEASE', 'STEAK', 'SINKS', 'MERIT', 'BLUFF', 'BATHE', 'GLEAM', 'BONUS', 'COLTS', 'SHEAR', 'GLAND', 'SILKY', 'SKATE', 'BIRCH',
'ANVIL', 'SLEDS', 'GROAN', 'MAIDS', 'MEETS', 'SPECK', 'HYMNS', 'HINTS', 'DROWN', 'BOSOM', 'SLICK', 'QUEST', 'COILS', 'SPIED', 'SNOWS', 'STEAD', 'SNACK', 'PLOWS', 'BLOND', 'TAMED', 'THORN', 'WAITS', 'GLUED', 'BANJO', 'TEASE', 'ARENA', 'BULKY', 'CARVE', 'STUNT', 'WARMS', 'SHADY', 'RAZOR', 'FOLLY', 'LEAFY', 'NOTCH', 'FOOLS', 'OTTER', 'PEARS', 'FLUSH', 'GENUS', 'ACHED', 'FIVES', 'FLAPS', 'SPOUT', 'SMOTE', 'FUMES', 'ADAPT', 'CUFFS', 'TASTY', 'STOOP', 'CLIPS', 'DISKS', 'SNIFF', 'LANES', 'BRISK', 'IMPLY', 'DEMON', 'SUPER', 'FURRY', 'RAGED', 'GROWL', 'TEXTS', 'HARDY', 'STUNG', 'TYPED', 'HATES', 'WISER', 'TIMID', 'SERUM', 'BEAKS', 'ROTOR', 'CASTS', 'BATHS', 'GLIDE', 'PLOTS', 'TRAIT', 'RESIN', 'SLUMS', 'LYRIC', 'PUFFS', 'DECKS', 'BROOD', 'MOURN', 'ALOFT', 'ABUSE', 'WHIRL', 'EDGED', 'OVARY', 'QUACK', 'HEAPS', 'SLANG', 'AWAIT', 'CIVIC', 'SAINT', 'BEVEL', 'SONAR', 'AUNTS', 'PACKS', 'FROZE', 'TONIC', 'CORPS', 'SWARM', 'FRANK', 'REPAY', 'GAUNT', 'WIRED', 'NIECE', 'CELLO', 'NEEDY', 'CHUCK', 'STONY', 'MEDIA', 'SURGE', 'HURTS', 'REPEL', 'HUSKY', 'DATED', 'HUNTS', 'MISTS', 'EXERT', 'DRIES', 'MATES', 'SWORN', 'BAKER', 'SPICE', 'OASIS', 'BOILS', 'SPURS', 'DOVES', 'SNEAK', 'PACES', 'COLON', 'SIEGE', 'STRUM', 'DRIER', 'CACAO', 'HUMUS', 'BALES', 'PIPED', 'NASTY', 'RINSE', 'BOXER', 'SHRUB', 'AMUSE', 'TACKS', 'CITED', 'SLUNG', 'DELTA', 'LADEN', 'LARVA', 'RENTS', 'YELLS', 'SPOOL', 'SPILL', 'CRUSH', 'JEWEL', 'SNAPS', 'STAIN', 'KICKS', 'TYING', 'SLITS', 'RATED', 'EERIE', 'SMASH', 'PLUMS', 'ZEBRA', 'EARNS', 'BUSHY', 'SCARY', 'SQUAD', 'TUTOR', 'SILKS', 'SLABS', 'BUMPS', 'EVILS', 'FANGS', 'SNOUT', 'PERIL', 'PIVOT', 'YACHT', 'LOBBY', 'JEANS', 'GRINS', 'VIOLA', 'LINER', 'COMET', 'SCARS', 'CHOPS', 'RAIDS', 'EATER', 'SLATE', 'SKIPS', 'SOLES', 'MISTY', 'URINE', 'KNOBS', 'SLEET', 'HOLLY', 'PESTS', 'FORKS', 'GRILL', 'TRAYS', 'PAILS', 'BORNE', 'TENOR', 'WARES', 'CAROL', 'WOODY', 'CANON', 'WAKES', 'KITTY', 'MINER', 'POLLS', 'SHAKY', 'NASAL', 'SCORN', 'CHESS', 'TAXIS', 'CRATE', 'SHYLY', 'TULIP', 'FORGE', 'NYMPH', 'BUDGE', 'LOWLY', 'ABIDE', 'DEPOT', 'OASES',
'SHEDS', 'FUDGE', 'PILLS', 'RIVET', 'THINE', 'GROOM', 'LANKY', 'BOOST', 'BROTH', 'HEAVE', 'GRAVY', 'BEECH', 'TIMED', 'QUAIL', 'INERT', 'GEARS', 'CHICK', 'HINGE', 'TRASH', 'CLASH', 'SIGHS', 'RENEW', 'BOUGH', 'DWARF', 'SLOWS', 'QUILL', 'SHAVE', 'SPORE', 'SIXES', 'CHUNK', 'MADLY', 'PACED', 'BRAID', 'FUZZY', 'MOTTO', 'SPIES', 'SLACK', 'MUCUS', 'MAGMA', 'AWFUL', 'DISCS', 'ERASE', 'POSED', 'ASSET', 'CIDER', 'TAPER', 'THEFT', 'CHURN', 'SATIN', 'SLOTS', 'TAXED', 'BULLY', 'SLOTH', 'SHALE', 'TREAD', 'RAKED', 'CURDS', 'MANOR', 'AISLE', 'LOINS', 'STAIR', 'TAPES', 'LEANS', 'BUNKS', 'SQUAT', 'TOWED', 'LANCE', 'PANES', 'SAKES', 'HEIRS', 'CASTE', 'DUMMY', 'PORES', 'FAUNA', 'CROOK', 'POISE', 'EPOCH', 'RISKY', 'WARNS', 'FLING', 'BERRY', 'GRAPE', 'FLANK', 'DRAGS', 'SQUID', 'PELTS', 'ICING', 'IRONY', 'IRONS', 'BARKS', 'WHOOP', 'CHOKE', 'DIETS', 'WHIPS', 'TALLY', 'DOZED', 'TWINE', 'KITES', 'BIKES', 'TICKS', 'RIOTS', 'ROARS', 'VAULT', 'LOOMS', 'SCOLD', 'BLINK', 'DANDY', 'PUPAE', 'SIEVE', 'SPIKE', 'DUCTS', 'LENDS', 'PIZZA', 'BRINK', 'WIDEN', 'PLUMB', 'PAGAN', 'FEATS', 'BISON', 'SOGGY', 'SCOOP', 'ARGON', 'NUDGE', 'SKIFF', 'AMBER', 'SEXES', 'ROUSE', 'SALTS', 'HITCH', 'EXALT', 'LEASH', 'DINED', 'CHUTE', 'SNORT', 'GUSTS', 'MELON', 'CHEAT', 'REEFS', 'LLAMA', 'LASSO', 'DEBUT', 'QUOTA', 'OATHS', 'PRONE', 'MIXES', 'RAFTS', 'DIVES', 'STALE', 'INLET', 'FLICK', 'PINTO', 'BROWS', 'UNTIE', 'BATCH', 'GREED', 'CHORE', 'STIRS', 'BLUSH', 'ONSET', 'BARBS', 'VOLTS', 'BEIGE', 'SWOOP', 'PADDY', 'LACED', 'SHOVE', 'JERKY', 'POPPY', 'LEAKS', 'FARES', 'DODGE', 'GODLY', 'SQUAW', 'AFFIX', 'BRUTE', 'NICER', 'UNDUE', 'SNARL', 'MERGE', 'DOSES', 'SHOWY', 'DADDY', 'ROOST', 'VASES', 'SWIRL', 'PETTY', 'COLDS', 'CURRY', 'COBRA', 'GENIE', 'FLARE', 'MESSY', 'CORES', 'SOAKS', 'RIPEN', 'WHINE', 'AMINO', 'PLAID', 'SPINY', 'MOWED', 'BATON', 'PEERS', 'VOWED', 'PIOUS', 'SWANS', 'EXITS', 'AFOOT', 'PLUGS', 'IDIOM', 'CHILI', 'RITES', 'SERFS', 'CLEFT', 'BERTH', 'GRUBS', 'ANNEX', 'DIZZY', 'HASTY', 'LATCH', 'WASPS', 'MIRTH', 'BARON', 'PLEAD', 'ALOOF', 'AGING', 'PIXEL', 'BARED',
'MUMMY', 'HOTLY', 'AUGER', 'BUDDY', 'CHAPS', 'BADGE', 'STARK', 'FAIRS', 'GULLY', 'MUMPS', 'EMERY', 'FILLY', 'OVENS', 'DRONE', 'GAUZE', 'IDIOT', 'FUSSY', 'ANNOY', 'SHANK', 'GOUGE', 'BLEED', 'ELVES', 'ROPED', 'UNFIT', 'BAGGY', 'MOWER', 'SCANT', 'GRABS', 'FLEAS', 'LOUSY', 'ALBUM', 'SAWED', 'COOKY', 'MURKY', 'INFER', 'BURLY', 'WAGED', 'DINGY', 'BRINE', 'KNEEL', 'CREAK', 'VANES', 'SMOKY', 'SPURT', 'COMBS', 'EASEL', 'LACES', 'HUMPS', 'RUMOR', 'AROMA', 'HORDE', 'SWISS', 'LEAPT', 'OPIUM', 'SLIME', 'AFIRE', 'PANSY', 'MARES', 'SOAPS', 'HUSKS', 'SNIPS', 'HAZEL', 'LINED', 'CAFES', 'NAIVE', 'WRAPS', 'SIZED', 'PIERS', 'BESET', 'AGILE', 'TONGS', 'STEED', 'FRAUD', 'BOOTY', 'VALOR', 'DOWNY', 'WITTY', 'MOSSY', 'PSALM', 'SCUBA', 'TOURS', 'POLKA', 'MILKY', 'GAUDY', 'SHRUG', 'TUFTS', 'WILDS', 'LASER', 'TRUSS', 'HARES', 'CREED', 'LILAC', 'SIREN', 'TARRY', 'BRIBE', 'SWINE', 'MUTED', 'FLIPS', 'CURES', 'SINEW', 'BOXED', 'HOOPS', 'GASPS', 'HOODS', 'NICHE', 'YUCCA', 'GLOWS', 'SEWER', 'WHACK', 'FUSES', 'GOWNS', 'DROOP', 'BUCKS', 'PANGS', 'MAILS', 'WHISK', 'HAVEN', 'CLASP', 'SLING', 'STINT', 'URGES', 'CHAMP', 'PIETY', 'CHIRP', 'PLEAT', 'POSSE', 'SUNUP', 'MENUS', 'HOWLS', 'QUAKE', 'KNACK', 'PLAZA', 'FIEND', 'CAKED', 'BANGS', 'ERUPT', 'POKER', 'OLDEN', 'CRAMP', 'VOTER', 'POSES', 'MANLY', 'SLUMP', 'FINED', 'GRIPS', 'GAPED', 'PURGE', 'HIKED', 'MAIZE', 'FLUFF', 'STRUT', 'SLOOP', 'PROWL', 'ROACH', 'COCKS', 'BLAND', 'DIALS', 'PLUME', 'SLAPS', 'SOUPS', 'DULLY', 'WILLS', 'FOAMS', 'SOLOS', 'SKIER', 'EAVES', 'TOTEM', 'FUSED', 'LATEX', 'VEILS', 'MUSED', 'MAINS', 'MYRRH', 'RACKS', 'GALLS', 'GNATS', 'BOUTS', 'SISAL', 'SHUTS', 'HOSES', 'DRYLY', 'HOVER', 'GLOSS', 'SEEPS', 'DENIM', 'PUTTY', 'GUPPY', 'LEAKY', 'DUSKY', 'FILTH', 'OBOES', 'SPANS', 'FOWLS', 'ADORN', 'GLAZE', 'HAUNT', 'DARES', 'OBEYS', 'BAKES', 'ABYSS', 'SMELT', 'GANGS', 'ACHES', 'TRAWL', 'CLAPS', 'UNDID', 'SPICY', 'HOIST', 'FADES', 'VICAR', 'ACORN', 'GRUFF', 'MUSTY', 'TARTS', 'SNUFF', 'HUNCH', 'TRUCE', 'TWEED', 'DRYER', 'LOSER', 'SHEAF', 'MOLES', 'LAPSE', 'TAWNY', 'VEXED', 'AUTOS', 'WAGER',
'DOMES', 'SHEEN', 'CLANG', 'SPADE', 'SOWED', 'BROIL', 'SLYLY', 'STUDS', 'GRUNT', 'DONOR', 'SLUGS', 'ASPEN', 'HOMER', 'CROAK', 'TITHE', 'HALTS', 'AVERT', 'HAVOC', 'HOGAN', 'GLINT', 'RUDDY', 'JEEPS', 'FLAKY', 'LADLE', 'TAUNT', 'SNORE', 'FINES', 'PROPS', 'PRUNE', 'PESOS', 'RADII', 'POKES', 'TILED', 'DAISY', 'HERON', 'VILLA', 'FARCE', 'BINDS', 'CITES', 'FIXES', 'JERKS', 'LIVID', 'WAKED', 'INKED', 'BOOMS', 'CHEWS', 'LICKS', 'HYENA', 'SCOFF', 'LUSTY', 'SONIC', 'SMITH', 'USHER', 'TUCKS', 'VIGIL', 'MOLTS', 'SECTS', 'SPARS', 'DUMPS', 'SCALY', 'WISPS', 'SORES', 'MINCE', 'PANDA', 'FLIER', 'AXLES', 'PLIED', 'BOOBY', 'PATIO', 'RABBI', 'PETAL', 'POLYP', 'TINTS', 'GRATE', 'TROLL', 'TOLLS', 'RELIC', 'PHONY', 'BLEAT', 'FLAWS', 'FLAKE', 'SNAGS', 'APTLY', 'DRAWL', 'ULCER', 'SOAPY', 'BOSSY', 'MONKS', 'CRAGS', 'CAGED', 'TWANG', 'DINER', 'TAPED', 'CADET', 'GRIDS', 'SPAWN', 'GUILE', 'NOOSE', 'MORES', 'GIRTH', 'SLIMY', 'AIDES', 'SPASM', 'BURRS', 'ALIBI', 'LYMPH', 'SAUCY', 'MUGGY', 'LITER', 'JOKED', 'GOOFY', 'EXAMS', 'ENACT', 'STORK', 'LURED', 'TOXIC', 'OMENS', 'NEARS', 'COVET', 'WRUNG', 'FORUM', 'VENOM', 'MOODY', 'ALDER', 'SASSY', 'FLAIR', 'GUILD', 'PRAYS', 'WRENS', 'HAULS', 'STAVE', 'TILTS', 'PECKS', 'STOMP', 'GALES', 'TEMPT', 'CAPES', 'MESAS', 'OMITS', 'TEPEE', 'HARRY', 'WRING', 'EVOKE', 'LIMES', 'CLUCK', 'LUNGE', 'HIGHS', 'CANES', 'GIDDY', 'LITHE', 'VERGE', 'KHAKI', 'QUEUE', 'LOATH', 'FOYER', 'OUTDO', 'FARED', 'DETER', 'CRUMB', 'ASTIR', 'SPIRE', 'JUMPY', 'EXTOL', 'BUOYS', 'STUBS', 'LUCID', 'THONG', 'AFORE', 'WHIFF', 'MAXIM', 'HULLS', 'CLOGS', 'SLATS', 'JIFFY', 'ARBOR', 'CINCH', 'IGLOO', 'GOODY', 'GAZES', 'DOWEL', 'CALMS', 'SCOWL', 'GULPS', 'CODED', 'WAVER', 'MASON', 'LOBES', 'EBONY', 'FLAIL', 'ISLES', 'CLODS', 'DAZED', 'ADEPT', 'OOZED', 'SEDAN', 'CLAYS', 'WARTS', 'KETCH', 'SKUNK', 'MANES', 'ADORE', 'SNEER', 'MANGO', 'FIORD', 'FLORA', 'ROOMY', 'MINKS', 'THAWS', 'WATTS', 'FREER', 'EXULT', 'PLUSH', 'PALED', 'TWAIN', 'CLINK', 'SCAMP', 'PAWED', 'BRAVO', 'GABLE', 'STINK', 'SEVER', 'WANED', 'RARER', 'REGAL', 'WARDS', 'FAWNS',
'BABES', 'UNIFY', 'AMEND', 'OAKEN', 'GLADE', 'VISOR', 'HEFTY', 'NINES', 'THROB', 'PECAN', 'BUTTS', 'PENCE', 'SILLS', 'JAILS', 'FLYER', 'SABER', 'NOMAD', 'MITER', 'BEEPS', 'DOMED', 'GULFS', 'CURBS', 'HEATH', 'MOORS', 'AORTA', 'LARKS', 'TANGY', 'WRYLY', 'CHEEP', 'RAGES', 'EVADE', 'LURES', 'FREAK', 'VOGUE', 'TUNIC', 'SLAMS', 'KNITS', 'DUMPY', 'MANIA', 'SPITS', 'FIRTH', 'HIKES', 'TROTS', 'NOSED', 'CLANK', 'DOGMA', 'BLOAT', 'BALSA', 'GRAFT', 'MIDDY', 'STILE', 'KEYED', 'FINCH', 'SPERM', 'CHAFF', 'WILES', 'AMIGO', 'COPRA', 'AMISS', 'EYING', 'TWIRL', 'LURCH', 'POPES', 'CHINS', 'SMOCK', 'TINES', 'GUISE', 'GRITS', 'JUNKS', 'SHOAL', 'CACHE', 'TAPIR', 'ATOLL', 'DEITY', 'TOILS', 'SPREE', 'MOCKS', 'SCANS', 'SHORN', 'REVEL', 'RAVEN', 'HOARY', 'REELS', 'SCUFF', 'MIMIC', 'WEEDY', 'CORNY', 'TRUER', 'ROUGE', 'EMBER', 'FLOES', 'TORSO', 'WIPES', 'EDICT', 'SULKY', 'RECUR', 'GROIN', 'BASTE', 'KINKS', 'SURER', 'PIGGY', 'MOLDY', 'FRANC', 'LIARS', 'INEPT', 'GUSTY', 'FACET', 'JETTY', 'EQUIP', 'LEPER', 'SLINK', 'SOARS', 'CATER', 'DOWRY', 'SIDED', 'YEARN', 'DECOY', 'TABOO', 'OVALS', 'HEALS', 'PLEAS', 'BERET', 'SPILT', 'GAYLY', 'ROVER', 'ENDOW', 'PYGMY', 'CARAT', 'ABBEY', 'VENTS', 'WAKEN', 'CHIMP', 'FUMED', 'SODAS', 'VINYL', 'CLOUT', 'WADES', 'MITES', 'SMIRK', 'BORES', 'BUNNY', 'SURLY', 'FROCK', 'FORAY', 'PURER', 'MILKS', 'QUERY', 'MIRED', 'BLARE', 'FROTH', 'GRUEL', 'NAVEL', 'PALER', 'PUFFY', 'CASKS', 'GRIME', 'DERBY', 'MAMMA', 'GAVEL', 'TEDDY', 'VOMIT', 'MOANS', 'ALLOT', 'DEFER', 'WIELD', 'VIPER', 'LOUSE', 'ERRED', 'HEWED', 'ABHOR', 'WREST', 'WAXEN', 'ADAGE', 'ARDOR', 'STABS', 'PORED', 'RONDO', 'LOPED', 'FISHY', 'BIBLE', 'HIRES', 'FOALS', 'FEUDS', 'JAMBS', 'THUDS', 'JEERS', 'KNEAD', 'QUIRK', 'RUGBY', 'EXPEL', 'GREYS', 'RIGOR', 'ESTER', 'LYRES', 'ABACK', 'GLUES', 'LOTUS', 'LURID', 'RUNGS', 'HUTCH', 'THYME', 'VALET', 'TOMMY', 'YOKES', 'EPICS', 'TRILL', 'PIKES', 'OZONE', 'CAPER', 'CHIME', 'FREES', 'FAMED', 'LEECH', 'SMITE', 'NEIGH', 'ERODE', 'ROBED', 'HOARD', 'SALVE', 'CONIC', 'GAWKY', 'CRAZE', 'JACKS', 'GLOAT', 'MUSHY', 'RUMPS', 'FETUS', 'WINCE',
'PINKS', 'SHALT', 'TOOTS', 'GLENS', 'COOED', 'RUSTS', 'STEWS', 'SHRED', 'PARKA', 'CHUGS', 'WINKS', 'CLOTS', 'SHREW', 'BOOED', 'FILMY', 'JUROR', 'DENTS', 'GUMMY', 'GRAYS', 'HOOKY', 'BUTTE', 'DOGIE', 'POLED', 'REAMS', 'FIFES', 'SPANK', 'GAYER', 'TEPID', 'SPOOK', 'TAINT', 'FLIRT', 'ROGUE', 'SPIKY', 'OPALS', 'MISER', 'COCKY', 'COYLY', 'BALMY', 'SLOSH', 'BRAWL', 'APHID', 'FAKED', 'HYDRA', 'BRAGS', 'CHIDE', 'YANKS', 'ALLAY', 'VIDEO', 'ALTOS', 'EASES', 'METED', 'CHASM', 'LONGS', 'EXCEL', 'TAFFY', 'IMPEL', 'SAVOR', 'KOALA', 'QUAYS', 'DAWNS', 'PROXY', 'CLOVE', 'DUETS', 'DREGS', 'TARDY', 'BRIAR', 'GRIMY', 'ULTRA', 'MEATY', 'HALVE', 'WAILS', 'SUEDE', 'MAUVE', 'ENVOY', 'ARSON', 'COVES', 'GOOEY', 'BREWS', 'SOFAS', 'CHUMS', 'AMAZE', 'ZOOMS', 'ABBOT', 'HALOS', 'SCOUR', 'SUING', 'CRIBS', 'SAGAS', 'ENEMA', 'WORDY', 'HARPS', 'COUPE', 'MOLAR', 'FLOPS', 'WEEPS', 'MINTS', 'ASHEN', 'FELTS', 'ASKEW', 'MUNCH', 'MEWED', 'DIVAN', 'VICES', 'JUMBO', 'BLOBS', 'BLOTS', 'SPUNK', 'ACRID', 'TOPAZ', 'CUBED', 'CLANS', 'FLEES', 'SLURS', 'GNAWS', 'WELDS', 'FORDS', 'EMITS', 'AGATE', 'PUMAS', 'MENDS', 'DARKS', 'DUKES', 'PLIES', 'CANNY', 'HOOTS', 'OOZES', 'LAMED', 'FOULS', 'CLEFS', 'NICKS', 'MATED', 'SKIMS', 'BRUNT', 'TUBER', 'TINGE', 'FATES', 'DITTY', 'THINS', 'FRETS', 'EIDER', 'BAYOU', 'MULCH', 'FASTS', 'AMASS', 'DAMPS', 'MORNS', 'FRIAR', 'PALSY', 'VISTA', 'CROON', 'CONCH', 'UDDER', 'TACOS', 'SKITS', 'MIKES', 'QUITS', 'PREEN', 'ASTER', 'ADDER', 'ELEGY', 'PULPY', 'SCOWS', 'BALED', 'HOVEL', 'LAVAS', 'CRAVE', 'OPTIC', 'WELTS', 'BUSTS', 'KNAVE', 'RAZED', 'SHINS', 'TOTES', 'SCOOT', 'DEARS', 'CROCK', 'MUTES', 'TRIMS', 'SKEIN', 'DOTED', 'SHUNS', 'VEERS', 'FAKES', 'YOKED', 'WOOED', 'HACKS', 'SPRIG', 'WANDS', 'LULLS', 'SEERS', 'SNOBS', 'NOOKS', 'PINED', 'PERKY', 'MOOED', 'FRILL', 'DINES', 'BOOZE', 'TRIPE', 'PRONG', 'DRIPS', 'ODDER', 'LEVEE', 'ANTIC', 'SIDLE', 'PITHY', 'CORKS', 'YELPS', 'JOKER', 'FLECK', 'BUFFS', 'SCRAM', 'TIERS', 'BOGEY', 'DOLED', 'IRATE', 'VALES', 'COPED', 'HAILS', 'ELUDE', 'BULKS', 'AIRED', 'VYING', 'STAGS', 'STREW', 'COCCI', 'PACTS', 'SCABS']

document.addEventListener("DOMContentLoaded", () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBmF8G-QiDO3wjafbYBTTIfWh0WOjCh_e4",
    authDomain: "spell-it-faster.firebaseapp.com",
    projectId: "spell-it-faster",
    storageBucket: "spell-it-faster.appspot.com",
    messagingSenderId: "198160381471",
    appId: "1:198160381471:web:286ea57db26a45c65f072a",
    measurementId: "G-TQK3N2HDPM"
  };

  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  
  function submitScore(playerName, userscore) {
    usernameMain = playerName.slice(0, 15)
    db.collection("scores5").add({
      playerName: usernameMain,
      userscore: userscore
    })
    .then(function(docRef) {
      console.log("Score submitted successfully");
    })
    .catch(function(error) {
      console.error("Error submitting score: ", error);
    });
  }

  var topScores2DArray = [];
  function getTopScores() {
    return db.collection("scores5")
      .orderBy("userscore", "desc")
      .limit(10)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          topScores2DArray.push([doc.data().playerName, doc.data().userscore]);
        });
        return topScores2DArray;
      });
  }


  var gameState = false
  document.getElementById("gameAssets").style.visibility = "hidden"
  function checkGameState(){
    if (gameState == true){
      document.getElementById("gameAssets").style.visibility = "visible"
      document.getElementById("enter").style.visibility = "hidden"
      gameOn()
      clearInterval(gameCheck)
    }
  }
  var gameCheck = setInterval(checkGameState, 1)
  var enterTemp = false
  document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      if (enterTemp != true) {
        gameState = true;
        enterTemp = true
      }
    }
  })

  function gameOn(){
    var score = 0
    var score2 = 0
    var speed = 1000
    document.getElementById("scoreSpan").innerHTML = " " + score
    var curWord = wordList[Math.floor(Math.random()*wordList.length)]
    var wordCount = []
    var grid = document.getElementById("grid")
    var board = [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
    ]

    function createBoard() {
      var temp = 0
        for (i = 0; i < board.length; i++){
            for (u = 0; u < board[i].length; u++){
                var block = document.createElement('div')
                block.classList.add('block')
                block.setAttribute("id", "block" + temp)
                temp++
                grid.appendChild(block);
            }
        }
    }

    // Current tetromino
    let staticWord = [[1, 1, 1, 1,1]];
    let currentPosition = [0, 0];

    function drawWordBlock() {
        for (let i = 0; i < staticWord.length; i++) {
          for (let j = 0; j < staticWord[i].length; j++) {
            if (staticWord[i][j]) {
              board[currentPosition[0] + i][currentPosition[1] + j] = 1;
            }
          }
        }
      }
    
    var test = 0;
    function moveWord(direction) {
        for (let i = 0; i < staticWord.length; i++) {
            for (let j = 0; j < staticWord[i].length; j++) {
              if (staticWord[i][j] && test > 0) {
                  board[currentPosition[0] + i][currentPosition[1] + j] = 0;
                }
            }
        }
        if (test == 0){
          drawWordBlock();
          test++
        } else if (direction === 'down') {
            currentPosition[0]++;
            test++
        } 

        drawWordBlock();
    }

    function updateBoard() {
        const block = document.querySelectorAll('.block');
        let index = 0;
        let temp1 = 0
        for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                block[index].classList.add('filled');
                document.getElementById("block" + temp1).innerHTML = curWord[j]
            } else if (board[i][j] === 2) {
              document.getElementById("block" + temp1).innerHTML = wordCount[0][j]
              block[index].classList.add('bottom1');
            } else if (board[i][j] === 3) {
              document.getElementById("block" + temp1).innerHTML = wordCount[1][j]
              block[index].classList.add('bottom2');
            } else if (board[i][j] === 4) {
              document.getElementById("block" + temp1).innerHTML = wordCount[2][j]
              block[index].classList.add('bottom3');
            } else if (board[i][j] === 5) {
              document.getElementById("block" + temp1).innerHTML = wordCount[3][j]
              block[index].classList.add('bottom4');
            } else if (board[i][j] === 6) {
              document.getElementById("block" + temp1).innerHTML = wordCount[4][j]
              block[index].classList.add('bottom5');
            } else if (board[i][j] === 7) {
              document.getElementById("block" + temp1).innerHTML = wordCount[5][j]
              block[index].classList.add('bottom6');
            } 
            else {
                block[index].classList.remove('filled');
                document.getElementById("block" + temp1).innerHTML = ""
            }
            temp1++
            index++;
          }
        }
      }
    
    // Function to check for collisions
    var bottomED = 0
    function checkCollision(direction) {
      for (let i = 0; i < staticWord.length; i++) {
        for (let j = 0; j < staticWord[i].length; j++) {
          if (staticWord[i][j]) {
            // Check for collisions with the bottom of the board
            if (direction === 'down' && currentPosition[0] + i + 1 === board.length - bottomED) {
              return true;
            }
          }
        }
      }
      return false;
    }

    // Function to update the game
    var position = 0;
    var where = -1
    function update() {
      increaseSpeed(interval2)
      if (!checkCollision('down')) {
        moveWord('down');
        where++
        for (var i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            if (document.getElementById(("block" + ((i*5)+j))).classList.contains("filledGreen")){
              document.getElementById("block" + ((i*5)+j)).classList.remove("filledGreen")
              document.getElementById("block" + ((where*5)+j)).classList.add("filledGreen")
              updateBoard()              
            }
            if (position == 0){
              document.getElementById("block" + ((i*5)+j)).classList.remove("filledGreen")
              updateBoard()   
            }
          }
        }

      } else {
        for (var i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            if (document.getElementById(("block" + ((i*5)+j))).classList.contains("filledGreen")){
              document.getElementById("block" + ((i*5)+j)).classList.remove("filledGreen")
              updateBoard()              
            }
          }
        }
        where = 0
        currentPosition = [0, 0];
        var temp2 = 0
        wordCount.push(curWord)
        while (temp2 < 5){
          board[5-bottomED][temp2] = (bottomED + 2)
          temp2++
        }
        curWord = wordList[Math.floor(Math.random()*wordList.length)]
        bottomED++
        drawWordBlock();
      }
    }

    
    var ifWrong = false;
    document.addEventListener("keypress", function(e) {
      if (e.keyCode != 13){
        if (e.key === curWord[position].toLowerCase()) {
          document.getElementById("block" + (((where)*5)+position)).classList.remove("filled")
          document.getElementById("block" + (((where)*5)+position)).classList.add("filledGreen")
          position++
          temp2 = 0
          if (position == 5){
            for (let i = 0; i < board.length; i++) {
              for (let j = 0; j < board[i].length; j++) {
                document.getElementById("block" + ((i*5)+j)).classList.remove("filledGreen")
                document.getElementById("block" + ((i*5)+j)).classList.add("block")
              }
            }
            var temp3 = 0
            while (temp3 < 5){
              document.getElementById("block" + ((where*5)+temp3)).classList.remove("filled")
              document.getElementById("block" + ((where*5)+temp3)).classList.add("block")
              document.getElementById("block" + ((where*5)+temp3)).innerHTML = ""
              temp3++
            }
            score = score + (5 - where)
            score2 = score2 + (5 - where)

            console.log(5 - where)
            position = 0
            board[where] = [0,0,0,0,0]
            console.log(board)
            where = 0
            currentPosition = [0, 0];
            curWord = wordList[Math.floor(Math.random()*wordList.length)]
            document.getElementById("scoreSpan").innerHTML = " " + score
            drawWordBlock()
          }
        } else {
          ifWrong = true;
          var temp3 = 0
          while (temp3 < 5){
            document.getElementById("block" + ((where*5)+temp3)).classList.remove("filled")
            document.getElementById("block" + ((where*5)+temp3)).classList.add("block")
            document.getElementById("block" + ((where*5)+temp3)).innerHTML = ""
            temp3++
          }
          for (var i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
              if (document.getElementById(("block" + ((i*5)+j))).classList.contains("filledGreen")){
                document.getElementById("block" + ((i*5)+j)).classList.remove("filledGreen")
                updateBoard()              
              }
            }
          }
          position = 0
          board[where] = [0,0,0,0,0]
          where = 0
        }
      }
    });

    function fullSubmit(){
      var username = document.getElementById("username")
      submitScore(username.value, score);
    }

    function createLeaderBoard(tableData) {
      var table = document.getElementById('leaderBoard');
      var tableBody = document.createElement('tbody');
      var info = document.createElement("tr")
      info.innerHTML = "Rank"
      info.style.backgroundColor = "#1e1e1e"
      info.style.color = "#faf8e6"
      var leaderName = document.createElement("td")
      leaderName.innerHTML = "Username"
      var leaderScore = document.createElement("td")
      leaderScore.innerHTML = "Score"
      info.appendChild(leaderName)
      info.appendChild(leaderScore)

      tableBody.appendChild(info)
      
      temp4 = 1
      tableData.forEach(function(rowData) {
        var row = document.createElement('tr');
        if (temp4 < 4){
          row.id = "row" + temp4
          row.innerHTML = temp4 + "."
          temp4++
        } else {
          row.id = "row"
          row.innerHTML = temp4 + "."
          if (temp4 % 2 == 0){
            row.classList.add("rowdif")
          }
          row.classList.add("row")
          temp4++
        }
        
        rowData.forEach(function(cellData) {
          var cell = document.createElement('td');
          cell.appendChild(document.createTextNode(cellData));
          row.appendChild(cell);
        });
    
        tableBody.appendChild(row);
      });
    
      table.appendChild(tableBody);
      document.body.appendChild(table);
    }

    function checkCorrect() {
      if (ifWrong){
        oldCurPos = currentPosition
        currentPosition = [5-bottomED, 0]
        ifWrong = false
      }
      if (bottomED >= 6){
        clearInterval(interval1)
        clearInterval(interval2)
        clearInterval(interval3)
        clearInterval(interval4)
        document.getElementById("gameAssets").style = ("animation: fadeOut 2s 1 forwards linear;")
        setTimeout(function () {
          document.getElementById("gameOver").style = ("animation: fadeIn .5s 1 forwards linear;")
          document.getElementById("gameOverMenu").style = ("animation: fadeIn .7s 1 forwards linear;")
          document.getElementById("submitScrBel").style = ("animation: fadeIn .7s 1 forwards linear;")
          document.getElementById("displayScore").textContent = "Score: " + score
          document.getElementById("submitButton").onclick = function(){
            fullSubmit();
            document.getElementById("username").value = "Done!"
            getTopScores().then(function(topScores) {
              console.log(topScores);
            });
            document.getElementById("submitButton").style.display = "none"
            document.getElementById("leaderButton").style.visibility = "visible"
          }
          document.getElementById("leaderButton").onclick = function(){
            document.getElementById("afterGame").style.animation = "fadeOut 1s ease-out"
            document.getElementById("afterGame").style.animationFillMode = "forwards"
            document.getElementById("leaderButton").style.animation = "fadeOut 1s ease-out"
            document.getElementById("leaderButton").style.animationFillMode = "forwards"
            createLeaderBoard(topScores2DArray)

            setTimeout(function(){
              document.getElementById("LeaderBoard1").style.animation = "slideUp1 1s ease-out"
              document.getElementById("LeaderBoard1").style.animationFillMode = "forwards"
              document.getElementById("leaderBoard").style.animation = "slideUp2 1.1s ease-out"
              document.getElementById("leaderBoard").style.animationFillMode = "forwards"
              document.getElementById("restart2").style.animation = "slideUp3 1.1s ease-out"
              document.getElementById("restart2").style.animationFillMode = "forwards"
            },500)
          }
          
          document.getElementById("restart").onclick = function(){
            window.location.reload()        
          }
          document.getElementById("restart2").onclick = function(){
            window.location.reload()        
          }
        },2500)
      }
    }

    var sec = 0
    var min = 0
    function time() {
      sec++
      if (sec == 60){
        min++
        sec = 0
      }
      if (min == 0 && sec < 10){
        document.getElementById("timeSpan").innerHTML = " 00:0" + sec
      } else if (min == 0) {
        document.getElementById("timeSpan").innerHTML = " 00:" + sec
      } else if (min < 10 & sec < 10) {
        document.getElementById("timeSpan").innerHTML = " 0" + min + ":0" + sec
      } else if (min < 10) {
        document.getElementById("timeSpan").innerHTML = " 0" + min + ":" + sec
      } else {
        document.getElementById("timeSpan").innerHTML = " " + min + ":" + sec
      }
    }

    function increaseSpeed(intervalId) {
      if (score2 >= 10 && speed >= 250) {
        speed -= 25;
        console.log(speed)
        score2 = 0
        clearInterval(intervalId)
        interval2 = setInterval(update, speed);
      }
    }

    createBoard()
    var interval1 = setInterval(checkCorrect, 1);
    var interval2 = setInterval(update, speed)
    var interval3 = setInterval(updateBoard, 100);
    var interval4 = setInterval(time, 1000)
  }
});
