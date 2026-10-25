# Processing Community Day 2026
## Research dossier and interactive Slidev presentation brief

Prepared for Murat Atimtay • Research checked 23 October 2026

**Purpose:** Give this file to Codex as the research and editorial specification for an interactive presentation built with Slidev at https://sli.dev. This is a research and production brief, not a ready-to-run `slides.md` file. The code examples are teaching proposals, not a tested application.

**Working title:** “Sketching with Code: Processing, Creative Coding, and the Communities We Build”

**Turkish alternative:** “Kodla Eskiz: Processing, Yaratıcı Kodlama ve Birlikte Üretmek”

**Assumptions:** Mixed audience of artists, designers, educators, students, and programmers. No coding knowledge required. Main version: 30 minutes, excluding questions. A precise 15-minute cut appears below. Research is in English because the request is in English. Preserve proper names and API names if the final deck is translated into Turkish. Do not invent the local event date, venue, schedule, or attendance figures. Get those from the organizer's current materials.

## 1. The narrative to build

The presentation should let people experience a small creative decision before asking them to absorb history. Begin with an ordered field of squares. Ask the audience how much disorder to introduce. A single control changes the composition. Then reveal that someone designed the rules, the limits of variation, and the relationship between action and result.

The central question is: **What becomes possible when more people can create with computation?**

Develop that question through four acts:

1. **Rules become material.** Early computer artists used procedures, chance, and machines to investigate images. Access to equipment and collaborators shaped what they could make.
2. **Code becomes a sketchbook.** Processing combined a visual programming vocabulary, an approachable environment, examples, and a community. Artists could explore an idea through making it.
3. **The sketchbook reaches the browser.** p5.js reinterpreted the approach for JavaScript and the web. Sharing a link and entering through a browser changed the practical entry point.
4. **A tool becomes a shared practice.** OpenProcessing, tutorials, libraries, translations, contributors, and PCD gatherings help ideas circulate. End by inviting the audience to participate locally.

This is an editorial interpretation of the sources, not a historical claim that progress happened in a single straight line. Avoid a triumphant story in which one tool solved access for everyone. Financial, institutional, linguistic, disability, and social barriers persist.

Use one recurring visual system throughout: a grid that develops into variation, motion, interaction, and finally a family of remixes. Clearly label contemporary teaching simulations. They must never masquerade as historical artworks.

## 2. Core research and factual guardrails

### 2.1 What “creative coding” means

For this talk, define creative coding as **using programming as a medium for expression, exploration, and experimentation**. This is an operational definition for the presentation, not a claim that the field has a single agreed definition or founding date.

Creative coding can involve an image, a performance, sound, a game, an installation, a textile, a plotter drawing, or a critical investigation of an algorithm. It often allows the purpose or form to develop during experimentation. Professional software development can also be creative, and creative code can be rigorous and useful. Avoid a simplistic art-versus-engineering opposition.

Distinguish related terms:

| Term | Useful meaning in this presentation | Example proposed for the talk |
| --- | --- | --- |
| Creative coding | A practice of making and exploring through code | Experimenting with how a field of marks responds to a hand |
| Algorithmic art | Art made through explicit procedures | Subdividing a rectangle according to rules |
| Generative art | An artist establishes a system that produces outcomes with some autonomy | A seeded system produces a family of compositions |
| Interactive art | Participant actions affect an artwork's behavior or experience | Pointer movement bends a field |
| Data visualization | Data values receive visual encodings to support interpretation | Wind direction controls line orientation |
| AI-assisted art | A broad category involving AI systems in creation | A learned model participates in a workflow |

These categories overlap. Generative art does not require machine learning or randomness. A deterministic recursive system can be generative. Interactivity does not automatically make a work generative. A parameter slider becomes meaningful when its artistic consequence is legible.

**Speaker example:** “Instead of placing every line, I decide how lines behave. I look at what happens, change the rules, and look again.” This sentence is newly written for this brief.

### 2.2 Early computer art: a history of procedures and access

Do not begin history in 2001. Computing entered an existing field of abstraction, systems, mechanical experimentation, and instruction-based practice. There is no single uncontested first computer artwork: the answer changes with definitions of computer, digital, electronic, image, and art.

**Electronic imagery before widespread digital image tools.** Ben Laposky's *Oscillon 40* (1952) used an oscilloscope and photography. It is a useful opening historical example, but explicitly identify its analog electronic basis rather than describing it as a Processing-like digital program. [S01]

**Institutions and material constraints.** Early digital work often required access to university, corporate, or scientific equipment. Plotters turned instructions into physical marks. Geometric linework also reflects artists' interests in abstraction; hardware alone does not explain an aesthetic. Punch cards and paper tape belong to particular workflows, not every early artwork. [S01]

**1965 exhibitions.** Georg Nees in Stuttgart, A. Michael Noll in New York, and Frieder Nake in Stuttgart provide an important cluster of early public exhibitions. Use “among the earliest exhibitions of computer-generated art.” DAM's first-person conversation with Nake supports the German context; CHM documents Noll's Bell Labs work and 1965 exhibition. [S02, S03]

**Vera Molnár.** Her *machine imaginaire* involved systematic procedures before direct computer access. She began using a computer in 1968. *Interruptions* (1969) is an excellent specific artwork for discussing rule systems, gaps, and variation. Distinguish her pre-computer method from the later machine-produced works. The point is that procedural thinking can precede its technical implementation. [S04]

**Interactive graphics.** Ivan Sutherland's *Sketchpad* (1963) demonstrated direct manipulation of geometric drawings with a light pen. This is an important parallel history of human-computer interaction and computer-aided design. Do not claim it is a documented direct ancestor of Processing without additional evidence. [S05]

**A broader public encounter.** *Cybernetic Serendipity*, curated by Jasia Reichardt at London's ICA in 1968, brought together computing, creative practice, and cybernetic devices. It helps expand the history beyond static prints. The ICA records its dates as 2 August–20 October 1968. [S06]

**Harold Cohen and AARON.** Cohen conceived the project in the late 1960s and named it in the early 1970s; Whitney's collection identifies AARON as 1973 onward. It offers an optional bridge to questions of artistic knowledge and machine autonomy. Its symbolic procedures should not be equated with contemporary diffusion models. [S07]

