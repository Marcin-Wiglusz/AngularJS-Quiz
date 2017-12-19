(function() {

  angular
    .module('QuizApp')
    .factory('questionsService', questionsServiceFunc);

    function questionsServiceFunc() {

      var dataObject = {
        quizData: quizData,
        quizQuestions: quizQuestions,
        correctAnswers: correctAnswers
      }
      return dataObject;
    }

    //need to get that to quizQuestions
    var correctAnswers = [2, 2, 1, 1, 3, 3, 1];

    var quizQuestions  = [
        {
            type: "text",
            text: "Incitatus was a(n)?",
            possibilities: [
                {
                    answer: "Roman Emperor"
                },
                {
                    answer: "Assassin send to kill Chineese Emperor Qin Shi Huang"
                },
                {
                    answer: "Horse priest"
                },
                {
                    answer: "Very poisonous herb used in Middle East"
                }
            ],
            //holds index of selected answer
            selected: null,
            //correct answer
            correct: null
        },
        {
            type: "text",
            text: "Which ruler was known of his foundness in obese women?",
            possibilities: [
                {
                    answer: "Ferdinand I of Austria"
                },
                {
                    answer: "Caligula"
                },
                {
                    answer: "Ibrahim I of Ottoman Empire"
                },
                {
                    answer: "Catherine the Great, Empress of Russia"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of below cities was briefly known as Colonia Lucia Annia Commodiana?",
            possibilities: [
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/8/8a/The_Cathedral_and_the_Leaning_Tower_in_Pisa.jpg"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/d/d3/View_from_Palatine_Hill_2011_6.jpg"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/5/5f/%CE%97_%CE%91%CE%BA%CF%81%CF%8C%CF%80%CE%BF%CE%BB%CE%B7_%CE%B1%CF%80%CF%8C_%CF%84%CE%B7%CE%BD_%CE%A0%CE%BD%CF%8D%CE%BA%CE%B1.jpg"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/6/60/London-TowerBridge-1900-Closed.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which ruler couldn't resist Knödels(dumplings)?",
            possibilities: [
                {
                    answer: "Charles VI the Beloved, King of France"
                },
                {
                    answer: "Ferdinand I of Austria"
                },
                {
                    answer: "Gottfried von Hohenlohe, Hochmeister of Teutonic Order"
                },
                {
                    answer: "Commodus"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which ruler didn't die of natural cause?",
            possibilities: [
                {
                    answer: "Qin Shi Huang, Emperor of China"
                },
                {
                    answer: "Caligula"
                },
                {
                    answer: "Tsar Nicholas II of Russia"
                },
                {
                    answer: "All of them"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "'The First Emperor will die and his land will be divided'. These words were scribed on the meteor which strucked earth at the end of 3rd century BC and concerned",
            possibilities: [
                {
                    answer: "Commodus of Roman Empire"
                },
                {
                    answer: "Montezuma I of Aztec Empire"
                },
                {
                    answer: "Ibrahim I of Ottoman Empire"
                },
                {
                    answer: "Qin Shi Huang of China Empire"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Lydia was an ancient kingdom located in western Asia Minor. It's capital city was Sardis. Which ruler thought he was made of glass?",
            possibilities: [
                {
                    answer: "Ferdinand I of Austria"
                },
                {
                    answer: "Charles VI the Beloved"
                },
                {
                    answer: "Caligula"
                },
                {
                    answer: "Louis XV of France"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var quizData = [
        {
            name: "Caligula",
            thumb: "https://upload.wikimedia.org/wikipedia/commons/3/35/Gaius_Caesar_Caligula.jpg",
            title: "Emperor of the Roman Empire",
            lived: "31 August AD 12 – 24 January AD 41",
            reign: "18 March AD 37 – 24 January AD 41",
            died: "Assassinated by officers of the Praetorian Guard",
            description: "Philo of Alexandria and Seneca the Younger describe Caligula as an insane emperor who was self-absorbed, angry, killed on a whim, and indulged in too much spending and sex. He is accused of sleeping with other men's wives and bragging about it, killing for mere amusement, deliberately wasting money on his bridge, causing starvation, and wanting a statue of himself erected in the Temple of Jerusalem for his worship. Once, at some games at which he was presiding, he ordered his guards to throw an entire section of the audience into the arena during the intermission to be eaten by the wild beasts because there were no prisoners to be used and he was bored. While repeating the earlier stories, the later sources of Suetonius and Cassius Dio provide additional tales of insanity. They accuse Caligula of incest with his sisters, Agrippina the Younger, Drusilla, and Livilla, and say he prostituted them to other men. They state he sent troops on illogical military exercises, turned the palace into a brothel, and, most famously, planned or promised to make his horse, Incitatus, a consul, and actually appointed him a priest. Caligula's actions as emperor were described as being especially harsh to the senate, to the nobility and to the equestrian order. According to Josephus, these actions led to several failed conspiracies against Caligula. Eventually, officers within the Praetorian Guard led by Cassius Chaerea succeeded in murdering the emperor."
        },
        {
            name: "Commodus",
            thumb: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Commodus_Musei_Capitolini_MC1120.jpg",
            title: "Emperor of the Roman Empire",
            lived: "31 August 161 AD– 31 December 192 AD",
            reign: "177 – 31 December 192",
            died: "Strangled during his bath",
            description: "Commodus had always laid stress on his unique status as a source of god-like power. Innumerable statues around the empire were set up portraying him in the guise of Hercules, reinforcing the image of him as a demigod, a physical giant, a protector and a battler against beasts and men. Moreover, as Hercules, he could claim to be the son of Jupiter, the representative of the supreme god of the Roman pantheon. Early in 192 after city of Rome was extensively damaged by a fire that raged for several days, Commodus declaring himself the new Romulus, ritually re-founded Rome, renaming the city Colonia Lucia Annia Commodiana. All the months of the year were renamed to correspond exactly with his (now twelve) names: Lucius, Aelius, Aurelius, Commodus, Augustus, Herculeus, Romanus, Exsuperatorius, Amazonius, Invictus, Felix, Pius. The legions were renamed Commodianae, the fleet which imported grain from Africa was termed Alexandria Commodiana Togata, the Senate was entitled the Commodian Fortunate Senate, his palace and the Roman people themselves were all given the name Commodianus. On 31 December his mistress Marcia, poisoned his food but he vomited up the poison. Conspirators then sent his wrestling partner Narcissus to strangle him in his bath."
        },
        {
            name: "Charles VI the Beloved",
            thumb: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Charles_VI_de_France_-_Dialogues_de_Pierre_Salmon_-_Bib_de_Gen%C3%A8ve_MsFr165f4.jpg",
            title: "King of France",
            lived: "3 December 1368 – 21 October 1422",
            reign: "16 September 1380 – 21 October 1422",
            died: "Of natural causes",
            description: "In 1388 Charles VI dismissed his uncles and brought back to power his father's former advisers, known as the Marmousets. Political and economic conditions in the kingdom improved significantly, and Charles earned the epithet 'the Beloved'. But in August 1392 en route to Brittany with his army in the forest of Le Mans, Charles suddenly went mad and slew four knights and almost killed his brother, Louis of Orléans. From then on, Charles' bouts of insanity became more frequent and of longer duration. During these attacks, he had delusions, believing he was made of glass what caused him to protect himself in various ways so that he would not break. He reportedly had iron rods sewn in his clothes, so that he would not shatter if he came into contact with another person. He could also attack servants or run until exhaustion, wailing that he was threatened by his enemies. Mental illness may have been passed on for several generations through his mother, Joanna of Bourbon. Although still called by his subjects Charles the Beloved, he became known also as Charles the Mad from then on."
        },
        {
            name: "Ibrahim I",
            thumb: "https://upload.wikimedia.org/wikipedia/commons/1/13/Ibrahim_I.jpg",
            title: "Ottoman Sultan",
            lived: "5 November 1615 – 18 August 1648",
            reign: "9 February 1640 – 8 August 1648",
            died: "Executed after a revolt",
            description: "Ibrahim was often distracted by recurring headaches and attacks of physical weakness, perhaps caused by the trauma of his early years. Since he was the only surviving male member of the Ottoman dynasty, Ibrahim was encouraged by his mother Kösem Sultan to distract himself with harem girls. Ibrahim brought the empire almost to collapse in a very short space of time. He is known to have had an obsession with obese women, urging his agents to find the fattest woman possible. A candidate was tracked down in Georgia, or Armenia, who weighed over 330 pounds, and was given the pet name Sheker Pare (literally, “piece of sugar”). Ibrahim was so pleased with her that he gave her a government pension, and the title of Governor General of Damascus. When he heard a rumor that his concubines were compromised by another man, he had 280 members of his harem drowned in the Bosporus Sea."
        },
        {
            name: "Ferdinand I of Austria",
            thumb: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Ferdinand_I%3B_Keizer_van_Oostenrijk.jpg",
            title: "Emperor of Austria, King of Hungary, Bohemia, Dalmatia, and Croatia",
            lived: "19 April 1793 – 29 June 1875",
            reign: "2 March 1835 – 2 December 1848",
            died: "Of natural causes",
            description: "Possibly as a result of his parents' genetic closeness (they were double first cousins), Ferdinand suffered from epilepsy, hydrocephalus, neurological problems, and a speech impediment. Ferdinand has been depicted as feeble-minded and incapable of ruling, but although he had epilepsy, he kept a coherent and legible diary and has even been said to have had a sharp wit, but having as many as twenty seizures per day severely restricted his ability to rule with any effectiveness. When Ferdinand married Princess Maria Anna of Savoy, the court physician considered it unlikely that he would be able to consummate the marriage. When he tried to consummate the marriage, he had five seizures. He is best remembered for his command to his cook: when told he could not have apricot dumplings (Marillenknödel) because apricots were out of season, he said 'I am the Emperor, and I want dumplings!' - (Ich bin der Kaiser und ich will Knödel!)"
        },
        {
            name: "Qin Shi Huang",
            thumb: "https://upload.wikimedia.org/wikipedia/commons/2/27/Qinshihuang.jpg",
            title: "Emperor of China",
            lived: "18 February 259 BC – 10 September 210 BC",
            reign: "220 BC – 10 September 210 BC",
            died: "Of alchemical elixir poisoning",
            description: "Known for being terrified of being assassinated (he survived three attempts) he never slept in the same place twice. Qin Shi Huang feared death and desperately sought the fabled elixir of life, which would supposedly allow him to live forever. He was obsessed with acquiring immortality and fell prey to many who offered him supposed elixirs. In one case he sent Xu Fu, a Zhifu islander, with ships carrying hundreds of young men and women in search of the mystical Penglai mountain. They were sent to find Anqi Sheng, a 1,000-year-old magician whom Qin Shi Huang had supposedly met in his travels and who had invited him to seek him there. These people never returned, perhaps because they knew that if they returned without the promised elixir, they would surely be executed. In 211 BC a large meteor is said to have fallen in Dōngjùn in the lower reaches of the Yellow River. On it, an unknown person inscribed the words 'The First Emperor will die and his land will be divided'. When the emperor heard of this, he sent an imperial secretary to investigate this prophecy. No one would confess to the deed, so all the people living nearby were put to death. The stone was then burned and pulverized. Qin Shi Huang was said to have died by drinking mercury, believing it to be an elixir of immortality."
        }
    ];

})();
