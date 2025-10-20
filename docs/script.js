const allMons = [
    {id: 0, Name: "Blue-Eyes White Dragon (Azrael)"},
    {id: 1, Name: "Blue-Eyes White Dragon (Ibris)"},
    {id: 2, Name: "Blue-Eyes White Dragon (Djibril)"},
    {id: 3, Name: "Seiyaryu"},
    {id: 5, Name: "Kaiser Dragon"},
    {id: 6, Name: "Blackland Fire Dragon"},
    {id: 7, Name: "Curse of Dragon"},
    {id: 8, Name: "Red-Eyes B. Dragon"},
    {id: 10, Name: "Stardust Dragon"},
    {id: 11, Name: "Serpent Night Dragon"},
    {id: 13, Name: "Crawling Dragon"},
    {id: 14, Name: "Meteor Dragon"},
    {id: 15, Name: "Baby Dragon"},
    {id: 16, Name: "Winged Dragon, Guardian of the Fortress #1"},
    {id: 18, Name: "Parrot Dragon"},
    {id: 19, Name: "Ryu-Ran"},
    {id: 20, Name: "Harpie's Pet Dragon"},
    {id: 21, Name: "Two-Headed King Rex"},
    {id: 22, Name: "Megazowler"},
    {id: 23, Name: "Uraby"},
    {id: 24, Name: "Kairyu-Shin"},
    {id: 25, Name: "Aqua Dragon"},
    {id: 26, Name: "Sea King Dragon"},
    {id: 27, Name: "Thunder Dragon"},
    {id: 29, Name: "Mystical Elf"},
    {id: 30, Name: "Time Wizard"},
    {id: 31, Name: "Rogue Doll"},
    {id: 32, Name: "Magician of Faith"},
    {id: 33, Name: "Breaker the Magical Warrior"},
    {id: 34, Name: "Dark Magician"},
    {id: 35, Name: "Dark Magician Girl"},
    {id: 36, Name: "Magician of Black Chaos"},
    {id: 37, Name: "Dark Paladin"},
    {id: 38, Name: "Saggi the Dark Clown"},
    {id: 39, Name: "Illusionist Faceless Mage"},
    {id: 40, Name: "Skull Knight"},
    {id: 42, Name: "Dark Elf"},
    {id: 43, Name: "Lord of D."},
    {id: 44, Name: "Invitation to a Dark Sleep"},
    {id: 45, Name: "The Illusory Gentleman"},
    {id: 46, Name: "Tao the Chanter"},
    {id: 47, Name: "Aqua Madoor"},
    {id: 48, Name: "Water Girl"},
    {id: 49, Name: "Dragon Piper"},
    {id: 50, Name: "Gemini Elf (Kachua)"},
    {id: 51, Name: "Gemini Elf (Lora)"},
    {id: 52, Name: "Elemental Hero Neos"},
    {id: 53, Name: "Giltia the D. Knight"},
    {id: 54, Name: "Black Luster Soldier"},
    {id: 55, Name: "Swordstalker"},
    {id: 56, Name: "Flame Swordsman"},
    {id: 57, Name: "Lava Battleguard"},
    {id: 58, Name: "Swamp Battleguard"},
    {id: 59, Name: "Judge Man"},
    {id: 60, Name: "Gaia The Fierce Knight"},
    {id: 62, Name: "Celtic Guardian"},
    {id: 63, Name: "Axe Raider"},
    {id: 64, Name: "Zanki"},
    {id: 65, Name: "Ansatsu"},
    {id: 66, Name: "Kanan the Swordmistress"},
    {id: 67, Name: "Monster Tamer"},
    {id: 68, Name: "Swordsman from a Foreign Land"},
    {id: 69, Name: "Garoozis"},
    {id: 70, Name: "Hitotsu-Me Giant"},
    {id: 71, Name: "Battle Ox"},
    {id: 72, Name: "Beaver Warrior"},
    {id: 73, Name: "Penguin Soldier"},
    {id: 75, Name: "Sengenjin"},
    {id: 76, Name: "Panther Warrior"},
    {id: 77, Name: "Mystic Horseman"},
    {id: 78, Name: "Buster Blader"},
    {id: 79, Name: "Number 39: Utopia"},
    {id: 80, Name: "Dark Rabbit"},
    {id: 81, Name: "Silver Fang"},
    {id: 82, Name: "Gazelle the King of Mythical Beasts"},
    {id: 85, Name: "Mavelus"},
    {id: 86, Name: "Wing Eagle"},
    {id: 87, Name: "Insect Queen"},
    {id: 88, Name: "Big Insect"},
    {id: 89, Name: "Basic Insect"},
    {id: 90, Name: "Hercules Beetle"},
    {id: 91, Name: "Larvae Moth"},
    {id: 92, Name: "Perfectly Ultimate Great Moth"},
    {id: 93, Name: "Dungeon Worm"},
    {id: 94, Name: "Man-Eater Bug"},
    {id: 95, Name: "Hunter Spider"},
    {id: 96, Name: "Armored Lizard"},
    {id: 97, Name: "Serpentine Princess"},
    {id: 98, Name: "Fiend Kraken"},
    {id: 99, Name: "Octoberser"},
    {id: 100, Name: "Beastking of the Swamps"},
    {id: 101, Name: "Giant Red Seasnake"},
    {id: 102, Name: "Kanikabuto"},
    {id: 103, Name: "Zarigun"},
    {id: 104, Name: "Harpie Lady (Airo)"},
    {id: 105, Name: "Harpie Lady (Ocupete)"},
    {id: 106, Name: "Harpie Lady (Keraino)"},
    {id: 107, Name: "Sanga of the Thunder"},
    {id: 108, Name: "Kazejin"},
    {id: 109, Name: "Suijin"},
    {id: 111, Name: "Fairy's Gift"},
    {id: 112, Name: "Hane-Hane"},
    {id: 113, Name: "Gyakutenno Megami"},
    {id: 114, Name: "Orion the Battle King"},
    {id: 115, Name: "Dark Witch"},
    {id: 116, Name: "Dancing Elf"},
    {id: 117, Name: "Fairy King Truesdale"},
    {id: 118, Name: "Enchanting Mermaid"},
    {id: 119, Name: "Flame Cerebrus"},
    {id: 120, Name: "Giant Soldier of Stone"},
    {id: 121, Name: "Millenium Golem"},
    {id: 122, Name: "Queen of Autumn Leaves"},
    {id: 123, Name: "Moisture Creature"},
    {id: 124, Name: "Dunames Dark Witch"},
    {id: 125, Name: "Embodiment of Apophis"},
    {id: 126, Name: "Mystical Beast Serket"},
    {id: 127, Name: "Phantom Dewan"},
    {id: 128, Name: "Shadow Specter"},
    {id: 129, Name: "Zombie Warrior"},
    {id: 130, Name: "Skelgon"},
    {id: 131, Name: "The Snake Eyes"},
    {id: 132, Name: "Armored Zombie"},
    {id: 133, Name: "Dragon Zombie"},
    {id: 134, Name: "Pumpking the King of Ghosts"},
    {id: 135, Name: "Shadow Ghoul"},
    {id: 136, Name: "Ghoul with an Appetite"},
    {id: 137, Name: "Feral Imp"},
    {id: 138, Name: "Summoned Skull"},
    {id: 139, Name: "Horn Imp"},
    {id: 140, Name: "Kuriboh"},
    {id: 141, Name: "Castle of Dark Illusions"},
    {id: 142, Name: "Reaper of the Cards"},
    {id: 143, Name: "King of Yamimakai"},
    {id: 144, Name: "Dark King of the Abyss"},
    {id: 145, Name: "Midnight Fiend"},
    {id: 146, Name: "Bickuribox"},
    {id: 147, Name: "La Jinn the Mystical Genie of the Lamp"},
    {id: 148, Name: "Ryu-Kishin Powered"},
    {id: 149, Name: "Zera the Mant"},
    {id: 150, Name: "Zoa"},
    {id: 151, Name: "Neck Hunter"},
    {id: 152, Name: "Beast of Gilfer"},
    {id: 153, Name: "Berfomet"},
    {id: 154, Name: "Fortress Whale"},
    {id: 155, Name: "Labyrinth Tank"},
    {id: 156, Name: "Metalzoa"},
    {id: 157, Name: "Cyber Soldier"},
    {id: 158, Name: "Cyber Commander"},
    {id: 159, Name: "Dharma Cannon"},
    {id: 160, Name: "Red-Eyes Black Metal Dragon"},
    {id: 161, Name: "Barrel Dragon"},
    {id: 162, Name: "Slot Machine"},
    {id: 163, Name: "Launcher Spider"},
    {id: 164, Name: "Robotic Knight"},
    {id: 165, Name: "Machine King"},
    {id: 166, Name: "Giant Mech-Soldier"},
    {id: 167, Name: "Jinzo"},
    {id: 168, Name: "Alpha the Magnet Warrior"},
    {id: 169, Name: "Beta the Magnet Warrior"},
    {id: 170, Name: "Gamma the Magnet Warrior"},
    {id: 172, Name: "Cyber Saurus"},
    {id: 173, Name: "Rocket Warrior"}
]