**Interpretive conclusion:** Early computer art changed the artistic question from solely shaping an individual object to also describing procedures that could generate objects or behavior. Present this as one important tendency, not the replacement of all earlier artistic methods.

### 2.3 How Processing began

Casey Reas and Ben Fry started Processing in 2001 while graduate students in John Maeda's Aesthetics and Computation Group at the MIT Media Lab. The official overview describes development beginning in spring 2001, while the first software release anniversary is 9 August 2001. These describe different milestones. In 2026, the project celebrates 25 years. [S08]

Its documented intellectual and educational context includes Muriel Cooper's Visible Language Workshop and Maeda's *Design By Numbers* (DBN), released in 1999. DBN provided a constrained visual setting for learning programming. Processing extended the ambition of teaching computation through visual practice. It was initially associated with the spelling/domain `proce55ing.net`. [S09]

Reas and Fry's own retrospective emphasizes sketching: discovering and refining ideas while writing software. The project combined design thinking with programming and aimed to share teaching approaches beyond the founders' own classrooms. Its identity included language, environment, and community. [S10]

Explain the problem concretely: a beginner who wants to explore a moving mark should be able to reach the mark quickly. An environment organized around graphics and immediate feedback can make the early steps relevant to the learner's interests.

Avoid these claims:

- Processing invented generative art, creative coding, animation, or interactive graphics.
- Nobody could make visual work with code before it.
- Processing eliminated the need to learn programming.
- C or C++ cannot draw shapes, or Java always requires a huge program for one shape.

The defensible claim is that Processing assembled a particularly effective entry point and working culture for visual computation.

### 2.4 How it made working with code easier

Processing's classic Java mode offers a simplified sketch structure and a graphics API within the Processing Development Environment (PDE). A student can work with drawing commands before learning application scaffolding. Its official tutorial describes the role of animation, interaction, and immediate feedback. [S11]

The PDE includes an editor, Run/Stop controls, examples, error feedback, and sketch management. These practical choices reduce the number of unrelated decisions between a drawing idea and visible output. [S12]

**Teaching interpretation:** connect familiar artistic concepts to programming concepts:

| Artistic concern | Programming idea | What the audience can see |
| --- | --- | --- |
| Composition | Coordinates and dimensions | Move a rectangle |
| Palette | Variables and color values | Change one value and recolor the composition |
| Repetition | Loops | One mark becomes a field |
| Variation | Parameters and pseudorandom values | A field acquires controlled differences |
| Motion | Repeated drawing and state | Positions evolve over frames |
| Responsiveness | Input and events | A participant changes the work |
| Layering | Draw order and transparency | Earlier marks remain or disappear |
| A family of works | Functions, seeds, and rules | A repeatable system yields variants |

Treat this table as an original pedagogical mapping. It does not claim these artistic concepts reduce entirely to code.

The shift matters for artists and designers because they can author behaviors, create their own tools, connect data to form, and explore alternatives rapidly. For educators, visible consequences make abstract concepts discussable. For interaction designers, input, state, time, and feedback become things to prototype. These are applications and interpretations, not proof that all work made with Processing is good or that it is the best tool for every project.

### 2.5 Processing and p5.js: the relationship

p5.js was created by **Lauren Lee McCarthy in 2013** as a reinterpretation of Processing for the web. Its official people page describes shared inspiration alongside independent evolution. [S13]

Keep the nouns precise:

| Name | What it is | Typical context |
| --- | --- | --- |
| Processing | A software project, visual programming environment, API, and community; classic mode uses Java | Desktop sketches, education, installations, visual experiments |
| Java | A programming language and ecosystem | The basis of classic Processing mode |
| JavaScript | A distinct programming language | Web applications and browser sketches |
| p5.js | A JavaScript library for creative coding | Browser-based audiovisual and interactive work |
| p5.js Web Editor | A browser-based editor for p5.js sketches | Starting, saving, and sharing sketches |
| Processing.js | A separate historical project that ran Processing-style code in browsers | Historical context, not the library used for this deck |
| OpenProcessing | An independently founded platform for creating, sharing, discovering, and teaching creative code | Sketches, forks, portfolios, and classes |
| Processing Foundation | The nonprofit supporting creative coding tools and community programs | Stewardship, access, fellowships, and community work |

Java and JavaScript are different languages. p5.js is neither a renamed Processing.js nor a drop-in runtime for `.pde` files. Processing remains a continuing project, rather than a discontinued predecessor.

p5.js makes a web page a setting for creative computation. Browser delivery provides a convenient way to share work; it does not remove browser permissions, device differences, connectivity needs, or accessibility work. The project explicitly emphasizes access, inclusion, and community participation. Cassie Tarakajian's contribution to creating the p5.js Web Editor should be recognized separately from creating the library. [S14]

### 2.6 Community as part of the medium

**OpenProcessing.** Sinan Ascioglu founded the platform; his own account dates its beginning to March 2008. Its current homepage describes sketch discovery, forking, a p5.js editor, portfolios, embedding, and classroom workflows. [S15, S16]

Demonstrate the learning pattern: encounter an image, inspect its code, change something, understand the consequence, and share a credited variation. A fork preserves a useful connection to a source. It does not replace the need to understand and follow the sketch's actual license.

Avoid claiming that all OpenProcessing content is public or that all features are free. The current platform offers privacy and subscription features. Do not repeat user/sketch counts from older promotional pages: those figures vary across sources and dates. Distinguish OpenProcessing's independent platform from the broader open-source Processing community. [S16]

**The Coding Train.** Daniel Shiffman's tutorials and community give a clear example of education contributing to the ecosystem. The project's own history dates his video-making to 2012 and the Coding Train channel to 2015. If a short clip is used, identify and credit the actual video rather than suggesting these dates mark Processing's founding. [S17]

**Contribution beyond core code.** Teaching, translations, documentation, examples, accessibility work, event organization, and helping a newcomer can all matter. p5.js explicitly welcomes different kinds of knowledge and contribution. [S14]

### 2.7 Processing Community Day

The first PCD took place on **21 October 2017 at the MIT Media Lab in Cambridge, Massachusetts**, organized by **Taeyoon Choi**. A contemporary announcement and Choi's retrospective corroborate this. The retrospective describes more than 200 participants. [S18, S19]

