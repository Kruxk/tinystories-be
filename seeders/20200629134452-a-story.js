"use strict";
const User = require("../models").user;
const Prompt = require("../models").prompt;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const reinko = await User.findOne({
      where: { name: "Reinko" },
    });
    const til = await User.findOne({
      where: { name: "Til" },
    });
    const prompt = await Prompt.findOne({
      where: { userId: reinko.id },
    });
    const maffiaPrompt = await Prompt.findOne({
      where: { name: "Maffia loyalty" },
    });
    const startupPrompt = await Prompt.findOne({
      where: { name: "Startup/Dragons" },
    });
    const vigilantePrompt = await Prompt.findOne({
      where: { name: "Vigilante Power" },
    });
    const demonPrompt = await Prompt.findOne({
      where: { name: "Demon Professor" },
    });
    return queryInterface.bulkInsert("stories", [
      {
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam est inventore facilis neque cum cupiditate.",
        userId: reinko.id,
        promptId: prompt.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: `I found the gun on my apartment bedroom alongside a handwritten note: Demonstrate your loyalty. Sting the girl. Meeting at 65-6. The paper was yellow and frayed along the edges, but I immediately recognized the penmanship.

        "So it's gonna be this way," I snarled. I cursed the boss, his ostentation, and that wretched golden pen he enjoyed using so much.
        
        The next day I entered the old warehouse at exactly 8:34 PM. The other soldiers entered the building in 7 minute intervals. Soon the boss ambled in, trailed by his guardie.
        
        "Scorpio," he addressed me. "You got the note?"
        
        "Yes, boss," I replied professionally.
        
        "Here are the fotos," he announced. The pictures were small, varying in quality and angle.
        
        "Family above all," I answered. He smiled and trotted off.
        
        I was unable to sleep that night. The picture he had shown me—it was Lucia, my girlfriend. She'd always said she came from a wealthy Italian household, though I'd never imagine the Mafia. My quandary tormented me as I tried to sleep, to close my eyes and rest.
        
        The next day I showed up at her door with a bouquet of flowers in my hand. "Hey," I told her. "I'm taking you on a romantic date." I led her to the abandoned warehouse with the flowers in my hand.
        
        Lucia smiled as we walked. "Hey," she whispered, "did you know that my twin sister and I came here when we were little?"
        
        I halted. "A twin sister? What happened to her? How come you never told me about her?"
        
        "Well," she answered bitterly. "She fell in love with a man from a rival gang. Father hates her guts. He wants to kill her."
        
        I was greatly relieved. I dropped the gun hidden in my coat and kissed her.
        
        "Wait," Lucia exclaimed. Then she drew a gun from her dress pocket.
        
        "Do you want to know what happened to the real Lucia?`,
        userId: reinko.id,
        promptId: maffiaPrompt.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: `"You sure about this boss?"

        Missy Missus, carefully put down her pipe and stared at me with cold gray eyes. "You wanna ask that again kiddo?"
        
        "Erhm no boss, I meant no offense by it, I'm just a bit confused is all."
        
        Behind me I could hear the soft rustling of her two Fangs of the Missus moving into position to strike.
        
        "B-but if that's what you insist I'll do it."
        
        She stared at me with those piercing gray eyes, I felt as if the Goddess Athena herself was blazing light through my very soul.
        
        Then she gave a slight nod. The shadows behind me withdrew.
        
        "You have a week"
        
        I sighed in relief and took an awkward bow before stumbling toward the door.
        
        "Watch yourself kiddo, she ain't easy."
        
        ---
        
        Well this took a turn for the worse. Here I was: Little Green, rising star in the Missy-gang, off to do the impossible. I made my name cuz my hands were fast. I ain't much of a fighter, but I could nab trinkets like none other. That's why they called me Little Green, I had a bit of green in my pockets no matter where I was.
        
        I slinked down the crowded street slitherin' slidin' a bit of wallet, ring, watch, vibrator-- wait you can have that back mister-- into my pockets. Anything to distract me from the task I was off to do.
        
        Shortly a year after I joined I met her: Strawberry Smile. Adorable little thing, her mischievous little half grin could cut right to your heart and almost make you forgive her for literally cutting right to your heart. Her hands were fast as mine, faster even. But where mine was full of cash and glitter, her's was full of sharp steel.
        
        I had been working a tough "IT" job on a major engineering company. On the way out with the data-disk full of prototypes, I was shot around 5 times. And fell off a balcony.
        
        I managed to crawl to a safe-house before passing out. I woke to short strawberry red hair and a lovely crooked smile with my stomach cut open.
        
        "Oh you poor thing, don't you worry I'll fix you up right fast."
        
        It was love at first sight. I passed out again immediately, but afterwards we got together did a few jobs and then I was her man.
        
        Damn Strawberry pie what you do to piss your mom off like that?
        
        In addition to being an excellent assassin, Strawberry Smile was also a practiced field surgeon, even if you ignore her being the Boss's daughter, such skills don't come easy. She had to have done something major for the Great Missus to wanna off her like that.
        
        I ducked into a nearby Sharp Shop. There was no way I was winning 1-on-1 I have to come up with a plan somehow. And I think I know just the person to ask.
        
        ---
        
        "Clearly she has a fondness for the boy, you sure this is the right way honey?"
        
        Missy Missus reached up toward her second husband's grizzled chin and pulled him down for a kiss.
        
        "She has to learn one day if she want's to take over. Anyone can betray you, best not to have any attachments. And besides they've only been together for maybe half a year now? Best to do it now before they get too close."
        
        Silver Thrust, 1st knight to the Queen's table straightened back up and fixed his collar. He gave his wife a wistful look, "And what if he succeeds?"
        
        "Then she isn't worthy to become my successor... and I guess he would be better than I thought. Either way, everyone is replaceable, I'll just have Yvonne take her place."
        
        "Very well then honey, you know best. Now I must be off, the Crooked Brothers are getting difficult again."
        
        "Hmm are they now? Consider maybe they aren't worth all this effort? Maybe you should just give them the old 'severance package'?"
        
        "I'll think about it."`,
        userId: til.id,
        promptId: maffiaPrompt.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: `"Hi, I'm Flutter," the towering woman introduced herself to Marie with a broad smile. Flutter was easily the tallest person in the room, but Marie was the shortest if she didn't count the caterer. She looked up at the redhead that she guessed was at least three feet taller than her, and introduced herself.

        "Hi, Flutter. Marie," she extended a tiny olive-skinned hand, it was enveloped completely by Flutter's giant, milky-white grasp.
        
        "Can I talk to you alone for a moment?" Flutter asked. She gestured at the open sliding door that led to the deck.
        
        "Sure," Marie smiled. She came to the party planning to shmooze with as many wealthy investors as she could. But, she wasn't about to ignore the chance of finding a date or three. She followed Flutter out to the deck while admiring the way her flowing red dress fit.
        
        Outside, the sun was setting into the ocean. A cool breeze caressed Marie's arms as she joined Flutter at the rail overlooking the beach.
        
        "So, how'd you end up here?" Flutter started the conversation.
        
        "You know the finance app, Dragon Hoard?" Marie had only been at the party for about an hour before Flutter introduced herself. In that time she managed to mingle with several people, all of which gave a polite chuckle when she mentioned the name of her app. One even referred to the name as, "very clever". Marie was surprised when Flutter let out a loud guffaw. She noted some heads from the beach turned to see if everything was okay while Flutter continued to chortle loudly. Marie began to get the feeling Flutter, and maybe everyone else at the party, was laughing at her. It definitely soured Marie's feelings toward her a bit.
        
        "It's not that funny," Marie said once Flutter seemed like she was calming down. Still giggling, Flutter nodded her head.
        
        "It totally is, though."
        
        "Well, I hope you enjoyed the moment," Marie gave Flutter a flat smile, then turned to head back inside.
        
        "No, wait!" Flutter put a hand on Marie's shoulder to stop her, but let go instantly. "I'm sorry, I'm not laughing at the name of your app. I'm laughing at those idiots in there," she pointed at the party happening inside. Marie really wanted to like Flutter. She decided to give her a chance to explain.
        
        "And, why is that?" she asked.
        
        "I'm going to tell you a secret, but don't freak out. Don't panic, you're safe with me," Flutter said. Marie moved to the rail again.
        
        "I'm listening," she said.
        
        "This little club is by invite only," Flutter said.
        
        "I got one," Marie was quick to defend herself. Though, despite the reflex, she realized that Flutter didn't seem to be the elitist type. Stuffy people tended to avoid guffawing so freely, lest they embarrass themselves.
        
        "I know, listen. This is a private club with a very exclusive membership." Marie shifted her weight toward the party; Flutter noticed and skipped to the point.
        
        "Everyone here, except you, is a dragon. It looks like they thought you were one too."
        
        "Proof?" Marie crossed her arms and took a single step toward the party.
        
        "I can do this...," Flutter said. Her alabaster skin darkened. It shifted its color and texture. In moments her arms, chest and face were covered in brilliant golden scales. They gleamed in the setting sunlight and Marie was left speechless. Both in surprise, and awe at her beauty; the golden scales somehow made Flutter's red dress look better. After several moments, Flutter relaxed and the scales receded into her skin.
        
        "You're not in any danger," Flutter said when Marie didn't say anything. "If and when they find out, they'll just make you sign an NDA and kick you out of the club. The last thing they want is the police snooping around for a missing woman and taking a close look at their finances."
        
        "They're really dragons?" Marie asked finally. It seemed like an unnecessary question, but it was the only sentence she could string together. Flutter nodded but didn't say anything else. She smiled at Marie letting her sort through her thoughts. Marie walked to the railing and stared out at the sunset for several quiet minutes. Then, a thought struck her.
        
        "Everyone's a dragon?" she asked again.
        
        "Yeah," Flutter said.
        
        "And they thought I was a dragon too?" she asked. Flutter nodded.
        
        "How did you know I'm not?" Flutter smiled.
        
        "Donna told me," she said.
        
        "Donna..?" The name sounded familiar. "Donna Chang? The caterer?" Marie thought the food was delicious and was sure to introduce herself to the caterer and get a business card.
        
        "That's the one," Flutter said.
        
        "How did she know?" Marie had another realization. "Is she a dragon too!?"
        
        "She is; she can see things most others can't. Don't worry though, she's not going to tell anyone about you."
        
        "She told you," Marie replied.
        
        "She trusts me."
        
        "Should I trust you?" Marie asked. She took a half step closer to Flutter.
        
        "I can't tell you that," Flutter said with a wink. "But, we should get dinner tomorrow night so you can decide for yourself."`,
        userId: reinko.id,
        promptId: startupPrompt.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: `“And… this is the Vault.”

        One by one the overheads flipped on, bathing the inside of the rock chamber in a soft red glow. The LED’s were high up in the ceiling, so the glow washed over everything.
        
        “Red lights? I assume to help preserve the contents... hmm?” Dr. Morelli asked, peering around, squinting. Joe watched him walking around. Morelli looked like what you’d expect a 90 year old man still walking around looked like: wrinkles, sinewy. Wearing a suit.
        
        Joe knew about suits. He knew this one wasn’t something you bought off a rack. He knew enough about suits to know that a suit like this was hand-made and came from someone who sold to circles he’d never move in… not unless the Vault really took off.
        
        “What did you say this was called again?” Morelli asked.
        
        Joe pointed to a wall monitor filled with information a big name at the top. “This is the Abzu vault.”
        
        “And you picked that name… why?” Morelli squinted at him through those little impossible glasses, two tiny round circles on a piece of wire. So small. Hard to believe they actually did anything.
        
        “Well… it’s a mythological dragon name. Babylonian. We needed a naming structure, and it, well, started with A. Vault 2 is getting finalized next week and will probably be called the Bolla vault. After an Albanian dragon. “
        
        Morelli snorted, smiling. “I don’t… quite get the… cryptic? The crypto. Maybe you’d outline?”
        
        Joe frowned. His Smart-tacs had some basic software for filtering light – they were designed to filter out UV to protect the eye as well as have some basic sun blocking and vision correction. The ‘tacs now, though, were throwing errors. Normally the ‘tacs wouldn’t throw an error to a regular user, but Joe had hacked the OS to allow him some more control, and now here they were squawking about odd waveforms and information structures coming from Morelli’s direction. Weird.
        
        Joe waved around the room. “Yeah, so the basic idea is you move valuable items… typically not currency or art… something that can be converting into the Crypto we’re issuing. We can issue Bitcoin, or our own Vaultcoin, or any other of a hundred real currencies if you prefer, like Yen or Dollars. Once the material goes in the Vault, we keep it protected, sealed and guarded. Climate controlled. The mountain above is thick enough to block scanning, satellite views, even a nuclear warhead.”
        
        Morelli had been shuffling around, finally coming to a wall. He put a hand up, palming the wall, and his eyebrows waggled. “Something’s in the wall? Not just rock.”
        
        Joe grinned – the old man acting like he noticed something was a touch theatrical, but nice regardess. “Yep. There’s a Faraday cage an inch back in the wall. It blocks electrical radiation, just lowers the chance of security issues.”
        
        “And there’s internet. That’s important. And I can come and go as I please?”
        
        Joe nodded. “There are guards, but we’ve enabled multiple entrances and exits, so no one person knows if you are coming or going. Obviously if you want to ship stuff here we can deliver it to the main chamber for you, or to outside the door. But if you want to come in and inspect the vault that’s fine. However, we do ask that if you add contents to the vault you register it with the currency exchange. The treasure is stored here, but to use it in the outside world we need to convert it. If you remove it from the vault you pay a penalty.” Joe shrugged. “That’s how we make money. That and supporting the various crypto with liquid cash. “
        
        Joe walked over to the monitor to check the temperature. 60 degrees. As the readout streamed by, he heard a scraping sound from behind him. He turned around to see what Morelli was up to.
        
        Morelli was gone. In his place was a… a mass, of sorts, of fish at first – then scales. Coils. Parts of it seemed to swim in and out of vision. A long, sinewy head on a neck made out of a tube of shimmering scales and water arched overhead, peering down. Where the head was his ‘tacs were throwing countless bitstream errors and warnings.
        
        “I like it,” the thing that was Morelli said. “Impressive. The wards in the walls are a nice touch. I had some Svartálfar that did engineering like that once in a lair, but nothing like this. Very clean. Sort of on the nose to call it Abzu, though, of course, but that’s what got my interest so I guess it worked. “
        
        The neck elongated, impossibly long. Joe felt his insides revolt at the bizarre mathematics of it. Joe nodded, trying to keep his composure. Under normal circumstances he’d probably would have shit himself into a fetal position and passed out, but before client meetings he dosed himself up on a cocktail of Beta-blockers and Huperzine-analog so his composure was about as cool as it ever was.
        
        “I am intrigued, though…” Morelli said. “Obviously you are one of us. The subtle clues in the vault notwithstanding, if you were a human you’d have been glamoured by now, or terrified beyond rational thought. This is a mystery. You aren’t actually Abzu, right? I was pretty sure he had upmolted a couple of centuries ago.”
        
        Joe swallowed, forcing a smirk on his face. “Of course not.”
        
        “Yess… interesting. “ The head cocked to one side, looking at him. “And the fact that I can’t tell who you are lends credence to your security. That’s another selling point. Hmm. “
        
        Beta-blockers in Joe’s system were being burned out and consumed. Joe could feel the crash he usually got after a Ted talk coming on, and once that wore off he wasn’t sure if he could hold it together. He casually looked at his watch.
        
        “I’ve got another appointment with another client in a half hour. Would you like to go to my office and look over the contracts? I’ve got a coffee service waiting. “
        
        Morelli seemed to tighten up, knotting in on itself, the loops becoming small, becoming skin, until finally he looked as he did before. As he shrank the data capture errors on the ‘tacs also seemed to reduce. He moved the small glasses out of a suit pocket to his wrinkled nose. Joe noticed that the few checksum errors he was getting vanished once the glasses were on.
        
        “Yes. Coffee sounds good.”`,
        userId: til.id,
        promptId: startupPrompt.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: `The dark lord leaned forward from his throne expectantly. But the hero was done monologuing. Small and unarmed, she somehow managed cross the moat, enter his castle, and evade hundreds of patrolling guards. All that to deliver a ridiculous speech. He couldn't believe it. He chuckled, slowly at first, but building. Then he threw his head back and let out a bellowing laugh that echoed through the silent stone hall, heavy armor clinking with every movement.

        "Oh, that's a good one," he said, earnestly trying not to laugh but failing utterly. "Did you recruit the laundry girl too, or were you short on ideas?" He buried his head in one armored hand.
        
        "Even if," he said, and held out an open palm, "you blackmailed the right guards, bribed my entire honor guard with an amount too great to realistically uphold, replaced my daughter the princess with a lookalike, and persuaded the bloodsucking nobility with nothing but the righteousness of your cause, you forgot one very important thing."
        
        Before the hero could ask, he slammed his finger into the dark, melon-sized jewel set into his breastplate. "I have the Black Stone! My strength is magnified a hundred fold! I could kill everyone in this room without breaking a sweat. You'd have to drop an anvil on me to kill me."
        
        The hero smirked, and she said, "Funny you should say."`,
        userId: reinko.id,
        promptId: vigilantePrompt.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: `"I know you have a knack for getting out of these kinds of things, so I'm going to sit here and watch your death," Dr. Decrominopicus said with deep resentment.

        "Yeah, well I know that I'm gonna get out of this," I said to him.
        
        "Oh really now? How's that? Even if you were able to free yourself from your bonds, it would only accelerate your fall into the lava below," he said with interest.
        
        I looked around. He seemed to be right. I was tied to a crane being lowered into a pit of scorching hot lava and was already close enough to feel the heat burning singes into my clothes and skin. It was on a slow, but even descent, the crane was being controlled by the doctor himself. My eyes darted around, absorbing the scene, and trying to find any pieces that I could explain away.
        
        "Well... you see, the crane... the crane is going to get stuck at a convenient location for me when it jams up!" I said confidently.
        
        "Absurd, I just built this last--" he stopped and stared as the crane pulled to a halt, its gears scratching one another loudly. "What?"
        
        Dr. Decrominopicus pushed on the lever to no avail. Back and forth he forced his weight against it.
        
        "Then-then you're going to--" I began.
        
        "Wait, stop talking, I need a moment to think," the doctor said.
        
        "You're going to push against it in the wrong direction, swinging me away from the pit of death!" I yelled.
        
        "I don't know what delusions you have," he said, still trying to wiggle the lever, "but this lever can only move you up and down. You could not be swung away from the pit--"
        
        The lever snapped off in his hands. He stared at it for a moment and threw it forward in anger, knocking it against the other lever and swinging me away from the pit. Just as "planned."
        
        "All right, all right, what next?" I said to myself.
        
        "Will you shut up!" Decrominopicus yelled, fumbling in his coat.
        
        "You'll pull out your gun and--"
        
        "And kill you, yes!" he said, aiming down the sight.
        
        "--and accidentally shoot the chain just above me, sending my tumbling down to a surprisingly soft landing!" I yelled, closing my eyes as he fired the gun.
        
        The bullet ricocheted off the chain, breaking it and then collided with the lever, turning it to fall on a pile of tarp that he had on another end of his lair.
        
        "Next I'm going to push against the chains, but they're so weak from the heat of the lava that they break off immediately," I said, pushing against my restraints.
        
        "Stop talking!" he yelled, frustrated as he climbed out of the crane.
        
        "Then I'll do a bunch of cool backflips and dodge the next five bullets you fire at me," I said, running ahead.
        
        "Why are you still talking like--agh!" he grunted and began firing at me while I put up an impressive array of gymnastic ability that I did not have. I felt the air of bullets fly right by me, but none of them made direct contact. With each bullet fired, he ran closer and closer to me until he held the gun right in front of my head.
        
        "What are you gonna do now?" he grinned.
        
        "I--"
        
        He pulled the trigger before I could finish the sentence. I closed my eyes.
        
        Click
        
        I opened my eyes. We both took a moment to look at his gun.
        
        "What!?" he exploded.
        
        Click click click
        
        "Fine!" he slapped the gun against my face. My vision exploded in an array of colors and stars and I fell backward.
        
        "I may not have my bullets, but I can still beat you to death!" he said, raising the gun.
        
        "Except the feds are gonna show up," I said, wincing. He tensed for a second and looked up. Nothing came at him. He grinned and smacked me again with the gun. I wasn't detailed enough to activate my power.
        
        "Ohhh..." I groaned.
        
        "You think it's even possible that someone other than myself knows where we are! I brought you in blind, how would they possibly know where to go?" he said, raising his gun again.
        
        "Because!" I screamed, causing him to pause, "the five shots that you took actually bounced around the inside of your office and ended up actually dialing the exact right number of the feds which they were tracing at the same time, causing them to be led right to this place, right about now."
        
        He stared at me, utterly dumbfounded, and in silence.
        
        "That is by far the stupidest thing I have ever heard of," he said.
        
        "Yeah, well, I'm bad at improvising."
        
        I winced as he brought the gun down to hit me again when the roof blew open. Above us, a helicopter flew, and down came a dozen different agents who threw a net on top of Decrominopicus before he had a chance to gain his senses.
        
        "H...How?" Decrominopicus asked, confusion having overtaken his face.
        
        "I don't know," I answered confidently and honestly.`,
        userId: til.id,
        promptId: vigilantePrompt.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: `I looked at the metal detectors, shaped like an upside down U, that stood at every entrance to the main hall. For a good two months, I had found every reason to avoid them. I'd actually become quite good at it. It became fun, after a while, like a brain teaser puzzle.

        And I couldn't help but bring my students into it. This was the perfect opportunity for them to learn.
        
        Standing before it now with the small group of upperclassmen arrayed behind me, I raised my voice above the general hubbub of carefree conversation and asked them what the flaws in this system were.
        
        They looked at me blankly.
        
        I told them to imagine they were demons. How would a demon evade these detectors? How might a demon view this seemingly normal addition to school security? In what ways could a demon evade detection?
        
        And I told them that was their capstone assignment for the year and dismissed them from class. The good ones were excited, talking together about the interesting new project that hadn't been on the syllabus. The handful of freeriders were not allowed to be in groups so they had to think of it on their own.
        
        All they had to do was figure out all the tricks and write me a paper by the end of the semester. Oh, then you'd have a bunch of new ideas to keep your identity secret! you may think.
        
        No. I am a teacher first. My greatest hope was that these brilliant students would test their ideas, perhaps find out how to fix these flaws, and may even send their ideas to the production companies that installed the detectors.
        
        But then the two laziest freeriders walked into my office one day, both pale and twitchy, and Gordon said, "Mister Barthalou... Um... About the assignment..."
        
        I looked at him patiently.
        
        Glancing once at Rick, Gordon stared at my desk and muttered, "Mister Barthalou, you're a demon, aren't you?"
        
        I thought panic would rise within me, but I am pleased to announce that it was overwhelming pride. Unable to conceal my smile, I prodded, "What makes you say that?"
        
        Rick answered, "We realized you're doing all the things we figured a demon would do to evade the detectors." He glanced at Gordon and back at me.
        
        I beamed at my two pupils. If no one else in all my years of teaching understood how to hunt demons, I would still be satisfied that these two understood the heart of the assignment. "You two will make fine demon hunters one day," I said a little gruffly, choking on my emotion.`,
        userId: reinko.id,
        promptId: demonPrompt.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: `"Professor, may I have a word?"

        Sam looked up to see his student, Marcus, who had approached his desk. Unlike the rest of his class who were eager to leave for lunch, Marcus stood by his desk, hugging his books to his chest.
        
        Sam let out a sigh. "Marcus, is this about your essay on benefits of holy water? I already told you that holy water can't kill demons. It might temporarily injure the newer ones, but the old ones won't even notice it. The grades you all received are final, and I will not be debating them with you."
        
        "No sir, that's not quite it," Marcus said. The classroom door closed as the remaining students left, leaving the two of them alone.
        
        "Well, spit it out boy," Sam muttered impatiently, causing Marcus to flinch. "I've got to prepare the gym for combat training, so I only have a few minutes to grab a bite to eat." The boy had always been timid. Book smart, but oblivious to the world around him. Not to mention his lack of aptitude with the more athletic side of demon hunting.
        
        "Well sir, perhaps we could have this conversation somewhere else? Only I know that sometimes this classroom gets used during the lunch break for clubs, and I don't really want anyone to interrupt. It's quite private you see," Marcus replied hesitantly, causing Sam to narrow his eyes.
        
        "I don't believe anyone has booked this classroom for use today, so we should be fine," Sam responded, looking at Marcus a bit more carefully. The boy had a bit of sweat on his brow and his hands were shaking slightly. Not to mention he was avoiding looking Sam in the eyes. "Actually, I have a meeting with the Dean in here shortly, so we should be granted privacy until then." Sam focussed his hearing, the sound of Marcus' heartbeat racing at a speed far faster than normal.
        
        "Please sir, it would help me feel at ease."
        
        Sam took a deep breath. The smell hit him like a train. Pure, unadulterated fear. It rolled off of Marcus in waves, secreted from his every pore. The boy was absolutely terrified. The mere act of standing must be taking all of his willpower.
        
        "You want me to walk down the hallway? Passed the new demon detector?" Marcus' eyes widened before he redirected his gaze at the floor. "So you know," Sam whispered, sitting back down in his chair. Panic shot through Marcus as Sam's words hit him, and the smell of fear increased.
        
        "Yes."
        
        "How much I wonder?" Sam muttered quietly.
        
        "I know enou-"
        
        "No, you don't," Sam cut in curtly. "So what do you want?" he asked as he reached down to unlock his desk drawer. "Money? Prestige? A job?"
        
        "I- I don't want any of that," Marcus stammered.
        
        "So, not extortion. A favour then? Never took you for the blackmailing type to be honest," Sam said as he reached into his desk, his hand searching for what he was looking for.
        
        "You would think I have nefarious purposes wouldn't you! You demon! But all I wanted was proof. Now I can expose you."
        
        Sam let out a laugh. He couldn't help it. "Expose me? To who?"
        
        "You said it yourself Professor Mael. The dean is going to be joining us soon. You can't kill me and clean up before he get's here. So even if I die, my sacrifice will mean something."
        
        "Hm, didn't expect that," Sam replied. "Seems you've got some stones on you boy. Giving up your life for your belief. Sure you don't want to change your mind? Wouldn't mind having you around."
        
        "Cunning as you may be, you won't stand a chance against the dean," he hissed defiantly. "That's why you stay hidden. When he arrives, I'll tell him, or my dead body will. And you-"
        
        Sam burst out laughing again. "Sorry," he chuckled, wiping away tears as Marcus stared at him in shock. "Really, I am. But come on? How much research did you really do? I'm not staying that hidden. My name is Professor Sam Mael," he watched as the words clicked into place for Marcus.
        
        "Samael" he whispered in horror. "The poison of God. The fallen one."
        
        "That's me!" Sam replied cheerfully as he noted Marcus' right hand reaching into his pocket. "Really think the dean would wipe the floor with me? I'm one of the original demons. Besides, even if the dean does walk in he's not going to-"
        
        Marcus moved, dropping his books as he pulled out a vial of water and threw it at Sam's face. The glass smashed against his jaw, spreading the water across his face.
        
        "Die Demon!" Marcus screamed.
        
        Sam glared at Marcus as the water dripped down his face. "I told you holy water doesn't do anything you little shit!" he muttered. "Should have listened to me in class instead of wasting your time with this." Sam pulled a knife out of his desk drawer, and flicked it at Marcus, the blade burying itself in his throat. "Waste of holy water frankly. Not that it makes a difference to me," he muttered as Marcus fell to his knees.
        
        The door to the classroom opened and the dean walked in, closing the door behind him.
        
        "Ah, I see. My apologies Sir, you're clearly busy," he said quickly, turning to leave.
        
        "Eh, it's fine. I'm just finishing up. What's business?"
        
        Marcus stared wide eyed from the floor, a slight gurgle the only noise he could make.
        
        "Well, I was going to let you know that young Marcus here had figured you out. But I see that's come to a head," the dean said gesturing to the dying boy on the floor.
        
        "Yes, which wouldn't be an issue if you idiots hadn't ordered actual functioning demon detectors. It's been a real pain in the arse. This is the third one who's figured it out this week. Soon the whole school will know."
        
        The dean shrugged apologetically. "Sorry, Janice in accounting did the ordering and you know what she's like. Should be fixed by tomorrow. I've also got another order. Lilith has asked if you could send some entertainment her way, preferably graduates, preferably some muscular ones since she likes the taste of them the best. And I thought we could send some of our more idiotic graduates to try have a go at Michael. He's always hesitant to kill a human, and the last one we sent actually managed to scratch him before Michael showed him the truth."
        
        "Sounds reasonable. Just make sure the detector is broken by tomorrow. I'm sick and tired of climbing out of windows. Oh, and get the janitor to come in and clean this up. I've got a class in here after at three."
        
        The dean nodded, looking down at Marcus, barely clinging to life, tears streaming down his face.
        
        "Said...taught...by...angel," he gasped, the words barely escaping his lips, as blood welled up in his throat.
        
        Sam crouched down, a wide grin across his face. "You are taught by an angel Marcus. It just happens to be a fallen one."
        
        "Now clean this shit up!" Sam said, walking towards the window. "After all, this is the Demons Hunters Academy. Half the fun is them not knowing.`,
        userId: til.id,
        promptId: demonPrompt.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("prompts", null, {});
  },
};
