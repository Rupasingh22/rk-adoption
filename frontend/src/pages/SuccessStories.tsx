import { useState } from 'react';
import {
  Heart, Sparkles, ShieldCheck, ChevronRight, ArrowRight,
  Compass, PhoneCall, ChevronDown, Quote, Play, Star,
  Globe, Users, Award, BookOpen, TrendingUp, Milestone,
  CheckCircle2, HeartHandshake, MapPin,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Story {
  id: string;
  category: 'infant' | 'older-youth' | 'siblings' | 'intercountry' | 'foster' | 'special-needs';
  categoryLabel: string;
  title: string;
  subtitle: string;
  family: string;
  childInfo: string;
  placementYear: string;
  country?: string;
  quote: string;
  highlight: string;
  challenge: string;
  turningPoint: string;
  todayReflection: string;
  image: string;
  accentColor: string;
  accentBg: string;
  tags: string[];
}

interface Milestone {
  year: string;
  count: string;
  label: string;
  icon: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const STORIES: Story[] = [
  {
    id: 'harrison-brothers',
    category: 'siblings',
    categoryLabel: 'Sibling Group Preservation',
    title: 'Three Brothers, One Unbreakable Roof',
    subtitle: 'When the child welfare system moved to separate three biological brothers across different foster homes, Mark and Sarah Harrison refused — and changed all three lives forever.',
    family: 'Mark & Sarah Harrison',
    childInfo: 'Leo (9), Julian (7), and Mateo (4)',
    placementYear: 'Finalized 2022',
    quote: 'The social worker told us the boys were hard to place together. We said: you find us three beds and we\'ll find the love. Brotherhood is not negotiable.',
    highlight: 'Over 92% of sibling groups matched at RK-Adoption remain united under one family roof — the highest retention rate in the sector.',
    challenge: 'Nine-year-old Leo had become a parentified child after years of instability. He could not sleep without checking every door lock three times and regularly refused meals until his younger brothers had eaten. He had never been allowed to simply be a child.',
    turningPoint: 'Each night, Mark physically received the house keys from Leo\'s hands, handed him a cup of warm cocoa, and said clearly: "I am the father here, Leo. Your only job tonight is to sleep." Within eight weeks, Leo stopped checking locks. Within three months, he laughed without looking over his shoulder.',
    todayReflection: 'Leo is on his middle school soccer team and recently received a merit award for leadership. Julian reads two grades above his level and runs a small library exchange with his classmates. Mateo — now five — draws elaborate crayon portraits of "my whole family" and hangs them on the refrigerator. They still wrestle in the backyard every Saturday morning.',
    image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#2D5A4E',
    accentBg: '#EDF4F1',
    tags: ['Sibling Preservation', 'TBRI', 'Domestic Foster Care'],
  },
  {
    id: 'claire-maya',
    category: 'infant',
    categoryLabel: 'Open Domestic Infant Adoption',
    title: 'A Bridge of Grace: Two Mothers, One Child',
    subtitle: 'Claire Sterling chose single motherhood through open adoption. Birth mother Danielle chose courage. Together they created a co-parenting of love that researchers say will define Maya\'s identity for life.',
    family: 'Claire Sterling (Single Mother by Choice)',
    childInfo: 'Maya (Placed at birth, now 5 years old)',
    placementYear: 'Finalized 2020',
    quote: 'People warned me open adoption would be confusing or intrusive. Instead, Danielle is Maya\'s fiercest cheerleader. Maya grows up knowing she was loved twice over — and that neither love cancels the other.',
    highlight: 'Children in open adoptions demonstrate measurably higher self-esteem, reduced identity confusion, and stronger attachment security than closed-adoption cohorts.',
    challenge: 'The hospital room where Danielle placed Maya in Claire\'s arms was the hardest moment either woman had ever lived. Claire was terrified of needing more than Danielle could give. Danielle was afraid of vanishing entirely. The boundary conversation happened in tears, whispers, and carefully chosen words.',
    turningPoint: 'Danielle placed Maya in Claire\'s arms and said: "I am trusting you with my whole heart." Claire looked her in the eyes and responded: "Maya will always know your name, your face, and your courage. That is my promise." They hugged for a long time. Something changed between them that afternoon — they stopped being strangers and became family.',
    todayReflection: 'Danielle visits twice a year for Maya\'s birthday and at winter holidays. She sends illustrated cards every month. Maya proudly displays framed photographs of both her mothers side by side on her bedroom dresser. When Maya was four, she told her nursery teacher: "I have two moms. One grew me and one raises me. That\'s how some kids work." Her teacher said it was the most confident and thoughtful answer she had ever heard from a four-year-old.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#B38114',
    accentBg: '#FAF5E8',
    tags: ['Open Adoption', 'Domestic Infant', 'Birth Parent Partnership'],
  },
  {
    id: 'liang-mateo',
    category: 'intercountry',
    categoryLabel: 'Intercountry & Heritage Preservation',
    title: 'Roots Across Two Continents',
    subtitle: 'David and Kevin Liang adopted Mateo at age five from Bogotá, Colombia. Their commitment to preserving his Colombian identity, language, and culture rewrote what intercountry adoption can look like.',
    family: 'David & Kevin Liang',
    childInfo: 'Mateo (Adopted at age 5 from Bogotá, Colombia)',
    country: 'Colombia → United States',
    placementYear: 'Finalized 2021',
    quote: 'Adopting transracially and internationally meant we had to change our lives — not expect Mateo to erase his past to fit into ours. His Colombianness is not a chapter; it is the whole book.',
    highlight: 'Heritage preservation and native language maintenance correlate directly with stronger long-term identity cohesion in internationally adopted children.',
    challenge: 'Mateo arrived speaking only Spanish and experienced severe sensory grief during his first North American winter. He grieved his foster family in Bogotá, the smell of arepas, the sound of Spanish on the street, and the particular quality of Colombian light. David and Kevin had not anticipated how profound his grief for his country would be.',
    turningPoint: 'David and Kevin enrolled in a full Spanish immersion programme. They hired a native Colombian nanny-tutor who cooked authentic lunches and sang Colombian lullabies. Their kitchen became a sanctuary of Latin music, sancocho, and plantains. When Mateo heard Kevin attempt a full sentence in Spanish for the first time, he laughed — properly laughed — for the first time since arriving home.',
    todayReflection: 'Mateo is now fully bilingual and takes pride in his dual Colombian-American identity. The family returns to Bogotá every summer, where Mateo visits his former foster family, explores his birth neighbourhood, and eats at the same street food stall his foster mother loved. His school essay on "My Two Homelands" won a regional writing prize at age nine.',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#185265',
    accentBg: '#EBF4F7',
    tags: ['Hague Convention', 'Bilingual Identity', 'Colombia Programme'],
  },
  {
    id: 'marcus-terrence',
    category: 'older-youth',
    categoryLabel: 'Older Youth Foster Adoption',
    title: 'Never Too Late for a Father',
    subtitle: 'When fifteen-year-old Terrence was weeks away from aging out of the foster system, Marcus Vance — a single man who had never planned to be a parent — answered the call.',
    family: 'Marcus Vance (Single Adoptive Father)',
    childInfo: 'Terrence (Adopted at age 15, now 19 — college sophomore)',
    placementYear: 'Finalized 2021',
    quote: 'Everyone assumes teenagers don\'t want parents anymore. Terrence wanted someone to teach him to drive, cheer at his track meets, and sit across a Thanksgiving table from him. He just didn\'t believe he\'d ever get it.',
    highlight: 'More than 20,000 youth age out of foster care annually with no permanent family. The lifelong outcomes — homelessness, incarceration, income poverty — are devastating and preventable.',
    challenge: 'Terrence had lived in six group homes across four years and had developed an armour of quiet scepticism. He expected Marcus to give up. When small things went wrong — a bad grade, a curfew missed — he braced for packing boxes and a van pulling up. The waiting for abandonment was its own constant trauma.',
    turningPoint: 'After a school altercation sent Terrence home early, he sat at the kitchen table preparing internally to be moved again. Marcus sat down beside him — not across from him — opened a bowl of cereal, and said quietly: "You can make mistakes here, Terrence. We fix problems together. I am not going anywhere." That sentence was the most radical act of parenting Marcus ever performed.',
    todayReflection: 'Terrence is a sophomore studying civil engineering on a merit scholarship. His dorm room wall holds two things above his desk: a framed copy of his official Adoption Decree, and a photograph of Marcus at his high school graduation track meet, mid-sprint across the finish line, both arms raised. Marcus is in the grandstand, standing, clapping, wearing Terrence\'s school colours.',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#3D1A2C',
    accentBg: '#FAF3F7',
    tags: ['Older Youth', 'Single Parent', 'Foster-to-Adopt'],
  },
  {
    id: 'okafor-twins',
    category: 'special-needs',
    categoryLabel: 'Medical Complex & Special Needs',
    title: 'Twice the Miracle: The Okafor Twins',
    subtitle: 'When Ada and James Okafor adopted twins born premature with complex cardiac needs, their journey into advocacy, medical coordination, and unconditional love became extraordinary.',
    family: 'Ada & James Okafor',
    childInfo: 'Zoe & Nathan (Adopted at 18 months, now 7 years old)',
    placementYear: 'Finalized 2019',
    quote: 'Every specialist said one would not survive the first year. Both did. Medicine gives statistics. Parents give love. Love is not a statistic.',
    highlight: 'Children with complex medical needs adopted before age two demonstrate significantly stronger developmental outcomes when paired with educated, supported adoptive families.',
    challenge: 'Zoe and Nathan each required cardiac surgeries in their first twelve months. Ada and James spent eleven months effectively living at the hospital, learning to read ECG monitors, coordinate with five medical specialists, advocate in ICU waiting rooms, and still sing lullabies at midnight through isolation glass.',
    turningPoint: 'The morning Nathan was cleared from cardiac intensive care after his third surgery — on a Tuesday in March — Ada walked outside to the hospital parking lot and sat on the kerb and wept for forty-five minutes. Not from grief, but from the absolute certainty that she would do every single second of it again without hesitation. She came back inside, picked up Zoe, and sang her to sleep.',
    todayReflection: 'Zoe and Nathan are seven years old. Both attend mainstream school with support plans. Zoe has developed a passion for drawing anatomical hearts — each one labelled with love. Nathan is obsessed with space and has memorised every planet\'s orbital period. James built them a telescope platform in the back garden. Ada now volunteers as a hospital parent advocate, helping newly adoptive families navigate complex medical placements with the same clarity no one gave her.',
    image: 'https://images.unsplash.com/photo-1474377207190-a7d8b3334068?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#BC4F32',
    accentBg: '#FDF5F1',
    tags: ['Medical Complex', 'Special Needs', 'Twin Placement'],
  },
  {
    id: 'priya-ananya',
    category: 'intercountry',
    categoryLabel: 'South Asia Heritage Adoption',
    title: 'A Daughter From Jaipur',
    subtitle: 'Priya and Derek Williams spent three years navigating India\'s CARA framework to bring home Ananya. Their story is one of bureaucratic endurance, cultural humility, and profound reward.',
    family: 'Priya & Derek Williams',
    childInfo: 'Ananya (Adopted at age 3 from Jaipur, Rajasthan)',
    country: 'India → United Kingdom',
    placementYear: 'Finalized 2022',
    quote: 'Three years of paperwork, two rejected visa applications, one restarted dossier. Every single form was worth it. The morning Ananya held my hand at Heathrow arrivals, all of it became irrelevant.',
    highlight: 'RK-Adoption\'s India CARA corridor has a 100% approval rate for completed dossiers — achieved through meticulous pre-submission legal review.',
    challenge: 'Two visa applications were rejected due to documentation inconsistencies in India\'s CARA system — errors outside the family\'s control. They were told to restart. Priya sat in her car and screamed for exactly two minutes. Then she called their RK-Adoption caseworker, who had a corrective dossier strategy within forty-eight hours.',
    turningPoint: 'When Ananya finally arrived at Heathrow after a fifteen-hour journey, she was three years old and had never been outside Rajasthan. She looked at the vast airport, then looked up at Priya, and reached up and took her hand without being asked. Just took it. Priya has not let go since.',
    todayReflection: 'Ananya is five and speaks English with a delightful melodic accent that retains traces of Hindi. The family cooks Rajasthani food every Sunday, observes Diwali with lanterns and sweets, and watches Hindi films together. Priya has become a fierce advocate for prospective India adoptive parents, running a monthly advice forum with four hundred active members.',
    image: 'https://images.unsplash.com/photo-1593100126453-19b562a800c1?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#C59A3F',
    accentBg: '#FAF4E5',
    tags: ['CARA India', 'Heritage Preservation', 'Intercountry'],
  },
  {
    id: 'rachel-foster',
    category: 'foster',
    categoryLabel: 'Foster-to-Adoption: Domestic',
    title: 'The Courthouse Gavel That Sealed a Promise',
    subtitle: 'Rachel had fostered Marcus for two years when he asked her a question that changed everything: "If you adopt me, can you ever un-adopt me?" Her answer is now framed on his wall.',
    family: 'Rachel M. (Foster-to-Adopt)',
    childInfo: 'Marcus (Adopted at age 7, now 12 years old)',
    placementYear: 'Finalized 2021',
    quote: 'The judge\'s gavel didn\'t create our family. It simply confirmed what was already completely and irrevocably true.',
    highlight: 'Foster-to-adopt transitions demonstrate the highest long-term stability rates among all domestic adoption pathways, with 97.3% of placements remaining permanent.',
    challenge: 'Marcus had lived in provisional foster care with Rachel for twenty-six months. Provisional placement means everything can be taken away. Marcus coped by never fully committing — keeping emotional distance, referring to Rachel\'s home as "the house" rather than home, and sleeping with his small backpack packed and near the door.',
    turningPoint: 'On the morning of the finalization hearing, Marcus wore a miniature navy blue bowtie that he had chosen himself. When the judge struck the gavel and announced Marcus was "now and forever a legal child and heir of this household," Marcus turned to Rachel in the courtroom and whispered: "Does this mean you can\'t ever un-adopt me?" Rachel held his face in her hands and said: "Never, ever, in a million lifetimes." Marcus smiled — really smiled — for the first time in two years.',
    todayReflection: 'Marcus is twelve and thriving academically. He recently won his school\'s science fair with a project on attachment neuroscience — because, he explained to the judging panel, he wanted to understand why love feels different when it is permanent. His backpack no longer sits packed by the door. It hangs on a hook he chose himself in his very own room.',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#2B111E',
    accentBg: '#FAF3F7',
    tags: ['Foster-to-Adopt', 'Finalization', 'Long-term Placement'],
  },
  {
    id: 'chen-sophie',
    category: 'infant',
    categoryLabel: 'Embryo Adoption & Birth Story',
    title: 'The Scientific Miracle and the Chosen Child',
    subtitle: 'Through embryo adoption, Maria and James Chen experienced both the joy of pregnancy and the profound identity of adoptive parenthood — creating a narrative of origin that is entirely their own.',
    family: 'Maria & James Chen',
    childInfo: 'Sophie (Born through embryo adoption, now 3 years old)',
    placementYear: 'Embryo transferred 2021, born 2022',
    quote: 'I carried Sophie for nine months and I am not her biological parent. That is not a paradox. It is a love story that does not need to look like anything else.',
    highlight: 'Embryo adoption is one of the most ethically transparent pathways, with full disclosure standards and complete medical history continuity.',
    challenge: 'Maria struggled with how to narrate Sophie\'s story honestly — without medical jargon too cold, without simplification too thin. She wanted Sophie to grow up with language for her origin that was true, dignified, and filled with love from the very first word.',
    turningPoint: 'Their RK-Adoption genetic counsellor helped Maria write Sophie\'s "origin story" — a children\'s book format that explained embryo adoption in language a child could receive at each developmental stage. Maria read it to Sophie for the first time on her second birthday. Sophie listened with great seriousness, then asked: "So I grew inside you?" "Yes," said Maria. "And I was chosen?" "From the very beginning," said Maria.',
    todayReflection: 'Sophie is three, luminously healthy, and has a vocabulary that astonishes her paediatrician. The Chens have connected with other embryo adoptive families and now co-host a quarterly gathering called "The Chosen" — a community of children who are celebrated for the extraordinary, specific love that brought them into their families.',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1000&q=80',
    accentColor: '#185265',
    accentBg: '#EBF4F7',
    tags: ['Embryo Adoption', 'Domestic Infant', 'Origin Narrative'],
  },
];

const IMPACT_MILESTONES: Milestone[] = [
  { year: '2011', count: '1st', label: 'Pioneer domestic open adoption programme launched', icon: '🌱' },
  { year: '2014', count: '500', label: 'Children placed in permanent families', icon: '🏠' },
  { year: '2017', count: '2,400', label: 'Cumulative placements · Intercountry expansion', icon: '🌍' },
  { year: '2019', count: '6,000', label: 'Hague Certification renewed · 28 countries', icon: '🏛️' },
  { year: '2021', count: '9,800', label: 'Children placed · Post-pandemic surge', icon: '🤝' },
  { year: '2024', count: '12,400+', label: 'Children in permanent, loving families', icon: '💛' },
];

const REFLECTIONS = [
  {
    title: 'The First 72 Hours at Home',
    author: 'Elena S. · Adoptive Mother',
    theme: 'Somatic silence & the hidden trauma of "good behaviour"',
    headline: '"We expected tears. We received silence."',
    body: 'When our daughter arrived home from foster care, she did not cry or throw tantrums. She was eerily polite, asking permission to drink water and folding her socks into perfect rectangles. It was not good behaviour — it was survival camouflage. We had to un-train ourselves from rewarding her quietness. It took four months before she felt safe enough to throw her first real toddler tantrum. That tantrum was our greatest parenting victory: it meant she finally believed we would not abandon her when she had enormous, messy feelings.',
    credit: '— Elena S. · Placed at Age 3 · Finalized 2021',
  },
  {
    title: 'Navigating Open Adoption Over Time',
    author: 'Jonathan & Brian · Adoptive Fathers',
    theme: 'From fear of birth family contact to mutual celebration',
    headline: '"Danielle was never our rival. She was our daughter\'s mother."',
    body: 'In pre-adoption education classes, we were afraid open adoption would create confusion. Who would our daughter call "dad"? But love does not divide — it multiplies. When our daughter looks in a mirror, she sees her birth mother\'s eyes. Because we honour Danielle openly, our daughter never carries shame or secrecy. She knows the full story of how she arrived. She describes it to friends as simply: "I have my dads and I have Danielle." The confidence in that sentence is everything.',
    credit: '— Jonathan & Brian · Domestic Infant Open Adoption · 2020',
  },
  {
    title: '"Is He Your Real Child?"',
    author: 'Priya & Derek · Transracial Adoptive Parents',
    theme: 'Protecting your child\'s narrative from public intrusion',
    headline: '"Your child\'s story does not belong to strangers\' curiosity."',
    body: 'In grocery stores and playgrounds, people asked "Where did you get him?" or "Is he your real son?" Early on, we stumbled trying to answer. Our RK-Adoption caseworker taught us the W.I.S.E. Owl framework: "He is our son, and our family is completely blessed." Full stop. No performance of trauma for public consumption. Your child is listening to every word you say — including which words you allow others to use about them. We chose dignity every time, from the very first question.',
    credit: '— Priya & Derek · Transracial Foster Adoption · 2022',
  },
  {
    title: 'The Weight of Permanence',
    author: 'Rachel M. · Foster-to-Adopt Parent',
    theme: 'The emotional architecture of finalization day',
    headline: '"The gavel sealed what love had already built."',
    body: 'When we entered the courthouse, Marcus wore a navy bowtie he had chosen himself. When the judge struck the gavel and declared Marcus "now and forever a legal child and heir of this household," my son turned and whispered: "Can you ever un-adopt me?" I held his face in my hands and said: "Never, ever, in a million lifetimes." What I didn\'t say — what I couldn\'t articulate then — is that the legal ceremony was simply the world catching up to something that had already happened in our kitchen table conversations, in bedtime prayers, in Sunday morning pancakes. Permanence isn\'t a decree. It is a daily practice.',
    credit: '— Rachel M. · Finalization Ceremony in Family Court · 2021',
  },
  {
    title: 'Teaching Your Child Their Own Culture',
    author: 'David & Kevin Liang · Intercountry Adoptive Fathers',
    theme: 'Radical cultural humility in transracial, intercountry adoption',
    headline: '"We had to become different people to be his real parents."',
    body: 'Before Mateo arrived, we read every book on Colombian culture. None of it prepared us for the feeling of a five-year-old grieving his homeland with his whole body. He missed the smell of the street outside his foster family\'s window. He missed the particular Latin pop song that played from the apartment below. We had to stop being observers of Colombian culture and start becoming practitioners of it. We learned Spanish. We cooked Colombian recipes until we got them right. We flew back to Bogotá before he had even been home a full year, so he knew his past was honoured and not erased.',
    credit: '— David & Kevin Liang · Colombia Intercountry Adoption · 2021',
  },
];

const ADOPTEE_VOICES = [
  {
    name: 'Aisha O. · Adult Adoptee, Age 28',
    country: 'Ethiopia → Sweden, Adopted at 4',
    quote: 'I never remember a dramatic "reveal" that I was adopted. My parents spoke of it with love before I could understand words. By the time I understood language, adoption was simply the name of how I had come home. There was no earthquake, because they\'d built no wall.',
    principle: 'Radical Transparency from Day One',
    emoji: '🌿',
  },
  {
    name: 'Carlos M. · Adult Adoptee, Age 31',
    country: 'Domestic Open Adoption · USA',
    quote: 'My adoptive parents helped me search for my biological family at twenty. They drove me to the meeting and waited outside with coffee. Their confidence in our relationship — that it could withstand the expansion of my love — was the most profound gift. They were never threatened by my need to know. They knew who they were to me.',
    principle: 'Confident, Unthreatened Identity',
    emoji: '🦋',
  },
  {
    name: 'Mei-Lin F. · Adult Adoptee, Age 25',
    country: 'China → Australia, Adopted at 2',
    quote: 'Being transracially adopted is lonely if your environment doesn\'t reflect you. My parents moved suburbs before my primary school years so I had Chinese-Australian teachers, mentors, and community members who looked like me. They understood that mirroring was not optional. It was protective.',
    principle: 'Active Cultural & Racial Mirroring',
    emoji: '🪞',
  },
  {
    name: 'James T. · Adult Adoptee, Age 33',
    country: 'Domestic Foster Adoption · UK',
    quote: 'They never expected me to be constantly grateful. That expectation — which many adoptees experience — is a subtle form of emotional debt that crushes identity. My parents allowed me to be sad about what I had lost without treating my grief as a betrayal of their parenting. They could hold both truths simultaneously: that I was loved by them, and that I had also lost something real.',
    principle: 'Permission to Grieve Without Shame',
    emoji: '🕊️',
  },
  {
    name: 'Sophia R. · Adult Adoptee, Age 29',
    country: 'Colombia → USA, Adopted at 6',
    quote: 'Language was my anchor. My parents insisted on Spanish tutors and Spanish-language media. When I visit Colombia today, I can speak to my birth relatives. That connection — made possible only because my parents protected my language — has healed something in me I did not even know was broken.',
    principle: 'Protecting Native Language as Identity',
    emoji: '🗺️',
  },
];

const FAQS = [
  {
    q: 'What does "success" actually mean to RK-Adoption?',
    a: 'We define success not by the signing of a finalization decree, but by measurable, long-term family stability. Success is a child who demonstrates secure attachment patterns, parents equipped with trauma-informed tools, and a family unit that can navigate both joy and difficulty together across decades. We track our families through comprehensive five-year, ten-year, and twenty-year post-placement reviews.',
  },
  {
    q: 'How does RK-Adoption support families when serious emotional challenges arise post-placement?',
    a: 'We provide lifetime post-adoption services at no additional cost to enrolled families. This includes clinical therapy referrals through our certified partner network, crisis de-escalation coaching with on-call caseworkers, respite care coordination, school IEP and EHCP advocacy, and monthly parent peer-circles. We do not walk away after the decree is signed. That is a formal promise in our Family Covenant.',
  },
  {
    q: 'Are the stories on this page from real families?',
    a: 'These narratives are composite educational syntheses based on the authentic experiences of real adoptive families who have consented to share anonymized elements of their journeys. Identifying names, specific locations, and case details are modified in strict accordance with international minor privacy law and our own Child Safeguarding & Dignity Standard. We believe real experiences — told with dignity and privacy — are more powerful than invented ones.',
  },
  {
    q: 'Can families experiencing adoption disruption or dissolution contact RK-Adoption?',
    a: 'Absolutely and without judgement. Adoption disruption — when a placement ends before finalization — and dissolution — when a finalized adoption faces irreconcilable crisis — are painful realities in a small percentage of cases. We provide non-judgemental crisis intervention, therapeutic bridge services, and case re-evaluation. Our only priority is the child\'s welfare and the family\'s stability.',
  },
  {
    q: 'Can older children — teenagers — truly form deep, lasting attachments with new families?',
    a: 'Yes, without qualification. Decades of attachment neuroscience research, including the foundational work of Dr. Karyn Purvis on Trust-Based Relational Intervention (TBRI®), demonstrates that neuroplasticity enables older children and teenagers to form profoundly bonded, transformative attachments. The timeline is longer. The parenting requires more deliberate intentionality. The outcome — when supported with skilled clinical guidance — is equally as transformative as infant adoption. Terrence, Marcus, and thousands of others are the evidence.',
  },
  {
    q: 'What post-adoption education resources does RK-Adoption provide?',
    a: 'Enrolled families receive lifetime access to our Post-Adoption Academy: over 300 hours of video curriculum covering developmental trauma, TBRI®, school advocacy, transracial parenting, open adoption management, identity development, and teen adoptee psychology. We also host quarterly clinical workshops, annual alumni conferences, and online parent peer-groups organized by placement type and geography.',
  },
  {
    q: 'How is intercountry adoption different from domestic adoption emotionally?',
    a: 'Intercountry adoption introduces unique layers of complexity including cultural grief, language transition, racial identity in a new country, and the long-term management of heritage. Children adopted internationally are navigating two identities simultaneously: the one they left and the one they are building. Effective intercountry adoptive parenting requires a deep commitment to cultural humility, active heritage preservation, language maintenance, and regular return visits when possible. RK-Adoption\'s intercountry preparation curriculum is significantly more extensive for precisely this reason.',
  },
];

const STATS = [
  { value: '12,400+', label: 'Children in Forever Families', icon: '👨‍👩‍👧‍👦' },
  { value: '99.4%', label: 'Long-term Placement Stability', icon: '🏛️' },
  { value: '92%+', label: 'Sibling Groups Preserved Together', icon: '🤝' },
  { value: '40+', label: 'Countries Served', icon: '🌍' },
  { value: '100%', label: 'Post-Adoption Lifetime Support', icon: '💛' },
  { value: '15 yrs', label: 'Average Family Relationship Duration', icon: '📅' },
];

const PROGRAMME_TYPES = [
  {
    emoji: '👶',
    title: 'Domestic Infant',
    desc: 'Open, semi-open, and closed domestic infant placement with comprehensive birth parent counselling.',
    stat: '4,200+ placements',
    color: '#2D5A4E',
    bg: '#EDF4F1',
  },
  {
    emoji: '👦',
    title: 'Older Youth & Foster',
    desc: 'Specialist support for children aged 6–17, including those in foster care awaiting permanency.',
    stat: '3,800+ placements',
    color: '#3D1A2C',
    bg: '#FAF3F7',
  },
  {
    emoji: '👫',
    title: 'Sibling Groups',
    desc: 'Dedicated sibling preservation matching — we never recommend separating biologically bonded siblings.',
    stat: '1,900+ groups',
    color: '#B38114',
    bg: '#FAF5E8',
  },
  {
    emoji: '🌍',
    title: 'Intercountry',
    desc: 'Hague-compliant international programmes across 40+ countries with in-country representatives.',
    stat: '2,500+ families',
    color: '#185265',
    bg: '#EBF4F7',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function SuccessStories() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedStoryId, setExpandedStoryId] = useState<string>('harrison-brothers');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeReflectionIdx, setActiveReflectionIdx] = useState<number>(0);
  const [activeAdopteeIdx, setActiveAdopteeIdx] = useState<number>(0);

  const filteredStories =
    selectedCategory === 'all'
      ? STORIES
      : STORIES.filter(s => s.category === selectedCategory);

  const expandedStory = STORIES.find(s => s.id === expandedStoryId) || STORIES[0];

  return (
    <div className="rk-stories-root font-sans text-[#1E293B] antialiased bg-[#FAF8F5]">
      {/* ─────────────────────────────────────────────────────────────────────
          PAGE-SCOPED CSS
          Palette: Burnished Burgundy · Champagne Gold · Alabaster Linen · Hearth Pine
      ───────────────────────────────────────────────────────────────────────── */}
      <style>{`
        .rk-stories-root {
          --plum:   #2B111E;
          --plum-m: #3D1A2C;
          --plum-l: #4E2036;
          --gold:   #C9941A;
          --gold-d: #B38114;
          --gold-xl:#FAF5E8;
          --pine:   #2D5A4E;
          --silk:   #EAE4D9;
          --canvas: #FAF8F5;
          --linen:  #F3EFEA;
        }
        .font-display-stories { font-family: 'Cormorant Garamond', Georgia, serif; letter-spacing: -0.02em; }

        /* ── Animated counters ── */
        @keyframes rk-count-in {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rk-count-in { animation: rk-count-in 0.6s ease-out both; }

        /* ── Hero gradient mesh ── */
        .rk-hero-mesh {
          background: radial-gradient(ellipse at 30% 40%, rgba(201,148,26,0.08) 0%, transparent 60%),
                      radial-gradient(ellipse at 80% 80%, rgba(43,17,30,0.04) 0%, transparent 55%),
                      #F3EFEA;
        }

        /* ── Story card ── */
        .rk-story-card {
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          border: 1.5px solid #EAE4D9;
          background: #fff;
        }
        .rk-story-card:hover { box-shadow: 0 20px 48px -8px rgba(43,17,30,0.10); transform: translateY(-4px); border-color: #D4C9BC; }
        .rk-story-card.active { border-color: #C9941A; box-shadow: 0 0 0 3px rgba(201,148,26,0.15); }

        /* ── Buttons ── */
        .rk-btn-plum {
          background: linear-gradient(135deg, #3D1A2C 0%, #2B111E 100%);
          color: #fff; box-shadow: 0 4px 18px rgba(43,17,30,0.30);
          transition: all 0.25s ease;
        }
        .rk-btn-plum:hover { background: linear-gradient(135deg,#4E2036,#351525); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(43,17,30,0.42); }

        .rk-btn-gold {
          background: linear-gradient(135deg, #C9941A 0%, #B38114 100%);
          color: #fff; box-shadow: 0 4px 18px rgba(201,148,26,0.30);
          transition: all 0.25s ease;
        }
        .rk-btn-gold:hover { background: linear-gradient(135deg,#D4A338,#BF8A15); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(201,148,26,0.42); }

        /* ── Parallax-style featured image ── */
        .rk-featured-img { object-position: 50% 30%; }

        /* ── Quote decoration ── */
        .rk-pull-quote::before {
          content: '\u201C';
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 7rem; line-height: 0.7;
          color: rgba(201,148,26,0.18);
          position: absolute; top: -0.5rem; left: -1rem;
          pointer-events: none;
        }

        /* ── Timeline ── */
        .rk-timeline-line { background: linear-gradient(to bottom, #EAE4D9 0%, #C9941A 50%, #EAE4D9 100%); }

        /* ── Dark section glassmorphism ── */
        .rk-glass {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.11);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        /* ── Map ribbon ── */
        .rk-world-bg {
          background:
            radial-gradient(ellipse at 20% 60%, rgba(201,148,26,0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 30%, rgba(45,90,78,0.10) 0%, transparent 50%),
            linear-gradient(180deg, #2B111E 0%, #1A0A14 100%);
        }

        /* ── Section divider wave ── */
        .rk-wave-divider { line-height: 0; }

        /* ── Stat grid hover ── */
        .rk-stat-pill { transition: all 0.2s ease; }
        .rk-stat-pill:hover { transform: scale(1.03); box-shadow: 0 8px 24px rgba(43,17,30,0.10); }

        /* ── Adoptee carousel ── */
        .rk-adoptee-card { transition: all 0.45s cubic-bezier(0.16,1,0.3,1); }

        /* ── Programme card hover ── */
        .rk-prog-card { transition: all 0.25s ease; cursor: default; }
        .rk-prog-card:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(43,17,30,0.09); }

        /* ── Reflection tab ── */
        .rk-ref-tab { transition: all 0.2s ease; }

        /* ── Scroll progress line ── */
        @keyframes rk-line-in { from { width: 0; } to { width: 100%; } }
        .rk-progress-line { animation: rk-line-in 0.8s ease-out both; }
      `}</style>

      {/* ── BREADCRUMB ──────────────────────────────────────────────────────── */}
      <div className="bg-[#F3EFEA] border-b border-[#EAE4D9] py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <a href="/" className="hover:text-[#2B111E] transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
            <span className="text-[#2B111E] font-semibold">Success Stories</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[#64748B]">
            <Heart className="w-3.5 h-3.5 text-[#C9941A] fill-[#C9941A]" />
            <span>12,400+ Children in Permanent Families</span>
          </div>
        </div>
      </div>

      {/* ── PRIVACY NOTICE ──────────────────────────────────────────────────── */}
      <div className="bg-[#FAF5E8] border-b border-[#EBDCC0] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-3 text-xs text-[#5C4516] leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-[#C9941A] shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong className="text-[#2B111E]">Child Safeguarding & Dignity Standard:</strong>{' '}
            These are composite educational narratives based on real family experiences, shared with consent. Identifying names, locations, and case-specific details are anonymized under international minor privacy law.
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 · EDITORIAL HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="rk-hero-mesh relative pt-20 pb-28 border-b border-[#EAE4D9] overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full border border-[#C9941A]/10" />
        <div className="absolute top-0 -right-10 w-[320px] h-[320px] rounded-full border border-[#2B111E]/05" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF3F7] border border-[#2B111E]/20 text-xs font-semibold text-[#3D1A2C]">
                <Sparkles className="w-3.5 h-3.5 text-[#C9941A]" />
                <span>Voices of Belonging · Courage · Permanent Sanctuary</span>
              </div>
              <h1 className="font-display-stories text-5xl sm:text-6xl lg:text-7xl text-[#2B111E] font-normal leading-[1.07]">
                Where Healing<br />Takes Root:{' '}
                <span className="italic text-[#C9941A]">
                  The Journey Home
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light max-w-2xl">
                Adoption is not measured by a single courthouse decree. It is measured by ten thousand quiet, faithful moments — the first peaceful night of sleep without terror, the first birthday celebrated without fear, the quiet realisation that love is not conditional and family is not fragile.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 pt-3 border-t border-[#EAE4D9]">
                {STATS.map(s => (
                  <div key={s.label} className="text-center sm:text-left">
                    <div className="text-xs mb-0.5">{s.icon}</div>
                    <div className="font-display-stories text-xl sm:text-2xl font-bold text-[#2B111E] leading-none">{s.value}</div>
                    <div className="text-[10px] text-[#64748B] mt-0.5 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#featured" className="rk-btn-plum px-8 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2">
                  <span>Read Featured Narratives</span>
                  <ArrowRight className="w-4 h-4 text-[#C9941A]" />
                </a>
                <a href="/process/guide" className="px-6 py-3.5 rounded-xl bg-white border border-[#EAE4D9] text-[#2B111E] hover:bg-[#F3EFEA] font-semibold text-sm flex items-center gap-2 transition-colors shadow-sm">
                  <Compass className="w-4 h-4 text-[#C9941A]" />
                  <span>Begin Your Journey</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=900&q=80"
                  alt="A radiant adoptive family embracing in golden evening light"
                  className="w-full h-[520px] object-cover rk-featured-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B111E]/80 via-[#2B111E]/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#2B111E]/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#C9941A] mb-2">
                    <Quote className="w-3.5 h-3.5 fill-[#C9941A]" />
                    <span>Adoptive Parent Reflection</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed italic font-light">
                    "Love did not arrive in a single lightning bolt. It grew steadily through three thousand bedtime whispers, until our home became their unbreakable fortress."
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#C9941A] flex items-center justify-center shadow-lg">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 · IMPACT STATISTICS RIBBON
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-[#EAE4D9] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {STATS.map((s) => (
              <div key={s.value} className="rk-stat-pill text-center p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4D9]">
                <div className="text-lg mb-1">{s.icon}</div>
                <div className="font-display-stories text-2xl sm:text-3xl font-bold text-[#2B111E]">{s.value}</div>
                <div className="text-[10px] text-[#64748B] leading-tight mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 · FEATURED DEEP-DIVE STORY (Interactive)
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="featured" className="py-24 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C9941A]">
              Editorial Deep-Dive
            </span>
            <h2 className="font-display-stories text-3xl sm:text-4xl lg:text-5xl text-[#2B111E]">
              The Family at the Centre of Every Decision
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed font-light">
              Select any story below to read its full narrative — the challenge, the turning point, and where they are today.
            </p>
          </div>

          {/* Story selector tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {STORIES.map(s => (
              <button
                key={s.id}
                onClick={() => setExpandedStoryId(s.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  expandedStoryId === s.id
                    ? 'bg-[#2B111E] text-white border-[#2B111E] shadow-md'
                    : 'bg-white text-[#475569] border-[#EAE4D9] hover:bg-[#F3EFEA]'
                }`}
              >
                {s.family.split(' ')[0]} — {s.categoryLabel}
              </button>
            ))}
          </div>

          {/* Expanded story */}
          <div className="bg-[#FAF8F5] rounded-3xl border border-[#EAE4D9] overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image column */}
              <div className="lg:col-span-5 relative">
                <img
                  src={expandedStory.image}
                  alt={expandedStory.title}
                  className="w-full h-72 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#2B111E]/70 via-transparent to-transparent" />
                <div className="absolute top-5 left-5">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-bold text-white"
                    style={{ background: expandedStory.accentColor }}
                  >
                    {expandedStory.categoryLabel}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 lg:right-auto p-4 rounded-2xl bg-[#2B111E]/85 backdrop-blur-md text-white">
                  <div className="text-xs font-bold text-[#C9941A]">{expandedStory.family}</div>
                  <div className="text-[11px] text-white/70 mt-0.5">{expandedStory.childInfo} · {expandedStory.placementYear}</div>
                  {expandedStory.country && (
                    <div className="flex items-center gap-1 text-[10px] text-white/50 mt-1">
                      <MapPin className="w-3 h-3" />
                      {expandedStory.country}
                    </div>
                  )}
                </div>
              </div>

              {/* Content column */}
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-7">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#C9941A] uppercase tracking-wider block mb-2">
                    Composite Educational Narrative · Anonymised with Consent
                  </span>
                  <h3 className="font-display-stories text-3xl sm:text-4xl text-[#2B111E] leading-tight">
                    {expandedStory.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed mt-2 font-light">
                    {expandedStory.subtitle}
                  </p>
                </div>

                {/* Pull quote */}
                <div className="relative rk-pull-quote pl-6 py-2">
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: expandedStory.accentColor }} />
                  <p className="text-sm sm:text-base text-[#2B111E] italic font-light leading-relaxed">
                    "{expandedStory.quote}"
                  </p>
                  <span className="block text-[11px] text-[#94A3B8] font-mono mt-2">— {expandedStory.family}</span>
                </div>

                {/* Challenge & Turning Point */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white border border-[#EAE4D9] space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A63A2E]">The Hardest Moment</span>
                    <p className="text-xs text-[#64748B] leading-relaxed">{expandedStory.challenge}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white border space-y-2" style={{ borderColor: expandedStory.accentColor + '40' }}>
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: expandedStory.accentColor }}>The Turning Point</span>
                    <p className="text-xs text-[#475569] leading-relaxed">{expandedStory.turningPoint}</p>
                  </div>
                </div>

                {/* Today */}
                <div className="p-5 rounded-2xl border-t-2 bg-white border border-[#EAE4D9] space-y-2" style={{ borderTopColor: expandedStory.accentColor }}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D5A4E]">Where They Are Today</span>
                  <p className="text-xs text-[#475569] leading-relaxed">{expandedStory.todayReflection}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {expandedStory.tags.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-semibold"
                      style={{ background: expandedStory.accentBg, color: expandedStory.accentColor }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 · PROGRAMME OVERVIEW GRID
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C9941A]">Every Pathway Matters</span>
            <h2 className="font-display-stories text-3xl sm:text-4xl text-[#2B111E] mt-2">
              Stories Across Every Adoption Pathway
            </h2>
            <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
              Each programme represents thousands of individual journeys. Here is where our families come from.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMME_TYPES.map(p => (
              <div
                key={p.title}
                className="rk-prog-card bg-white rounded-3xl border border-[#EAE4D9] p-8 space-y-4 shadow-sm"
              >
                <div className="text-3xl">{p.emoji}</div>
                <div>
                  <h3 className="font-display-stories text-2xl text-[#2B111E]">{p.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed mt-2">{p.desc}</p>
                </div>
                <div
                  className="inline-block px-3 py-1 rounded-lg text-[11px] font-bold"
                  style={{ background: p.bg, color: p.color }}
                >
                  {p.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 5 · GALLERY GRID WITH FILTER
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAE4D9] pb-8">
            <div className="space-y-2">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#C9941A]">All Narratives</span>
              <h2 className="font-display-stories text-3xl sm:text-4xl lg:text-5xl text-[#2B111E]">
                Eight Families. Eight Paths. One Mission.
              </h2>
              <p className="text-sm text-[#64748B] font-light">
                Filter by adoption pathway to find a story that resonates with your own journey.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Stories' },
                { id: 'siblings', label: '👫 Sibling Groups' },
                { id: 'infant', label: '👶 Domestic Infant' },
                { id: 'intercountry', label: '🌍 Intercountry' },
                { id: 'older-youth', label: '👦 Older Youth' },
                { id: 'foster', label: '🏠 Foster-to-Adopt' },
                { id: 'special-needs', label: '💙 Special Needs' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setSelectedCategory(f.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === f.id
                      ? 'bg-[#2B111E] text-white shadow-sm'
                      : 'bg-[#FAF8F5] text-[#475569] border border-[#EAE4D9] hover:bg-[#F3EFEA]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredStories.map(s => (
              <div
                key={s.id}
                onClick={() => {
                  setExpandedStoryId(s.id);
                  document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`rk-story-card rounded-3xl overflow-hidden cursor-pointer flex flex-col ${expandedStoryId === s.id ? 'active' : ''}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B111E]/60 to-transparent" />
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold text-white"
                    style={{ background: s.accentColor }}
                  >
                    {s.categoryLabel}
                  </span>
                  {expandedStoryId === s.id && (
                    <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#C9941A] flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1 space-y-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider" style={{ color: s.accentColor }}>
                      {s.family}
                    </span>
                    <h3 className="font-display-stories text-2xl text-[#2B111E] leading-tight mt-1">{s.title}</h3>
                    <p className="text-xs text-[#64748B] leading-relaxed mt-1.5 line-clamp-3">{s.subtitle}</p>
                  </div>
                  <div className="pt-3 border-t border-[#EAE4D9] mt-auto flex items-center justify-between text-xs">
                    <span className="text-[#B38114] font-semibold">{s.placementYear}</span>
                    <span className="flex items-center gap-1 font-semibold text-[#2B111E] hover:text-[#C9941A] transition-colors">
                      Read Full Narrative <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 6 · FULL-WIDTH FEATURED STORY SPREAD (Harrison Brothers)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80"
              alt="Family walking together"
              className="w-full h-full object-cover min-h-[360px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2B111E]/40" />
          </div>
          <div className="bg-[#2B111E] text-white p-12 sm:p-16 lg:p-20 flex flex-col justify-center space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9941A]">
              Older Youth Spotlight
            </span>
            <h2 className="font-display-stories text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1]">
              20,000 Youth<br />Age Out Every Year.
              <span className="italic text-[#C9941A] block mt-1">Terrence Didn't.</span>
            </h2>
            <div className="rk-glass rounded-2xl p-6 space-y-3">
              <Quote className="w-6 h-6 text-[#C9941A]" />
              <p className="text-sm text-slate-200 italic leading-relaxed font-light">
                "Everyone assumes teenagers don't want parents anymore. Terrence wanted someone to teach him to drive, cheer at his track meets, and welcome him home for Thanksgiving. He just didn't believe he'd ever get it."
              </p>
              <span className="text-xs text-[#C9941A] font-mono">— Marcus Vance · Single Adoptive Father</span>
            </div>
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C9941A] shrink-0 mt-0.5" />
                <span>Terrence was 15 years old — three weeks from aging out of the foster system.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C9941A] shrink-0 mt-0.5" />
                <span>Marcus had never planned to be a parent. He simply refused to let a capable boy become a statistic.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C9941A] shrink-0 mt-0.5" />
                <span>Today Terrence is a civil engineering sophomore on a merit scholarship. His Adoption Decree is framed above his desk.</span>
              </div>
            </div>
            <a href="#featured" className="rk-btn-gold inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold w-fit">
              <span>Read the Full Story</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 7 · PARENT REFLECTIONS (Interactive Tabbed)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#2B111E] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C9941A]">Unvarnished Truths</span>
            <h2 className="font-display-stories text-3xl sm:text-4xl lg:text-5xl text-white">
              What Adoptive Parents Wish They Had Been Told
            </h2>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Five candid first-person reflections from the parenting frontline — the moments books and classes never covered.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tab list */}
            <div className="lg:col-span-4 space-y-2">
              {REFLECTIONS.map((r, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReflectionIdx(idx)}
                  className={`rk-ref-tab w-full text-left p-4 rounded-2xl border ${
                    activeReflectionIdx === idx
                      ? 'rk-glass border-[#C9941A] text-white'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <div className="text-xs font-bold text-white leading-snug">{r.title}</div>
                  <div className="text-[11px] text-[#C9941A] mt-0.5">{r.author}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5 italic">{r.theme}</div>
                </button>
              ))}
            </div>
            {/* Content panel */}
            <div className="lg:col-span-8 rk-glass rounded-3xl p-8 sm:p-12 space-y-6">
              <Quote className="w-9 h-9 text-[#C9941A]" />
              <h3 className="font-display-stories text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                {REFLECTIONS[activeReflectionIdx].headline}
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                {REFLECTIONS[activeReflectionIdx].body}
              </p>
              <div className="pt-3 border-t border-white/10 text-xs text-[#C9941A] font-mono">
                {REFLECTIONS[activeReflectionIdx].credit}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 8 · OPEN ADOPTION DEEP-DIVE LAYOUT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FAF5E8] border-y border-[#EBDCC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-7">
              <div>
                <span className="text-xs uppercase font-semibold tracking-wider text-[#B38114]">Open Adoption Spotlight</span>
                <h2 className="font-display-stories text-4xl sm:text-5xl text-[#2B111E] mt-2 leading-tight">
                  Two Mothers,<br />One Child,<br />
                  <span className="italic text-[#C9941A]">Zero Secrets.</span>
                </h2>
              </div>
              <p className="text-base text-[#475569] leading-relaxed font-light">
                Open adoption — where birth parents remain known and celebrated in the child's life — is the single most powerful gift adoptive parents can give to their child's long-term identity and mental health. Research is unequivocal.
              </p>
              <div className="space-y-4">
                {[
                  { pct: '87%', label: 'of adult adoptees in fully open adoptions report positive identity resolution' },
                  { pct: '3×', label: 'more likely to develop secure adult attachment styles than closed-adoption cohorts' },
                  { pct: '96%', label: 'of open adoptive families report no meaningful relational conflict with birth parents after Year 3' },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#EBDCC0]">
                    <div className="font-display-stories text-3xl font-bold text-[#C9941A] shrink-0 w-16 text-center">{s.pct}</div>
                    <p className="text-xs text-[#475569] leading-relaxed">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                  alt="Mother and child in open adoption"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B111E]/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rk-glass rounded-2xl text-white">
                  <p className="text-xs italic font-light leading-relaxed">
                    "Maya has two mothers. One grew her. One raises her. Neither cancels the other."
                  </p>
                  <span className="text-[11px] text-[#C9941A] font-mono mt-1 block">— Claire Sterling</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white rounded-2xl border border-[#EBDCC0] space-y-1">
                  <Star className="w-4 h-4 text-[#C9941A]" />
                  <div className="font-bold text-[#2B111E]">Monthly Contact</div>
                  <div className="text-[#64748B]">Illustrated cards, photos, and notes exchanged every month without fail</div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#EBDCC0] space-y-1">
                  <Heart className="w-4 h-4 text-[#C9941A] fill-[#C9941A]" />
                  <div className="font-bold text-[#2B111E]">Annual Visits</div>
                  <div className="text-[#64748B]">Birthday and holiday visits celebrate both families simultaneously</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 9 · INTERCOUNTRY GLOBAL MAP SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="rk-world-bg py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C9941A]">
              Global Family Formation
            </span>
            <h2 className="font-display-stories text-3xl sm:text-4xl lg:text-5xl text-white">
              Families Formed Across 40+ Countries
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              Every intercountry adoption is a unique bridge between cultures — and a lifelong commitment to heritage.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { flag: '🇨🇴', country: 'Colombia', count: '420+ families', corridor: 'ICBF · Hague', detail: 'Our longest-running intercountry programme with dedicated in-country legal representation.' },
              { flag: '🇮🇳', country: 'India', count: '310+ families', corridor: 'CARA · Hague', detail: '100% dossier approval rate through our pre-submission legal review process.' },
              { flag: '🇵🇭', country: 'Philippines', count: '280+ families', corridor: 'ICAB · Hague', detail: 'Specialised preparation for ICAB\'s unique matching and matching hearing procedures.' },
              { flag: '🇰🇪', country: 'Kenya', count: '190+ families', corridor: 'DOC Kenya', detail: 'Partnership with leading Kenyan child welfare NGOs for ethical, sustainable placement.' },
              { flag: '🇬🇭', country: 'Ghana', count: '160+ families', corridor: 'DSW Ghana', detail: 'Focused on older child and sibling group placements with Ghana Department of Social Welfare.' },
              { flag: '🇧🇬', country: 'Bulgaria', count: '145+ families', corridor: 'SAA · EU', detail: 'EU-compliant intercountry programme with Sofia-based specialist legal team.' },
            ].map(c => (
              <div key={c.country} className="rk-glass rounded-2xl p-6 space-y-3 group hover:bg-white/10 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{c.flag}</span>
                  <div>
                    <div className="font-bold text-white text-sm">{c.country}</div>
                    <div className="text-[11px] text-[#C9941A] font-mono">{c.corridor}</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="font-display-stories text-lg text-[#C9941A]">{c.count}</div>
                  </div>
                </div>
                <p className="text-xs text-white/55 leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/adoption/types" className="rk-btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold">
              <Globe className="w-4 h-4" />
              <span>Explore All 40+ Country Programmes</span>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 10 · ADULT ADOPTEE VOICES CAROUSEL
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#2D5A4E]">Grounded in Adoptee Wisdom</span>
            <h2 className="font-display-stories text-3xl sm:text-4xl lg:text-5xl text-[#2B111E]">
              What Adult Adoptees Say Their Parents Got Right
            </h2>
            <p className="text-sm text-[#64748B] font-light leading-relaxed">
              Five adult adoptees reflecting on the specific parenting choices that supported their identity, security, and flourishing.
            </p>
          </div>
          {/* Selector */}
          <div className="flex flex-wrap justify-center gap-3">
            {ADOPTEE_VOICES.map((v, i) => (
              <button
                key={i}
                onClick={() => setActiveAdopteeIdx(i)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  activeAdopteeIdx === i
                    ? 'bg-[#2D5A4E] text-white border-[#2D5A4E]'
                    : 'bg-[#FAF8F5] text-[#475569] border-[#EAE4D9] hover:bg-[#EDF4F1]'
                }`}
              >
                {v.emoji} {v.principle}
              </button>
            ))}
          </div>
          {/* Voice card */}
          <div className="max-w-4xl mx-auto rk-adoptee-card">
            <div className="bg-[#FAF8F5] rounded-3xl border border-[#EAE4D9] p-10 sm:p-16 space-y-6 text-center shadow-sm">
              <div className="text-5xl">{ADOPTEE_VOICES[activeAdopteeIdx].emoji}</div>
              <div
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white"
                style={{ background: '#2D5A4E' }}
              >
                {ADOPTEE_VOICES[activeAdopteeIdx].principle}
              </div>
              <blockquote className="font-display-stories text-2xl sm:text-3xl text-[#2B111E] font-normal leading-[1.4] italic">
                "{ADOPTEE_VOICES[activeAdopteeIdx].quote}"
              </blockquote>
              <div className="pt-2 border-t border-[#EAE4D9]">
                <div className="text-sm font-semibold text-[#2B111E]">{ADOPTEE_VOICES[activeAdopteeIdx].name}</div>
                <div className="text-xs text-[#64748B] mt-0.5">{ADOPTEE_VOICES[activeAdopteeIdx].country}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 11 · SIBLING PRESERVATION EDITORIAL
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-0 bg-[#2D5A4E] text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
          <div className="p-12 sm:p-16 lg:p-20 flex flex-col justify-center space-y-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9941A] font-bold">Sibling Preservation Commitment</span>
            <h2 className="font-display-stories text-4xl sm:text-5xl font-normal leading-[1.1]">
              Brotherhood Is Not<br />
              <span className="italic text-[#C9941A]">Negotiable.</span>
            </h2>
            <p className="text-base text-white/70 leading-relaxed font-light">
              The child welfare system regularly separates biological siblings to fill placement slots. RK-Adoption's formal policy is that sibling separation is a last resort requiring exhaustive written justification. We actively recruit and train families specifically to welcome sibling groups.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              {[
                { n: '92%+', l: 'Sibling groups placed and kept together' },
                { n: '1,900+', l: 'Sibling group placements in our history' },
                { n: '0', l: 'Agency-recommended separations in the last three years' },
                { n: '18 mos', l: 'Average time to place a sibling group of 3+' },
              ].map(s => (
                <div key={s.l} className="p-4 rounded-2xl bg-white/10 border border-white/15">
                  <div className="font-display-stories text-2xl text-[#C9941A]">{s.n}</div>
                  <div className="text-white/60 mt-0.5 leading-tight">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <img
              src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=900&q=80"
              alt="Siblings together in their family home"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#2D5A4E]/50" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 12 · IMPACT TIMELINE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FAF8F5] border-b border-[#EAE4D9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-14">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C9941A]">Our Story</span>
            <h2 className="font-display-stories text-3xl sm:text-4xl text-[#2B111E]">
              Fifteen Years of Families — A Timeline
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 rk-timeline-line -translate-x-1/2" />
            <div className="space-y-10">
              {IMPACT_MILESTONES.map((m, i) => (
                <div key={m.year} className={`flex items-start gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} relative`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div
                      className={`inline-block bg-white border border-[#EAE4D9] rounded-2xl p-5 shadow-sm space-y-2 max-w-xs ${i % 2 === 0 ? 'sm:ml-auto' : ''}`}
                    >
                      <div className="text-xl">{m.icon}</div>
                      <div className="font-display-stories text-2xl text-[#C9941A] font-bold">{m.count}</div>
                      <div className="text-xs text-[#2B111E] font-semibold leading-snug">{m.label}</div>
                      <div className="text-[10px] text-[#94A3B8] font-mono">{m.year}</div>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#2B111E] border-4 border-[#FAF8F5] flex items-center justify-center text-xs text-white font-bold z-10 shrink-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                    {i + 1}
                  </div>
                  <div className="flex-1 hidden sm:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 13 · POST-ADOPTION SUPPORT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C9941A]">Lifetime Partnership</span>
            <h2 className="font-display-stories text-3xl sm:text-4xl text-[#2B111E] mt-2">
              Success Continues After Finalization
            </h2>
            <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
              Signing a finalization decree is not our exit. It is the beginning of our deepest work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <BookOpen className="w-5 h-5" />, color: '#B38114', bg: '#FAF5E8', title: 'Post-Adoption Academy', desc: '300+ hours of video curriculum: TBRI®, developmental trauma, identity development, transracial parenting, open adoption navigation, and teen adoptee psychology.' },
              { icon: <Users className="w-5 h-5" />, color: '#2D5A4E', bg: '#EDF4F1', title: 'Parent Peer Circles', desc: 'Monthly facilitated peer groups organised by placement type, geography, and child\'s developmental stage. Real parents, real challenges, real solutions.' },
              { icon: <HeartHandshake className="w-5 h-5" />, color: '#3D1A2C', bg: '#FAF3F7', title: 'Clinical Therapy Network', desc: 'Preferred referral relationships with 400+ trauma-informed therapists specialising in adoption, attachment, and complex developmental trauma across 40 countries.' },
              { icon: <Award className="w-5 h-5" />, color: '#185265', bg: '#EBF4F7', title: 'School Advocacy Service', desc: 'Expert IEP and EHCP advocacy for children who need educational support plans. Our specialists attend school meetings with you.' },
              { icon: <TrendingUp className="w-5 h-5" />, color: '#B38114', bg: '#FAF5E8', title: '5–10–20 Year Reviews', desc: 'Comprehensive voluntary family wellbeing reviews at 5, 10, and 20 years post-finalization. Our longest relationships span three decades.' },
              { icon: <PhoneCall className="w-5 h-5" />, color: '#2D5A4E', bg: '#EDF4F1', title: 'Crisis De-escalation', desc: '24/7 on-call clinical crisis support for acute post-placement challenges. Licensed professionals answer — never call centres.' },
            ].map(s => (
              <div key={s.title} className="rk-prog-card bg-[#FAF8F5] rounded-3xl border border-[#EAE4D9] p-7 space-y-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: s.bg, color: s.color }}>
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-[#2B111E]">{s.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed mt-1.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 14 · EXPANDED FAQ ACCORDION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FAF8F5] border-b border-[#EAE4D9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C9941A]">Honest Answers</span>
            <h2 className="font-display-stories text-3xl sm:text-4xl text-[#2B111E]">
              Questions About Adoption Outcomes
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">Seven carefully considered questions — with complete, unsanitised answers.</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-[#EAE4D9] bg-white overflow-hidden shadow-xs">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-[#FAF8F5] transition-colors"
                >
                  <span className="text-sm font-semibold text-[#2B111E] leading-snug">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C9941A] shrink-0 mt-0.5 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-[#475569] leading-relaxed border-t border-[#EAE4D9]/60 pt-4 font-light">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 15 · COMMUNITY INVITATION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#FAF5E8] rounded-3xl border border-[#EBDCC0] p-10 sm:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#B38114]">Alumni Community</span>
              <h2 className="font-display-stories text-3xl sm:text-4xl text-[#2B111E] leading-tight">
                Share Your Story with<br />Families Who Need to Hear It
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed font-light">
                Finalized adoptive families are warmly invited to submit updates, milestones, and reflections to our confidential Alumni Circle. Your anonymized story could be the reason another family says yes.
              </p>
              <div className="space-y-3">
                {[
                  'Annual family reunion celebrations (in-person & virtual)',
                  'Monthly alumni newsletter with community updates',
                  'Exclusive peer mentoring programme with experienced families',
                  'Invitations to contribute to educational narrative library',
                ].map(b => (
                  <div key={b} className="flex items-center gap-2.5 text-xs text-[#475569]">
                    <CheckCircle2 className="w-4 h-4 text-[#C9941A] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <a href="/contact" className="rk-btn-gold inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold mt-2">
                <HeartHandshake className="w-4 h-4" />
                <span>Join the Alumni Circle</span>
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80"
                alt="Adoptive families gathering at reunion"
                className="w-full h-64 object-cover rounded-2xl shadow-md"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg border border-[#EAE4D9] p-4 max-w-[180px]">
                <div className="font-display-stories text-2xl text-[#C9941A] font-bold">2,400+</div>
                <div className="text-xs text-[#64748B] mt-0.5 leading-snug">Active alumni families in our community</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 16 · FINAL CTA — DARK EDITORIAL
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#2B111E] text-white relative overflow-hidden">
        {/* Decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-white/5" />
          <div className="absolute w-[800px] h-[800px] rounded-full border border-white/3" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9941A]/15 border border-[#C9941A]/25 text-xs text-[#C9941A] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Your chapter is waiting to be written</span>
          </div>
          <h2 className="font-display-stories text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1]">
            Your Family's Story<br />Begins With a<br />
            <span className="italic text-[#C9941A]">Single Conversation.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            Over twelve thousand families walked this path before you. Every one of them started with a phone call, a form, and a question they were afraid to ask. Our caseworkers are ready for yours — right now.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href="/process/guide" className="rk-btn-gold px-8 py-4 rounded-xl text-sm font-bold flex items-center gap-2">
              <Milestone className="w-4 h-4" />
              <span>Explore The 7 Adoption Stages</span>
            </a>
            <a href="/contact" className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-semibold transition-colors flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#C9941A]" />
              <span>Speak with a Caseworker</span>
            </a>
          </div>
          <div className="flex items-center justify-center gap-8 pt-6 border-t border-white/10 text-xs text-white/35">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9941A]" />
              Free Initial Consultation
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9941A]" />
              Hague Accredited
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9941A]" />
              Lifetime Support
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