Differentiate this from the later distributed worldwide format. Foundation materials for **PCD 2019** describe locally adapted events and an international organizers' kit. The visual identity discussion includes zine culture and the ability for local groups to adapt the identity. [S20]

Today, the Foundation describes PCD as locally and independently organized gatherings within a wider movement. Present İzmir as a place where this practice becomes locally meaningful. Avoid implying that all cities meet on the same date or follow one centrally prescribed program. [S21]

The human conclusion of the talk: the audience is already part of how this culture continues. A first sketch, a question, a workshop, or a generous explanation can become someone's entry point.

### 2.8 Useful additional subjects

Use these selectively; the talk should not become a catalog of tools.

- **Physical computing:** Wiring, initiated by Hernando Barragán in 2003, explicitly built on Processing. This is a grounded route to discussing the influence of the sketch approach outside the screen. Explain Arduino as a related ecosystem with its own contributors and history, not software invented by Processing's founders. [S22]
- **Determinism and chance:** A seed can replay a pseudorandom sequence. It supports comparison and intentional selection. A seed alone does not guarantee identical output across changed code, versions, inputs, or rendering environments. [S23]
- **Accessibility as creative practice:** p5.js `describe()` supplies a screen-reader-accessible canvas description. Pair it with semantic controls, keyboard access, and meaningful alternatives. One API call does not make an entire experience accessible. [S24]
- **Time and preservation:** A live software artwork depends on versions, assets, browsers, and hardware. The presentation itself can show why archiving source, dependencies, and representative output matters. This is a production recommendation.
- **Tool authorship:** Ask what changes when artists design their own instruments and interaction rules. Connect to the presenter’s plotter practice using only approved images and descriptions.
- **AI and agency:** Optional contemporary discussion: who chooses a system's rules, data, constraints, and evaluation criteria? Use AARON for a historical comparison, while explaining technical differences. [S07]
- **Beyond attractive patterns:** Creative coding can examine surveillance, exclusion, environmental systems, or institutional decision-making. These are proposed thematic directions, not claims about particular works without sources.

## 3. Verified chronology and uncertainty register

| Date | Milestone | Source and qualification |
| --- | --- | --- |
| 1952 | Laposky's *Oscillon 40* | S01; analog electronic imagery photographed from an oscilloscope |
| 1963 | Sutherland publishes *Sketchpad* | S05; interactive drawing, not a Processing release |
| 1965 | Early exhibitions associated with Nees, Noll, and Nake | S02–S03; avoid an unqualified “first computer art” claim |
| 1968 | Molnár starts using a computer | S04; procedural work predates this |
| 1968 | *Cybernetic Serendipity* at ICA | S06 |
| 1969 | Molnár's *Interruptions* | S04 |
| Early 1970s / 1973 onward | Cohen's AARON | S07; distinguish conception, naming, and collection dates |
| 1999 | *Design By Numbers* released | S09 |
| Spring 2001 | Reas and Fry begin Processing | S08 |
| 9 August 2001 | First Processing software release anniversary | S08 |
| 2003 | Barragán starts Wiring | S22 |
| March 2008 | OpenProcessing begins | S15 |
| 24 November 2008 | Processing 1.0 launch | S25, contemporary founders' announcement republished by Arduino |
| 2012 | Processing Foundation established | S09 |
| 2013 | McCarthy creates p5.js | S13 |
| 2015 | Coding Train channel begins | S17 |
| 21 October 2017 | First PCD at MIT Media Lab | S18–S19 |
| 2019 | PCD worldwide distributed gatherings | S20; do not substitute this for the inaugural date |
| 2026 | Processing's 25th anniversary year | Calculated from 2001; S08–S09 |

**Important source discrepancy:** The Foundation's current history page places “Processing 1.0” under 2005. The contemporary launch announcement explicitly states 24 November 2008. Use **2008** for version 1.0 and keep this discrepancy in research notes. Do not silently copy the 2005 entry into the deck. The “spring 2001” start and August release anniversary are not the same kind of discrepancy. [S09, S25]

**Scope limitations:** This is a selective lineage relevant to Processing. It is not a complete global history of computational art. Do not imply that women, non-Western practitioners, sound artists, or artists working outside academic labs entered the field only after the named examples. Additional case studies require their own research.

## 4. Main presentation: 30 minutes

The timings below total **30:00**. Speaker notes are suggested language, not historical quotations. On-screen text should be much shorter than these notes. Sources belong in each slide's notes and a readable references appendix. Use a brief visible credit next to historical artworks.

### Slide 01 — A composition we can change (1:15)

**On screen:** “What would you change?” An original field of squares occupies most of the slide.

**Action:** Audience chooses low, medium, or high disorder by a show of hands. Presenter changes one clearly labelled control.

**Notes:** “Before we talk about software, let's make a visual decision together. How far should these squares move away from their grid? We have already made choices about a rule and how much freedom it allows.”

**Transition:** Who decides what the computer can do?

**Build:** `RuleField.vue`, with reset and three reliable presets. Label “Original teaching demo, 2026.”

### Slide 02 — Creative coding (1:00)

**On screen:** “Programming as a medium for expression and exploration.”

**Visual:** Keep the same composition, revealing a short natural-language rule beside it.

**Notes:** “We can draw individual objects, but we can also describe how a whole field behaves. The result gives us something to respond to. We adjust, run, observe, and adjust again.” Clarify that creative coding also includes sound, movement, and experiences.

**Interaction:** Reveal rule text after the audience has seen its effect.

**Basis:** Operational definition and original teaching interpretation; S10 provides the sketching context.

### Slide 03 — Access shaped early computer art (1:15)

**On screen:** “Who could get time on the machine?”

**Visual:** One properly sourced photograph of historical equipment, plus one work with a complete caption.

**Notes:** “The practical problem was once access to the machine itself. Artists worked through relationships with laboratories and people who could operate the equipment. Output devices helped shape what reached paper or film.” Mention Laposky briefly and distinguish analog from digital.

**Sources:** S01, S03.

### Slide 04 — Procedures before the computer (1:15)

