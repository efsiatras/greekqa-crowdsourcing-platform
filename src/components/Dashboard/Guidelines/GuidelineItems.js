import { NavyLink } from 'components/Shared/NavyLink';

export const GuidelineItems = [
    {
        question: "Τι είναι το GreekQA (Greek Question Answering Dataset);",
        answer: <div className="text-md">Τα τελευταία χρόνια, o τομέας της <b>Επεξεργασίας Φυσικής Γλώσσας</b> έχει σημειώσει <b>αξιοσημείωτη πρόοδο</b> με την εντυπωσιακή εξέλιξη state-of-the-art μοντέλων.
                    <br/>
                    Μεταξύ των επιμέρους τομέων της Επεξεργασίας Φυσικής Γλώσσας, η <b>Αναγνωστική Κατανόηση</b> (Reading Comprehension) έχει σημειώσει αντίστοιχη σημαντική πρόοδο. 
                    <br/>
                    <br/>
                    Ωστόσο, η <b>πλειονότητα</b> των επιστημονικών εργασιών αυτού του τομέα <b>αφορούν την αγγλική γλώσσα</b>, καθώς τα <b>διαθέσιμα δεδομένα</b> που διατίθονται <b>σε άλλες γλώσσες</b>, όπως τα ελληνικά, είναι <b>περιορισμένα.</b>
                    <br/>
                    <br/>
                    Στην παρούσα πλατφόρμα συλλογής δεδομένων <b>GreekQA</b>, εισάγουμε το <b>ομώνυμο Greek Question Answering Dataset (GreekQA)</b>, το <b>πρώτο Ελληνικό Σύνολο Δεδομένων Ερωτήσεων και Απαντήσεων</b>.
                    <br/>
                    Πιο συγκεκριμένα, το <b>GreekQA</b> στοχεύει να γίνει ένα ελληνικό σύνολο δεδομένων <b>κατανόησης ανάγνωσης</b> ερωτήσεων και απαντήσεων σε ένα <b>σύνολο άρθρων της ελληνικής Wikipedia</b>, το οποίο θα αποτελείται από 5.000+ δείγματα ερωτήσεων και απαντήσεων.</div>,
        open: "true"
    },
    {
        question: "Γιατί να συνεισφέρω;",
        answer: <div>
            Η συγκεκριμένη πρωτοβουλία γίνεται στα πλαίσια μιας <b>προπτυχιακής εργασίας</b> του <b>Τμήματος Πληροφορικής και Τηλεπικοινωνιών, Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών</b>.
            <br/>
            <br/>
            Για να επιτευχθεί ο στόχος, είναι <b>καλοδεχούμενη οποιαδήποτε συμμετοχή και βοήθεια</b> στην συλλογή ερωτήσεων και δεδομένων.
            <br/>
            <br/>
            <b>Με την δική σας συνεισφορά</b>, το <b>GreekQA</b> θα μπορέσει να αναπτυχθεί και να αποτελέσει <b>ακρογωνιαίο λίθο</b> στην περαιτέρω <b>εκπαίδευση</b> και <b>δοκιμή ελληνικών</b> και <b>πολυγλωσσικών μοντέλων Αναγνωστικής Κατανόησης</b>.
            </div>,
        open: "true"
    },
    {
        question: "Πως μπορώ να συνεισφέρω;",
        answer: <div>Αφού διαβάσετε τις <b>Οδηγίες Χρήσης</b>, μπορείτε να ξεκινήσετε να συνεισφέρετε άμεσα στην καρτέλα <NavyLink className="font-medium" to="/dashboard/articles">Άρθρα</NavyLink>.</div>,
        open: "true"
    },
    {
        question: "Τι είδη ερωτήσεων αναζητούμε;",
        answer: <div>
                    Ιδανικά θέλουμε οι ερωτήσεις <b>να μην χρησιμοποιούν τις ίδιες λέξεις/φράσεις που εμφανίζονται στο κείμενο</b>.
                    <br/><br/>
                    Γενικά, τα είδη των ερωτήσεων που αναζητούμε είναι:
                    <ul className="pl-4 list-disc">
                        <li><b>Λεκτική παραλλαγή (συνωνυμία)</b>: Οι κύριες αντιστοιχίες μεταξύ της ερώτησης και της απάντησης είναι συνώνυμα.
                            <br/>
                            Παράδειγμα:
                            <ul className="pl-8">
                                <li>Ερώτηση: Πώς <b>ονομάζεται</b> μερικές φορές ο κύκλος Rankine; </li>
                                <li>Πρόταση/<u>Απάντηση</u>: Ο κύκλος Rankine μερικές φορές <b>αναφέρεται</b> ως <u>πρακτικός κύκλος Carnot</u>.</li>
                            </ul>
                        </li>
                        <br/>
                        <li><b>Λεκτική παραλλαγή (παγκόσμια γνώση)</b>: Οι κύριες αντιστοιχίες μεταξύ της ερώτησης και της απάντησης απαιτούν παγκόσμια γνώση.
                            <br/>
                            Παράδειγμα:
                            <ul className="pl-8">
                                <li>Ερώτηση: Ποια <b>κυβερνητικά όργανα</b> έχουν δικαίωμα βέτο;</li>
                                <li>Πρόταση/<u>Απάντηση</u>: <b><u>Το Ευρωπαϊκό Κοινοβούλιο και το Συμβούλιο της Ευρωπαϊκής Ένωσης</u></b> έχουν δικαίωμα τροποποίησης και βέτο κατά τη νομοθετική διαδικασία.</li>
                            </ul>
                        </li>
                        <br/>
                        <li><b>Συντακτική παραλλαγή</b>: Μετά την παράφραση της ερώτησης σε δηλωτική μορφή, η εξάρτηση δομής δεν ταιριάζει με αυτήν της απάντησης ακόμη και μετά από τοπικές τροποποιήσεις.
                            <br/>
                            Παράδειγμα:
                            <ul className="pl-8">
                                <li>Ερώτηση: Ποιος ερευνητής του Shakespeare είναι αυτή τη στιγμή στο <b>Διδακτικό Ερευνητικό Προσωπικό</b>;</li>
                                <li>Πρόταση/<u>Απάντηση</u>: To <b>Διδακτικό Ερευνητικό Προσωπικό</b> περιλαμβάνει τον ανθρωπολόγο Marshall Sahlins, ..., τον μελετητή του Shakespeare <u>David Bevington</u>.</li>
                            </ul>
                        </li>
                        <br/>
                        <li><b>Συλλογισμός πολλαπλών προτάσεων</b>: Υπάρχει αναφορά ή απαιτείται συγχώνευση πολλαπλών προτάσεων.
                            <br/>
                            Παράδειγμα:
                            <ul className="pl-8">
                                <li>Ερώτηση: Τι συλλογή κατέχουν <b>η γκαλερί V&A Theatre & Performance</b>;</li>
                                <li>Πρόταση/<u>Απάντηση</u>: <b>Η γκαλερί V&A Theatre & Performance</b> άνοιξαν τον Μάρτιο του 2009. ... <b>Αυτή η γκαλερί</b> διατηρεί τη μεγαλύτερη εθνική συλλογή του Ηνωμένου Βασιλείου από <u>εκθέματα σχετικά με ζωντανές εμφανίσεις</u>.</li>
                            </ul>
                        </li>
                    </ul>
                </div>,
        open: ""
    },
    {
        question: "Τι είδη απαντήσεων αναζητούμε;",
        answer: <div>
                    Οι απαντήσεις πρέπει να είναι <b>το μικρότερο δυνατό μέρος του κειμένου</b> που απαντά στην εκάστοτε ερώτηση.
                    <br/>
                    <br/>
                    Γενικά, τα είδη των απαντήσεων που αναζητούμε είναι:
                    <ul className="pl-4 list-disc">
                        <li><b>Ημερομηνία</b>: 19 Οκτωβρίου 1512</li>
                        <li><b>Αριθμός</b>: 12</li>
                        <li><b>Άτομο</b>: Μανόλης Κουμπαράκης</li>
                        <li><b>Τοποθεσία</b>: Αθήνα</li>
                        <li><b>Οντότητα</b>: Ευρωπαϊκή Ένωση</li>
                        <li><b>Φράση ουσιαστικού</b>: καταστροφή ιδιοκτησίας</li>
                        <li><b>Φράση επιθέτου</b>: δεύτερο μεγαλύτερο</li>
                        <li><b>Φράση ρήματος</b>: επέστρεψε στην Γη</li>
                        <li><b>Πρόταση/Υποπρόταση</b>: για να αποφευχθεί ο πόλεμος</li>
                        <li><b>Άλλα</b>: προσεκτικά</li>
                    </ul>
                </div>,
            open: ""
    },
    {
        question: "Πρέπει οι απαντήσεις να είναι αναγκαστικά μέρος του κειμένου;",
        answer: <div>
                    <b>Ναι.</b><br/>Ο χρήστης γράφει την ερώτηση και στην συνέχεια <b>μαρκάρει το μικρότερο δυνατό τμήμα του κειμένου που απαντά στην εκάστοτε ερώτηση</b>.
                </div>,
        open: ""
    },
    {
        question: 'Πόσο "εύκολες/δύσκολες" πρέπει να είναι οι ερωτήσεις;',
        answer: <div>
                    Oι ερωτήσεις που αναζητούμε πρέπει να είναι <b>απλές και ακριβείς ως προς την διατύπωση</b>, καθώς και <b>να μπορούν απαντηθούν σχετικά εύκολα</b>.
                    <br />
                    Παραδείγματα τέτοιων ερωτήσεων βρίσκονται στην ερώτηση <b><i>"Tι είδη ερωτήσεων αναζητούμε;"</i></b>.
                    <br />
                </div>,
        open: ""
    },
    {
        question: "Πόσο σημαντική είναι η ποικιλομορφία στις ερωτοαπαντήσεις;",
        answer: <div>
                    <b>Η ποικιλομορφία</b> των ερωτοαπαντήσεων αποτελεί <b>σημαντικός παράγοντας</b> για την άρτια ανάπτυξη του dataset.
                    <br />
                    Συνεπώς, σας παροτρύνουμε να συνεισφέρετε όσο το δυνατόν ερωτήσεις και απαντήσεις <b>διαφορετικών ειδών</b>.
                </div>,
        open: ""
    },
    {
        question: "Έχω κι άλλες απορίες. Που μπορώ να απευθυνθώ;",
        answer: <div>
                Για <b>οποιαδήποτε απορία</b>, μην διστάσετε να επικοινωνήσετε μαζί μας στη διεύθυνση <NavyLink a className="font-medium" href="mailto:sdi1600152@di.uoa.gr">sdi1600152@di.uoa.gr</NavyLink>
                </div>,
        open: ""
    }
]