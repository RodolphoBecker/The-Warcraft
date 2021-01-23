import MainOrcBackground from '../assets/background-internal-orc.jpg';
import MainOrcCharacter from '../assets/image-orc-character.png';
import PageRaceOrcBackground from '../assets/background-orc.jpg';
import HomeZoneImageOrc from '../assets/background-durotar.jpg';
import HomeCityImageOrc from '../assets/background-orgrimmar.jpg';

import MainTaurenBackground from '../assets/background-internal-tauren.jpg';
import MainTaurenCharacter from '../assets/image-tauren-character.png';
import PageRaceTaurenBackground from '../assets/background-tauren.jpg';
import HomeZoneImageTauren from '../assets/background-mulgore.jpg';
import HomeCityImageTauren from '../assets/background-thunderbluff.jpg';

import MainTrollBackground from '../assets/background-internal-troll.jpg';
import MainTrollCharacter from '../assets/image-troll-character.png';
import PageRaceTrollBackground from '../assets/background-troll.jpg';
import HomeZoneImageTroll from '../assets/background-echo-isles.jpg';
import HomeCityImageTroll from '../assets/background-darkspear.jpg';

import MainForsakenBackground from '../assets/background-internal-forsaken.jpg';
import MainForsakenCharacter from '../assets/image-forsaken-character.png';
import PageRaceForsakenBackground from '../assets/background-forsaken.jpg';
import HomeZoneImageForsaken from '../assets/background-tirisfal-glades.jpg';
import HomeCityImageForsaken from '../assets/background-undercity.jpg';

import MainBloodElvesBackground from '../assets/background-internal-blood-elf.jpg';
import MainBloodElvesCharacter from '../assets/image-blood-elf-character.png';
import PageRaceBloodElvesBackground from '../assets/background-blood-elf.jpg';
import HomeZoneImageBloodElves from '../assets/background-eversong-woods.jpg';
import HomeCityImageBloodElves from '../assets/background-silvermoon.jpg';

import MainGoblinBackground from '../assets/background-internal-goblin.jpg';
import MainGoblinCharacter from '../assets/image-goblin-character.png';
import PageRaceGoblinBackground from '../assets/background-goblin.jpg';
import HomeZoneImageGoblin from '../assets/background-kezan.jpg';
import HomeCityImageGoblin from '../assets/background-bilgewater.jpg';