**On screen:** “Vera Molnár and the machine imaginaire.”

**Visual:** *Interruptions* (1969), if permitted, alongside an original diagram of a different rule. Never overlay controls onto the historical artwork.

**Notes:** “Molnár explored systematic image-making before she had direct access to a computer. The procedure itself could be an artistic material. Later she used the machine to explore possibilities at a different scale.”

**Audience moment:** Ask whether they have ever followed a drawing rule on paper.

**Sources:** S04.

### Slide 05 — Drawing, behavior, and participation (1:15)

**On screen:** “Sketchpad, 1963. Cybernetic Serendipity, 1968.”

**Visual:** Sequential image reveals, rather than a collage of tiny archival pictures.

**Notes:** “Interactive drawing and computer-generated imagery developed through overlapping experiments. Sketchpad made geometric manipulation immediate. Cybernetic Serendipity brought technological creative processes into a public exhibition context.” Identify these as parallel histories.

**Sources:** S05–S06. AARON is an appendix branch if time permits.

### Slide 06 — The starting problem for a visual artist (1:00)

**On screen:** “I want to explore a moving mark.”

**Visual:** A mark, its rule, and a few neutral labels for application setup, graphics, input, and timing. Reveal setup labels once, then show the sketch environment.

**Notes:** “Before reaching the visual question, a beginner can face many setup decisions. What would a programming environment look like if it began with the learner's visual intention?”

**Guardrail:** This is an explanatory scenario, not a universal comparison of all pre-Processing tools.

### Slide 07 — Processing begins in 2001 (1:15)

**On screen:** “Casey Reas + Ben Fry. MIT Media Lab. 2001.”

**Visual:** Creator portraits with credits or an authorized early Processing screenshot.

**Notes:** Explain the founders' design and teaching context. State the spring start and August first-release milestone if useful, without turning this into release trivia.

**Sources:** S08, S10.

### Slide 08 — Design and computation (1:00)

**On screen:** “Muriel Cooper. John Maeda. Design By Numbers.”

**Visual:** A short, carefully labelled lineage of educational ideas. Dates only where sourced.

**Notes:** “Processing grew within a design culture that treated computation as material for visual thinking. DBN provided one direct educational precursor. Reas and Fry developed an approach that could travel beyond their own classes.”

**Sources:** S09–S10. Do not imply Cooper worked on Processing itself.

### Slide 09 — The software sketchbook (1:15)

**On screen:** “An idea can develop while you code.”

**Visual:** One composition beside three successive parameter settings.

**Notes:** Explain “sketch” as a working attitude: tentative, quick to change, and open to discovery. The same tool can also support finished work.

**Interaction:** Switch between three prepared states. Keep the changes easy to follow.

**Sources:** S10–S11.

### Slide 10 — A visible result in a few lines (1:30)

**On screen:** A complete tiny Processing sketch and its output.

**Notes:** Explain canvas, background, fill, and rectangle as visual decisions. Name what the environment handles: opening the sketch window and calling its lifecycle functions.

**Interaction:** Highlight one line at a time, changing the associated visible property. Java code is displayed for teaching; a browser-based reproduction renders the output and is explicitly labelled as such.

**Sources:** S11–S12. Code in section 6.

### Slide 11 — One mark becomes a system (1:45)

**On screen:** “Repeat. Vary. Observe.”

**Visual:** One mark becomes a grid, then a varied field.

**Notes:** “A loop gives us repetition. A parameter gives us a relationship we can change. We begin making decisions about a family of possible compositions.” Do not teach the full loop syntax.

**Interaction:** Presenter controls mark count, then displacement. Audience predicts the second change.

**Build:** Reuse `RuleField.vue`; display a short synchronized code excerpt.

### Slide 12 — Randomness and noise (1:30)

**On screen:** “Independent variation / Related variation.”

**Visual:** Two equally sized traces with the same scales, one sampling `random()`, one sampling `noise()`.

**Notes:** “These samples jump independently. These vary with a relationship between nearby samples. Either can be useful. The question is which behavior supports the work.”

**Interaction:** Adjust noise sampling step. Explain that smooth appearance depends on sampling. Avoid equating noise with nature or randomness with ugliness.

**Build:** `RandomNoise.vue`. Original teaching comparison; verify APIs against the pinned p5.js version.

### Slide 13 — The same seed, another decision (1:00)

**On screen:** “Seed 2026.”

**Visual:** A composition replays, then changes after a new seed.

**Notes:** “A seeded sequence lets us return to a result and compare changes. The artist still chooses rules, ranges, and what to keep.”

**Interaction:** Reset to 2026; switch to 2027; return to 2026.

**Sources:** S23. State reproducibility conditions in notes.

### Slide 14 — Time and interaction (1:30)

**On screen:** “What changes when you enter the system?”

**Visual:** A pointer-controlled mark, with an optional trails toggle.

**Notes:** “The participant's movement supplies input. The program maps that input into behavior. Clearing the background every frame creates one experience; retaining earlier marks creates another.”

**Interaction:** Move, pause, enable trails, then reset. Offer keyboard input and a recorded path preset.

**Build:** `PointerSketch.vue`.

### Slide 15 — Why this matters in a studio (1:15)

**On screen:** “Tools we can author. Systems we can question.”

**Visual:** Three sequential examples: procedural typography, data-linked drawing, interactive space. Each must have a verified creator/tool credit, or be explicitly labelled an original teaching study.

**Notes:** Explain tool authorship, prototyping behavior, and critical investigation. Avoid a claim that every digital artwork shown used Processing.

**Optional local connection:** One approved image from Atim's plotter work can connect code, paper, and physical marks. No invented artwork metadata.

### Slide 16 — p5.js reinterprets the sketchbook (1:30)

**On screen:** “Lauren Lee McCarthy. 2013. JavaScript + the web.”

**Visual:** A minimal Processing/p5.js code comparison, followed by a browser sketch.

**Notes:** “A shared approach can take a different form in a different environment. p5.js brings creative coding into JavaScript and browser culture, and develops its own priorities and community.”

**Sources:** S13–S14.

### Slide 17 — A web page becomes a creative space (1:00)

**On screen:** “A sketch can travel as a link.”

