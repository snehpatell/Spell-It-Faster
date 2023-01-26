//Easy Mode

var gameState = false
var wordList = ['ABED', 'ABEL', 'ABET', 'ABLE', 'ABLY', 'ABUT', 'ACES', 'ACHE', 'ACID', 'ACME', 'ACNE', 'ACRE', 'ACTS', 'ADAM', 'ADDS', 'AFAR', 'AFRO', 'AGAR', 'AGED', 'AGES', 'AHEM', 'AHOY', 'AIDE', 'AIMS', 'AIRS', 'AIRY', 'AJAR', 'AKIN', 'ALAN', 'ALAS', 'ALEX', 'ALGA', 'ALLY', 'ALMS', 'ALOE', 'ALPS', 'ALSO', 'ALTO', 'ALUM', 'AMEN', 'AMID', 'AMMO', 'AMOK', 'ANDY', 
'ANEW', 'ANNA', 'ANNE', 'ANON', 'ANTE', 'ANTS', 'APEX', 'APSE', 'ARAB', 'ARCH', 'ARCS', 'AREA', 'ARES', 'ARIA', 'ARID', 'ARMS', 'ARMY', 'ARTS', 'ARTY', 'ASHY', 'ASIA', 'ATOM', 'ATOP', 'AUNT', 'AURA', 'AUTO', 'AVID', 'AVOW', 'AWAY', 'AWED', 'AWRY', 'AXES', 'AXIS', 'AXLE', 'AYES', 'BABE', 'BABY', 'BACH', 'BACK', 'BADE', 'BAGS', 'BAIL', 'BAIT', 'BAKE', 'BALD', 'BALE', 'BALI', 'BALK', 'BALL', 'BALM', 'BAND', 'BANE', 'BANG', 'BANK', 'BANS', 'BARB', 'BARD', 'BARE', 'BARK', 'BARN', 'BARS', 'BASE', 'BASH', 'BASK', 'BASS', 'BAST', 'BATE', 'BATH', 'BATS', 'BAWL', 'BAYS', 'BEAD', 'BEAK', 'BEAM', 'BEAN', 'BEAR', 'BEAT', 'BEAU', 'BECK', 'BEDS', 'BEEF', 'BEEN', 'BEEP', 'BEER', 'BEES', 'BEET', 'BEGS', 'BELL', 'BELT', 'BEND', 'BERG', 'BERN', 'BERT', 'BEST', 'BETA', 'BETH', 'BETS', 'BIAS', 'BIDE', 'BIDS', 'BIKE', 'BILE', 'BILK', 'BILL', 'BIND', 'BING', 'BINS', 'BIRD', 'BITE', 'BITS', 'BLAB', 'BLAH', 'BLED', 'BLEW', 'BLIP', 'BLOB', 'BLOT', 'BLOW', 'BLUE', 'BLUR', 'BOAR', 'BOAT', 'BOCK', 'BODE', 'BODY', 'BOGY', 'BOIL', 'BOLD', 'BOLL', 'BOLO', 'BOLT', 'BOMB', 'BOND', 'BONE', 'BONG', 'BONY', 'BOOB', 'BOOK', 'BOOM', 'BOON', 'BOOR', 'BOOS', 'BOOT', 'BORE', 'BORN', 'BOSS', 'BOTH', 'BOUT', 'BOWL', 'BOWS', 'BOXY', 'BOYS', 'BRAD', 'BRAE', 'BRAG', 'BRAN', 'BRAT', 'BRAY', 'BRED', 'BRIE', 'BRIG', 'BRIM', 'BROW', 'BUCK', 'BUDS', 'BUFF', 'BUGS', 'BULB', 'BULK', 'BULL', 'BUMP', 'BUMS', 'BUNK', 'BUNS', 'BUNT', 'BUOY', 'BURG', 'BURN', 'BURP', 'BURR', 'BURT', 'BURY', 'BUSH', 'BUST', 'BUSY', 'BUTT', 'BUYS', 'BUZZ', 'CABS', 'CAFE', 'CAGE', 'CAIN', 'CAKE', 'CALF', 'CALL', 'CALM', 'CAME', 'CAMP', 'CAMS', 'CANE', 'CANS', 'CAPE', 'CAPS', 'CARD', 'CARE', 'CARL', 'CARP', 'CARS', 'CART', 'CASE', 'CASH', 'CASK', 'CAST', 'CATS', 'CAVE', 'CEDE', 'CELL', 'CELT', 'CENT', 'CHAD', 'CHAP', 'CHAR', 'CHAT', 'CHEF', 'CHEW', 'CHIC', 'CHIN', 'CHIT', 'CHOP', 'CHOW', 'CHUG', 'CHUM', 'CIAO', 'CITE', 'CITY', 'CLAD', 'CLAM', 'CLAN', 'CLAP', 'CLAW', 'CLAY', 'CLEF', 'CLIP', 'CLOD', 'CLOG', 'CLOP', 
'CLOT', 'CLUB', 'CLUE', 'COAL', 'COAT', 'COAX', 'COCA', 'SNEH', 'CODA', 'CODE', 'COED', 'COGS', 'COIL', 'COIN', 'COKE', 'COLA', 'COLD', 'COLE', 'COLT', 'COMA', 'COMB', 'COME', 'CONE', 'CONK', 'CONS', 'COOK', 'COOL', 'COOP', 'COPE', 'COPS', 'COPY', 'CORD', 'CORE', 'CORK', 'CORN', 'CORP', 'COST', 'COSY', 'COUP', 'COVE', 'COWL', 'COWS', 'COZY', 'CRAB', 'CRAG', 'CRAM', 'CRAP', 'CREW', 'CRIB', 'CROW', 'CRUX', 'CUBA', 'CUBE', 'CUBS', 'CUES', 'CUFF', 'CULL', 'CULT', 'CUPS', 'CURB', 'CURD', 'CURE', 'CURL', 'CURT', 'CUSP', 'CUSS', 'CUTE', 'CUTS', 'CYST', 'CZAR', 'DAFT', 'DALE', 'DALI', 'DAME', 'DAMP', 'DAMS', 'DANA', 'DANE', 'DANK', 'DARE', 'DARK', 'DARN', 'DART', 'DASH', 'DATA', 'DATE', 'DAUB', 'DAVE', 'DAWN', 'DAYS', 'DAZE', 'DEAD', 'DEAF', 'DEAL', 'DEAN', 'DEAR', 'DEBT', 'DECK', 'DEED', 'DEEM', 'DEEP', 'DEER', 'DEFT', 'DEFY', 'DELL', 'DEMO', 'DENS', 'DENT', 'DENY', 'DESK', 'DEWY', 'DIAL', 'DIAM', 'DIBS', 'DICE', 'DIED', 'DIET', 'DIGS', 'DIKE', 'DILL', 'DIME', 'DINE', 'DIPS', 'DIRE', 'DIRT', 'DISC', 'DISH', 'DISK', 'DIVA', 'DIVE', 'DOCK', 'DODO', 'DOER', 'DOES', 'DOFF', 'DOGS', 'DOLE', 'DOLL', 'DOLT', 'DOME', 'DONE', 'DOOM', 'DOOR', 'DOPE', 'DORM', 'DOSE', 'DOTS', 'DOUG', 'DOUR', 'DOVE', 'DOWN', 'DOZE', 'DRAB', 'DRAG', 'DRAM', 'DRAT', 'DRAW', 'DREW', 'DRIP', 'DROP', 'DRUG', 'DRUM', 'DUAL', 'DUCK', 'DUCT', 'DUDE', 'DUDS', 'DUEL', 'DUET', 'DUKE', 'DULL', 'DULY', 'DUMB', 'DUMP', 'DUNE', 'DUNG', 'DUNK', 'DUPE', 'DUSK', 'DUST', 'DUTY', 'DYED', 'EACH', 'EARL', 'EARS', 'EASE', 'EAST', 'EASY', 'EATS', 'EBBS', 'ECHO', 'ECRU', 'EDDY', 'EDEN', 'EDGE', 'EDGY', 'EDIT', 'EGGS', 'EKED', 'ELKS', 'ELMS', 'ELSE', 'EMIR', 'EMIT', 'EMMA', 'ENDS', 'ENVY', 'EPIC', 'ERIC', 'EROS', 'ERRS', 'ESPY', 'ETCH', 'EVEN', 'EVER', 'EVIL', 'EXAM', 'EXIT', 'EXPO', 'EYED', 'EYES', 'EZRA', 'FACE', 'FACT', 'FADE', 'FADS', 'FAIL', 'FAIN', 'FAIR', 'FAKE', 'FALL', 'FAME', 'FANG', 'FANS', 'FARE', 'FARM', 'FART', 'FAST', 'FATE', 'FATS', 'FAUN', 'FAWN', 'FAZE', 'FEAR', 'FEAT', 'FEDS', 'FEED', 'FEEL', 'FEES', 'FEET', 'FELL', 'FELT', 'FEND', 'FEUD', 'FIAT', 'FIEF', 
'FIFE', 'FIGS', 'FIJI', 'FILE', 'FILL', 'FILM', 'FIND', 'FINE', 'FINK', 'FINN', 'FINS', 'FIRE', 'FIRM', 'FISH', 'FIST', 'FITS', 'FIVE', 'FIZZ', 'FLAG', 'FLAK', 'FLAN', 'FLAP', 'FLAT', 'FLAW', 'FLAX', 'FLAY', 'FLEA', 'FLED', 'FLEE', 'FLEW', 'FLEX', 'FLIP', 'FLIT', 'FLOE', 'FLOG', 'FLOP', 'FLOW', 'FLUE', 'FLUX', 'FOAL', 'FOAM', 'FOCI', 'FOES', 'FOIL', 'FOLD', 'FOLK', 'FOND', 'FONT', 'FOOD', 'FOOL', 'FOOT', 'FORD', 'FORE', 'FORK', 'FORM', 'FORT', 'FOUL', 'FOUR', 'FOWL', 'FOXY', 'FRAN', 'FRAY', 'FRED', 'FREE', 'FRET', 'FROG', 'FUEL', 'FUJI', 'FULL', 'FUME', 'FUND', 'FUNK', 'FURL', 'FURS', 'FURY', 'FUSE', 'FUSS', 'FUZZ', 'GAFF', 'GAGA', 'GAGE', 'GAGS', 'GAIN', 'GAIT', 'GALA', 'GALE', 'GALL', 'GALS', 'GAME', 'GANG', 'GAPS', 'GARB', 'GARY', 'GASH', 'GASP', 'GATE', 'GAUD', 'GAUL', 'GAVE', 'GAWK', 'GAZE', 'GEAR', 'GEMS', 'GENE', 'GENT', 'GERM', 'GETS', 'GIBE', 'GIFT', 'GILD', 'GILL', 'GILT', 'GINS', 'GIRD', 'GIRL', 'GIST', 'GIVE', 'GLAD', 'GLEE', 'GLEN', 'GLIB', 'GLOW', 'GLUE', 'GLUM', 'GLUT', 'GNAT', 'GNAW', 'GOAD', 'GOAL', 'GOAT', 'GOBS', 'GODS', 'GOES', 'GOGO', 'GOLF', 'GONE', 'GONG', 'GOOD', 'GOOF', 'GOON', 'GORE', 'GORY', 'GOSH', 'GOTH', 'GOUT', 'GOWN', 'GRAB', 'GRAD', 'GRAM', 'GRAY', 'GREG', 'GREW', 'GREY', 'GRID', 'GRIM', 'GRIN', 'GRIP', 'GRIT', 'GROW', 'GRUB', 'GUAM', 'GULF', 'GULL', 'GULP', 'GUMS', 'GUNK', 'GUNS', 'GURU', 'GUSH', 'GUST', 'GUTS', 'GUYS', 'GWEN', 'GYMS', 'GYRO', 'HACK', 'HAHA', 'HAIL', 'HAIR', 'HALE', 'HALF', 'HALL', 'HALO', 'HALT', 'HAMS', 'HAND', 'HANG', 'HANK', 'HARD', 'HARE', 'HARK', 'HARM', 'HARP', 'HASH', 'HAST', 'HATE', 'HATH', 'HATS', 'HAUL', 'HAVE', 'HAWK', 'HAZE', 'HEAD', 'HEAL', 'HEAP', 'HEAR', 'HEAT', 'HECK', 'HEED', 'HEEL', 'HEIR', 'HELD', 'HELL', 'HELM', 'HELP', 'HEMP', 'HENS', 'HERB', 'HERD', 'HERE', 'HERO', 'HERS', 'HICK', 'HIDE', 'HIGH', 'HIKE', 'HILL', 'HILT', 'HIND', 'HINT', 'HIPS', 'HIRE', 'HISS', 'HITS', 'HIVE', 'HOAR', 'HOAX', 'HOBO', 'HOCK', 'HOGS', 'HOLD', 'HOLE', 'HOLY', 'HOME', 'HONE', 'HONK', 'HOOD', 'HOOF', 'HOOK', 'HOOP', 'HOOT', 'HOPE', 'HOPS', 'HORN', 'HOSE', 
'HOST', 'HOUR', 'HOWL', 'HUBS', 'HUES', 'HUEY', 'HUFF', 'HUGE', 'HUGH', 'HULA', 'HULK', 'HULL', 'HUNG', 'HUNK', 'HUNT', 'HURL', 'HURT', 'HUSH', 'HUSK', 'HUTS', 'HYDE', 'HYMN', 'IAMB', 'IBEX', 'IBIS', 'ICED', 'ICON', 'IDEA', 'IDLE', 'IDLY', 'IDOL', 'IGOR', 'ILLS', 'INCA', 'INCH', 'INFO', 'INKS', 'INKY', 'INNS', 'INTO', 'IONS', 'IOTA', 'IOWA', 'IRAN', 'IRAQ', 'IRIS', 'IRON', 'ISIS', 'ISLE', 'ITCH', 'ITEM', 'JABS', 'JACK', 'JADE', 'JAIL', 'JAKE', 'JAMS', 'JANE', 'JARS', 'JAVA', 'JAWS', 'JAZZ', 'JEEP', 'JEER', 'JEFF', 'JENA', 'JERK', 'JEST', 'JETS', 'JEWS', 'JILT', 'JINX', 'JIVE', 'JOBS', 'JOCK', 'JOEL', 'JOGS', 'JOHN', 'JOIN', 'JOKE', 'JOLT', 'JOSE', 'JOSH', 'JOSS', 'JOWL', 'JOYS', 'JUAN', 'JUDE', 'JUDO', 'JUDY', 'JUKE', 'JULY', 'JUMP', 'JUNE', 'JUNK', 'JUNO', 'JURY', 'JUST', 'KALE', 'KALI', 'KANT', 'KATE', 'KEEL', 'KEEN', 'KEEP', 'KEGS', 'KELP', 'KENO', 'KENT', 'KEPT', 'KEYS', 'KHAN', 'KICK', 'KIDS', 'KILL', 'KILN', 'KILO', 'KILT', 'KIND', 'KING', 'KINK', 'KIRK', 'KISS', 'KITE', 'KITS', 'KIWI', 'KNEE', 'KNEW', 'KNIT', 'KNOB', 'KNOT', 'KNOW', 'KURT', 'LACE', 'LACK', 'LACY', 'LADS', 'LADY', 'LAGS', 'LAID', 'LAIN', 'LAIR', 'LAKE', 'LAMA', 'LAMB', 'LAMP', 'LAND', 'LANE', 'LANK', 'LAOS', 'LAPS', 'LARD', 'LARK', 'LASH', 'LASS', 'LAST', 'LATE', 'LATH', 'LAUD', 'LAVA', 'LAWN', 'LAWS', 'LAYS', 'LAZE', 'LAZY', 'LEAD', 'LEAF', 'LEAK', 'LEAN', 'LEAP', 'LEEK', 'LEER', 'LEFT', 'LEGS', 'LEND', 'LENS', 'LENT', 'LEON', 'LESS', 'LEST', 'LETS', 'LEVY', 'LIAR', 'LICE', 'LICK', 'LIDS', 'LIED', 'LIEN', 'LIES', 'LIEU', 'LIFE', 'LIFT', 'LIKE', 'LILT', 'LILY', 'LIMA', 'LIMB', 'LIME', 'LIMP', 'LINE', 'LINK', 'LINT', 'LION', 'LIPS', 'LIRA', 'LISA', 'LISP', 'LIST', 'LIVE', 'LOAD', 'LOAF', 'LOAM', 'LOAN', 'LOCI', 'LOCK', 'LOCO', 'LODE', 'LOFT', 'LOGS', 'LOIN', 'LOIS', 'LOLL', 'LONE', 'LONG', 'LOOK', 'LOOM', 'LOON', 'LOOP', 'LOOT', 'LOPE', 'LORD', 'LORE', 'LOSE', 'LOSS', 'LOST', 'LOTS', 'LOUD', 'LOVE', 'LOWS', 'LUCK', 'LUCY', 'LUGE', 'LUKE', 'LULL', 'LUMP', 'LUNG', 'LURE', 'LURK', 'LUSH', 'LUST', 'LUTE', 'LYLE', 'LYNN', 'LYNX', 'LYRE', 'MACE', 'MACK', 'MADE', 'MAGI',
'MAID', 'MAIL', 'MAIM', 'MAIN', 'MAKE', 'MALE', 'MALI', 'MALL', 'MALT', 'MAMA', 'MANE', 'MANY', 'MAPS', 'MARE', 'MARK', 'MARS', 'MART', 'MARX', 'MARY', 'MASH', 'MASK', 'MASS', 'MAST', 'MATH', 'MATS', 'MATT', 'MAUL', 'MAXI', 'MAYO', 'MAYS', 'MAZE', 'MEAD', 'MEAL', 'MEAN', 'MEAT', 'MEEK', 'MEET', 'MELD', 'MELT', 'MEMO', 'MEND', 'MENU', 'MEOW', 'MERE', 'MESA', 'MESH', 'MESS', 'METS', 'MICA', 'MICE', 'MIFF', 'MIKE', 'MILD', 'MILE', 'MILK', 'MILL', 'MILT', 'MIME', 'MIND', 'MINE', 'MINI', 'MINK', 'MINT', 'MINX', 'MIRE', 'MISS', 'MIST', 'MITE', 'MITT', 'MOAT', 'MOBS', 'MOCK', 'MODE', 'MOLD', 'MOLE', 'MOLL', 'MONK', 'MONO', 'MOOD', 'MOON', 'MOOR', 'MOOS', 'MOOT', 'MOPE', 'MOPS', 'MORE', 'MORN', 'MOSS', 'MOST', 'MOTH', 'MOVE', 'MUCK', 'MUFF', 'MUGS', 'MULE', 'MULL', 'MURK', 'MUSE', 'MUSH', 'MUSK', 'MUSS', 'MUST', 'MUTE', 'MUTT', 'MYTH', 'NAIL', 'NAME', 'NAPE', 'NAPS', 'NAVY', 'NEAL', 'NEAR', 'NEAT', 'NECK', 'NEED', 'NEON', 'NERO', 'NEST', 'NETS', 'NEWS', 'NEWT', 'NEXT', 'NICE', 'NICK', 'NIGH', 'NILE', 'NINA', 'NINE', 'NOAH', 'NODE', 'NODS', 'NOEL', 'NONE', 'NOOK', 'NOON', 'NOPE', 'NORM', 'NOSE', 'NOSH', 'NOSY', 'NOTE', 'NOUN', 'NOVA', 'NULL', 'NUMB', 'NUNS', 'NUTS', 'OAFS', 'OAKS', 'OATH', 'OATS', 'OBEY', 'OBOE', 'ODDS', 'ODOR', 'OGLE', 'OGRE', 'OHIO', 'OILS', 'OILY', 'OINK', 'OKAY', 'OKRA', 'OLGA', 'OMEN', 'OMIT', 'ONCE', 'ONES', 'ONLY', 'ONTO', 'ONUS', 'ONYX', 'OOPS', 'OOZE', 'OOZY', 'OPAL', 'OPEN', 'OPUS', 'ORES', 'OSLO', 'OTTO', 'OUCH', 'OURS', 'OUST', 'OUTS', 'OVAL', 'OVEN', 'OVER', 'OVUM', 'OWED', 'OWES', 'OWLS', 'OWNS', 'OXEN', 'PACE', 'PACK', 'PACT', 'PADS', 'PAGE', 'PAID', 'PAIL', 'PAIN', 'PAIR', 'PALE', 'PALL', 'PALM', 'PALS', 'PANE', 'PANG', 'PANS', 'PANT', 'PAPA', 'PARE', 'PARK', 'PARS', 'PART', 'PASS', 'PAST', 'PATE', 'PATH', 'PAVE', 'PAWN', 'PAWS', 'PAYS', 'PEAK', 'PEAL', 'PEAR', 'PEAS', 'PEAT', 'PECK', 'PECS', 'PEEK', 'PEEL', 'PEEP', 'PEER', 'PEGS', 'PELT', 'PENS', 'PEON', 'PERK', 'PERM', 'PERT', 'PERU', 'PESO', 'PEST', 'PETE', 'PETS', 'PEWS', 'PHEW', 'PHIL', 'PICA', 'PICK', 'PIED', 
'PIER', 'PIES', 'PIGS', 'PIKE', 'PILE', 'PILL', 'PIMP', 'PINE', 'PING', 'PINK', 'PINS', 'PINT', 'PIPE', 'PISH', 'PISS', 'PITH', 'PITS', 'PITY', 'PLAN', 'PLAY', 'PLEA', 'PLOD', 'PLOP', 'PLOT', 'PLOW', 'PLOY', 'PLUG', 'PLUM', 'PLUS', 'POCK', 'PODS', 'POEM', 'POET', 'POKE', 'POLE', 'POLL', 'POLO', 'POMP', 'POND', 'PONG', 'PONY', 'POOF', 'POOH', 'POOL', 'POOP', 'POOR', 'POPE', 'POPS', 'PORE', 'PORK', 'PORT', 'POSE', 'POSH', 'POST', 'POSY', 'POTS', 'POUR', 'POUT', 'PRAM', 'PRAY', 'PREP', 'PREY', 'PRIM', 'PROD', 'PROF', 'PROM', 'PROP', 'PROS', 'PROW', 'PUBS', 'PUCE', 'PUCK', 'PUFF', 'PUKE', 'PULL', 'PULP', 'PUMA', 'PUMP', 'PUNK', 'PUNT', 'PUNY', 'PUPA', 'PUPS', 'PURE', 'PURR', 'PUSH', 'PUTS', 'PUTT', 'PYRE', 'QUAD', 'QUIP', 'QUIT', 'QUIZ', 'RACE', 'RACK', 'RACY', 'RAFT', 'RAGE', 'RAGS', 'RAID', 'RAIL', 'RAKE', 'RAMP', 'RAND', 'RANG', 'RANK', 'RANT', 'RAPT', 'RARE', 'RASH', 'RASP', 'RATE', 'RATS', 'RAVE', 'RAYS', 'RAZE', 'READ', 'REAL', 'REAM', 'REAP', 'REAR', 'REDO', 'REDS', 'REED', 'REEF', 'REEK', 'REEL', 'REIN', 'RELY', 'REND', 'RENO', 'RENT', 'REPS', 'REST', 'RIBS', 'RICE', 'RICH', 'RICK', 'RIDE', 'RIFE', 'RIFF', 'RIFT', 'RIGS', 'RILE', 'RIME', 'RIMS', 'RIND', 'RING', 'RINK', 'RIOT', 'RIPE', 'RISE', 'RISK', 'RITE', 'RITZ', 'ROAD', 'ROAM', 'ROAR', 'ROBE', 'ROBS', 'ROCK', 'RODE', 'RODS', 'ROLE', 'ROLL', 'ROME', 'ROMP', 'ROOF', 'ROOK', 'ROOT', 'ROPE', 'ROSA', 'ROSE', 'ROSS', 'ROSY', 'ROTE', 'ROTS', 'ROUT', 'ROVE', 'ROWS', 'ROXY', 'RUBY', 'RUDE', 'RUDY', 'RUGS', 'RUIN', 'RULE', 'RUMP', 'RUNE', 'RUNG', 'RUNS', 'RUNT', 'RUSE', 'RUSH', 'RUSK', 'RUSS', 'RUST', 'RUTH', 'RUTS', 'RYAN', 'SACK', 'SAFE', 'SAGA', 'SAGE', 'SAGS', 'SAID', 'SAIL', 'SAKE', 'SALE', 'SALT', 'SAME', 'SAND', 'SANE', 'SANG', 'SANK', 'SANS', 'SAPS', 'SARA', 'SASH', 'SASS', 'SATE', 'SAUL', 'SAVE', 'SAWS', 'SAYS', 'SCAB', 'SCAN', 'SCAR', 'SCAT', 'SCOT', 'SCUD', 'SCUM', 'SEAL', 'SEAM', 'SEAN', 'SEAR', 'SEAS', 'SEAT', 'SEED', 'SEEK', 'SEEM', 'SEEN', 'SEEP', 'SEER', 'SEES', 'SELF', 'SELL', 'SEMI', 'SEND', 'SENT', 'SERF', 'SETS', 'SEWN', 'SHAG', 'SHAH', 'SHAM', 
'SHAW', 'SHEA', 'SHED', 'SHIM', 'SHIN', 'SHIP', 'SHOD', 'SHOE', 'SHOO', 'SHOP', 'SHOT', 'SHOW', 'SHUN', 'SHUT', 'SICK', 'SIDE', 'SIFT', 'SIGH', 'SIGN', 'SIKH', 'SILK', 'SILL', 'SILO', 'SILT', 'SINE', 'SING', 'SINK', 'SINS', 'SIRE', 'SIRS', 'SITE', 'SITS', 'SIZE', 'SKEW', 'SKID', 'SKIM', 'SKIN', 'SKIP', 'SKIS', 'SKIT', 'SLAB', 'SLAG', 'SLAM', 'SLAP', 'SLAT', 'SLAV', 'SLAW', 'SLAY', 'SLED', 'SLID', 'SLIM', 'SLIP', 'SLIT', 'SLOB', 'SLOE', 'SLOP', 'SLOT', 'SLOW', 'SLUG', 'SLUM', 'SLUR', 'SMOG', 'SMUG', 'SMUT', 'SNAG', 'SNAP', 'SNIP', 'SNOB', 'SNOT', 'SNOW', 'SNUB', 'SNUG', 'SOAK', 'SOAP', 'SOAR', 'SOBS', 'SOCK', 'SODA', 'SOFA', 'SOFT', 'SOIL', 'SOLD', 'SOLE', 'SOLO', 'SOMA', 'SOME', 'SONG', 'SONS', 'SOON', 'SOOT', 'SOPS', 'SORE', 'SORT', 'SOUL', 'SOUP', 'SOUR', 'SOWN', 'SPAM', 'SPAN', 'SPAR', 'SPAT', 'SPAY', 'SPEC', 'SPED', 'SPEW', 'SPIN', 'SPIT', 'SPOT', 'SPRY', 'SPUD', 'SPUN', 'SPUR', 'STAB', 'STAG', 'STAN', 'STAR', 'STAY', 'STEM', 'STEP', 'STEW', 'STIR', 'STOP', 'STOW', 'STUB', 'STUD', 'STUN', 'STYX', 'SUBS', 'SUCH', 'SUCK', 'SUDS', 'SUED', 'SUES', 'SUIT', 'SULK', 'SUMS', 'SUNG', 'SUNK', 'SUNS', 'SURE', 'SURF', 'SWAB', 'SWAG', 'SWAM', 'SWAN', 'SWAP', 'SWAT', 'SWAY', 'SWIG', 'SWIM', 'SWUM', 'SYNC', 'TABS', 'TACK', 'TACT', 'TAFT', 'TAGS', 'TAIL', 'TAKE', 'TALC', 'TALE', 'TALK', 'TALL', 'TAME', 'TAMP', 'TANG', 'TANK', 'TAPE', 'TAPS', 'TARA', 'TARE', 'TART', 'TASK', 'TAUT', 'TAXI', 'TEAL', 'TEAM', 'TEAR', 'TEAS', 'TEAT', 'TECH', 'TEEM', 'TEEN', 'TELL', 'TEND', 'TENS', 'TENT', 'TERM', 'TESS', 'TEST', 'TEXT', 'THAI', 'THAN', 'THAT', 'THAW', 'THEE', 'THEM', 'THEN', 'THEY', 'THIN', 'THIS', 'THOR', 'THOU', 'THRU', 'THUD', 'THUG', 'THUS', 'TICK', 'TIDE', 'TIDY', 'TIED', 'TIER', 'TIES', 'TIFF', 'TILE', 'TILL', 'TILT', 'TIME', 'TINT', 'TINY', 'TIPS', 'TIRE', 'TOAD', 'TODD', 'TOES', 'TOFU', 'TOGA', 'TOGS', 'TOIL', 'TOLD', 'TOLL', 'TOMB', 'TOME', 'TONE', 'TONG', 'TONS', 'TONY', 'TOOK', 'TOOL', 'TOOT', 'TOPS', 'TORE', 'TORN', 'TORT', 'TORY', 'TOSS', 'TOTE', 'TOTO', 'TOUR', 'TOUT', 'TOWN', 'TRAM', 'TRAP', 'TRAY', 'TREE', 'TREK', 'TRIG', 'TRIM', 'TRIO', 
'TRIP', 'TROT', 'TROY', 'TRUE', 'TSAR', 'TUBA', 'TUBE', 'TUBS', 'TUCK', 'TUFT', 'TUNA', 'TUNE', 'TURD', 'TURF', 'TURK', 'TURN', 'TUSH', 'TUSK', 'TUTU', 'TWIG', 'TWIN', 'TWIT', 'TWOS', 'TYKE', 'TYPE', 'UGLY', 'ULNA', 'UNDO', 'UNIT', 'UNTO', 'UPON', 'UREA', 'URGE', 'URNS', 'USED', 'USER', 'USES', 'UTAH', 'VAIL', 'VAIN', 'VALE', 'VAMP', 'VANE', 'VARY', 'VASE', 'VAST', 'VEAL', 'VEER', 'VEIL', 'VEIN', 'VEND', 'VENT', 'VERA', 'VERB', 'VERY', 'VEST', 'VETO', 'VIAL', 'VICE', 'VIED', 'VIES', 'VILE', 'VINE', 'VISA', 'VISE', 'VIVA', 'VOID', 'VOLT', 'VOTE', 'VOWS', 'WACK', 'WACO', 'WADE', 'WADS', 'WAFT', 'WAGE', 'WAIF', 'WAIL', 'WAIT', 'WAKE', 'WALK', 'WALL', 'WALT', 'WAND', 'WANE', 'WANT', 'WARD', 'WARE', 'WARM', 'WARN', 'WARP', 'WARS', 'WART', 'WARY', 'WASH', 'WASP', 'WATT', 'WAVE', 'WAVY', 'WAXY', 'WAYS', 'WEAK', 'WEAN', 'WEAR', 'WEEK', 'WEEP', 'WEIR', 'WELD', 'WELL', 'WELT', 'WENT', 'WEPT', 'WERE', 'WEST', 'WHAM', 'WHAT', 'WHEN', 'WHET', 'WHEY', 'WHIG', 'WHIM', 'WHIP', 'WHIR', 'WHIZ', 'WHOA', 'WHOM', 'WICK', 'WIDE', 'WILD', 'WILE', 'WILL', 'WILT', 'WILY', 'WIND', 'WINE', 'WING', 'WINK', 'WINS', 'WIPE', 'WIRE', 'WIRY', 'WISE', 'WISH', 'WISP', 'WITH', 'WITS', 'WOKE', 'WOLF', 'WOMB', 'WONT', 'WOOD', 'WOOF', 'WOOL', 'WORD', 'WORE', 'WORK', 'WORM', 'WORN', 'WORT', 'WOVE', 'WRAP', 'WREN', 'WRIT', 'YAKS', 'YALE', 'YANK', 'YARD', 'YARN', 'YAWL', 'YAWN', 'YAWS', 'YEAH', 'YEAR', 'YELL', 'YELP', 'YETI', 'YOGA', 'YOKE', 'YOLK', 'YORE', 'YORK', 'YOUR', 'YOWL', 'ZANY', 'ZEAL', 'ZERO', 'ZEST', 'ZINC', 'ZING', 'ZION', 'ZONE', 'ZOOM']

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
    db.collection("scores4").add({
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
    return db.collection("scores4")
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
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
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
    let staticWord = [[1, 1, 1, 1]];
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
      if (!checkCollision('down')) {
        moveWord('down');
        where++
        for (var i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            if (document.getElementById(("block" + ((i*4)+j))).classList.contains("filledGreen")){
              document.getElementById("block" + ((i*4)+j)).classList.remove("filledGreen")
              document.getElementById("block" + ((where*4)+j)).classList.add("filledGreen")
              updateBoard()              
            }
            if (position == 0){
              document.getElementById("block" + ((i*4)+j)).classList.remove("filledGreen")
              updateBoard()   
            }
          }
        }

      } else {
        for (var i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            if (document.getElementById(("block" + ((i*4)+j))).classList.contains("filledGreen")){
              document.getElementById("block" + ((i*4)+j)).classList.remove("filledGreen")
              updateBoard()              
            }
          }
        }
        where = 0
        currentPosition = [0, 0];
        var temp2 = 0
        wordCount.push(curWord)
        while (temp2 < 4){
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
      if (e.key === curWord[position].toLowerCase()) {
        document.getElementById("block" + (((where)*4)+position)).classList.remove("filled")
        document.getElementById("block" + (((where)*4)+position)).classList.add("filledGreen")
        position++
        temp2 = 0
        if (position == 4){
          for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
              document.getElementById("block" + ((i*4)+j)).classList.remove("filledGreen")
              document.getElementById("block" + ((i*4)+j)).classList.add("block")
            }
          }
          var temp3 = 0
          while (temp3 < 4){
            document.getElementById("block" + ((where*4)+temp3)).classList.remove("filled")
            document.getElementById("block" + ((where*4)+temp3)).classList.add("block")
            document.getElementById("block" + ((where*4)+temp3)).innerHTML = ""
            temp3++
          }
          score = score + (5 - where)
          score2 = score2 + (5 - where)

          increaseSpeed(interval2)
          console.log(5 - where)
          position = 0
          board[where] = [0,0,0,0]
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
        while (temp3 < 4){
          document.getElementById("block" + ((where*4)+temp3)).classList.remove("filled")
          document.getElementById("block" + ((where*4)+temp3)).classList.add("block")
          document.getElementById("block" + ((where*4)+temp3)).innerHTML = ""
          temp3++
        }
        for (var i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            if (document.getElementById(("block" + ((i*4)+j))).classList.contains("filledGreen")){
              document.getElementById("block" + ((i*4)+j)).classList.remove("filledGreen")
              updateBoard()              
            }
          }
        }
        position = 0
        board[where] = [0,0,0,0]
        where = 0
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
        update()
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
      if (score2 >= 30 && speed >= 500) {
        speed -= 25;
        clearInterval(intervalId);
        intervalId = setInterval(update, speed);
        score2 = 0
      }
    }

    createBoard()
    var interval1 = setInterval(checkCorrect, 1);
    var interval2 = setInterval(update, speed)
    var interval3 = setInterval(updateBoard, 100);
    var interval4 = setInterval(time, 1000)
  }
});