const hordeRacesPageReducer = () => {
    return [
        {
			id: 0,
			faction: 'Horde',
			name: 'Orc',
			color: '#250a03',
			mainBackground: MainOrcBackground,
			mainCharacter: MainOrcCharacter,
			pageRaceBackground: PageRaceOrcBackground,
			homeZoneImage: HomeZoneImageOrc,
			homeCityImage: HomeCityImageOrc,
			quote: 'LOK-NARASH!',
			title: 'Fierce Conquerors',
			description: 'Unlike the other races of the Horde, orcs are not native to Azeroth. Initially, they lived as shamanic clans on the lush world of Draenor. They abandoned their peaceful culture when Kil’jaeden, a demon lord of the Burning Legion, corrupted the orcs and used them in his vengeful plot against the draenei, who were exiles from Kil’jaeden’s homeworld.',
			history: 'Kil’jaeden’s plan worked. The orcs drank the blood of Mannoroth—a prominent Burning Legion general—infusing them with power and enslaving them to the Legion. Exposure to fel energies turned their naturally brown skin into a sickly green. Under the demon’s influence, the orcs killed off most of the draenei population, but Kil’jaeden would not stop there. With the orcs at their disposal, the Burning Legion planned to invade Azeroth once again. To this end, the corrupted human archmage Medivh conspired with the orc warlock Gul’dan to build the Dark Portal, a massive structure that would allow the orcs passage to Azeroth. Arriving in Azeroth, the seemingly unstoppable orc armies, known as the Horde, crushed the human kingdom of Stormwind. Eventually, however, the humans made a last stand and were able to defeat the Horde and enslave most of the survivors. But a young slave named Thrall, together with Warchief Orgrim Doomhammer, fought to free the captive orcs. Orgrim died in battle, and the title of warchief, as well as Orgrim’s weapon, the Doomhammer, was passed onto Thrall. Thrall led his people to Kalimdor, where his friend and mentor, Grommash Hellscream, gave his life to defeat Mannoroth and forever free the orcs from the Legion’s control. Years later, Thrall returned to Draenor, now known as Outland, to once again stop the Legion. There, he convinced Garrosh, son of Grommash Hellscream, to join the Horde. Thrall believed that Garrosh would be a clear choice for his successor, but as he learned eventually, the orcs would need more than a lone leader figure to endure. After years of long wars and bloodshed, Thrall and the orcs of Orgrimmar ultimately found a new way to rule—the creation of a council in which all members of the Horde have equal representation—and are once more hopeful for their future on Azeroth.',
			zone: 'Durotar',
			zoneDescription: 'The dry, harsh land of Durotar is home to some of the toughest creatures on Azeroth. Unwary travelers may fall prey to venomous scorpids, ferocious crocolisks, or angry quilboar. Thrall chose to settle this inhospitable area after the Third War as penance for the orcs’ past transgressions. He named the land after his father, Durotan, former chieftain of the Frostwolf clan. Following the Cataclysm, many of the orcish settlements were flooded or destroyed, and the Northwatch soldiers at Tiragarde Keep have become more aggressive than ever. As relations worsen between the Alliance and the Horde, it is essential that the orcs contain these threats swiftly to ensure the survival of their people.',
			city: 'Orgrimmar',
			cityDescription: 'Named for the former Horde warchief Orgrim Doomhammer, this capital was rapidly constructed when the orcs first settled in Durotar. Garrosh Hellscream has recently rebuilt most of the city’s architecture, and now Orgrimmar’s fortresses rank among the most imposing on Azeroth. Spiked metal towers line the city’s streets, and the red-and-black banners of the Horde wave from every post. Most of the various races have separated into their own districts, from the tauren in the Valley of Wisdom to the trolls in the Valley of Spirits. Grommash Hold towers over all else, allowing Garrosh Hellscream to keep a close watch on his people.'
		},
		{
			id: 1,
			faction: 'Horde',
			name: 'Tauren',
			color: '#250a03',
			mainBackground: MainTaurenBackground,
			mainCharacter: MainTaurenCharacter,
			pageRaceBackground: PageRaceTaurenBackground,
			homeZoneImage: HomeZoneImageTauren,
			homeCityImage: HomeCityImageTauren,
			quote: 'WALK WITH THE EARTH MOTHER!',
			title: 'Honorable Conservationists',
			description: 'The peaceful tauren—known in their own tongue as the shu’halo—have long dwelled in Kalimdor, striving to preserve the balance of nature at the behest of their goddess, the Earth Mother. Until recently, the tauren lived as nomads scattered throughout the Barrens, hunting the great kodo beasts native to the arid region.',
			history: 'During the Third War, the mighty tauren chieftain Cairne Bloodhoof had a chance encounter with the orcish Horde that explored Kalimdor. After befriending Warchief Thrall, Cairne and his tribe were able to fend off their enemies while they made a new home in Mulgore; the city of Thunder Bluff. Owing a debt to the orcs for their assistance, the tauren joined Thrall on Mount Hyjal to defend Kalimdor from the demons of the Burning Legion. For years the tauren flourished throughout Mulgore, but tragedy befell them following the campaign against the Lich King in Northrend. Believing that the reckless new warchief, Garrosh Hellscream, would lead the Horde to ruin, Cairne challenged the young orc to a duel. The tauren chieftain clearly had the upper hand... However, unbeknownst to either of the duel’s combatants, Magatha Grimtotem, a tauren matriarch who harbored great contempt for Cairne, had poisoned Garrosh’s blade. The poison paralyzed Cairne, and Garrosh was able to slay him. Magatha’s followers then stormed Thunder Bluff in an attempt to seize it. However, Baine, Cairne’s son, managed to launch a counterattack and retake the tauren capital, banishing Magatha and her followers from tauren lands. Despite the deadly encounter between Cairne and Garrosh, the tauren have not abandoned the Horde. Baine bravely took up the mantle of tauren leadership, and the Highmountain tauren have established a foothold on the growing Legion corruption near the Broken Isles.',
			zone: 'Mulgore',
			zoneDescription: 'After settling in the grasslands of Mulgore, the mighty tauren established the stunning capital of Thunder Bluff. For years afterward the tauren lived amid central Kalimdor’s serene plains, tending to the well-being of their beloved new home. Yet the recent Cataclysm has had disastrous effects on Mulgore. Driven from their dens south of Thunder Bluff, the barbaric quilboar have swarmed across Red Cloud Mesa, encroaching on Camp Narache. Apart from taking numerous tauren captive, the quilboar have caused giant thorned roots to burst from the ground, choking all life from the once-verdant plains. In light of this, the tauren have vowed to drive away the savage creatures and heal the wounds inflicted upon the land before the damage becomes irreparable.',
			city: 'Thunder Bluff',
			cityDescription: 'Established by the wise chieftain Cairne Bloodhoof and his stalwart tribe, Thunder Bluff overlooks the verdant land of Mulgore from atop a series of windswept mesas. Prior to the construction of the capital, the tauren had lived as nomads for countless generations, often under attack by marauding bands of centaur. With Thunder Bluff’s founding, however, the proud and good-spirited race was finally granted a permanent home.Following Cairne’s death in a duel with Warchief Garrosh Hellscream, Thunder Bluff was briefly seized in a coup by Magatha Grimtotem and elements of her tribe. In retaliation, Cairne’s son, Baine, launched a brilliant counterattack using a fleet of zeppelins. After he strategically divided Magatha’s forces, Baine recaptured Thunder Bluff and assumed his role as the high chieftain of the tauren. Having recovered from the recent unrest, the capital is once again a bastion of peace and security for Kalimdor’s tauren.'
		},
		{
			id: 2,
			faction: 'Horde',
			name: 'Troll',
			color: '#141215',
			mainBackground: MainTrollBackground,
			mainCharacter: MainTrollCharacter,
			pageRaceBackground: PageRaceTrollBackground,
			homeZoneImage: HomeZoneImageTroll,
			homeCityImage: HomeCityImageTroll,
			quote: 'You come get da Voodoo',
			title: 'Mystical Conspirators',
			description: 'The savage trolls of Azeroth are infamous for their cruelty, dark mysticism, and seething hatred for all other races. Yet one exception among the trolls is the Darkspear tribe. Plagued by a history of subservience and exile, this proud tribe was on the brink of extinction when Warchief Thrall and his mighty Horde forces were driven to the trolls’ remote island home in the South Seas during a violent storm.',
			history: "The Darkspear trolls, led by wise Sen'jin, abandoned their prejudices and bravely fought side by side with the Horde to defeat a group of humans encroaching on their jungle isle. However, the Darkspears were soon driven from the island by a frenzied band of murlocs intent on appeasing a mysterious sea witch. In the frenzy, Sen’jin was slain. Thrall welcomed the Darkspears into the Horde and gave them a new home along the coastline of Durotar; the Echo Isles. But misfortune struck again; the witch doctor Zalazane betrayed his fellow tribespeople, enslaving them as mindless servants and forcing the Darkspears to fight for their new home.  Following the Horde’s victory against the Lich King in Northrend, Vol’jin allied with the ancestral loa—powerful spirits worshipped by the trolls—and secured victory over the Echo Isles. When the brash orc Garrosh was named warchief and openly showed his disdain for the Darkspear, many disillusioned trolls abandoned the Horde capital, Orgrimmar. Garrosh’s betrayals and crimes against the other Horde races led to his deposition at the hands of Thrall, who named Vol’jin as the new warchief. Vol’jin’s reign as warchief was marked by conflict. In the aftermath of Garrosh's deposition, the treacherous orc colluded with a rogue member of the Bronze Dragonflight to open a portal to a past Draenor, where he helped a newly forming Iron Horde stage an assault on Azeroth. Vol'jin led the Darkspear and the Horde through the Dark Portal, ending this threat. Unbeknownst to them, the warlock Gul'dan escaped to Azeroth, intent on opening the ancient Tomb of Sargeras to allow the Burning Legion to invade Azeroth. At the brutal Battle for Broken Shore, Vol'jin was mortally wounded. Though he was hailed as a hero, his loss was a terrible blow to the Darkspear. Since Vol’jin’s death, the trolls’ deserved place within the Horde has only strengthened, and they stand ready to face anything that might threaten it.",
			zone: 'Echo Isles',
			zoneDescription: 'The Echo Isles are a small cluster of tropical landmasses located near the arid coast of Durotar. In addition to being the home of the Darkspear trolls, the archipelago teems with raptors, tigers, and other dangerous predators. Yet the hostile wildlife is the least of the tribe’s worries. Although the Darkspears have liberated the Echo Isles from Zalazane, a mysterious sea witch has recently appeared and begun using her dark sorcery to destroy the trolls’ way of life. Additionally, naga have overtaken territory just north of Darkspear Isle, the seat of power for the tribe. Having been exiles throughout their history, the Darkspears are prepared to make any sacrifice in order to protect their home. Even now, a new generation of fearless trolls is training on Darkspear Isle, ready to give its lives for the future of the tribe.',
			city: 'Darkspear Isle',
			cityDescription: "Ever since defeating the traitorous witch doctor Zalazane, the Darkspear tribe has worked tirelessly to fortify their home on Darkspear Isle. Covered in a network of huts and bridges, this jungle island has become a symbol of the tribe’s glory, albeit at a time when the trolls’ destiny remains uncertain due to the shocking loss of their leader, Vol'jin. Regardless, the Darkspear tribe has vowed to stand firm and face whatever challenges lie ahead."
		},
		{
			id: 3,
			faction: 'Horde',
			name: 'Forsaken',
			color: '#0b1017',
			mainBackground: MainForsakenBackground,
			mainCharacter: MainForsakenCharacter,
			pageRaceBackground: PageRaceForsakenBackground,
			homeZoneImage: HomeZoneImageForsaken,
			homeCityImage: HomeCityImageForsaken,
			quote: 'What would you ask of death?',
			title: 'Cadaverous Endurers',
			description: 'Death offered no escape for the scores of humans killed during the Lich King’s campaign to scour the living from Lordaeron. Instead, the kingdom’s fallen were risen into undeath as Scourge minions and forced to wage an unholy war against everything… and everyone… that they once held dear.',
			history: '>When the Lich King’s grasp on his vast armies faltered after the Third War, a contingent of undead broke free of their master’s iron will. This freedom seemed like a blessing, but the former humans were soon tormented by memories of the horrors they had committed as mindless Scourge. Those who did not descend into madness faced a chilling realization: the entirety of Azeroth sought their destruction. In their darkest hour, the renegade undead were rallied by Sylvanas Windrunner, former Ranger-General of Quel’thalas, who had also regained her freedom from the Lich King. Under their new queen’s guidance, the independent undead—known as Forsaken—established the Undercity beneath the ruins of Lordaeron. To further her own goals and protect her budding nation, Sylvanas set out to forge alliances. Chief among these were the tauren of Thunder Bluff, who saw the potential for redemption in the Forsaken. Thus, the tauren convinced then-Warchief Thrall to forge an alliance of convenience between the Forsaken and the Horde. The Forsaken assisted the Horde with a massive offensive against the Lich King and exacted vengeance upon their hated enemy. The victory came at great cost; Grand Apothecary Putress betrayed the Forsaken, unleashing a new plague that decimated friend and foe alike, while the dreadlord Varimathras seized the Undercity in a coup that nearly killed Sylvanas. The usurpers were eventually slain and the Forsaken capital was restored, but the debacle created suspicion among the Horde regarding Sylvanas’ ability to lead and ensure the loyalty of the Forsaken. Yet the Forsaken’s allegiance was proven anew when Sylvanas aided the Horde in freeing Orgrimmar from the control of Warchief Garrosh Hellscream, who sought to enslave the other races under orcish supremacy. Now, these free-willed undead fortify their holdings around the Undercity as they ready themselves for the deadly future they believe is inevitable.',
			zone: 'Tirisfal Glades',
			zoneDescription: 'Once the heart of Lordaeron, Tirisfal Glades was a land of beautiful rolling hills and golden pastures. When the human kingdom fell to the undead Scourge, this verdant region was transformed into a plagued wasteland, barely able to sustain the dwindling remnants of life that still existed.',
			city: 'The Undercity',
			cityDescription: 'During the Third War, the once-glorious capital of Lordaeron, Capital City, was decimated by a Scourge army under the command of Prince Arthas Menethil. When the undead continued their campaign against the living throughout the continent, only a small contingent of Arthas’ forces were left behind to carve out a new “Undercity” beneath the ruined capital. Yet these plans were abandoned when Arthas departed for Northrend in order to aid his master, the Lich King. Years later, Queen Sylvanas and her renegade undead, known as the Forsaken, claimed the Undercity as their own and completed the winding network of catacombs and crypts that the Scourge had begun constructing. Apart from being momentarily seized by the traitorous Forsaken Grand Apothecary Putress and the dreadlord Varimathras, the Undercity has remained in firm control of Sylvanas ever since. Today, rivers of poisonous sludge flow through all avenues of the vast Undercity. The toxic fumes and fetid odors permeating every corner of the stronghold have made it a place almost unbearable for the living members of the Horde. Yet for Sylvanas and her cursed followers, the Undercity has become a much-needed refuge in a world where her kind is still feared and hunted.'
		},
		{
			id: 4,
			faction: 'Horde',
			name: 'Blood Elves',
			color: '#1a0907',
			mainBackground: MainBloodElvesBackground,
			mainCharacter: MainBloodElvesCharacter,
			pageRaceBackground: PageRaceBloodElvesBackground,
			homeZoneImage: HomeZoneImageBloodElves,
			homeCityImage: HomeCityImageBloodElves,
			quote: "Anu'belore Dela'na",
			title: 'Vengeful Outsiders',
			description: 'For nearly 7,000 years, high elven society centered on the sacred Sunwell, a magical fount that was created using a vial of pure arcane energy from the first Well of Eternity. Nourished and strengthened by the Sunwell’s potent energies, the high elves’ enchanted kingdom of Quel’Thalas prospered within the verdant forests north of Lordaeron.',
			history: 'During the Third War, however, the high elves were nearly scoured from Azeroth. Led by the death knight Arthas, a Scourge army stormed into Quel’Thalas, slaughtering almost ninety percent of the kingdom’s population. Arthas then used the mystical Sunwell to resurrect the fallen necromancer Kel’Thuzad, irrevocably tainting the fount in the process. Fearing that the befouled well would obliterate his dwindling race, Prince Kael’thas Sunstrider gathered a group of Quel’Thalas’s defenders and destroyed the fount to avert catastrophe. Although the high elves were spared from continued exposure to the Sunwell’s dark energies, in the fount’s absence they suffered terribly from withdrawal. As a result, Kael’thas desperately searched for a means to help his people—whom he had renamed the blood elves—and thus he set out for the shattered world of Outland. There he allied with the renegade demon Illidan Stormrage in the hopes of finding a cure for the blood elves’ crippling withdrawal. Kael’thas had assured his people that one day he would return to Quel’Thalas and lead them to paradise, yet time revealed that his promises were nothing more than lies. On Outland, the prince became twisted due to his reliance on fel energy, the dark and corrupting essence wielded by the demonic Burning Legion itself. Unbeknownst to Illidan, Kael’thas also came under the sway of the Legion’s commander, Kil’jaeden. At the bidding of his new master, the wayward prince eventually returned to Azeroth and seized the site of the Sunwell, hoping to use the fount as a means to usher Kil’jaeden into the world. Ultimately, Kael’thas was slain before his recklessness could bring ruin to Azeroth. In the wake of Kil’jaeden’s defeat, the draenei prophet Velen purified the Sunwell with the Light-infused heart of a fallen naaru, transforming the fount into a source of both holy and arcane energies. Inspired by the Sunwell’s rebirth, the blood elves have since entered into a shining new era in their ancient race’s history. Although some elves remain hesitant to abandon their dependence on arcane magic, others have embraced change for the betterment of Quel’Thalas. Yet only time will tell if the blood elves can avoid repeating the tragic mistakes of their past.',
			zone: 'Eversong Woods',
			zoneDescription: 'The blood elves have called the resplendent Eversong Woods home for millennia, but the stewardship of this forested region has not been without its perils. Bent on harnessing the elves’ mystical Sunwell, Prince Arthas and the Scourge carved a path of destruction through the heart of Quel’Thalas during the Third War, leaving a tainted scar across Eversong Woods. Thus far the elves have worked extensively to drive the lingering undead from their lands and cleanse the wounds of Arthas’s assault, but the task is far from over. As Quel’Thalas looks toward a new future, ensuring the safety and wellbeing of Eversong will be a critical first step.',
			city: 'Silvermoon City',
			cityDescription: 'Less than a decade ago, the wondrous high elven capital of Silvermoon was nearly destroyed during a brutal Scourge invasion. Under the command of Prince Arthas, the undead ravaged the city and went on to corrupt the sacred waters of the Sunwell. Despite this horrific event, the high elves—now known as the blood elves—have labored to rebuild their ruined capital. Most recently, the rebirth of the Sunwell has lifted spirits among the elves, and they have continued to heal Silvermoon’s scars in the hopes of returning the crown jewel of Quel’Thalas to its former glory.'
		},
		{
			id: 5,
			faction: 'Horde',
			name: 'Goblin',
			color: '#0b1308',
			mainBackground: MainGoblinBackground,
			mainCharacter: MainGoblinCharacter,
			pageRaceBackground: PageRaceGoblinBackground,
			homeZoneImage: HomeZoneImageGoblin,
			homeCityImage: HomeCityImageGoblin,
			quote: 'Time is money, friend!',
			title: 'Covetous Schemers',
			description: 'Originally the slaves of jungle trolls on the Isle of Kezan, goblins were forced to mine kaja’mite ore out of the volcanic bowels of Mount Kajaro. The trolls used this potent mineral for their voodoo rituals, but it had an unexpected effect on the slaves who were in constant contact with it: kaja’mite generated new cunning and intelligence in the goblin race.',
			history: 'Crafting powerful artifacts of engineering and alchemy in secret, the goblins soon overthrew their oppressors and claimed Kezan for their homeland. The mines that had once been the goblins’ prison,   and  slave camp became the city of Undermine. It was there that they built the foundations of an empire, and honed their inherent craftiness (some would call it duplicity) to a razor edge. The goblins’ inventions would help them rule the world—or at least own a profitable percentage of it. To the goblins’ dismay, the effects of the kaja’mite began to wear off, and their intelligence waned. Even worse, the ore itself became more scarce. Supplies dwindled. Desperation ensued… The goblins’ once-brilliant inventions started to look haphazard and makeshift, and Kezan’s native swindlers realized that they would need to find other ways to supplement their avarice. The goblins’ remaining craftiness and greed soon lifted the race to preeminence as masters of mercantilism.  Great fortunes were amassed, and the Isle of Kezan became a hub for goblin trading ships. One ambitious trade prince agreed to lend his cartel’s services to the Horde in the Second War. Following the Horde’s defeat, the goblins realized that their profits could double if they weren’t stuck in a restrictive relationship. By the end of the Third War, goblins were providing services to both the Horde and the Alliance. Recently, the Bilgewater Cartel—the goblin faction based in Orgrimmar and Azshara—has found a new enemy in the Alliance. Unprofitable encounters with the secretive SI:7 branch of King Varian’s forces have driven Trade Prince Gallywix from comfortable neutrality. Reforging old pacts with their colleagues’ one-time allies, the goblins of the Bilgewater Cartel have been welcomed into the Horde.',
			zone: 'Kezan',
			zoneDescription: 'Thanks to Kezan’s prominence as a mercantile hub, it’s been divided into dozens of districts by the trade princes, who view every inch of land as an opportunity waiting to be converted into gold and silver. Kezan’s tropical palms are bisected with miles of roadway, and even the beaches are beginning to be paved over by goblin ambitions. Now, nature is reclaiming the island of Kezan – massive Mount Kajaro has erupted with the Cataclysm, flooding the island with searing lava and sending tidal recoil sweeping through Kezan’s harbors.',
			city: 'Bilgewater Harbor',
			cityDescription: 'Following the destruction of Kezan’s port homes, many of the Bilgewater Cartel’s surviving goblins have fled for their lives, joining their new Horde comrades and settling in Azshara’s Bilgewater Harbor. The town’s origins are often speculated on by non-goblins; Bilgewater Harbor sprang up in record time after the Kezan refugees’ arrival, and its’ quintessentially goblin construction has fostered an atmosphere of debauchery and disorder. Orgrimmar’s military has only recently set boots down in Bilgewater, but the harbor’s value as a strategic front conflicts with some pushy goblins’ desire to turn it into a new version of their ancestral home (abounding with gambling dens, pleasure houses and other commercial luxuries). This cultural rift is likely to breed tension in the ranks of the Horde sooner rather than later.'
		},
    ]
}

export default hordeRacesPageReducer;