**Visual:** The same locally bundled sketch in a browser-like frame. Avoid implying live remote access is required.

**Notes:** Explain the web editor and the role of HTML controls and web integration. Credit Cassie Tarakajian for the Web Editor. A QR link is optional and must point to a verified published destination.

**Interaction:** Optional audience opens a prepared sketch; presenter continues immediately for people without devices.

**Sources:** S14.

### Slide 18 — A sketch can leave the screen (1:00)

**On screen:** “Instructions become physical marks.”

**Visual:** Authorized plotter footage or a clearly labelled simulated toolpath.

**Notes:** Connect back to early plotters. Mention Wiring as a documented related project that built on Processing. Hardware communication and browser sketches are separate technical layers; do not suggest p5.js directly operates every machine.

**Sources:** S22. Footage and artist statements require their own credits.

### Slide 19 — OpenProcessing and the visible source (1:15)

**On screen:** “See a sketch. Read a rule. Make a variation.”

**Visual:** A prepared local demonstration of a source sketch and a clearly credited derivative.

**Notes:** Name Sinan Ascioglu and 2008. Explain how sharing source supports learning and why remixing involves attribution and licensing.

**Interaction:** Show one changed rule and the consequence. Use an original sketch to avoid needing a live third-party editor.

**Sources:** S15–S16.

### Slide 20 — Learning is shared work (1:00)

**On screen:** “Examples, explanations, translations, and patient answers.”

**Visual:** One approved Coding Train still or a simple list of ways people contribute.

**Notes:** “A working tool also needs people who explain it and make room for newcomers.” Name Shiffman without making him the sole educator in the ecosystem.

**Sources:** S14, S17.

### Slide 21 — Processing Community Day (1:30)

**On screen:** “First gathering: 21 October 2017. MIT Media Lab.”

**Visual:** A properly credited photo from the inaugural PCD, followed by the distributed format as a distinct reveal.

**Notes:** Credit Taeyoon Choi. Explain the difference between the first event and the worldwide community-led gatherings documented for 2019.

**Sources:** S18–S21.

### Slide 22 — Who gets to participate? (1:00)

**On screen:** “Access is something we design.”

**Visual:** Keyboard controls and a concise description of the recurring composition, shown as ordinary presentation content.

**Notes:** “A free download is one kind of access. Language, confidence, devices, disability access, and how we treat beginners matter too.” Demonstrate a canvas description and keyboard alternative without portraying either as a complete solution.

**Sources:** S14, S24. Wider framing is editorial interpretation.

### Slide 23 — Our shared sketch (1:45)

**On screen:** “One system. Different choices.”

**Visual:** Return to the opening system. Audience chooses a new rule and seed. Display the opening and closing outcomes.

**Notes:** Revisit the agency question: who selected the rule, set the range, chose the result, and made the invitation? The audience can now name several forms of authorship.

**Interaction:** Two choices only; no server or voting service. Exporting an image is optional.

### Slide 24 — A place to begin (1:00)

**On screen:** “Change one rule. Share what you discover.”

**Visual:** Verified links to p5.js editor, Processing, OpenProcessing, and the local PCD program. Keep the local program placeholder out of the final build until supplied.

**Notes:** “The next step can be small. Make one change you understand, see what it does, and show it to someone. This community continues through those exchanges.”

**Finish:** Leave the final shared composition visible. Stop speaking before opening questions.

## 5. A rehearsable 15-minute cut

Keep the same beginning and ending. Condense the history instead of speaking faster. The following timings total **15:00**; slide numbers refer to the main version.

| Block | Slides/material | Time |
| --- | --- | --- |
| Opening shared decision and creative coding | 01–02 combined | 1:30 |
| Early procedures and access | 03–04 combined | 1:30 |
| Processing origin and sketchbook | 07–09 combined | 2:00 |
| A tiny sketch, then repetition | 10–11 combined | 2:00 |
| Motion and participant input | 14 | 1:30 |
| p5.js and browser access | 16–17 combined | 1:30 |
| OpenProcessing and learning | 19–20 combined | 1:30 |
| First PCD and today's gatherings | 21 | 1:00 |
| Shared final composition and invitation | 23–24 combined | 2:00 |

Use nine composed slides or short sequences, not all 24 slides hidden behind rushed narration. Put random/noise, seeds, Sketchpad, AARON, physical computing, and extended access discussion in an appendix. Keep a brief mention of inclusion in the community block.

For a 45-minute session, expand discussion around historical examples and allow a 5-minute remix activity. Do not fill extra time with additional release-number slides.

## 6. Demo specifications and teaching code

All code below is original illustrative material. Codex must implement, run, and verify it against selected dependencies. Prefer small fixed controls to a general live editor for the main talk. Editable code can be an optional appendix feature.

### Demo A: RuleField

**Teaching objective:** Distinguish an artist-authored system from an individual output.

- Grid of 18 columns and 10 rows; preserve aspect ratio and generous margins.
- Parameters: displacement 0–20 logical pixels, rotation 0–0.45 radians, seed integer, trails off.
- Initial preset: zero displacement and rotation. Variation preset: moderate values. Final preset: audience choice.
- Compute random offsets once per regeneration. Do not generate new values on every animation frame; otherwise the field flickers and the comparison becomes unclear.
- Apply the same stored random coefficients across slider changes so a parameter comparison isolates its effect.
- Buttons: Ordered, Variation, Reset. Keep a seed field available to the presenter.
- Minimal labels, keyboard-operable controls, visible focus, and a concise text description.
- Label as a contemporary teaching demo, including if it evokes an earlier artistic method.

Conceptual pseudocode, intentionally independent of a library:

```text
make a repeatable sequence from seed
for every grid cell:
    remember signed coefficients for horizontal shift, vertical shift, and rotation
    place its square using coefficient × current parameter
render the resulting field
```

### Demo B: A tiny sketch in Processing and p5.js

Processing, Java mode:

```java
void setup() {
  size(640, 400);
  background(245);
  noStroke();
  fill(230, 60, 90);
  rect(220, 140, 200, 120);
}
```

p5.js:

```js
function setup() {
  createCanvas(640, 400);
  background(245);
  noStroke();
  fill(230, 60, 90);
  rect(220, 140, 200, 120);
}
```