const rolledMons = [];

function rollOne() {
    if (rolledMons.length !== 162){
        if (rolledMons.length === 0 ){
            let currentIndex = allMons.length;
            while (currentIndex > 0) {
                let randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [allMons[currentIndex], allMons[randomIndex]] = [allMons[randomIndex], allMons[currentIndex]];
            };

            let one = allMons.slice(0,1);
            let displayResults = one.map(monster => `${monster.id} - ${monster.Name}`);

            console.log(one);
            rolledMons.push(one[0]);
            document.getElementById("results").innerHTML = displayResults;
        } else {
            const filteredMons = allMons.filter(monster1 => !rolledMons.some(monster2 => monster1.id === monster2.id))

            let filteredIndex = filteredMons.length;
            while (filteredIndex > 0) {
                let randomIndex = Math.floor(Math.random() * filteredIndex);
                filteredIndex--;
                [filteredMons[filteredIndex], filteredMons[randomIndex]] = [filteredMons[randomIndex], filteredMons[filteredIndex]];
            }

            let one = filteredMons.slice(0,1);
            let displayResults = one.map(monster => `${monster.id} - ${monster.Name}`);

            console.log(one);
            rolledMons.push(one[0]);
            document.getElementById("results").innerHTML += `<br>${displayResults}`
        };
    } else {
        document.getElementById("results").innerHTML += "<br>Bro you rolled everyone, just stop.";
    }
};

