var model = {
    headerTemplate: '<header class="page-header"><!--顶部主标题-->' +
                    '<h1 class="lab-title"><a class="index-link" href="index.html">The SHI Lab</a></h1>' +
                    '<button id="hamburger" data-bind="click: toggleNav"></button>' +
                    '<div class="clearboth"></div></header>',
    navTemplate: '<!--导航栏--><nav class="navigation" data-bind="css: {open: navStatus() > 0}">' +
                 '<li class="nav-li"><a id="index-active" class="navlist-item" href="index.html">Home</a></li>' +
                 '<li class="nav-li"><a id="research-active" class="navlist-item" href="research.html">Research</a></li>' +
                 '<li class="nav-li"><a id="people-active" class="navlist-item" href="people.html">People</a></li>' +
                 '<li class="nav-li"><a id="publications-active" class="navlist-item" href="publications.html">Publications</a></li>' +
                 '<li class="nav-li"><a id="structures-active" class="navlist-item" href="structures.html">Structures</a></li>' +
                 '<li class="nav-li"><a id="labevents-active" class="navlist-item" href="labevents.html">Lab Events</a></li></nav>',

    footerTemplate: '<!--底部--><footer class="page-footer">' +
                    '<p class="address">Medical Building, Tsinghua University, Haidian District, Beijing, 100084</p>' +
                    '<a class="lab-website" href="">©2016 The Shi Laboratory</a>' +
                    '<table class="footer-table"><tr class="footer-table-row">' +
                    '<td class="footer-item"><a href="http://www.tsinghua.edu.cn" target="_blank">Tsinghua University</a></td>' +
                    '<td class="footer-item" id="footer-mid-item"><a href="http://life.tsinghua.edu.cn" target="_blank">School of Life Sciences</a></td>' +
                    '<td class="footer-item"><a href="http://www.med.tsinghua.edu.cn" target="_blank">School of Medicine</a></td></tr></table>' +
                    '</footer>',

    goTopButton: '<button id="go-top"></button>',

    /* 首页所用数据，为3大structure */
    achievementsList: [
        {
            imgSrc: 'img/spliceosome.gif',
            vidSrc: 'img/video/spliceosome.mp4',
            title: 'pre-mRNA splicing',
            abstract: 'The structure of the intact spliceosome from ' +
                      '<span class="italic">S. pombe</span>' +
                      ' at 3.6 angstrom provides insights into the molecular mechanism of pre-mRNA splicing.',
            link: 'research.html?0'
        },
        {
            imgSrc: 'img/rSecretase.gif',
            vidSrc: 'img/video/rSecretase.mp4',
            title: 'Intramembrane',
            abstract: 'The structure of the four-component membrane complex γ-Secretase.',
            link: 'research.html?1'
        },
        {
            imgSrc: 'img/Apoptosis.gif',
            vidSrc: 'img/video/Apoptosis.mp4',
            title: 'Apoptosis',
            abstract: 'The structure of the mammalian Apaf-1 apoptosome.',
            link: 'research.html?2'
        }
    ],

    /* research页面, 3大structure的详细信息 */
    achievementsDetail: [
        {
            imgSrc: 'img/spliceosome.gif',
            vidSrc: 'img/video/spliceosome.mp4',
            short: 'Spliceosome',
            title: 'Structural basis of pre-mRNA splicing',
            details: [
                '<span class="italic bold">Gene expression in all eukaryotes consists of three essential steps: transcription of DNA ' +
                'into pre-mRNA, splicing of pre-mRNA into mature mRNA, and translation of mature mRNA into protein.</span> ' +
                'These steps constitute the core principle of Central Dogma in molecular biology. Each pre-mRNA contains a distinct ' +
                'number of the coding exons and the intervening non-coding introns, each with a varying length and unique sequence.' +
                'Aberrant splicing contributes to numerous debilitating diseases. Splicing of pre-mRNA is executed by the spliceosomes, ' +
                'which consist of five small nuclear ribonucleoprotein particles (snRNPs) and a large number of associated enzymes and ' +
                'cofactors. The spliceosome exhibits exceptional compositional dynamics and conformational flexibility, consistent with ' +
                'its function of splicing introns with diverse sequences. We have determined the three-dimensional structure of a ' +
                '<span class="italic">Schizosaccharomyces pombe</span> spliceosome at 3.6-Å resolution and elucidated the structural basis of pre-mRNA splicing. ' +
                '<span class="italic">[<a class="paper-link" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Science%2C+349%2C+1182%E2%80%9391+(2015)" target="_blank">' +
                'Science, 349, 1182–91 (2015)</a>; <a class="paper-link" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Science%2C+349%2C+1191%E2%80%938+(2015)" ' +
                'target="_blank">Science, 349, 1191–8 (2015)</a>]</span>',

                '<span class="italic bold">The resolved yeast spliceosome contains U2 snRNP, U5 snRNP, nineteen complex (NTC), NTC related ' +
                'complex (NTR), U6 snRNA, and an RNA intron lariat.</span> The atomic model includes 10,574 amino acids from 37 proteins and 4 ' +
                'RNA molecules, with a combined molecular mass of approximately 1.3 mega-Daltons. In the structure, U5 snRNP acts as a central ' +
                'scaffold onto which U6 and U2 snRNAs are intertwined to form a catalytic center next to Loop I of U5 snRNA. The catalytic magnesium ' +
                'ions are coordinated by conserved nucleotides in U6 snRNA. The intron lariat is held in place through base pairing interactions with ' +
                'both U2 and U6 snRNAs, leaving the variable-length middle portion on the solvent-accessible surface of the catalytic center. The ' +
                'protein components of the spliceosome anchor both 5’- and 3’-ends of the U2 and U6 snRNAs away from the active site, direct the RNA ' +
                'sequences, and allow sufficient flexibility between the ends and the catalytic center. Thus, the spliceosome is in essence a ' +
                'protein-directed ribozyme, with the protein components essential for the delivery of critical RNA molecules into close proximity ' +
                'of one another at the right time for the splicing reaction.'
            ]
        },
        {
            imgSrc: 'img/rSecretase.gif',
            vidSrc: 'img/video/rSecretase.mp4',
            short: 'γ-Secretase',
            title: 'Alzheimer\'s Disease (AD) and Regulated Intramembrane Proteolysis (RIP)',
            details: [
                '<span class="italic bold">In the last decade, we have focused on the structural and mechanistic elucidation of the regulated intramembrane ' +
                'proteolysis (RIP).</span> RIP is a conserved signaling mechanism, whereby the hydrolysis of a membrane-embedded peptide bond is carried out ' +
                'by an integral membrane protease (or intramembrane-cleaving proteases, I-CLiPs). I-CLiPs participate in a wide range of cellular activities ' +
                'and pathophysiological events. On the basis of catalytic mechanism, four classes of I-CLiPs have been identified: the rhomboid serine ' +
                'protease, the zinc-containing site-2 metalloprotease (S2P), the Rce1-type glutamyl protease, and the aspartyl protease exemplified by signal ' +
                'peptide peptidase (SPP) and γ-secretase. RIP plays a pivotal role in a multitude of physiological and pathophysiological processes ' +
                'exemplified by sterol homeostasis and Alzheimer’s disease.',

                '<span class="italic bold">For three of the four classes of I-CLiPs (except Rce1-type glutamyl proteases), the substrate is a transmembrane ' +
                'segment and the hydrolytic cleavage occurs within the hydrophobic lipid bilayer.</span> Because a water molecule is required for scission ' +
                'of a peptide bond, one naturally asks the question of how water molecules gain access to the active sites of these membrane-embedded ' +
                'proteases. In addition, because the hydrophilic active site of an I-CLiP is presumably insulated from the hydrophobic membrane environment, ' +
                'how does a substrate protein gain access to the active site? Are large-scale conformational changes in an I-CLiP a pre-requisite for ' +
                'substrate binding? If so, how are these changes regulated? Addressing these mechanistic questions requires detailed structural information.',

                '<h3 class="item-title">Contents</h3>',

                '<ul class="indices-list"><li class="indices-item"><a href="#item1">Structural elucidation of γ-secretase and disease mechanism of AD</a></li>' +
                '<li class="indices-item"><a href="#item2">Structural and mechanistic investigations of intramembrane metalloprotease S2P</a></li>' +
                '<li class="indices-item"><a href="#item3">Structural determination of the rhomboid protease GlpG</a></li></ul>',

                '<h3 class="item-title" id="item1">Structural elucidation of γ-secretase and disease mechanism of AD</h3>',

                'In 2012, we for the first time determined the crystal structure of an archaeal homologue of presenilin, PSH, which reveals a novel protein ' +
                'fold. A homology model for human PS1 was built, which provides a framework for the mechanistic understanding of presenilin as well as ' +
                'interpretation of disease-related mutations [<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Nature+493%2C+56%E2%80%9361+(2012)" ' +
                'target="_blank">Nature 493, 56–61 (2012)</a>]. In 2014, using the new-generation EM methods, we obtained the 4.5 Å resolution structure of the ' +
                'entire human γ-secretase [<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Nature%2C+525%2C+212%E2%80%937+(2015)" ' +
                'target="_blank">Nature, 525, 212–7 (2015)</a>], which for the first time reveals the architecture of this intriguing 4-subunit membrane complex. A ' +
                'few months later, we determined the high-resolution crystal structure of the extracellular domain of a eukaryotic γ-secretase, which provides ' +
                'important insight into substrate recruitment as well as the complex assembly [<a class="paper-link italic" ' +
                'href="http://www.ncbi.nlm.nih.gov/pubmed/?term=PNAS%2C+111%2C+13349%E2%80%9354+(2014)" target="_blank">PNAS, 111, 13349–54 (2014)</a>]. Most ' +
                'recently, we further pushed the resolution of the EM structure of a T4 lysozyme fused human γ-secretase to 4.3 Å, which allowed unambiguous ' +
                'assignment of the transmembrane components, PS1, Pen-2, Aph-1, and Nicastrin [<a class="paper-link italic" href= ' +
                '"http://www.ncbi.nlm.nih.gov/pubmed/?term=PNAS%2C+112%2C+6003%E2%80%938+(2015)" target="_blank">PNAS, 112, 6003–8 (2015)</a>]. In collaboration ' +
                'with Drs. Xiaochen Bai and Sjors Scheres at the Laboratory of Molecular Biology MRC, we elucidated the structure of human γ-secretase at 3.4-Å ' +
                'resolution, which allows atomic modeling of all four components and structure-based understanding of AD-derived mutations [' +
                '<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Nature%2C+525%2C+212%E2%80%937+(2015)" target="_blank">Nature, 525, 212–7 (2015)' +
                '</a>]. These structural and biochemical characterizations serve as an important reference to the mechanistic understanding of AD.',

                '<h3 class="item-title" id="item2">Structural and mechanistic investigations of intramembrane metalloprotease S2P</h3>',

                'The site-2 protease (S2P) family is an important signaling mechanism conserved from bacteria to humans. In mammals, the S2P metalloprotease is a ' +
                'key player in the SREBP pathway, which controls the cellular homeostasis of sterols. In bacteria, the S2P protease participates in the unfolding ' +
                'responses of outer membrane proteins.',

                'We determined the crystal structure of the transmembrane core domain of an S2P metalloprotease from <span class="italic">Methanocaldococcus ' +
                'jannaschii</span>. The protease ' +
                'consists of six transmembrane segments, with the catalytic zinc atom coordinated by two histidine residues and one aspartate residue approximately ' +
                '14 angstroms into the lipid membrane surface. The protease exhibits two distinct conformations in the crystals. In the closed conformation, the active ' +
                'site is surrounded by transmembrane helices and is impermeable to substrate peptide; water molecules gain access to zinc through a polar, central ' +
                'channel that opens to the cytosolic side. In the open conformation, transmembrane helices alpha1 and alpha6 separate from each other by 10 to 12 ' +
                'angstroms, exposing the active site to substrate entry. The structure reveals the molecular basis for water access and substrate entrance to the ' +
                'catalytic sides and elucidates how zinc embedded in an integral membrane protein can catalyze peptide cleavage. [<a class="paper-link italic" ' +
                'href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Science+318%2C+1608%E2%80%9312+(2007)" target="_blank">Science 318, 1608–12 (2007)</a>]',

                'As the name indicates, S2P cleavage must be preceded by the action of the Site-1 protease (S1P). To decipher the underlying mechanism, we reconstituted ' +
                'sequential, <span class="italic">in vitro</span> cleavages of the <span class="italic">Escherichia coli</span> transmembrane protein RseA by DegS (S1P) ' +
                'and RseP (S2P). After DegS cleavage, the newly exposed ' +
                'carboxyl-terminal residue Val-148 of RseA plays an essential role for RseP cleavage, and its mutation to charged or dissimilar amino acids crippled the ' +
                'Site-2 cleavage. By contrast, the identity of residues 146 and 147 of RseA has no impact on Site-2 cleavage. These results explain why Site-1 cleavage ' +
                'must precede Site-2 cleavage. Structural analysis reveals that the putative peptide-binding groove in the second, but not the first, PDZ domain of RseP ' +
                'is poised for binding to a single hydrophobic amino acid. These observations suggest that after DegS cleavage, the newly exposed carboxyl terminus of ' +
                'RseA may facilitate Site-2 cleavage through direct interaction with the PDZ domain. [<a class="paper-link italic" ' +
                'href="http://www.ncbi.nlm.nih.gov/pubmed/?term=PNAS%2C+106%2C+14837%E2%80%9342+(2009)" target="_blank">PNAS, 106, 14837–42 (2009)</a>]',

                '<h3 class="item-title" id="item3">Structural determination of the rhomboid protease GlpG</h3>',

                'The rhomboid protein was originally identified to play an essential role in the epidermal growth factor receptor (EGFR) signaling in <span class="italic">' +
                'Drosophila</span> and was quickly realized to be a member of a highly conserved family of intramembrane proteases. We obtained the crystal structure of ' +
                'the transmembrane core domain of GlpG, a rhomboid-family intramembrane serine protease from <span class="italic">Escherichia coli</span>. The protein ' +
                'contains six transmembrane helices, with the catalytic Ser201 located at the N terminus of helix alpha4 approximately 10 Å below the membrane surface. ' +
                'Access to water molecules is provided by a central cavity that opens to the extracellular region and converges on Ser201. One of the two GlpG molecules ' +
                'in the asymmetric unit has an open conformation at the active site, with the transmembrane helix alpha5 bent away from the rest of the molecule. ' +
                'Structural analysis suggests that substrate entry to the active site is probably gated by the movement of helix alpha5, which was supported by our ' +
                'subsequent biochemical characterizations. [<a class="paper-link italic" ' +
                'href="http://www.ncbi.nlm.nih.gov/pubmed/?term=NSMB+13%2C+1084%E2%80%9391+(2006)" target="_blank">NSMB 13, 1084–91 (2006); PNAS, 104, 8257–62 (2007)</a>]'
            ]
        },
        {
            imgSrc: 'img/Apoptosis.gif',
            vidSrc: 'img/video/Apoptosis.mp4',
            short: 'Apoptosis',
            title: 'Apoptosis (Programmed Cell Death)',
            details: [
                '<span class="italic bold">The Shi Laboratory has been working on apoptosis for nearly two decades.</span> We elucidated the functional mechanisms of ' +
                'several key classes of proteins that regulate and execute apoptosis, a form of cell death that plays essential roles in the development of multi-cellular ' +
                'organisms and in preventing diseases such as cancer and autoimmune disorders. The execution of apoptosis is evolutionarily conserved among metazoans, ' +
                'culminating in activation of a cascade of cell-killing intracellular proteases known as caspases. Our work reveals how apoptosome is assembled, how ' +
                'caspases are activated by an activating complex (Apaf-1), how they are inhibited by inhibitor of apoptosis proteins (IAPs), and how the inhibition is ' +
                'derepressed by Smac-like proteins. Our work not only provides molecular understanding on how this complex network functions, but also how the process ' +
                'is differentially regulated evolutionarily to achieve the common outcome of cell death in these experimental systems.',

                '<h3 class="item-title">Contents</h3>',

                '<ul class="indices-list"><li class="indices-item"><a class="item-name" href="#item1">Background on apoptosis</a></li>' +
                '<li class="indices-item"><a class="item-name" href="#item2">Mechanistic understanding of the mammalian apoptosis pathway</a>' +
                    '<ul class="inside-list"><li class="inside-item"><a href="#item2.1">Structural basis for the auto-inhibition of Apaf-1</a></li>' +
                    '<li class="inside-item"><a href="#item2.2">Structural basis for the assembly of Apaf-1 apoptosome</a></li>' +
                    '<li class="inside-item"><a href="#item2.3">Structural basis of procaspase-9 recognition by Apaf-1</a></li>' +
                    '<li class="inside-item"><a href="#item2.4">Biochemical mechanism of caspase-9 activation by Apaf-1</a></li>' +
                    '<li class="inside-item"><a href="#item2.5">Mechanism of caspase-9 activation</a></li>' +
                    '<li class="inside-item"><a href="#item2.6">Molecular mechanism of procaspase activation and substrate binding</a></li>' +
                    '<li class="inside-item"><a href="#item2.7">Structural and biochemical basis of apoptotic activation by Smac/DIABLO</a></li>' +
                    '<li class="inside-item"><a href="#item2.8">Structural basis of IAP recognition by Smac/DIABLO</a></li>' +
                    '<li class="inside-item"><a href="#item2.9">Structural basis of the pro-apoptotic function of mitochondrial serine protease HtrA2/Omi</a></li>' +
                    '<li class="inside-item"><a href="#item2.10">Molecular mechanism of caspase-9 inhibition by XIAP</a></li>' +
                    '<li class="inside-item"><a href="#item2.11">Molecular mechanism of caspase-7 inhibition by XIAP</a></li></ul></li>' +
                '<li class="indices-item"><a class="item-name" href="#item3">Mechanistic understanding of the Drosophila apoptosis pathway</a>' +
                    '<ul class="inside-list"><li class="inside-item"><a href="#item3.1">Structure of the Dark apoptosome</a></li>' +
                    '<li class="inside-item"><a href="#item3.2">The activation mechanism of the initiator caspase Dronc</a></li>' +
                    '<li class="inside-item"><a href="#item3.3">Structural basis of DIAP1 recognition by the <span class="italic">Drosophila</span> proteins Hid/Grim/Reaper</a></li>' +
                    '<li class="inside-item"><a href="#item3.4">Molecular mechanisms of Reaper/Grim/Hid-mediated activation of Drosophila caspases ' +
                    'through antagonizing DIAP1</a></li></ul></li>' +
                '<li class="indices-item"><a class="item-name" href="#item4">Mechanistic understanding of programmed cell death in <span class="italic">C. elegans</span></a>' +
                    '<ul class="inside-list"><li class="inside-item"><a href="#item4.1">Structural and Biochemical Basis of CED-9 ' +
                    'Recognition by the Pro-apoptotic Proteins EGL-1 and CED-4</a></li>' +
                    '<li class="inside-item"><a href="#item4.2">Functional insights from the structure of the CED-4/CED-9 complex</a></li>' +
                    '<li class="inside-item"><a href="#item4.3">Biochemical reconstitution of CED-3 activation in vitro</a></li>' +
                    '<li class="inside-item"><a href="#item4.4">Structural Basis of CED-4-mediated activation of CED-3</a></li></ul></li></ul>',

                '<h3 class="item-title" id="item1">Background on apoptosis</h3>',

                '<span class="italic bold">Apoptosis, executed by caspases (cysteine proteases with aspartate substrate specificity), plays a central role in the ' +
                'development and homeostasis of all multi-cellular organisms.</span> In mammals, the BH3-only proteins (such as Bid and Bim) transduce the signal ' +
                'to mitochondria after receiving apoptotic stimuli (Figure 1). The release of mitochondrial proteins (such as cytochrome c) is mediated by Bak and ' +
                'Bax, the pro-apoptotic members of the Bcl-2 family of proteins. Once in the cytosol, cytochrome c associates with Apaf-1 in the presence of dATP ' +
                'or ATP, which further mediates the activation of the initiator caspase-9. The activated caspase-9 in turn cleaves and activates the effector ' +
                'caspases, caspase-3 and caspase-7. In normal cells, the Inhibitor of Apoptosis proteins (IAPs) suppress apoptosis by inhibiting the enzymatic ' +
                'activity of mature caspases. In cells undergoing apoptosis, another protein Smac (also known as DIABLO) is also released from the mitochondria ' +
                'into the cytosol together with cytochrome c. Whereas cytochrome c interacts directly with Apaf-1 to activate procaspase-9, Smac eliminates the ' +
                'inhibitory effect of multiple IAPs. In addition to Smac and cytochrome c, a few other pro-apoptotic proteins are also released from mitochondria ' +
                'into the cytosol to facilitate cell death, including Omi/HtrA2, AIF, and EndoG (Figure 1).',

                '<span class="italic bold">The apoptosis pathway shares considerable similarity among worms, fruit flies, and mammals (Figure 1).</span> Genetic ' +
                'analysis in <span class="italic">C. elegans</span> led to the identification of four genes, <span class="italic">egl-1, ced-9, ced-4,</span> ' +
                'and <span class="italic">ced-3</span>, that collectively control the death of 131 somatic cells during hermaphrodite development. The protein ' +
                'products of these four genes define a linear pathway (Figure 1). CED-3, a caspase, is synthesized as an inactive zymogen. When the cells are ' +
                'programmed to die, the CED-3 zymogen is thought to be activated by the adaptor molecule CED-4. In normal cells, the pro-apoptotic protein CED-4 ' +
                'is sequestered by the mitochondria-bound protein CED-9, thus unable to activate CED-3. During cell death, the inhibitory CED-4/CED-9 interaction ' +
                'is disrupted by the pro-apoptotic protein EGL-1, which is transcriptionally activated in cells destined to die. CED-3, CED-4, CED-9, and EGL-1 ' +
                'are the functional homologues of the mammalian protein caspase-9, Apaf-1, Bcl-2/Bcl-xL, and the BH3-only proteins, respectively (Figure 1). In ' +
                '<span class="italic">Drosophila</span>, Dark (also known as Dapaf-1 or HAC-1) shares significant sequence similarity with the mammalian Apaf-1 ' +
                'and is important for the activation of the initiator caspase Dronc (Figure 1). Dronc, in turn, cleaves and activates the effector caspase Drice. ' +
                'Dronc and Drice share considerable sequence similarity with, and are the functional homologues of, caspase-9 and caspase-3, respectively. In ' +
                'analogy to IAPs in mammals, DIAP1 suppresses apoptosis in fruit flies by inhibiting the functions of Dronc and Drice. The pro-apoptotic proteins ' +
                'Reaper, Hid, Grim, and Sickle (known as the RHG proteins) are the functional homologues of the mammalian protein Smac.',

                '<h3 class="item-title" id="item2">Mechanistic understanding of the mammalian apoptosis pathway</h3>',

                '<span class="italic bold" id="item2.1">1. Structural basis for the auto-inhibition of Apaf-1.</span> The apoptotic protease activating factor 1 (Apaf-1) ' +
                'controls caspase activation downstream of mitochondria. During apoptosis, Apaf-1 binds to cytochrome c and in the presence of ATP/dATP forms ' +
                'an apoptosome, leading to the recruitment and activation of the initiator caspase, caspase-9. We determined the 2.2-Å crystal structure of an ' +
                'ADP-bound, WD40-deleted Apaf-1, which reveals the molecular mechanism by which Apaf-1 exists in an auto-inhibited state before ATP binding. The ' +
                'amino-terminal caspase recruitment domain packs against a three-layered alpha/beta fold, a short helical motif and a winged-helix domain, ' +
                'resulting in the burial of the caspase-9-binding interface. The deeply buried ADP molecule serves as an organizing centre to strengthen ' +
                'interactions between these four adjoining domains, thus locking Apaf-1 in an inactive conformation. We further demonstrated that Apaf-1 binds ' +
                'to and hydrolyses ATP/dATP and their analogues. The binding of triphosphate nucleotides appeared to drive conformational changes that are ' +
                'essential for the formation of the apoptosome and the activation of caspase-9. [<a class="paper-link italic" ' +
                'href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Nature+434%2C+926-933+(2005)" target="_blank">Nature 434, 926-933 (2005)</a>]',

                '<span class="italic bold" id="item2.2">2. Structural basis for the assembly of Apaf-1 apoptosome.</span> Upon binding to cytochrome c and dATP, ' +
                'Apaf-1 oligomerizes into a heptameric complex known as the apoptosome, which recruits and activates the initiator caspase, caspase-9. Using ' +
                'single-particle, cryo-electron microscopy (cryo-EM), we determined the atomic structure of an intact mammalian apoptosome at 3.8 Å resolution. ' +
                'Structural analysis, together with structure-guided biochemical characterization, uncovered how cytochrome c releases the autoinhibition of ' +
                'Apaf-1 through specific interactions with the WD40 repeats. Structural comparison with autoinhibited Apaf-1 revealed how dATP binding triggers ' +
                'a set of conformational changes that results in the formation of the apoptosome. These results constitute the molecular mechanism of cytochrome ' +
                'c- and dATP-mediated activation of Apaf-1. [<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Genes+%26+Dev.+29%2C+2349-61+(2015)"' +
                ' target="_blank">Genes & Dev. 29, 2349-61 (2015)</a>]',

                '<span class="italic bold" id="item2.3">3. Structural basis of procaspase-9 recognition by Apaf-1.</span> Procaspase-9 recruitment by Apaf-1 is ' +
                'central to its subsequent activation and a cascade of downstream events in the caspase-9-mediated apoptotic pathway (Figure 1). We determined ' +
                'the crystal structures of the caspase recruitment domain (CARD) of Apaf-1 by itself and in complex with the prodomain of procaspase-9. These ' +
                'studies revealed the structural mechanism of procaspase-9 recruitment by Apaf-1. [<a class="paper-link italic" ' +
                'href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Nature+399%2C+549-557+(1999)" target="_blank">Nature 399, 549-557 (1999)</a>; ' +
                '<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=PNAS+111%2C+13349-54+(2014)" target="_blank">PNAS 111, 13349-54 (2014)</a>]',

                '<span class="italic bold" id="item2.4">4. Biochemical mechanism of caspase-9 activation by Apaf-1.</span> Association with Apaf-1 is required ' +
                'to maintain the hyperactive state of the processed caspase-9. The underlying molecular mechanism remains unknown. We discovered that the ' +
                'isolated CARD domain of Apaf-1 forms a ~400-kDa hetero-oligomer with the active caspase-9. The catalytic activity of caspase-9 is significantly ' +
                'enhanced in this complex, demonstrating that Apaf-1 CARD allosterically up-regulates caspase-9 activity. Based on structural and biochemical ' +
                'data, we proposed that this hetero-oligomer faithfully recapitulates the three-dimensional arrangement of the apoptosome holo-enzyme. In ' +
                'addition, we showed that the proteolytic processing of the caspase-9 zymogen is required for the apoptosome-mediated activation. ' +
                '[<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=PNAS+99%2C+4197-4202+(2002)" target="_blank">PNAS 99, 4197-4202 (2002)</a>; ' +
                '<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=JBC+288%2C+15142-7+(2013)" target="_blank">JBC 288, 15142-7 (2013)</a>]',

                '<span class="italic bold" id="item2.5">5. Mechanism of caspase-9 activation.</span> The mechanism of initiator caspase activation has been ' +
                'generalized by the Induced Proximity model, which is thought to drive dimerization-mediated activation of caspases. The initiator caspase, ' +
                'caspase-9, exists predominantly as a monomer in solution. To examine the Induced Proximity model, we engineered a constitutively dimeric ' +
                'caspase-9 by relieving steric hindrance at the dimer interface. We then determined the crystal structure of the engineered caspase-9, which ' +
                'was found to closely resemble that of the wild type (WT) caspase-9, including all relevant structural details and the asymmetric nature of ' +
                'two monomers. Compared to the WT caspase-9, this engineered dimer exhibits a higher level of catalytic activity <span class="italic">in vitro</span>' +
                ' and induces more ' +
                'efficient cell death when expressed. However, the catalytic activity of the dimeric caspase-9 is only a small fraction of that for the ' +
                'Apaf-1-activated caspase-9. Furthermore, in contrast to the WT caspase-9, the activity of the dimeric caspase-9 can no longer be significantly ' +
                'enhanced in an Apaf-1-dependent manner. These findings suggest that dimerization of caspase-9 may be qualitatively different from its activation ' +
                'by Apaf-1, and in conjunction with other evidence, posit an Induced Conformation model for the activation of initiator caspases. ' +
                '[<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=PloS+Biology+3+(6)%3A+e183+(2005)" target="_blank">PloS Biology 3 (6): e183 (2005)</a>]',

                '<span class="italic bold" id="item2.6">6. Molecular mechanism of procaspase activation and substrate binding.</span> We determined the first ' +
                'crystal structure of a procaspase zymogen, procaspase-7. Compared to the active caspase-7 bound to inhibitors, procaspase-7 zymogen exhibits ' +
                'significant structural differences surrounding the catalytic cleft, which precludes the formation of a productive active site conformation. ' +
                'We also solved the first structure of an active caspase, caspase-7, without any bound inhibitors. Surprisingly, this structure exhibits a ' +
                'large structural difference at the active site compared to caspase-7 bound to an inhibitor. Comparison of these relevant structures revealed ' +
                'that the proteolytic cleavage between the large and small subunits allows rearrangement of three essential loops in the active site, priming ' +
                'active caspase-7 for inhibitor/substrate binding. Strikingly, binding by inhibitors causes a 180-degree-flipping of the N-terminus in the ' +
                'small subunit, which interacts with and stabilizes the catalytic cleft. These analyses reveal the general mechanisms of caspase activation ' +
                'and demonstrate that the inhibitor/substrate binding may be a process of induced fit. ' +
                '[<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Cell+107%2C+399-407+(2001)" target="_blank">Cell 107, 399-407 (2001)</a>]',

                '<span class="italic bold" id="item2.7">7. Structural and biochemical basis of apoptotic activation by Smac/DIABLO.</span> The mitochondrial ' +
                'protein Smac/DIABLO plays an important role by countering IAP-mediated inhibition of caspases. We showed that Smac/DIABLO functions by ' +
                'relieving XIAP-mediated inhibition of both the initiator caspase, caspase-9, and the effector caspase, caspase-3 or -7, and that this function' +
                ' depends on the ability of Smac/DIABLO to physically interact with XIAP. We then determined the crystal structure of Smac/DIABLO, which reveals' +
                ' a homo-dimer. We demonstrated the functional significance of the dimer formation. Most importantly, we discovered the indispensable role of ' +
                'the N-terminal four amino acids in Smac/DIABLO, in analogy to the Drosophila proteins Reaper/Grim/Hid. We showed that a 7-residue peptide ' +
                'derived from the N-terminus of Smac was sufficient to remove XIAP-mediated inhibition of caspase-9 <span class="italic">in vitro</span>. ' +
                'Together, these studies establish ' +
                'an evolutionarily conserved structural and biochemical basis for the activation of apoptosis by Smac/DIABLO. These findings were made in close ' +
                'collaboration with the laboratory of Dr. Xiaodong Wang. [<a class="paper-link italic" href=' +
                '"http://www.ncbi.nlm.nih.gov/pubmed/?term=Nature+406%2C+855-862+(2000)"  target="_blank">Nature 406, 855-862 (2000)</a>]',

                '<span class="italic bold" id="item2.8">8. Structural basis of IAP recognition by Smac/DIABLO.</span> We determined the crystal structure of ' +
                'Smac/DIABLO in complex with the third BIR domain (BIR3) of XIAP. This structure reveals that the amino-terminal four amino acids ' +
                '(Ala-Val-Pro-Ile) in Smac/DIABLO recognize a surface groove on BIR3, with the first residue Ala playing an essential role. These observations ' +
                'provide a structural explanation to the indispensable role of the Smac amino-terminus as well as the conserved amino-terminal sequences in ' +
                'the Drosophila proteins Reaper/Grim/Hid/Sickle. In conjunction with published observations, our structural analysis revealed how Smac relieves ' +
                'IAP-mediated inhibition of caspase-9. These results provide a structural basis for rational drug design. ' +
                '[<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Nature+408%2C+1008-1012+(2000)" target="_blank">Nature 408, 1008-1012 (2000)</a>;' +
                ' <a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Molecular+Cancer+Therapeutics+13%2C+867-79+(2014)" target="_blank">' +
                'Molecular Cancer Therapeutics 13, 867-79 (2014)</a>]',

                '<span class="italic bold" id="item2.9">9. Structural basis of the pro-apoptotic function of mitochondrial serine protease HtrA2/Omi.</span> ' +
                'Similar to Smac/DIABLO, HtrA2/Omi, a mitochondrial serine protease, is also released into the cytosol during apoptosis and appears to play an ' +
                'important role. The mature HtrA2 protein contains a central serine protease domain and a C-terminal PDZ domain. We determined the crystal ' +
                'structure of HtrA2/Omi, which reveals the formation of a pyramid-shaped homo-trimer mediated exclusively by the serine protease domains. The ' +
                'peptide-binding pocket of the PDZ domain is buried in the intimate interface between the PDZ and the protease domains. Mutational analysis ' +
                'revealed that the PDZ domain modulates HtrA2/Omi-mediated cell death activity by regulating its serine protease activity. ' +
                '[<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Nature+Struct.+Biol.+9%2C+436-441+(2002)" target="_blank">Nature ' +
                'Struct. Biol. 9, 436-441 (2002)</a>]',

                '<span class="italic bold" id="item2.10">10. Molecular mechanism of caspase-9 inhibition by XIAP.</span> We determined the crystal structure ' +
                'of caspase-9 in an inhibitory complex with the third baculoviral IAP repeat (BIR3) of XIAP. The structure reveals that the BIR3 domain forms ' +
                'a hetero-dimer with a caspase-9 monomer. Strikingly, the surface of caspase-9 that interacts with BIR3 also mediates its homo-dimerization. ' +
                'We demonstrated that monomeric caspase-9 is catalytically inactive due to the absence of a supporting sequence element that could be provided ' +
                'by homo-dimerization. Thus XIAP sequesters caspase-9 in a monomeric state, which serves to prevent its catalytic activity. These studies, in ' +
                'conjunction with other observations, define a unified mechanism for the activation of caspases. ' +
                '[<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Mol.+Cell+11%2C+519-527+(2003)" target="_blank">Mol. Cell 11, 519-527 (2003)</a>]',

                '<span class="italic bold" id="item2.11">11. Molecular mechanism of caspase-7 inhibition by XIAP.</span> Among the effector caspases, caspases-3 and ' +
                '–7 share similar structures and identical substrate specificity. We determined the crystal structure of caspase-7 in complex with a fragment ' +
                'of XIAP that potently inhibits the activity of caspase-3 or –7. This is the first structure in which a caspase is bound to a natural ' +
                'protein/peptide inhibitor. Structural analysis reveals the precise molecular mechanisms of inhibition used by nature. Strikingly, despite a ' +
                'reversal of relative orientation, a subset of interactions between caspase-7 and XIAP closely resemble those between caspase-7 and its covalent ' +
                'inhibitor DEVD-CHO. This study provides a useful basis for the design of the next-generation caspase inhibitors. ' +
                '[<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Cell+104%2C+769-780+(2001)" target="_blank">Cell 104, 769-780 (2001)</a>]',

                '<h3 class="item-title" id="item3">Mechanistic understanding of the Drosophila apoptosis pathway</h3>',

                '<span class="italic bold" id="item3.1">1. Structure of the Dark apoptosome.</span> Apoptosis is executed by a cascade of caspase activation.' +
                ' The autocatalytic activation of an initiator caspase, exemplified by caspase-9 in mammals or its ortholog, Dronc, in fruit flies, is ' +
                'facilitated by a multimeric adaptor complex known as the apoptosome. We determined the electron cryomicroscopic (cryo-EM) structure of the ' +
                'intact apoptosome from <span class="italic">Drosophila melanogaster</span> at 4.0 Å resolution. Analysis of the Drosophila apoptosome, which ' +
                'comprises 16 molecules of the Dark protein (Apaf-1 ortholog), reveals molecular determinants that support the assembly of the 2.5-MDa complex.' +
                ' [<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Genes+%26+Dev.+29%2C+277-87+(2015)" target="_blank">Genes & Dev. 29, 277-87 (2015)</a>]',

                '<span class="italic bold" id="item3.2">2. The activation mechanism of the initiator caspase Dronc.</span> In the absence of dATP or ATP, Dronc ' +
                'zymogen potently induces formation of the Dark apoptosome, within which Dronc is efficiently activated. At 4.1 Å resolution, the cryo-EM structure' +
                ' of the Dark apoptosome bound to the caspase recruitment domain (CARD) of Dronc (Dronc-CARD) reveals two stacked rings of Dronc-CARD that are ' +
                'sandwiched between two octameric rings of the Dark protein. The specific interactions between Dronc-CARD and both the CARD and the WD40 repeats ' +
                'of a nearby Dark protomer are indispensable for Dronc activation. We also showed that that the autocatalytic cleavage of Dronc results in a ' +
                'drastic enhancement of its catalytic activity <span class="italic">in vitro</span>. The autocleaved Dronc forms a homodimer, whereas the ' +
                'uncleaved Dronc zymogen exists exclusively as a monomer. Thus the autocatalytic cleavage in Dronc induces its stable dimerization, which ' +
                'presumably allows the two adjacent monomers to mutually stabilize their active sites, leading to activation. Crystal structure of a ' +
                'prodomain-deleted Dronc zymogen, determined at 2.5 Å resolution, reveals an unproductive conformation at the active site, which is consistent ' +
                'with the observation that the zymogen remains catalytically inactive. These findings reveal important mechanistic insights into the ' +
                'apoptosome-facilitated activation of initiator caspase and suggest diverse mechanisms for the activation of initiator caspases. ' +
                '[<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=JBC%2C+281%2C+8667-74+(2006)" target="_blank">JBC, 281, 8667-74 (2006)</a>; ' +
                '<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Genes+%26+Dev.+29%2C+277-87+(2015)" target="_blank">Genes & Dev. 29, 277-87 (2015)</a>]',

                '<span class="italic bold" id="item3.3">3. Structural basis of DIAP1 recognition by the Drosophila proteins Hid/Grim/Reaper.</span> The Inhibitor of ' +
                'Apoptosis protein DIAP1 suppresses apoptosis in Drosophila. Four proteins, Hid, Grim, Reaper, and Sickle, promote apoptosis, in part by ' +
                'binding to DIAP1 through their conserved N-terminal sequences. We determined 6 crystal structures: DIAP1-BIR2 by itself and in complex with ' +
                'the N-terminal peptides from Hid, Grim, and Sickle, and DIAP1-BIR1 in complex with the N-terminal peptides from Reaper and Grim. Our study ' +
                'reveals the structural conservation and diversity necessary for the binding of IAPs by the Drosophila Hid/Grim/Reaper/Sickle and the mammalian Smac proteins. ' +
                '[<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Mol.+Cell.+8%2C+95-104+(2001)" target="_blank">Mol. Cell. 8, 95-104 (2001)</a>;' +
                ' <a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Curr.+Biol.+12%2C125-130+(2002)" target="_blank">Curr. Biol. 12,125-130 (2002)</a>;' +
                ' <a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Nature+Struct.+Mol.+Biol.+11%2C+420%E2%80%93428+(2004)" target="_blank">' +
                'Nature Struct. Mol. Biol. 11, 420–428 (2004)</a>]',

                '<span class="italic bold" id="item3.4">4. Molecular mechanisms of Reaper/Grim/Hid-mediated activation of Drosophila caspases through antagonizing ' +
                'DIAP1.</span> Dronc and DrICE are the Drosophila orthologues of the mammalian caspase-9 and caspase-3, respectively. The inhibitor of apoptosis ' +
                'protein DIAP1 inhibits Dronc-dependent cell death by stimulating Dronc ubiquitination and by inhibiting DrICE activity. The pro-death proteins ' +
                'Reaper, Hid, and Grim promote apoptosis by antagonizing DIAP1 function. Despite conservation of apoptotic pathways, the underlying molecular ' +
                'mechanisms are quite different between mammals and fruit flies. Through structural, biochemical, and functional analyses, we revealed the molecular' +
                ' mechanisms of how DIAP1 recognizes Dronc and DrICE, and more importantly, how the pro-death proteins Reaper, Hid, and Grim remove DIAP1-mediated ' +
                'ubiquitination of Dronc and inhibition of DrICE. ' +
                '[<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Nature+Struct.+Biol.+10%2C+892-898+(2003)" target="_blank">Nature Struct. Biol. 10, 892-898 (2003)</a>; ' +
                '<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Nature+Struct.+Mol.+Biol.+11%2C+420%E2%80%93428+(2004)" target="_blank">' +
                'Nature Struct. Mol. Biol. 11, 420–428 (2004)</a>]',

                '<h3 class="item-title" id="item4">Mechanistic understanding of programmed cell death in <span class="italic">C. elegans</span></h3>',

                '<span class="italic bold" id="item4.1">1. Structural and Biochemical Basis of CED-9 Recognition by the Pro-apoptotic Proteins EGL-1 and CED-4.</span> ' +
                'Programmed cell death in <span class="italic">Caenorhabditis elegans</span> is initiated by the binding of EGL-1 to CED-9, which disrupts the ' +
                'CED-4/CED-9 complex and allows CED-4 to activate the cell-killing caspase CED-3. We demonstrated that the C-terminal half of EGL-1 is necessary ' +
                'and sufficient for binding to CED-9 and for killing cells. Structure of the EGL-1/CED-9 complex revealed that EGL-1 adopts an extended a-helical ' +
                'conformation and induces substantial structural rearrangements in CED-9 upon binding. EGL-1 interface mutants failed to bind to CED-9 or to release ' +
                'CED-4 from the CED-4/CED-9 complex, and were unable to induce cell death in <span class="italic">vivo</span>. A surface patch on CED-9, different ' +
                'from that required for binding to EGL-1, was identified to be responsible for binding to CED-4. These data suggest a working mechanism for the ' +
                'release of CED-4 from the CED-4/CED-9 complex upon EGL-1 binding and provide a mechanistic framework for understanding apoptosis activation in ' +
                '<span class="italic">C. elegans</span>. [<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Mol.+Cell+15%2C+999%E2%80%931006+(2004)"' +
                ' target="_blank">Mol. Cell 15, 999–1006 (2004)</a>]',

                '<span class="italic bold" id="item4.2">2. Functional insights from the structure of the CED-4/CED-9 complex</span>. We solved the crystal ' +
                'structure of the CED-4-CED-9 complex at 2.6 Å resolution. Unexpectedly, one molecule of CED-9 binds to an asymmetric dimer of CED-4, but ' +
                'specifically recognizes only one of the two CED-4 molecules. This specific interaction prevents CED-4 from activating CED-3. EGL-1 binding ' +
                'induces pronounced conformational changes in CED-9 that result in the dissociation of the CED-4 dimer from CED-9. The released CED-4 dimer ' +
                'may further oligomerize to form a higher order oligomer, which facilitates the autoactivation of CED-3. These studies provide important insights ' +
                'into the regulation of cell death activation in <span class="italic">C. elegans</span>. [<a class="paper-link italic" ' +
                'href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Nature+437%2C+831%E2%80%937+(2005)" target="_blank">Nature 437, 831–7 (2005)</a>]',

                '<span class="italic bold" id="item4.3">3. Biochemical reconstitution of CED-3 activation in vitro</span>. Interplay among four genes--<span class="italic">' +
                'egl-1, ced-9, ced-4</span> and <span class="italic">ced-3</span>--controls the onset of programmed cell death in the nematode <span class="italic">' +
                'Caenorhabditis elegans</span>. The genetic pathway was identified by the pioneering work led by Prof. Bob Horvitz. Employing an <span class="italic">' +
                'in vitro</span> transcription & translation system, we were able to reconstitute the linear biochemical pathway, which provides the molecular ' +
                'foundation for further characterization of CED-3 activation mechanism. [<a class="paper-link italic" ' +
                'href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Nature+437%2C+831%E2%80%937+(2005)" target="_blank">Nature 437, 831–7 (2005)</a>]',

                '<span class="italic bold" id="item4.4">4. Structural Basis of CED-4-mediated activation of CED-3</span>. We determined the crystal structure ' +
                'of the complete CED-4 apoptosome and show that it consists of eight CED-4 molecules, organized as a tetramer of an asymmetric dimer via a ' +
                'previously unreported interface among AAA(+) ATPases. These eight CED-4 molecules form a funnel-shaped structure. The mature CED-3 protease ' +
                'is monomeric in solution and forms an active holoenzyme with the CED-4 apoptosome, within which the protease activity of CED-3 is markedly ' +
                'stimulated. Unexpectedly, the octameric CED-4 apoptosome appears to bind only two, not eight, molecules of mature CED-3. The structure of ' +
                'the CED-4 apoptosome reveals shared principles for the NB-ARC family of AAA(+) ATPases and suggests a mechanism for the activation of CED-3. ' +
                'We further showed that the L2\' loop of CED-3 directly binds CED-4 and plays a major role in the formation of an active CED-4-CED-3 holoenzyme. ' +
                'The crystal structure of the CED-4 apoptosome bound to the L2\' loop fragment of CED-3, determined at 3.2 Å resolution, reveals specific ' +
                'interactions between a stretch of five hydrophobic amino acids from CED-3 and a shallow surface pocket within the hutch of the funnel-shaped ' +
                'CED-4 apoptosome. Structure-guided biochemical analysis confirms the functional importance of the observed CED-4-CED-3 interface. Structural ' +
                'analysis together with published evidence strongly suggest a working model in which two molecules of CED-3 zymogen, through specific ' +
                'recognition, are forced into the hutch of the CED-4 apoptosome, consequently undergoing dimerization and autocatalytic maturation. The ' +
                'mechanism of CED-3 activation represents a major revision of the prevailing model for initiator caspase activation. ' +
                '[<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Cell+141%2C+446%E2%80%9357+(2010)" target="_blank">Cell 141, 446–57 (2010)</a>; ' +
                '<a class="paper-link italic" href="http://www.ncbi.nlm.nih.gov/pubmed/?term=Genes+%26+Dev.+27%2C+2039-48+(2013)" target="_blank">Genes & Dev. 27, 2039-48 (2013)</a>]'
            ]
        }
    ],

    /* people页面, 人员详细信息 */
    people: [
        {
            degree: 'Associate Professors',
            memberList: [
                {
                    imgSrc: 'img/people/wangtingliang.jpg',
                    nameEn: 'Dr. Tingliang Wang',
                    nameZh: '王廷亮 副研究员'
                },
                {
                    imgSrc: 'img/people/wangfeng.jpg',
                    nameEn: 'Dr. Feng Wang',
                    nameZh: '王丰 副研究员'
                },
                {
                    imgSrc: 'img/people/liuminhao.jpg',
                    nameEn: 'Dr. Minhao Liu',
                    nameZh: '刘旻昊 助理研究员'
                }
            ]
        },
        {
            degree: 'Postdoctoral Fellows',
            memberList: [
                {
                    imgSrc: 'img/people/gongdeshun.jpg',
                    nameEn: 'Dr. Deshun Gong',
                    nameZh: '龚德顺'
                },
                {
                    imgSrc: 'img/people/sunlinfeng.jpg',
                    nameEn: 'Dr. Linfeng Sun',
                    nameZh: '孙林峰'
                },
                {
                    imgSrc: 'img/people/yanchuangye.jpg',
                    nameEn: 'Dr. Chuangye Yan',
                    nameZh: '闫创业'
                },
                {
                    imgSrc: 'img/people/lauren.jpg',
                    nameEn: 'Dr. Lauren Ihsan Finci',
                    nameZh: '小罗'
                },
                {
                    imgSrc: 'img/people/panxiaojing.jpg',
                    nameEn: 'Dr. Xiaojing Pan',
                    nameZh: '潘孝敬'
                }
            ]
        },
        {
            degree: 'Ph.D Candidates',
            memberList: [
                {
                    imgSrc: 'img/people/huangxiuliang.jpg',
                    nameEn: 'Xiuliang Huang',
                    nameZh: '黄修良'
                },
                {
                    imgSrc: 'img/people/zhouxinhui.jpg',
                    nameEn: 'Xinhui Zhou',
                    nameZh: '周芯卉'
                },
                {
                    imgSrc: 'img/people/shenhuaizong.jpg',
                    nameEn: 'Huaizong Shen',
                    nameZh: '申怀宗'
                },
                {
                    imgSrc: 'img/people/yangguanghui.jpg',
                    nameEn: 'Guanghui Yang',
                    nameZh: '杨光辉'
                },
                {
                    imgSrc: 'img/people/jiangtianyu.jpg',
                    nameEn: 'Tianyu Jiang',
                    nameZh: '蒋天宇'
                },
                {
                    imgSrc: 'img/people/zhourui.jpg',
                    nameEn: 'Rui Zhou',
                    nameZh: '周瑞'
                },
                {
                    imgSrc: 'img/people/zhaoyanyu.jpg',
                    nameEn: 'Yanyu Zhao',
                    nameZh: '赵艳雨'
                },
                {
                    imgSrc: 'img/people/wushenjie.jpg',
                    nameEn: 'Shenjie Wu',
                    nameZh: '吴申杰'
                },
                {
                    imgSrc: 'img/people/wanruixue.jpg',
                    nameEn: 'Ruixue Wan',
                    nameZh: '万蕊雪'
                },
                {
                    imgSrc: 'img/people/zhoujiayao.jpg',
                    nameEn: 'Jiayao Zhou',
                    nameZh: '周家耀'
                },
                {
                    imgSrc: 'img/people/chiximin.jpg',
                    nameEn: 'Ximin Chi',
                    nameZh: '池希敏'
                },
                {
                    imgSrc: 'img/people/hufeizhuo.jpg',
                    nameEn: 'Feizhuo Hu',
                    nameZh: '胡斐卓'
                },
                {
                    imgSrc: 'img/people/liyini.jpg',
                    nameEn: 'Yini Li',
                    nameZh: '李旖旎'
                },
                {
                    imgSrc: 'img/people/wanglin.jpg',
                    nameEn: 'Lin Wang',
                    nameZh: '王琳'
                },
                {
                    imgSrc: 'img/people/bairui.jpg',
                    nameEn: 'Rui Bai',
                    nameZh: '白蕊'
                },
                {
                    imgSrc: 'img/people/zhangxiaofeng.jpg',
                    nameEn: 'Xiaofeng Zhang',
                    nameZh: '张晓峰'
                },
                {
                    imgSrc: 'img/people/suqiang.jpg',
                    nameEn: 'Qiang Su',
                    nameZh: '宿强'
                },
                {
                    imgSrc: 'img/people/huanggaoxingyu.jpg',
                    nameEn: 'Xingyu Huanggao',
                    nameZh: '黄高兴宇'
                }
            ]
        }
    ]
};