Show the common visual vocabulary and the different language syntax. `void` and `function` are enough to identify the difference; no type-system lecture is needed. Label browser-rendered output accurately. The Slidev deck must not pretend to execute Java directly.

### Demo C: PointerSketch

p5.js teaching sketch:

```js
function setup() {
  createCanvas(640, 400);
  noStroke();
}

function draw() {
  background(245);
  fill(230, 60, 90);
  circle(mouseX, mouseY, 56);
}
```

The actual component should add a keyboard-controlled alternative position, pause/reset, and a trails option. For trails, initialize the background once and then omit clearing on subsequent frames. Explain why the marks accumulate. Clamp the pointer to the demo area, and do not capture pointer events over navigation or text.

### Demo D: RandomNoise

**Teaching objective:** Show the relationship between nearby samples.

- Use the same graph height and value range for both traces.
- Generate the random trace with a fixed seed.
- Generate the noise trace with `noiseSeed()` separately; `randomSeed()` does not seed `noise()`.
- Slider changes the sampling increment, not a vague “naturalness” control.
- Reset returns to the same data and controls.
- Captions: “Independent samples” and “Correlated samples.”
- Do not animate the random trace with freshly generated values while leaving noise fixed; that confounds motion with the underlying distinction.
- Optional appendix: show how a sampled field can control orientation rather than height.

### Demo E: SeedReplay

Original p5.js fragment:

```js
function drawStudy(seedValue) {
  randomSeed(seedValue);
  background(245);
  noFill();
  stroke(35);

  for (let i = 0; i < 80; i++) {
    const x = random(40, width - 40);
    const y = random(40, height - 40);
    const diameter = random(8, 36);
    circle(x, y, diameter);
  }
}
```

Use 2026 and 2027 as presets. Reproducibility claim is limited to the same code, library version, and sequence of calls. Pin dependencies for the event. [S23]

### Demo F: RemixComparison

Use a presenter-authored example with an explicit license. Display original and derivative together, including title, author, source, license, and a short description of what changed. The derivative must change a meaningful rule, such as replacing independent directions with a coherent field, rather than only changing a title. Do not copy an arbitrary OpenProcessing sketch into the deck without checking its license and linked assets.

### Optional demo: a simulated pen plotter

Animate a short path segment by segment using already computed coordinates. Explain that it visualizes a toolpath; it is not a live connection to the presenter's machine. A live plotter adds transport, device, and timing dependencies and should remain a separately rehearsed option.

## 7. Slidev implementation handoff

### 7.1 Architecture

Use a local Slidev project with `slides.md`, `components/`, `public/`, and a package lockfile. Keep historical research and full references separate from concise slide copy.

Suggested files:

- `slides.md`: 24-slide main route, presenter notes, short citations.
- `slides-short.md`: curated 15-minute route with its own timings.
- `components/RuleField.vue`
- `components/PointerSketch.vue`
- `components/RandomNoise.vue`
- `components/SeedReplay.vue`
- `components/RemixComparison.vue`
- `public/history/`: approved historical images.
- `public/fallbacks/`: predetermined demo stills and clips.
- `sources.md`: source registry and asset credits.
- `README.md`: run, build, rehearse, and export instructions.

This is a recommended architecture, not a claim these files already exist. Slidev supports custom Vue components in `components/` and their use directly in slide Markdown. [S26]

### 7.2 Rendering and lifecycle requirements

Use p5.js instance mode within components to avoid global `setup()`/`draw()` collisions. Import browser-dependent rendering code on the client. Initialize each sketch only after its container exists. Remove p5 instances and listeners on unmount. Pause inactive slides, including slides retained or preloaded by Slidev; unmount cleanup alone is insufficient. Verify the active-slide lifecycle against the installed Slidev API rather than inventing a hook.

Resize against the slide container, not the entire browser window. Use `ResizeObserver`, cap device pixel ratio, and keep logical drawing coordinates stable so high-DPI projection does not change the composition. Use a conservative frame rate and no unnecessary animation when a parameter changes only on demand.

Use a scoped interaction area. Clicking a demo button must not also advance a slide. Space and arrow keys must continue to work for navigation whenever a demo does not have focus. Provide an obvious way to leave the demo's keyboard focus. Give controls their own scoped handlers rather than globally overriding every keystroke.

### 7.3 Slidev features to use

- Markdown separates slides with `---`; YAML headmatter configures the deck. [S27]
- End-of-slide HTML comments carry presenter notes. Include source IDs, timing, cue, and fallback instruction there. [S27]
- Use `v-click` for a short sequence of reveals and synchronized code/output explanation. Do not add many clicks to every sentence. [S28]
- Use custom Vue components for the demos. [S26]
- Syntax highlighting alone does not execute Java or run a p5 sketch. Connect visual output deliberately.
- Preserve static representative output for exported PDF. Interactive features do not survive ordinary document export. The browser presentation remains the primary version. [S29]

Illustrative structure, to adapt after components exist:

````md
---
theme: default
title: Sketching with Code
aspectRatio: 16/9
---

# What would you change?

<RuleField />

<!--
Timing: 1:00
Cue: Ask for low, medium, or high disorder.
Source: Original teaching demonstration.
Fallback: Show the three prepared stills.
-->

---

# Processing begins in 2001

Casey Reas + Ben Fry

<div v-click>MIT Media Lab</div>

<!--
Sources: S08, S10. See sources.md for full URLs.
Explain the educational context before the dates.
-->
````

The example demonstrates structure only. It is not the full deck and has not been run here. Verify frontmatter options and component behavior in the installed version.

### 7.4 Visual direction

Prefer a spacious composition with large typography and a single dominant visual. Use paper-like backgrounds for historical drawings and darker space only when it helps a luminous interactive work. Color can connect Processing blue and p5.js pink, but source official brand assets and current guidance rather than inventing logos.

Use no more than roughly 25–35 visible words on most conceptual slides, excluding brief credits. Give code ample space and show only the lines under discussion. Keep detailed names, dates, and nuance in notes and the research appendix.

Suggested rhythm: demo, short explanation, historical image, visual comparison, demo. Avoid a succession of text-only timelines. Historical images need clear dates and full artwork identification. Do not add generated “archival” photographs.