function rollThree() {
    let currentIndex = allMons.length;
    while (currentIndex > 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [allMons[currentIndex], allMons[randomIndex]] = [allMons[randomIndex], allMons[currentIndex]]
    };
    while (rolledMons != 0) {
        rolledMons.pop();
    };

    let three = allMons.slice(0,3);
    three.sort((a, b) => a.id - b.id);
    let displayResults = three.map(monster => `${monster.id} - ${monster.Name}`).join("<br>")

    console.log(three);
    document.getElementById("results").innerHTML = displayResults
};

// roll 3 and roll 18 could be the same function, how would I go about this?

function rollEighteen() {
    let currentIndex = allMons.length;
    while (currentIndex > 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [allMons[currentIndex], allMons[randomIndex]] = [allMons[randomIndex], allMons[currentIndex]]
    }; //think about random number potentially being what switches them out? maybe don't need to reiterate. Potentially.
    while (rolledMons != 0) {
        rolledMons.pop();
    };

    let eighteen = allMons.slice(0,18);
    eighteen.sort((a, b) => a.id - b.id);
    let displayResults = eighteen.map(monster => `${monster.id} - ${monster.Name}`).join("<br>")

    console.log(eighteen);
    document.getElementById("results").innerHTML = displayResults
};

function reset() {
    document.getElementById("results").innerHTML = "";
    while (rolledMons != 0) {
        rolledMons.pop();
    };
};


