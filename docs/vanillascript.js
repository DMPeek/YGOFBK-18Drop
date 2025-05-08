const allMons = [
    {id: 0, Name: "Blue-Eyes White Dragon (Azrael)"},
    {id: 1, Name: "Blue-Eyes White Dragon (Ibris)"},
    {id: 2, Name: "Blue-Eyes White Dragon (Djibril)"},
    {id: 3, Name: "Seiyaryu"},
    {id: 5, Name: "Kaiser Dragon"},
    {id: 6, Name: "Blackland Fire Dragon"},
    {id: 7, Name: "Curse of Dragon"},
    {id: 8, Name: "Red-Eyes B. Dragon"},
    {id: 10, Name: "Serpent Night Dragon"},
    {id: 12, Name: "Crawling Dragon"},
    {id: 13, Name: "Meteor Dragon"},
    {id: 14, Name: "Baby Dragon"},
    {id: 15, Name: "Winged Dragon, Guardian of the Fortress #1"},
    {id: 18, Name: "Parrot Dragon"},
    {id: 19, Name: "Harpie's Pet Dragon"},
    {id: 20, Name: "Two-Headed King Rex"},
    {id: 21, Name: "Megazowler"},
    {id: 22, Name: "Uraby"},
    {id: 23, Name: "Kairyu-Shin"},
    {id: 24, Name: "Aqua Dragon"},
    {id: 25, Name: "Sea King Dragon"},
    {id: 26, Name: "Spike Seadra"},
    {id: 27, Name: "Thunder Dragon"},
    {id: 29, Name: "Mystical Elf"},
    {id: 30, Name: "Time Wizard"},
    {id: 31, Name: "Rogue Doll"},
    {id: 32, Name: "Magician of Faith"},
    {id: 33, Name: "Dark Magician"},
    {id: 34, Name: "Dark Magician Girl"},
    {id: 35, Name: "Magician of Black Chaos"},
    {id: 36, Name: "Saggi the Dark Clown"},
    {id: 37, Name: "Illusionist Faceless Mage"},
    {id: 38, Name: "Skull Knight"},
    {id: 40, Name: "Dark Elf"},
    {id: 41, Name: "Lord of D."},
    {id: 42, Name: "Invitation to a Dark Sleep"},
    {id: 43, Name: "The Illusory Gentleman"},
    {id: 44, Name: "Tao the Chanter"},
    {id: 45, Name: "Aqua Madoor"},
    {id: 46, Name: "Water Girl"},
    {id: 47, Name: "Dragon Piper"},
    {id: 48, Name: "Gemini Elf (Kachua)"},
    {id: 49, Name: "Gemini Elf (Lora)"},
    {id: 50, Name: "Dark Magician #2"},
    {id: 51, Name: "Giltia the D. Knight"},
    {id: 52, Name: "Black Luster Soldier"},
    {id: 53, Name: "Swordstalker"},
    {id: 54, Name: "Flame Swordsman"},
    {id: 55, Name: "Lava Battleguard"},
    {id: 56, Name: "Swamp Battleguard"},
    {id: 57, Name: "Judge Man"},
    {id: 58, Name: "Gaia The Fierce Knight"},
    {id: 59, Name: "Celtic Guardian"},
    {id: 60, Name: "Axe Raider"},
    {id: 61, Name: "Zanki"},
    {id: 62, Name: "Ansatsu"},
    {id: 63, Name: "Kanan the Swordmistress"},
    {id: 64, Name: "Monster Tamer"},
    {id: 65, Name: "Swordsman from a Foreign Land"},
    {id: 66, Name: "Garoozis"},
    {id: 67, Name: "Hitotsu-Me Giant"},
    {id: 68, Name: "Battle Ox"},
    {id: 69, Name: "Beaver Warrior"},
    {id: 70, Name: "Mountain Warrior"},
    {id: 71, Name: "Tiger Axe"},
    {id: 73, Name: "Sengenjin"},
    {id: 74, Name: "Panther Warrior"},
    {id: 75, Name: "Mystic Horseman"},
    {id: 76, Name: "Buster Blader"},
    {id: 77, Name: "Stuffed Animal"},
    {id: 78, Name: "Dark Rabbit"},
    {id: 79, Name: "Silver Fang"},
    {id: 80, Name: "Gazelle the King of Mythical Beasts"},
    {id: 83, Name: "Mavelus"},
    {id: 84, Name: "Wing Eagle"},
    {id: 85, Name: "Big Insect"},
    {id: 86, Name: "Basic Insect"},
    {id: 87, Name: "Hercules Beetle"},
    {id: 88, Name: "Larvae Moth"},
    {id: 89, Name: "Perfectly Ultimate Great Moth"},
    {id: 90, Name: "Dungeon Worm"},
    {id: 91, Name: "Man-Eater Bug"},
    {id: 92, Name: "Hunter Spider"},
    {id: 93, Name: "Armored Lizard"},
    {id: 94, Name: "Fiend Kraken"},
    {id: 95, Name: "Jellyfish"},
    {id: 96, Name: "Octoberser"},
    {id: 97, Name: "Beastking of the Swamps"},
    {id: 98, Name: "Giant Red Seasnake"},
    {id: 99, Name: "Kanikabuto"},
    {id: 100, Name: "Zarigun"},
    {id: 101, Name: "Penguin Soldier"},
    {id: 102, Name: "Harpie Lady (Airo)"},
    {id: 103, Name: "Harpie Lady (Ocupete)"},
    {id: 104, Name: "Harpie Lady (Keraino)"},
    {id: 105, Name: "Sanga of the Thunder"},
    {id: 106, Name: "Kazejin"},
    {id: 107, Name: "Suijin"},
    {id: 109, Name: "Insect Queen"},
    {id: 110, Name: "Fairy's Gift"},
    {id: 111, Name: "Hane-Hane"},
    {id: 112, Name: "Gyakutenno Megami"},
    {id: 113, Name: "Orion the Battle King"},
    {id: 114, Name: "Dark Witch"},
    {id: 115, Name: "Dancing Elf"},
    {id: 116, Name: "Enchanting Mermaid"},
    {id: 117, Name: "Flame Cerebrus"},
    {id: 118, Name: "Giant Soldier of Stone"},
    {id: 119, Name: "Millenium Golem"},
    {id: 120, Name: "Dark Plant"},
    {id: 121, Name: "Queen of Autumn Leaves"},
    {id: 122, Name: "Moisture Creature"},
    {id: 123, Name: "Dunames Dark Witch"},
    {id: 124, Name: "Embodiment of Apophis"},
    {id: 125, Name: "Mystical Beast Serket"},
    {id: 126, Name: "Phantom Dewan"},
    {id: 127, Name: "Shadow Specter"},
    {id: 128, Name: "Zombie Warrior"},
    {id: 129, Name: "The Snake Eyes"},
    {id: 130, Name: "Armored Zombie"},
    {id: 131, Name: "Dragon Zombie"},
    {id: 132, Name: "Pumpking the King of Ghosts"},
    {id: 133, Name: "Shadow Ghoul"},
    {id: 134, Name: "Ghoul with an Appetite"},
    {id: 135, Name: "Feral Imp"},
    {id: 136, Name: "Summoned Skull"},
    {id: 137, Name: "Horn Imp"},
    {id: 138, Name: "Kuriboh"},
    {id: 139, Name: "Castle of Dark Illusions"},
    {id: 140, Name: "Reaper of the Cards"},
    {id: 141, Name: "King of Yamimakai"},
    {id: 142, Name: "Dark Chimera"},
    {id: 143, Name: "Dark King of the Abyss"},
    {id: 144, Name: "Midnight Fiend"},
    {id: 145, Name: "Ryu-Kishin Powered"},
    {id: 146, Name: "Bickuribox"},
    {id: 147, Name: "Zoa"},
    {id: 148, Name: "Dragon Seeker"},
    {id: 149, Name: "Neck Hunter"},
    {id: 150, Name: "Three-Headed Geedo"},
    {id: 151, Name: "Kryuel"},
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

function rollEighteen() {
    let currentIndex = allMons.length;
    while (currentIndex > 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [allMons[currentIndex], allMons[randomIndex]] = [allMons[randomIndex], allMons[currentIndex]]
    };
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