### 7.5 Offline and fallback behavior

Bundle fonts, JavaScript dependencies, permitted images, and clips locally. The presentation must work without opening remote editors, videos, or embedded sketches. External links are optional resources.

Every interactive slide needs a stable still that expresses its teaching point. Keep a lightweight recorded fallback for the opening and pointer demo. Offer a reduced-motion mode and pause controls. No camera, microphone, login, or audience account is required for the core presentation.

If a remote asset cannot be licensed or downloaded, replace it with an accurately credited text reference or an original clearly labelled explanation. Never fabricate the historical image.

### 7.6 Acceptance criteria for Codex

1. Both the 30-minute and 15-minute routes run locally with documented commands and a lockfile.
2. All historical dates and proper names match the factual guardrails and source registry.
3. Every demo has a clear purpose, predictable reset, keyboard controls where applicable, and a static fallback.
4. Returning to a slide neither duplicates a canvas nor leaks animation loops or listeners.
5. No demo animation continues unnecessarily on inactive slides.
6. Code changes and visual changes correspond. No unrelated animation disguises a broken example.
7. Navigation works before, during, and after using controls.
8. The deck remains legible on a 16:9 projector at 1280×720 and 1920×1080.
9. A network-disabled rehearsal works after dependencies and assets are prepared.
10. PDF export contains meaningful demo snapshots and readable credits, with no blank canvases.
11. All artworks and screenshots have checked credits and reuse status recorded in `sources.md`.
12. Local event metadata is verified from organizer materials. Do not use an inferred weekday or venue.

## 8. Historical asset shortlist

These are retrieval starting points, not cleared image licenses. Open the relevant collection record and record the actual rights statement before reproducing an asset. Public visibility is not permission.

| Candidate | Why it helps | Source | Asset instruction |
| --- | --- | --- | --- |
| Laposky, *Oscillon 40*, 1952 | Distinguishes electronic imagery from later digital coding | S01 | Caption analog oscilloscope photograph accurately |
| Molnár, *Interruptions*, 1969 | Procedures, gaps, plotter marks | S04 | Retain work identity and rights credit |
| Sutherland using Sketchpad | Makes direct manipulation tangible | S05 and CHM image record | Check photo credit, crop conservatively |
| *Cybernetic Serendipity* poster | Places computer art within public exhibition culture | S06 | Identify curator and exhibition year |
| Early Processing sketchbook/PDE images | Shows the project's original setting | S09–S10 | Confirm credit for the specific image |
| McCarthy portrait | Recognizes p5.js authorship | S13–S14 | Use an authorized portrait |
| First PCD photograph | Gives the community a human presence | S18–S19 | Verify photographer and reuse conditions |
| PCD 2019 identity by Yuehao Jiang | Connects distributed gatherings and zine aesthetics | S20 | Credit the visual artist and verify reuse |
| Presenter-owned plotter work | Connects historical marks to current local practice | Organizer-supplied | Use the actual title/year, never guess |

Asset record template: creator; title; date; medium; collection/source URL; photographer if relevant; license/permission; required credit; local filename; slide number; retrieval date.

## 9. Questions likely to come from the audience

**Is Processing a language or a library?** In the classic context, people use “Processing” for a language/API, an environment, and a larger project. Its Java mode simplifies and extends a Java-based workflow for sketches. p5.js is a JavaScript library. Clarify the context rather than forcing one answer to cover every use.

**Do I have to learn Processing before p5.js?** No. The concepts overlap, and either can be an entry point. The choice depends on the intended environment and project. For this browser presentation, p5.js is a practical implementation choice.

**Does the computer make the art?** Discuss how authorship operates through rules, parameters, inputs, selection, and presentation. Different artists distribute agency differently. Avoid presenting one philosophical answer as settled fact.

**Is generative art AI art?** Generative systems can use hand-authored deterministic rules, chance, or learned models. Explain the specific mechanism in each example.

**Can I remix anything I find?** Inspect the actual license and attribution requirements, including external assets. An available source file and a fork button do not imply unrestricted rights.

**Is p5.js a replacement for Processing?** It is a related project with a different language and environment. Discuss fit and shared concepts rather than a universal replacement.

**What should I make first?** Make a field of marks, change one parameter, then connect one input. Keep the first study small enough to understand and share.

## 10. Source registry

All URLs below were retrieved or checked through web research on 23 October 2026. Most are project documentation, first-person accounts, museum records, or contemporary announcements. Each source note specifies its role. This file paraphrases rather than reproduces long source passages.

### Art history

- **S01 — V&A, “Digital art.”** https://www.vam.ac.uk/articles/digital-art — Museum overview for Laposky, laboratories, plotters, and material context. Useful collection links; avoid inheriting overly broad claims about every computer setup.
- **S02 — Digital Art Museum, “Georg Nees: a conversation between Wolf Lieser and Frieder Nake.”** https://dam.org/museum/nees-talk-nake/ — First-person historical discussion, recorded July 2022, published October 2022. Supports early exhibitions and Nees's context.
- **S03 — Computer History Museum, “Technology + Art.”** https://computerhistory.org/exhibits/technology-art/ — Museum documentation of Noll, Bell Labs, choreography, and the 1965 public exhibition.
- **S04 — V&A, “Cataloguing Change: Women, Art and Technology.”** https://www.vam.ac.uk/content/journals/research-journal/issue-no.-6-summer-2014/cataloguing-change-women%2C-art-and-technology/ — Museum research on Molnár, *machine imaginaire*, computer use in 1968, and *Interruptions*.
- **S05 — Ivan E. Sutherland, “Sketchpad: a man-machine graphical communication system,” 1963.** https://doi.org/10.1145/1461551.1461591 — Original research publication. Image context: https://www.computerhistory.org/revolution/computer-graphics-music-and-art/15/209/1878
- **S06 — ICA, editions/publications record for Cybernetic Serendipity.** https://www.ica.art/media/09013.pdf — Institution's record of curator and exact 1968 exhibition dates. Companion curator account: https://www.studiointernational.com/index.php/cybernetic-serendipity-getting-rid-of-preconceptions-jasia-reichardt
- **S07 — Whitney Museum, “Harold Cohen: AARON.”** https://whitney.org/exhibitions/harold-cohen-aaron — Museum exhibition research on conception, naming, and artistic knowledge. Technical/artwork context: https://whitney.org/exhibitions/harold-cohen-aaron/art

