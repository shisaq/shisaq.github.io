var model = {
    // 头部，导航栏，页脚和回到顶部按钮的代码
    headerTemplate: '<header class="page-header"><!--顶部主标题-->' +
                    '<h1 class="lab-title"><a class="index-link" href="index.html">The SHI Lab</a><span class="beta">beta</span></h1>' +
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
            vidSrc: 'img/video/Spliceosome.mp4',
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
            vidSrc: 'img/video/Spliceosome.mp4',
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
    ],

    // 校友相关数据
    alumniList: [
        {
            name: 'Tsinghua Alumni',
            masterOrUndergrad: 'Masters',
            masters: [
                'Jing Jiang (2009)',
                'Yongjian Huang (2010)',
                'He Fan (2010)',
                'Yutao Qi (2011)',
                'Yourong Cui (2012)',
                'Sheng Wang (2014)',
                'Quanxiu Li (2015)'
            ],
            phds: [
                'Feiran Lu (2011)',
                'Shiqian Qi (2011)',
                'Yi Wang (2012)',
                'Xiang Gao (2012)',
                'Xiaochun Li (2012)',
                'Xu Zhang (2012)',
                'Ada Hang-Heng Wong (2012)',
                'Lijun Zhou (2012)',
                'Weijiao Huang (2013)',
                'Shangyu Dang (2014)',
                'Qi Hu (2014)',
                'Dan Ma (2014)',
                'Peilong Lu (2014)',
                'Jing Wang (2014)',
                'Yuxuan Pang (2014)',
                'Ruobing Ren (2015)',
                'Xinzhe Yu (2015)',
                'Tian Xie (2015)',
                'Yexing Liu (2016)',
                'Bai Luan (2016)',
                'Zhen Yan (2016)',
                'Mengying Zhou (2016)',
                'Wei Peng (2016)',
                'Xin Zeng(2016)',
                'Wenlin Ren (2016)'
            ],
            postDocs: [
                'Di Wu (2013)',
                'Yonghui Zhang (2014)',
                'Xinqi Gong (2014)',
                'Ziqing Mei (2015)'
            ],
            technicians: [
                'Chao Cheng',
                'Le Xiao',
                'Peng Qu',
                'Yafei Yuan',
                'Haiquan Li'
            ]
        },
        {
            name: 'Princeton Alumni',
            masterOrUndergrad: 'UnderGrads',
            masters: [
                'Cassie A. Gyuricza (2000)',
                'Thomas D. Cha (2001)',
                'Ewina M. Fung (2002)',
                'Jackson W. Penry (2002)',
                'Michael D. Tibbetts (2004)',
                'Vivian K. Lee (2003)',
                'Leo L. Han (2005)',
                'Eve Henry (2005)',
                'Feng-Yen Li (2005)',
                'Neal A Chatterjee (2006)',
                'Eugene H Fan (2007)',
                'Derek G.Rudge (2008)'
            ],
            phds: [
                'Geng Wu (2001)',
                'Eric N. Shiozaki (2003)',
                'Min Hu (2004)',
                'Nieng Yan (2004)',
                'Liang Feng (2006)',
                'Qing Bao (2007)',
                'Jason Huhn (2008)',
                'Zhuoru Wu (2008)',
                'Yu chen (2009)'
            ],
            postDocs: [
                'Fan Zhang',
                'Jong Yu',
                'Hanchi Yan',
                'Yanhui Xu',
                'Yongna Xing',
                'Jun Yong Ha',
                'Yang Chao',
                'Yanfei Wang',
                'Jiawei Wu',
                'Pingwei Li',
                'Jijie Chai',
                'Stefan Riedl',
                'Hyung Jun Ahn',
                'Lichuan Gu',
                'Ping Yuan',
                'Michael Ackerman'
            ],
            technicians: [
                'Ping Zhang',
                'Steve Htet',
                'Qi Wu',
                'Nadine Samara',
                'Wenyu Li',
                'Zheng Lin'
            ]
        }
    ],

    /* publications页面, 文章信息 */
    publications: [
        {
            year: '2016',
            paperList: [
                {
                    members: 'Ruixue Wan, Chuangye Yan, Rui Bai, Gaoxingyu Huang, Yigong Shi. (2016)',
                    linkText: 'Structure of a yeast catalytic step I spliceosome at 3.4 Å resolution',
                    linkSrc: 'http://science.sciencemag.org/content/early/2016/07/20/science.aag2235',
                    journalName: 'Science',
                    DOI: '10.1126/science.aag2235',
                    time: 'Epub 2016 July 21.'
                },
                {
                    members: 'Chuangye Yan, Ruixue Wan, Rui Bai, Gaoxingyu Huang, Yigong Shi. (2016)',
                    linkText: 'Structure of a yeast catalytically activated spliceosome at 3.5 Å resolution',
                    linkSrc: 'http://science.sciencemag.org/content/early/2016/07/20/science.aag0291',
                    journalName: 'Science',
                    DOI: '10.1126/science.aag0291',
                    time: 'Epub 2016 July 21.'
                },
                {
                    members: 'Xiuliang Huang, Bai Luan, Jianping Wu, Yigong Shi. (2016)',
                    linkText: 'An atomic structure of the human 26S proteasome',
                    linkSrc: 'http://www.nature.com/nsmb/journal/v23/n9/full/nsmb.3273.html',
                    journalName: 'Nat Struct Mol Biol',
                    DOI: '10.1038/nsmb.3273',
                    time: '[Epub ahead of print].'
                },
                {
                    members: 'Bai Luan, Xiuliang Huang, Jianping Wu, Ziqing Mei, Yiwei Wang, Xiaobin Xue, ' +
                             'Chuangye Yan, Jiawei Wang, Daniel J. Finley, Yigong Shi#, Feng Wang#. (2016)',
                    linkText: 'Structure of an endogenous yeast 26S proteasome reveals two major conformational states.',
                    linkSrc: 'http://www.pnas.org/content/113/10/2642.abstract',
                    journalName: 'Proc Natl Acad Sci U S A',
                    DOI: '113(10):2642-7',
                    time: 'Epub 2016 Feb 29 (# corresponding authors).'
                },
                {
                    members: 'Tianyu Jiang, Minhao Liu M, Jianping Wu, Yigong Shi. (2016)',
                    linkText: 'Structural and biochemical analysis of Bcl-2 interaction with the hepatitis B virus protein HBx',
                    linkSrc: 'http://www.pnas.org/content/113/8/2074.short',
                    journalName: 'Proc Natl Acad Sci U S A',
                    DOI: '113(8):2074-9',
                    time: 'Epub 2016 Feb 8.'
                },
                {
                    members: 'Linfeng Sun, Xiaochun Li, Yigong Shi. (2016)',
                    linkText: 'Structural biology of intramembrane proteases: mechanistic insights from rhomboid and S2P to Î³-secretase',
                    linkSrc: 'http://www.sciencedirect.com/science/article/pii/S0959440X16000026',
                    journalName: 'Curr Opin Struct Biol',
                    DOI: '37:97-107',
                    time: 'Epub 2016 Jan 24. (Commissioned review).'
                },
                {
                    members: 'Ruixue Wan, Chuangye Yan, Rui Bai, Lin Wang, Min Huang, Catherine C. L. Wong,Yigong Shi. (2016)',
                    linkText: 'The 3.8 Å structure of the U4/U6.U5 tri-snRNP: Insights into spliceosome assembly and catalysis',
                    linkSrc: 'http://science.sciencemag.org/content/early/2016/01/06/science.aad6466',
                    journalName: 'Science',
                    DOI: '351(6272):466-75',
                    time: 'Epub 2016 Jan 7.'
                }
            ]
        },
        {
            year: '2015',
            paperList: [
                {
                    members: 'Mengying Zhou1, Yini Li1, Qi Hu1, Xiao-chen Bai, Weiyun Huang, Chuangye Yan, Sjors H.W. Scheres and Yigong Shi. (2015)',
                    linkText: 'Atomic structure of the apoptosome: mechanism of cytochrome c- and dATP-mediated activation of Apaf-1',
                    linkSrc: 'http://genesdev.cshlp.org/content/29/22/2349.long',
                    journalName: 'Genes & Dev',
                    DOI: '2015. 29: 2349-2361',
                    time: ''
                },
                {
                    members: 'Xiao-chen Bai, Eeson Rajendra, Guanghui Yang, Yigong Shi, Sjors HW Scheres. (2015)',
                    linkText: 'Sampling the conformational space of the catalytic subunit of human γ-secretase',
                    linkSrc: 'https://elifesciences.org/content/4/e11182',
                    journalName: 'eLife',
                    DOI: '10.7554/eLife.11182',
                    time: ''
                },
                {
                    members: 'Jing Hang, Ruixue Wan, Chuangye Yan, Yigong Shi. (2015)',
                    linkText: 'Structural basis of pre-mRNA splicing',
                    linkSrc: 'http://science.sciencemag.org/content/early/2015/08/19/science.aac8159.full',
                    journalName: 'Science',
                    DOI: '349(6253):1191-1198',
                    time: ''
                },
                {
                    members: 'Chuangye Yan, Jing Hang, Ruixue Wan, Min Huang, Catherine C. L. Wong, Yigong Shi. (2015)',
                    linkText: 'Structure of a yeast spliceosome at 3.6-angstrom resolution',
                    linkSrc: 'http://science.sciencemag.org/content/early/2015/08/19/science.aac7629.full',
                    journalName: 'Science',
                    DOI: '349(6253):1182-1191',
                    time: ''
                },
                {
                    members: 'Xiao-chen Bai, Chuangye Yan, Guanghui Yang, Peilong Lu, Dan Ma, Linfeng Sun, Rui Zhou, Sjors H. W. Scheres, Yigong Shi. (2015)',
                    linkText: 'An atomic structure of human γ-secretase',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/26280335',
                    journalName: 'Nature',
                    DOI: '525(7568):212-217',
                    time: ''
                },
                {
                    members: 'Linfeng Sun, Lingyun Zhao, Guanghui Yang, Chuangye Yan, Rui Zhou, Xiaoyuan Zhou, Tian Xie, Yanyu Zhao, Shenjie Wu, ' +
                             'Xueming Li, Yigong Shi. (2015)',
                    linkText: 'Structural basis of human γ-secretase assembly',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/25918421',
                    journalName: 'Proc Natl Acad Sci U S A',
                    DOI: '112(19):6003-6008',
                    time: ''
                },
                {
                    members: 'Shangyu Dang, Shenjie Wu, Jiawei Wang, Hongbo Li, Min Huang, Wei He, Yue-Ming Li, Catherine C. L. Wong, Yigong Shi. (2015)',
                    linkText: 'Cleavage of amyloid precursor protein by an archaeal presenilin homologue PSH',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/25733893',
                    journalName: 'Proc Natl Acad Sci U S A',
                    DOI: '112(11):3344-3349',
                    time: ''
                },
                {
                    members: 'Yuxuan Pang, Xiao-chen Bai, Qi Hao, Chuangye Yan, Zheqin Chen, Jia-Wei Wang, Sjors H.W. Scheres, Yigong Shi. (2015)',
                    linkText: 'Structure of the apoptosome: mechanistic insights into activation of an initiator caspase from Drosophila',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/25644603',
                    journalName: 'Genes Dev',
                    DOI: '29(3):277-287',
                    time: ''
                },
                {
                    members: 'Zhen Yan, Xiao-chen Bai, Chuangye Yan, Jianping Wu, Zhangqiang Li, Tian Xie, Wei Peng, Chang-cheng Yin, Xueming Li, ' +
                             'Sjors H. W. Scheres, Yigong Shi, Nieng Yan. (2015)',
                    linkText: 'Structure of the rabbit ryanodine receptor RyR1 at near-atomic resolution',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/25517095',
                    journalName: 'Nature',
                    DOI: '517(7532):50-55',
                    time: ''
                },
            ]
        },
        {
            year: '2014',
            paperList: [
                {
                    members: 'Yigong Shi. (2014)',
                    linkText: 'A Glimpse of Structural Biology through X-Ray Crystallography',
                    linkSrc: 'http://dx.doi.org/10.1016/j.cell.2014.10.051',
                    journalName: 'Cell',
                    DOI: '159(5):995-1014',
                    time: ''
                },
                {
                    members: 'Qi Hu, Di Wu, Wen Chen, Zhen Yan, Chuangye Yan, Tianxi He, Qionglin Liang, Yigong Shi. (2014)',
                    linkText: 'Molecular determinants of caspase-9 activation by the Apaf-1 apoptosome',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/25313070',
                    journalName: 'Proc Natl Acad Sci U S A',
                    DOI: '111(46):16254-16261',
                    time: ''
                },
                {
                    members: 'Tian Xie, Chuangye Yan, Rui Zhou, Yanyu Zhao, Linfeng Sun, Guanghui Yang, Peilong Lu, Dan Ma, Yigong Shi. (2014)',
                    linkText: 'Crystal structure of the γ-secretase component nicastrin',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/25197054',
                    journalName: 'Proc Natl Acad Sci U S A',
                    DOI: '111(37):13349-13354',
                    time: ''
                },
                {
                    members: 'Sheng Wang, Renhong Yan, Xi Zhang, Qi Chu, Yigong Shi. (2014)',
                    linkText: 'Molecular mechanism of pH-dependent substrate transport by an arginine-agmatine antiporter',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/25136114',
                    journalName: 'Proc Natl Acad Sci U S A',
                    DOI: '111(35):12734-12739',
                    time: ''
                },
                {
                    members: 'Peilong Lu, Xiao-chen Bai, Dan Ma, Tian Xie, Chuangye Yan, Linfeng Sun, Guanghui Yang, Yanyu Zhao, Rui Zhou, ' +
                             'Sjors H. W. Scheres, Yigong Shi. (2014)',
                    linkText: 'Three-dimensional structure of human γ-secretase',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/25043039',
                    journalName: 'Nature',
                    DOI: '512(7513):166-170',
                    time: ''
                },
                {
                    members: 'Yigong Shi. (2014)',
                    linkText: 'Life, career, and structural biology',
                    linkSrc: 'http://iopscience.iop.org/article/10.1088/0031-8949/89/6/068004/meta',
                    journalName: 'Phys Scripta',
                    DOI: '89(6):68004-68024',
                    time: ''
                },
                {
                    members: 'Jijie Chai, Yigong Shi. (2014)',
                    linkText: 'Apoptosome and inflammasome: conserved machineries for caspase activation',
                    linkSrc: 'http://nsr.oxfordjournals.org/content/1/1/101.short',
                    journalName: 'Nati Sci Rev',
                    DOI: '1(1):101-108',
                    time: ''
                },
                {
                    members: 'Lijun Zhou, Yulin Zhou, Jing Hang, Ruixue Wan, Guifeng Lu, Chuangye Yan, Yigong Shi. (2014)',
                    linkText: 'Crystal structure and biochemical analysis of the heptameric Lsm1-7 complex',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/24513854',
                    journalName: 'Cell Res',
                    DOI: '24(4):497-500',
                    time: ''
                },
                {
                    members: 'Peilong Lu, Dan Ma, Chuangye Yan, Xinqi Gong, Mingjian Du, Yigong Shi. (2014)',
                    linkText: 'Structure and mechanism of a eukaryotic transmembrane ascorbate-dependent oxidoreductase',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/24449903',
                    journalName: 'Proc Natl Acad Sci U S A',
                    DOI: '111(5):1813-1818',
                    time: ''
                },
                {
                    members: 'Lijun Zhou, Jing Hang, Yulin Zhou, Ruixue Wan, Guifeng Lu, Ping Yin, Chuangye Yan, Yigong Shi. (2014)',
                    linkText: 'Crystal structures of the Lsm complex bound to the 3\' end sequence of U6 small nuclear RNA',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/24240276',
                    journalName: 'Nature',
                    DOI: '506(7486):116-120',
                    time: ''
                }
            ]
        },
        {
            year: '2013',
            paperList: [
                {
                    members: 'Ping Yin, Quanxiu Li, Chuangye Yan, Ying Liu, Junjie Liu, Feng Yu, Zheng Wang, Jiafu Long, Jianhua He, ' +
                             'Hong-Wei Wang, Jiawei Wang, Jian-Kang Zhu, Yigong Shi, Nieng Yan. (2013)',
                    linkText: 'Structural basis for the modular recognition of single-stranded RNA by PPR proteins',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/24162847',
                    journalName: 'Nature',
                    DOI: '504(7478):168-171',
                    time: ''
                },
                {
                    members: 'Tian Xie, Wei Peng, Chuangye Yan, Jianping Wu, Xinqi Gong, Yigong Shi. (2013)',
                    linkText: 'Structural insights into RIP3-mediated necroptotic signaling',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/24095729',
                    journalName: 'Cell Rep',
                    DOI: '5(1):70-78',
                    time: ''
                },
                {
                    members: 'Weijiao Huang, Tianyu Jiang, Wooyoung Choi, Shiqian Qi, Yuxuan Pang, Qi Hu, Yanhui Xu, Xinqi Gong, ' +
                             'Philip D. Jeffrey, Jiawei Wang, Yigong Shi. (2013)',
                    linkText: 'Mechanistic insights into CED-4-mediated activation of CED-3',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/24065769',
                    journalName: 'Genes Dev',
                    DOI: '27(18):2039-2048',
                    time: ''
                },
                {
                    members: 'Yigong Shi. (2013)',
                    linkText: 'Common folds and transport mechanisms of secondary active transporters',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/23654302',
                    journalName: 'Annu Rev Biophys',
                    DOI: '42:51-72',
                    time: ''
                },
                {
                    members: 'Dan Ma, Peilong Lu, Yigong Shi. (2013)',
                    linkText: 'Substrate Selectivity of the Acid-activated Glutamate-GABA Antiporter GadC from E. coli',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/23589309',
                    journalName: 'J Biol Chem',
                    DOI: '288(21):15148-15153',
                    time: ''
                },
                {
                    members: 'Tingliang Wang, Guobin Fu, Xiaojing Pan, Jianping Wu, Xinqi Gong, Jiawei Wang, Yigong Shi. (2013)',
                    linkText: 'Structure of a bacterial energy-coupling factor transporter',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/23584587',
                    journalName: 'Nature',
                    DOI: '497(7448):272-276',
                    time: ''
                },
                {
                    members: 'Qi Hu, Di Wu, Wen Chen, Zhen Yan, Yigong Shi. (2013)',
                    linkText: 'Proteolytic Processing of Caspase-9 Zymogen Is Required for Apoptosome-mediated Activation of Caspase-9',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/23572523',
                    journalName: 'J Biol Chem',
                    DOI: '288(21):15142-15147',
                    time: ''
                },
                {
                    members: 'Hanchi Yan, Weiyun Huang, Chuangye Yan, Xinqi Gong, Sirui Jiang, Yu Zhao, Jiawei Wang, Yigong Shi. (2013)',
                    linkText: 'Structure and mechanism of a nitrate transporter',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/23523348',
                    journalName: 'Cell Rep',
                    DOI: '3(3):716-723',
                    time: ''
                },
                {
                    members: 'Tian Xie, Wei Peng, Yexing Liu, Chuangye Yan, Jenny Maki, Alexei Degterev, Junying Yuan, Yigong Shi. (2013)',
                    linkText: 'Structural Basis of RIP1 Inhibition by Necrostatins',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/23473668',
                    journalName: 'Structure',
                    DOI: '21(3):493-499',
                    time: ''
                },
                {
                    members: 'Weijiao Huang, Wooyoung Choi, Yuling Chen, Qi Zhang, Haiteng Deng, Wei He, Yigong Shi. (2013)',
                    linkText: 'A proposed role for glutamine in cancer cell growth through acid resistance',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/23357849',
                    journalName: 'Cell Res',
                    DOI: '23(5):724-727',
                    time: ''
                },
                {
                    members: 'Peilong Lu, Dan Ma, Yuling Chen, Yingying Guo, Guo-Qiang Chen, Haiteng Deng, Yigong Shi. (2013)',
                    linkText: 'L-glutamine provides acid resistance for Escherichia coli through enzymatic release of ammonia',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/23337585',
                    journalName: 'Cell Res',
                    DOI: '23(5):635-644',
                    time: ''
                },
                {
                    members: 'Xiaochun Li, Shangyu Dang, Chuangye Yan, Xinqi Gong, Jiawei Wang, Yigong Shi. (2013)',
                    linkText: 'Structure of a presenilin family intramembrane aspartate protease',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/23254940',
                    journalName: 'Nature',
                    DOI: '493(7430):56-61',
                    time: ''
                }
            ]
        },
        {
            year: '2012',
            paperList: [
                {
                    members: 'Ping Yin, Dong Deng, Chuangye Yan, Xiaojing Pan, Jianzhong Jeff Xi, Nieng Yan, Yigong Shi. (2012)',
                    linkText: 'Specific DNA-RNA Hybrid Recognition by TAL Effectors',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/22945353',
                    journalName: 'Cell Rep',
                    DOI: '2(4):707-713',
                    time: ''
                },
                {
                    members: 'Dong Deng, Ping Yin, Chuangye Yan, Xiaojing Pan, Xinqi Gong, Shiqian Qi, Tian Xie, Magdy Mahfouz, ' +
                             'Jian-Kang Zhu, Nieng Yan, Yigong Shi. (2012)',
                    linkText: 'Recognition of methylated DNA by TAL effectors',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/22945353',
                    journalName: 'Cell Res',
                    DOI: '22(10):1502-1504',
                    time: ''
                },
                {
                    members: 'Ada Hang-Heng Wong, Chuangye Yan, Yigong Shi. (2012)',
                    linkText: 'Crystal structure of the yeast metacaspase yca1',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/22761449',
                    journalName: 'J Biol Chem',
                    DOI: '287(35):29251-29259',
                    time: ''
                },
                {
                    members: 'Dan Ma, Peilong Lu, Chuangye Yan, Chao Fan, Ping Yin, Jiawei Wang, Yigong Shi. (2012)',
                    linkText: 'Structure and mechanism of a glutamate-GABA antiporter',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/22407317',
                    journalName: 'Nature',
                    DOI: '483(7391):632-636',
                    time: ''
                },
                {
                    members: 'Di Wu, Qi Hu, Zhen Yan, Wen Chen, Chuangye Yan, Xi Huang, Jing Zhang, Panyu Yang, Haiteng Deng, ' +
                             'Jiawei Wang, XingWang Deng, Yigong Shi. (2012)',
                    linkText: 'Structural basis of ultraviolet-B perception by UVR8',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/22388820',
                    journalName: 'Nature',
                    DOI: '484(7393):214-219',
                    time: ''
                },
                {
                    members: 'Weijiao Huang, Wooyoung Choi, Wanqiu Hu, Na Mi, Qiang Guo, Meisheng Ma, Mei Liu, Yuan Tian, ' +
                             'Peilong Lu, Feng-Liang Wang, Haiteng Deng, Lei Liu, Ning Gao, Li Yu, Yigong Shi. (2012)',
                    linkText: 'Crystal structure and biochemical analyses reveal Beclin 1 as a novel membrane binding protein',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/22310240',
                    journalName: 'Cell Res',
                    DOI: '22(3):473-489',
                    time: ''
                },
                {
                    members: 'Dong Deng, Chuangye Yan, Xiaojing Pan, Magdy Mahfouz, Jiawei Wang, Jian-Kang Zhu, Yigong Shi*, Nieng Yan* (2012)',
                    linkText: 'Structural basis for the specific recognition of DNA by TAL effectors',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/22223738',
                    journalName: 'Science',
                    DOI: '335(6069):720-723',
                    time: ''
                }
            ]
        },
        {
            year: '2011',
            paperList: [
                {
                    members: 'Jong W. Yu, Philip D. Jeffrey, Jun Yong Ha, Xiaolu Yang, Yigong Shi. (2011)',
                    linkText: 'Crystal structure of the mucosa-associated lymphoid tissue lymphoma translocation 1 (MALT1) paracaspase region',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/22158899',
                    journalName: 'Proc Natl Acad Sci U S A',
                    DOI: '108(52):21004-21009',
                    time: ''
                },
                {
                    members: 'Xiaochun Li, Jiawei Wang, Yigong Shi. (2011)',
                    linkText: 'Structural mechanisms of DIAP1 auto-inhibition and DIAP1-mediated inhibition of drICE',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/21811237',
                    journalName: 'Nat Commun',
                    DOI: '2:408',
                    time: ''
                },
                {
                    members: 'Feng Wang, Ziqing Mei, Yutao Qi, Chuangye Yan, Qi Hu, Jiawei Wang, Yigong Shi. (2011)',
                    linkText: 'Structure and mechanism of the hexameric MecA-ClpC molecular machine',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/21368759',
                    journalName: 'Nature',
                    DOI: '471(7338):331-335',
                    time: ''
                }
            ]
        },
        {
            year: '2010',
            paperList: [
                {
                    members: 'Peng Zhang, Jiawei Wang, Yigong Shi. (2010)',
                    linkText: 'Structure and mechanism of the S component of a bacterial ECF transporter',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/20972419',
                    journalName: 'Nature',
                    DOI: '468(7324):717-720',
                    time: ''
                },
                {
                    members: 'Shiqian Qi, Yuxuan Pang, Qi Hu, Qun Liu, Hua Li, Yulian Zhou, Tianxi He, Qionglin Liang, Yexing Liu, ' +
                             'Xiaoqiu Yuan, Guoan Luo, Huilin Li, Jiawei Wang, Nieng Yan, Yigong Shi. (2010)',
                    linkText: 'Crystal Structure of the Caenorhabditis elegans Apoptosome Reveals an Octameric Assembly of CED-4',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/20227371',
                    journalName: 'Cell',
                    DOI: '141(3):446-457',
                    time: ''
                },
                {
                    members: 'Yide Mei, Jeongsik Yong, Hongtu Liu, Yigong Shi, Judy Meinkoth, Gideon Dreyfuss, Xiaolu Yang. (2010)',
                    linkText: 'tRNA Binds to Cytochrome c and Inhibits Caspase Activation',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/20227371',
                    journalName: 'Mol Cell',
                    DOI: '37(5):668-678',
                    time: ''
                },
                {
                    members: 'Xiang Gao, Lijun Zhou, Xuyao Jiao, Feiran Lu, Chuangye Yan, Xin Zeng, Jiawei Wang, Yigong Shi. (2010)',
                    linkText: 'Mechanism of substrate recognition and transport by an amino acid antiporter',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/20090677',
                    journalName: 'Nature',
                    DOI: '463(7282):828-832',
                    time: ''
                }
            ]
        },
        {
            year: '2009',
            paperList: [
                {
                    members: 'David A Gell, Liang Feng, Suiping Zhou, Philip D. Jeffrey, William dâ€™Avigdor, Andrew Gow, Mitchell J. Weiss, ' +
                             'Yigong Shi, Joel P Mackay. (2009)',
                    linkText: 'A cis-Proline in a-Hemoglobin Stabilizing Protein Directs the Structural Reorganization of a-Hemoglobin',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/19706593',
                    journalName: 'J Biol Chem',
                    DOI: '284(43):29462-29469',
                    time: ''
                },
                {
                    members: 'Yigong Shi. (2009)',
                    linkText: 'Serine/Threonine Phosphatases: Mechanism through Structure',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/19879837',
                    journalName: 'Cell',
                    DOI: '139(3):468-484',
                    time: ''
                },
                {
                    members: '(***) Yi Wang, Yongjian Huang, Jiawei Wang, Chao Cheng, Weijiao Huang, Peilong Lu, Ya-Nan Xu, Pengye Wang, ' +
                             'Nieng Yan, Yigong Shi. (2009)',
                    linkText: 'Structure of the formate transporter FocA reveals a pentameric aquaporin-like channel',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/19940917',
                    journalName: 'Nature',
                    DOI: '462(7272):467-472',
                    time: ''
                },
                {
                    members: 'Feng Wang, Ziqing Mei, Yutao Qi, Chuangye Yan, Siheng Xiang, Zhiyuan Zhou, Qi Hu, Jiawei Wang, Yigong Shi. (2009)',
                    linkText: 'Crystal structure of the MecA degradation tag',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/19801546',
                    journalName: 'J Biol Chem',
                    DOI: '284(49):34376-34381',
                    time: ''
                },
                {
                    members: 'Ziqing Mei, Feng Wang, Yutao Qi, Zhiyuan Zhou, Qi Hu, Han Li, Jiawei Wu, Yigong Shi. (2009)',
                    linkText: 'Molecular determinants of MecA as a degradation tag for the ClpCP protease',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/19767395',
                    journalName: 'J Biol Chem',
                    DOI: '284(49):34366-34375',
                    time: ''
                },
                {
                    members: '(***) Xiaochun Li, Boyuan Wang, Lihui Feng, Hui Kang, Yang Qi, Jiawei Wang, Yigong Shi. (2009)',
                    linkText: 'Cleavage of RseA by RseP requires a carboxyl-terminal hydrophobic amino acid following DegS cleavage',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/19706448',
                    journalName: 'Proc. Natl. Acad. Sci. U S A',
                    DOI: '106(35):14837-14842',
                    time: ''
                },
                {
                    members: '(***) Xiang Gao, Feiran Lu, Lijun Zhou, Shangyu Dang, Linfeng Sun, Xiaochun Li, Jiawei Wang, Yigong Shi. (2009)',
                    linkText: 'Structure and Mechanism of an Amino Acid Antiporter',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/19478139',
                    journalName: 'Science',
                    DOI: '324(5934):1565-1568',
                    time: ''
                },
                {
                    members: '(***) Fan Zhang , Zhuoru Wu, Ping Zhang, Geng Tian, Daniel Finley, Yigong Shi. (2009)',
                    linkText: 'Mechanism of substrate unfolding and translocation by the regulatory particle of the proteasome from Methanocaldococcus jannaschii',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/19481528',
                    journalName: 'Mol Cell',
                    DOI: '34(4):485-496',
                    time: ''
                },
                {
                    members: '(***) Fan Zhang , Min Hu, Geng Tian, Ping Zhang, Daniel Finley, Philip D. Jeffrey, Yigong Shi. (2009)',
                    linkText: 'Structural insights into the regulatory particle of the proteasome from Methanocaldococcus jannaschii',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/19481527',
                    journalName: 'Mol Cell',
                    DOI: '34(4):473-484',
                    time: ''
                },
                {
                    members: 'David C. Clarke, Meredith L. Brown, Richard A. Erickson, Yigong Shi, Xuedong Liu. (2009)',
                    linkText: 'Transforming growth factor b depletion is the primary determinant of Smad signaling kinetics',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/19223462',
                    journalName: 'Mol Cell Biol',
                    DOI: '29(9):2443-2455',
                    time: ''
                },
                {
                    members: '(***) Jong W. Yu, Philip D. Jeffrey, Yigong Shi. (2009)',
                    linkText: 'Mechanism of procaspase-8 activation by c-FLIPL',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/19416807',
                    journalName: 'Proc Natl Acad Sci U S A',
                    DOI: '106(20):8169-8174',
                    time: ''
                },
                {
                    members: 'Yigong Shi. (2009)',
                    linkText: 'Assembly and structure of protein phosphatase 2A',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/19277525',
                    journalName: 'Sci China C Life Sci',
                    DOI: '52(2):135-146',
                    time: ''
                }
            ]
        },
        {
            year: '2008',
            paperList: [
                {
                    members: 'Xu Zhang, Jiawei Wang, Chao Fan, Hubo Li, Honghong Sun, Shunyou Gong, Youhai H. Chen, Yigong Shi. (2008)',
                    linkText: 'Crystal structure of TIPE2 reveals insights into immune homeostasis',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/19079267',
                    journalName: 'Nature Struct Mol Biol',
                    DOI: '16(1):89-90',
                    time: ''
                },
                {
                    members: 'Jong W. Yu, Yigong Shi. (2008)',
                    linkText: 'FLIP and the death effector domain family',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/18931689',
                    journalName: 'Oncogene',
                    DOI: '27(48):6216-6227',
                    time: ''
                },
                {
                    members: '(***) Yanhui Xu, Yu Chen, Ping Zhang, Philip D. Jeffrey, Yigong Shi. (2008)',
                    linkText: 'Structure of a protein phosphatase 2A holoenzyme: insights into B55-mediated Tau dephosphorylation',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/18922469',
                    journalName: 'Mol Cell',
                    DOI: '31(6):873-885',
                    time: ''
                },
                {
                    members: 'Yigong Shi. (2008)',
                    linkText: 'Apoptosome assembly',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/18662568',
                    journalName: 'Methods Enzymol',
                    DOI: '442:141-156',
                    time: ''
                },
                {
                    members: 'Sinisa Urban, Yigong Shi. (2008)',
                    linkText: 'Core principles of intramembrane proteolysis: comparison of rhomboid and site-2 family proteases',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/18440799',
                    journalName: 'Curr Opin Struct Biol',
                    DOI: '18(4):432-441',
                    time: ''
                },
                {
                    members: '(***) Yongna Xing, Zhu Li, Yu Chen, Philip D. Jeffery, Yigong Shi. (2008)',
                    linkText: 'Structural mechanism of demethylation and inactivation of protein phosphatase 2A',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/18394995',
                    journalName: 'Cell',
                    DOI: '133(1):154-163',
                    time: ''
                },
                {
                    members: 'Yigong Shi. (2008)',
                    linkText: 'Deubiquitination of Lys63-linkage by a CYLD UBP',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/18334208',
                    journalName: 'Structure',
                    DOI: '16(3):338-340',
                    time: ''
                },
                {
                    members: '(***) Yan Xu, Liang Feng, Philip D. Jeffrey, Yigong Shi*, Francois M. M. Morel*. (2008)',
                    linkText: 'Structure and metal exchange in the cadmiumâ€“carbonic anhydrase of marine diatoms',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/18322527',
                    journalName: 'Nature',
                    DOI: '452(7183):56-61',
                    time: ''
                }
            ]
        },
        {
            year: '2007',
            paperList: [
                {
                    members: '(***) Liang Feng, Hanchi Yan, Zhuoru Wu, Nieng Yan, Zhe Wang, Philip D. Jeffrey, Yigong Shi. (2007)',
                    linkText: 'Structure of a Site-2 Protease Family Intramembrane Metalloprotease',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/18063795',
                    journalName: 'Science',
                    DOI: '318, 1608-1612',
                    time: ''
                },
                {
                    members: 'Nieng Yan, Yigong Shi. (2007)',
                    linkText: 'Allosteric activation of a bacterial stress sensor',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/17981109',
                    journalName: 'Cell',
                    DOI: '131, 441-443',
                    time: ''
                },
                {
                    members: 'Guozhou Chen, Philip D. Jeffrey, Clay Fuqua, Yigong Shi, Lingling Chen. (2007)',
                    linkText: 'Structural basis for antiactivation in bacterial quorum sensing',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/17921255',
                    journalName: 'Proc Natl Acad Sci U S A',
                    DOI: '104, 16474-16479',
                    time: ''
                },
                {
                    members: '(***) Yu Chen, Yanhui Xu, Qing Bao, Yongna Xing, Zhu Li, Zheng Lin, Jeffry B Stock, Philip D Jeffrey, Yigong Shi. (2007)',
                    linkText: 'Structural and biochemical insights into the regulation of protein phosphatase 2A by small t antigen of SV40',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/17529992',
                    journalName: 'Nat Struct & Mol Biol',
                    DOI: '14, 527-534',
                    time: ''
                },
                {
                    members: 'Adam Oberstein, Philip D Jeffrey, Yigong Shi. (2007)',
                    linkText: 'Crystal structure of the Bcl-XL-Beclin 1 peptide complex: Beclin 1 is a novel BH3-only protein',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/17337444',
                    journalName: 'J Biol Chem',
                    DOI: '282, 13123-13132',
                    time: ''
                },
                {
                    members: 'Aislyn D. Wist, Stefan J. Riedl, Yigong Shi, George L. McLendon. (2007)',
                    linkText: 'Structure–activity based study of the Smac-binding pocket within the BIR3 domain of XIAP',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/17336535',
                    journalName: 'Bioorg Med Chem',
                    DOI: '5, 2935-2943',
                    time: ''
                },
                {
                    members: '(***) Qing Bao, Wenyu Lu, Joshua D. Rabinowitz, Yigong Shi. (2007)',
                    linkText: 'Calcium blocks formation of apoptosome by preventing nucleotide exchange in Apaf-1',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/17244527',
                    journalName: 'Molecular Cell',
                    DOI: '25, 181-192',
                    time: ''
                },
                {
                    members: 'Qing Bao, Yigong Shi. (2007)',
                    linkText: 'Apoptosome: a platform for the activation of initiator caspases',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/16977332',
                    journalName: 'Cell Death Differ',
                    DOI: '14, 56-65',
                    time: ''
                }
            ]
        },
        {
            year: '2006',
            paperList: [
                {
                    members: '(***)Yanhui Xu, Yongna Xing, Yu Chen, Yang Chao, Zheng Lin, Eugene Fan, Jong W. Yu, Stefan Strack, Philip D. Jeffrey, Yigong Shi. (2006)',
                    linkText: 'Structure of the protein phosphatase 2A holoenzyme',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/17174897',
                    journalName: 'Cell',
                    DOI: '127, 1239-1251',
                    time: ''
                },
                {
                    members: '(***)Zhuoru Wu, Nieng Yan, Liang Feng, Adam Oberstein, Hanchi Yan, Rosanna P Baker, Lichuan Gu, Philip D Jeffrey, Sinisa Urban, Yigong Shi. (2006)',
                    linkText: 'Structural analysis of a rhomboid family intramembrane protease reveals a gating mechanism for substrate entry',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/17099694',
                    journalName: 'Nat Struct & Mol Biol',
                    DOI: '13, 1084-1091',
                    time: ''
                },
                {
                    members: '(***)Yongna Xing, Yanhui Xu, Yu Chen, Philip D Jeffrey, Yang Chao, Zheng Lin, Zhu Li, Stefan Strack, Jeffry B. Stock, Yigong Shi. (2006)',
                    linkText: 'Structure of protein phosphatase 2A core enzyme bound to tumor-inducing toxins',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/17055435',
                    journalName: 'Cell',
                    DOI: '127, 341-353',
                    time: ''
                },
                {
                    members: 'Yigong Shi. (2006)',
                    linkText: 'Mechanical aspects of apoptosome assembly',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/17046227',
                    journalName: 'Curr Opin Cell Biol',
                    DOI: '18, 677-684',
                    time: ''
                },
                {
                    members: '(***)Yang Chao, Yongna Xing, Yu Chen, Yanhui Xu, Zheng Lin, Zhu Li, Philip D. Jeffrey, Jeffry B. Stock, Yigong Shi. (2006)',
                    linkText: 'Structure and Mechanism of the Phosphotyrosyl Phosphatase Activator',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/16916641',
                    journalName: 'Mol Cell',
                    DOI: '23, 535-546',
                    time: ''
                },
                {
                    members: 'Xia Lin, Xueyan Duan, Yao-Yun Liang, Ying Su, Katharine H. Wrighton, Jianyin Long, Min Hu, Candi M. Davis, Jinrong Wang,' +
                             ' F. Charles Brunicardi, Yigong Shi, Ye-Guang Chen, Anming Meng, Xin-Hua Feng. (2006)',
                    linkText: 'PPM1A functions as a Smad phosphatase to terminate TGFbeta signaling',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/16751101',
                    journalName: 'Cell',
                    DOI: '125, 915-928',
                    time: ''
                },
                {
                    members: 'Chonglin Yang, Nieng Yan, Jay Parish, Xiaochen Wang, Yigong Shi, Ding Xue. (2006)',
                    linkText: 'RNA aptamers targeting the cell death inhibitor CED-9 induce cell kiling in C. elegans',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/16467303',
                    journalName: 'J Biol Chem',
                    DOI: '281, 9137-9144',
                    time: ''
                },
                {
                    members: 'Nieng Yan, Jun R. Huh, Vrigil Schirf, Borries Demeler, Bruce A. Hay, Yigong Shi. (2006)',
                    linkText: 'Structure and activation mechanism of the Drosophila initiator caspase Dronc',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/16446367',
                    journalName: 'J Biol Chem',
                    DOI: '281, 8667-8674',
                    time: ''
                },
                {
                    members: '(***) Min Hu, Lichuan Gu, Muyang Li, Philip D. Jeffrey, Wei Gu, Yigong Shi. (2006)',
                    linkText: 'Structural Basis of Competitive Recognition of p53 and MDM2 by HAUSP/USP7: Implications for the Regulation of the p53-MDM2 Pathway',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/16402859',
                    journalName: 'PLoS Biology',
                    DOI: '4, e27',
                    time: ''
                },
                {
                    members: 'Feng-Yen Li, Philip D. Jeffrey, Jong W. Yu, Yigong Shi. (2006)',
                    linkText: 'Crystal Structure of a Viral FLIP: INSIGHTS INTO FLIP-MEDIATED INHIBITION OF DEATH RECEPTOR SIGNALING',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/16317000',
                    journalName: 'J Biol Chem',
                    DOI: '281, 2960-2968',
                    time: ''
                },
                {
                    members: 'Nieng Yan, Yanhui Xu, Yigong Shi. (2006)',
                    linkText: '2:1 Stoichiometry of the CED-4-CED-9 Complex and the Tetrameric CED-4: Insights into the Regulation of CED-3 Activation',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/16294007',
                    journalName: 'Cell Cycle',
                    DOI: '5, 31-34',
                    time: ''
                }
            ]
        },
        {
            year: '2005',
            paperList: [
                {
                    members: '(***) Min Hu, Pingwei Li, Ling Song, Philip D Jeffrey, Tatiana A Chenova, Keith D Wilkinson, Robert E Cohen, Yigong Shi. (2005)',
                    linkText: 'Structure and mechanisms of the proteasome-associated deubiquitinating enzyme USP14',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/16211010',
                    journalName: 'EMBO J',
                    DOI: '24, 3747-3756',
                    time: ''
                },
                {
                    members: '(***) Nieng Yan, Jijie Chai, Eui Seung Lee, Lichuan Gu, Qun Liu, Jiaqing He, Jia-Wei Wu, David Kokel, Huilin Li, Quan Hao,' +
                             ' Ding Xue, Yigong Shi. (2005)',
                    linkText: 'Structure of the CED-4/CED-9 complex reveals insights into programmed cell death in Caenorhabditis elegans',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/16208361',
                    journalName: 'Nature',
                    DOI: '437, 831-837',
                    time: ''
                },
                {
                    members: 'Nieng Yan, Yigong Shi. (2005)',
                    linkText: 'Mechanisms of Apoptosis through Structural Biology',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/16212486',
                    journalName: 'Annual Review Cell Dev Biol',
                    DOI: '21, 35-56',
                    time: ''
                },
                {
                    members: 'Qing Bao, Stefan J. Riedl, Yigong Shi. (2005)',
                    linkText: 'Structure of Apaf-1 in the Auto-Inhibited Form: A Critical Role for ADP',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/15970665',
                    journalName: 'Cell Cycle',
                    DOI: '4(8)',
                    time: ''
                },
                {
                    members: 'Xinchao Yu, Devrim Acehan, Jean-François Ménétret, Christopher R. Booth, Steven J. Ludtke, Stefan J. Riedl, Yigong Shi,' +
                             ' Xiaodong Wang, and Christopher W. Akey. (2005)',
                    linkText: 'A structure of the human apoptosome at 12.8 A resolution provides insights into this cell death platform',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/16271896',
                    journalName: 'Structure',
                    DOI: '1,1725-35',
                    time: ''
                },
                {
                    members: '(***) Yang Chao, Eric N. Shiozaki, Srinivasa M. Srinivasula, Daniel J. Rigotti, Robert Fairman, Yigong Shi. (2005)',
                    linkText: 'Engineering a Dimeric Caspase-9: A Re-evaluation of the Induced Proximity Model for Caspase Activation',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/15941357',
                    journalName: 'PLoS Biology',
                    DOI: '3, e183',
                    time: ''
                },
                {
                    members: '(***) Liang Feng, Suiping Zhou, Lichuan Gu, David A. Gell, Joel P. Mackay, Mitchell J. Weiss, Andrew J. Gow, Yigong Shi. (2005)',
                    linkText: 'Structure of oxidized alpha-haemoglobin bound to AHSP reveals a protective mechanism for haem',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/15931225',
                    journalName: 'Nature',
                    DOI: '435, 697–701',
                    time: ''
                },
                {
                    members: '(***) Stefan J. Riedl, Wenyu Li, Yang Chao, Robert Schwarzenbacher, Yigong Shi. (2005)',
                    linkText: 'Structure of the apoptotic protease activating factor 1 (Apaf-1) bound to ADP',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/15829969',
                    journalName: 'Nature',
                    DOI: '434, 926–933',
                    time: ''
                }
            ]
        },
        {
            year: '2004',
            paperList: [
                {
                    members: 'Michael D. Tibbetts, Eric N. Shiozaki, Lichuan Gu, E. Robert McDonald III, Wafik S. El-Deiry, Yigong Shi. (2004)',
                    linkText: 'Crystal Structure of a Novel FYVE-type Zinc Finger Domain from the Caspase Regulator CARP2',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/15576038',
                    journalName: 'Structure',
                    DOI: '12, 2257–2263',
                    time: ''
                },
                {
                    members: '(***) Liang Feng, David A. Gell, Suiping Zhou, Lichuan Gu, Yi Kong, Jianqing Li, Min Hu, Nieng Yan, Christopher Lee,' +
                             ' Anne M. Rich, Robert S. Armstrong, Peter A. Lay, Andrew J. Gow, Mitchell J. Weiss, Joel P. Mackay, Yigong Shi. (2004)',
                    linkText: 'Molecular Mechanism of AHSP-mediated Stabilization of alpha-hemoglobin',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/15550245',
                    journalName: 'Cell',
                    DOI: '119, 629–640',
                    time: ''
                },
                {
                    members: 'Ping La, Albert C. Silva, Zhaoyuan Hou, Haoren Wang, Robert W. Schnepp, Nieng Yan, Yigong Shi, Xianxin Hua. (2004)',
                    linkText: 'Direct Binding of DNA by Tumor Suppressor Menin',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/15331604',
                    journalName: 'J Biol Chem',
                    DOI: '279, 49045–49054',
                    time: ''
                },
                {
                    members: 'Stefan J. Riedl, Yigong Shi. (2004)',
                    linkText: 'Molecular mechanisms of caspase regulation during apoptosis',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/15520809',
                    journalName: 'Nature Review – Mol Cell Biol',
                    DOI: '5, 897–907',
                    time: ''
                },
                {
                    members: '(***) Nieng Yan, Lichuan Gu, David Kokel, Jijie Chai, Wenyu Li, Aidong Han, Lin Chen, Ding Xue, Yigong Shi. (2004)',
                    linkText: 'Structural, Biochemical and Functional Analyses of CED-9 Recognition by the Pro-apoptotic Proteins EGL-1 and CED-4.',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/15383288',
                    journalName: 'Mol Cell',
                    DOI: '15, 999–1006',
                    time: ''
                },
                {
                    members: 'Eric N. Shiozaki, Yigong Shi. (2004)',
                    linkText: 'Caspases, IAPs, and Smac/DIABLO: Mechanisms from Structural Biology',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/15337122',
                    journalName: 'Trends Biochem Sci',
                    DOI: '29 (9), 486–494',
                    time: ''
                },
                {
                    members: 'Yigong Shi. (2004)',
                    linkText: 'Caspase Activation, Inhibition, and Re-activation: A Mechanistic View',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/15273300',
                    journalName: 'Protein Science',
                    DOI: '13,1979-1987',
                    time: ''
                },
                {
                    members: 'Yigong Shi. (2004)',
                    linkText: 'Caspase Activation: Revisiting the Induced Proximity model',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/15210107',
                    journalName: 'Cell',
                    DOI: '117, 855–858',
                    time: ''
                },
                {
                    members: '(***) Eric N.Shiozaki, Lichuan Gu, Nieng Yan, Yigong Shi. (2004)',
                    linkText: 'Structure of the BRCT Repeats of BRCA1 bound to a BACH1 Phosphopeptide: Implications for Signaling',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/15125843',
                    journalName: 'Mol Cell',
                    DOI: '14, 405–412',
                    time: ''
                },
                {
                    members: '(***) Nieng Yan, Jia-Wei Wu, Jun R. Huh, Jijie Chai, Wenyu Li, Bruce A. Hay, Yigong Shi. (2004)',
                    linkText: 'Molecular mechanisms of DrICE inhibition by DIAP1 and removal of inhibition by Reaper, Hid and Grim',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/15107838',
                    journalName: 'Nat Struct & Mol Biol',
                    DOI: '11 (5), 420–428',
                    time: ''
                },
                {
                    members: 'Joshua P. Frederick, Nicole T. Liberati, David S. Waddell, Yigong Shi, Xiao-Fan Wang. (2004)',
                    linkText: 'Transforming Growth Factor beta-Mediated Transcriptional Repression of c-myc Is Dependent on Direct' +
                              ' Binding of Smad3 to a Novel Repressive Smad Binding Element. ',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/14993291',
                    journalName: 'Mol Cell Biol',
                    DOI: '24 (6), 2546–2559',
                    time: ''
                },
                {
                    members: 'Jun R. Huh, Stephanie Y. Vernooy, Hong Yu, Nieng Yan, Yigong Shi, Ming Guo, Bruce A. Hay. (2004)',
                    linkText: 'Multiple apoptotic caspase cascades are required in non-apoptotic roles for Drosophila spermatid individualization',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/14737191',
                    journalName: 'PLoS Biology',
                    DOI: '2, 43–53',
                    time: ''
                }
            ]
        },
        {
            year: '2003',
            paperList: [
                {
                    members: 'Nieng Yan, Yigong Shi. (2003)',
                    linkText: 'Histone H1.2 as a trigger for apoptosis',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/14634629',
                    journalName: 'Nature-Structural Biology',
                    DOI: '10, 983-985',
                    time: ''
                },
                {
                    members: '(***) Jijie Chai, Nieng Yan, Jun R. Huh, Jia-Wei Wu, Wenyu Li, Bruce A. Hay, Yigong Shi. (2003)',
                    linkText: 'Molecular mechanism of Reaper-Grim-Hid-mediated suppression of DIAP1-dependent Dronc ubiquitination',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/14517550',
                    journalName: 'Nature Structure Biololgy',
                    DOI: '10, 892-898',
                    time: ''
                },
                {
                    members: 'Constance J. Glover, Karen Hite, Renee DeLosh, Dominic A. Scudiero, Matthew J. Fivash, Lindsey R. Smith,' +
                             ' Robert J. Fisher, Jia-Wei Wu, Yigong Shi, Rachael A. Kipp, George L. McLendon, Edward A. Sausville, Robert H. Shoemaker. (2003)',
                    linkText: 'A high-throughput screen for identification of molecular mimics of Smac/DIABLO utilizing a fluorescence polarization assay',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/12927820',
                    journalName: 'Analytical Biochemistry',
                    DOI: '320, 157-169',
                    time: ''
                },
                {
                    members: 'Yigong Shi, Joan Massagué. (2003)',
                    linkText: 'Mechanisms of TGF-beta signaling from Cell Membrane to the Nucleus(commissioned review article)',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/12809600',
                    journalName: 'Cell',
                    DOI: '113, 685-700',
                    time: ''
                },
                {
                    members: 'Jijie Chai, Jia-Wu Wu, Nieng Yan, Joan Massagué, Nikola P. Pavletich, Yigong Shi. (2003)',
                    linkText: 'Features of a Smad3 MH1-DNA complex: Roles of water and zinc in DNA binding',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/12686552',
                    journalName: 'J Biol Chem',
                    DOI: '278, 20327-20331',
                    time: ''
                },
                {
                    members: 'Yigong Shi (2003)',
                    linkText: 'Structural Biology of Programmed Cell Death(Book chapter)',
                    linkSrc: 'http://link.springer.com/chapter/10.1007/978-1-60327-381-7_4',
                    journalName: 'in Essentials of Apoptosis: A Guide for Basic and Clinical Research, Humana Press',
                    DOI: 'pages 47-66',
                    time: ''
                },
                {
                    members: '(***) Eric N. Shiozaki, Jijie Chai, Daniel J. Rigotti, Stefan J. Riedl, Pingwei Li, Srinivasa M. Srinivasula,' +
                             ' Emad S. Alnemri, Robert Fairman, Yigong Shi. (2003)',
                    linkText: 'Mechanism of XIAP-mediated Inhibition of Caspase-9',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/12620238',
                    journalName: 'Mol.Cell',
                    DOI: '11, 519-527',
                    time: ''
                }
            ]
        },
        {
            year: '2002',
            paperList: [
                {
                    members: '(***) Min Hu, Pingwei Li, Muyang Li, Wenyu Li, Tingting Yao, Jia-Wei Wu, Wei Gu, Robert E. Cohen, Yigong Shi. (2002)',
                    linkText: 'Crystal Structure of a UBP-Family Deubiquitinating Enzyme in Isolation and in Complex with Ubiquitin Aldehyde',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/12507430',
                    journalName: 'Cell',
                    DOI: '111, 1041-1054',
                    time: ''
                },
                {
                    members: 'Xiaochen Wang, Chonglin Yang, Jijie Chai, Yigong Shi, Ding Xue. (2002)',
                    linkText: 'Mechanisms of AIF-mediated apoptotic DNA degradation in Caenorhabditis elegans',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/12446902',
                    journalName: 'Science',
                    DOI: '298, 1587-1592',
                    time: ''
                },
                {
                    members: '(***) Jia-Wei Wu, Ariel R. Krawitz, Jijie Chai, Wenyu Li, Fangjiu Zhang, Kunxin Luo, Yigong Shi. (2002)',
                    linkText: 'Structural Mechanism of Smad4 Recognition by the Nuclear Oncoprotein Ski: Insights on Ski-Mediated Repression of TGF-beta Signaling',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/12419246',
                    journalName: 'Cell',
                    DOI: '111, 357-367',
                    time: ''
                },
                {
                    members: 'Rachael A. Kipp, Martin A. Case, Aislyn D. Wist, Catherine M. Cresson, Maria Carrell, Erin Griner, Arun Wiita,' +
                             ' Philip A. Albiniak, Yigong Shi, Martin F. Semmelhack, George L. McLendon. (2002)',
                    linkText: 'Molecular Targeting of Inhibitor of Apoptosis Proteins Based on Small Molecule Mimics of Natural Binding Partners',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/12044166',
                    journalName: 'Biochem',
                    DOI: '41, 7344-7349',
                    time: ''
                },
                {
                    members: '(***) Wenyu Li, Jijie Chai, Srinivasa M. Srinivasula, Emad S. Alnemri, Yigong Shi. (2002)',
                    linkText: 'Structure of the Mitochondrial Serine Portease Omi/HtrA2: Insights for Its Proapoptotic Function',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/11967569',
                    journalName: 'Nature Struct. Biol',
                    DOI: '9, 436-441',
                    time: ''
                },
                {
                    members: 'Eric Shiozaki, Jijie Chai, Yigong Shi. (2002)',
                    linkText: 'Oligomerization and Activation of Caspase-9 Induced by the CARD Domain of Apaf-1',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/11904389',
                    journalName: 'Proc Natl Acad Sci U S A',
                    DOI: '99, 4197-4202',
                    time: ''
                },
                {
                    members: 'Yigong Shi. (2002)',
                    linkText: 'Mechanisms of Caspase Activation and Inhibition During Apoptosis',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/11931755',
                    journalName: 'Mol Cell',
                    DOI: '9, 459-470',
                    time: ''
                },
                {
                    members: 'Yigong Shi. (2002)',
                    linkText: 'Apoptosome: the cellular engine for the activation of caspase-9',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/12005427',
                    journalName: 'Structure',
                    DOI: '10, 285-288',
                    time: ''
                },
                {
                    members: 'Srinivasa M. Srinivasula, Pinaki Datta, Masatomo Kobayashi, Miki Fujioka, Jia-Wei Wu, Ramesh Hegde, ZhiJia Zhang, Rula Mukattash,' +
                             ' Teresa Fernandes-Alnemri, Yigong Shi, James B. Jaynes, Emad S. Alnemri. (2002)',
                    linkText: 'Sickle , a novel Drosophila death gene in the reaper/hid/grim region encodes an IAP-inhibitory protein',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/11818063',
                    journalName: 'Curr Biol',
                    DOI: '12, 125-130',
                    time: ''
                },
                {
                    members: 'Yigong Shi. (2002)',
                    linkText: 'A conserved tetrapeptide motif: Potentiating apoptosis through IAP-binding',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/11840157',
                    journalName: 'Cell Death Differ',
                    DOI: '9, 93-95',
                    time: ''
                }
            ]
        },
        {
            year: '2001',
            paperList: [
                {
                    members: '(***) Jia-Wei Wu, Min Hu, Jijie Chai, Morgan Huse, Carey Li, Saw Kyin, Robert Fairman, Tom Muir, Joan Massagué, Yigong Shi. (2001)',
                    linkText: 'Crystal Structure of a Phosphorylated Smad2: Recognition of Phosphoserine Motif and Insights on Smad Function in TGF-beta Signaling',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/11779503',
                    journalName: 'Mol Cell',
                    DOI: '8, 1277-1289',
                    time: ''
                },
                {
                    members: 'Stephen W. Fesik, Yigong Shi. (2001)',
                    linkText: 'Controlling the Caspases',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/11711663',
                    journalName: 'Science',
                    DOI: '294, 1477-1478',
                    time: ''
                },
                {
                    members: '(***) Jijie Chai Qi Wu, Eric Shiozaki, Srinivasa M. Srinivasula, Emad S. Alnemri, Yigong Shi. (2001)',
                    linkText: 'Crystal Structure of a Procaspase-7 Zymogen: Mechanisms of Activation and Substrate Binding',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/11701129',
                    journalName: 'Cell',
                    DOI: '107, 399-407',
                    time: ''
                },
                {
                    members: '(***) Jia-Wei Wu, Amy Cocina, Jijie Chai, Bruce Hay, Yigong Shi. (2001)',
                    linkText: 'Structural Analysis of a Functional DIAP1 Fragment Bound to Grim and Hid Peptides',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/11511363',
                    journalName: 'Mol Cell',
                    DOI: '8, 95-104',
                    time: ''
                },
                {
                    members: 'Jia-Wei Wu, Jack Penry, Robert Fairman, Yigong Shi. (2001)',
                    linkText: 'Formation of a Stable Heterodimer between Smad2 and Smad4',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/11274206',
                    journalName: 'J Biol Chem',
                    DOI: '276, 20688-20694',
                    time: ''
                },
                {
                    members: 'Yigong Shi. (2001)',
                    linkText: 'A Structural View of the Mitochondria-mediated Apoptosis',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/11323712',
                    journalName: 'Nature Struct. Biol',
                    DOI: '8, 394-401',
                    time: ''
                },
                {
                    members: '(***) Jijie Chai, Eric Shiozaki, Srinivasa M. Srinivasula, Qi Wu, Pinaki Datta, Emad S. Alnemri, Yigong Shi. (2001)',
                    linkText: 'Structural Basis of Caspase-7 Inhibition by XIAP',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/11257230',
                    journalName: 'Cell',
                    DOI: '104, 769-780',
                    time: ''
                },
                {
                    members: 'Srinivasa M. Srinivasula, Ayman Saleh, Ramesh Hedge, Pinaki Datta, Eric Shiozaki, Paul D. Robbins,' +
                             ' Teresa Fernandes-Alnemri, Yigong Shi, Emad S. Alnemri. (2001)',
                    linkText: 'A conserved XIAP-interaction motif in caspase-9 and Smac/DIABLO mediates opposing effects on caspase activity and apoptosis',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/11242052',
                    journalName: 'Nature',
                    DOI: '409, 112-116',
                    time: ''
                },
                {
                    members: 'Yigong Shi. (2001)',
                    linkText: 'Structural Insights on Smad Function in TGF-beta signaling',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/11223879',
                    journalName: 'BioEssays',
                    DOI: '23, 223-232',
                    time: ''
                }
            ]
        },
        {
            year: '2000',
            paperList: [
                {
                    members: '(***) Geng Wu, Jijie Chai, Tomeka Suber, Jia-Wei Wu, Chunying Du, Xiaodong Wang, Yigong Shi. (2000)',
                    linkText: 'Structural Basis of IAP Recognition by Smac/DIABLO',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/11140638',
                    journalName: 'Nature',
                    DOI: '408, 1008-1012',
                    time: ''
                },
                {
                    members: '(***) Jijie Chai, Chunying Du, Jia-Wei Wu, Saw Kyin, Xiaodong Wang, Yigong Shi. (2000)',
                    linkText: 'Structural and Biochemical Basis of Apoptotic Activation by Smac/DIABLO',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/10972280',
                    journalName: 'Nature',
                    DOI: '406, 855-862',
                    time: ''
                },
                {
                    members: 'Yigong Shi. (2000)',
                    linkText: 'Survivin structure: crystal unclear',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/10932241',
                    journalName: 'Nature Struct Biol',
                    DOI: '7, 620-623',
                    time: ''
                },
                {
                    members: 'Sha Ha, Debbie Walker, Yigong Shi, Suzanne Walker. (2000)',
                    linkText: 'The 1.9 Å crystal structure of Escherichia coli MurG, a membrane-associated glycosyltransferase involved in peptidoglycan biosynthesis',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/10892798',
                    journalName: 'Portein Sci',
                    DOI: '9, 1045-1052',
                    time: ''
                },
                {
                    members: '(***) Geng Wu, Ye-Guang Chen, Barish Ozdamar, Cassie Gyuricza, P. Andrew Chong, Jeffrey L. Wrana, Joan Massagué, Yigong Shi (2000)',
                    linkText: 'Structural Basis of Smad2 Recruitment by the Smad Anchor for Receptor Activation (SARA)',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/10615055',
                    journalName: 'Science',
                    DOI: '287, 92-97',
                    time: ''
                }
            ]
        },
        {
            year: '1998-1999',
            paperList: [
                {
                    members: 'Xianxin Hua, Zachary Miller, Geng Wu, Yigong Shi, Harvey F. Lodish. (1999)',
                    linkText: 'Specificity in TGF-beta-induced Transcription: Interactions of Promoter DNA, Smad3 and TFE3',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/10557285',
                    journalName: 'Proc Natl Acad Sci U S A',
                    DOI: '96, 13130-13135',
                    time: ''
                },
                {
                    members: 'Jie-Oh Lee, Haijuan Yang, Maria-Magdalena, Antonio Di Cristofano, Tomohiko Maehama, Yigong Shi, Jack E. Dixon, Pier P. Pandolfi,' +
                             ' Nikola P. Pavletich. (1999)',
                    linkText: 'Crystal Structure of the PTEN Tumor Suppressor: Implications for Its Phosphoinositide Phosphatase Activity and Membrane Association',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/10555148',
                    journalName: 'Cell',
                    DOI: '99, 323-334',
                    time: ''
                },
                {
                    members: '(***) Hongxu Qin, Srinivasa M. Srinivasula, Geng Wu, Emad S. Alnemri, Yigong Shi. (1999)',
                    linkText: 'Structural Basis of Procaspase-9 Recruitment by the Apoptotic Protease Activating Factor 1',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/10376594',
                    journalName: 'Nature',
                    DOI: '399, 549-557',
                    time: ''
                },
                {
                    members: 'Shi-Du Yan, Yigong Shi, et al. (1999)',
                    linkText: 'Role of ERAB/L-3-hydroxyacyl-coenzyme A dehydrogenase type II activity in beta-Amyloid-induced cytotoxicity',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/9890977',
                    journalName: 'J Biol Chem',
                    DOI: '274, 2145-2156',
                    time: ''
                },
                {
                    members: '(***) Yigong Shi, Yan-Fei Wang, Lata Jayaraman, Haijuan Yang, Joan Massagué, Nikola Pavletich. (1998)',
                    linkText: 'Crystal Structure of A Smad MH1 Domain Bound to DNA: Insights on DNA-binding in TGF-beta Signaling',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/9741623',
                    journalName: 'Cell',
                    DOI: '94, 585-594',
                    time: ''
                },
                {
                    members: 'Akiko Hata, Yigong Shi, Joan Massagué. (1998)',
                    linkText: 'TGF-beta Signaling and Cancer: Structural and Functional Consequences of Mutations in Smads',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/9679244',
                    journalName: 'Molecular Medicine Today',
                    DOI: '4, 257-262',
                    time: ''
                },
                {
                    members: 'Ye-Guang Chen, Akiko Hata, Roger S. Lo, David Wotton, Yigong Shi, Nikola P.Pavletich, Joan Massagué. (1998)',
                    linkText: 'Determinants of Specificity in TGF-beta Signal Transduction',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/9679059',
                    journalName: 'Genes & Dev',
                    DOI: '12, 2144-2152',
                    time: ''
                }
            ]
        },
        {
            year: 'Prior to 1998',
            paperList: [
                {
                    members: 'Roger S. Lo, Ye-Guang Chen, Yigong Shi, Nikola P. Pavletich, Joan Massagué. (1997)',
                    linkText: 'The L3 loop: a structural motif determining specific interactions between SMAD proteins and TGF-beta receptors',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/9463378',
                    journalName: 'EMBO J',
                    DOI: '17, 996-1005',
                    time: ''
                },
                {
                    members: 'Yang-Gyun Kim, Yigong Shi, Jeremy M. Berg, Srinivasan Chandrasegaran. (1997)',
                    linkText: 'Site-specific cleavage of DNA-RNA hybrids by zinc finger/Fok I cleavage domain fusions',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/9426005',
                    journalName: 'Gene',
                    DOI: '203, 43-49',
                    time: ''
                },
                {
                    members: '(***) Yigong Shi, Akiko Hata, Joan Massagué, Nikola P. Pavletich. (1997)',
                    linkText: 'A structural basis for mutational inactivation of the tumour suppressor Smad4',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/9214508',
                    journalName: 'Nature',
                    DOI: '388, 87-93',
                    time: ''
                },
                {
                    members: 'Yigong Shi, Jeremy M. Berg. (1996)',
                    linkText: 'DNA unwinding induced by zinc finger protein binding',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/8620008',
                    journalName: 'Biochemistry',
                    DOI: '35, 3845-3848',
                    time: ''
                },
                {
                    members: 'Jeremy M. Berg, Yigong Shi. (1996)',
                    linkText: 'The Galvanization of Biology: A Growing Appreciation for the Roles of Zinc',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/8599083',
                    journalName: 'Science',
                    DOI: '271, 1081-1085',
                    time: ''
                },
                {
                    members: '(***) Yigong Shi, Jeremy M. Berg. (1995)',
                    linkText: 'Specific DNA-RNA Hybrid Binding by Zinc Finger Proteins',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/7536342',
                    journalName: 'Science',
                    DOI: '268, 282-284',
                    time: ''
                },
                {
                    members: 'Yigong Shi, Jeremy M. Berg. (1995)',
                    linkText: 'A Direct Comparison of the Properties of Natural and Designed Zinc Finger Proteins',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/9383408',
                    journalName: 'Chemistry and Biology',
                    DOI: '2, 83-89',
                    time: ''
                },
                {
                    members: 'Yigong Shi, Richard D. Beger, Jeremy M. Berg. (1993)',
                    linkText: 'Metal Binding Properties of Single Amino Acid Deletion Mutants of Zinc Finger Peptides: Studies Using Cobalt(II) as a Spectroscopic Probe',
                    linkSrc: 'http://www.ncbi.nlm.nih.gov/pubmed/8471726',
                    journalName: 'Biophysical J',
                    DOI: '64, 749-753',
                    time: ''
                }
            ]
        }
    ],

    /* structures页面 */
    structures: [
        {
            orientation: 'Macromolecular Machineries',
            categoryList: [
                {
                    categoryName: 'Spliceosome',
                    allStructures: [
                        [
                            {
                                viceName: null,
                                sList: [
                                    {
                                        itemName: 'yeast B<sup>act</sup> spliceosome',
                                        fullName: null,
                                        ID: '5GM6',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['5GM6', '5GM62'],
                                        detailLink: 'http://science.sciencemag.org/content/early/2016/07/20/science.aag0291?rss=1',
                                        detailLinkText: 'Structure of a yeast activated spliceosome at 3.5 Å resolution',
                                        members: 'Yan C, Wan R, Bai R, Huang G, Shi Y',
                                        journalName: 'Science',
                                        DOI: '2016 Jul 21',
                                        options: null
                                    },
                                    {
                                        itemName: 'yeast C complex spliceosome',
                                        fullName: null,
                                        ID: '5GMK',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['5GMK', '5GMK2'],
                                        detailLink: 'http://science.sciencemag.org/content/early/2016/07/20/science.aag2235?rss=1',
                                        detailLinkText: 'Structure of a yeast catalytic step I spliceosome at 3.4 Å resolution',
                                        members: 'Yan C, Wan R, Bai R, Huang G, Shi Y',
                                        journalName: 'Science',
                                        DOI: '2016 Jul 21',
                                        options: null
                                    },
                                    {
                                        itemName: 'yeast U4/U6.U5 tri-snRNP',
                                        fullName: null,
                                        ID: '3JCM',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3JCM', '3JCM2'],
                                        detailLink: 'https://www.ncbi.nlm.nih.gov/pubmed/26743623',
                                        detailLinkText: 'The 3.8 Å structure of the U4/U6.U5 tri-snRNP: Insights into spliceosome assembly and catalysis',
                                        members: 'Wan R, Yan C, Bai R, Wang L, Huang M, Wong CC, Shi Y',
                                        journalName: 'Science',
                                        DOI: '2016 Jan 29',
                                        options: null
                                    },
                                    {
                                        itemName: '<span class="italic">S. pombe</span> Spliceosome',
                                        fullName: null,
                                        ID: '3JB9',
                                        optionalID: 'EMD-6413',
                                        optionalLink: 'http://emsearch.rutgers.edu/atlas/6413_summary.html',
                                        imgList: ['3JB9'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/26292707',
                                        detailLinkText: 'Structure of a yeast spliceosome at 3.6-angstrom resolution',
                                        members: 'Yan C, Hang J, Wan R, Huang M, Wong CC, Shi Y',
                                        journalName: 'Science',
                                        DOI: '2015 Aug 20',
                                        options: '<a href="http://www.ncbi.nlm.nih.gov/pubmed/26292705" target="_blank">Structural basis of pre-mRNA splicing</a>.' +
                                                 'Hang J, Wan R, Yan C, Shi Y. <span class="bold italic">Science</span>. 2015 Aug 20.',
                                        details: [
                                            '<a href="http://www.ncbi.nlm.nih.gov/pubmed/26292707" target="_blank">Structure of a yeast spliceosome at 3.6-angstrom resolution</a>.',
                                            'Yan C, Hang J, Wan R, Huang M, Wong CC, Shi Y. Science. 2015 Aug 20.',
                                            '<a href="http://www.ncbi.nlm.nih.gov/pubmed/26292705" target="_blank">Structural basis of pre-mRNA splicing</a>.',
                                            'Hang J, Wan R, Yan C, Shi Y. <span class="bold italic">Science</span>. 2015 Aug 20.'
                                        ]
                                    },
                                    {
                                        itemName: 'Lsm1-7 Complex',
                                        fullName: null,
                                        ID: '4M75',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4M75'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/24513854',
                                        detailLinkText: 'Crystal structure and biochemical analysis of the heptameric Lsm1-7 complex',
                                        members: 'Zhou L, Zhou Y, Hang J, Wan R, Lu G, Yan C, Shi Y',
                                        journalName: 'Cell Res',
                                        DOI: '2014 Apr;24(4):497-500',
                                        options: null
                                    },
                                    {
                                        itemName: 'Lsm Complex Bound to RNA',
                                        fullName: null,
                                        ID: '4M7D',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4M7D'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/24240276',
                                        detailLinkText: 'Crystal structures of the Lsm complex bound to the 3\' end sequence of U6 small nuclear RNA',
                                        members: 'Zhou L, Hang J, Zhou Y, Wan R, Lu G, Yin P, Yan C, Shi Y',
                                        journalName: 'Nature',
                                        DOI: '2014 Feb 6;506(7486):116-20',
                                        options: null
                                    }
                                ]
                            }
                        ]
                    ]
                },
                {
                    categoryName: 'Proteasome & Related Proteins',
                    allStructures: [
                        [
                            {
                                viceName: null,
                                sList: [
                                    {
                                        itemName: 'S. cerevisiae proteasome in M1 state',
                                        fullName: 'S. cerevisiae proteasome in M1 and M2 state',
                                        ID: '3JCO',
                                        optionalID: 'EMD-6574',
                                        optionalLink: 'http://emsearch.rutgers.edu/atlas/6574_summary.html',
                                        imgList: ['3JCO'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/?term=26929360',
                                        detailLinkText: 'Structure of an endogenous yeast 26S proteasome reveals two major conformational states',
                                        members: 'Luan B, Huang X, Wu J, Mei Z, Wang Y, Xue X, Yan C, Wang J, Finley D, Shi Y, Wang F',
                                        journalName: 'Proc Natl Acad Sci U S A',
                                        DOI: '2016 Mar 8;113(10):2642-7',
                                        options: null
                                    },
                                    {
                                        itemName: 'S. cerevisiae proteasome in M2 state',
                                        fullName: 'S. cerevisiae proteasome in M1 and M2 state',
                                        ID: '3JCP',
                                        optionalID: 'MD-6575',
                                        optionalLink: 'http://emsearch.rutgers.edu/atlas/6575_summary.html',
                                        imgList: ['3JCO'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/?term=26929360',
                                        detailLinkText: 'Structure of an endogenous yeast 26S proteasome reveals two major conformational states',
                                        members: 'Luan B, Huang X, Wu J, Mei Z, Wang Y, Xue X, Yan C, Wang J, Finley D, Shi Y, Wang F',
                                        journalName: 'Proc Natl Acad Sci U S A',
                                        DOI: '2016 Mar 8;113(10):2642-7',
                                        options: null
                                    },
                                    {
                                        itemName: 'H. sapiens proteasome',
                                        fullName: 'H. sapiens proteasome',
                                        ID: '5GJR',
                                        optionalID: 'EMD-9512',
                                        optionalLink: 'http://emsearch.rutgers.edu/atlas/9512_summary.html',
                                        imgList: ['5GJR'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/27428775',
                                        detailLinkText: 'An atomic structure of the human 26S proteasome',
                                        members: 'Huang X, Luan B, Wu J, Shi Y',
                                        journalName: 'Nat Struct Mol Biol',
                                        DOI: '2016 Jul 18. doi: 10.1038/nsmb.3273. [Epub ahead of print]',
                                        options: null
                                    },
                                    {
                                        itemName: 'H. sapiens proteasome bound to USP14-UbAl',
                                        fullName: 'H. sapiens proteasome',
                                        ID: '5GJQ',
                                        optionalID: 'EMD-9511',
                                        optionalLink: 'http://emsearch.rutgers.edu/atlas/9511_summary.html',
                                        imgList: ['5GJR'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/27428775',
                                        detailLinkText: 'An atomic structure of the human 26S proteasome',
                                        members: 'Huang X, Luan B, Wu J, Shi Y',
                                        journalName: 'Nat Struct Mol Biol',
                                        DOI: '2016 Jul 18. doi: 10.1038/nsmb.3273. [Epub ahead of print]',
                                        options: null
                                    },
                                    {
                                        itemName: 'MecA-ClpC',
                                        fullName: 'H. sapiens proteasome',
                                        ID: '3PXI',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3PXI'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/21368759',
                                        detailLinkText: 'Structure and mechanism of the hexameric MecA-ClpC molecular machine',
                                        members: 'Wang F, Mei Z, Qi Y, Yan C, Hu Q, Wang J, Shi Y',
                                        journalName: 'Nature',
                                        DOI: '2011 Mar 17;471(7338):331-5',
                                        options: null
                                    },
                                    {
                                        itemName: 'MecA Degradation Tag',
                                        fullName: 'H. sapiens proteasome',
                                        ID: '3JTP',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3JTP'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/19801546',
                                        detailLinkText: 'Crystal structure of the MecA degradation tag',
                                        members: 'Wang F, Mei Z, Qi Y, Yan C, Xiang S, Zhou Z, Hu Q, Wang J, Shi Y',
                                        journalName: 'J Biol Chem',
                                        DOI: '2009 Dec 4;284(49):34376-81',
                                        options: null
                                    },
                                    {
                                        itemName: 'Hausp Catalytic domain',
                                        fullName: 'The catalytic domain of Hausp in isolation and in complex with Ubal',
                                        ID: '1NBF',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1NBF', 'hausp'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/21811237',
                                        detailLinkText: 'Structural mechanisms of DIAP1 auto-inhibition and DIAP1-mediated inhibition of drICE',
                                        members: '',
                                        journalName: '',
                                        DOI: '',
                                        options: '<a href="http://www.ncbi.nlm.nih.gov/pubmed/12507430">Crystal Structure of a UBP-family Deubiquitinating ' +
                                                 'Enzyme in Isolation and in Complex with Ubiquitin Aldehyde</a>.<br>Min Hu, Pingwei Li, Muyang Li, Wenyu Li, ' +
                                                 'Tingting Yao, Jia-Wei Wu, Wei Gu, Robert E. Cohen, and Yigong Shi (2002). <span class="bold italic">Cell' +
                                                 '</span>. 111, 1041-1054.'
                                    },
                                    {
                                        itemName: 'Hausp/Ubal',
                                        fullName: 'The catalytic domain of Hausp in isolation and in complex with Ubal',
                                        ID: '1NB8',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1NBF', 'hausp'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/21811237',
                                        detailLinkText: 'Structural mechanisms of DIAP1 auto-inhibition and DIAP1-mediated inhibition of drICE',
                                        members: '',
                                        journalName: '',
                                        DOI: '',
                                        options: '<a href="http://www.ncbi.nlm.nih.gov/pubmed/12507430">Crystal Structure of a UBP-family Deubiquitinating ' +
                                                 'Enzyme in Isolation and in Complex with Ubiquitin Aldehyde</a>.<br>Min Hu, Pingwei Li, Muyang Li, Wenyu Li, ' +
                                                 'Tingting Yao, Jia-Wei Wu, Wei Gu, Robert E. Cohen, and Yigong Shi (2002). <span class="bold italic">Cell' +
                                                 '</span>. 111, 1041-1054.'
                                    },
                                    {
                                        itemName: 'TRAF-like domain of Hausp',
                                        fullName: 'The catalytic domain of Hausp in isolation and in complex with Ubal',
                                        ID: '2F1W',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1NBF', 'hausp'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/21811237',
                                        detailLinkText: 'Structural mechanisms of DIAP1 auto-inhibition and DIAP1-mediated inhibition of drICE',
                                        members: '',
                                        journalName: '',
                                        DOI: '',
                                        options: '<a href="http://www.ncbi.nlm.nih.gov/pubmed/12507430">Crystal Structure of a UBP-family Deubiquitinating ' +
                                                 'Enzyme in Isolation and in Complex with Ubiquitin Aldehyde</a>.<br>Min Hu, Pingwei Li, Muyang Li, Wenyu Li, ' +
                                                 'Tingting Yao, Jia-Wei Wu, Wei Gu, Robert E. Cohen, and Yigong Shi (2002). <span class="bold italic">Cell' +
                                                 '</span>. 111, 1041-1054.'
                                    },
                                    {
                                        itemName: 'Hausp',
                                        fullName: 'The catalytic domain of Hausp in isolation and in complex with Ubal',
                                        ID: '2F1Z',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1NBF', 'hausp'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/21811237',
                                        detailLinkText: 'Structural mechanisms of DIAP1 auto-inhibition and DIAP1-mediated inhibition of drICE',
                                        members: '',
                                        journalName: '',
                                        DOI: '',
                                        options: '<a href="http://www.ncbi.nlm.nih.gov/pubmed/12507430">Crystal Structure of a UBP-family Deubiquitinating ' +
                                                 'Enzyme in Isolation and in Complex with Ubiquitin Aldehyde</a>.<br>Min Hu, Pingwei Li, Muyang Li, Wenyu Li, ' +
                                                 'Tingting Yao, Jia-Wei Wu, Wei Gu, Robert E. Cohen, and Yigong Shi (2002). <span class="bold italic">Cell' +
                                                 '</span>. 111, 1041-1054.'
                                    },
                                    {
                                        itemName: 'Hausp/p53',
                                        fullName: 'The catalytic domain of Hausp in isolation and in complex with Ubal',
                                        ID: '2F1X',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1NBF', 'hausp'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/21811237',
                                        detailLinkText: 'Structural mechanisms of DIAP1 auto-inhibition and DIAP1-mediated inhibition of drICE',
                                        members: '',
                                        journalName: '',
                                        DOI: '',
                                        options: '<a href="http://www.ncbi.nlm.nih.gov/pubmed/12507430">Crystal Structure of a UBP-family Deubiquitinating ' +
                                                 'Enzyme in Isolation and in Complex with Ubiquitin Aldehyde</a>.<br>Min Hu, Pingwei Li, Muyang Li, Wenyu Li, ' +
                                                 'Tingting Yao, Jia-Wei Wu, Wei Gu, Robert E. Cohen, and Yigong Shi (2002). <span class="bold italic">Cell' +
                                                 '</span>. 111, 1041-1054.'
                                    },
                                    {
                                        itemName: 'Hausp/MDM2',
                                        fullName: 'The catalytic domain of Hausp in isolation and in complex with Ubal',
                                        ID: '2F1Y',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1NBF', 'hausp'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/21811237',
                                        detailLinkText: 'Structural mechanisms of DIAP1 auto-inhibition and DIAP1-mediated inhibition of drICE',
                                        members: '',
                                        journalName: '',
                                        DOI: '',
                                        options: '<a href="http://www.ncbi.nlm.nih.gov/pubmed/12507430">Crystal Structure of a UBP-family Deubiquitinating ' +
                                                 'Enzyme in Isolation and in Complex with Ubiquitin Aldehyde</a>.<br>Min Hu, Pingwei Li, Muyang Li, Wenyu Li, ' +
                                                 'Tingting Yao, Jia-Wei Wu, Wei Gu, Robert E. Cohen, and Yigong Shi (2002). <span class="bold italic">Cell' +
                                                 '</span>. 111, 1041-1054.'
                                    },
                                    {
                                        itemName: 'USP14',
                                        fullName: 'Deubiquitinating enzymeUSP14 in isolation and in complex with Ubal',
                                        ID: '2AYN',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['2AYN'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/21811237',
                                        detailLinkText: 'Structure and mechanisms of the proteasome-associated deubiquitinating enzyme USP14',
                                        members: 'Min Hu, Pingwei Li, Ling Song, Philip D Jeffrey, Tatiana A Chenova, Keith D Wilkinson, Robert E Cohen, and Yigong Shi (2005)',
                                        journalName: 'EMBO J',
                                        DOI: '24, 3747-56',
                                        options: null
                                    },
                                    {
                                        itemName: 'USP14/Ubal',
                                        fullName: 'Deubiquitinating enzymeUSP14 in isolation and in complex with Ubal',
                                        ID: '2AYO',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['2AYO'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/21811237',
                                        detailLinkText: 'Structure and mechanisms of the proteasome-associated deubiquitinating enzyme USP14',
                                        members: 'Min Hu, Pingwei Li, Ling Song, Philip D Jeffrey, Tatiana A Chenova, Keith D Wilkinson, Robert E Cohen, and Yigong Shi (2005)',
                                        journalName: 'EMBO J',
                                        DOI: '24, 3747-56',
                                        options: null
                                    }
                                ]
                            }
                        ]
                    ]
                }
            ]
        },
        {
            orientation: 'Intramembrane Proteases',
            categoryList: [
                {
                    categoryName: 'Gamma-Secretase',
                    allStructures: [
                        [
                            {
                                viceName: null,
                                sList: [
                                    {
                                        itemName: 'human γ-secretase at 3.4 Å resolution',
                                        fullName: null,
                                        ID: '5A63',
                                        optionalID: 'EMD-3061',
                                        optionalLink: 'http://emsearch.rutgers.edu/atlas/3061_summary.html',
                                        imgList: ['5A63'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/26280335',
                                        detailLinkText: 'An atomic structure of human γ-secretase',
                                        members: 'Bai XC, Yan C, Yang G, Lu P, Ma D, Sun L, Zhou R, Scheres SH, Shi Y',
                                        journalName: 'Nature',
                                        DOI: '2015 Aug 17. doi: 10.1038/nature14892',
                                        options: null
                                    },
                                    {
                                        itemName: 'human γ-secretase at 4.3 Å resolution',
                                        fullName: null,
                                        ID: '4UIS',
                                        optionalID: 'EMD-2974',
                                        optionalLink: 'http://emsearch.rutgers.edu/atlas/2974_summary.html',
                                        imgList: ['4UIS'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/25918421',
                                        detailLinkText: 'Structural basis of human γ-secretase assembly',
                                        members: 'Sun L, Zhao L, Yang G, Yan C, Zhou R, Zhou X, Xie T, Zhao Y, Wu S, Li X, Shi Y',
                                        journalName: 'Proc Natl Acad Sci U S A',
                                        DOI: '2015 May 12;112(19):6003-8',
                                        options: null
                                    },
                                    {
                                        itemName: 'Nicastrin',
                                        fullName: null,
                                        ID: '4R12',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4R12'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/25197054',
                                        detailLinkText: 'Crystal structure of the γ-secretase component nicastrin',
                                        members: 'Xie T, Yan C, Zhou R, Zhao Y, Sun L, Yang G, Lu P, Ma D, Shi Y',
                                        journalName: 'Proc Natl Acad Sci U S A',
                                        DOI: '2014 Sep 16;111(37):13349-54',
                                        options: null
                                    },
                                    {
                                        itemName: 'a model of extracellular domain of γ-secretase',
                                        fullName: null,
                                        ID: '4UPC',
                                        optionalID: 'EMD-2677',
                                        optionalLink: 'http://emsearch.rutgers.edu/atlas/2677_summary.html',
                                        imgList: ['4UPC'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/25043039',
                                        detailLinkText: 'Three-dimensional structure of human γ-secretase',
                                        members: 'Lu P, Bai XC, Ma D, Xie T, Yan C, Sun L, Yang G, Zhao Y, Zhou R, Scheres SH, Shi Y',
                                        journalName: 'Nature',
                                        DOI: '2014 Aug 14;512(7513):166-70',
                                        options: null
                                    }
                                ]
                            }
                        ]
                    ]
                },
                {
                    categoryName: 'Intramembrane Protease Family',
                    allStructures: [
                        [
                            {
                                viceName: null,
                                sList: [
                                    {
                                        itemName: 'PSH',
                                        fullName: null,
                                        ID: '4Y6K',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4Y6K'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/25733893',
                                        detailLinkText: 'Cleavage of amyloid precursor protein by an archaeal presenilin homologue PSH',
                                        members: 'Dang S, Wu S, Wang J, Li H, Huang M, He W, Li YM, Wong CC, Shi Y',
                                        journalName: 'Proc Natl Acad Sci U S A',
                                        DOI: '2015 Mar 17;112(11):3344-9',
                                        options: null
                                    },
                                    {
                                        itemName: 'PSH',
                                        fullName: null,
                                        ID: '4HYG',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4HYG'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/23254940',
                                        detailLinkText: 'Structure of a presenilin family intramembrane aspartate protease',
                                        members: 'Li X, Dang S, Yan C, Gong X, Wang J, Shi Y',
                                        journalName: 'Nature',
                                        DOI: '2013 Jan 3;493(7430):56-61',
                                        options: null
                                    },
                                    {
                                        itemName: 'mjS2P',
                                        fullName: 'S2P',
                                        ID: '3B4R',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3B4R'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/18063795',
                                        detailLinkText: 'Structure of a Site-2 Protease Family Intramembrane Metalloprotease',
                                        members: 'Liang Feng*, Hanchi Yan*, Zhuoru Wu*, Nieng Yan, Zhe Wang, Philip D. Jeffrey, and Yigong Shi (2007)',
                                        journalName: 'Science',
                                        DOI: '318, 1608-12 (The single asterisk indicates equal contributions.)',
                                        options: null
                                    },
                                    {
                                        itemName: 'GlpG',
                                        fullName: 'GlpG--A Rhomboid family intramembrane serine protease',
                                        ID: '2NRF',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['2NRF'],
                                        detailLink: 'http://www.nature.com/nsmb/journal/v13/n12/full/nsmb1179.html',
                                        detailLinkText: 'Structural analysis of a rhomboid family intramembrane protease reveals a gating mechanism for substrate entry',
                                        members: 'Zhuoru Wu*, Nieng Yan*, Liang Feng*, Adam Oberstein, Hanchi Yan, Rosanna P Baker, Lichuan Gu, Philip D Jeffrey, Sinisa Urban, and Yigong Shi (2006)',
                                        journalName: 'Nat. Struct. & Mol. Biol',
                                        DOI: 'Advanced online publicatoin. (The single asterisk indicates equal contributions.)',
                                        options: null
                                    }
                                ]
                            }
                        ]
                    ]
                },
                {
                    categoryName: 'Other Important Membrane Proteins',
                    allStructures: [
                        [
                            {
                                viceName: 'Antiporters in Acid Resistance',
                                sList: [
                                    {
                                        itemName: 'AdiC',
                                        fullName: null,
                                        ID: '3L1L',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3L1L'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/20090677',
                                        detailLinkText: 'Mechanism of substrate recognition and transport by an amino acid antiporter',
                                        members: 'Gao X, Zhou L, Jiao X, Lu F, Yan C, Zeng X, Wang J, Shi Y',
                                        journalName: 'Nature',
                                        DOI: '2010 Feb 11;463(7282):828-32',
                                        options: null
                                    },
                                    {
                                        itemName: 'Adic',
                                        fullName: null,
                                        ID: '3LRB',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3LRB'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/19478139',
                                        detailLinkText: 'Structure and mechanism of an amino acid antiporter',
                                        members: 'Gao X, Lu F, Zhou L, Dang S, Sun L, Li X, Wang J, Shi Y',
                                        journalName: 'Science',
                                        DOI: '2009 Jun 19;324(5934):1565-8',
                                        options: null
                                    },
                                    {
                                        itemName: 'GadC',
                                        fullName: 'S2P',
                                        ID: '4DJK',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4DJK'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/22407317',
                                        detailLinkText: 'Structure and mechanism of a glutamate-GABA antiporter',
                                        members: 'Ma D, Lu P, Yan C, Fan C, Yin P, Wang J, Shi Y',
                                        journalName: 'Nature',
                                        DOI: '2012 Mar 11;483(7391):632-6',
                                        options: null
                                    }
                                ]
                            },
                            {
                                viceName: 'Transporters and Channels',
                                sList: [
                                    {
                                        itemName: 'Adic',
                                        fullName: null,
                                        ID: '3H6B',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3H6B'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/19478139',
                                        detailLinkText: 'Structure and mechanism of an amino acid antiporter',
                                        members: 'Gao X, Lu F, Zhou L, Dang S, Sun L, Li X, Wang J, Shi Y(2009)',
                                        journalName: 'Science',
                                        DOI: '324 1565 - 1568',
                                        options: null
                                    },
                                    {
                                        itemName: 'NarU',
                                        fullName: 'nitrate transporter NarU',
                                        ID: '4IU9',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4IU9'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/23523348',
                                        detailLinkText: 'Structure and mechanism of a nitrate transporter',
                                        members: 'Yan H, Huang W, Yan C, Gong X, Jiang S, Zhao Y, Wang J, Shi Y',
                                        journalName: 'Cell Rep',
                                        DOI: '2013 Mar 28;3(3):716-23',
                                        options: null
                                    },
                                    {
                                        itemName: 'ECF',
                                        fullName: null,
                                        ID: '4HZU',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4HZU'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/23584587',
                                        detailLinkText: 'Structure of a bacterial energy-coupling factor transporter',
                                        members: 'Wang T, Fu G, Pan X, Wu J, Gong X, Wang J, Shi Y',
                                        journalName: 'Nature',
                                        DOI: '2013 May 9;497(7448):272-6',
                                        options: null
                                    },
                                    {
                                        itemName: 'RibU',
                                        fullName: null,
                                        ID: '3P5N',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3P5N'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/20972419',
                                        detailLinkText: 'Structure and mechanism of the S component of a bacterial ECF transporter',
                                        members: 'Zhang P, Wang J, Shi Y',
                                        journalName: 'Nature',
                                        DOI: '2010 Dec 2;468(7324):717-20',
                                        options: null
                                    },
                                    {
                                        itemName: 'FocA',
                                        fullName: null,
                                        ID: '3KCU',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3KCU'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/19940917',
                                        detailLinkText: 'Structure of the formate transporter FocA reveals a pentameric aquaporin-like channel',
                                        members: 'Wang Y, Huang Y, Wang J, Cheng C, Huang W, Lu P, Xu YN, Wang P, Yan N, Shi Y',
                                        journalName: 'Nature',
                                        DOI: '2009 Nov 26;462(7272):467-72',
                                        options: null
                                    },
                                    {
                                        itemName: 'RyR1',
                                        fullName: 'ryanodine receptor RyR1',
                                        ID: '3J8H',
                                        optionalID: 'EMD-2807',
                                        optionalLink: 'http://emsearch.rutgers.edu/atlas/2807_summary.html',
                                        imgList: ['3J8H'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/25517095',
                                        detailLinkText: 'Structure of the rabbit ryanodine receptor RyR1 at near-atomic resolution',
                                        members: 'Yan Z, Bai XC, Yan C, Wu J, Li Z, Xie T, Peng W, Yin CC, Li X, Scheres SH, Shi Y, Yan N',
                                        journalName: 'Nature',
                                        DOI: '2015 Jan 1;517(7532):50-5',
                                        options: null
                                    },
                                    {
                                        itemName: 'Cyt. b561',
                                        fullName: 'cytochrome b561',
                                        ID: '4O6Y',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4O6Y'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/24449903',
                                        detailLinkText: 'Structure and mechanism of a eukaryotic transmembrane ascorbate-dependent oxidoreductase',
                                        members: 'Lu P, Ma D, Yan C, Gong X, Du M, Shi Y',
                                        journalName: 'Proc Natl Acad Sci U S A',
                                        DOI: '2014 Feb 4;111(5):1813-8',
                                        options: null
                                    }
                                ]
                            }
                        ]
                    ]
                }
            ]
        },
        {
            orientation: 'Cell Death',
            categoryList: [
                {
                    categoryName: 'Mammalian Apoptosis',
                    allStructures: [
                        [
                            {
                                viceName: null,
                                sList: [
                                    {
                                        itemName: 'Apaf-1 apoptosome',
                                        fullName: null,
                                        ID: '3JBT',
                                        optionalID: 'EMD-6480',
                                        optionalLink: 'http://emsearch.rutgers.edu/atlas/6480_summary.html',
                                        imgList: ['3JBT'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/26543158',
                                        detailLinkText: 'Atomic structure of the apoptosome: mechanism of cytochrome c- and dATP-mediated activation of Apaf-1',
                                        members: 'Zhou M, Li Y, Hu Q, Bai XC, Huang W, Yan C, Scheres SH, Shi Y',
                                        journalName: 'Genes Dev',
                                        DOI: '2015 Nov 15;29(22):2349-61',
                                        options: null
                                    },
                                    {
                                        itemName: 'Apaf-1 CARD and caspase-9 CARD complex',
                                        fullName: null,
                                        ID: '4RHW',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4RHW'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/25313070',
                                        detailLinkText: 'Molecular determinants of caspase-9 activation by the Apaf-1 apoptosome',
                                        members: 'Hu Q, Wu D, Chen W, Yan Z, Yan C, He T, Liang Q, Shi Y',
                                        journalName: 'Proc Natl Acad Sci U S A',
                                        DOI: '2014 Nov 18;111(46):16254-61',
                                        options: null
                                    },
                                    {
                                        itemName: 'Apaf-1 Card',
                                        fullName: 'CARD domain of Apaf-1',
                                        ID: '2YGS',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['2YGS'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/10376594',
                                        detailLinkText: 'Structural Basis of Procaspase-9 Recruitment by the Apoptotic Protease Activating Factor 1',
                                        members: 'Hongxu Qin, Srinivasa M. Srinivasula, Geng Wu, Emad S. Alnemri, Yigong Shi (1999)',
                                        journalName: 'Nature',
                                        DOI: '399, 549-557',
                                        options: null
                                    },
                                    {
                                        itemName: 'Card/Card',
                                        fullName: 'Complex of CARD domain of Apaf-1 and Pro-domain of Caspase-9',
                                        ID: '3YGS',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3YGS'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/10376594',
                                        detailLinkText: 'Structural Basis of Procaspase-9 Recruitment by the Apoptotic Protease Activating Factor 1',
                                        members: 'Hongxu Qin, Srinivasa M. Srinivasula, Geng Wu, Emad S. Alnemri, Yigong Shi (1999)',
                                        journalName: 'Nature',
                                        DOI: '399, 549-557',
                                        options: null
                                    },
                                    {
                                        itemName: 'Smac',
                                        fullName: 'Smac dimer',
                                        ID: '1FEW',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1FEW'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/10972280',
                                        detailLinkText: 'Structural and Biochemical Basis of Apoptotic Activation by Smac/DIABLO',
                                        members: 'Jijie Chai, Chunying Du, Jia-Wei Wu, Saw Kyin, Xiaodong Wang, and Yigong Shi (2000)',
                                        journalName: 'Nature',
                                        DOI: '406, 855-862',
                                        options: null
                                    },
                                    {
                                        itemName: 'Smac/BIR3',
                                        fullName: 'Smac complexed with BIR3 of XIAP',
                                        ID: '1FOK',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1FOK'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/11140638',
                                        detailLinkText: 'Structural Basis of IAP Recognition by Smac/DIABLO',
                                        members: 'Geng Wu*, Jijie Chai*, Tomeka Suber, Jia-Wei Wu, Chunying Du, Xiaodong Wang, and Yigong Shi (2000)',
                                        journalName: 'Nature',
                                        DOI: '408, 1008-1012',
                                        options: null
                                    },
                                    {
                                        itemName: 'Pro-caspase-7',
                                        fullName: 'Pro-Caspase-7 (zymogen)',
                                        ID: '1K88',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1K88'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/11701129',
                                        detailLinkText: 'Crystal Structure of a Caspase Zymogen: Mechanisms of Activation and Substrate Binding',
                                        members: 'Jijie Chai Qi Wu, Eric Shiozaki, Srinivasa M. Srinivasula, Emad S. Alnemri, and Yigong Shi (2001)',
                                        journalName: 'Cell',
                                        DOI: '107, 399-407',
                                        options: 'the following figure show the confirmational change of the 4 loops (L1, L2, L3, L4), which compose the activation site' +
                                                 ' of Caspase-7, from zymogen to active form. <img class="large-img" src="img/structures/1K880.jpg" alt="Caspase-7">'
                                    },
                                    {
                                        itemName: 'Caspase-7',
                                        fullName: null,
                                        ID: '1K86',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1K86'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/11701129',
                                        detailLinkText: 'Crystal Structure of a Caspase Zymogen: Mechanisms of Activation and Substrate Binding',
                                        members: 'Jijie Chai Qi Wu, Eric Shiozaki, Srinivasa M. Srinivasula, Emad S. Alnemri, and Yigong Shi (2001)',
                                        journalName: 'Cell',
                                        DOI: '107, 399-407',
                                        options: 'the following figure show the confirmational change of the 4 loops (L1, L2, L3, L4), which compose the activation site' +
                                                 ' of Caspase-7, from zymogen to active form. <img class="large-img" src="img/structures/1K880.jpg" alt="Caspase-7">'
                                    },
                                    {
                                        itemName: 'Casp-7/BIR2',
                                        fullName: 'Caspase-7 is inhibited by a linker region prior to BIR2 of XIAP',
                                        ID: '1I51',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1I51'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/11257230',
                                        detailLinkText: 'Structural Basis of Caspase-7 Inhibition by XIAP',
                                        members: 'Jijie Chai, Eric Shiozaki, Srinivasa M. Srinivasula, Qi Wu, Pinaki Datta, Emad S. Alnemri, and Yigong Shi (2001)',
                                        journalName: 'Cell',
                                        DOI: '104, 769-780',
                                        options: null
                                    },
                                    {
                                        itemName: 'Casp-9/BIR3',
                                        fullName: 'BIR3 domain of XIAP binds to Caspase-9 and sequesters it as a monomer',
                                        ID: '1NW9',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1NW9'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/12620238',
                                        detailLinkText: 'Mechanism of XIAP-mediated Inhibition of Caspase-9',
                                        members: 'Eric N. Shiozaki, Jijie Chai, Daniel J. Rigotti, Stefan J. Riedl, Pingwei Li, Srinivasa M. Srinivasula, Emad S. Alnemri, Robert Fairman, and Yigong Shi (2003)',
                                        journalName: 'Proc Natl Acad Sci U S A',
                                        DOI: '2014 Nov 18;111(46):16254-61',
                                        options: null
                                    },
                                    {
                                        itemName: 'Dimeric Casp-9',
                                        fullName: 'Crystal structure of engineered Caspase-9 dimer',
                                        ID: '2AR9',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['2AR9'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/15941357',
                                        detailLinkText: 'Engineering a Dimeric Caspase-9: A Re-evaluation of the Induced Proximity Model for Caspase Activation',
                                        members: 'Yang Chao, Eric N. Shiozaki, Srinivasa M. Srinivasula, Daniel J. Rigotti, Robert Fairman, and Yigong Shi (2005)',
                                        journalName: 'PLoS Biology',
                                        DOI: '3, e183',
                                        options: null
                                    },
                                    {
                                        itemName: 'Apaf-1',
                                        fullName: 'N-terminal domain of Apaf-1 in its auto-inhibited form',
                                        ID: '1Z6T',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1Z6T'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/15829969',
                                        detailLinkText: 'Structure of the apoptotic protease activating factor 1 (Apaf-1) bound to ADP',
                                        members: 'Stefan J. Riedl, Wenyu Li, Yang Chao, Robert Schwarzenbacher , and Yigong Shi (2005)',
                                        journalName: 'Nature',
                                        DOI: '434, 926–933',
                                        options: null
                                    },
                                    {
                                        itemName: 'MC159',
                                        fullName: 'MC159--a viral FLIP',
                                        ID: '2F1S',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['2F1S'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/16317000',
                                        detailLinkText: 'Crystal Structure of a Viral FLIP: INSIGHTS INTO FLIP-MEDIATED INHIBITION OF DEATH RECEPTOR SIGNALING',
                                        members: 'Feng-Yen Li, Philip D. Jeffrey, Jong W. Yu, and Yigong Shi (2006)',
                                        journalName: ' J. Biol. Chem',
                                        DOI: '281, 2960-2968',
                                        options: null
                                    },
                                    {
                                        itemName: 'Omi/HtrA2',
                                        fullName: 'Omi',
                                        ID: '1LCY',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1LCY'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/25313070',
                                        detailLinkText: 'Structure of the Mitochondrial Serine Portease Omi/HtrA2: Insights for Its Proapoptotic Function',
                                        members: 'Wenyu Li, Jijie Chai, Srinivasa M. Srinivasula, Emad S. Alnemri, and Yigong Shi (2002)',
                                        journalName: 'Nature Struct. Biol',
                                        DOI: '9, 436-441',
                                        options: null
                                    }
                                ]
                            }
                        ]
                    ]
                },
                {
                    categoryName: '<span class="italic">Drosophila</span> Apoptosis',
                    allStructures: [
                        [
                            {
                                viceName: null,
                                sList: [
                                    {
                                        itemName: 'Dark Apoptosome',
                                        fullName: 'Drosophila apoptosome',
                                        ID: '3J9L',
                                        optionalID: 'EMD-2871',
                                        optionalLink: 'http://emsearch.rutgers.edu/atlas/2871_summary.html',
                                        imgList: ['3J9L'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/25644603',
                                        detailLinkText: 'Structure of the apoptosome: mechanistic insights into activation of an initiator caspase from Drosophila',
                                        members: 'Pang Y, Bai XC, Yan C, Hao Q, Chen Z, Wang JW, Scheres SH, Shi Y',
                                        journalName: 'Genes Dev',
                                        DOI: '2015 Feb 1;29(3):277-87',
                                        options: null
                                    },
                                    {
                                        itemName: 'Dark Apoptosome with Dronc CARD',
                                        fullName: 'Drosophila apoptosome with Dronc CARD',
                                        ID: '3J9K',
                                        optionalID: 'EMD-2870',
                                        optionalLink: 'http://emsearch.rutgers.edu/atlas/2870_summary.html',
                                        imgList: ['3J9K'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/25644603',
                                        detailLinkText: 'Structure of the apoptosome: mechanistic insights into activation of an initiator caspase from Drosophila',
                                        members: 'Pang Y, Bai XC, Yan C, Hao Q, Chen Z, Wang JW, Scheres SH, Shi Y',
                                        journalName: 'Genes Dev',
                                        DOI: '2015 Feb 1;29(3):277-87',
                                        options: null
                                    },
                                    {
                                        itemName: 'drICE/dIAP1-BIR1',
                                        fullName: 'drICE and dIAP1-BIR1 complex',
                                        ID: '3SIP',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3SIP'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/21811237',
                                        detailLinkText: 'Structural mechanisms of DIAP1 auto-inhibition and DIAP1-mediated inhibition of drICE',
                                        members: 'Li X, Wang J, Shi Y',
                                        journalName: 'Nat Commun',
                                        DOI: '2011 Aug 2;2:408',
                                        options: null
                                    },
                                    {
                                        itemName: 'DIAP-1/BIR2',
                                        fullName: 'BIR2 domain of DIAP-1',
                                        ID: '1JD4',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1JD4'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/11511363',
                                        detailLinkText: 'Structural Analysis of a Functional DIAP1 Fragment Bound to Grim and Hid Peptides',
                                        members: 'Jia-Wei Wu, Amy Cocina, Jijie Chai, Bruce Hay, and Yigong Shi (2001)',
                                        journalName: '',
                                        DOI: '',
                                        options: null
                                    },
                                    {
                                        itemName: 'BIR2/Grim',
                                        fullName: 'The N-terminal peptide of Grim binds to the surface pocket of BIR2',
                                        ID: '1JD5',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1JD5'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/11511363',
                                        detailLinkText: 'Structural Analysis of a Functional DIAP1 Fragment Bound to Grim and Hid Peptides',
                                        members: 'Jia-Wei Wu, Amy Cocina, Jijie Chai, Bruce Hay, and Yigong Shi (2001)',
                                        journalName: '',
                                        DOI: '',
                                        options: null
                                    },
                                    {
                                        itemName: 'BIR2/Hid',
                                        fullName: 'The N-terminal peptide of Grim binds to the surface pocket of BIR2',
                                        ID: '1JD6',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1JD5'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/11511363',
                                        detailLinkText: 'Structural Analysis of a Functional DIAP1 Fragment Bound to Grim and Hid Peptides',
                                        members: 'Jia-Wei Wu, Amy Cocina, Jijie Chai, Bruce Hay, and Yigong Shi (2001)',
                                        journalName: '',
                                        DOI: '',
                                        options: null
                                    },
                                    {
                                        itemName: 'BIR2/Dronc',
                                        fullName: 'A linker region between the pro-domain and protease domain of Dronc binds to BIR2 of DIAP-1',
                                        ID: '1Q4Q',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1Q4Q'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/14517550',
                                        detailLinkText: 'Molecular mechanism of Reaper/Grim/Hid-mediated suppression of DIAP1-dependent Dronc ubiquitination',
                                        members: 'Jijie Chai*, Nieng Yan*, Jun R. Huh, Jia-Wei Wu, Wenyu Li, Bruce A. Hay, and Yigong Shi (2003)',
                                        journalName: 'Nature Struct. Biol',
                                        DOI: '10, 892-898',
                                        options: null
                                    },
                                    {
                                        itemName: 'BIR1/Reaper',
                                        fullName: 'Hid and Dronc, which only shares one common residue, Phe, compete for binding to BIR2',
                                        ID: '1SDZ',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1SDZ'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/14517550',
                                        detailLinkText: 'Molecular mechanism of Reaper/Grim/Hid-mediated suppression of DIAP1-dependent Dronc ubiquitination',
                                        members: 'Jijie Chai*, Nieng Yan*, Jun R. Huh, Jia-Wei Wu, Wenyu Li, Bruce A. Hay, and Yigong Shi (2003)',
                                        journalName: 'Nature Struct. Biol',
                                        DOI: '10, 892-898',
                                        options: null
                                    },
                                    {
                                        itemName: 'BIR1/Grim',
                                        fullName: null,
                                        ID: '1SE0',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1SE0'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/21811237',
                                        detailLinkText: 'Structural mechanisms of DIAP1 auto-inhibition and DIAP1-mediated inhibition of drICE',
                                        members: 'Yan, N., Wu, J.W., Chai, J., Li, W., Shi, Y',
                                        journalName: 'Nat.Struct.Mol.Biol',
                                        DOI: '11: 420-428',
                                        options: null
                                    },
                                    {
                                        itemName: 'Dronc zymogen',
                                        fullName: 'Crystal structure of a Drosophila initiator caspase -- Dronc in its monomeric zymogen form',
                                        ID: '2FP3',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['2FP3'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/16446367',
                                        detailLinkText: 'Structure and activation mechanism of the Drosophila initiator caspase Dronc',
                                        members: 'Nieng Yan, Jun R. Huh, Vrigil Schirf, Borries Demeler, Bruce A. Hay, and Yigong Shi (2006)',
                                        journalName: 'J. Biol. Chem',
                                        DOI: '[Epub ahead of print]',
                                        options: null
                                    }
                                ]
                            }
                        ]
                    ]
                },
                {
                    categoryName: '<span class="italic">C. elegans</span> Apoptosis',
                    allStructures: [
                        [
                            {
                                viceName: null,
                                sList: [
                                    {
                                        itemName: 'CED-4',
                                        fullName: null,
                                        ID: '3LQR',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3LQR'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/20434985',
                                        detailLinkText: 'Crystal structure of the Caenorhabditis elegans apoptosome reveals an octameric assembly of CED-4',
                                        members: 'Qi S, Pang Y, Hu Q, Liu Q, Li H, Zhou Y, He T, Liang Q, Liu Y, Yuan X, Luo G, Li H, Wang J, Yan N, Shi Y',
                                        journalName: 'Cell',
                                        DOI: '2010 Apr 30;141(3):446-57',
                                        options: null
                                    },
                                    {
                                        itemName: 'CED-4 bound CED-3 fragment',
                                        fullName: null,
                                        ID: '4M9X',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4M9X'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/24065769',
                                        detailLinkText: 'Mechanistic insights into CED-4-mediated activation of CED-3',
                                        members: 'Huang W, Jiang T, Choi W, Qi S, Pang Y, Hu Q, Xu Y, Gong X, Jeffrey PD, Wang J, Shi Y',
                                        journalName: 'Genes Dev',
                                        DOI: '2013 Sep 15;27(18):2039-48',
                                        options: null
                                    },
                                    {
                                        itemName: 'CED-9/Egl-1',
                                        fullName: ' Complex of CED-9/EGL-1',
                                        ID: '1TY4',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1TY4'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/15383288',
                                        detailLinkText: 'Structural, Biochemical and Functional Analyses of CED-9 Recognition by the Pro-apoptotic Proteins EGL-1 and CED-4',
                                        members: 'Nieng Yan*, Lichuan Gu*, David Kokel, Jijie Chai, Wenyu Li, Aidong Han, Lin Chen, Ding Xue, and Yigong Shi (2004)',
                                        journalName: 'Mol. Cell',
                                        DOI: '15, 999–1006',
                                        options: null
                                    },
                                    {
                                        itemName: 'CED-4/CED-9',
                                        fullName: 'Complex of CED-9/EGL-1',
                                        ID: '2A5Y',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1TY4'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/15383288',
                                        detailLinkText: 'Structural, Biochemical and Functional Analyses of CED-9 Recognition by the Pro-apoptotic Proteins EGL-1 and CED-4',
                                        members: 'Nieng Yan*, Lichuan Gu*, David Kokel, Jijie Chai, Wenyu Li, Aidong Han, Lin Chen, Ding Xue, and Yigong Shi (2004)',
                                        journalName: 'Mol. Cell',
                                        DOI: '15, 999–1006',
                                        options: null
                                    }
                                ]
                            }
                        ]
                    ]
                },
                {
                    categoryName: 'Other Cell Death Related Proteins',
                    allStructures: [
                        [
                            {
                                viceName: null,
                                sList: [
                                    {
                                        itemName: 'hepatitis B virus X protein BH3 domain',
                                        fullName: null,
                                        ID: '5FCG',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['5FCG'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/26858413',
                                        detailLinkText: 'Structural and biochemical analysis of Bcl-2 interaction with the hepatitis B virus protein HBx',
                                        members: 'Jiang, T.Y., Liu, M.H., Wu, J.P., Shi, Y.G',
                                        journalName: 'Proc Natl Acad Sci U S A',
                                        DOI: '2016 Feb 23;113(8)',
                                        options: null
                                    },
                                    {
                                        itemName: 'RIP3 -MLKL complex',
                                        fullName: null,
                                        ID: '4M69',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4M69'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/24095729',
                                        detailLinkText: 'Structural insights into RIP3-mediated necroptotic signaling',
                                        members: 'Xie T, Peng W, Yan C, Wu J, Gong X, Shi Y',
                                        journalName: 'Cell Rep',
                                        DOI: '2013 Oct 17;5(1):70-8',
                                        options: null
                                    },
                                    {
                                        itemName: 'RIP1 kinase',
                                        fullName: null,
                                        ID: '4ITJ',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4ITJ'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/23473668',
                                        detailLinkText: 'Structural basis of RIP1 inhibition by necrostatins',
                                        members: 'Xie T, Peng W, Liu Y, Yan C, Maki J, Degterev A, Yuan J, Shi Y. . ',
                                        journalName: 'Structure',
                                        DOI: '2013 Mar 5;21(3):493-9',
                                        options: null
                                    },
                                    {
                                        itemName: 'Yca1',
                                        fullName: null,
                                        ID: '4F6O',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4F6O'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/22761449',
                                        detailLinkText: 'Crystal structure of the yeast metacaspase Yca1',
                                        members: 'Wong AH, Yan C, Shi Y',
                                        journalName: 'J Biol Chem',
                                        DOI: '2012 Aug 24;287(35):29251-9',
                                        options: null
                                    },
                                    {
                                        itemName: 'Beclin 1',
                                        fullName: null,
                                        ID: '4DDP',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4DDP'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/22310240',
                                        detailLinkText: 'Crystal structure and biochemical analyses reveal Beclin 1 as a novel membrane binding protein',
                                        members: 'Huang W, Choi W, Hu W, Mi N, Guo Q, Ma M, Liu M, Tian Y, Lu P, Wang FL, Deng H, Liu L, Gao N, Yu L, Shi Y',
                                        journalName: 'Cell Res',
                                        DOI: '2012 Mar;22(3):473-89',
                                        options: null
                                    },
                                    {
                                        itemName: 'MALT1',
                                        fullName: null,
                                        ID: '3UO8',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3UO8'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/22158899',
                                        detailLinkText: 'Crystal structure of the mucosa-associated lymphoid tissue lymphoma translocation 1 (MALT1) paracaspase region',
                                        members: 'Yu JW, Jeffrey PD, Ha JY, Yang X, Shi Y',
                                        journalName: 'Proc Natl Acad Sci U S A',
                                        DOI: '2011 Dec 27;108(52):21004-9',
                                        options: null
                                    },
                                    {
                                        itemName: 'Bec-1/BcL-xL',
                                        fullName: 'Structure of the Bcl-XL:Beclin 1 complex',
                                        ID: '2P1L',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['2P1L'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/17337444',
                                        detailLinkText: 'Crystal structure of the Bcl-XL-Beclin 1 peptide complex: Beclin 1 is a novel BH3-only protein',
                                        members: 'Adam Oberstein, Philip D Jeffrey, and Yigong Shi (2007)',
                                        journalName: 'J. Biol. Chem',
                                        DOI: '282, 13123-32',
                                        options: null
                                    }
                                ]
                            }
                        ]
                    ]
                }
            ]
        },
        {
            orientation: 'TGF-β and PP2A',
            categoryList: [
                {
                    categoryName: 'TGF-β Pathway',
                    allStructures: [
                        [
                            {
                                viceName: null,
                                sList: [
                                    {
                                        itemName: 'Smad4 C-term',
                                        fullName: 'C-terminal domain of SMAD4 Tumor Suppressor',
                                        ID: '1YGS',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1YGS'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/9214508',
                                        detailLinkText: 'A structural basis for mutational inactivation of the tumour suppressor Smad4',
                                        members: 'Yigong Shi, Akiko Hata, Joan Massagué and Nikola P. Pavletich (1997)',
                                        journalName: 'Nature',
                                        DOI: '388, 87-93',
                                        options: null
                                    },
                                    {
                                        itemName: 'MH1/DNA',
                                        fullName: 'Smad MH1 Domain bound to DNA',
                                        ID: '1MHD',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1MHD'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/22158899',
                                        detailLinkText: 'Crystal Structure of A Smad MH1 Domain Bound to DNA: Insights on DNA-binding in TGF-beta Signaling',
                                        members: 'Yigong Shi, Yan-Fei Wang, Lata Jayaraman, Haijuan Yang, Joan Massagué, and Nikola Pavletich (1998)',
                                        journalName: 'Cell',
                                        DOI: '94, 585-594',
                                        options: null
                                    },
                                    {
                                        itemName: 'MH2/SARA',
                                        fullName: 'Smad2 Recruitment by SARA',
                                        ID: '1DEV',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1DEV'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/10615055',
                                        detailLinkText: 'Structural Basis of Smad2 Recruitment by the Smad Anchor for Receptor Activation (SARA)',
                                        members: 'Geng Wu, Ye-Guang Chen, Barish Ozdamar, Cassie Gyuricza, P. Andrew Chong, Jeffrey L. Wrana, Joan Massagué, and Yigong Shi (2000)',
                                        journalName: 'Science',
                                        DOI: '287, 92-97',
                                        options: null
                                    },
                                    {
                                        itemName: 'Phos. Smad2',
                                        fullName: 'Phosphorylated Smad2',
                                        ID: '1KHX',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1KHX'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/11779503',
                                        detailLinkText: 'Crystal Structure of a Phosphorylated Smad2: Recognition of Phosphoserine Motif and Insights on Smad Function in TGF-beta Signaling',
                                        members: 'Jia-Wei Wu, Min Hu, Jijie Chai, Morgan Huse, Carey Li, Saw Kyin, Robert Fairman, Tom Muir, Joan Massagué, and Yigong Shi (2001)',
                                        journalName: 'Mol. Cell',
                                        DOI: '8, 1277-1289',
                                        options: null
                                    },
                                    {
                                        itemName: 'Ski/Smad4',
                                        fullName: 'Complex of C-terminal of Smad4 and Ski',
                                        ID: '1MR1',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1MR1'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/12419246',
                                        detailLinkText: 'Structural Mechanism of Smad4 Recognition by the Nuclear Oncoprotein Ski: Insight on Ski-Mediated Repression of TGF-beta Signaling',
                                        members: 'Jia-Wei Wu, Ariel R. Krawitz, Jijie Chai, Wenyu Li, Fangjiu Zhang, Kunxin Luo, and Yigong Shi (2002)',
                                        journalName: 'Cell',
                                        DOI: '111, 357-367',
                                        options: null
                                    }
                                ]
                            }
                        ]
                    ]
                },
                {
                    categoryName: 'PP2A',
                    allStructures: [
                        [
                            {
                                viceName: null,
                                sList: [
                                    {
                                        itemName: 'PP2A holoenzyme',
                                        fullName: null,
                                        ID: '3DW8',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3DW8'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/12419246',
                                        detailLinkText: 'Structure of a protein phosphatase 2A holoenzyme: insights into B55-mediated Tau dephosphorylation',
                                        members: 'Xu Y, Chen Y, Zhang P, Jeffrey PD, Shi Y',
                                        journalName: 'Mol Cell',
                                        DOI: '2008 Sep 26;31(6):873-85',
                                        options: null
                                    },
                                    {
                                        itemName: 'PP2A--AC/MCLR',
                                        fullName: 'Structure of Phosphotyrosyl Phosphatase 2A core enzyme bound to its inhibitor microcystin-LR',
                                        ID: '2IE3',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['2IE3'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/17055435',
                                        detailLinkText: 'Structure of protein phosphatase 2A core enzyme bound to tumor-inducing toxins',
                                        members: 'Yongna Xing*, Yanhui Xu *, Yu Chen*, Philip D Jeffrey, Yang Chao, Zheng Lin, Zhu Li, Stefan Strack, Jeffry B. Stock, and Yigong Shi (2006)',
                                        journalName: 'Cell',
                                        DOI: '127, 341-353. (The single asterisk indicates equal contributions)',
                                        options: null
                                    },
                                    {
                                        itemName: 'PP2A--AC/OA',
                                        fullName: 'Structure of Phosphotyrosyl Phosphatase 2A core enzyme bound to another inhibitor okadaic acid',
                                        ID: '2IE4',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['2IE4'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/17055435',
                                        detailLinkText: 'Structure of protein phosphatase 2A core enzyme bound to tumor-inducing toxins',
                                        members: 'Yongna Xing*, Yanhui Xu *, Yu Chen*, Philip D Jeffrey, Yang Chao, Zheng Lin, Zhu Li, Stefan Strack, Jeffry B. Stock, and Yigong Shi (2006)',
                                        journalName: 'Cell',
                                        DOI: '127, 341-353. (The single asterisk indicates equal contributions)',
                                        options: null
                                    },
                                    {
                                        itemName: 'PP2A--holo',
                                        fullName: 'Structure of Phosphotyrosyl Phosphatase 2A holoenzyme',
                                        ID: '2NPP',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['2NPP'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/17174897',
                                        detailLinkText: 'Structure of the protein phosphatase 2A holoenzyme',
                                        members: 'Yanhui Xu*, Yongna Xing*, Yu Chen*, Yang Chao*, Zheng Lin, Eugene Fan, Jong W. Yu, Stefan Strack, Philip D. Jeffrey, and Yigong Shi (2006)',
                                        journalName: 'Cell',
                                        DOI: '127, 1239-1251. (The single asterisk indicates equal contributions)',
                                        options: null
                                    },
                                    {
                                        itemName: 'PTPA',
                                        fullName: 'Structure of Phosphotyrosyl Phosphatase Activator',
                                        ID: '2HV6',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['2HV6'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/16916641',
                                        detailLinkText: 'Structure and Mechanism of the Phosphotyrosyl Phosphatase Activator',
                                        members: 'Yang Chao, Yongna Xing, Yu Chen, Yanhui Xu, Zheng Lin, Zhu Li, Philip D. Jeffrey, Jeffry B. Stock, and Yigong Shi. (2006)',
                                        journalName: 'Mol. Cell',
                                        DOI: '23, 535-546',
                                        options: null
                                    },
                                    {
                                        itemName: 'PTPA/ATPgs',
                                        fullName: 'Structure of Phosphotyrosyl Phosphatase Activator bound to ATPgammaS',
                                        ID: '2HV7',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['2HV7'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/16916641',
                                        detailLinkText: 'Structure and Mechanism of the Phosphotyrosyl Phosphatase Activator',
                                        members: 'Yang Chao, Yongna Xing, Yu Chen, Yanhui Xu, Zheng Lin, Zhu Li, Philip D. Jeffrey, Jeffry B. Stock, and Yigong Shi. (2006)',
                                        journalName: 'Mol. Cell',
                                        DOI: '23, 535-546',
                                        options: null
                                    },
                                    {
                                        itemName: 'PP2A--A/ST',
                                        fullName: 'Structure of a complex between the PP2A-A subunit and the small t antigen of SV40',
                                        ID: '2PKG',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['2PKG'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/15125843',
                                        detailLinkText: 'Structure of the BRCT Repeats of BRCA1 bound to a BACH1 Phosphopeptide: Implications for Signaling',
                                        members: 'Eric N.Shiozaki, Lichuan Gu, Nieng Yan, and Yigong Shi (2004)',
                                        journalName: 'Mol. Cell',
                                        DOI: '14, 405–412',
                                        options: null
                                    }
                                ]
                            }
                        ]
                    ]
                },
                {
                    categoryName: 'Others',
                    allStructures: [
                        [
                            {
                                viceName: null,
                                sList: [
                                    {
                                        itemName: 'TIPE2',
                                        fullName: 'Crystal structure of TIPE2 provides insights into immune homeostasis',
                                        ID: '3F4M',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3F4M'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/19478139',
                                        detailLinkText: 'Crystal structure of TIPE2 provides insights into immune homeostasis',
                                        members: 'Zhang X, Wang J, Fan C, Li H, Sun H, Gong S, Chen YH, Shi Y(2008)',
                                        journalName: 'Nature Structural & Molecular Biology',
                                        DOI: '16 89 - 90',
                                        options: null
                                    },
                                    {
                                        itemName: 'TIPE3',
                                        fullName: null,
                                        ID: '4Q9V',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4Q9V'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/25242044',
                                        detailLinkText: 'TIPE3 is the transfer protein of lipid second messengers that promote cancer',
                                        members: 'Fayngerts SA, Wu J, Oxley CL, Liu X, Vourekas A, Cathopoulis T, Wang Z, Cui J, Liu S, Sun H, Lemmon MA, Zhang L, Shi Y, Chen YH',
                                        journalName: 'Cancer Cell',
                                        DOI: '2014 Oct 13;26(4):465-78',
                                        options: null
                                    },
                                    {
                                        itemName: 'UVR8',
                                        fullName: null,
                                        ID: '4DNW',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4DNW'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/22388820',
                                        detailLinkText: 'Structural basis of ultraviolet-B perception by UVR8',
                                        members: 'Wu D, Hu Q, Yan Z, Chen W, Yan C, Huang X, Zhang J, Yang P, Deng H, Wang J, Deng X, Shi Y',
                                        journalName: 'Nature',
                                        DOI: '2012 Feb 29;484(7393):214-9',
                                        options: null
                                    },
                                    {
                                        itemName: 'PPR',
                                        fullName: null,
                                        ID: '4M57',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4M57'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/24162847',
                                        detailLinkText: 'Structural basis for the modular recognition of single-stranded RNA by PPR proteins',
                                        members: 'Yin P, Li Q, Yan C, Liu Y, Liu J, Yu F, Wang Z, Long J, He J, Wang HW, Wang J, Zhu JK, Shi Y, Yan N',
                                        journalName: 'Nature',
                                        DOI: '2013 Dec 5;504(7478):168-71',
                                        options: null
                                    },
                                    {
                                        itemName: 'αHG/AHSP',
                                        fullName: 'alpha-hemoglobin/AHSP',
                                        ID: '1Y01',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1Y01'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/15550245',
                                        detailLinkText: 'Molecular Mechanism of AHSP-mediated Stabilization of alpha-hemoglobin',
                                        members: 'Liang Feng, David A. Gell, Suiping Zhou, Lichuan Gu, Yi Kong, Jianqing Li, Min Hu, Nieng Yan, Christopher Lee,' +
                                                 ' Anne M. Rich, Robert S. Armstrong, Peter A. Lay, Andrew J. Gow, Mitchell J. Weiss, Joel P. Mackay, and Yigong Shi (2004)',
                                        journalName: 'Cell',
                                        DOI: '119, 629–640',
                                        options: 'These studies reveal the molecular mechanisms of how AHSP protects alpha-hemoglobin. ' +
                                                 '<img class="large-img" src="img/structures/1Y010.jpg" alt="how AHSP protects alpha-hemoglobin">'
                                    },
                                    {
                                        itemName: 'αHG(o)/AHSP',
                                        fullName: 'Oxidized alpha-hemoglobin/AHSP',
                                        ID: '1Z8U',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1Z8U'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/15931225',
                                        detailLinkText: 'Structure of oxidized alpha-haemoglobin bound to AHSP reveals a protective mechanism for haem',
                                        members: 'Liang Feng, Suiping Zhou, Lichuan Gu, David A. Gell, Joel P. Mackay, Mitchell J. Weiss, Andrew J. Gow, and Yigong Shi (2005)',
                                        journalName: 'Nature',
                                        DOI: '435, 697–701',
                                        options: 'These studies reveal the molecular mechanisms of how AHSP protects alpha-hemoglobin. ' +
                                                 '<img class="large-img" src="img/structures/1Y010.jpg" alt="how AHSP protects alpha-hemoglobin">'
                                    },
                                    {
                                        itemName: 'Carp2-FYVE',
                                        fullName: 'FYVE domain of Carp2',
                                        ID: '1Y02',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1Y02'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/15576038',
                                        detailLinkText: 'Crystal Structure of a Novel FYVE-type Zinc Finger Domain from the Caspase Regulator CARP2',
                                        members: 'Michael D. Tibbetts, Eric N. Shiozaki, Lichuan Gu, E. Robert McDonald III, Wafik S. El-Deiry and Yigong Shi (2004)',
                                        journalName: 'Structure',
                                        DOI: '12, 2257–2263',
                                        options: null
                                    },
                                    {
                                        itemName: 'BRCT/Bach1',
                                        fullName: 'BRCT Repeats of BRCA1 bound to a BACH1 phosphopeptide',
                                        ID: '1T29',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['1T29'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/15125843',
                                        detailLinkText: 'Structure of the BRCT Repeats of BRCA1 bound to a BACH1 Phosphopeptide: Implications for Signaling',
                                        members: 'Eric N.Shiozaki, Lichuan Gu, Nieng Yan, and Yigong Shi (2004)',
                                        journalName: 'Mol. Cell',
                                        DOI: '14, 405–412',
                                        options: null
                                    },
                                    {
                                        itemName: 'PPR',
                                        fullName: null,
                                        ID: '4M59',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4M59'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/24162847',
                                        detailLinkText: 'Structural basis for the modular recognition of single-stranded RNA by PPR proteins',
                                        members: 'Yin P, Li Q, Yan C, Liu Y, Liu J, Yu F, Wang Z, Long J, He J, Wang HW, Wang J, Zhu JK, Shi Y, Yan N',
                                        journalName: 'Nature',
                                        DOI: '2013 Dec 5;504(7478):168-71',
                                        options: null
                                    },
                                    {
                                        itemName: 'TAL effector bound to DNA-RNA',
                                        fullName: null,
                                        ID: '4GG4',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['4GG4'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/23022487',
                                        detailLinkText: 'Specific DNA-RNA hybrid recognition by TAL effectors',
                                        members: 'Yin P, Deng D, Yan C, Pan X, Xi JJ, Yan N, Shi Y',
                                        journalName: 'Cell Rep',
                                        DOI: '2012 Oct 25;2(4):707-13',
                                        options: null
                                    },
                                    {
                                        itemName: 'TAL effectors',
                                        fullName: null,
                                        ID: '3V6T',
                                        optionalID: null,
                                        optionalLink: null,
                                        imgList: ['3V6T'],
                                        detailLink: 'http://www.ncbi.nlm.nih.gov/pubmed/22223738',
                                        detailLinkText: 'Structural basis for sequence-specific recognition of DNA by TAL effectors',
                                        members: 'Deng D, Yan C, Pan X, Mahfouz M, Wang J, Zhu JK, Shi Y, Yan N',
                                        journalName: 'Science',
                                        DOI: '2012 Feb 10;335(6069):720-3',
                                        options: null
                                    }
                                ]
                            }
                        ]
                    ]
                }
            ]
        }
    ],

    /* lab events页面 */
    labEvents: [
        {
            title: 'Awards',
            members: [
                {
                    name: 'Dr. Shangyu Dang',
                    awardsList: [
                        '2015-2018 Human Frontier Science Program (HFSP) Fellowship',
                        '2014 Second prize of excellent graduation thesis, Tsinghua University',
                        '2014 Outstanding graduates of Tsinghua University',
                        '2014 Outstanding graduates of Beijing',
                        '2013 Doctoral candidate national scholarship award',
                        '2013 Academic rookie award of Tsinghua University',
                        '2012 Doctoral candidate national scholarship award',
                        '2011 Scholarship Award for Excellent Doctoral Student granted by Ministry of Education, China'
                    ]
                },
                {
                    name: 'Dr. Xiang Gao',
                    awardsList: [
                        '2015 Blavatnik Regional Award Finalist, Blavatnik Family Foundation and New York Academy of Sciences',
                        '2014 James Hudson Brown - Alexander B. Coxe Fellowship, Yale University',
                        '2011 The Ray Wu Prize for Excellence in Innovation, Independent Thinking, and Dedication, the Ray Wu Memorial Fund',
                        '2010 Chinese university student of the Year, Education Ministry of China',
                        '2010 Academic Rising Stars Award, Tsinghua University',
                        '2010 Top Graduate Scholarship, Tsinghua Universit'
                    ]
                },
                {
                    name: 'Dr. Deshun Gong',
                    awardsList: [
                        '2013.12 National Scholarship for Graduate Student, Ministry of Education, China'
                    ]
                },
                {
                    name: 'Dr. Weijiao Huang',
                    awardsList: [
                        '2013.12 National Scholarship for Graduate Student, Ministry of Education, China'
                    ]
                },
                {
                    name: 'Dr. Xiaochun Li',
                    awardsList: [
                        '2013 C.H.Li Memorial Scholar Fund Award, Rockefeller University',
                        '2014-2017The Gordon and Betty Moore Foundation Fellow of the Life Sciences Research Foundation'
                    ]
                },
                {
                    name: 'Dr. Peilong Lu',
                    awardsList: [
                        '2014 Sackler Fellowship, University of Washington',
                        '2014 Outstanding Doctoral Graduate, Tsinghua University',
                        '2014 Excellent Graduation Dissertation, Tsinghua University',
                        '2013.12 National Scholarship for Graduate Student, Ministry of Education, China'
                    ]
                },
                {
                    name: 'Dr. Dan Ma',
                    awardsList: [
                        '2015 Jane Coffin Childs Postdoctoral Fellowship',
                        '2014 Outstanding Doctoral Graduate, Beijing',
                        '2014 Nonimation of Academic Rookie Award, Tsinghua University',
                        '2013.12 National Scholarship for Graduate Student, Ministry of Education, China',
                        '2012 Dongsheng innovation scholarship, Tsinghua University',
                        '2012 ‘12.9’Scholarship, Tsinghua University',
                        '2012 Scholarship Award for Excellent Doctoral Student, Ministry of Education, China',
                        '2012.12 National Scholarship for Graduate Student, Ministry of Education, China'
                    ]
                },
                {
                    name: 'Dr. Ziqing Mei',
                    awardsList: [
                        '2012 Outstanding postdoctor fellowship, Tsinghua University',
                        '2011 Top 10 Science and Technology Advancement of Chinese Universities',
                        '2011 Outstanding postdoctoral fellowship, Center for Life Sciences, Tsinghua University',
                        '2009 The First Prize of‘Ding Ye Mai Lin’Scholarship'
                    ]
                },
                {
                    name: 'Dr. Shiqian Qi',
                    awardsList: [
                        '2011 \'Haodushu\' Scholarship, Tsinghua University'
                    ]
                },
                {
                    name: 'Wenlin Ren',
                    awardsList: [
                        '2012 \'Haodushu\' Scholarship, Tsinghua University',
                        '2012.12 National Scholarship for Graduate Student, Ministry of Education, China'
                    ]
                },
                {
                    name: 'Dr. Linfeng Sun',
                    awardsList: [
                        '2012.12 National Scholarship for Graduate Student, Ministry of Education, China'
                    ]
                },
                {
                    name: 'Dr. Feng Wang',
                    awardsList: [
                        '2013 The Best Annual Paper of Journal of Biological Chemistry',
                        '2011 Top 10 Science and Technology Advancement of Chinese Universities',
                        '2009 Outstanding postdoctor fellowship, Tsinghua University'
                    ]
                },
                {
                    name: 'Dr. Tian Xie',
                    awardsList: [
                        '2014 Doctoral candidate national scholarship award',
                        '2013 Doctoral candidate national scholarship award',
                        '2012 National Scholarship for Graduate Student, Ministry of Education, China',
                        '2011 Third prize of National Scholarship for Graduate Student, Ministry of Education, China'
                    ]
                },
                {
                    name: 'Dr. Ping Yin',
                    awardsList: [
                        '2011.12 Excellent postdoctor honor, Tsinghua University',
                        '2011.11 Outstanding postdoctoral fellowship, Center for Life Sciences, Tsinghua University',
                        '2010.09 China exceptional postdoctoral fellowship, China Postdoctor Foundation Society',
                        '2009.09 China postdoctoral fellowship, China Postdoctor Foundation Society'
                    ]
                },
                {
                    name: 'Dr. Lijun Zhou',
                    awardsList: [
                        '2013 Doctoral candidate national scholarship award'
                    ]
                }
            ],
            imgSrcs: null
        },
        {
            title: 'Fun Time',
            members: null,
            imgSrcs: [
                'img/labevents/funtime/funtime1.jpg',
                'img/labevents/funtime/funtime2.jpg',
                'img/labevents/funtime/funtime3.jpg',
                'img/labevents/funtime/funtime4.jpg',
                'img/labevents/funtime/funtime5.jpg',
                'img/labevents/funtime/funtime6.jpg',
                'img/labevents/funtime/funtime7.jpg',
                'img/labevents/funtime/funtime8.jpg'
            ]
        },
        {
            title: 'Thesis Defence',
            members: null,
            imgSrcs: [
                'img/labevents/thesis/renruobing.jpg',
                'img/labevents/thesis/xietian.jpg',
                'img/labevents/thesis/madan.jpg',
                'img/labevents/thesis/sunlinfeng.jpg',
                'img/labevents/thesis/lupeilong.jpg',
                'img/labevents/thesis/dangshangyu.jpg',
                'img/labevents/thesis/wangsheng.jpg',
                'img/labevents/thesis/huqi.jpg',
                'img/labevents/thesis/zhoulijun.jpg',
                'img/labevents/thesis/lixiaochun.jpg',
                'img/labevents/thesis/qishiqian.jpg'
            ]
        }
    ]
};