### Processing and its related projects

- **S08 — Processing, “Overview.”** https://processing.org/overview/ — Official statement of beginnings, first-release anniversary, free/open-source status, visual education, and community. The page includes older contextual statistics; this brief does not use them as 2026 measurements.
- **S09 — Processing Foundation, “A History of Processing.”** https://processingfoundation.org/about/history/ — Official lineage, DBN, Foundation, and anniversary. **Contains the 2005/1.0 conflict discussed above.**
- **S10 — Casey Reas and Ben Fry, “A Modern Prometheus,” 29 May 2018.** https://medium.com/processing-foundation/a-modern-prometheus-59aed94abe85 — Founders' retrospective. Primary source for sketching philosophy and the language/environment/community framing.
- **S11 — Casey Reas and Ben Fry, “Processing Overview” tutorial.** https://processing.org/tutorials/overview/ — Official tutorial explaining Java relationship, visual prototyping, and feedback.
- **S12 — Processing, “Environment.”** https://processing.org/environment/ — Official PDE documentation for editor, Run/Stop, examples, and sketch workflow.
- **S13 — p5.js, “People.”** https://p5js.org/people/ — Official attribution of p5.js to Lauren Lee McCarthy in 2013, reinterpretation for the web, and ongoing community stewardship.
- **S14 — p5.js, “About.”** https://p5js.org/about/ — Official project description, community statement, access values, and Web Editor creator credit.
- **S15 — Sinan Ascioglu, “OpenProcessing.”** https://wiredpieces.com/openprocessing/ — Founder's account dating the project to March 2008. Do not use its older platform totals or blanket license wording as current universal policy. Foundation corroboration of founder and 2008 context: https://processingfoundation.org/people/sinan-ascioglu/
- **S16 — OpenProcessing homepage.** https://openprocessing.org/ — Primary source for current platform functions, p5.js editor, sharing, forks, classes, and availability of privacy/premium features. Avoid quoting mutable pricing or counts.
- **S17 — The Coding Train, “About.”** https://thecodingtrain.com/about — Primary source for Daniel Shiffman, video beginnings, channel launch, and learning community.
- **S22 — Wiring, “About” and “Copyright.”** https://mail.wiring.org.co/about.html and https://mail.wiring.org.co/copyright.html — Project's historical account naming Hernando Barragán, 2003, and Processing as a basis. These are historical pages, not evidence of current support status.
- **S23 — p5.js reference, `randomSeed()`.** https://p5js.org/reference/p5/randomSeed/ — Technical primary source for repeating pseudorandom sequences. During implementation also consult https://p5js.org/reference/p5/noiseSeed/ and https://p5js.org/reference/p5/noise/ against the installed version; these two additional reference URLs are implementation follow-up links, not separately inspected source evidence here.
- **S24 — p5.js reference, `describe()`.** https://p5js.org/reference/p5/describe/ — Technical primary source for screen-reader-accessible canvas descriptions.
- **S25 — Arduino Blog, “Processing 1.0,” 25 November 2008.** https://blog.arduino.cc/2008/11/25/processing-10/ — Contemporary republication of Reas and Fry's announcement, which states the launch date as 24 November 2008. Preferred over the conflicting later timeline entry.

### Processing Community Day

- **S18 — Processing Foundation, “Presenters at Processing Community Day,” 16 October 2017.** https://processingfoundation.org/blog/presenters-at-processing-community-day/ — Contemporary announcement identifying the first event and date, with Taeyoon Choi as organizer.
- **S19 — Taeyoon Choi, “After Processing Community Day,” 7 February 2018.** https://medium.com/processing-foundation/after-processing-community-day-8e124b1ec85e — Organizer's retrospective corroborating 21 October 2017, MIT Media Lab, and participant context.
- **S20 — Processing Foundation, “Breaking the Screen,” 5 November 2018.** https://processingfoundation.org/blog/breaking-the-screen/ — Interview by Xin Xin with Yuehao Jiang concerning PCD 2019, distributed identity, and zine-related visual ideas. Announced community totals are not verified final attendance totals.
- **S21 — Processing Foundation, “Processing Community Day.”** https://processingfoundation.org/programs/processing-community-day/ — Current official description of independent local organization and distributed gatherings. Avoid turning current website counts into timeless facts.

### Slidev documentation

- **S26 — “Components in Slides.”** https://sli.dev/guide/component — Official custom Vue component integration.
- **S27 — “Syntax Guide.”** https://sli.dev/guide/syntax — Official Markdown, headmatter, slide separators, code blocks, and notes.
- **S28 — “Animation.”** https://sli.dev/guide/animations — Official `v-click` and reveal behavior. Check installed version before relying on more elaborate animation APIs.
- **S29 — “Exporting.”** https://sli.dev/guide/exporting — Official export formats and limitation of interactivity in exported documents.

## 11. Paste-ready instruction for Codex

Copy the following into Codex alongside this file:

> Build an interactive Slidev presentation using `PCD_2026_Processing_Research_and_Slidev_Brief.md` as the research and production specification. Create the 24-slide, 30-minute version and the curated 15-minute route. Keep the source-backed historical facts accurate, including the first PCD on 21 October 2017 at MIT Media Lab and Processing 1.0 on 24 November 2008. Keep detailed explanations in presenter notes and use concise on-screen copy. Implement the original teaching demos as reusable Vue components with p5.js instance mode, deterministic resets, proper lifecycle cleanup, keyboard controls, reduced-motion support, and static export fallbacks. Label simulations and contemporary teaching examples accurately. Bundle permitted assets locally, record artwork rights and credits, and avoid required remote embeds. Use the English copy unless I request Turkish. Start by inspecting the project and checking the official documentation for the dependency versions you install. Build and rehearse both routes, inspect slide layout and demo behavior, test offline operation, and export a meaningful PDF backup. Use placeholders for unprovided local event details and unapproved artwork assets, and report those clearly. Deliver source, lockfile, README, source/asset registry, and verified build/export instructions. Do not publish anything unless I ask.

