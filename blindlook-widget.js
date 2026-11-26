/*!
 * Blindlook Erişilebilirlik Aracı – ek diller
 * Türkçe ve İngilizce widget içinde gömülüdür. Buradaki diller kompakt biçimdedir:
 *   lm   : [header, nav, main, aside, footer, search, form]
 *   role : [link, button, heading, img]
 *   p    : 10 profil adı (PROFILES sırasıyla)
 *   f    : 24 "Ad|Açıklama" (FEATURES sırasıyla)
 *   hideOpts: 5 "Başlık|Alt metin"
 * Eksik her anahtar otomatik olarak İngilizceye düşer.
 */
(function (R) {
  R.de = {
    title: 'Barrierefreiheits-Tool', open: 'Barrierefreiheits-Tool öffnen (ALT + B)', close: 'Schließen', lang: 'Sprache ändern', language: 'Sprache', hide: 'Tool ausblenden',
    hidden: 'Barrierefreiheits-Tool ausgeblendet. Mit ALT + B wieder öffnen.', search: 'Suchen Sie einen Begriff, den Sie nicht verstehen…', searchLabel: 'Begriffe oder Einstellungen suchen',
    profiles: 'Barrierefreiheitsprofile', content: 'Inhaltsanpassungen', colors: 'Farbanpassungen', textColor: 'Textfarbe', headingColor: 'Überschriftenfarbe', bgColor: 'Hintergrundfarbe', resetColor: 'Farbe zurücksetzen',
    reset: 'Einstellungen zurücksetzen', resetDone: 'Alle Einstellungen wurden zurückgesetzt.', tagline: 'Gleicher Zugang, persönliches Erlebnis.', report: 'Problem melden', statement: 'Erklärung',
    info: 'Info', toggleSec: 'Abschnitt ein- oder ausklappen', back: 'Zurück', on: 'an', off: 'aus', settings: 'Einstellungen', glossaryT: 'Glossar', wiki: 'Auf Wikipedia suchen', searching: 'Suche…',
    noResult: 'Keine Ergebnisse gefunden.', readMore: 'Weiterlesen', headings: 'Überschriften', landmarks: 'Seitenbereiche', links: 'Links auf dieser Seite', empty: 'Auf dieser Seite nicht gefunden.',
    noAlt: 'Keine Beschreibung', closeReader: 'Lesemodus schließen', srOn: 'Vorlesen aktiv. Klicken Sie auf ein Element, um es zu hören.',
    size: 'Panelgröße', sizes: ['Normal', 'XL', 'Mini'], hideTitle: 'Tool vorübergehend ausblenden', hideQ: 'Wie lange möchten Sie das Tool ausblenden?', hideOk: 'Bestätigen und ausblenden',
    hideOpts: ['Bis der Tab geschlossen wird|In einer neuen Sitzung wieder sichtbar', 'Für heute ausblenden|Ab morgen wieder sichtbar', 'Für diese Woche ausblenden|Nach 7 Tagen wieder aktiv', 'Für diesen Monat ausblenden|Nach 30 Tagen wieder aktiv', 'Nicht mehr anzeigen|Bleibt ausgeblendet, bis Cookies gelöscht werden'],
    lm: ['Kopfbereich', 'Navigation', 'Hauptinhalt', 'Seitenleiste', 'Fußbereich', 'Suche', 'Formular'], role: ['Link', 'Schaltfläche', 'Überschrift', 'Bild'],
    colorNames: ['Schwarz', 'Blau', 'Orange', 'Marineblau', 'Rot', 'Lila', 'Weiß', 'Grün', 'Türkis'],
    lw: ['Leicht', 'Mittel', 'Weit'], lmh: ['Niedrig', 'Mittel', 'Hoch'], dys: ['Legasthenie-Schrift', 'Gut lesbare Schrift'], con: ['Dunkler Kontrast', 'Heller Kontrast', 'Hoher Kontrast'], align: ['Links', 'Zentriert', 'Rechts', 'Blocksatz'], guide: ['Linie', 'Maske'],
    p: ['Blindheit', 'Sehbehinderung', 'Motorische Einschränkung', 'Legasthenie', 'Kognitiv & Lernen', 'Farbenblindheit', 'ADHS', 'Anfallssicher', 'Parkinson', 'Ältere Menschen'],
    f: ['Textgröße|Vergrößert alle Texte der Seite.', 'Legasthenie|Verwendet eine legastheniefreundliche oder besonders gut lesbare Schrift.', 'Textabstand|Vergrößert Buchstaben- und Wortabstände.', 'Zeilenhöhe|Vergrößert den Abstand zwischen den Zeilen.', 'Großer Mauszeiger|Macht den Mauszeiger groß und gut sichtbar.', 'Kontrast|Wendet dunklen, hellen oder hohen Kontrast an.', 'Links|Unterstreicht und markiert alle Links.', 'Animationen stoppen|Stoppt Bewegungen, Übergänge und laufende Videos.', 'Ton aus|Schaltet alle Audios und Videos stumm.', 'Graustufen|Zeigt die Seite in Schwarzweiß.', 'Überschriften hervorheben|Umrahmt alle Überschriften.', 'Blaulichtfilter|Reduziert Blaulicht durch einen warmen Farbton.', 'Seitenstruktur|Listet Überschriften und Bereiche auf; per Klick direkt dorthin.', 'Nützliche Links|Zeigt alle Links der Seite in einer Liste.', 'Textausrichtung|Richtet Text links, zentriert, rechts oder im Blocksatz aus.', 'Bilder ausblenden|Blendet ablenkende Bilder und Hintergrundbilder aus.', 'Sättigung|Verringert oder erhöht die Farbsättigung.', 'Leselineal|Zeigt eine Leselinie oder Fokusmaske, die dem Zeiger folgt.', 'Textlupe|Zeigt den Text unter dem Zeiger in großer Schrift.', 'Dunkelmodus|Zeigt die Seite mit dunklem Design.', 'Tastaturfokus|Hebt das fokussierte Element deutlich hervor.', 'Lesemodus|Öffnet den Haupttext in einer klaren, gut lesbaren Ansicht.', 'Bildbeschreibungen|Zeigt Alternativtexte auf Bildern an und markiert fehlende.', 'Vorlesen|Liest vor, was Sie anklicken oder per Tastatur fokussieren.'],
  };

  R.fr = {
    title: 'Outil d’accessibilité', open: 'Ouvrir l’outil d’accessibilité (ALT + B)', close: 'Fermer', lang: 'Changer de langue', language: 'Langue', hide: 'Masquer l’outil',
    hidden: 'Outil d’accessibilité masqué. Appuyez sur ALT + B pour le rouvrir.', search: 'Recherchez un terme que vous ne comprenez pas…', searchLabel: 'Rechercher des termes ou des réglages',
    profiles: 'Profils d’accessibilité', content: 'Réglages du contenu', colors: 'Réglages des couleurs', textColor: 'Couleur du texte', headingColor: 'Couleur des titres', bgColor: 'Couleur de fond', resetColor: 'Réinitialiser la couleur',
    reset: 'Réinitialiser les réglages', resetDone: 'Tous les réglages ont été réinitialisés.', tagline: 'Accès égal, expérience personnelle.', report: 'Signaler un problème', statement: 'Déclaration',
    info: 'informations', toggleSec: 'Réduire ou développer la section', back: 'Retour', on: 'activé', off: 'désactivé', settings: 'Réglages', glossaryT: 'Glossaire', wiki: 'Rechercher sur Wikipédia', searching: 'Recherche…',
    noResult: 'Aucun résultat.', readMore: 'Lire la suite', headings: 'Titres', landmarks: 'Régions de la page', links: 'Liens de cette page', empty: 'Aucun élément trouvé sur cette page.',
    noAlt: 'Aucune description', closeReader: 'Fermer le mode lecture', srOn: 'Lecture vocale activée. Cliquez sur un élément pour l’entendre.',
    size: 'Taille du panneau', sizes: ['Normal', 'XL', 'Mini'], hideTitle: 'Masquer temporairement l’outil', hideQ: 'Pendant combien de temps voulez-vous masquer l’outil ?', hideOk: 'Confirmer et masquer',
    hideOpts: ['Jusqu’à la fermeture de l’onglet|Réapparaît à la prochaine session', 'Masquer pour aujourd’hui|Réapparaît demain', 'Masquer cette semaine|Réactivé après 7 jours', 'Masquer ce mois-ci|Réactivé après 30 jours', 'Ne plus afficher|Reste masqué jusqu’à la suppression des cookies'],
    lm: ['En-tête', 'Navigation', 'Contenu principal', 'Barre latérale', 'Pied de page', 'Recherche', 'Formulaire'], role: ['Lien', 'Bouton', 'Titre', 'Image'],
    colorNames: ['Noir', 'Bleu', 'Orange', 'Bleu marine', 'Rouge', 'Violet', 'Blanc', 'Vert', 'Turquoise'],
    lw: ['Léger', 'Moyen', 'Large'], lmh: ['Faible', 'Moyen', 'Élevé'], dys: ['Police dyslexie', 'Police lisible'], con: ['Contraste sombre', 'Contraste clair', 'Contraste élevé'], align: ['Gauche', 'Centre', 'Droite', 'Justifié'], guide: ['Ligne', 'Masque'],
    p: ['Cécité', 'Déficience visuelle', 'Handicap moteur', 'Dyslexie', 'Cognitif et apprentissage', 'Daltonisme', 'TDAH', 'Épilepsie', 'Parkinson', 'Seniors'],
    f: ['Taille du texte|Agrandit tous les textes de la page.', 'Dyslexie|Utilise une police adaptée à la dyslexie ou très lisible.', 'Espacement du texte|Augmente l’espacement des lettres et des mots.', 'Hauteur de ligne|Augmente l’espace entre les lignes.', 'Grand curseur|Rend le pointeur grand et bien visible.', 'Contraste|Applique un contraste sombre, clair ou élevé.', 'Liens|Souligne et met en évidence tous les liens.', 'Arrêter les animations|Arrête les mouvements, transitions et vidéos.', 'Couper le son|Coupe le son de tous les audios et vidéos.', 'Niveaux de gris|Affiche la page en noir et blanc.', 'Surligner les titres|Encadre tous les titres.', 'Filtre lumière bleue|Réduit la lumière bleue avec une teinte chaude.', 'Structure de la page|Liste les titres et régions ; cliquez pour y accéder.', 'Liens utiles|Affiche tous les liens de la page dans une liste.', 'Alignement du texte|Aligne le texte à gauche, au centre, à droite ou justifié.', 'Masquer les images|Masque les images et arrière-plans distrayants.', 'Saturation|Diminue ou augmente la saturation des couleurs.', 'Guide de lecture|Affiche une ligne ou un masque qui suit le pointeur.', 'Loupe de texte|Affiche en grand le texte survolé.', 'Mode sombre|Affiche la page avec un thème sombre.', 'Focus clavier|Met en évidence l’élément ciblé au clavier.', 'Mode lecture|Ouvre le texte principal dans une vue claire et lisible.', 'Descriptions d’images|Affiche les textes alternatifs et signale ceux qui manquent.', 'Lecture vocale|Lit à voix haute ce que vous cliquez ou ciblez au clavier.'],
  };

  R.he = {
    title: 'כלי נגישות', open: 'פתיחת כלי הנגישות (ALT + B)', close: 'סגירה', lang: 'החלפת שפה', language: 'שפה', hide: 'הסתרת הכלי',
    hidden: 'כלי הנגישות הוסתר. הקישו ALT + B כדי לפתוח אותו שוב.', search: 'חפשו מושג שאינכם מבינים…', searchLabel: 'חיפוש מושגים או הגדרות',
    profiles: 'פרופילי נגישות', content: 'התאמות תוכן', colors: 'התאמות צבע', textColor: 'צבע טקסט', headingColor: 'צבע כותרות', bgColor: 'צבע רקע', resetColor: 'איפוס צבע',
    reset: 'איפוס הגדרות', resetDone: 'כל ההגדרות אופסו.', tagline: 'גישה שווה, חוויה אישית.', report: 'דיווח על בעיה', statement: 'הצהרת נגישות',
    info: 'מידע', toggleSec: 'כיווץ או הרחבה של המקטע', back: 'חזרה', on: 'פעיל', off: 'כבוי', settings: 'הגדרות', glossaryT: 'מילון מונחים', wiki: 'חיפוש בוויקיפדיה', searching: 'מחפש…',
    noResult: 'לא נמצאו תוצאות.', readMore: 'להמשך קריאה', headings: 'כותרות', landmarks: 'אזורי העמוד', links: 'קישורים בעמוד', empty: 'לא נמצא בעמוד זה.',
    noAlt: 'אין תיאור', closeReader: 'סגירת מצב קריאה', srOn: 'הקראה פעילה. לחצו על רכיב כדי לשמוע אותו.',
    size: 'גודל החלונית', sizes: ['רגיל', 'XL', 'מיני'], hideTitle: 'הסתרה זמנית של הכלי', hideQ: 'לכמה זמן להסתיר את הכלי?', hideOk: 'אישור והסתרה',
    hideOpts: ['עד סגירת הלשונית|יופיע שוב בהפעלה הבאה', 'הסתרה להיום|יופיע שוב מחר', 'הסתרה לשבוע|יחזור לפעול אחרי 7 ימים', 'הסתרה לחודש|יחזור לפעול אחרי 30 ימים', 'לא להציג שוב|יישאר מוסתר עד למחיקת העוגיות'],
    lm: ['כותרת עליונה', 'ניווט', 'תוכן ראשי', 'סרגל צד', 'כותרת תחתונה', 'חיפוש', 'טופס'], role: ['קישור', 'כפתור', 'כותרת', 'תמונה'],
    colorNames: ['שחור', 'כחול', 'כתום', 'כחול כהה', 'אדום', 'סגול', 'לבן', 'ירוק', 'טורקיז'],
    lw: ['קל', 'בינוני', 'רחב'], lmh: ['נמוך', 'בינוני', 'גבוה'], dys: ['גופן לדיסלקציה', 'גופן קריא'], con: ['ניגודיות כהה', 'ניגודיות בהירה', 'ניגודיות גבוהה'], align: ['שמאל', 'מרכז', 'ימין', 'מיושר'], guide: ['קו', 'מסכה'],
    p: ['עיוורון', 'לקויות ראייה', 'מוגבלות מוטורית', 'דיסלקציה', 'קוגניציה ולמידה', 'עיוורון צבעים', 'הפרעת קשב (ADHD)', 'בטוח לאפילפסיה', 'פרקינסון', 'מבוגרים'],
    f: ['גודל טקסט|מגדיל את כל הטקסט בעמוד.', 'דיסלקציה|משתמש בגופן ידידותי לדיסלקציה או בגופן קריא במיוחד.', 'ריווח טקסט|מגדיל את הריווח בין אותיות ומילים.', 'גובה שורה|מגדיל את הרווח בין השורות.', 'סמן גדול|מגדיל את סמן העכבר.', 'ניגודיות|מחיל ניגודיות כהה, בהירה או גבוהה.', 'קישורים|מדגיש ומסמן את כל הקישורים.', 'עצירת אנימציות|עוצר תנועה, מעברים וסרטונים.', 'השתקה|משתיק את כל השמע והווידאו.', 'גווני אפור|מציג את העמוד בשחור-לבן.', 'הדגשת כותרות|ממסגר את כל הכותרות.', 'מסנן אור כחול|מפחית אור כחול באמצעות גוון חם.', 'מבנה העמוד|מציג את הכותרות והאזורים; לחצו כדי לעבור אליהם.', 'קישורים שימושיים|מציג את כל הקישורים בעמוד ברשימה אחת.', 'יישור טקסט|מיישר טקסט לשמאל, למרכז, לימין או לשני הצדדים.', 'הסתרת תמונות|מסתיר תמונות ורקעים מסיחים.', 'רוויה|מפחית או מגביר את רוויית הצבעים.', 'סרגל קריאה|מציג קו קריאה או מסכה שעוקבים אחרי הסמן.', 'זכוכית מגדלת|מציג בגדול את הטקסט שמתחת לסמן.', 'מצב כהה|מציג את העמוד בערכת נושא כהה.', 'מיקוד מקלדת|מדגיש בבירור את הרכיב שבמיקוד.', 'מצב קריאה|פותח את הטקסט הראשי בתצוגה נקייה ונוחה.', 'תיאורי תמונות|מציג טקסט חלופי על התמונות ומסמן חוסרים.', 'הקראה|מקריא את מה שלוחצים עליו או ממקדים במקלדת.'],
  };

  R.ru = {
    title: 'Инструмент доступности', open: 'Открыть инструмент доступности (ALT + B)', close: 'Закрыть', lang: 'Сменить язык', language: 'Язык', hide: 'Скрыть инструмент',
    hidden: 'Инструмент доступности скрыт. Нажмите ALT + B, чтобы открыть его снова.', search: 'Найдите непонятный термин…', searchLabel: 'Поиск терминов или настроек',
    profiles: 'Профили доступности', content: 'Настройки контента', colors: 'Настройки цвета', textColor: 'Цвет текста', headingColor: 'Цвет заголовков', bgColor: 'Цвет фона', resetColor: 'Сбросить цвет',
    reset: 'Сбросить настройки', resetDone: 'Все настройки сброшены.', tagline: 'Равный доступ, личный опыт.', report: 'Сообщить о проблеме', statement: 'Заявление',
    info: 'информация', toggleSec: 'Свернуть или развернуть раздел', back: 'Назад', on: 'вкл.', off: 'выкл.', settings: 'Настройки', glossaryT: 'Глоссарий', wiki: 'Искать в Википедии', searching: 'Поиск…',
    noResult: 'Ничего не найдено.', readMore: 'Читать далее', headings: 'Заголовки', landmarks: 'Области страницы', links: 'Ссылки на странице', empty: 'На этой странице не найдено.',
    noAlt: 'Нет описания', closeReader: 'Закрыть режим чтения', srOn: 'Озвучивание включено. Нажмите на элемент, чтобы услышать его.',
    size: 'Размер панели', sizes: ['Обычный', 'XL', 'Мини'], hideTitle: 'Временно скрыть инструмент', hideQ: 'На какое время скрыть инструмент?', hideOk: 'Подтвердить и скрыть',
    hideOpts: ['До закрытия вкладки|Снова появится в новом сеансе', 'Скрыть на сегодня|Снова появится завтра', 'Скрыть на неделю|Снова активен через 7 дней', 'Скрыть на месяц|Снова активен через 30 дней', 'Больше не показывать|Скрыт до удаления файлов cookie'],
    lm: ['Шапка', 'Навигация', 'Основное содержимое', 'Боковая панель', 'Подвал', 'Поиск', 'Форма'], role: ['Ссылка', 'Кнопка', 'Заголовок', 'Изображение'],
    colorNames: ['Чёрный', 'Синий', 'Оранжевый', 'Тёмно-синий', 'Красный', 'Фиолетовый', 'Белый', 'Зелёный', 'Бирюзовый'],
    lw: ['Небольшой', 'Средний', 'Широкий'], lmh: ['Низкий', 'Средний', 'Высокий'], dys: ['Шрифт для дислексии', 'Удобочитаемый шрифт'], con: ['Тёмный контраст', 'Светлый контраст', 'Высокий контраст'], align: ['Слева', 'По центру', 'Справа', 'По ширине'], guide: ['Линия', 'Маска'],
    p: ['Слепота', 'Нарушения зрения', 'Двигательные нарушения', 'Дислексия', 'Когнитивные нарушения', 'Дальтонизм', 'СДВГ', 'Эпилепсия', 'Болезнь Паркинсона', 'Пожилые люди'],
    f: ['Размер текста|Увеличивает весь текст на странице.', 'Дислексия|Использует шрифт для дислексии или особо удобочитаемый шрифт.', 'Интервал текста|Увеличивает интервалы между буквами и словами.', 'Высота строки|Увеличивает расстояние между строками.', 'Большой курсор|Делает указатель мыши крупным и заметным.', 'Контраст|Применяет тёмный, светлый или высокий контраст.', 'Ссылки|Подчёркивает и выделяет все ссылки.', 'Остановить анимацию|Останавливает движение, переходы и видео.', 'Выключить звук|Отключает звук всех аудио и видео.', 'Оттенки серого|Показывает страницу в чёрно-белом цвете.', 'Выделить заголовки|Обводит рамкой все заголовки.', 'Фильтр синего света|Уменьшает синий свет тёплым оттенком.', 'Структура страницы|Показывает заголовки и области; нажмите, чтобы перейти.', 'Полезные ссылки|Показывает все ссылки страницы одним списком.', 'Выравнивание текста|Выравнивает текст влево, по центру, вправо или по ширине.', 'Скрыть изображения|Скрывает отвлекающие изображения и фоны.', 'Насыщенность|Уменьшает или увеличивает насыщенность цветов.', 'Линейка для чтения|Показывает линию или маску, следующую за указателем.', 'Лупа для текста|Показывает текст под указателем крупным шрифтом.', 'Тёмный режим|Показывает страницу в тёмной теме.', 'Фокус клавиатуры|Чётко выделяет элемент в фокусе.', 'Режим чтения|Открывает основной текст в простом и удобном виде.', 'Описания изображений|Показывает альтернативный текст изображений и отмечает отсутствующий.', 'Озвучивание|Читает вслух то, что вы нажимаете или выбираете клавиатурой.'],
  };

  R.ar = {
    title: 'أداة إمكانية الوصول', open: 'فتح أداة إمكانية الوصول (ALT + B)', close: 'إغلاق', lang: 'تغيير اللغة', language: 'اللغة', hide: 'إخفاء الأداة',
    hidden: 'تم إخفاء أداة إمكانية الوصول. اضغط ALT + B لفتحها مجددًا.', search: 'ابحث عن مصطلح لا تفهمه…', searchLabel: 'البحث عن مصطلحات أو إعدادات',
    profiles: 'ملفات إمكانية الوصول', content: 'تعديلات المحتوى', colors: 'تعديلات الألوان', textColor: 'لون النص', headingColor: 'لون العناوين', bgColor: 'لون الخلفية', resetColor: 'إعادة تعيين اللون',
    reset: 'إعادة تعيين الإعدادات', resetDone: 'تمت إعادة تعيين جميع الإعدادات.', tagline: 'وصول متساوٍ، تجربة شخصية.', report: 'الإبلاغ عن مشكلة', statement: 'بيان إمكانية الوصول',
    info: 'معلومات', toggleSec: 'طي القسم أو توسيعه', back: 'رجوع', on: 'مفعّل', off: 'معطّل', settings: 'الإعدادات', glossaryT: 'المسرد', wiki: 'البحث في ويكيبيديا', searching: 'جارٍ البحث…',
    noResult: 'لم يتم العثور على نتائج.', readMore: 'اقرأ المزيد', headings: 'العناوين', landmarks: 'مناطق الصفحة', links: 'روابط هذه الصفحة', empty: 'لم يتم العثور على شيء في هذه الصفحة.',
    noAlt: 'لا يوجد وصف', closeReader: 'إغلاق وضع القراءة', srOn: 'القراءة الصوتية مفعّلة. انقر على أي عنصر لسماعه.',
    size: 'حجم اللوحة', sizes: ['عادي', 'XL', 'مصغّر'], hideTitle: 'إخفاء الأداة مؤقتًا', hideQ: 'ما المدة التي تريد إخفاء الأداة خلالها؟', hideOk: 'تأكيد وإخفاء',
    hideOpts: ['حتى إغلاق علامة التبويب|تظهر مجددًا في الجلسة التالية', 'إخفاء لهذا اليوم|تظهر مجددًا غدًا', 'إخفاء لهذا الأسبوع|تعود بعد 7 أيام', 'إخفاء لهذا الشهر|تعود بعد 30 يومًا', 'عدم الإظهار مجددًا|تبقى مخفية حتى حذف ملفات تعريف الارتباط'],
    lm: ['الترويسة', 'التنقل', 'المحتوى الرئيسي', 'الشريط الجانبي', 'التذييل', 'البحث', 'نموذج'], role: ['رابط', 'زر', 'عنوان', 'صورة'],
    colorNames: ['أسود', 'أزرق', 'برتقالي', 'كحلي', 'أحمر', 'بنفسجي', 'أبيض', 'أخضر', 'فيروزي'],
    lw: ['خفيف', 'متوسط', 'واسع'], lmh: ['منخفض', 'متوسط', 'مرتفع'], dys: ['خط لعسر القراءة', 'خط واضح'], con: ['تباين داكن', 'تباين فاتح', 'تباين عالٍ'], align: ['يسار', 'وسط', 'يمين', 'ضبط'], guide: ['خط', 'قناع'],
    p: ['فقدان البصر', 'ضعف البصر', 'الإعاقة الحركية', 'عسر القراءة', 'الإدراك والتعلم', 'عمى الألوان', 'فرط الحركة وتشتت الانتباه', 'آمن لنوبات الصرع', 'مرض باركنسون', 'كبار السن'],
    f: ['حجم النص|يكبّر جميع النصوص في الصفحة.', 'عسر القراءة|يستخدم خطًا مناسبًا لعسر القراءة أو خطًا واضحًا جدًا.', 'تباعد النص|يزيد المسافات بين الحروف والكلمات.', 'ارتفاع السطر|يزيد المسافة بين الأسطر.', 'مؤشر كبير|يجعل مؤشر الفأرة كبيرًا وواضحًا.', 'التباين|يطبّق تباينًا داكنًا أو فاتحًا أو عاليًا.', 'الروابط|يضع خطًا تحت جميع الروابط ويبرزها.', 'إيقاف الحركة|يوقف الحركة والانتقالات ومقاطع الفيديو.', 'كتم الصوت|يكتم جميع الأصوات ومقاطع الفيديو.', 'تدرج الرمادي|يعرض الصفحة بالأبيض والأسود.', 'إبراز العناوين|يضع إطارًا حول جميع العناوين.', 'فلتر الضوء الأزرق|يقلل الضوء الأزرق بلون دافئ.', 'بنية الصفحة|يعرض العناوين والمناطق؛ انقر للانتقال إليها.', 'روابط مفيدة|يعرض جميع روابط الصفحة في قائمة واحدة.', 'محاذاة النص|يحاذي النص لليسار أو الوسط أو اليمين أو بالضبط.', 'إخفاء الصور|يخفي الصور والخلفيات المشتتة.', 'التشبع|يقلل تشبع الألوان أو يزيده.', 'دليل القراءة|يعرض خطًا أو قناعًا يتبع المؤشر.', 'مكبّر النص|يعرض النص الموجود تحت المؤشر بخط كبير.', 'الوضع الداكن|يعرض الصفحة بسمة داكنة.', 'تركيز لوحة المفاتيح|يبرز العنصر المحدد بوضوح.', 'وضع القراءة|يفتح النص الرئيسي بعرض بسيط ومريح.', 'وصف الصور|يعرض النص البديل على الصور ويميّز الناقص منه.', 'القراءة الصوتية|يقرأ بصوت عالٍ ما تنقر عليه أو تحدده بلوحة المفاتيح.'],
  };

  R.zh = {
    title: '无障碍工具', open: '打开无障碍工具 (ALT + B)', close: '关闭', lang: '切换语言', language: '语言', hide: '隐藏工具',
    hidden: '无障碍工具已隐藏。按 ALT + B 可再次打开。', search: '搜索你不理解的词语…', searchLabel: '搜索术语或设置',
    profiles: '无障碍配置', content: '内容调整', colors: '颜色调整', textColor: '文字颜色', headingColor: '标题颜色', bgColor: '背景颜色', resetColor: '重置颜色',
    reset: '重置设置', resetDone: '所有设置已重置。', tagline: '平等访问，个性体验。', report: '报告问题', statement: '无障碍声明',
    info: '说明', toggleSec: '折叠或展开此部分', back: '返回', on: '开启', off: '关闭', settings: '设置', glossaryT: '术语表', wiki: '在维基百科中搜索', searching: '搜索中…',
    noResult: '未找到结果。', readMore: '阅读更多', headings: '标题', landmarks: '页面区域', links: '本页链接', empty: '本页未找到。',
    noAlt: '无描述', closeReader: '关闭阅读模式', srOn: '朗读已开启。点击任意元素即可收听。',
    size: '面板大小', sizes: ['标准', 'XL', '迷你'], hideTitle: '暂时隐藏工具', hideQ: '你想隐藏工具多长时间？', hideOk: '确认并隐藏',
    hideOpts: ['直到关闭标签页|下次会话时重新显示', '今天隐藏|明天重新显示', '本周隐藏|7 天后重新启用', '本月隐藏|30 天后重新启用', '不再显示|在清除 Cookie 之前保持隐藏'],
    lm: ['页眉', '导航', '主要内容', '侧边栏', '页脚', '搜索', '表单'], role: ['链接', '按钮', '标题', '图片'],
    colorNames: ['黑色', '蓝色', '橙色', '海军蓝', '红色', '紫色', '白色', '绿色', '青色'],
    lw: ['轻微', '中等', '宽'], lmh: ['低', '中', '高'], dys: ['阅读障碍字体', '易读字体'], con: ['深色对比', '浅色对比', '高对比度'], align: ['左对齐', '居中', '右对齐', '两端对齐'], guide: ['线条', '遮罩'],
    p: ['失明', '视力障碍', '运动障碍', '阅读障碍', '认知与学习', '色盲', '多动症', '癫痫安全', '帕金森病', '老年人'],
    f: ['文字大小|放大页面上的所有文字。', '阅读障碍|使用适合阅读障碍或高度易读的字体。', '文字间距|增大字母和单词间距。', '行高|增大行与行之间的距离。', '大号光标|让鼠标指针更大、更醒目。', '对比度|应用深色、浅色或高对比度。', '链接|为所有链接添加下划线并高亮。', '停止动画|停止动态效果、过渡和视频。', '静音|将所有音频和视频静音。', '灰度|以黑白方式显示页面。', '突出标题|为所有标题加上边框。', '蓝光过滤|用暖色调减少蓝光。', '页面结构|列出标题和区域，点击即可跳转。', '实用链接|在一个列表中显示页面上的所有链接。', '文字对齐|将文字左对齐、居中、右对齐或两端对齐。', '隐藏图片|隐藏分散注意力的图片和背景。', '饱和度|降低或提高颜色饱和度。', '阅读指引|显示跟随指针的阅读线或遮罩。', '文字放大镜|以大字显示指针下的文字。', '深色模式|以深色主题显示页面。', '键盘焦点|清晰突出当前获得焦点的元素。', '阅读模式|以简洁易读的视图打开正文。', '图片描述|在图片上显示替代文本并标出缺失的。', '屏幕朗读|朗读你点击或用键盘聚焦的内容。'],
  };

  R['zh-TW'] = {
    title: '無障礙工具', open: '開啟無障礙工具 (ALT + B)', close: '關閉', lang: '切換語言', language: '語言', hide: '隱藏工具',
    hidden: '無障礙工具已隱藏。按 ALT + B 可再次開啟。', search: '搜尋您不理解的詞語…', searchLabel: '搜尋術語或設定',
    profiles: '無障礙設定檔', content: '內容調整', colors: '色彩調整', textColor: '文字顏色', headingColor: '標題顏色', bgColor: '背景顏色', resetColor: '重設顏色',
    reset: '重設設定', resetDone: '所有設定已重設。', tagline: '平等存取，個人化體驗。', report: '回報問題', statement: '無障礙聲明',
    info: '說明', toggleSec: '收合或展開此區塊', back: '返回', on: '開啟', off: '關閉', settings: '設定', glossaryT: '詞彙表', wiki: '在維基百科搜尋', searching: '搜尋中…',
    noResult: '找不到結果。', readMore: '閱讀更多', headings: '標題', landmarks: '頁面區域', links: '本頁連結', empty: '本頁找不到。',
    noAlt: '無描述', closeReader: '關閉閱讀模式', srOn: '朗讀已開啟。點擊任一元素即可聆聽。',
    size: '面板大小', sizes: ['標準', 'XL', '迷你'], hideTitle: '暫時隱藏工具', hideQ: '您想隱藏工具多久？', hideOk: '確認並隱藏',
    hideOpts: ['直到關閉分頁|下次工作階段會再次顯示', '今天隱藏|明天再次顯示', '本週隱藏|7 天後重新啟用', '本月隱藏|30 天後重新啟用', '不再顯示|在清除 Cookie 前保持隱藏'],
    lm: ['頁首', '導覽', '主要內容', '側邊欄', '頁尾', '搜尋', '表單'], role: ['連結', '按鈕', '標題', '圖片'],
    colorNames: ['黑色', '藍色', '橘色', '海軍藍', '紅色', '紫色', '白色', '綠色', '青色'],
    lw: ['輕微', '中等', '寬'], lmh: ['低', '中', '高'], dys: ['閱讀障礙字體', '易讀字體'], con: ['深色對比', '淺色對比', '高對比'], align: ['靠左', '置中', '靠右', '左右對齊'], guide: ['線條', '遮罩'],
    p: ['失明', '視覺障礙', '動作障礙', '閱讀障礙', '認知與學習', '色盲', '過動症', '癲癇安全', '帕金森氏症', '年長者'],
    f: ['文字大小|放大頁面上的所有文字。', '閱讀障礙|使用適合閱讀障礙或高度易讀的字體。', '文字間距|加大字母與字詞間距。', '行高|加大行與行之間的距離。', '大型游標|讓滑鼠游標更大、更明顯。', '對比|套用深色、淺色或高對比。', '連結|為所有連結加上底線並醒目標示。', '停止動畫|停止動態效果、轉場與影片。', '靜音|將所有音訊與影片靜音。', '灰階|以黑白顯示頁面。', '標示標題|為所有標題加上外框。', '藍光濾鏡|以暖色調減少藍光。', '頁面結構|列出標題與區域，點擊即可前往。', '實用連結|在一個清單中顯示頁面上的所有連結。', '文字對齊|將文字靠左、置中、靠右或左右對齊。', '隱藏圖片|隱藏令人分心的圖片與背景。', '飽和度|降低或提高色彩飽和度。', '閱讀輔助線|顯示跟隨游標的閱讀線或遮罩。', '文字放大鏡|以大字顯示游標下的文字。', '深色模式|以深色主題顯示頁面。', '鍵盤焦點|清楚標示目前取得焦點的元素。', '閱讀模式|以簡潔易讀的檢視開啟主要內容。', '圖片描述|在圖片上顯示替代文字並標示缺少者。', '螢幕朗讀|朗讀您點擊或以鍵盤聚焦的內容。'],
  };

  R.pl = {
    title: 'Narzędzie dostępności', open: 'Otwórz narzędzie dostępności (ALT + B)', close: 'Zamknij', lang: 'Zmień język', language: 'Język', hide: 'Ukryj narzędzie',
    hidden: 'Narzędzie dostępności zostało ukryte. Naciśnij ALT + B, aby je ponownie otworzyć.', search: 'Wyszukaj pojęcie, którego nie rozumiesz…', searchLabel: 'Szukaj pojęć lub ustawień',
    profiles: 'Profile dostępności', content: 'Ustawienia treści', colors: 'Ustawienia kolorów', textColor: 'Kolor tekstu', headingColor: 'Kolor nagłówków', bgColor: 'Kolor tła', resetColor: 'Resetuj kolor',
    reset: 'Resetuj ustawienia', resetDone: 'Wszystkie ustawienia zostały zresetowane.', tagline: 'Równy dostęp, osobiste doświadczenie.', report: 'Zgłoś problem', statement: 'Deklaracja',
    info: 'informacje', toggleSec: 'Zwiń lub rozwiń sekcję', back: 'Wstecz', on: 'wł.', off: 'wył.', settings: 'Ustawienia', glossaryT: 'Słowniczek', wiki: 'Szukaj w Wikipedii', searching: 'Wyszukiwanie…',
    noResult: 'Brak wyników.', readMore: 'Czytaj dalej', headings: 'Nagłówki', landmarks: 'Obszary strony', links: 'Linki na tej stronie', empty: 'Nie znaleziono na tej stronie.',
    noAlt: 'Brak opisu', closeReader: 'Zamknij tryb czytania', srOn: 'Czytanie na głos włączone. Kliknij element, aby go usłyszeć.',
    size: 'Rozmiar panelu', sizes: ['Normalny', 'XL', 'Mini'], hideTitle: 'Tymczasowo ukryj narzędzie', hideQ: 'Na jak długo chcesz ukryć narzędzie?', hideOk: 'Potwierdź i ukryj',
    hideOpts: ['Do zamknięcia karty|Pojawi się ponownie w nowej sesji', 'Ukryj na dziś|Pojawi się ponownie jutro', 'Ukryj na ten tydzień|Wróci po 7 dniach', 'Ukryj na ten miesiąc|Wróci po 30 dniach', 'Nie pokazuj więcej|Pozostanie ukryte do usunięcia plików cookie'],
    lm: ['Nagłówek strony', 'Nawigacja', 'Główna treść', 'Panel boczny', 'Stopka', 'Wyszukiwanie', 'Formularz'], role: ['Link', 'Przycisk', 'Nagłówek', 'Obraz'],
    colorNames: ['Czarny', 'Niebieski', 'Pomarańczowy', 'Granatowy', 'Czerwony', 'Fioletowy', 'Biały', 'Zielony', 'Turkusowy'],
    lw: ['Lekki', 'Średni', 'Szeroki'], lmh: ['Niski', 'Średni', 'Wysoki'], dys: ['Czcionka dla dyslektyków', 'Czytelna czcionka'], con: ['Ciemny kontrast', 'Jasny kontrast', 'Wysoki kontrast'], align: ['Do lewej', 'Do środka', 'Do prawej', 'Wyjustuj'], guide: ['Linia', 'Maska'],
    p: ['Ślepota', 'Wady wzroku', 'Niepełnosprawność ruchowa', 'Dysleksja', 'Poznanie i nauka', 'Daltonizm', 'ADHD', 'Bezpieczne dla epileptyków', 'Choroba Parkinsona', 'Seniorzy'],
    f: ['Rozmiar tekstu|Powiększa cały tekst na stronie.', 'Dysleksja|Używa czcionki przyjaznej dyslektykom lub bardzo czytelnej.', 'Odstępy w tekście|Zwiększa odstępy między literami i słowami.', 'Wysokość linii|Zwiększa odstęp między wierszami.', 'Duży kursor|Powiększa wskaźnik myszy.', 'Kontrast|Stosuje ciemny, jasny lub wysoki kontrast.', 'Linki|Podkreśla i wyróżnia wszystkie linki.', 'Zatrzymaj animacje|Zatrzymuje ruch, przejścia i filmy.', 'Wycisz dźwięk|Wycisza wszystkie nagrania audio i wideo.', 'Skala szarości|Wyświetla stronę w czerni i bieli.', 'Wyróżnij nagłówki|Obramowuje wszystkie nagłówki.', 'Filtr światła niebieskiego|Ogranicza światło niebieskie ciepłym odcieniem.', 'Struktura strony|Wyświetla nagłówki i obszary; kliknij, aby przejść.', 'Przydatne linki|Pokazuje wszystkie linki strony na jednej liście.', 'Wyrównanie tekstu|Wyrównuje tekst do lewej, środka, prawej lub justuje.', 'Ukryj obrazy|Ukrywa rozpraszające obrazy i tła.', 'Nasycenie|Zmniejsza lub zwiększa nasycenie kolorów.', 'Linijka do czytania|Pokazuje linię lub maskę podążającą za kursorem.', 'Lupa tekstu|Pokazuje tekst pod kursorem dużą czcionką.', 'Tryb ciemny|Wyświetla stronę w ciemnym motywie.', 'Fokus klawiatury|Wyraźnie wyróżnia element z fokusem.', 'Tryb czytania|Otwiera główną treść w prostym, czytelnym widoku.', 'Opisy obrazów|Pokazuje teksty alternatywne i oznacza brakujące.', 'Czytanie na głos|Czyta na głos to, co klikniesz lub zaznaczysz klawiaturą.'],
  };

  R.cs = {
    title: 'Nástroj přístupnosti', open: 'Otevřít nástroj přístupnosti (ALT + B)', close: 'Zavřít', lang: 'Změnit jazyk', language: 'Jazyk', hide: 'Skrýt nástroj',
    hidden: 'Nástroj přístupnosti byl skryt. Znovu jej otevřete klávesami ALT + B.', search: 'Vyhledejte pojem, kterému nerozumíte…', searchLabel: 'Hledat pojmy nebo nastavení',
    profiles: 'Profily přístupnosti', content: 'Úpravy obsahu', colors: 'Úpravy barev', textColor: 'Barva textu', headingColor: 'Barva nadpisů', bgColor: 'Barva pozadí', resetColor: 'Obnovit barvu',
    reset: 'Obnovit nastavení', resetDone: 'Všechna nastavení byla obnovena.', tagline: 'Rovný přístup, osobní zážitek.', report: 'Nahlásit problém', statement: 'Prohlášení',
    info: 'informace', toggleSec: 'Sbalit nebo rozbalit sekci', back: 'Zpět', on: 'zapnuto', off: 'vypnuto', settings: 'Nastavení', glossaryT: 'Slovníček', wiki: 'Hledat na Wikipedii', searching: 'Hledám…',
    noResult: 'Nic nenalezeno.', readMore: 'Číst dále', headings: 'Nadpisy', landmarks: 'Oblasti stránky', links: 'Odkazy na stránce', empty: 'Na této stránce nenalezeno.',
    noAlt: 'Bez popisu', closeReader: 'Zavřít režim čtení', srOn: 'Předčítání je zapnuto. Klikněte na prvek a uslyšíte ho.',
    size: 'Velikost panelu', sizes: ['Normální', 'XL', 'Mini'], hideTitle: 'Dočasně skrýt nástroj', hideQ: 'Na jak dlouho chcete nástroj skrýt?', hideOk: 'Potvrdit a skrýt',
    hideOpts: ['Do zavření karty|Znovu se zobrazí v nové relaci', 'Skrýt na dnešek|Zítra se znovu zobrazí', 'Skrýt na tento týden|Znovu aktivní po 7 dnech', 'Skrýt na tento měsíc|Znovu aktivní po 30 dnech', 'Už nezobrazovat|Zůstane skrytý do smazání cookies'],
    lm: ['Záhlaví', 'Navigace', 'Hlavní obsah', 'Postranní panel', 'Zápatí', 'Vyhledávání', 'Formulář'], role: ['Odkaz', 'Tlačítko', 'Nadpis', 'Obrázek'],
    colorNames: ['Černá', 'Modrá', 'Oranžová', 'Námořnická modrá', 'Červená', 'Fialová', 'Bílá', 'Zelená', 'Tyrkysová'],
    lw: ['Mírné', 'Střední', 'Široké'], lmh: ['Nízká', 'Střední', 'Vysoká'], dys: ['Písmo pro dyslektiky', 'Čitelné písmo'], con: ['Tmavý kontrast', 'Světlý kontrast', 'Vysoký kontrast'], align: ['Vlevo', 'Na střed', 'Vpravo', 'Do bloku'], guide: ['Linka', 'Maska'],
    p: ['Nevidomost', 'Zrakové postižení', 'Pohybové postižení', 'Dyslexie', 'Kognice a učení', 'Barvoslepost', 'ADHD', 'Bezpečné pro epileptiky', 'Parkinsonova nemoc', 'Senioři'],
    f: ['Velikost textu|Zvětší veškerý text na stránce.', 'Dyslexie|Použije písmo vhodné pro dyslektiky nebo velmi čitelné písmo.', 'Rozestupy textu|Zvětší mezery mezi písmeny a slovy.', 'Výška řádku|Zvětší mezeru mezi řádky.', 'Velký kurzor|Zvětší ukazatel myši.', 'Kontrast|Použije tmavý, světlý nebo vysoký kontrast.', 'Odkazy|Podtrhne a zvýrazní všechny odkazy.', 'Zastavit animace|Zastaví pohyb, přechody a videa.', 'Ztlumit zvuk|Ztlumí všechny zvuky a videa.', 'Odstíny šedi|Zobrazí stránku černobíle.', 'Zvýraznit nadpisy|Orámuje všechny nadpisy.', 'Filtr modrého světla|Sníží modré světlo teplým odstínem.', 'Struktura stránky|Vypíše nadpisy a oblasti; kliknutím na ně přejdete.', 'Užitečné odkazy|Zobrazí všechny odkazy stránky v jednom seznamu.', 'Zarovnání textu|Zarovná text vlevo, na střed, vpravo nebo do bloku.', 'Skrýt obrázky|Skryje rušivé obrázky a pozadí.', 'Sytost|Sníží nebo zvýší sytost barev.', 'Čtecí pravítko|Zobrazí linku nebo masku, která sleduje kurzor.', 'Textová lupa|Zobrazí text pod kurzorem velkým písmem.', 'Tmavý režim|Zobrazí stránku v tmavém motivu.', 'Fokus klávesnice|Výrazně zvýrazní prvek s fokusem.', 'Režim čtení|Otevře hlavní text v čistém, čitelném zobrazení.', 'Popisy obrázků|Zobrazí alternativní texty a označí chybějící.', 'Předčítání|Přečte nahlas, na co kliknete nebo co vyberete klávesnicí.'],
  };

  R.sl = {
    title: 'Orodje za dostopnost', open: 'Odpri orodje za dostopnost (ALT + B)', close: 'Zapri', lang: 'Spremeni jezik', language: 'Jezik', hide: 'Skrij orodje',
    hidden: 'Orodje za dostopnost je skrito. Za ponovni prikaz pritisnite ALT + B.', search: 'Poiščite izraz, ki ga ne razumete…', searchLabel: 'Iskanje izrazov ali nastavitev',
    profiles: 'Profili dostopnosti', content: 'Prilagoditve vsebine', colors: 'Prilagoditve barv', textColor: 'Barva besedila', headingColor: 'Barva naslovov', bgColor: 'Barva ozadja', resetColor: 'Ponastavi barvo',
    reset: 'Ponastavi nastavitve', resetDone: 'Vse nastavitve so ponastavljene.', tagline: 'Enak dostop, osebna izkušnja.', report: 'Prijavi težavo', statement: 'Izjava',
    info: 'informacije', toggleSec: 'Strni ali razširi razdelek', back: 'Nazaj', on: 'vklopljeno', off: 'izklopljeno', settings: 'Nastavitve', glossaryT: 'Slovarček', wiki: 'Išči v Wikipediji', searching: 'Iskanje…',
    noResult: 'Ni zadetkov.', readMore: 'Preberi več', headings: 'Naslovi', landmarks: 'Območja strani', links: 'Povezave na strani', empty: 'Na tej strani ni najdeno.',
    noAlt: 'Ni opisa', closeReader: 'Zapri bralni način', srOn: 'Branje na glas je vklopljeno. Kliknite element, da ga slišite.',
    size: 'Velikost plošče', sizes: ['Običajno', 'XL', 'Mini'], hideTitle: 'Začasno skrij orodje', hideQ: 'Kako dolgo želite skriti orodje?', hideOk: 'Potrdi in skrij',
    hideOpts: ['Dokler se zavihek ne zapre|Ponovno se prikaže v novi seji', 'Skrij za danes|Jutri se znova prikaže', 'Skrij za ta teden|Ponovno aktivno po 7 dneh', 'Skrij za ta mesec|Ponovno aktivno po 30 dneh', 'Ne prikazuj več|Ostane skrito, dokler ne izbrišete piškotkov'],
    lm: ['Glava', 'Navigacija', 'Glavna vsebina', 'Stranska vrstica', 'Noga', 'Iskanje', 'Obrazec'], role: ['Povezava', 'Gumb', 'Naslov', 'Slika'],
    colorNames: ['Črna', 'Modra', 'Oranžna', 'Mornarsko modra', 'Rdeča', 'Vijolična', 'Bela', 'Zelena', 'Turkizna'],
    lw: ['Rahlo', 'Srednje', 'Široko'], lmh: ['Nizko', 'Srednje', 'Visoko'], dys: ['Pisava za disleksijo', 'Berljiva pisava'], con: ['Temni kontrast', 'Svetli kontrast', 'Visok kontrast'], align: ['Levo', 'Sredina', 'Desno', 'Obojestransko'], guide: ['Črta', 'Maska'],
    p: ['Slepota', 'Okvare vida', 'Gibalne ovire', 'Disleksija', 'Kognicija in učenje', 'Barvna slepota', 'ADHD', 'Varno za epilepsijo', 'Parkinsonova bolezen', 'Starejši'],
    f: ['Velikost besedila|Poveča vse besedilo na strani.', 'Disleksija|Uporabi pisavo, prijazno do disleksije, ali zelo berljivo pisavo.', 'Razmik besedila|Poveča razmik med črkami in besedami.', 'Višina vrstice|Poveča razmik med vrsticami.', 'Velik kazalec|Poveča kazalec miške.', 'Kontrast|Uporabi temen, svetel ali visok kontrast.', 'Povezave|Podčrta in poudari vse povezave.', 'Ustavi animacije|Ustavi gibanje, prehode in videoposnetke.', 'Utišaj zvok|Utiša vse zvočne in video posnetke.', 'Sivine|Prikaže stran v črno-beli.', 'Poudari naslove|Obrobi vse naslove.', 'Filter modre svetlobe|Zmanjša modro svetlobo s toplim odtenkom.', 'Struktura strani|Prikaže naslove in območja; kliknite za skok.', 'Uporabne povezave|Prikaže vse povezave strani na enem seznamu.', 'Poravnava besedila|Poravna besedilo levo, na sredino, desno ali obojestransko.', 'Skrij slike|Skrije moteče slike in ozadja.', 'Nasičenost|Zmanjša ali poveča nasičenost barv.', 'Bralno ravnilo|Prikaže črto ali masko, ki sledi kazalcu.', 'Lupa za besedilo|Prikaže besedilo pod kazalcem v veliki pisavi.', 'Temni način|Prikaže stran v temni temi.', 'Fokus tipkovnice|Jasno poudari element v fokusu.', 'Bralni način|Odpre glavno besedilo v preprostem, berljivem pogledu.', 'Opisi slik|Prikaže nadomestna besedila slik in označi manjkajoča.', 'Branje na glas|Prebere na glas, kar kliknete ali izberete s tipkovnico.'],
  };

  R.nb = {
    title: 'Tilgjengelighetsverktøy', open: 'Åpne tilgjengelighetsverktøyet (ALT + B)', close: 'Lukk', lang: 'Bytt språk', language: 'Språk', hide: 'Skjul verktøyet',
    hidden: 'Tilgjengelighetsverktøyet er skjult. Trykk ALT + B for å åpne det igjen.', search: 'Søk etter et begrep du ikke forstår…', searchLabel: 'Søk etter begreper eller innstillinger',
    profiles: 'Tilgjengelighetsprofiler', content: 'Innholdsjusteringer', colors: 'Fargejusteringer', textColor: 'Tekstfarge', headingColor: 'Overskriftsfarge', bgColor: 'Bakgrunnsfarge', resetColor: 'Tilbakestill farge',
    reset: 'Tilbakestill innstillinger', resetDone: 'Alle innstillinger er tilbakestilt.', tagline: 'Lik tilgang, personlig opplevelse.', report: 'Rapporter et problem', statement: 'Erklæring',
    info: 'informasjon', toggleSec: 'Skjul eller vis seksjonen', back: 'Tilbake', on: 'på', off: 'av', settings: 'Innstillinger', glossaryT: 'Ordliste', wiki: 'Søk på Wikipedia', searching: 'Søker…',
    noResult: 'Ingen treff.', readMore: 'Les mer', headings: 'Overskrifter', landmarks: 'Sideområder', links: 'Lenker på siden', empty: 'Ikke funnet på denne siden.',
    noAlt: 'Ingen beskrivelse', closeReader: 'Lukk lesemodus', srOn: 'Opplesning er på. Klikk på et element for å høre det.',
    size: 'Panelstørrelse', sizes: ['Normal', 'XL', 'Mini'], hideTitle: 'Skjul verktøyet midlertidig', hideQ: 'Hvor lenge vil du skjule verktøyet?', hideOk: 'Bekreft og skjul',
    hideOpts: ['Til fanen lukkes|Vises igjen i en ny økt', 'Skjul for i dag|Vises igjen i morgen', 'Skjul denne uken|Aktiv igjen etter 7 dager', 'Skjul denne måneden|Aktiv igjen etter 30 dager', 'Ikke vis igjen|Forblir skjult til informasjonskapsler slettes'],
    lm: ['Topptekst', 'Navigasjon', 'Hovedinnhold', 'Sidepanel', 'Bunntekst', 'Søk', 'Skjema'], role: ['Lenke', 'Knapp', 'Overskrift', 'Bilde'],
    colorNames: ['Svart', 'Blå', 'Oransje', 'Marineblå', 'Rød', 'Lilla', 'Hvit', 'Grønn', 'Turkis'],
    lw: ['Lett', 'Middels', 'Bred'], lmh: ['Lav', 'Middels', 'Høy'], dys: ['Dysleksivennlig skrift', 'Lettlest skrift'], con: ['Mørk kontrast', 'Lys kontrast', 'Høy kontrast'], align: ['Venstre', 'Midtstilt', 'Høyre', 'Blokkjustert'], guide: ['Linje', 'Maske'],
    p: ['Blindhet', 'Synshemming', 'Motoriske vansker', 'Dysleksi', 'Kognisjon og læring', 'Fargeblindhet', 'ADHD', 'Epilepsisikker', 'Parkinsons sykdom', 'Eldre'],
    f: ['Tekststørrelse|Forstørrer all tekst på siden.', 'Dysleksi|Bruker en dysleksivennlig eller svært lettlest skrift.', 'Tekstavstand|Øker avstanden mellom bokstaver og ord.', 'Linjehøyde|Øker avstanden mellom linjene.', 'Stor markør|Gjør musepekeren stor og godt synlig.', 'Kontrast|Bruker mørk, lys eller høy kontrast.', 'Lenker|Understreker og fremhever alle lenker.', 'Stopp animasjoner|Stopper bevegelse, overganger og videoer.', 'Slå av lyd|Demper all lyd og video.', 'Gråtoner|Viser siden i svart-hvitt.', 'Fremhev overskrifter|Rammer inn alle overskrifter.', 'Blålysfilter|Reduserer blått lys med en varm fargetone.', 'Sidestruktur|Viser overskrifter og områder; klikk for å gå dit.', 'Nyttige lenker|Viser alle lenkene på siden i én liste.', 'Tekstjustering|Justerer tekst til venstre, midten, høyre eller blokk.', 'Skjul bilder|Skjuler forstyrrende bilder og bakgrunner.', 'Metning|Senker eller øker fargemetningen.', 'Leselinjal|Viser en leselinje eller maske som følger pekeren.', 'Tekstlupe|Viser teksten under pekeren med stor skrift.', 'Mørk modus|Viser siden med mørkt tema.', 'Tastaturfokus|Fremhever tydelig elementet i fokus.', 'Lesemodus|Åpner hovedteksten i en ren og lettlest visning.', 'Bildebeskrivelser|Viser alternativ tekst på bilder og markerer manglende.', 'Opplesning|Leser høyt det du klikker på eller fokuserer med tastaturet.'],
  };

  R.fi = {
    title: 'Saavutettavuustyökalu', open: 'Avaa saavutettavuustyökalu (ALT + B)', close: 'Sulje', lang: 'Vaihda kieltä', language: 'Kieli', hide: 'Piilota työkalu',
    hidden: 'Saavutettavuustyökalu piilotettiin. Avaa se uudelleen painamalla ALT + B.', search: 'Hae käsitettä, jota et ymmärrä…', searchLabel: 'Hae käsitteitä tai asetuksia',
    profiles: 'Saavutettavuusprofiilit', content: 'Sisällön säädöt', colors: 'Värisäädöt', textColor: 'Tekstin väri', headingColor: 'Otsikoiden väri', bgColor: 'Taustaväri', resetColor: 'Palauta väri',
    reset: 'Palauta asetukset', resetDone: 'Kaikki asetukset on palautettu.', tagline: 'Tasavertainen pääsy, henkilökohtainen kokemus.', report: 'Ilmoita ongelmasta', statement: 'Seloste',
    info: 'tietoa', toggleSec: 'Pienennä tai laajenna osio', back: 'Takaisin', on: 'päällä', off: 'pois', settings: 'Asetukset', glossaryT: 'Sanasto', wiki: 'Hae Wikipediasta', searching: 'Haetaan…',
    noResult: 'Ei tuloksia.', readMore: 'Lue lisää', headings: 'Otsikot', landmarks: 'Sivun alueet', links: 'Sivun linkit', empty: 'Ei löytynyt tältä sivulta.',
    noAlt: 'Ei kuvausta', closeReader: 'Sulje lukutila', srOn: 'Ääneenluku on päällä. Napsauta elementtiä kuullaksesi sen.',
    size: 'Paneelin koko', sizes: ['Normaali', 'XL', 'Mini'], hideTitle: 'Piilota työkalu väliaikaisesti', hideQ: 'Kuinka pitkäksi aikaa haluat piilottaa työkalun?', hideOk: 'Vahvista ja piilota',
    hideOpts: ['Kunnes välilehti suljetaan|Näkyy taas uudessa istunnossa', 'Piilota tältä päivältä|Näkyy taas huomenna', 'Piilota tältä viikolta|Aktiivinen taas 7 päivän kuluttua', 'Piilota tältä kuukaudelta|Aktiivinen taas 30 päivän kuluttua', 'Älä näytä enää|Pysyy piilossa, kunnes evästeet poistetaan'],
    lm: ['Ylätunniste', 'Navigaatio', 'Pääsisältö', 'Sivupalkki', 'Alatunniste', 'Haku', 'Lomake'], role: ['Linkki', 'Painike', 'Otsikko', 'Kuva'],
    colorNames: ['Musta', 'Sininen', 'Oranssi', 'Laivastonsininen', 'Punainen', 'Violetti', 'Valkoinen', 'Vihreä', 'Turkoosi'],
    lw: ['Kevyt', 'Keskitaso', 'Leveä'], lmh: ['Matala', 'Keskitaso', 'Korkea'], dys: ['Lukihäiriöfontti', 'Selkeä fontti'], con: ['Tumma kontrasti', 'Vaalea kontrasti', 'Korkea kontrasti'], align: ['Vasen', 'Keskitetty', 'Oikea', 'Tasattu'], guide: ['Viiva', 'Maski'],
    p: ['Sokeus', 'Näkövammat', 'Motoriset vaikeudet', 'Lukihäiriö', 'Kognitio ja oppiminen', 'Värisokeus', 'ADHD', 'Epilepsiaturvallinen', 'Parkinsonin tauti', 'Ikääntyneet'],
    f: ['Tekstin koko|Suurentaa kaiken sivun tekstin.', 'Lukihäiriö|Käyttää lukihäiriöystävällistä tai erittäin selkeää fonttia.', 'Tekstin välistys|Kasvattaa kirjainten ja sanojen välejä.', 'Riviväli|Kasvattaa rivien välistä tilaa.', 'Suuri osoitin|Tekee hiiren osoittimesta suuren ja näkyvän.', 'Kontrasti|Käyttää tummaa, vaaleaa tai korkeaa kontrastia.', 'Linkit|Alleviivaa ja korostaa kaikki linkit.', 'Pysäytä animaatiot|Pysäyttää liikkeen, siirtymät ja videot.', 'Mykistä|Mykistää kaiken äänen ja videon.', 'Harmaasävy|Näyttää sivun mustavalkoisena.', 'Korosta otsikot|Kehystää kaikki otsikot.', 'Sinisen valon suodatin|Vähentää sinistä valoa lämpimällä sävyllä.', 'Sivun rakenne|Listaa otsikot ja alueet; siirry niihin napsauttamalla.', 'Hyödylliset linkit|Näyttää sivun kaikki linkit yhdessä listassa.', 'Tekstin tasaus|Tasaa tekstin vasemmalle, keskelle, oikealle tai molempiin reunoihin.', 'Piilota kuvat|Piilottaa häiritsevät kuvat ja taustat.', 'Värikylläisyys|Vähentää tai lisää värikylläisyyttä.', 'Lukuviivain|Näyttää osoitinta seuraavan lukuviivan tai maskin.', 'Tekstisuurennuslasi|Näyttää osoittimen alla olevan tekstin suurena.', 'Tumma tila|Näyttää sivun tummalla teemalla.', 'Näppäimistön kohdistus|Korostaa selvästi kohdistetun elementin.', 'Lukutila|Avaa pääsisällön selkeään, helppolukuiseen näkymään.', 'Kuvien kuvaukset|Näyttää kuvien vaihtoehtoiset tekstit ja merkitsee puuttuvat.', 'Ääneenluku|Lukee ääneen sen, mitä napsautat tai kohdistat näppäimistöllä.'],
  };

  R.ro = {
    title: 'Instrument de accesibilitate', open: 'Deschide instrumentul de accesibilitate (ALT + B)', close: 'Închide', lang: 'Schimbă limba', language: 'Limbă', hide: 'Ascunde instrumentul',
    hidden: 'Instrumentul de accesibilitate a fost ascuns. Apăsați ALT + B pentru a-l redeschide.', search: 'Căutați un termen pe care nu îl înțelegeți…', searchLabel: 'Căutați termeni sau setări',
    profiles: 'Profiluri de accesibilitate', content: 'Ajustări de conținut', colors: 'Ajustări de culoare', textColor: 'Culoarea textului', headingColor: 'Culoarea titlurilor', bgColor: 'Culoarea fundalului', resetColor: 'Resetează culoarea',
    reset: 'Resetează setările', resetDone: 'Toate setările au fost resetate.', tagline: 'Acces egal, experiență personală.', report: 'Raportează o problemă', statement: 'Declarație',
    info: 'informații', toggleSec: 'Restrânge sau extinde secțiunea', back: 'Înapoi', on: 'activat', off: 'dezactivat', settings: 'Setări', glossaryT: 'Glosar', wiki: 'Caută pe Wikipedia', searching: 'Se caută…',
    noResult: 'Niciun rezultat.', readMore: 'Citește mai mult', headings: 'Titluri', landmarks: 'Regiunile paginii', links: 'Linkuri din pagină', empty: 'Nimic găsit pe această pagină.',
    noAlt: 'Fără descriere', closeReader: 'Închide modul de citire', srOn: 'Citirea cu voce tare este activată. Faceți clic pe un element pentru a-l auzi.',
    size: 'Dimensiunea panoului', sizes: ['Normal', 'XL', 'Mini'], hideTitle: 'Ascunde temporar instrumentul', hideQ: 'Pentru cât timp doriți să ascundeți instrumentul?', hideOk: 'Confirmă și ascunde',
    hideOpts: ['Până la închiderea filei|Reapare într-o sesiune nouă', 'Ascunde pentru azi|Reapare mâine', 'Ascunde săptămâna aceasta|Reactivat după 7 zile', 'Ascunde luna aceasta|Reactivat după 30 de zile', 'Nu mai afișa|Rămâne ascuns până la ștergerea cookie-urilor'],
    lm: ['Antet', 'Navigare', 'Conținut principal', 'Bară laterală', 'Subsol', 'Căutare', 'Formular'], role: ['Link', 'Buton', 'Titlu', 'Imagine'],
    colorNames: ['Negru', 'Albastru', 'Portocaliu', 'Bleumarin', 'Roșu', 'Mov', 'Alb', 'Verde', 'Turcoaz'],
    lw: ['Ușor', 'Mediu', 'Larg'], lmh: ['Scăzut', 'Mediu', 'Ridicat'], dys: ['Font pentru dislexie', 'Font lizibil'], con: ['Contrast întunecat', 'Contrast luminos', 'Contrast ridicat'], align: ['Stânga', 'Centru', 'Dreapta', 'Justificat'], guide: ['Linie', 'Mască'],
    p: ['Orbire', 'Deficiențe de vedere', 'Dizabilități motorii', 'Dislexie', 'Cogniție și învățare', 'Daltonism', 'ADHD', 'Sigur pentru epilepsie', 'Boala Parkinson', 'Vârstnici'],
    f: ['Dimensiunea textului|Mărește tot textul din pagină.', 'Dislexie|Folosește un font potrivit pentru dislexie sau foarte lizibil.', 'Spațierea textului|Mărește spațiul dintre litere și cuvinte.', 'Înălțimea rândului|Mărește spațiul dintre rânduri.', 'Cursor mare|Face cursorul mouse-ului mare și vizibil.', 'Contrast|Aplică un contrast întunecat, luminos sau ridicat.', 'Linkuri|Subliniază și evidențiază toate linkurile.', 'Oprește animațiile|Oprește mișcarea, tranzițiile și videoclipurile.', 'Oprește sunetul|Dezactivează sunetul tuturor fișierelor audio și video.', 'Tonuri de gri|Afișează pagina în alb-negru.', 'Evidențiază titlurile|Încadrează toate titlurile.', 'Filtru de lumină albastră|Reduce lumina albastră cu o nuanță caldă.', 'Structura paginii|Listează titlurile și regiunile; clic pentru a ajunge la ele.', 'Linkuri utile|Afișează toate linkurile paginii într-o listă.', 'Alinierea textului|Aliniază textul la stânga, centru, dreapta sau justificat.', 'Ascunde imaginile|Ascunde imaginile și fundalurile care distrag.', 'Saturație|Scade sau crește saturația culorilor.', 'Ghid de citire|Afișează o linie sau o mască ce urmează cursorul.', 'Lupă pentru text|Afișează mărit textul de sub cursor.', 'Mod întunecat|Afișează pagina cu o temă întunecată.', 'Focalizare tastatură|Evidențiază clar elementul focalizat.', 'Mod de citire|Deschide textul principal într-o vizualizare simplă și lizibilă.', 'Descrierea imaginilor|Afișează textele alternative și le marchează pe cele lipsă.', 'Citire cu voce tare|Citește cu voce tare ce selectați cu clic sau tastatura.'],
  };

  R.el = {
    title: 'Εργαλείο προσβασιμότητας', open: 'Άνοιγμα εργαλείου προσβασιμότητας (ALT + B)', close: 'Κλείσιμο', lang: 'Αλλαγή γλώσσας', language: 'Γλώσσα', hide: 'Απόκρυψη εργαλείου',
    hidden: 'Το εργαλείο προσβασιμότητας αποκρύφθηκε. Πατήστε ALT + B για να το ανοίξετε ξανά.', search: 'Αναζητήστε έναν όρο που δεν καταλαβαίνετε…', searchLabel: 'Αναζήτηση όρων ή ρυθμίσεων',
    profiles: 'Προφίλ προσβασιμότητας', content: 'Ρυθμίσεις περιεχομένου', colors: 'Ρυθμίσεις χρωμάτων', textColor: 'Χρώμα κειμένου', headingColor: 'Χρώμα επικεφαλίδων', bgColor: 'Χρώμα φόντου', resetColor: 'Επαναφορά χρώματος',
    reset: 'Επαναφορά ρυθμίσεων', resetDone: 'Όλες οι ρυθμίσεις επανήλθαν.', tagline: 'Ίση πρόσβαση, προσωπική εμπειρία.', report: 'Αναφορά προβλήματος', statement: 'Δήλωση',
    info: 'πληροφορίες', toggleSec: 'Σύμπτυξη ή ανάπτυξη ενότητας', back: 'Πίσω', on: 'ενεργό', off: 'ανενεργό', settings: 'Ρυθμίσεις', glossaryT: 'Γλωσσάριο', wiki: 'Αναζήτηση στη Βικιπαίδεια', searching: 'Αναζήτηση…',
    noResult: 'Δεν βρέθηκαν αποτελέσματα.', readMore: 'Περισσότερα', headings: 'Επικεφαλίδες', landmarks: 'Περιοχές σελίδας', links: 'Σύνδεσμοι σελίδας', empty: 'Δεν βρέθηκε σε αυτή τη σελίδα.',
    noAlt: 'Χωρίς περιγραφή', closeReader: 'Κλείσιμο λειτουργίας ανάγνωσης', srOn: 'Η εκφώνηση είναι ενεργή. Κάντε κλικ σε ένα στοιχείο για να το ακούσετε.',
    size: 'Μέγεθος πλαισίου', sizes: ['Κανονικό', 'XL', 'Μίνι'], hideTitle: 'Προσωρινή απόκρυψη εργαλείου', hideQ: 'Για πόσο καιρό θέλετε να αποκρύψετε το εργαλείο;', hideOk: 'Επιβεβαίωση και απόκρυψη',
    hideOpts: ['Μέχρι να κλείσει η καρτέλα|Εμφανίζεται ξανά σε νέα συνεδρία', 'Απόκρυψη για σήμερα|Εμφανίζεται ξανά αύριο', 'Απόκρυψη για αυτή την εβδομάδα|Ενεργό ξανά μετά από 7 ημέρες', 'Απόκρυψη για αυτόν τον μήνα|Ενεργό ξανά μετά από 30 ημέρες', 'Να μην εμφανιστεί ξανά|Παραμένει κρυφό μέχρι να διαγραφούν τα cookies'],
    lm: ['Κεφαλίδα', 'Πλοήγηση', 'Κύριο περιεχόμενο', 'Πλευρική στήλη', 'Υποσέλιδο', 'Αναζήτηση', 'Φόρμα'], role: ['Σύνδεσμος', 'Κουμπί', 'Επικεφαλίδα', 'Εικόνα'],
    colorNames: ['Μαύρο', 'Μπλε', 'Πορτοκαλί', 'Σκούρο μπλε', 'Κόκκινο', 'Μωβ', 'Λευκό', 'Πράσινο', 'Τιρκουάζ'],
    lw: ['Ελαφρύ', 'Μεσαίο', 'Ευρύ'], lmh: ['Χαμηλό', 'Μεσαίο', 'Υψηλό'], dys: ['Γραμματοσειρά δυσλεξίας', 'Ευανάγνωστη γραμματοσειρά'], con: ['Σκούρα αντίθεση', 'Ανοιχτή αντίθεση', 'Υψηλή αντίθεση'], align: ['Αριστερά', 'Κέντρο', 'Δεξιά', 'Πλήρης'], guide: ['Γραμμή', 'Μάσκα'],
    p: ['Τύφλωση', 'Προβλήματα όρασης', 'Κινητικές δυσκολίες', 'Δυσλεξία', 'Γνωστικές δυσκολίες & μάθηση', 'Αχρωματοψία', 'ΔΕΠΥ', 'Ασφαλές για επιληψία', 'Νόσος Πάρκινσον', 'Ηλικιωμένοι'],
    f: ['Μέγεθος κειμένου|Μεγεθύνει όλο το κείμενο της σελίδας.', 'Δυσλεξία|Χρησιμοποιεί γραμματοσειρά φιλική στη δυσλεξία ή πολύ ευανάγνωστη.', 'Απόσταση κειμένου|Αυξάνει την απόσταση γραμμάτων και λέξεων.', 'Ύψος γραμμής|Αυξάνει την απόσταση μεταξύ των γραμμών.', 'Μεγάλος δείκτης|Κάνει τον δείκτη του ποντικιού μεγάλο και ευδιάκριτο.', 'Αντίθεση|Εφαρμόζει σκούρα, ανοιχτή ή υψηλή αντίθεση.', 'Σύνδεσμοι|Υπογραμμίζει και επισημαίνει όλους τους συνδέσμους.', 'Διακοπή κινήσεων|Σταματά κινήσεις, μεταβάσεις και βίντεο.', 'Σίγαση|Θέτει σε σίγαση όλους τους ήχους και τα βίντεο.', 'Αποχρώσεις του γκρι|Εμφανίζει τη σελίδα ασπρόμαυρη.', 'Επισήμανση επικεφαλίδων|Πλαισιώνει όλες τις επικεφαλίδες.', 'Φίλτρο μπλε φωτός|Μειώνει το μπλε φως με θερμή απόχρωση.', 'Δομή σελίδας|Εμφανίζει επικεφαλίδες και περιοχές· κάντε κλικ για μετάβαση.', 'Χρήσιμοι σύνδεσμοι|Εμφανίζει όλους τους συνδέσμους σε μία λίστα.', 'Στοίχιση κειμένου|Στοιχίζει αριστερά, στο κέντρο, δεξιά ή πλήρως.', 'Απόκρυψη εικόνων|Κρύβει εικόνες και φόντα που αποσπούν.', 'Κορεσμός|Μειώνει ή αυξάνει τον κορεσμό των χρωμάτων.', 'Οδηγός ανάγνωσης|Εμφανίζει γραμμή ή μάσκα που ακολουθεί τον δείκτη.', 'Μεγεθυντής κειμένου|Εμφανίζει μεγάλο το κείμενο κάτω από τον δείκτη.', 'Σκοτεινή λειτουργία|Εμφανίζει τη σελίδα με σκοτεινό θέμα.', 'Εστίαση πληκτρολογίου|Επισημαίνει καθαρά το εστιασμένο στοιχείο.', 'Λειτουργία ανάγνωσης|Ανοίγει το κύριο κείμενο σε καθαρή, ευανάγνωστη προβολή.', 'Περιγραφές εικόνων|Εμφανίζει εναλλακτικά κείμενα και επισημαίνει όσα λείπουν.', 'Εκφώνηση|Διαβάζει δυνατά ό,τι πατάτε ή εστιάζετε με το πληκτρολόγιο.'],
  };

  R.bs = {
    title: 'Alat za pristupačnost', open: 'Otvori alat za pristupačnost (ALT + B)', close: 'Zatvori', lang: 'Promijeni jezik', language: 'Jezik', hide: 'Sakrij alat',
    hidden: 'Alat za pristupačnost je sakriven. Pritisnite ALT + B da ga ponovo otvorite.', search: 'Potražite pojam koji ne razumijete…', searchLabel: 'Pretraži pojmove ili postavke',
    profiles: 'Profili pristupačnosti', content: 'Podešavanja sadržaja', colors: 'Podešavanja boja', textColor: 'Boja teksta', headingColor: 'Boja naslova', bgColor: 'Boja pozadine', resetColor: 'Poništi boju',
    reset: 'Poništi postavke', resetDone: 'Sve postavke su poništene.', tagline: 'Jednak pristup, lično iskustvo.', report: 'Prijavi problem', statement: 'Izjava',
    info: 'informacije', toggleSec: 'Skupi ili proširi odjeljak', back: 'Nazad', on: 'uključeno', off: 'isključeno', settings: 'Postavke', glossaryT: 'Pojmovnik', wiki: 'Pretraži Wikipediju', searching: 'Pretraživanje…',
    noResult: 'Nema rezultata.', readMore: 'Pročitaj više', headings: 'Naslovi', landmarks: 'Područja stranice', links: 'Linkovi na stranici', empty: 'Nije pronađeno na ovoj stranici.',
    noAlt: 'Nema opisa', closeReader: 'Zatvori način čitanja', srOn: 'Čitanje naglas je uključeno. Kliknite element da ga čujete.',
    size: 'Veličina panela', sizes: ['Normalno', 'XL', 'Mini'], hideTitle: 'Privremeno sakrij alat', hideQ: 'Koliko dugo želite sakriti alat?', hideOk: 'Potvrdi i sakrij',
    hideOpts: ['Dok se kartica ne zatvori|Ponovo se prikazuje u novoj sesiji', 'Sakrij za danas|Ponovo se prikazuje sutra', 'Sakrij za ovu sedmicu|Ponovo aktivan nakon 7 dana', 'Sakrij za ovaj mjesec|Ponovo aktivan nakon 30 dana', 'Ne prikazuj više|Ostaje sakriven dok se kolačići ne obrišu'],
    lm: ['Zaglavlje', 'Navigacija', 'Glavni sadržaj', 'Bočna traka', 'Podnožje', 'Pretraga', 'Obrazac'], role: ['Link', 'Dugme', 'Naslov', 'Slika'],
    colorNames: ['Crna', 'Plava', 'Narandžasta', 'Tamnoplava', 'Crvena', 'Ljubičasta', 'Bijela', 'Zelena', 'Tirkizna'],
    lw: ['Blago', 'Srednje', 'Široko'], lmh: ['Nisko', 'Srednje', 'Visoko'], dys: ['Font za disleksiju', 'Čitljiv font'], con: ['Tamni kontrast', 'Svijetli kontrast', 'Visoki kontrast'], align: ['Lijevo', 'Centar', 'Desno', 'Obostrano'], guide: ['Linija', 'Maska'],
    p: ['Sljepoća', 'Oštećenja vida', 'Motorička oštećenja', 'Disleksija', 'Kognicija i učenje', 'Sljepoća za boje', 'ADHD', 'Sigurno za epilepsiju', 'Parkinsonova bolest', 'Starije osobe'],
    f: ['Veličina teksta|Povećava sav tekst na stranici.', 'Disleksija|Koristi font prilagođen disleksiji ili vrlo čitljiv font.', 'Razmak teksta|Povećava razmak između slova i riječi.', 'Visina reda|Povećava razmak između redova.', 'Veliki kursor|Povećava pokazivač miša.', 'Kontrast|Primjenjuje tamni, svijetli ili visoki kontrast.', 'Linkovi|Podvlači i ističe sve linkove.', 'Zaustavi animacije|Zaustavlja pokrete, prijelaze i videozapise.', 'Isključi zvuk|Utišava sve audio i video zapise.', 'Nijanse sive|Prikazuje stranicu crno-bijelo.', 'Istakni naslove|Uokviruje sve naslove.', 'Filter plave svjetlosti|Smanjuje plavu svjetlost toplom nijansom.', 'Struktura stranice|Prikazuje naslove i područja; kliknite za prelazak.', 'Korisni linkovi|Prikazuje sve linkove stranice na jednoj listi.', 'Poravnanje teksta|Poravnava tekst lijevo, centrirano, desno ili obostrano.', 'Sakrij slike|Skriva slike i pozadine koje odvlače pažnju.', 'Zasićenost|Smanjuje ili povećava zasićenost boja.', 'Vodič za čitanje|Prikazuje liniju ili masku koja prati kursor.', 'Lupa za tekst|Prikazuje tekst ispod kursora velikim slovima.', 'Tamni način|Prikazuje stranicu u tamnoj temi.', 'Fokus tastature|Jasno ističe element u fokusu.', 'Način čitanja|Otvara glavni tekst u jednostavnom, čitljivom prikazu.', 'Opisi slika|Prikazuje alternativne tekstove slika i označava one koji nedostaju.', 'Čitanje naglas|Čita naglas ono što kliknete ili odaberete tastaturom.'],
  };

  R.lb = {
    title: 'Accessibilitéitsinstrument', open: 'Accessibilitéitsinstrument opmaachen (ALT + B)', close: 'Zoumaachen', lang: 'Sprooch wiesselen', language: 'Sprooch', hide: 'Instrument verstoppen',
    hidden: 'D’Accessibilitéitsinstrument ass verstoppt. Dréckt ALT + B fir et nees opzemaachen.', search: 'Sicht e Begrëff, deen Dir net versteet…', searchLabel: 'Begrëffer oder Astellunge sichen',
    profiles: 'Accessibilitéitsprofiler', content: 'Inhaltsastellungen', colors: 'Faarfastellungen', textColor: 'Textfaarf', headingColor: 'Iwwerschrëftfaarf', bgColor: 'Hannergrondfaarf', resetColor: 'Faarf zrécksetzen',
    reset: 'Astellungen zrécksetzen', resetDone: 'All Astellunge goufen zréckgesat.', tagline: 'Gläichen Zougang, perséinlech Erfarung.', report: 'Problem mellen', statement: 'Erklärung',
    info: 'Info', toggleSec: 'Rubrik op- oder zouklappen', back: 'Zréck', on: 'un', off: 'aus', settings: 'Astellungen', glossaryT: 'Glossar', wiki: 'Op Wikipedia sichen', searching: 'Gëtt gesicht…',
    noResult: 'Keng Resultater fonnt.', readMore: 'Méi liesen', headings: 'Iwwerschrëften', landmarks: 'Säitebereicher', links: 'Linken op dëser Säit', empty: 'Op dëser Säit net fonnt.',
    noAlt: 'Keng Beschreiwung', closeReader: 'Liesmodus zoumaachen', srOn: 'Virliesen ass un. Klickt op en Element fir et ze héieren.',
    size: 'Panelgréisst', sizes: ['Normal', 'XL', 'Mini'], hideTitle: 'Instrument temporär verstoppen', hideQ: 'Wéi laang wëllt Dir d’Instrument verstoppen?', hideOk: 'Confirméieren a verstoppen',
    hideOpts: ['Bis den Tab zougemaach gëtt|An enger neier Sessioun nees sichtbar', 'Fir haut verstoppen|Muer nees sichtbar', 'Fir dës Woch verstoppen|No 7 Deeg nees aktiv', 'Fir dëse Mount verstoppen|No 30 Deeg nees aktiv', 'Net méi weisen|Bleift verstoppt bis d’Cookien geläscht ginn'],
    lm: ['Kappzeil', 'Navigatioun', 'Haaptinhalt', 'Säiteleescht', 'Fousszeil', 'Sich', 'Formulaire'], role: ['Link', 'Knäppchen', 'Iwwerschrëft', 'Bild'],
    colorNames: ['Schwaarz', 'Blo', 'Orange', 'Marineblo', 'Rout', 'Mof', 'Wäiss', 'Gréng', 'Türkis'],
    lw: ['Liicht', 'Mëttel', 'Breet'], lmh: ['Niddreg', 'Mëttel', 'Héich'], dys: ['Dyslexie-Schrëft', 'Liesbar Schrëft'], con: ['Donkele Kontrast', 'Helle Kontrast', 'Héije Kontrast'], align: ['Lénks', 'Zentréiert', 'Riets', 'Blocksaz'], guide: ['Linn', 'Mask'],
    p: ['Blannheet', 'Sehbehënnerung', 'Motoresch Aschränkung', 'Dyslexie', 'Kognitioun a Léieren', 'Faarweblannheet', 'ADHS', 'Epilepsiesécher', 'Parkinson', 'Eeler Leit'],
    f: ['Textgréisst|Vergréissert all Text op der Säit.', 'Dyslexie|Benotzt eng dyslexiefrëndlech oder ganz liesbar Schrëft.', 'Textofstand|Vergréissert den Ofstand tëscht Buschtawen a Wierder.', 'Zeilenhéicht|Vergréissert den Ofstand tëscht den Zeilen.', 'Grousse Cursor|Mécht de Mauszeiger grouss a gutt ze gesinn.', 'Kontrast|Applizéiert donkelen, hellen oder héije Kontrast.', 'Linken|Ënnerstreicht a markéiert all Linken.', 'Animatiounen stoppen|Stoppt Beweegungen, Iwwergäng a Videoen.', 'Toun aus|Mécht all Audio a Video stomm.', 'Grostufen|Weist d’Säit a Schwaarz-Wäiss.', 'Iwwerschrëfte markéieren|Rummt all Iwwerschrëften an.', 'Blo-Liicht-Filter|Reduzéiert blot Liicht mat engem waarme Faarftoun.', 'Säitestruktur|Lëscht Iwwerschrëften a Beräicher op; klickt fir dohinner ze goen.', 'Nëtzlech Linken|Weist all Linken op der Säit an enger Lëscht.', 'Textausriichtung|Riicht den Text lénks, zentréiert, riets oder am Blocksaz aus.', 'Biller verstoppen|Verstoppt oflenkend Biller an Hannergrënn.', 'Sättegung|Reduzéiert oder erhéicht d’Faarfsättegung.', 'Lieshëllef|Weist eng Lieslinn oder Mask déi dem Zeiger follegt.', 'Textlupp|Weist den Text ënnert dem Zeiger a grousser Schrëft.', 'Donkele Modus|Weist d’Säit mat engem donkelen Design.', 'Tastaturfokus|Markéiert d’fokusséiert Element däitlech.', 'Liesmodus|Mécht den Haapttext an enger kloerer, liesbarer Usiicht op.', 'Billerbeschreiwungen|Weist Alternativtexter op Biller a markéiert déi, déi feelen.', 'Virliesen|Liest vir, wat Dir klickt oder mat der Tastatur fokusséiert.'],
  };

  R.da = {
    title: 'Tilgængelighedsværktøj', open: 'Åbn tilgængelighedsværktøjet (ALT + B)', close: 'Luk', lang: 'Skift sprog', language: 'Sprog', hide: 'Skjul værktøjet',
    hidden: 'Tilgængelighedsværktøjet er skjult. Tryk ALT + B for at åbne det igen.', search: 'Søg efter et begreb, du ikke forstår…', searchLabel: 'Søg efter begreber eller indstillinger',
    profiles: 'Tilgængelighedsprofiler', content: 'Indholdsjusteringer', colors: 'Farvejusteringer', textColor: 'Tekstfarve', headingColor: 'Overskriftsfarve', bgColor: 'Baggrundsfarve', resetColor: 'Nulstil farve',
    reset: 'Nulstil indstillinger', resetDone: 'Alle indstillinger er nulstillet.', tagline: 'Lige adgang, personlig oplevelse.', report: 'Rapportér et problem', statement: 'Erklæring',
    info: 'information', toggleSec: 'Fold sektionen sammen eller ud', back: 'Tilbage', on: 'til', off: 'fra', settings: 'Indstillinger', glossaryT: 'Ordliste', wiki: 'Søg på Wikipedia', searching: 'Søger…',
    noResult: 'Ingen resultater.', readMore: 'Læs mere', headings: 'Overskrifter', landmarks: 'Sideområder', links: 'Links på siden', empty: 'Ikke fundet på denne side.',
    noAlt: 'Ingen beskrivelse', closeReader: 'Luk læsetilstand', srOn: 'Oplæsning er slået til. Klik på et element for at høre det.',
    size: 'Panelstørrelse', sizes: ['Normal', 'XL', 'Mini'], hideTitle: 'Skjul værktøjet midlertidigt', hideQ: 'Hvor længe vil du skjule værktøjet?', hideOk: 'Bekræft og skjul',
    hideOpts: ['Indtil fanen lukkes|Vises igen i en ny session', 'Skjul i dag|Vises igen i morgen', 'Skjul denne uge|Aktiv igen efter 7 dage', 'Skjul denne måned|Aktiv igen efter 30 dage', 'Vis ikke igen|Forbliver skjult, indtil cookies slettes'],
    lm: ['Sidehoved', 'Navigation', 'Hovedindhold', 'Sidepanel', 'Sidefod', 'Søgning', 'Formular'], role: ['Link', 'Knap', 'Overskrift', 'Billede'],
    colorNames: ['Sort', 'Blå', 'Orange', 'Marineblå', 'Rød', 'Lilla', 'Hvid', 'Grøn', 'Turkis'],
    lw: ['Let', 'Mellem', 'Bred'], lmh: ['Lav', 'Mellem', 'Høj'], dys: ['Ordblindeskrift', 'Letlæselig skrift'], con: ['Mørk kontrast', 'Lys kontrast', 'Høj kontrast'], align: ['Venstre', 'Centreret', 'Højre', 'Lige margener'], guide: ['Linje', 'Maske'],
    p: ['Blindhed', 'Synshandicap', 'Motoriske vanskeligheder', 'Ordblindhed', 'Kognition og læring', 'Farveblindhed', 'ADHD', 'Epilepsisikker', 'Parkinsons sygdom', 'Ældre'],
    f: ['Tekststørrelse|Forstørrer al tekst på siden.', 'Ordblindhed|Bruger en ordblindevenlig eller meget letlæselig skrift.', 'Tekstafstand|Øger afstanden mellem bogstaver og ord.', 'Linjehøjde|Øger afstanden mellem linjerne.', 'Stor markør|Gør musemarkøren stor og tydelig.', 'Kontrast|Anvender mørk, lys eller høj kontrast.', 'Links|Understreger og fremhæver alle links.', 'Stop animationer|Stopper bevægelse, overgange og videoer.', 'Slå lyd fra|Slår lyden fra på al lyd og video.', 'Gråtoner|Viser siden i sort-hvid.', 'Fremhæv overskrifter|Indrammer alle overskrifter.', 'Blåt lys-filter|Reducerer blåt lys med en varm farvetone.', 'Sidestruktur|Viser overskrifter og områder; klik for at gå dertil.', 'Nyttige links|Viser alle sidens links i én liste.', 'Tekstjustering|Justerer tekst til venstre, centreret, højre eller lige margener.', 'Skjul billeder|Skjuler distraherende billeder og baggrunde.', 'Mætning|Sænker eller øger farvemætningen.', 'Læselineal|Viser en læselinje eller maske, der følger markøren.', 'Tekstlup|Viser teksten under markøren med stor skrift.', 'Mørk tilstand|Viser siden med mørkt tema.', 'Tastaturfokus|Fremhæver tydeligt elementet i fokus.', 'Læsetilstand|Åbner hovedteksten i en enkel, letlæselig visning.', 'Billedbeskrivelser|Viser alternativ tekst på billeder og markerer manglende.', 'Oplæsning|Læser højt, hvad du klikker på eller fokuserer med tastaturet.'],
  };

  R.es = {
    title: 'Herramienta de accesibilidad', open: 'Abrir la herramienta de accesibilidad (ALT + B)', close: 'Cerrar', lang: 'Cambiar idioma', language: 'Idioma', hide: 'Ocultar la herramienta',
    hidden: 'Herramienta de accesibilidad oculta. Pulse ALT + B para volver a abrirla.', search: 'Busque un término que no entienda…', searchLabel: 'Buscar términos o ajustes',
    profiles: 'Perfiles de accesibilidad', content: 'Ajustes de contenido', colors: 'Ajustes de color', textColor: 'Color del texto', headingColor: 'Color de los títulos', bgColor: 'Color de fondo', resetColor: 'Restablecer color',
    reset: 'Restablecer ajustes', resetDone: 'Se han restablecido todos los ajustes.', tagline: 'Acceso igualitario, experiencia personal.', report: 'Informar de un problema', statement: 'Declaración',
    info: 'información', toggleSec: 'Contraer o expandir la sección', back: 'Atrás', on: 'activado', off: 'desactivado', settings: 'Ajustes', glossaryT: 'Glosario', wiki: 'Buscar en Wikipedia', searching: 'Buscando…',
    noResult: 'No se encontraron resultados.', readMore: 'Leer más', headings: 'Títulos', landmarks: 'Regiones de la página', links: 'Enlaces de esta página', empty: 'No se encontró en esta página.',
    noAlt: 'Sin descripción', closeReader: 'Cerrar modo lectura', srOn: 'Lectura en voz alta activada. Haga clic en un elemento para escucharlo.',
    size: 'Tamaño del panel', sizes: ['Normal', 'XL', 'Mini'], hideTitle: 'Ocultar la herramienta temporalmente', hideQ: '¿Durante cuánto tiempo desea ocultar la herramienta?', hideOk: 'Confirmar y ocultar',
    hideOpts: ['Hasta cerrar la pestaña|Vuelve a aparecer en una nueva sesión', 'Ocultar por hoy|Vuelve a aparecer mañana', 'Ocultar esta semana|Se reactiva en 7 días', 'Ocultar este mes|Se reactiva en 30 días', 'No volver a mostrar|Permanece oculta hasta que se borren las cookies'],
    lm: ['Encabezado', 'Navegación', 'Contenido principal', 'Barra lateral', 'Pie de página', 'Búsqueda', 'Formulario'], role: ['Enlace', 'Botón', 'Título', 'Imagen'],
    colorNames: ['Negro', 'Azul', 'Naranja', 'Azul marino', 'Rojo', 'Morado', 'Blanco', 'Verde', 'Turquesa'],
    lw: ['Ligero', 'Medio', 'Amplio'], lmh: ['Bajo', 'Medio', 'Alto'], dys: ['Fuente para dislexia', 'Fuente legible'], con: ['Contraste oscuro', 'Contraste claro', 'Alto contraste'], align: ['Izquierda', 'Centro', 'Derecha', 'Justificado'], guide: ['Línea', 'Máscara'],
    p: ['Ceguera', 'Discapacidad visual', 'Discapacidad motriz', 'Dislexia', 'Cognición y aprendizaje', 'Daltonismo', 'TDAH', 'Seguro para epilepsia', 'Párkinson', 'Personas mayores'],
    f: ['Tamaño del texto|Amplía todo el texto de la página.', 'Dislexia|Usa una fuente adaptada a la dislexia o muy legible.', 'Espaciado del texto|Aumenta el espacio entre letras y palabras.', 'Altura de línea|Aumenta el espacio entre líneas.', 'Cursor grande|Hace el puntero del ratón grande y visible.', 'Contraste|Aplica contraste oscuro, claro o alto.', 'Enlaces|Subraya y resalta todos los enlaces.', 'Detener animaciones|Detiene movimientos, transiciones y vídeos.', 'Silenciar|Silencia todo el audio y vídeo.', 'Escala de grises|Muestra la página en blanco y negro.', 'Resaltar títulos|Enmarca todos los títulos.', 'Filtro de luz azul|Reduce la luz azul con un tono cálido.', 'Estructura de la página|Muestra títulos y regiones; haga clic para ir a ellos.', 'Enlaces útiles|Muestra todos los enlaces de la página en una lista.', 'Alineación del texto|Alinea el texto a la izquierda, centro, derecha o justificado.', 'Ocultar imágenes|Oculta imágenes y fondos que distraen.', 'Saturación|Reduce o aumenta la saturación de los colores.', 'Guía de lectura|Muestra una línea o máscara que sigue al puntero.', 'Lupa de texto|Muestra en grande el texto bajo el puntero.', 'Modo oscuro|Muestra la página con un tema oscuro.', 'Foco del teclado|Resalta claramente el elemento enfocado.', 'Modo lectura|Abre el texto principal en una vista limpia y legible.', 'Descripción de imágenes|Muestra los textos alternativos y marca los que faltan.', 'Lectura en voz alta|Lee en voz alta lo que pulse o enfoque con el teclado.'],
  };

  R.pt = {
    title: 'Ferramenta de acessibilidade', open: 'Abrir a ferramenta de acessibilidade (ALT + B)', close: 'Fechar', lang: 'Mudar idioma', language: 'Idioma', hide: 'Ocultar a ferramenta',
    hidden: 'Ferramenta de acessibilidade oculta. Prima ALT + B para a abrir novamente.', search: 'Pesquise um termo que não compreende…', searchLabel: 'Pesquisar termos ou definições',
    profiles: 'Perfis de acessibilidade', content: 'Ajustes de conteúdo', colors: 'Ajustes de cor', textColor: 'Cor do texto', headingColor: 'Cor dos títulos', bgColor: 'Cor de fundo', resetColor: 'Repor cor',
    reset: 'Repor definições', resetDone: 'Todas as definições foram repostas.', tagline: 'Acesso igual, experiência pessoal.', report: 'Comunicar um problema', statement: 'Declaração',
    info: 'informações', toggleSec: 'Recolher ou expandir a secção', back: 'Voltar', on: 'ativado', off: 'desativado', settings: 'Definições', glossaryT: 'Glossário', wiki: 'Pesquisar na Wikipédia', searching: 'A pesquisar…',
    noResult: 'Nenhum resultado encontrado.', readMore: 'Ler mais', headings: 'Títulos', landmarks: 'Regiões da página', links: 'Ligações nesta página', empty: 'Não encontrado nesta página.',
    noAlt: 'Sem descrição', closeReader: 'Fechar modo de leitura', srOn: 'Leitura em voz alta ativada. Clique num elemento para o ouvir.',
    size: 'Tamanho do painel', sizes: ['Normal', 'XL', 'Mini'], hideTitle: 'Ocultar a ferramenta temporariamente', hideQ: 'Durante quanto tempo pretende ocultar a ferramenta?', hideOk: 'Confirmar e ocultar',
    hideOpts: ['Até fechar o separador|Volta a aparecer numa nova sessão', 'Ocultar hoje|Volta a aparecer amanhã', 'Ocultar esta semana|Volta a ficar ativa após 7 dias', 'Ocultar este mês|Volta a ficar ativa após 30 dias', 'Não mostrar novamente|Fica oculta até os cookies serem apagados'],
    lm: ['Cabeçalho', 'Navegação', 'Conteúdo principal', 'Barra lateral', 'Rodapé', 'Pesquisa', 'Formulário'], role: ['Ligação', 'Botão', 'Título', 'Imagem'],
    colorNames: ['Preto', 'Azul', 'Laranja', 'Azul-marinho', 'Vermelho', 'Roxo', 'Branco', 'Verde', 'Turquesa'],
    lw: ['Leve', 'Médio', 'Amplo'], lmh: ['Baixo', 'Médio', 'Alto'], dys: ['Fonte para dislexia', 'Fonte legível'], con: ['Contraste escuro', 'Contraste claro', 'Alto contraste'], align: ['Esquerda', 'Centro', 'Direita', 'Justificado'], guide: ['Linha', 'Máscara'],
    p: ['Cegueira', 'Deficiência visual', 'Deficiência motora', 'Dislexia', 'Cognição e aprendizagem', 'Daltonismo', 'PHDA', 'Seguro para epilepsia', 'Doença de Parkinson', 'Idosos'],
    f: ['Tamanho do texto|Aumenta todo o texto da página.', 'Dislexia|Usa um tipo de letra adequado à dislexia ou muito legível.', 'Espaçamento do texto|Aumenta o espaço entre letras e palavras.', 'Altura da linha|Aumenta o espaço entre as linhas.', 'Cursor grande|Torna o ponteiro do rato grande e visível.', 'Contraste|Aplica contraste escuro, claro ou alto.', 'Ligações|Sublinha e destaca todas as ligações.', 'Parar animações|Para movimentos, transições e vídeos.', 'Silenciar|Silencia todo o áudio e vídeo.', 'Escala de cinzentos|Mostra a página a preto e branco.', 'Destacar títulos|Contorna todos os títulos.', 'Filtro de luz azul|Reduz a luz azul com um tom quente.', 'Estrutura da página|Lista títulos e regiões; clique para lá ir.', 'Ligações úteis|Mostra todas as ligações da página numa lista.', 'Alinhamento do texto|Alinha o texto à esquerda, ao centro, à direita ou justificado.', 'Ocultar imagens|Oculta imagens e fundos que distraem.', 'Saturação|Reduz ou aumenta a saturação das cores.', 'Guia de leitura|Mostra uma linha ou máscara que segue o ponteiro.', 'Lupa de texto|Mostra em grande o texto sob o ponteiro.', 'Modo escuro|Mostra a página com um tema escuro.', 'Foco do teclado|Destaca claramente o elemento focado.', 'Modo de leitura|Abre o texto principal numa vista limpa e legível.', 'Descrição de imagens|Mostra os textos alternativos e assinala os que faltam.', 'Leitura em voz alta|Lê em voz alta o que clica ou foca com o teclado.'],
  };

  R.it = {
    title: 'Strumento di accessibilità', open: 'Apri lo strumento di accessibilità (ALT + B)', close: 'Chiudi', lang: 'Cambia lingua', language: 'Lingua', hide: 'Nascondi lo strumento',
    hidden: 'Strumento di accessibilità nascosto. Premi ALT + B per riaprirlo.', search: 'Cerca un termine che non capisci…', searchLabel: 'Cerca termini o impostazioni',
    profiles: 'Profili di accessibilità', content: 'Regolazioni dei contenuti', colors: 'Regolazioni dei colori', textColor: 'Colore del testo', headingColor: 'Colore dei titoli', bgColor: 'Colore di sfondo', resetColor: 'Ripristina colore',
    reset: 'Ripristina impostazioni', resetDone: 'Tutte le impostazioni sono state ripristinate.', tagline: 'Accesso paritario, esperienza personale.', report: 'Segnala un problema', statement: 'Dichiarazione',
    info: 'informazioni', toggleSec: 'Comprimi o espandi la sezione', back: 'Indietro', on: 'attivo', off: 'disattivo', settings: 'Impostazioni', glossaryT: 'Glossario', wiki: 'Cerca su Wikipedia', searching: 'Ricerca…',
    noResult: 'Nessun risultato.', readMore: 'Leggi di più', headings: 'Titoli', landmarks: 'Aree della pagina', links: 'Link in questa pagina', empty: 'Non trovato in questa pagina.',
    noAlt: 'Nessuna descrizione', closeReader: 'Chiudi modalità lettura', srOn: 'Lettura vocale attiva. Fai clic su un elemento per ascoltarlo.',
    size: 'Dimensione del pannello', sizes: ['Normale', 'XL', 'Mini'], hideTitle: 'Nascondi temporaneamente lo strumento', hideQ: 'Per quanto tempo vuoi nascondere lo strumento?', hideOk: 'Conferma e nascondi',
    hideOpts: ['Fino alla chiusura della scheda|Riappare in una nuova sessione', 'Nascondi per oggi|Riappare domani', 'Nascondi per questa settimana|Di nuovo attivo dopo 7 giorni', 'Nascondi per questo mese|Di nuovo attivo dopo 30 giorni', 'Non mostrare più|Resta nascosto finché i cookie non vengono eliminati'],
    lm: ['Intestazione', 'Navigazione', 'Contenuto principale', 'Barra laterale', 'Piè di pagina', 'Ricerca', 'Modulo'], role: ['Link', 'Pulsante', 'Titolo', 'Immagine'],
    colorNames: ['Nero', 'Blu', 'Arancione', 'Blu navy', 'Rosso', 'Viola', 'Bianco', 'Verde', 'Turchese'],
    lw: ['Leggero', 'Medio', 'Ampio'], lmh: ['Basso', 'Medio', 'Alto'], dys: ['Font per dislessia', 'Font leggibile'], con: ['Contrasto scuro', 'Contrasto chiaro', 'Contrasto elevato'], align: ['Sinistra', 'Centro', 'Destra', 'Giustificato'], guide: ['Linea', 'Maschera'],
    p: ['Cecità', 'Disabilità visive', 'Disabilità motorie', 'Dislessia', 'Cognizione e apprendimento', 'Daltonismo', 'ADHD', 'Sicuro per l’epilessia', 'Morbo di Parkinson', 'Anziani'],
    f: ['Dimensione del testo|Ingrandisce tutto il testo della pagina.', 'Dislessia|Usa un font adatto alla dislessia o molto leggibile.', 'Spaziatura del testo|Aumenta lo spazio tra lettere e parole.', 'Altezza della riga|Aumenta lo spazio tra le righe.', 'Cursore grande|Rende il puntatore del mouse grande e visibile.', 'Contrasto|Applica contrasto scuro, chiaro o elevato.', 'Link|Sottolinea ed evidenzia tutti i link.', 'Ferma animazioni|Ferma movimenti, transizioni e video.', 'Disattiva audio|Silenzia tutti gli audio e i video.', 'Scala di grigi|Mostra la pagina in bianco e nero.', 'Evidenzia titoli|Incornicia tutti i titoli.', 'Filtro luce blu|Riduce la luce blu con una tonalità calda.', 'Struttura della pagina|Elenca titoli e aree; fai clic per raggiungerli.', 'Link utili|Mostra tutti i link della pagina in un elenco.', 'Allineamento del testo|Allinea il testo a sinistra, al centro, a destra o giustificato.', 'Nascondi immagini|Nasconde immagini e sfondi che distraggono.', 'Saturazione|Riduce o aumenta la saturazione dei colori.', 'Guida alla lettura|Mostra una linea o una maschera che segue il puntatore.', 'Lente di testo|Mostra in grande il testo sotto il puntatore.', 'Modalità scura|Mostra la pagina con un tema scuro.', 'Focus tastiera|Evidenzia chiaramente l’elemento con il focus.', 'Modalità lettura|Apre il testo principale in una vista pulita e leggibile.', 'Descrizioni immagini|Mostra i testi alternativi e segnala quelli mancanti.', 'Lettura vocale|Legge ad alta voce ciò su cui fai clic o metti il focus.'],
  };

  R.nl = {
    title: 'Toegankelijkheidstool', open: 'Toegankelijkheidstool openen (ALT + B)', close: 'Sluiten', lang: 'Taal wijzigen', language: 'Taal', hide: 'Tool verbergen',
    hidden: 'Toegankelijkheidstool verborgen. Druk op ALT + B om hem weer te openen.', search: 'Zoek een begrip dat u niet begrijpt…', searchLabel: 'Begrippen of instellingen zoeken',
    profiles: 'Toegankelijkheidsprofielen', content: 'Inhoudsaanpassingen', colors: 'Kleuraanpassingen', textColor: 'Tekstkleur', headingColor: 'Kleur van koppen', bgColor: 'Achtergrondkleur', resetColor: 'Kleur herstellen',
    reset: 'Instellingen herstellen', resetDone: 'Alle instellingen zijn hersteld.', tagline: 'Gelijke toegang, persoonlijke ervaring.', report: 'Probleem melden', statement: 'Verklaring',
    info: 'informatie', toggleSec: 'Sectie in- of uitklappen', back: 'Terug', on: 'aan', off: 'uit', settings: 'Instellingen', glossaryT: 'Woordenlijst', wiki: 'Zoeken op Wikipedia', searching: 'Zoeken…',
    noResult: 'Geen resultaten gevonden.', readMore: 'Lees meer', headings: 'Koppen', landmarks: 'Paginagebieden', links: 'Links op deze pagina', empty: 'Niet gevonden op deze pagina.',
    noAlt: 'Geen beschrijving', closeReader: 'Leesmodus sluiten', srOn: 'Voorlezen staat aan. Klik op een element om het te horen.',
    size: 'Paneelgrootte', sizes: ['Normaal', 'XL', 'Mini'], hideTitle: 'Tool tijdelijk verbergen', hideQ: 'Hoe lang wilt u de tool verbergen?', hideOk: 'Bevestigen en verbergen',
    hideOpts: ['Tot het tabblad wordt gesloten|Verschijnt weer in een nieuwe sessie', 'Vandaag verbergen|Verschijnt morgen weer', 'Deze week verbergen|Na 7 dagen weer actief', 'Deze maand verbergen|Na 30 dagen weer actief', 'Niet meer tonen|Blijft verborgen tot cookies worden gewist'],
    lm: ['Koptekst', 'Navigatie', 'Hoofdinhoud', 'Zijbalk', 'Voettekst', 'Zoeken', 'Formulier'], role: ['Link', 'Knop', 'Kop', 'Afbeelding'],
    colorNames: ['Zwart', 'Blauw', 'Oranje', 'Marineblauw', 'Rood', 'Paars', 'Wit', 'Groen', 'Turquoise'],
    lw: ['Licht', 'Gemiddeld', 'Breed'], lmh: ['Laag', 'Gemiddeld', 'Hoog'], dys: ['Dyslexielettertype', 'Leesbaar lettertype'], con: ['Donker contrast', 'Licht contrast', 'Hoog contrast'], align: ['Links', 'Gecentreerd', 'Rechts', 'Uitgevuld'], guide: ['Lijn', 'Masker'],
    p: ['Blindheid', 'Visuele beperking', 'Motorische beperking', 'Dyslexie', 'Cognitie en leren', 'Kleurenblindheid', 'ADHD', 'Epilepsieveilig', 'Ziekte van Parkinson', 'Ouderen'],
    f: ['Tekstgrootte|Vergroot alle tekst op de pagina.', 'Dyslexie|Gebruikt een dyslexievriendelijk of zeer leesbaar lettertype.', 'Tekstafstand|Vergroot de afstand tussen letters en woorden.', 'Regelhoogte|Vergroot de ruimte tussen regels.', 'Grote cursor|Maakt de muisaanwijzer groot en goed zichtbaar.', 'Contrast|Past donker, licht of hoog contrast toe.', 'Links|Onderstreept en markeert alle links.', 'Animaties stoppen|Stopt beweging, overgangen en video’s.', 'Geluid uit|Dempt alle audio en video.', 'Grijstinten|Toont de pagina in zwart-wit.', 'Koppen markeren|Omkadert alle koppen.', 'Blauwlichtfilter|Vermindert blauw licht met een warme tint.', 'Paginastructuur|Toont koppen en gebieden; klik om erheen te gaan.', 'Nuttige links|Toont alle links van de pagina in één lijst.', 'Tekstuitlijning|Lijnt tekst links, gecentreerd, rechts of uitgevuld uit.', 'Afbeeldingen verbergen|Verbergt afleidende afbeeldingen en achtergronden.', 'Verzadiging|Verlaagt of verhoogt de kleurverzadiging.', 'Leeslineaal|Toont een leeslijn of masker dat de aanwijzer volgt.', 'Tekstvergrootglas|Toont de tekst onder de aanwijzer in grote letters.', 'Donkere modus|Toont de pagina met een donker thema.', 'Toetsenbordfocus|Markeert het gefocuste element duidelijk.', 'Leesmodus|Opent de hoofdtekst in een rustige, leesbare weergave.', 'Afbeeldingsbeschrijvingen|Toont alt-teksten op afbeeldingen en markeert ontbrekende.', 'Voorlezen|Leest voor waarop u klikt of wat u met het toetsenbord focust.'],
  };

  R.ja = {
    title: 'アクセシビリティツール', open: 'アクセシビリティツールを開く (ALT + B)', close: '閉じる', lang: '言語を変更', language: '言語', hide: 'ツールを非表示',
    hidden: 'アクセシビリティツールを非表示にしました。ALT + B で再び開けます。', search: 'わからない用語を検索…', searchLabel: '用語や設定を検索',
    profiles: 'アクセシビリティプロファイル', content: 'コンテンツ調整', colors: '色の調整', textColor: '文字色', headingColor: '見出しの色', bgColor: '背景色', resetColor: '色をリセット',
    reset: '設定をリセット', resetDone: 'すべての設定をリセットしました。', tagline: '平等なアクセス、あなただけの体験。', report: '問題を報告', statement: 'アクセシビリティ方針',
    info: '説明', toggleSec: 'セクションを折りたたむ／展開する', back: '戻る', on: 'オン', off: 'オフ', settings: '設定', glossaryT: '用語集', wiki: 'ウィキペディアで検索', searching: '検索中…',
    noResult: '結果が見つかりません。', readMore: '続きを読む', headings: '見出し', landmarks: 'ページの領域', links: 'このページのリンク', empty: 'このページには見つかりません。',
    noAlt: '説明なし', closeReader: '読書モードを閉じる', srOn: '読み上げがオンです。要素をクリックすると読み上げます。',
    size: 'パネルサイズ', sizes: ['標準', 'XL', 'ミニ'], hideTitle: 'ツールを一時的に非表示', hideQ: 'ツールをどのくらいの期間非表示にしますか？', hideOk: '確認して非表示',
    hideOpts: ['タブを閉じるまで|次のセッションで再表示されます', '今日は非表示|明日から再表示されます', '今週は非表示|7日後に再表示されます', '今月は非表示|30日後に再表示されます', '今後表示しない|Cookieを削除するまで非表示のままです'],
    lm: ['ヘッダー', 'ナビゲーション', 'メインコンテンツ', 'サイドバー', 'フッター', '検索', 'フォーム'], role: ['リンク', 'ボタン', '見出し', '画像'],
    colorNames: ['黒', '青', 'オレンジ', '紺', '赤', '紫', '白', '緑', 'シアン'],
    lw: ['小', '中', '大'], lmh: ['低', '中', '高'], dys: ['ディスレクシア用フォント', '読みやすいフォント'], con: ['ダークコントラスト', 'ライトコントラスト', 'ハイコントラスト'], align: ['左揃え', '中央揃え', '右揃え', '両端揃え'], guide: ['ライン', 'マスク'],
    p: ['全盲', '視覚障害', '運動障害', 'ディスレクシア', '認知・学習', '色覚障害', 'ADHD', 'てんかん対策', 'パーキンソン病', '高齢者'],
    f: ['文字サイズ|ページ内のすべての文字を拡大します。', 'ディスレクシア|ディスレクシア向け、または読みやすいフォントを使用します。', '文字間隔|文字と単語の間隔を広げます。', '行の高さ|行と行の間隔を広げます。', '大きなカーソル|マウスポインターを大きく見やすくします。', 'コントラスト|ダーク、ライト、ハイコントラストを適用します。', 'リンク|すべてのリンクに下線を引き強調します。', 'アニメーション停止|動き、トランジション、動画を停止します。', 'ミュート|すべての音声と動画を消音します。', 'グレースケール|ページを白黒で表示します。', '見出しを強調|すべての見出しを枠で囲みます。', 'ブルーライトカット|暖色でブルーライトを軽減します。', 'ページ構造|見出しと領域を一覧表示し、クリックで移動します。', '便利なリンク|ページ内のすべてのリンクを一覧表示します。', '文字揃え|文字を左・中央・右・両端に揃えます。', '画像を非表示|気が散る画像や背景を非表示にします。', '彩度|色の彩度を下げる、または上げます。', '読書ガイド|ポインターに追従するラインやマスクを表示します。', 'テキスト拡大鏡|ポインター下の文字を大きく表示します。', 'ダークモード|ページをダークテーマで表示します。', 'キーボードフォーカス|フォーカス中の要素をはっきり示します。', '読書モード|本文をすっきり読みやすい表示で開きます。', '画像の説明|画像の代替テキストを表示し、ないものを示します。', '読み上げ|クリックやキーボードで選んだ内容を読み上げます。'],
  };

  R.hu = {
    title: 'Akadálymentesítési eszköz', open: 'Akadálymentesítési eszköz megnyitása (ALT + B)', close: 'Bezárás', lang: 'Nyelv módosítása', language: 'Nyelv', hide: 'Eszköz elrejtése',
    hidden: 'Az akadálymentesítési eszköz el van rejtve. Nyomja meg az ALT + B billentyűket az újbóli megnyitáshoz.', search: 'Keressen rá egy fogalomra, amelyet nem ért…', searchLabel: 'Fogalmak vagy beállítások keresése',
    profiles: 'Akadálymentességi profilok', content: 'Tartalombeállítások', colors: 'Színbeállítások', textColor: 'Szövegszín', headingColor: 'Címsorszín', bgColor: 'Háttérszín', resetColor: 'Szín visszaállítása',
    reset: 'Beállítások visszaállítása', resetDone: 'Minden beállítás visszaállítva.', tagline: 'Egyenlő hozzáférés, személyes élmény.', report: 'Probléma jelentése', statement: 'Nyilatkozat',
    info: 'információ', toggleSec: 'Szakasz összecsukása vagy kibontása', back: 'Vissza', on: 'be', off: 'ki', settings: 'Beállítások', glossaryT: 'Szójegyzék', wiki: 'Keresés a Wikipédián', searching: 'Keresés…',
    noResult: 'Nincs találat.', readMore: 'Tovább', headings: 'Címsorok', landmarks: 'Oldalterületek', links: 'Hivatkozások az oldalon', empty: 'Ezen az oldalon nem található.',
    noAlt: 'Nincs leírás', closeReader: 'Olvasó mód bezárása', srOn: 'A felolvasás be van kapcsolva. Kattintson egy elemre a meghallgatásához.',
    size: 'Panelméret', sizes: ['Normál', 'XL', 'Mini'], hideTitle: 'Eszköz ideiglenes elrejtése', hideQ: 'Mennyi időre szeretné elrejteni az eszközt?', hideOk: 'Megerősítés és elrejtés',
    hideOpts: ['A lap bezárásáig|Új munkamenetben újra megjelenik', 'Elrejtés mára|Holnap újra megjelenik', 'Elrejtés erre a hétre|7 nap múlva újra aktív', 'Elrejtés erre a hónapra|30 nap múlva újra aktív', 'Ne jelenjen meg többé|Rejtve marad a sütik törléséig'],
    lm: ['Fejléc', 'Navigáció', 'Fő tartalom', 'Oldalsáv', 'Lábléc', 'Keresés', 'Űrlap'], role: ['Hivatkozás', 'Gomb', 'Címsor', 'Kép'],
    colorNames: ['Fekete', 'Kék', 'Narancs', 'Sötétkék', 'Piros', 'Lila', 'Fehér', 'Zöld', 'Türkiz'],
    lw: ['Enyhe', 'Közepes', 'Széles'], lmh: ['Alacsony', 'Közepes', 'Magas'], dys: ['Diszlexiabarát betűtípus', 'Jól olvasható betűtípus'], con: ['Sötét kontraszt', 'Világos kontraszt', 'Magas kontraszt'], align: ['Balra', 'Középre', 'Jobbra', 'Sorkizárt'], guide: ['Vonal', 'Maszk'],
    p: ['Vakság', 'Látássérülés', 'Mozgáskorlátozottság', 'Diszlexia', 'Kogníció és tanulás', 'Színvakság', 'ADHD', 'Epilepszia-biztos', 'Parkinson-kór', 'Idősek'],
    f: ['Szövegméret|Felnagyítja az oldal összes szövegét.', 'Diszlexia|Diszlexiabarát vagy nagyon jól olvasható betűtípust használ.', 'Szövegtávolság|Növeli a betűk és szavak közötti távolságot.', 'Sormagasság|Növeli a sorok közötti távolságot.', 'Nagy kurzor|Nagy és jól látható egérmutatót használ.', 'Kontraszt|Sötét, világos vagy magas kontrasztot alkalmaz.', 'Hivatkozások|Aláhúzza és kiemeli az összes hivatkozást.', 'Animációk leállítása|Leállítja a mozgást, az átmeneteket és a videókat.', 'Némítás|Elnémítja az összes hangot és videót.', 'Szürkeárnyalat|Fekete-fehérben jeleníti meg az oldalt.', 'Címsorok kiemelése|Keretet rajzol minden címsor köré.', 'Kékfényszűrő|Meleg tónussal csökkenti a kék fényt.', 'Oldalszerkezet|Felsorolja a címsorokat és területeket; kattintással odaugorhat.', 'Hasznos hivatkozások|Egy listában mutatja az oldal összes hivatkozását.', 'Szövegigazítás|Balra, középre, jobbra vagy sorkizártan igazítja a szöveget.', 'Képek elrejtése|Elrejti a figyelemelterelő képeket és háttereket.', 'Telítettség|Csökkenti vagy növeli a színtelítettséget.', 'Olvasási segédvonal|A mutatót követő vonalat vagy maszkot jelenít meg.', 'Szövegnagyító|Nagy betűkkel mutatja a mutató alatti szöveget.', 'Sötét mód|Sötét témával jeleníti meg az oldalt.', 'Billentyűzetfókusz|Jól láthatóan kiemeli a fókuszban lévő elemet.', 'Olvasó mód|Letisztult, jól olvasható nézetben nyitja meg a fő szöveget.', 'Képleírások|Megjeleníti a képek alternatív szövegét, és jelöli a hiányzókat.', 'Felolvasás|Felolvassa, amire kattint vagy amit billentyűzettel kijelöl.'],
  };

  R.sk = {
    title: 'Nástroj prístupnosti', open: 'Otvoriť nástroj prístupnosti (ALT + B)', close: 'Zavrieť', lang: 'Zmeniť jazyk', language: 'Jazyk', hide: 'Skryť nástroj',
    hidden: 'Nástroj prístupnosti je skrytý. Znova ho otvoríte klávesmi ALT + B.', search: 'Vyhľadajte pojem, ktorému nerozumiete…', searchLabel: 'Hľadať pojmy alebo nastavenia',
    profiles: 'Profily prístupnosti', content: 'Úpravy obsahu', colors: 'Úpravy farieb', textColor: 'Farba textu', headingColor: 'Farba nadpisov', bgColor: 'Farba pozadia', resetColor: 'Obnoviť farbu',
    reset: 'Obnoviť nastavenia', resetDone: 'Všetky nastavenia boli obnovené.', tagline: 'Rovnaký prístup, osobný zážitok.', report: 'Nahlásiť problém', statement: 'Vyhlásenie',
    info: 'informácie', toggleSec: 'Zbaliť alebo rozbaliť sekciu', back: 'Späť', on: 'zapnuté', off: 'vypnuté', settings: 'Nastavenia', glossaryT: 'Slovník pojmov', wiki: 'Hľadať na Wikipédii', searching: 'Hľadá sa…',
    noResult: 'Nenašli sa žiadne výsledky.', readMore: 'Čítať ďalej', headings: 'Nadpisy', landmarks: 'Oblasti stránky', links: 'Odkazy na stránke', empty: 'Na tejto stránke sa nenašlo.',
    noAlt: 'Bez popisu', closeReader: 'Zavrieť režim čítania', srOn: 'Predčítanie je zapnuté. Kliknite na prvok a vypočujte si ho.',
    size: 'Veľkosť panela', sizes: ['Normálna', 'XL', 'Mini'], hideTitle: 'Dočasne skryť nástroj', hideQ: 'Na ako dlho chcete nástroj skryť?', hideOk: 'Potvrdiť a skryť',
    hideOpts: ['Kým sa karta nezatvorí|Znova sa zobrazí v novej relácii', 'Skryť na dnes|Zajtra sa znova zobrazí', 'Skryť na tento týždeň|Znova aktívny po 7 dňoch', 'Skryť na tento mesiac|Znova aktívny po 30 dňoch', 'Už nezobrazovať|Zostane skrytý, kým nevymažete súbory cookie'],
    lm: ['Hlavička', 'Navigácia', 'Hlavný obsah', 'Bočný panel', 'Päta', 'Vyhľadávanie', 'Formulár'], role: ['Odkaz', 'Tlačidlo', 'Nadpis', 'Obrázok'],
    colorNames: ['Čierna', 'Modrá', 'Oranžová', 'Námornícka modrá', 'Červená', 'Fialová', 'Biela', 'Zelená', 'Tyrkysová'],
    lw: ['Mierne', 'Stredné', 'Široké'], lmh: ['Nízka', 'Stredná', 'Vysoká'], dys: ['Písmo pre dyslektikov', 'Čitateľné písmo'], con: ['Tmavý kontrast', 'Svetlý kontrast', 'Vysoký kontrast'], align: ['Vľavo', 'Na stred', 'Vpravo', 'Do bloku'], guide: ['Čiara', 'Maska'],
    p: ['Nevidiaci', 'Poruchy zraku', 'Pohybové postihnutie', 'Dyslexia', 'Kognícia a učenie', 'Farbosleposť', 'ADHD', 'Bezpečné pri epilepsii', 'Parkinsonova choroba', 'Seniori'],
    f: ['Veľkosť textu|Zväčší všetok text na stránke.', 'Dyslexia|Použije písmo vhodné pre dyslektikov alebo veľmi čitateľné písmo.', 'Rozostupy textu|Zväčší medzery medzi písmenami a slovami.', 'Výška riadka|Zväčší medzeru medzi riadkami.', 'Veľký kurzor|Zväčší ukazovateľ myši.', 'Kontrast|Použije tmavý, svetlý alebo vysoký kontrast.', 'Odkazy|Podčiarkne a zvýrazní všetky odkazy.', 'Zastaviť animácie|Zastaví pohyb, prechody a videá.', 'Stlmiť zvuk|Stlmí všetky zvuky a videá.', 'Odtiene sivej|Zobrazí stránku čiernobielo.', 'Zvýrazniť nadpisy|Orámuje všetky nadpisy.', 'Filter modrého svetla|Zníži modré svetlo teplým odtieňom.', 'Štruktúra stránky|Zobrazí nadpisy a oblasti; kliknutím na ne prejdete.', 'Užitočné odkazy|Zobrazí všetky odkazy stránky v jednom zozname.', 'Zarovnanie textu|Zarovná text vľavo, na stred, vpravo alebo do bloku.', 'Skryť obrázky|Skryje rušivé obrázky a pozadia.', 'Sýtosť|Zníži alebo zvýši sýtosť farieb.', 'Čítacie pravítko|Zobrazí čiaru alebo masku, ktorá sleduje kurzor.', 'Textová lupa|Zobrazí text pod kurzorom veľkým písmom.', 'Tmavý režim|Zobrazí stránku v tmavom motíve.', 'Fokus klávesnice|Výrazne zvýrazní prvok s fokusom.', 'Režim čítania|Otvorí hlavný text v čistom, čitateľnom zobrazení.', 'Popisy obrázkov|Zobrazí alternatívne texty a označí chýbajúce.', 'Predčítanie|Prečíta nahlas, na čo kliknete alebo čo vyberiete klávesnicou.'],
  };

  R.sv = {
    title: 'Tillgänglighetsverktyg', open: 'Öppna tillgänglighetsverktyget (ALT + B)', close: 'Stäng', lang: 'Byt språk', language: 'Språk', hide: 'Dölj verktyget',
    hidden: 'Tillgänglighetsverktyget är dolt. Tryck ALT + B för att öppna det igen.', search: 'Sök efter ett begrepp du inte förstår…', searchLabel: 'Sök begrepp eller inställningar',
    profiles: 'Tillgänglighetsprofiler', content: 'Innehållsjusteringar', colors: 'Färgjusteringar', textColor: 'Textfärg', headingColor: 'Rubrikfärg', bgColor: 'Bakgrundsfärg', resetColor: 'Återställ färg',
    reset: 'Återställ inställningar', resetDone: 'Alla inställningar har återställts.', tagline: 'Lika tillgång, personlig upplevelse.', report: 'Rapportera ett problem', statement: 'Redogörelse',
    info: 'information', toggleSec: 'Fäll ihop eller ut avsnittet', back: 'Tillbaka', on: 'på', off: 'av', settings: 'Inställningar', glossaryT: 'Ordlista', wiki: 'Sök på Wikipedia', searching: 'Söker…',
    noResult: 'Inga resultat hittades.', readMore: 'Läs mer', headings: 'Rubriker', landmarks: 'Sidområden', links: 'Länkar på sidan', empty: 'Hittades inte på den här sidan.',
    noAlt: 'Ingen beskrivning', closeReader: 'Stäng läsläge', srOn: 'Uppläsning är på. Klicka på ett element för att höra det.',
    size: 'Panelstorlek', sizes: ['Normal', 'XL', 'Mini'], hideTitle: 'Dölj verktyget tillfälligt', hideQ: 'Hur länge vill du dölja verktyget?', hideOk: 'Bekräfta och dölj',
    hideOpts: ['Tills fliken stängs|Visas igen i en ny session', 'Dölj i dag|Visas igen i morgon', 'Dölj den här veckan|Aktivt igen efter 7 dagar', 'Dölj den här månaden|Aktivt igen efter 30 dagar', 'Visa inte igen|Förblir dolt tills kakorna rensas'],
    lm: ['Sidhuvud', 'Navigering', 'Huvudinnehåll', 'Sidofält', 'Sidfot', 'Sök', 'Formulär'], role: ['Länk', 'Knapp', 'Rubrik', 'Bild'],
    colorNames: ['Svart', 'Blå', 'Orange', 'Marinblå', 'Röd', 'Lila', 'Vit', 'Grön', 'Turkos'],
    lw: ['Lätt', 'Medel', 'Bred'], lmh: ['Låg', 'Medel', 'Hög'], dys: ['Dyslexivänligt typsnitt', 'Lättläst typsnitt'], con: ['Mörk kontrast', 'Ljus kontrast', 'Hög kontrast'], align: ['Vänster', 'Centrerad', 'Höger', 'Marginaljusterad'], guide: ['Linje', 'Mask'],
    p: ['Blindhet', 'Synnedsättning', 'Motorisk funktionsnedsättning', 'Dyslexi', 'Kognition och lärande', 'Färgblindhet', 'ADHD', 'Epilepsisäker', 'Parkinsons sjukdom', 'Äldre'],
    f: ['Textstorlek|Förstorar all text på sidan.', 'Dyslexi|Använder ett dyslexivänligt eller mycket lättläst typsnitt.', 'Textavstånd|Ökar avståndet mellan bokstäver och ord.', 'Radhöjd|Ökar avståndet mellan raderna.', 'Stor muspekare|Gör muspekaren stor och tydlig.', 'Kontrast|Använder mörk, ljus eller hög kontrast.', 'Länkar|Stryker under och markerar alla länkar.', 'Stoppa animationer|Stoppar rörelser, övergångar och videor.', 'Stäng av ljud|Tystar allt ljud och all video.', 'Gråskala|Visar sidan i svartvitt.', 'Markera rubriker|Ramar in alla rubriker.', 'Blåljusfilter|Minskar blått ljus med en varm ton.', 'Sidstruktur|Listar rubriker och områden; klicka för att gå dit.', 'Användbara länkar|Visar alla länkar på sidan i en lista.', 'Textjustering|Justerar text till vänster, centrerat, höger eller marginaljusterat.', 'Dölj bilder|Döljer störande bilder och bakgrunder.', 'Mättnad|Minskar eller ökar färgmättnaden.', 'Läslinjal|Visar en läslinje eller mask som följer pekaren.', 'Textförstoring|Visar texten under pekaren i stor stil.', 'Mörkt läge|Visar sidan med mörkt tema.', 'Tangentbordsfokus|Markerar tydligt elementet i fokus.', 'Läsläge|Öppnar huvudtexten i en ren och lättläst vy.', 'Bildbeskrivningar|Visar alternativtexter på bilder och markerar saknade.', 'Uppläsning|Läser upp det du klickar på eller fokuserar med tangentbordet.'],
  };

  R.sw = {
    title: 'Zana ya Ufikivu', open: 'Fungua zana ya ufikivu (ALT + B)', close: 'Funga', lang: 'Badilisha lugha', language: 'Lugha', hide: 'Ficha zana',
    hidden: 'Zana ya ufikivu imefichwa. Bonyeza ALT + B kuifungua tena.', search: 'Tafuta neno usilolielewa…', searchLabel: 'Tafuta maneno au mipangilio',
    profiles: 'Wasifu wa Ufikivu', content: 'Marekebisho ya Maudhui', colors: 'Marekebisho ya Rangi', textColor: 'Rangi ya Maandishi', headingColor: 'Rangi ya Vichwa', bgColor: 'Rangi ya Mandharinyuma', resetColor: 'Rejesha rangi',
    reset: 'Rejesha Mipangilio', resetDone: 'Mipangilio yote imerejeshwa.', tagline: 'Ufikiaji sawa, uzoefu binafsi.', report: 'Ripoti Tatizo', statement: 'Taarifa',
    info: 'maelezo', toggleSec: 'Kunja au panua sehemu', back: 'Rudi', on: 'imewashwa', off: 'imezimwa', settings: 'Mipangilio', glossaryT: 'Faharasa', wiki: 'Tafuta kwenye Wikipedia', searching: 'Inatafuta…',
    noResult: 'Hakuna matokeo.', readMore: 'Soma zaidi', headings: 'Vichwa', landmarks: 'Maeneo ya ukurasa', links: 'Viungo kwenye ukurasa huu', empty: 'Haikupatikana kwenye ukurasa huu.',
    noAlt: 'Hakuna maelezo', closeReader: 'Funga hali ya kusoma', srOn: 'Usomaji kwa sauti umewashwa. Bofya kipengele ili ukisikie.',
    size: 'Ukubwa wa paneli', sizes: ['Kawaida', 'XL', 'Ndogo'], hideTitle: 'Ficha Zana kwa Muda', hideQ: 'Ungependa kuficha zana kwa muda gani?', hideOk: 'Thibitisha na Ficha',
    hideOpts: ['Hadi kichupo kifungwe|Itaonekana tena katika kipindi kipya', 'Ficha kwa leo|Itaonekana tena kesho', 'Ficha kwa wiki hii|Itarudi baada ya siku 7', 'Ficha kwa mwezi huu|Itarudi baada ya siku 30', 'Usionyeshe tena|Itabaki imefichwa hadi vidakuzi vifutwe'],
    lm: ['Kichwa cha ukurasa', 'Urambazaji', 'Maudhui makuu', 'Upau wa pembeni', 'Sehemu ya chini', 'Utafutaji', 'Fomu'], role: ['Kiungo', 'Kitufe', 'Kichwa', 'Picha'],
    colorNames: ['Nyeusi', 'Bluu', 'Machungwa', 'Bluu iliyokolea', 'Nyekundu', 'Zambarau', 'Nyeupe', 'Kijani', 'Samawati'],
    lw: ['Kidogo', 'Wastani', 'Pana'], lmh: ['Chini', 'Wastani', 'Juu'], dys: ['Fonti ya disleksia', 'Fonti inayosomeka'], con: ['Utofautishaji mweusi', 'Utofautishaji mwepesi', 'Utofautishaji wa juu'], align: ['Kushoto', 'Katikati', 'Kulia', 'Pande zote'], guide: ['Mstari', 'Kinyago'],
    p: ['Upofu', 'Matatizo ya kuona', 'Ulemavu wa viungo', 'Disleksia', 'Utambuzi na kujifunza', 'Upofu wa rangi', 'ADHD', 'Salama kwa kifafa', 'Ugonjwa wa Parkinson', 'Wazee'],
    f: ['Ukubwa wa maandishi|Hukuza maandishi yote kwenye ukurasa.', 'Disleksia|Hutumia fonti rafiki kwa disleksia au inayosomeka sana.', 'Nafasi ya maandishi|Huongeza nafasi kati ya herufi na maneno.', 'Urefu wa mstari|Huongeza nafasi kati ya mistari.', 'Kishale kikubwa|Hufanya kishale cha kipanya kuwa kikubwa na kuonekana.', 'Utofautishaji|Hutumia utofautishaji mweusi, mwepesi au wa juu.', 'Viungo|Hupigia mstari na kuangazia viungo vyote.', 'Simamisha uhuishaji|Husimamisha mwendo, mipito na video.', 'Zima sauti|Huzima sauti ya sauti na video zote.', 'Kijivu|Huonyesha ukurasa kwa rangi nyeusi na nyeupe.', 'Angazia vichwa|Huweka fremu kuzunguka vichwa vyote.', 'Kichujio cha mwanga wa bluu|Hupunguza mwanga wa bluu kwa rangi ya joto.', 'Muundo wa ukurasa|Huorodhesha vichwa na maeneo; bofya kwenda huko.', 'Viungo muhimu|Huonyesha viungo vyote vya ukurasa katika orodha moja.', 'Mpangilio wa maandishi|Hupanga maandishi kushoto, katikati, kulia au pande zote.', 'Ficha picha|Huficha picha na mandharinyuma zinazovuruga.', 'Ukolezaji|Hupunguza au kuongeza ukolezaji wa rangi.', 'Mwongozo wa kusoma|Huonyesha mstari au kinyago kinachofuata kishale.', 'Kikuza maandishi|Huonyesha kwa herufi kubwa maandishi yaliyo chini ya kishale.', 'Hali ya giza|Huonyesha ukurasa kwa mandhari meusi.', 'Lengo la kibodi|Huangazia wazi kipengele kilicholengwa.', 'Hali ya kusoma|Hufungua maandishi makuu katika mwonekano safi unaosomeka.', 'Maelezo ya picha|Huonyesha maandishi mbadala ya picha na kuweka alama zinazokosekana.', 'Kusoma kwa sauti|Husoma kwa sauti unachobofya au kulenga kwa kibodi.'],
  };

  R.uk = {
    title: 'Інструмент доступності', open: 'Відкрити інструмент доступності (ALT + B)', close: 'Закрити', lang: 'Змінити мову', language: 'Мова', hide: 'Приховати інструмент',
    hidden: 'Інструмент доступності приховано. Натисніть ALT + B, щоб відкрити його знову.', search: 'Знайдіть незрозумілий термін…', searchLabel: 'Пошук термінів або налаштувань',
    profiles: 'Профілі доступності', content: 'Налаштування вмісту', colors: 'Налаштування кольорів', textColor: 'Колір тексту', headingColor: 'Колір заголовків', bgColor: 'Колір тла', resetColor: 'Скинути колір',
    reset: 'Скинути налаштування', resetDone: 'Усі налаштування скинуто.', tagline: 'Рівний доступ, особистий досвід.', report: 'Повідомити про проблему', statement: 'Заява',
    info: 'інформація', toggleSec: 'Згорнути або розгорнути розділ', back: 'Назад', on: 'увімк.', off: 'вимк.', settings: 'Налаштування', glossaryT: 'Глосарій', wiki: 'Шукати у Вікіпедії', searching: 'Пошук…',
    noResult: 'Нічого не знайдено.', readMore: 'Читати далі', headings: 'Заголовки', landmarks: 'Області сторінки', links: 'Посилання на сторінці', empty: 'На цій сторінці не знайдено.',
    noAlt: 'Немає опису', closeReader: 'Закрити режим читання', srOn: 'Озвучення увімкнено. Натисніть на елемент, щоб почути його.',
    size: 'Розмір панелі', sizes: ['Звичайний', 'XL', 'Міні'], hideTitle: 'Тимчасово приховати інструмент', hideQ: 'На який час приховати інструмент?', hideOk: 'Підтвердити й приховати',
    hideOpts: ['До закриття вкладки|З’явиться знову в новому сеансі', 'Приховати на сьогодні|З’явиться знову завтра', 'Приховати на тиждень|Знову активний через 7 днів', 'Приховати на місяць|Знову активний через 30 днів', 'Більше не показувати|Залишиться прихованим до видалення файлів cookie'],
    lm: ['Шапка', 'Навігація', 'Основний вміст', 'Бічна панель', 'Підвал', 'Пошук', 'Форма'], role: ['Посилання', 'Кнопка', 'Заголовок', 'Зображення'],
    colorNames: ['Чорний', 'Синій', 'Помаранчевий', 'Темно-синій', 'Червоний', 'Фіолетовий', 'Білий', 'Зелений', 'Бірюзовий'],
    lw: ['Невеликий', 'Середній', 'Широкий'], lmh: ['Низький', 'Середній', 'Високий'], dys: ['Шрифт для дислексії', 'Розбірливий шрифт'], con: ['Темний контраст', 'Світлий контраст', 'Високий контраст'], align: ['Ліворуч', 'По центру', 'Праворуч', 'По ширині'], guide: ['Лінія', 'Маска'],
    p: ['Сліпота', 'Порушення зору', 'Рухові порушення', 'Дислексія', 'Когнітивні порушення та навчання', 'Дальтонізм', 'СДУГ', 'Безпечно для епілепсії', 'Хвороба Паркінсона', 'Літні люди'],
    f: ['Розмір тексту|Збільшує весь текст на сторінці.', 'Дислексія|Використовує шрифт для дислексії або особливо розбірливий шрифт.', 'Інтервал тексту|Збільшує відстань між літерами та словами.', 'Висота рядка|Збільшує відстань між рядками.', 'Великий курсор|Робить вказівник миші великим і помітним.', 'Контраст|Застосовує темний, світлий або високий контраст.', 'Посилання|Підкреслює та виділяє всі посилання.', 'Зупинити анімацію|Зупиняє рух, переходи та відео.', 'Вимкнути звук|Вимикає звук усіх аудіо та відео.', 'Відтінки сірого|Показує сторінку чорно-білою.', 'Виділити заголовки|Обводить рамкою всі заголовки.', 'Фільтр синього світла|Зменшує синє світло теплим відтінком.', 'Структура сторінки|Показує заголовки та області; натисніть, щоб перейти.', 'Корисні посилання|Показує всі посилання сторінки одним списком.', 'Вирівнювання тексту|Вирівнює текст ліворуч, по центру, праворуч або по ширині.', 'Приховати зображення|Приховує відволікаючі зображення та фони.', 'Насиченість|Зменшує або збільшує насиченість кольорів.', 'Лінійка для читання|Показує лінію або маску, що слідує за вказівником.', 'Лупа для тексту|Показує текст під вказівником великим шрифтом.', 'Темний режим|Показує сторінку в темній темі.', 'Фокус клавіатури|Чітко виділяє елемент у фокусі.', 'Режим читання|Відкриває основний текст у простому та зручному вигляді.', 'Описи зображень|Показує альтернативний текст зображень і позначає відсутній.', 'Озвучення|Читає вголос те, що ви натискаєте або вибираєте клавіатурою.'],
  };

  R.ga = {
    title: 'Uirlis Inrochtaineachta', open: 'Oscail an uirlis inrochtaineachta (ALT + B)', close: 'Dún', lang: 'Athraigh an teanga', language: 'Teanga', hide: 'Folaigh an uirlis',
    hidden: 'Tá an uirlis inrochtaineachta folaithe. Brúigh ALT + B chun í a oscailt arís.', search: 'Cuardaigh téarma nach dtuigeann tú…', searchLabel: 'Cuardaigh téarmaí nó socruithe',
    profiles: 'Próifílí Inrochtaineachta', content: 'Coigeartuithe Ábhair', colors: 'Coigeartuithe Datha', textColor: 'Dath an Téacs', headingColor: 'Dath na gCeannteideal', bgColor: 'Dath an Chúlra', resetColor: 'Athshocraigh an dath',
    reset: 'Athshocraigh na Socruithe', resetDone: 'Athshocraíodh na socruithe go léir.', tagline: 'Rochtain chomhionann, taithí phearsanta.', report: 'Tuairiscigh Fadhb', statement: 'Ráiteas',
    info: 'eolas', toggleSec: 'Laghdaigh nó leathnaigh an chuid', back: 'Siar', on: 'ar siúl', off: 'múchta', settings: 'Socruithe', glossaryT: 'Gluais', wiki: 'Cuardaigh ar Vicipéid', searching: 'Ag cuardach…',
    noResult: 'Níor aimsíodh torthaí.', readMore: 'Léigh tuilleadh', headings: 'Ceannteidil', landmarks: 'Réigiúin an leathanaigh', links: 'Naisc ar an leathanach seo', empty: 'Níor aimsíodh ar an leathanach seo.',
    noAlt: 'Gan cur síos', closeReader: 'Dún an mód léitheoireachta', srOn: 'Tá léamh os ard ar siúl. Cliceáil ar eilimint chun í a chloisteáil.',
    size: 'Méid an phainéil', sizes: ['Gnáth', 'XL', 'Mion'], hideTitle: 'Folaigh an Uirlis go Sealadach', hideQ: 'Cá fhad ar mhaith leat an uirlis a fholú?', hideOk: 'Deimhnigh agus Folaigh',
    hideOpts: ['Go ndúnfar an cluaisín|Feicfear arís í i seisiún nua', 'Folaigh don lá inniu|Feicfear arís í amárach', 'Folaigh don tseachtain seo|Gníomhach arís tar éis 7 lá', 'Folaigh don mhí seo|Gníomhach arís tar éis 30 lá', 'Ná taispeáin arís|Fanfaidh sí folaithe go scriosfar na fianáin'],
    lm: ['Ceanntásc', 'Nascleanúint', 'Príomhábhar', 'Taobhbharra', 'Buntásc', 'Cuardach', 'Foirm'], role: ['Nasc', 'Cnaipe', 'Ceannteideal', 'Íomhá'],
    colorNames: ['Dubh', 'Gorm', 'Oráiste', 'Dúghorm', 'Dearg', 'Corcra', 'Bán', 'Glas', 'Turcaid'],
    lw: ['Éadrom', 'Meánach', 'Leathan'], lmh: ['Íseal', 'Meánach', 'Ard'], dys: ['Cló disléicse', 'Cló inléite'], con: ['Codarsnacht dhorcha', 'Codarsnacht éadrom', 'Ardchodarsnacht'], align: ['Clé', 'Lár', 'Deas', 'Comhfhadaithe'], guide: ['Líne', 'Masc'],
    p: ['Daille', 'Lagú radhairc', 'Míchumas gluaiseachta', 'Disléicse', 'Cognaíocht agus foghlaim', 'Dathdhaille', 'ADHD', 'Sábháilte don titimeas', 'Galar Parkinson', 'Daoine scothaosta'],
    f: ['Méid an téacs|Méadaíonn sé an téacs ar fad ar an leathanach.', 'Disléicse|Úsáideann sé cló atá oiriúnach don disléicse nó an-inléite.', 'Spásáil téacs|Méadaíonn sé an spás idir litreacha agus focail.', 'Airde líne|Méadaíonn sé an spás idir línte.', 'Cúrsóir mór|Déanann sé pointeoir na luiche mór agus soiléir.', 'Codarsnacht|Cuireann sé codarsnacht dhorcha, éadrom nó ard i bhfeidhm.', 'Naisc|Cuireann sé líne faoi gach nasc agus aibhsíonn sé iad.', 'Stop beochan|Stopann sé gluaiseacht, trasdulta agus físeáin.', 'Múch fuaim|Balbhaíonn sé gach fuaim agus físeán.', 'Liathscála|Taispeánann sé an leathanach i ndubh agus bán.', 'Aibhsigh ceannteidil|Cuireann sé fráma timpeall gach ceannteidil.', 'Scagaire solais ghoirm|Laghdaíonn sé solas gorm le dath te.', 'Struchtúr an leathanaigh|Liostaíonn sé ceannteidil agus réigiúin; cliceáil chun dul ann.', 'Naisc úsáideacha|Taispeánann sé gach nasc ar an leathanach i liosta amháin.', 'Ailíniú téacs|Ailíníonn sé téacs ar chlé, sa lár, ar dheis nó comhfhadaithe.', 'Folaigh íomhánna|Folaíonn sé íomhánna agus cúlraí a tharraingíonn aird.', 'Sáithiú|Laghdaíonn nó méadaíonn sé sáithiú na ndathanna.', 'Treoir léitheoireachta|Taispeánann sé líne nó masc a leanann an pointeoir.', 'Formhéadaitheoir téacs|Taispeánann sé an téacs faoin bpointeoir i gcló mór.', 'Mód dorcha|Taispeánann sé an leathanach le téama dorcha.', 'Fócas méarchláir|Aibhsíonn sé go soiléir an eilimint atá i bhfócas.', 'Mód léitheoireachta|Osclaíonn sé an príomhthéacs in amharc glan inléite.', 'Cur síos ar íomhánna|Taispeánann sé téacs malartach ar íomhánna agus marcálann sé na cinn atá in easnamh.', 'Léamh os ard|Léann sé os ard an rud a chliceálann tú nó a dhíríonn tú air.'],
  };

  R.sr = {
    title: 'Alat za pristupačnost', open: 'Otvori alat za pristupačnost (ALT + B)', close: 'Zatvori', lang: 'Promeni jezik', language: 'Jezik', hide: 'Sakrij alat',
    hidden: 'Alat za pristupačnost je sakriven. Pritisnite ALT + B da ga ponovo otvorite.', search: 'Potražite pojam koji ne razumete…', searchLabel: 'Pretraži pojmove ili podešavanja',
    profiles: 'Profili pristupačnosti', content: 'Podešavanja sadržaja', colors: 'Podešavanja boja', textColor: 'Boja teksta', headingColor: 'Boja naslova', bgColor: 'Boja pozadine', resetColor: 'Poništi boju',
    reset: 'Poništi podešavanja', resetDone: 'Sva podešavanja su poništena.', tagline: 'Jednak pristup, lično iskustvo.', report: 'Prijavi problem', statement: 'Izjava',
    info: 'informacije', toggleSec: 'Skupi ili proširi odeljak', back: 'Nazad', on: 'uključeno', off: 'isključeno', settings: 'Podešavanja', glossaryT: 'Pojmovnik', wiki: 'Pretraži Vikipediju', searching: 'Pretraga…',
    noResult: 'Nema rezultata.', readMore: 'Pročitaj više', headings: 'Naslovi', landmarks: 'Oblasti stranice', links: 'Linkovi na stranici', empty: 'Nije pronađeno na ovoj stranici.',
    noAlt: 'Nema opisa', closeReader: 'Zatvori režim čitanja', srOn: 'Čitanje naglas je uključeno. Kliknite na element da ga čujete.',
    size: 'Veličina panela', sizes: ['Normalno', 'XL', 'Mini'], hideTitle: 'Privremeno sakrij alat', hideQ: 'Koliko dugo želite da sakrijete alat?', hideOk: 'Potvrdi i sakrij',
    hideOpts: ['Dok se kartica ne zatvori|Ponovo se prikazuje u novoj sesiji', 'Sakrij za danas|Ponovo se prikazuje sutra', 'Sakrij za ovu nedelju|Ponovo aktivan posle 7 dana', 'Sakrij za ovaj mesec|Ponovo aktivan posle 30 dana', 'Ne prikazuj više|Ostaje sakriven dok se kolačići ne obrišu'],
    lm: ['Zaglavlje', 'Navigacija', 'Glavni sadržaj', 'Bočna traka', 'Podnožje', 'Pretraga', 'Obrazac'], role: ['Link', 'Dugme', 'Naslov', 'Slika'],
    colorNames: ['Crna', 'Plava', 'Narandžasta', 'Teget', 'Crvena', 'Ljubičasta', 'Bela', 'Zelena', 'Tirkizna'],
    lw: ['Blago', 'Srednje', 'Široko'], lmh: ['Nisko', 'Srednje', 'Visoko'], dys: ['Font za disleksiju', 'Čitljiv font'], con: ['Tamni kontrast', 'Svetli kontrast', 'Visok kontrast'], align: ['Levo', 'Centrirano', 'Desno', 'Obostrano'], guide: ['Linija', 'Maska'],
    p: ['Slepoća', 'Oštećenja vida', 'Motorička oštećenja', 'Disleksija', 'Kognicija i učenje', 'Daltonizam', 'ADHD', 'Bezbedno za epilepsiju', 'Parkinsonova bolest', 'Starije osobe'],
    f: ['Veličina teksta|Povećava sav tekst na stranici.', 'Disleksija|Koristi font prilagođen disleksiji ili veoma čitljiv font.', 'Razmak teksta|Povećava razmak između slova i reči.', 'Visina reda|Povećava razmak između redova.', 'Veliki kursor|Povećava pokazivač miša.', 'Kontrast|Primenjuje tamni, svetli ili visok kontrast.', 'Linkovi|Podvlači i ističe sve linkove.', 'Zaustavi animacije|Zaustavlja pokrete, prelaze i video zapise.', 'Isključi zvuk|Utišava sve audio i video zapise.', 'Nijanse sive|Prikazuje stranicu crno-belo.', 'Istakni naslove|Uokviruje sve naslove.', 'Filter plave svetlosti|Smanjuje plavu svetlost toplom nijansom.', 'Struktura stranice|Prikazuje naslove i oblasti; kliknite da pređete na njih.', 'Korisni linkovi|Prikazuje sve linkove stranice na jednoj listi.', 'Poravnanje teksta|Poravnava tekst levo, centrirano, desno ili obostrano.', 'Sakrij slike|Skriva slike i pozadine koje odvlače pažnju.', 'Zasićenost|Smanjuje ili povećava zasićenost boja.', 'Vodič za čitanje|Prikazuje liniju ili masku koja prati kursor.', 'Lupa za tekst|Prikazuje tekst ispod kursora krupnim slovima.', 'Tamni režim|Prikazuje stranicu u tamnoj temi.', 'Fokus tastature|Jasno ističe element u fokusu.', 'Režim čitanja|Otvara glavni tekst u jednostavnom, čitljivom prikazu.', 'Opisi slika|Prikazuje alternativne tekstove slika i označava one koji nedostaju.', 'Čitanje naglas|Čita naglas ono što kliknete ili izaberete tastaturom.'],
  };

  R.hr = {
    title: 'Alat za pristupačnost', open: 'Otvori alat za pristupačnost (ALT + B)', close: 'Zatvori', lang: 'Promijeni jezik', language: 'Jezik', hide: 'Sakrij alat',
    hidden: 'Alat za pristupačnost je skriven. Pritisnite ALT + B za ponovno otvaranje.', search: 'Potražite pojam koji ne razumijete…', searchLabel: 'Pretraži pojmove ili postavke',
    profiles: 'Profili pristupačnosti', content: 'Prilagodbe sadržaja', colors: 'Prilagodbe boja', textColor: 'Boja teksta', headingColor: 'Boja naslova', bgColor: 'Boja pozadine', resetColor: 'Poništi boju',
    reset: 'Poništi postavke', resetDone: 'Sve su postavke poništene.', tagline: 'Jednak pristup, osobno iskustvo.', report: 'Prijavi problem', statement: 'Izjava',
    info: 'informacije', toggleSec: 'Sažmi ili proširi odjeljak', back: 'Natrag', on: 'uključeno', off: 'isključeno', settings: 'Postavke', glossaryT: 'Pojmovnik', wiki: 'Pretraži Wikipediju', searching: 'Pretraživanje…',
    noResult: 'Nema rezultata.', readMore: 'Pročitaj više', headings: 'Naslovi', landmarks: 'Područja stranice', links: 'Poveznice na stranici', empty: 'Nije pronađeno na ovoj stranici.',
    noAlt: 'Nema opisa', closeReader: 'Zatvori način čitanja', srOn: 'Čitanje naglas je uključeno. Kliknite element da ga čujete.',
    size: 'Veličina ploče', sizes: ['Normalno', 'XL', 'Mini'], hideTitle: 'Privremeno sakrij alat', hideQ: 'Koliko dugo želite sakriti alat?', hideOk: 'Potvrdi i sakrij',
    hideOpts: ['Dok se kartica ne zatvori|Ponovno se prikazuje u novoj sesiji', 'Sakrij za danas|Ponovno se prikazuje sutra', 'Sakrij za ovaj tjedan|Ponovno aktivan nakon 7 dana', 'Sakrij za ovaj mjesec|Ponovno aktivan nakon 30 dana', 'Ne prikazuj više|Ostaje skriven dok se kolačići ne izbrišu'],
    lm: ['Zaglavlje', 'Navigacija', 'Glavni sadržaj', 'Bočna traka', 'Podnožje', 'Pretraživanje', 'Obrazac'], role: ['Poveznica', 'Gumb', 'Naslov', 'Slika'],
    colorNames: ['Crna', 'Plava', 'Narančasta', 'Tamnoplava', 'Crvena', 'Ljubičasta', 'Bijela', 'Zelena', 'Tirkizna'],
    lw: ['Blago', 'Srednje', 'Široko'], lmh: ['Nisko', 'Srednje', 'Visoko'], dys: ['Font za disleksiju', 'Čitljiv font'], con: ['Tamni kontrast', 'Svijetli kontrast', 'Visoki kontrast'], align: ['Lijevo', 'Sredina', 'Desno', 'Obostrano'], guide: ['Linija', 'Maska'],
    p: ['Sljepoća', 'Oštećenja vida', 'Motorička oštećenja', 'Disleksija', 'Kognicija i učenje', 'Sljepoća za boje', 'ADHD', 'Sigurno za epilepsiju', 'Parkinsonova bolest', 'Starije osobe'],
    f: ['Veličina teksta|Povećava sav tekst na stranici.', 'Disleksija|Koristi font prilagođen disleksiji ili vrlo čitljiv font.', 'Razmak teksta|Povećava razmak između slova i riječi.', 'Visina retka|Povećava razmak između redaka.', 'Veliki pokazivač|Povećava pokazivač miša.', 'Kontrast|Primjenjuje tamni, svijetli ili visoki kontrast.', 'Poveznice|Podcrtava i ističe sve poveznice.', 'Zaustavi animacije|Zaustavlja pokrete, prijelaze i videozapise.', 'Isključi zvuk|Utišava sve zvučne i video zapise.', 'Nijanse sive|Prikazuje stranicu crno-bijelo.', 'Istakni naslove|Uokviruje sve naslove.', 'Filtar plavog svjetla|Smanjuje plavo svjetlo toplom nijansom.', 'Struktura stranice|Prikazuje naslove i područja; kliknite za prijelaz.', 'Korisne poveznice|Prikazuje sve poveznice stranice na jednom popisu.', 'Poravnanje teksta|Poravnava tekst lijevo, na sredinu, desno ili obostrano.', 'Sakrij slike|Skriva slike i pozadine koje odvlače pažnju.', 'Zasićenost|Smanjuje ili povećava zasićenost boja.', 'Vodič za čitanje|Prikazuje liniju ili masku koja prati pokazivač.', 'Povećalo za tekst|Prikazuje tekst ispod pokazivača velikim slovima.', 'Tamni način|Prikazuje stranicu u tamnoj temi.', 'Fokus tipkovnice|Jasno ističe element u fokusu.', 'Način čitanja|Otvara glavni tekst u jednostavnom, čitljivom prikazu.', 'Opisi slika|Prikazuje alternativne tekstove slika i označava one koji nedostaju.', 'Čitanje naglas|Čita naglas ono što kliknete ili odaberete tipkovnicom.'],
  };

  R.sq = {
    title: 'Mjeti i aksesueshmërisë', open: 'Hap mjetin e aksesueshmërisë (ALT + B)', close: 'Mbyll', lang: 'Ndrysho gjuhën', language: 'Gjuha', hide: 'Fshih mjetin',
    hidden: 'Mjeti i aksesueshmërisë u fsheh. Shtypni ALT + B për ta hapur përsëri.', search: 'Kërkoni një term që nuk e kuptoni…', searchLabel: 'Kërko terma ose cilësime',
    profiles: 'Profilet e aksesueshmërisë', content: 'Rregullimet e përmbajtjes', colors: 'Rregullimet e ngjyrave', textColor: 'Ngjyra e tekstit', headingColor: 'Ngjyra e titujve', bgColor: 'Ngjyra e sfondit', resetColor: 'Rivendos ngjyrën',
    reset: 'Rivendos cilësimet', resetDone: 'Të gjitha cilësimet u rivendosën.', tagline: 'Qasje e barabartë, përvojë personale.', report: 'Raporto një problem', statement: 'Deklarata',
    info: 'informacion', toggleSec: 'Palos ose hap seksionin', back: 'Prapa', on: 'aktiv', off: 'joaktiv', settings: 'Cilësimet', glossaryT: 'Fjalorth', wiki: 'Kërko në Wikipedia', searching: 'Duke kërkuar…',
    noResult: 'Nuk u gjet asnjë rezultat.', readMore: 'Lexo më shumë', headings: 'Titujt', landmarks: 'Zonat e faqes', links: 'Lidhjet në këtë faqe', empty: 'Nuk u gjet në këtë faqe.',
    noAlt: 'Pa përshkrim', closeReader: 'Mbyll modalitetin e leximit', srOn: 'Leximi me zë është aktiv. Klikoni një element për ta dëgjuar.',
    size: 'Madhësia e panelit', sizes: ['Normal', 'XL', 'Mini'], hideTitle: 'Fshih mjetin përkohësisht', hideQ: 'Për sa kohë dëshironi ta fshihni mjetin?', hideOk: 'Konfirmo dhe fshih',
    hideOpts: ['Derisa të mbyllet skeda|Shfaqet përsëri në një seancë të re', 'Fshih për sot|Shfaqet përsëri nesër', 'Fshih për këtë javë|Aktiv përsëri pas 7 ditësh', 'Fshih për këtë muaj|Aktiv përsëri pas 30 ditësh', 'Mos e shfaq më|Mbetet i fshehur derisa të fshihen cookies'],
    lm: ['Koka', 'Navigimi', 'Përmbajtja kryesore', 'Shiriti anësor', 'Fundi i faqes', 'Kërkimi', 'Formulari'], role: ['Lidhje', 'Buton', 'Titull', 'Imazh'],
    colorNames: ['E zezë', 'Blu', 'Portokalli', 'Blu e errët', 'E kuqe', 'Vjollcë', 'E bardhë', 'Jeshile', 'Bruz'],
    lw: ['Lehtë', 'Mesatar', 'Gjerë'], lmh: ['I ulët', 'Mesatar', 'I lartë'], dys: ['Font për disleksinë', 'Font i lexueshëm'], con: ['Kontrast i errët', 'Kontrast i çelët', 'Kontrast i lartë'], align: ['Majtas', 'Në qendër', 'Djathtas', 'Të justifikuara'], guide: ['Vijë', 'Maskë'],
    p: ['Verbëria', 'Dëmtime të shikimit', 'Aftësi të kufizuara motorike', 'Disleksia', 'Njohja dhe të mësuarit', 'Daltonizmi', 'ADHD', 'Siguri për epilepsinë', 'Sëmundja e Parkinsonit', 'Të moshuarit'],
    f: ['Madhësia e tekstit|Zmadhon të gjithë tekstin në faqe.', 'Disleksia|Përdor një font të përshtatshëm për disleksinë ose shumë të lexueshëm.', 'Hapësira e tekstit|Rrit hapësirën midis shkronjave dhe fjalëve.', 'Lartësia e rreshtit|Rrit hapësirën midis rreshtave.', 'Kursor i madh|E bën treguesin e miut të madh dhe të dukshëm.', 'Kontrasti|Zbaton kontrast të errët, të çelët ose të lartë.', 'Lidhjet|Nënvizon dhe thekson të gjitha lidhjet.', 'Ndalo animacionet|Ndalon lëvizjet, kalimet dhe videot.', 'Hiq zërin|Hesht të gjitha audiot dhe videot.', 'Shkallë gri|Shfaq faqen bardh e zi.', 'Thekso titujt|Vendos kornizë rreth të gjithë titujve.', 'Filtri i dritës blu|Pakëson dritën blu me një nuancë të ngrohtë.', 'Struktura e faqes|Liston titujt dhe zonat; klikoni për të shkuar atje.', 'Lidhje të dobishme|Shfaq të gjitha lidhjet e faqes në një listë.', 'Rreshtimi i tekstit|Rreshton tekstin majtas, në qendër, djathtas ose të justifikuar.', 'Fshih imazhet|Fsheh imazhet dhe sfondet që shpërqendrojnë.', 'Ngopja|Ul ose rrit ngopjen e ngjyrave.', 'Udhëzuesi i leximit|Shfaq një vijë ose maskë që ndjek treguesin.', 'Zmadhuesi i tekstit|Shfaq me shkronja të mëdha tekstin nën tregues.', 'Modaliteti i errët|Shfaq faqen me temë të errët.', 'Fokusi i tastierës|Thekson qartë elementin në fokus.', 'Modaliteti i leximit|Hap tekstin kryesor në një pamje të pastër dhe të lexueshme.', 'Përshkrimi i imazheve|Shfaq tekstet alternative dhe shënon ato që mungojnë.', 'Leximi me zë|Lexon me zë atë që klikoni ose fokusoni me tastierë.'],
  };
})(window.__BLW_LOCALES = window.__BLW_LOCALES || {});

/*!
 * BlindLook Erişilebilirlik Aracı v1.0.3
 * Açık kaynak dağıtım · sürüm notları: SURUM-NOTLARI.md
 *
 * Kurulum (sitenin </body> etiketinden hemen önce):
 *   1) Bu dosyayı sitenizin ana klasörüne yükleyin (https://siteniz.com/blindlook-widget.js açılmalı).
 *   2) Tüm sayfalarda </body> öncesine ekleyin:
 *      <script src="/blindlook-widget.js" defer charset="utf-8"></script>
 *
 * Ayarlar (data-* öznitelikleri veya window.BlindlookConfig = {...}):
 *   data-lang           33 dilden biri: tr, en, de, fr, ar, he, ... (varsayılan: sayfanın dili)
 *   data-position       "right" | "left"            (varsayılan: right)
 *   data-color          Vurgu rengi                  (varsayılan: #1D20B4)
 *   data-offset-x/y     Buton kenar boşluğu, px      (varsayılan: 24)
 *   data-report-url     "Problem Bildir" bağlantısı
 *   data-statement-url  "Açıklama" (erişilebilirlik beyanı) bağlantısı
 *   data-font-base      (isteğe bağlı) lisanslı Roobert woff2 klasörü; verilmezse sistem fontu kullanılır
 *   data-cta-url        Üstteki CTA bağlantısı (varsayılan: erisilebilirlikhareketi.com/iletisim) · data-cta="false" kapatır
 *
 * Kısayol: ALT + B  ·  API: window.BlindlookWidget.open() / close() / toggle() / reset() / show() / setLang('de')
 */
(() => {
  'use strict';
  if (window.BlindlookWidget) return;
  const VERSION = '1.0.6';
  const VERSION_SHORT = VERSION.replace(/\.0$/, ''); // 1.0.0 → 1.0, 1.1.0 → 1.1

  const d = document;
  const html = d.documentElement;
  const script = d.currentScript || [...d.querySelectorAll('script[src*="blindlook"]')].pop();
  const ds = (script && script.dataset) || {};
  const ext = window.BlindlookConfig || {};
  const opt = (k, def) => (ext[k] != null ? ext[k] : ds[k] != null ? ds[k] : def);

  /* ------------------------------------------------------------------ *
   * Diller
   * ------------------------------------------------------------------ */
  const LANGS = [
    ['en', 'English', 'en-US'], ['de', 'Deutsch', 'de-DE'], ['fr', 'Français', 'fr-FR'],
    ['ru', 'Русский', 'ru-RU'], ['ar', 'العربية', 'ar-SA'], ['zh', '简体中文', 'zh-CN'], ['pl', 'Polski', 'pl-PL'],
    ['cs', 'Čeština', 'cs-CZ'], ['sl', 'Slovenščina', 'sl-SI'], ['nb', 'Norsk Bokmål', 'nb-NO'], ['fi', 'Suomi', 'fi-FI'],
    ['ro', 'Română', 'ro-RO'], ['el', 'Ελληνικά', 'el-GR'], ['bs', 'Bosanski', 'bs-BA'], ['lb', 'Lëtzebuergesch', 'lb-LU'],
    ['da', 'Dansk', 'da-DK'], ['es', 'Español', 'es-ES'], ['pt', 'Português', 'pt-PT'], ['it', 'Italiano', 'it-IT'],
    ['zh-TW', '繁體中文', 'zh-TW'], ['nl', 'Nederlands', 'nl-NL'], ['ja', '日本語', 'ja-JP'], ['tr', 'Türkçe', 'tr-TR'],
    ['hu', 'Magyar', 'hu-HU'], ['sk', 'Slovenčina', 'sk-SK'], ['sv', 'Svenska', 'sv-SE'], ['sw', 'Kiswahili', 'sw-KE'],
    ['uk', 'Українська', 'uk-UA'], ['ga', 'Gaeilge', 'ga-IE'], ['sr', 'Srpski', 'sr-RS'], ['hr', 'Hrvatski', 'hr-HR'],
    ['sq', 'Shqip', 'sq-AL'], ['he', 'עברית', 'he-IL'],
  ];
  const LMAP = Object.fromEntries(LANGS.map((l) => [l[0], l]));
  const RTL = new Set(['he', 'ar']);
  function detectLang(raw) {
    const s = String(raw || '').toLowerCase().replace('_', '-');
    if (!s) return null;
    if (/^zh-(tw|hk|mo|hant)/.test(s)) return 'zh-TW';
    let b = s.split('-')[0];
    if (b === 'no' || b === 'nn') b = 'nb';
    if (b === 'iw') b = 'he';
    return LMAP[b] ? b : null;
  }
  const bcp = (code) => (LMAP[code] ? LMAP[code][2] : 'tr-TR');

  const CFG = {
    lang: detectLang(opt('lang', '')) || detectLang(html.lang) || detectLang(navigator.language) || 'tr',
    position: opt('position', 'right') === 'left' ? 'left' : 'right',
    color: opt('color', '#1D20B4'),
    offsetX: parseInt(opt('offsetX', 24), 10) || 24,
    offsetY: parseInt(opt('offsetY', 24), 10) || 24,
    reportUrl: opt('reportUrl', 'https://blindlook.com/tr'),
    statementUrl: opt('statementUrl', 'https://blindlook.com/tr'),
    // Marka kendi sitesinde barındırır: varsayılan olarak web fontu yüklenmez (sistem fontu).
    // Roobert web lisansı olan bir ortamda data-font-base ile woff2 klasörü verilebilir.
    fontBase: opt('fontBase', ''),
    cta: String(opt('cta', 'true')) !== 'false',
    ctaUrl: opt('ctaUrl', 'https://erisilebilirlikhareketi.com/iletisim'),
  };

  /* Kısa arama metni ve CTA (tüm diller) */
  const EXTRA = {
    q: { tr: 'Ara', en: 'Search', de: 'Suchen', fr: 'Rechercher', he: 'חיפוש', ru: 'Поиск', ar: 'بحث', zh: '搜索', 'zh-TW': '搜尋', pl: 'Szukaj', cs: 'Hledat', sl: 'Iskanje', nb: 'Søk', fi: 'Hae', ro: 'Caută', el: 'Αναζήτηση', bs: 'Pretraga', lb: 'Sichen', da: 'Søg', es: 'Buscar', pt: 'Pesquisar', it: 'Cerca', nl: 'Zoeken', ja: '検索', hu: 'Keresés', sk: 'Hľadať', sv: 'Sök', sw: 'Tafuta', uk: 'Пошук', ga: 'Cuardaigh', sr: 'Pretraga', hr: 'Pretraži', sq: 'Kërko' },
    cta: {
      tr: 'Ücretsiz widget için bize ulaşın', en: 'Contact us for a free widget', de: 'Kontaktieren Sie uns für ein kostenloses Widget', fr: 'Contactez-nous pour un widget gratuit',
      he: 'צרו קשר לקבלת וידג׳ט חינמי', ru: 'Свяжитесь с нами, чтобы получить бесплатный виджет', ar: 'تواصل معنا للحصول على أداة مجانية', zh: '联系我们，免费获取小组件',
      'zh-TW': '聯絡我們，免費取得小工具', pl: 'Skontaktuj się z nami po darmowy widżet', cs: 'Kontaktujte nás pro widget zdarma', sl: 'Pišite nam za brezplačen pripomoček',
      nb: 'Kontakt oss for en gratis widget', fi: 'Ota yhteyttä ja saat ilmaisen widgetin', ro: 'Contactați-ne pentru un widget gratuit', el: 'Επικοινωνήστε μαζί μας για δωρεάν widget',
      bs: 'Kontaktirajte nas za besplatan widget', lb: 'Kontaktéiert eis fir e gratis Widget', da: 'Kontakt os for en gratis widget', es: 'Contáctenos para obtener un widget gratuito',
      pt: 'Contacte-nos para obter um widget gratuito', it: 'Contattaci per un widget gratuito', nl: 'Neem contact op voor een gratis widget', ja: '無料ウィジェットのお問い合わせ',
      hu: 'Lépjen kapcsolatba velünk az ingyenes widgetért', sk: 'Kontaktujte nás pre bezplatný widget', sv: 'Kontakta oss för en gratis widget', sw: 'Wasiliana nasi upate wijeti bila malipo',
      uk: 'Зв’яжіться з нами, щоб отримати безкоштовний віджет', ga: 'Déan teagmháil linn le haghaidh giuirléid saor in aisce', sr: 'Kontaktirajte nas za besplatan vidžet', hr: 'Javite nam se za besplatan widget',
      sq: 'Na kontaktoni për një widget falas',
    },
  };

  /* ------------------------------------------------------------------ *
   * Metinler (TR + EN tam; diğer diller locales.js'ten)
   * ------------------------------------------------------------------ */
  const T = {
    tr: {
      title: 'Erişilebilirlik Aracı', shortcut: 'ALT + B',
      open: 'Erişilebilirlik aracını aç (ALT + B)', close: 'Kapat', lang: 'Dili değiştir', language: 'Dil', hide: 'Aracı gizle',
      hidden: 'Erişilebilirlik aracı gizlendi. Tekrar açmak için ALT + B tuşlarına basın.',
      search: 'Anlamadığınız bir kavramı arayın…', searchLabel: 'Kavram veya ayar ara',
      profiles: 'Erişilebilirlik Profili', content: 'İçerik Ayarları', colors: 'Renk Özelleştirmeleri',
      textColor: 'Metin Rengi', headingColor: 'Başlık Rengi', bgColor: 'Arkaplan Rengi', resetColor: 'Rengi sıfırla',
      reset: 'Ayarları Sıfırla', resetDone: 'Tüm ayarlar sıfırlandı.',
      tagline: 'Eşit erişim, kişisel deneyim.', report: 'Problem Bildir', statement: 'Açıklama',
      info: 'hakkında bilgi', toggleSec: 'Bölümü daralt veya genişlet', back: 'Geri',
      on: 'açık', off: 'kapalı', settings: 'Ayarlar', glossaryT: 'Sözlük', wiki: 'Vikipedi\'de ara', searching: 'Aranıyor…',
      noResult: 'Sonuç bulunamadı.', readMore: 'Devamını oku',
      headings: 'Başlıklar', landmarks: 'Sayfa Bölgeleri', links: 'Sayfadaki Bağlantılar', empty: 'Bu sayfada bulunamadı.',
      noAlt: 'Açıklama yok', closeReader: 'Okuma modunu kapat', srOn: 'Ekran okuma açık. Okutmak istediğiniz öğenin üzerine fare imlecini getirin. Paneli kapatıp aşağı veya sağ okla sonraki, yukarı veya sol okla önceki öğeye geçebilirsiniz. Bağlantı ve düğmeleri Enter ile açabilirsiniz. Tab ile normal klavye gezintisine devam edin. Dokunmatik ekranda öğeye dokunun.',
      size: 'Panel boyutu', sizes: ['Normal', 'XL', 'Mini'],
      hideTitle: 'Aracı Geçici Olarak Gizle', hideQ: 'Aracı ne süreyle gizlemek istersiniz?', hideOk: 'Onayla ve Gizle',
      hideOpts: [['Sekme kapanana kadar', 'Yeni oturumda tekrar görünür'], ['Bugünlük gizle', 'Yarın tekrar görünmeye başlar'], ['Bu hafta için gizle', '7 gün sonra tekrar aktif olur'], ['Bu ay için gizle', '30 gün sonra tekrar aktif olur'], ['Bir daha gösterme', 'Çerezler silinene kadar gizli kalır']],
      lm: { header: 'Üst Bilgi', nav: 'Navigasyon', main: 'Ana İçerik', aside: 'Yan Bölüm', footer: 'Alt Bilgi', search: 'Arama', form: 'Form' },
      role: { link: 'Bağlantı', button: 'Düğme', heading: 'Başlık', img: 'Görsel' },
      colorNames: ['Siyah', 'Mavi', 'Turuncu', 'Lacivert', 'Kırmızı', 'Mor', 'Beyaz', 'Yeşil', 'Turkuaz'],
      p: {
        blind: ['Körlük', 'Ekran okuma ve belirgin klavye odağını açar; animasyonları durdurur. Görsellerin alternatif metinlerini sesli okur.'],
        lowVision: ['Görme Bozuklukları', 'Metni büyütür, kontrastı artırır, imleci büyütür; bağlantı ve başlıkları vurgular.'],
        motor: ['Motor Beceri Bozukluğu', 'Büyük imleç, belirgin klavye odağı ve daha ferah satırlar sağlar; animasyonları durdurur.'],
        dyslexia: ['Disleksi', 'Disleksi dostu yazı tipi, geniş harf/satır aralığı ve okuma kılavuzu kullanır.'],
        cognitive: ['Bilişsel ve Öğrenme', 'Dikkat dağıtıcı hareketleri durdurur, başlık ve bağlantıları vurgular, okuma kılavuzu ekler.'],
        colorBlind: ['Renk Körlüğü', 'Kontrastı ve doygunluğu artırır; bağlantı ve başlıkları renk dışında da ayırt edilebilir kılar.'],
        adhd: ['DEHB', 'Okuma maskesiyle odağı korur, renkleri yumuşatır, sesleri ve animasyonları kapatır.'],
        epilepsy: ['Nöbet ve Epileptik', 'Yanıp sönen ve hareketli içerikleri durdurur, renk doygunluğunu düşürür, sesi kapatır.'],
        parkinson: ['Parkinson Hastalığı', 'Büyük imleç, içerik büyüteci ve belirgin klavye odağı ile titremeden kaynaklı zorlukları azaltır.'],
        elderly: ['Yaşlı Yetişkin', 'Metni ve imleci büyütür, satır aralığını açar, bağlantıları vurgular.'],
      },
      f: {
        fontSize: ['Metin Boyutu', 'Sayfadaki tüm yazıları büyütür.', ['%110', '%125', '%150', '%175']],
        dyslexia: ['Disleksi', 'Disleksi dostu (OpenDyslexic) veya yüksek okunaklı (Atkinson Hyperlegible) yazı tipi kullanır.', ['Disleksi Fontu', 'Okunaklı Font']],
        textSpacing: ['Metin Boşluğu', 'Harf ve kelime aralıklarını açar.', ['Hafif', 'Orta', 'Geniş']],
        lineHeight: ['Satır Yüksekliği', 'Satırlar arasındaki boşluğu artırır.', ['Hafif', 'Orta', 'Geniş']],
        bigCursor: ['Büyük İmleç', 'Fare imlecini büyük ve kolay görülür hale getirir.', ['Siyah', 'Beyaz']],
        contrast: ['Kontrast', 'Koyu, açık veya yüksek kontrastlı görünüm uygular.', ['Koyu Kontrast', 'Açık Kontrast', 'Yüksek Kontrast']],
        links: ['Linkler', 'Sayfadaki tüm bağlantıları altı çizili ve vurgulu gösterir.'],
        stopAnim: ['Animasyon Durdur', 'Hareketli içerikleri, geçişleri ve oynayan videoları durdurur.'],
        mute: ['Sesi Kapat', 'Sayfadaki tüm ses ve videoları sessize alır.'],
        grayscale: ['Gri Tonlama', 'Sayfayı siyah-beyaz gösterir.'],
        headings: ['Başlık Vurgulama', 'Tüm başlıkları çerçeve ile vurgular.'],
        blueLight: ['Mavi Işık Filtresi', 'Ekrana sıcak bir ton ekleyerek mavi ışığı azaltır.', ['Düşük', 'Orta', 'Yüksek']],
        pageStructure: ['Sayfa Yapısı', 'Sayfanın başlıklarını ve bölgelerini listeler; tıklayarak doğrudan gidebilirsiniz.'],
        usefulLinks: ['Faydalı Linkler', 'Sayfadaki tüm bağlantıları tek listede gösterir.'],
        textAlign: ['Metin Hizalama', 'Metinleri sola, ortaya, sağa veya iki yana hizalar.', ['Sola', 'Ortaya', 'Sağa', 'İki Yana']],
        hideImages: ['Görselleri Gizle', 'Dikkat dağıtıcı görselleri ve arka plan resimlerini gizler.'],
        saturation: ['Doygunluk', 'Renk doygunluğunu düşürür veya artırır.', ['Düşük', 'Yüksek']],
        readingGuide: ['Okuma Kılavuzu', 'İmleci takip eden bir okuma çizgisi veya odak maskesi gösterir.', ['Çizgi', 'Maske']],
        magnifier: ['İçerik Büyüteci', 'Üzerine geldiğiniz metni büyük puntoyla gösterir.'],
        darkMode: ['Koyu Mod', 'Sayfayı koyu renk temasıyla gösterir.'],
        keyboardFocus: ['Klavye Odağı', 'Klavye ile gezinirken odaklanılan öğeyi belirgin çerçeveyle gösterir.'],
        readingMode: ['Okuma Modu', 'Sayfanın ana metnini sade ve rahat okunur bir görünümde açar.'],
        imageDesc: ['Resim Betimleme', 'Görsellerin alternatif metinlerini görselin üzerinde gösterir; eksik olanları işaretler.'],
        screenReader: ['Ekran Okuma', 'Fareyle üzerine geldiğiniz veya klavyeyle odaklandığınız içeriği sesli okur. Panel kapalıyken ok tuşlarıyla öğeler arasında ilerleyin.'],
      },
      glossary: [
        ['Erişilebilirlik', 'Bir web sitesinin engelli bireyler dahil herkes tarafından eşit şekilde kullanılabilmesi.'],
        ['WCAG', 'Web İçeriği Erişilebilirlik Yönergeleri. W3C tarafından yayımlanan uluslararası erişilebilirlik standardı.'],
        ['Ekran Okuyucu', 'Ekrandaki içeriği sesli okuyan veya Braille ekrana aktaran yardımcı teknoloji.'],
        ['Alternatif Metin', 'Bir görselin ne anlattığını açıklayan metin. Ekran okuyucular bu metni okur.'],
        ['Kontrast Oranı', 'Metin ile arka plan arasındaki parlaklık farkı. WCAG normal metin için en az 4.5:1 önerir.'],
        ['Disleksi', 'Okuma, yazma ve harfleri ayırt etmede güçlük yaşanan bir öğrenme farklılığı.'],
        ['DEHB', 'Dikkat Eksikliği ve Hiperaktivite Bozukluğu. Odaklanmayı ve dikkati sürdürmeyi zorlaştırır.'],
        ['Klavye Erişimi', 'Sitenin fare olmadan yalnızca klavye ile kullanılabilmesi.'],
        ['Renk Körlüğü', 'Bazı renkleri birbirinden ayırt edememe durumu.'],
      ],
    },
    en: {
      title: 'Accessibility Tool', shortcut: 'ALT + B',
      open: 'Open accessibility tool (ALT + B)', close: 'Close', lang: 'Change language', language: 'Language', hide: 'Hide the tool',
      hidden: 'Accessibility tool hidden. Press ALT + B to open it again.',
      search: 'Search for a term you don\'t understand…', searchLabel: 'Search terms or settings',
      profiles: 'Accessibility Profiles', content: 'Content Adjustments', colors: 'Color Adjustments',
      textColor: 'Text Color', headingColor: 'Heading Color', bgColor: 'Background Color', resetColor: 'Reset color',
      reset: 'Reset Settings', resetDone: 'All settings have been reset.',
      tagline: 'Equal access, personal experience.', report: 'Report a Problem', statement: 'Statement',
      info: 'info', toggleSec: 'Collapse or expand section', back: 'Back',
      on: 'on', off: 'off', settings: 'Settings', glossaryT: 'Glossary', wiki: 'Search Wikipedia', searching: 'Searching…',
      noResult: 'No results found.', readMore: 'Read more',
      headings: 'Headings', landmarks: 'Page Regions', links: 'Links on this page', empty: 'None found on this page.',
      noAlt: 'No description', closeReader: 'Close reading mode', srOn: 'Screen reading on. Hover over an element to hear it. Close the panel and use Down or Right for the next item, Up or Left for the previous item. Press Enter to activate links and buttons. Use Tab for normal keyboard navigation. On touch screens, tap an element.',
      size: 'Panel size', sizes: ['Normal', 'XL', 'Mini'],
      hideTitle: 'Hide the Tool Temporarily', hideQ: 'How long would you like to hide the tool?', hideOk: 'Confirm and Hide',
      hideOpts: [['Until the tab is closed', 'Visible again in a new session'], ['Hide for today', 'Visible again tomorrow'], ['Hide for this week', 'Active again after 7 days'], ['Hide for this month', 'Active again after 30 days'], ['Don\'t show again', 'Stays hidden until cookies are cleared']],
      lm: { header: 'Header', nav: 'Navigation', main: 'Main Content', aside: 'Sidebar', footer: 'Footer', search: 'Search', form: 'Form' },
      role: { link: 'Link', button: 'Button', heading: 'Heading', img: 'Image' },
      colorNames: ['Black', 'Blue', 'Orange', 'Navy', 'Red', 'Purple', 'White', 'Green', 'Cyan'],
      p: {
        blind: ['Blindness', 'Turns on screen reading and strong keyboard focus; stops animations. Reads image alt texts aloud.'],
        lowVision: ['Visual Impairments', 'Enlarges text, increases contrast and cursor size; highlights links and headings.'],
        motor: ['Motor Impairments', 'Big cursor, strong keyboard focus and roomier lines; stops animations.'],
        dyslexia: ['Dyslexia', 'Dyslexia-friendly font, wider letter/line spacing and a reading guide.'],
        cognitive: ['Cognitive & Learning', 'Stops distracting motion, highlights headings and links, adds a reading guide.'],
        colorBlind: ['Color Blindness', 'Boosts contrast and saturation; makes links and headings distinguishable without color.'],
        adhd: ['ADHD', 'Keeps focus with a reading mask, softens colors, mutes sound and stops animations.'],
        epilepsy: ['Seizure Safe', 'Stops flashing and moving content, lowers saturation, mutes sound.'],
        parkinson: ['Parkinson\'s', 'Big cursor, content magnifier and strong keyboard focus to ease tremor-related difficulty.'],
        elderly: ['Older Adults', 'Larger text and cursor, more line spacing, highlighted links.'],
      },
      f: {
        fontSize: ['Text Size', 'Enlarges all text on the page.', ['110%', '125%', '150%', '175%']],
        dyslexia: ['Dyslexia', 'Uses a dyslexia-friendly (OpenDyslexic) or highly legible (Atkinson Hyperlegible) font.', ['Dyslexic Font', 'Legible Font']],
        textSpacing: ['Text Spacing', 'Increases letter and word spacing.', ['Light', 'Medium', 'Wide']],
        lineHeight: ['Line Height', 'Increases spacing between lines.', ['Light', 'Medium', 'Wide']],
        bigCursor: ['Big Cursor', 'Makes the mouse pointer large and easy to see.', ['Black', 'White']],
        contrast: ['Contrast', 'Applies dark, light or high contrast.', ['Dark Contrast', 'Light Contrast', 'High Contrast']],
        links: ['Links', 'Underlines and highlights every link.'],
        stopAnim: ['Stop Animations', 'Stops motion, transitions and playing videos.'],
        mute: ['Mute Sounds', 'Mutes all audio and video on the page.'],
        grayscale: ['Grayscale', 'Shows the page in black and white.'],
        headings: ['Highlight Headings', 'Outlines every heading.'],
        blueLight: ['Blue Light Filter', 'Adds a warm tint to reduce blue light.', ['Low', 'Medium', 'High']],
        pageStructure: ['Page Structure', 'Lists headings and regions; click to jump to them.'],
        usefulLinks: ['Useful Links', 'Shows every link on the page in one list.'],
        textAlign: ['Text Align', 'Aligns text left, center, right or justified.', ['Left', 'Center', 'Right', 'Justify']],
        hideImages: ['Hide Images', 'Hides distracting images and background pictures.'],
        saturation: ['Saturation', 'Lowers or raises color saturation.', ['Low', 'High']],
        readingGuide: ['Reading Guide', 'Shows a reading line or focus mask that follows the pointer.', ['Line', 'Mask']],
        magnifier: ['Text Magnifier', 'Shows the hovered text in large type.'],
        darkMode: ['Dark Mode', 'Shows the page in a dark theme.'],
        keyboardFocus: ['Keyboard Focus', 'Shows a strong outline on the focused element.'],
        readingMode: ['Reading Mode', 'Opens the main text in a clean, easy-to-read view.'],
        imageDesc: ['Image Descriptions', 'Shows image alt texts over images and flags missing ones.'],
        screenReader: ['Screen Reading', 'Reads content you hover over or focus with the keyboard. Close the panel to move between items with arrow keys.'],
      },
      glossary: [
        ['Accessibility', 'Making a website usable by everyone, including people with disabilities.'],
        ['WCAG', 'Web Content Accessibility Guidelines, the international accessibility standard by W3C.'],
        ['Screen Reader', 'Assistive technology that reads screen content aloud or to a Braille display.'],
        ['Alt Text', 'Text describing what an image shows. Screen readers read it out.'],
        ['Contrast Ratio', 'The luminance difference between text and background. WCAG asks for at least 4.5:1.'],
        ['Dyslexia', 'A learning difference that makes reading and telling letters apart harder.'],
        ['ADHD', 'Attention Deficit Hyperactivity Disorder. Makes sustaining attention harder.'],
        ['Keyboard Access', 'Being able to use a site with only a keyboard.'],
        ['Color Blindness', 'Being unable to tell certain colors apart.'],
      ],
    },
  };

  /* ------------------------------------------------------------------ *
   * İkonlar
   * ------------------------------------------------------------------ */
  const I = {
    a11y: '<circle cx="12" cy="4.6" r="1.9" fill="currentColor" stroke="none"/><path d="M4.5 8.6c2.6.7 5 1 7.5 1s4.9-.3 7.5-1M12 9.6v4.6M12 14.2l-3.2 6.6M12 14.2l3.2 6.6" stroke-width="2.2"/>',
    size: '<rect width="18" height="16" x="3" y="4" rx="2.5"/><path d="M15 4v16"/>',
    szN: '<rect width="18" height="16" x="3" y="4" rx="2.5"/><rect x="5.5" y="6.5" width="3" height="11" rx=".8" fill="currentColor" stroke="none"/>',
    szXL: '<rect width="18" height="16" x="3" y="4" rx="2.5"/><rect x="5.5" y="6.5" width="7" height="11" rx=".8" fill="currentColor" stroke="none"/>',
    szMini: '<rect width="18" height="16" x="3" y="4" rx="2.5"/><path d="M16 9l-3 3 3 3"/><rect x="5.5" y="6.5" width="2" height="11" rx=".8" fill="currentColor" stroke="none"/>',
    eyeOff: '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.4 10.4 0 0 1 12 5c7 0 10 7 10 7a13.2 13.2 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.5 13.5 0 0 0 2 12s3 7 10 7a9.7 9.7 0 0 0 5.39-1.61"/><path d="M2 2l20 20"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    chevron: '<path d="m18 15-6-6-6 6"/>',
    info: '<circle cx="12" cy="12" r="9.5"/><path d="M12 16.5v-5M12 7.6h.01"/>',
    reset: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    back: '<path d="m12 19-7-7 7-7M19 12H5"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    arrow: '<path d="M7 17 17 7M8 7h9v9"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    eyeOffP: '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.4 10.4 0 0 1 12 5c7 0 10 7 10 7a13.2 13.2 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.5 13.5 0 0 0 2 12s3 7 10 7a9.7 9.7 0 0 0 5.39-1.61"/><path d="M2 2l20 20"/>',
    glasses: '<circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-4 0M2.5 13 5 7c.7-1.3 1.4-2 3-2M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/>',
    wheel: '<circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/>',
    puzzle: '<path d="M19.44 7.85c-.05.32.06.65.29.88l1.57 1.57a2.4 2.4 0 0 1 0 3.4l-1.61 1.61a.98.98 0 0 1-.84.28c-.47-.07-.8-.48-.97-.93a2.5 2.5 0 1 0-3.21 3.21c.45.17.86.5.93.97a.98.98 0 0 1-.28.84l-1.61 1.61a2.4 2.4 0 0 1-3.4 0l-1.57-1.57a1.03 1.03 0 0 0-.88-.29c-.49.07-.84.5-1.02.97a2.5 2.5 0 1 1-3.24-3.24c.46-.18.9-.53.97-1.02a1.03 1.03 0 0 0-.29-.88L2.7 13.7a2.4 2.4 0 0 1 0-3.4L4.23 8.77c.24-.24.58-.35.92-.3.51.07.88.53 1.07 1.01a2.5 2.5 0 1 0 3.26-3.26c-.48-.2-.93-.56-1.01-1.07-.05-.34.06-.68.3-.92L10.3 2.7a2.4 2.4 0 0 1 3.4 0l1.57 1.57c.23.23.56.34.88.29.49-.07.84-.5 1.02-.97a2.5 2.5 0 1 1 3.24 3.24c-.46.18-.9.53-.97 1.02Z"/>',
    bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4"/>',
    dropHalf: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/><path d="M12 22a7 7 0 0 1-7-7c0-2 1-3.9 3-5.5s3.5-4 4-6.5z" fill="currentColor"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="currentColor"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    wave: '<path d="M2 13c1.5-4 3-4 4.5 0s3 4 4.5 0 3-4 4.5 0 3 4 4.5 0"/>',
    elderly: '<circle cx="10" cy="4" r="2"/><path d="M10 7.5 8 13l2 2.5-1 6M8.4 9.5 6 13M10.3 8.3l3 3.2h2.2M10 15.5l3 6M17 11.5v10"/>',
    textSize: '<path d="M3 7V5h11v2M8.5 5v14M6.5 19h4M14 13v-1.5h7V13M17.5 11.5V19M16 19h3"/>',
    abc: '<text x="12" y="14.5" text-anchor="middle" font-size="10" font-family="Arial,sans-serif" fill="currentColor" stroke="none">abc</text><path d="M4 19h16" stroke-dasharray="1 2.2"/>',
    spacing: '<path d="M13 4v12M17 4v12M19 4H9.5a4 4 0 0 0 0 8H13"/><path d="M3 20h17m-3-3 3 3-3 3"/>',
    lineHeight: '<path d="M6 4v16M3 7l3-3 3 3M3 17l3 3 3-3M12 6h9M12 12h9M12 18h9"/>',
    cursor: '<path d="M4.04 4.04 10.5 20l2.4-6.6 6.6-2.4L4.04 4.04z"/>',
    contrast: '<circle cx="12" cy="12" r="9.5"/><path d="M12 2.5a9.5 9.5 0 0 1 0 19z" fill="currentColor"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    loader: '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
    mute: '<path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="m22 9-6 6M16 9l6 6"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    underline: '<path d="M6 4v6a6 6 0 0 0 12 0V4M4 20h16"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    layout: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/>',
    link2: '<path d="M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 1 1 0 10h-2M8 12h8"/>',
    align: '<path d="M3 6h18M7 12h14M10 18h11"/>',
    imageOff: '<path d="M2 2l20 20M10.41 10.41a2 2 0 1 1-2.83-2.83M13.5 13.5 6 21M18 12l3 3M3.59 3.59A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.05-.22 1.41-.59M21 15V5a2 2 0 0 0-2-2H9"/>',
    drop: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    guide: '<path d="M4 5h16M4 19h16"/><rect width="20" height="6" x="2" y="9" rx="1.5"/>',
    zoom: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>',
    darkMode: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M19 3v4M21 5h-4"/>',
    keyboard: '<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M8 13h.01M12 13h.01M16 13h.01M7 16h10"/>',
    book: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2zM22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
    captions: '<rect width="18" height="14" x="3" y="5" rx="2"/><path d="M7 15h4M15 15h2M7 11h2M13 11h4"/>',
    audio: '<path d="M2 10v3M6 6v11M10 3v18M14 8v7M18 5v13M22 10v3"/>',
  };
  const ico = (n, cls = '') =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${I[n] || ''}</svg>`;

  /* BlindLook logosu — orijinal logo, CSS maskesiyle currentColor renginde çizilir (build.sh gömer) */
  const LOGO = '<span class="logo" role="img" aria-label="BlindLook"></span>';

  /* --- Bayraklar (30x30, daire içinde gösterilir) --- */
  const star = (cx, cy, R, r, rot) => {
    const p = [];
    for (let i = 0; i < 10; i++) {
      const a = rot + (i * Math.PI) / 5, rad = i % 2 ? r : R;
      p.push(`${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`);
    }
    return p.join(' ');
  };
  const hs = (c) => c.map((x, i) => `<rect y="${((30 / c.length) * i).toFixed(2)}" width="30" height="${(30 / c.length + 0.2).toFixed(2)}" fill="${x}"/>`).join('');
  const vs = (c) => c.map((x, i) => `<rect x="${((30 / c.length) * i).toFixed(2)}" width="${(30 / c.length + 0.2).toFixed(2)}" height="30" fill="${x}"/>`).join('');
  const bg = (c) => `<rect width="30" height="30" fill="${c}"/>`;
  const nordic = (b, c1, c2) => bg(b) + `<rect x="9" width="6" height="30" fill="${c1}"/><rect y="12" width="30" height="6" fill="${c1}"/>` + (c2 ? `<rect x="10.5" width="3" height="30" fill="${c2}"/><rect y="13.5" width="30" height="3" fill="${c2}"/>` : '');
  const FL = {
    en: bg('#012169') + '<path d="M0 0L30 30M30 0L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0L30 30M30 0L0 30" stroke="#C8102E" stroke-width="2"/><path d="M15 0V30M0 15H30" stroke="#fff" stroke-width="8"/><path d="M15 0V30M0 15H30" stroke="#C8102E" stroke-width="4.5"/>',
    de: hs(['#000', '#DD0000', '#FFCE00']),
    fr: vs(['#0055A4', '#fff', '#EF4135']),
    he: bg('#fff') + '<rect y="5" width="30" height="3.5" fill="#0038B8"/><rect y="21.5" width="30" height="3.5" fill="#0038B8"/><path d="M15 9.6l4.6 8H10.4zM15 20.4l-4.6-8h9.2z" fill="none" stroke="#0038B8" stroke-width="1.2"/>',
    ru: hs(['#fff', '#0039A6', '#D52B1E']),
    ar: hs(['#00732F', '#fff', '#000']) + '<rect width="9" height="30" fill="#FF0000"/>',
    zh: bg('#DE2910') + `<polygon fill="#FFDE00" points="${star(9, 10, 5, 2, -Math.PI / 2)}"/>` + [[16, 5], [19, 9], [19, 14], [16, 17]].map(([x, y]) => `<polygon fill="#FFDE00" points="${star(x, y, 1.6, 0.65, -Math.PI / 2)}"/>`).join(''),
    pl: hs(['#fff', '#DC143C']),
    cs: hs(['#fff', '#D7141A']) + '<path d="M0 0L15 15L0 30z" fill="#11457E"/>',
    sl: hs(['#fff', '#005DA4', '#ED1C24']) + '<path d="M6 7h7v5c0 2.4-1.8 4-3.5 4.6C7.8 16 6 14.4 6 12z" fill="#005DA4" stroke="#ED1C24" stroke-width=".8"/>',
    nb: nordic('#BA0C2F', '#fff', '#00205B'),
    fi: nordic('#fff', '#002F6C'),
    ro: vs(['#002B7F', '#FCD116', '#CE1126']),
    el: hs(['#0D5EAF', '#fff', '#0D5EAF', '#fff', '#0D5EAF', '#fff', '#0D5EAF', '#fff', '#0D5EAF']) + '<rect width="16.7" height="16.7" fill="#0D5EAF"/><rect x="6.7" width="3.3" height="16.7" fill="#fff"/><rect y="6.7" width="16.7" height="3.3" fill="#fff"/>',
    bs: bg('#002395') + '<path d="M9 0h15v15z" fill="#FECB00"/>' + [[6, 1], [9, 4.5], [12, 8], [15, 11.5], [18, 15], [21, 18.5]].map(([x, y]) => `<polygon fill="#fff" points="${star(x, y, 1.3, 0.5, -Math.PI / 2)}"/>`).join(''),
    lb: hs(['#EF3340', '#fff', '#00A3E0']),
    da: nordic('#C8102E', '#fff'),
    es: bg('#AA151B') + '<rect y="7.5" width="30" height="15" fill="#F1BF00"/>',
    pt: bg('#DA291C') + '<rect width="12" height="30" fill="#046A38"/><circle cx="12" cy="15" r="5" fill="#FFE900"/><circle cx="12" cy="15" r="3" fill="#DA291C" stroke="#fff" stroke-width=".8"/>',
    it: vs(['#009246', '#fff', '#CE2B37']),
    'zh-TW': bg('#FE0000') + '<rect width="16" height="15" fill="#000095"/><circle cx="8" cy="7.5" r="3.8" fill="#fff"/><circle cx="8" cy="7.5" r="2.5" fill="#000095"/><circle cx="8" cy="7.5" r="2" fill="#fff"/>',
    nl: hs(['#AE1C28', '#fff', '#21468B']),
    ja: bg('#fff') + '<circle cx="15" cy="15" r="7" fill="#BC002D"/>',
    tr: bg('#E30A17') + `<circle cx="12.6" cy="15" r="7" fill="#fff"/><circle cx="14.4" cy="15" r="5.6" fill="#E30A17"/><polygon fill="#fff" points="${star(20.4, 15, 2.9, 1.15, Math.PI)}"/>`,
    hu: hs(['#CE2939', '#fff', '#477050']),
    sk: hs(['#fff', '#0B4EA2', '#EE1C25']) + '<path d="M6 8h8v6c0 3-2 5-4 6-2-1-4-3-4-6z" fill="#EE1C25" stroke="#fff" stroke-width="1"/><path d="M10 10v8M7.5 12.5h5M8 15h4" stroke="#fff" stroke-width="1.1"/>',
    sv: nordic('#006AA7', '#FECC00'),
    sw: hs(['#000', '#BB0000', '#006600']) + '<rect y="9.4" width="30" height="1.4" fill="#fff"/><rect y="19.2" width="30" height="1.4" fill="#fff"/><ellipse cx="15" cy="15" rx="3.6" ry="7.5" fill="#BB0000" stroke="#000" stroke-width=".8"/>',
    uk: hs(['#0057B7', '#FFD700']),
    ga: vs(['#169B62', '#fff', '#FF883E']),
    sr: hs(['#C6363C', '#0C4076', '#fff']),
    hr: hs(['#FF0000', '#fff', '#171796']) + '<rect x="11" y="9" width="8" height="9" fill="#fff" stroke="#FF0000" stroke-width=".6"/><path d="M11 9h2v2h-2zM15 9h2v2h-2zM13 11h2v2h-2zM17 11h2v2h-2zM11 13h2v2h-2zM15 13h2v2h-2zM13 15h2v2h-2zM17 15h2v2h-2z" fill="#FF0000"/>',
    sq: bg('#E41E20') + '<path d="M15 7l3 3 4-1-2 4 3 2-4 1 1 4-3-1-2 4-2-4-3 1 1-4-4-1 3-2-2-4 4 1z" fill="#000"/>',
  };
  const flag = (code) => `<span class="fl" aria-hidden="true"><svg viewBox="0 0 30 30" focusable="false">${FL[code] || ''}</svg></span>`;

  /* ------------------------------------------------------------------ *
   * Özellikler ve profiller
   * ------------------------------------------------------------------ */
  const FEATURES = [
    { id: 'fontSize', icon: 'textSize', levels: 4 },
    { id: 'dyslexia', icon: 'abc', levels: 2 },
    { id: 'textSpacing', icon: 'spacing', levels: 3 },
    { id: 'lineHeight', icon: 'lineHeight', levels: 3 },
    { id: 'bigCursor', icon: 'cursor', levels: 2 },
    { id: 'contrast', icon: 'contrast', levels: 3 },
    { id: 'links', icon: 'link', levels: 1 },
    { id: 'stopAnim', icon: 'loader', levels: 1 },
    { id: 'mute', icon: 'mute', levels: 1 },
    { id: 'grayscale', icon: 'image', levels: 1 },
    { id: 'headings', icon: 'underline', levels: 1 },
    { id: 'blueLight', icon: 'moon', levels: 3 },
    { id: 'pageStructure', icon: 'layout', action: true },
    { id: 'usefulLinks', icon: 'link2', action: true },
    { id: 'textAlign', icon: 'align', levels: 4 },
    { id: 'hideImages', icon: 'imageOff', levels: 1 },
    { id: 'saturation', icon: 'drop', levels: 2 },
    { id: 'readingGuide', icon: 'guide', levels: 2 },
    { id: 'magnifier', icon: 'zoom', levels: 1 },
    { id: 'darkMode', icon: 'darkMode', levels: 1 },
    { id: 'keyboardFocus', icon: 'keyboard', levels: 1 },
    { id: 'readingMode', icon: 'book', levels: 1 },
    { id: 'imageDesc', icon: 'captions', levels: 1 },
    { id: 'screenReader', icon: 'audio', levels: 1 },
  ];
  const FMAP = Object.fromEntries(FEATURES.map((f) => [f.id, f]));

  const PROFILES = [
    { id: 'blind', icon: 'eyeOffP', set: { screenReader: 1, keyboardFocus: 1, stopAnim: 1 } },
    { id: 'lowVision', icon: 'glasses', set: { fontSize: 2, contrast: 3, bigCursor: 1, links: 1, headings: 1 } },
    { id: 'motor', icon: 'wheel', set: { bigCursor: 1, keyboardFocus: 1, stopAnim: 1, lineHeight: 1 } },
    { id: 'dyslexia', icon: 'puzzle', set: { dyslexia: 1, textSpacing: 1, lineHeight: 1, readingGuide: 1 } },
    { id: 'cognitive', icon: 'bulb', set: { stopAnim: 1, headings: 1, links: 1, readingGuide: 1, fontSize: 1 } },
    { id: 'colorBlind', icon: 'dropHalf', set: { contrast: 3, saturation: 2, links: 1, headings: 1 } },
    { id: 'adhd', icon: 'target', set: { stopAnim: 1, saturation: 1, readingGuide: 2, mute: 1 } },
    { id: 'epilepsy', icon: 'zap', set: { stopAnim: 1, saturation: 1, mute: 1 } },
    { id: 'parkinson', icon: 'wave', set: { bigCursor: 1, stopAnim: 1, keyboardFocus: 1, magnifier: 1 } },
    { id: 'elderly', icon: 'elderly', set: { fontSize: 2, lineHeight: 1, bigCursor: 1, links: 1, magnifier: 1 } },
  ];
  const PMAP = Object.fromEntries(PROFILES.map((p) => [p.id, p]));

  const SWATCHES = ['#000000', '#1D20B4', '#FF6A00', '#334155', '#E5322D', '#8B5CF6', '#FFFFFF', '#53A653', '#3898EC'];

  /* --- Dil paketi oluşturma (eksikler İngilizceye düşer) --- */
  const LOC_CACHE = {};
  function buildLocale(code) {
    if (LOC_CACHE[code]) return LOC_CACHE[code];
    const done = (o) => {
      o.search = EXTRA.q[code] || EXTRA.q.en;
      o.cta = EXTRA.cta[code] || EXTRA.cta.en;
      return (LOC_CACHE[code] = o);
    };
    if (T[code]) return done(Object.assign({}, T[code]));
    const src = (window.__BLW_LOCALES || {})[code];
    if (!src) return buildLocale('en');
    const en = T.en;
    const o = Object.assign({}, en, src, { glossary: [] });
    const LM = ['header', 'nav', 'main', 'aside', 'footer', 'search', 'form'];
    const RO = ['link', 'button', 'heading', 'img'];
    if (Array.isArray(src.lm)) o.lm = Object.fromEntries(LM.map((k, i) => [k, src.lm[i] || en.lm[k]]));
    if (Array.isArray(src.role)) o.role = Object.fromEntries(RO.map((k, i) => [k, src.role[i] || en.role[k]]));
    if (Array.isArray(src.hideOpts)) o.hideOpts = src.hideOpts.map((s) => s.split('|'));
    const lw = src.lw || ['Light', 'Medium', 'Wide'], lmh = src.lmh || ['Low', 'Medium', 'High'], cn = o.colorNames;
    const LV = {
      fontSize: ['110%', '125%', '150%', '175%'], dyslexia: src.dys, textSpacing: lw, lineHeight: lw, bigCursor: [cn[0], cn[6]],
      contrast: src.con, blueLight: lmh, textAlign: src.align, saturation: [lmh[0], lmh[2]], readingGuide: src.guide,
    };
    o.f = {};
    FEATURES.forEach((f, i) => {
      const s = String((src.f && src.f[i]) || '').split('|');
      const base = en.f[f.id];
      o.f[f.id] = [s[0] || base[0], s[1] || base[1], LV[f.id] || base[2]];
    });
    o.p = {};
    PROFILES.forEach((p, i) => {
      o.p[p.id] = [(src.p && src.p[i]) || en.p[p.id][0], Object.keys(p.set).map((k) => o.f[k][0]).join(' · ')];
    });
    return done(o);
  }

  /* ------------------------------------------------------------------ *
   * Durum
   * ------------------------------------------------------------------ */
  const KEY = 'blindlook-a11y';
  const ls = {
    get(k, s = localStorage) { try { return JSON.parse(s.getItem(k)); } catch (e) { return null; } },
    set(k, v, s = localStorage) { try { s.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } },
    del(k, s = localStorage) { try { s.removeItem(k); } catch (e) { /* ignore */ } },
  };
  const saved = ls.get(KEY) || {};
  const state = {
    f: saved.f || {},
    p: saved.p || [],
    c: saved.c || {},
    col: saved.col || {},
    lang: LMAP[saved.lang] ? saved.lang : CFG.lang,
    size: ['normal', 'xl', 'mini'].includes(saved.size) ? saved.size : 'normal',
    side: CFG.position,
    open: false,
    view: null,
    sizes: false,
    modal: false,
  };
  delete state.f.readingMode;
  function isHiddenStored() {
    if (ls.get(KEY + '-hidden', sessionStorage)) return true;
    const u = ls.get(KEY + '-hide-until');
    if (u === 'never' || (typeof u === 'number' && Date.now() < u)) return true;
    if (u != null) ls.del(KEY + '-hide-until');
    return false;
  }
  let hiddenTrigger = isHiddenStored();
  const L = () => buildLocale(state.lang);
  const save = () => ls.set(KEY, { f: state.f, p: state.p, c: state.c, col: state.col, lang: state.lang, size: state.size, blindImageDescDefault: 2 });
  // Eski Körlük profili resim betimleme kutularını otomatik açıyordu.
  // Yalnızca eski profili kullananların bu ayarını bir kez kapat; diğer tercihleri koru.
  // Kullanıcı daha sonra Resim Betimleme'yi bağımsız olarak açabilir.
  if (saved.blindImageDescDefault !== 2 && state.p.includes('blind') && state.f.imageDesc) {
    state.f.imageDesc = 0;
    save();
  }

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = (s) => String(s).toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\u0131/g, 'i');
  const clean = (s, n = 400) => String(s || '').replace(/\s+/g, ' ').trim().slice(0, n);

  /* ------------------------------------------------------------------ *
   * Kurulum
   * ------------------------------------------------------------------ */
  let host, sr, ui, layers = {}, live, pop, reader, pageStyle;

  function mount() {
    // Roobert: lisanslı web fontu BlindLook CDN'inden yüklenir (data-font-base). Verilmezse
    // sistemde kuruluysa Roobert, değilse sistem sans-serif fontu kullanılır.
    if (CFG.fontBase && !d.querySelector('style[data-blindlook-fonts]')) {
      const base = CFG.fontBase.replace(/\/?$/, '/');
      const face = (file, w, st = 'normal') => `@font-face{font-family:"Roobert";src:url("${base}${file}.woff2") format("woff2");font-weight:${w};font-style:${st};font-display:swap}`;
      const s = d.createElement('style');
      s.setAttribute('data-blindlook-fonts', '');
      s.textContent = face('Roobert-Regular', 400) + face('Roobert-Medium', 500) + face('Roobert-SemiBold', 600) + face('Roobert-RegularItalic', 400, 'italic');
      (d.head || html).appendChild(s);
    }
    host = d.createElement('blindlook-a11y');
    host.setAttribute('data-blindlook', '');
    host.style.cssText = 'all:initial!important;position:fixed!important;top:0!important;left:0!important;width:0!important;height:0!important;z-index:2147483647!important;display:block!important;transform:none!important;filter:none!important;';
    sr = host.attachShadow({ mode: 'open' });
    sr.innerHTML = `<style>${WIDGET_CSS}</style>
      <div class="layer filter"></div><div class="layer tint"></div>
      <div class="layer guide"></div><div class="layer mask mt"></div><div class="layer mask mb"></div>
      <div class="labels"></div>
      <div class="mag" aria-hidden="true"></div>
      <div class="reader" role="dialog" aria-modal="true" hidden></div>
      <div class="ui"></div>
      <div class="pop" role="tooltip" id="blw-pop"></div>
      <div class="sr-only" aria-live="polite" aria-atomic="true"></div>`;
    ['filter', 'tint', 'guide', 'mt', 'mb'].forEach((k) => (layers[k] = sr.querySelector('.' + k)));
    layers.labels = sr.querySelector('.labels');
    layers.mag = sr.querySelector('.mag');
    reader = sr.querySelector('.reader');
    ui = sr.querySelector('.ui');
    pop = sr.querySelector('.pop');
    live = sr.querySelector('.sr-only');
    html.appendChild(host);

    pageStyle = d.createElement('style');
    pageStyle.id = 'blindlook-a11y-page';
    (d.head || html).appendChild(pageStyle);

    sr.addEventListener('click', onClick);
    sr.addEventListener('input', onInput);
    sr.addEventListener('keydown', onPanelKey);
    bindPage();
    render();
    applyAll(true);
  }

  /* ------------------------------------------------------------------ *
   * Arayüz
   * ------------------------------------------------------------------ */
  function render() {
    const t = L();
    const rtl = RTL.has(state.lang);
    ui.className = `ui ${state.side}`;
    ui.style.setProperty('--accent', CFG.color);
    ui.style.setProperty('--ox', CFG.offsetX + 'px');
    ui.style.setProperty('--oy', CFG.offsetY + 'px');
    const sizeBtn = (k, i, icon) => `<button type="button" class="szb" data-act="size" data-id="${k}" aria-pressed="${state.size === k}">${ico(icon)}<span>${esc(t.sizes[i])}</span></button>`;
    const langCode = state.lang === 'zh-TW' ? '繁' : state.lang.toUpperCase();

    ui.innerHTML = `
      <button type="button" class="trigger${hiddenTrigger ? ' gone' : ''}" data-act="toggle" aria-label="${esc(t.open)}" aria-expanded="${state.open}" aria-controls="blw-panel">
        ${ico('a11y')}<span class="dot" aria-hidden="true"></span>
      </button>
      <section class="panel sz-${state.size}${state.open ? ' open' : ''}" id="blw-panel" role="dialog" aria-modal="false" aria-labelledby="blw-title" lang="${esc(bcp(state.lang))}" dir="${rtl ? 'rtl' : 'ltr'}">
        ${CFG.cta ? `<a class="cta" href="${esc(CFG.ctaUrl)}" target="_blank" rel="noopener"><span>${esc(t.cta)}</span>${ico('arrow', 'flipr')}</a>` : ''}
        <header class="hd">
          <div class="hd-row">
            <span class="hd-logo">${LOGO}</span>
            <div class="hd-act">
              <button type="button" class="hbtn" data-act="sizes" aria-label="${esc(t.size)}" title="${esc(t.size)}" aria-expanded="${state.sizes}" aria-controls="blw-sizes">${ico('size')}</button>
              <button type="button" class="hbtn pill" data-act="langView" aria-label="${esc(t.lang)}: ${esc(LMAP[state.lang][1])}" title="${esc(t.lang)}">${flag(state.lang)}<span>${esc(langCode)}</span></button>
              <button type="button" class="hbtn" data-act="hide" aria-label="${esc(t.hide)}" title="${esc(t.hide)}">${ico('eyeOff')}</button>
              <button type="button" class="hbtn dark" data-act="close" aria-label="${esc(t.close)}" title="${esc(t.close)}">${ico('x')}</button>
            </div>
          </div>
          <h2 id="blw-title" class="eyebrow" tabindex="-1">${esc(t.title)} <kbd>${t.shortcut}</kbd></h2>
          <div class="sizes" id="blw-sizes" role="group" aria-label="${esc(t.size)}"${state.sizes ? '' : ' hidden'}>
            ${sizeBtn('normal', 0, 'szN')}${sizeBtn('xl', 1, 'szXL')}${sizeBtn('mini', 2, 'szMini')}
          </div>
        </header>
        <div class="main">
          <div class="body"></div>
          <footer class="ft">
            <button type="button" class="reset" data-act="reset">${ico('reset')}<span>${esc(t.reset)}</span></button>
            <div class="brand">
              <span class="brand-l"><em>${esc(t.tagline)}</em><span class="ver" title="BlindLook Erişilebilirlik Aracı ${VERSION}">v${VERSION_SHORT}</span></span>
              <span class="links"><a href="${esc(CFG.reportUrl)}" target="_blank" rel="noopener">${esc(t.report)}</a><a href="${esc(CFG.statementUrl)}" target="_blank" rel="noopener">${esc(t.statement)}</a></span>
            </div>
          </footer>
          <div class="modal" role="dialog" aria-modal="true" aria-labelledby="blw-hide-t"${state.modal ? '' : ' hidden'}>
            <div class="mcard">
              <div class="m-top"><h3 id="blw-hide-t">${esc(t.hideTitle)}</h3>
                <button type="button" class="hbtn dark" data-act="hideCancel" aria-label="${esc(t.close)}">${ico('x')}</button></div>
              <fieldset><legend>${esc(t.hideQ)}</legend>
                ${t.hideOpts.map((o, i) => `<label class="opt"><input type="radio" name="blw-hide" value="${i}"${i === 0 ? ' checked' : ''}><span class="rd" aria-hidden="true"></span><span class="ot"><b>${esc(o[0])}</b><small>${esc(o[1])}</small></span></label>`).join('')}
              </fieldset>
              <button type="button" class="reset" data-act="hideOk">${esc(t.hideOk)}</button>
            </div>
          </div>
        </div>
      </section>`;
    renderBody();
  }

  function card(kind, id, iconName, name, extra, on, pressed) {
    return `<div class="card${on ? ' on' : ''}" data-card="${kind}:${id}">
      <button type="button" class="cbtn" data-act="${kind === 'p' ? 'prof' : FMAP[id].action ? 'view' : 'feat'}" data-id="${id}"${pressed ? ` aria-pressed="${on}"` : ''}>
        <span class="ic">${ico(iconName)}</span><span class="nm">${esc(name)}</span>${extra}
      </button>
      <button type="button" class="info" data-act="info" data-id="${kind}:${id}" aria-label="${esc(name)} ${esc(L().info)}" aria-expanded="false">${ico('info')}</button>
    </div>`;
  }

  function levelHtml(f) {
    if (!f.levels || f.levels < 2) return '';
    const lv = state.f[f.id] || 0;
    let dots = '';
    for (let i = 1; i <= f.levels; i++) dots += `<i class="${i <= lv ? 'f' : ''}"></i>`;
    return `<span class="lv" aria-hidden="true">${dots}</span><span class="lvn">${lv ? esc(L().f[f.id][2][lv - 1]) : ''}</span>`;
  }

  function section(id, n, title, inner) {
    const c = !!state.col[id];
    return `<section class="sec${c ? ' collapsed' : ''}" data-sec="${id}" aria-labelledby="blw-s-${id}">
      <div class="sec-hd"><div><span class="num" aria-hidden="true">${n}</span><h3 id="blw-s-${id}">${esc(title)}</h3></div>
        <button type="button" class="chev" data-act="sec" data-id="${id}" aria-expanded="${!c}" aria-label="${esc(L().toggleSec)}: ${esc(title)}">${ico('chevron')}</button>
      </div>
      <div class="sec-bd">${inner}</div>
    </section>`;
  }

  function renderBody() {
    const body = ui.querySelector('.body');
    if (!body) return;
    if (state.view) return renderView(body, state.view);
    const t = L();
    const profiles = PROFILES.map((p) => card('p', p.id, p.icon, t.p[p.id][0], '', state.p.includes(p.id), true)).join('');
    const feats = FEATURES.map((f) => card('f', f.id, f.icon, t.f[f.id][0], levelHtml(f), !!state.f[f.id], !f.action)).join('');
    const colorBox = (k, label) => `<div class="cbox" role="group" aria-label="${esc(label)}"><h4>${esc(label)}</h4>
      <div class="sw">${SWATCHES.map((c, i) => `<button type="button" data-act="color" data-k="${k}" data-v="${c}" style="--c:${c}" aria-label="${esc(t.colorNames[i])}" aria-pressed="${state.c[k] === c}"></button>`).join('')}</div>
      <button type="button" class="creset" data-act="creset" data-k="${k}" aria-label="${esc(t.resetColor)}: ${esc(label)}">${ico('reset')}</button></div>`;

    body.innerHTML = `
      <div class="search" role="search">
        ${ico('search', 'si')}
        <input type="search" class="q" placeholder="${esc(t.search)}" aria-label="${esc(t.searchLabel)}" autocomplete="off">
        <div class="results" hidden></div>
      </div>
      ${section('profiles', '01', t.profiles, `<div class="grid prof">${profiles}</div>`)}
      ${section('content', '02', t.content, `<div class="grid feat">${feats}</div>`)}
      ${section('colors', '03', t.colors, `<div class="colors">${colorBox('text', t.textColor)}${colorBox('heading', t.headingColor)}${colorBox('bg', t.bgColor)}</div>`)}`;
  }

  function updateUI() {
    if (!ui) return;
    const t = L();
    ui.querySelectorAll('.card[data-card]').forEach((el) => {
      const [kind, id] = el.dataset.card.split(':');
      const on = kind === 'p' ? state.p.includes(id) : !!state.f[id];
      el.classList.toggle('on', on);
      const b = el.querySelector('.cbtn');
      if (b.hasAttribute('aria-pressed')) b.setAttribute('aria-pressed', on);
      if (kind === 'f' && FMAP[id].levels > 1) {
        const lv = state.f[id] || 0;
        el.querySelectorAll('.lv i').forEach((i, n) => i.classList.toggle('f', n < lv));
        el.querySelector('.lvn').textContent = lv ? t.f[id][2][lv - 1] : '';
      }
    });
    ui.querySelectorAll('[data-act="color"]').forEach((b) => b.setAttribute('aria-pressed', state.c[b.dataset.k] === b.dataset.v));
    const any = Object.values(state.f).some(Boolean) || Object.keys(state.c).length > 0;
    const trig = ui.querySelector('.trigger');
    if (trig) trig.classList.toggle('has', any);
  }

  /* --- Alt görünümler: Dil / Sayfa Yapısı / Faydalı Linkler --- */
  let navTargets = [];
  const visible = (el) => el.getClientRects().length > 0 && !host.contains(el);
  function renderView(body, id) {
    const t = L();
    navTargets = [];
    let inner = '';
    const item = (el, badge, text, indent = 0) => {
      const i = navTargets.push(el) - 1;
      return `<li style="--l:${indent}"><button type="button" data-act="goto" data-i="${i}"><b>${esc(badge)}</b><span>${esc(text)}</span></button></li>`;
    };
    if (id === 'lang') {
      inner = `<ul class="langs">${LANGS.map(([c, n]) => `<li><button type="button" data-act="setLang" data-id="${c}" aria-pressed="${state.lang === c}">${flag(c)}<span lang="${c}" dir="${RTL.has(c) ? 'rtl' : 'ltr'}">${esc(n)}</span>${state.lang === c ? ico('check', 'ck') : ''}</button></li>`).join('')}</ul>`;
    } else if (id === 'pageStructure') {
      const hs2 = [...d.body.querySelectorAll('h1,h2,h3,h4,h5,h6,[role="heading"]')].filter(visible);
      inner += `<h4 class="eyebrow sm">${esc(t.headings)} · ${hs2.length}</h4>`;
      inner += hs2.length
        ? `<ul class="nav">${hs2.map((h) => {
            const lv = /^H\d$/.test(h.tagName) ? +h.tagName[1] : +h.getAttribute('aria-level') || 2;
            return item(h, 'H' + lv, clean(h.textContent, 120) || '—', lv - 1);
          }).join('')}</ul>`
        : `<p class="muted">${esc(t.empty)}</p>`;
      const lmSel = { header: 'header,[role="banner"]', nav: 'nav,[role="navigation"]', main: 'main,[role="main"]', aside: 'aside,[role="complementary"]', search: '[role="search"]', form: 'form[aria-label],form[aria-labelledby]', footer: 'footer,[role="contentinfo"]' };
      const lms = [];
      Object.entries(lmSel).forEach(([k, sel]) => d.body.querySelectorAll(sel).forEach((el) => { if (visible(el) && !lms.some((x) => x[0] === el)) lms.push([el, k]); }));
      inner += `<h4 class="eyebrow sm">${esc(t.landmarks)} · ${lms.length}</h4>`;
      inner += lms.length
        ? `<ul class="nav">${lms.map(([el, k]) => item(el, t.lm[k], clean(el.getAttribute('aria-label'), 80) || t.lm[k])).join('')}</ul>`
        : `<p class="muted">${esc(t.empty)}</p>`;
    } else {
      const seen = new Set();
      const links = [...d.body.querySelectorAll('a[href]')].filter((a) => {
        const txt = clean(a.textContent || a.getAttribute('aria-label') || a.title, 120);
        if (!visible(a) || !txt || seen.has(a.href) || /^javascript:/i.test(a.href)) return false;
        seen.add(a.href);
        return true;
      }).slice(0, 150);
      inner += `<h4 class="eyebrow sm">${esc(t.links)} · ${links.length}</h4>`;
      inner += links.length
        ? `<ul class="nav links">${links.map((a) => {
            const txt = clean(a.textContent || a.getAttribute('aria-label') || a.title, 120);
            let where = '';
            try { const u = new URL(a.href); where = u.host !== location.host ? u.host : u.pathname + u.hash; } catch (e) { /* ignore */ }
            return `<li><a href="${esc(a.href)}"${a.target === '_blank' ? ' target="_blank" rel="noopener"' : ''}><span>${esc(txt)}</span><small>${esc(where)}</small></a></li>`;
          }).join('')}</ul>`
        : `<p class="muted">${esc(t.empty)}</p>`;
    }
    const title = id === 'lang' ? t.language : t.f[id][0];
    body.innerHTML = `<section class="sec sub">
      <div class="sec-hd"><div><h3 id="blw-view-title" tabindex="-1">${esc(title)}</h3></div>
        <button type="button" class="chev" data-act="back" aria-label="${esc(t.back)}">${id === 'lang' ? ico('x') : ico('back', 'flipr')}</button></div>
      ${inner}</section>`;
    body.scrollTop = 0;
    body.querySelector('#blw-view-title').focus();
  }

  /* --- Arama --- */
  function onInput(e) {
    if (!e.target.classList.contains('q')) return;
    renderResults(e.target.value);
  }
  function renderResults(q) {
    const box = ui.querySelector('.results');
    const t = L();
    const nq = norm(q.trim());
    if (nq.length < 2) { box.hidden = true; box.innerHTML = ''; return; }
    const hits = [
      ...PROFILES.filter((p) => norm(t.p[p.id][0] + ' ' + t.p[p.id][1]).includes(nq)).map((p) => ['p:' + p.id, t.p[p.id][0]]),
      ...FEATURES.filter((f) => norm(t.f[f.id][0] + ' ' + t.f[f.id][1]).includes(nq)).map((f) => ['f:' + f.id, t.f[f.id][0]]),
    ].slice(0, 6);
    const gl = (t.glossary || []).filter(([k, v]) => norm(k).includes(nq) || norm(v).includes(nq)).slice(0, 4);
    let h = '';
    if (hits.length) h += `<h5 class="eyebrow sm">${esc(t.settings)}</h5><ul class="chips">${hits.map(([id, n]) => `<li><button type="button" data-act="jump" data-id="${id}">${esc(n)}</button></li>`).join('')}</ul>`;
    if (gl.length) h += `<h5 class="eyebrow sm">${esc(t.glossaryT)}</h5><dl>${gl.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>`;
    h += `<button type="button" class="wiki-btn" data-act="wiki">${ico('search')}<span>${esc(t.wiki)}: “${esc(q.trim())}”</span></button><div class="wiki" aria-live="polite"></div>`;
    box.innerHTML = h;
    box.hidden = false;
  }
  async function wikiSearch() {
    const t = L();
    const input = ui.querySelector('.q');
    const q = input && input.value.trim();
    const out = ui.querySelector('.wiki');
    if (!q || !out) return;
    out.textContent = t.searching;
    const lang = { 'zh-TW': 'zh', nb: 'no' }[state.lang] || state.lang;
    try {
      const r = await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q.replace(/\s+/g, '_'))}?redirect=true`);
      if (!r.ok) throw new Error(r.status);
      const j = await r.json();
      if (!j.extract) throw new Error('empty');
      const url = j.content_urls && j.content_urls.desktop && j.content_urls.desktop.page;
      out.innerHTML = `<strong>${esc(j.title)}</strong><p>${esc(j.extract)}</p>${url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(t.readMore)} ↗</a>` : ''}`;
    } catch (e) {
      out.textContent = t.noResult;
    }
  }

  /* --- Bilgi balonu --- */
  let popFor = null;
  function showInfo(btn, key) {
    if (popFor === btn) return hideInfo();
    hideInfo();
    const [kind, id] = key.split(':');
    const t = L();
    const [name, desc] = kind === 'p' ? t.p[id] : t.f[id];
    pop.dir = RTL.has(state.lang) ? 'rtl' : 'ltr';
    pop.innerHTML = `<strong>${esc(name)}</strong>${esc(desc)}`;
    pop.style.display = 'block';
    const r = btn.getBoundingClientRect();
    const w = pop.offsetWidth, h = pop.offsetHeight;
    const left = Math.min(Math.max(8, r.right - w), innerWidth - w - 8);
    let top = r.bottom + 6;
    if (top + h > innerHeight - 8) top = r.top - h - 6;
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-describedby', 'blw-pop');
    popFor = btn;
    announce(`${name}: ${desc}`);
  }
  function hideInfo() {
    if (!popFor) return;
    pop.style.display = 'none';
    popFor.setAttribute('aria-expanded', 'false');
    popFor.removeAttribute('aria-describedby');
    popFor = null;
  }

  function announce(msg) {
    live.textContent = '';
    setTimeout(() => (live.textContent = msg), 60);
  }

  /* ------------------------------------------------------------------ *
   * Olaylar
   * ------------------------------------------------------------------ */
  function onClick(e) {
    const b = e.target.closest('[data-act]');
    if (!b || b.dataset.act !== 'info') hideInfo();
    if (!b) return;
    const act = b.dataset.act, id = b.dataset.id, t = L();
    switch (act) {
      case 'toggle': return state.open ? close() : open();
      case 'close': return close();
      case 'sizes': {
        state.sizes = !state.sizes;
        ui.querySelector('#blw-sizes').hidden = !state.sizes;
        b.setAttribute('aria-expanded', state.sizes);
        return;
      }
      case 'size': {
        state.size = id; save();
        const p = ui.querySelector('.panel');
        p.classList.remove('sz-normal', 'sz-xl', 'sz-mini');
        p.classList.add('sz-' + id);
        ui.querySelectorAll('.szb').forEach((x) => x.setAttribute('aria-pressed', x.dataset.id === id));
        return;
      }
      case 'langView': state.view = 'lang'; return renderBody();
      case 'setLang': return setLang(id, true);
      case 'hide': return openModal();
      case 'hideCancel': return closeModal();
      case 'hideOk': {
        const sel = ui.querySelector('input[name="blw-hide"]:checked');
        return applyHide(sel ? +sel.value : 0);
      }
      case 'feat': return cycleFeature(id);
      case 'prof': return toggleProfile(id);
      case 'view': state.view = id; return renderBody();
      case 'back': {
        const prev = state.view;
        state.view = null; renderBody();
        const c = prev === 'lang' ? ui.querySelector('[data-act="langView"]') : ui.querySelector(`[data-card="f:${prev}"] .cbtn`);
        if (c) c.focus();
        return;
      }
      case 'info': return showInfo(b, id);
      case 'sec': {
        state.col[id] = !state.col[id]; save();
        ui.querySelector(`[data-sec="${id}"]`).classList.toggle('collapsed', !!state.col[id]);
        b.setAttribute('aria-expanded', !state.col[id]);
        return;
      }
      case 'color': state.c[b.dataset.k] = b.dataset.v; return applyAll();
      case 'creset': delete state.c[b.dataset.k]; return applyAll();
      case 'reset': return resetAll();
      case 'goto': return gotoTarget(navTargets[+b.dataset.i]);
      case 'wiki': return wikiSearch();
      case 'jump': {
        const secId = id[0] === 'p' ? 'profiles' : 'content';
        if (state.col[secId]) { state.col[secId] = false; save(); renderBody(); }
        const c = ui.querySelector(`[data-card="${id}"]`);
        if (c) { c.scrollIntoView({ block: 'center', behavior: 'smooth' }); c.querySelector('.cbtn').focus({ preventScroll: true }); c.classList.add('pulse'); setTimeout(() => c.classList.remove('pulse'), 1200); }
        return;
      }
      case 'closeReader': state.f.readingMode = 0; return applyAll();
    }
    void t;
  }

  function onPanelKey(e) {
    if (e.key === 'Enter' && e.target.classList && e.target.classList.contains('q')) { e.preventDefault(); wikiSearch(); }
    if (e.key === 'Tab' && state.modal) {
      const f = [...ui.querySelectorAll('.modal button, .modal input:checked')];
      const first = f[0], last = f[f.length - 1];
      const a = sr.activeElement;
      if (e.shiftKey && a === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && a === last) { e.preventDefault(); first.focus(); }
    }
  }

  function setLang(code, focusBtn) {
    if (!LMAP[code]) return;
    state.lang = code;
    state.view = null;
    save();
    render();
    updateUI();
    if (focusBtn) ui.querySelector('[data-act="langView"]').focus();
    announce(LMAP[code][1]);
  }

  function openModal() {
    state.modal = true;
    const m = ui.querySelector('.modal');
    m.hidden = false;
    setTimeout(() => m.querySelector('input:checked').focus(), 30);
  }
  function closeModal() {
    state.modal = false;
    ui.querySelector('.modal').hidden = true;
    ui.querySelector('[data-act="hide"]').focus();
  }
  function applyHide(i) {
    if (i === 0) ls.set(KEY + '-hidden', true, sessionStorage);
    else {
      let until;
      if (i === 1) { const m = new Date(); m.setHours(24, 0, 0, 0); until = m.getTime(); }
      else if (i === 2) until = Date.now() + 7 * 864e5;
      else if (i === 3) until = Date.now() + 30 * 864e5;
      else until = 'never';
      ls.set(KEY + '-hide-until', until);
    }
    hiddenTrigger = true;
    state.modal = false;
    ui.querySelector('.modal').hidden = true;
    close(false);
    ui.querySelector('.trigger').classList.add('gone');
    announce(L().hidden);
  }

  function open() {
    state.open = true;
    ui.querySelector('.panel').classList.add('open');
    ui.querySelector('.trigger').setAttribute('aria-expanded', 'true');
    setTimeout(() => ui.querySelector('#blw-title').focus(), 60);
  }
  function close(focusTrigger = true) {
    state.open = false;
    hideInfo();
    const p = ui.querySelector('.panel');
    if (p) p.classList.remove('open');
    const trig = ui.querySelector('.trigger');
    trig.setAttribute('aria-expanded', 'false');
    if (focusTrigger && !hiddenTrigger) trig.focus();
  }

  function cycleFeature(id) {
    const f = FMAP[id];
    const next = ((state.f[id] || 0) + 1) % (f.levels + 1);
    state.f[id] = next;
    applyAll();
    const t = L();
    announce(`${t.f[id][0]}: ${next && f.levels > 1 ? t.f[id][2][next - 1] : next ? t.on : t.off}`);
    if (id === 'screenReader' && next) speak(t.srOn, bcp(state.lang));
    if (id === 'screenReader' && !next && window.speechSynthesis) speechSynthesis.cancel();
  }

  function toggleProfile(id) {
    const t = L();
    const on = state.p.includes(id);
    if (on) {
      state.p = state.p.filter((x) => x !== id);
      Object.keys(PMAP[id].set).forEach((k) => (state.f[k] = Math.max(0, ...state.p.map((pid) => PMAP[pid].set[k] || 0))));
    } else {
      state.p.push(id);
      Object.entries(PMAP[id].set).forEach(([k, v]) => (state.f[k] = Math.max(state.f[k] || 0, v)));
    }
    applyAll();
    announce(`${t.p[id][0]}: ${on ? t.off : t.on}`);
    if (!on && state.f.screenReader) speak(t.srOn, bcp(state.lang));
  }

  function resetAll() {
    state.f = {}; state.p = []; state.c = {};
    if (window.speechSynthesis) speechSynthesis.cancel();
    applyAll();
    if (!state.view) renderBody();
    announce(L().resetDone);
  }

  function gotoTarget(el) {
    if (!el) return;
    if (innerWidth < 640) close(false);
    el.scrollIntoView({ behavior: state.f.stopAnim ? 'auto' : 'smooth', block: 'center' });
    if (!el.matches('a,button,input,select,textarea,[tabindex]')) el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
    el.classList.add('blw-flash');
    setTimeout(() => el.classList.remove('blw-flash'), 1800);
  }

  /* ------------------------------------------------------------------ *
   * Sayfaya uygulama
   * ------------------------------------------------------------------ */
  const FONT_LINKS = {
    1: 'https://fonts.cdnfonts.com/css/opendyslexic',
    2: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap',
  };
  const loadedFonts = {};
  function ensureFont(lv) {
    if (loadedFonts[lv]) return;
    loadedFonts[lv] = true;
    const l = d.createElement('link');
    l.rel = 'stylesheet';
    l.href = FONT_LINKS[lv];
    l.setAttribute('data-blindlook', '');
    (d.head || html).appendChild(l);
  }

  const cursorSvg = (fill, stroke) =>
    'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M8 4 L8 40 L17 31 L23 44 L29 41.5 L23 28.5 L36 28.5 Z" fill="${fill}" stroke="${stroke}" stroke-width="3" stroke-linejoin="round"/></svg>`);

  const NOT_MEDIA = ':not(img,video,picture,canvas,iframe,svg,svg *,input[type="range"])';

  function pageCSS() {
    const f = state.f, c = [], B = 'body';
    c.push('.blw-flash{outline:4px solid #1D20B4 !important;outline-offset:4px !important}');
    c.push('.blw-speaking{outline:3px solid #1D20B4 !important;outline-offset:3px !important;background-color:rgba(29,32,180,.08) !important}');
    c.push('.blw-arrow-current{outline:3px solid #1D20B4 !important;outline-offset:3px !important}');
    if (f.dyslexia) {
      ensureFont(f.dyslexia);
      const fam = f.dyslexia === 1 ? '"OpenDyslexic","Open-Dyslexic","Comic Sans MS"' : '"Atkinson Hyperlegible"';
      c.push(`${B} *:not(i,svg,svg *,[class*="icon"],[class*="Icon"],[class^="fa"],[class*=" fa-"],.material-icons,.material-symbols-outlined,.material-symbols-rounded){font-family:${fam},Verdana,Tahoma,sans-serif !important}`);
    }
    if (f.textSpacing) c.push(`${B} *{letter-spacing:${[0, 0.05, 0.1, 0.16][f.textSpacing]}em !important;word-spacing:${[0, 0.12, 0.2, 0.32][f.textSpacing]}em !important}`);
    if (f.lineHeight) c.push(`${B} *{line-height:${[0, 1.7, 2, 2.4][f.lineHeight]} !important}`);
    if (f.bigCursor) {
      const cur = f.bigCursor === 1 ? cursorSvg('#000', '#fff') : cursorSvg('#fff', '#000');
      c.push(`html,${B},${B} *{cursor:url("${cur}") 8 4,auto !important}`);
    }
    if (f.darkMode) {
      c.push(`html,${B}{background:#121214 !important;color:#E7E7EA !important}`);
      c.push(`${B} *${NOT_MEDIA}{background-color:#18181B !important;color:#E7E7EA !important;border-color:#3F3F46 !important}`);
      c.push(`${B} a,${B} a *{color:#9DA8FF !important}`);
      c.push(`${B} :is(input,textarea,select,button){background-color:#27272A !important}`);
    }
    if (f.contrast === 1 || f.contrast === 2) {
      const [bgc, fg, ln] = f.contrast === 1 ? ['#000', '#fff', '#FFE600'] : ['#fff', '#000', '#1D20B4'];
      c.push(`html,${B}{background:${bgc} !important;color:${fg} !important}`);
      c.push(`${B} *${NOT_MEDIA}{background-color:${bgc} !important;color:${fg} !important;border-color:${fg} !important;box-shadow:none !important;text-shadow:none !important}`);
      c.push(`${B} a,${B} a *{color:${ln} !important;text-decoration:underline !important}`);
    }
    if (f.links) c.push(`${B} a,${B} [role="link"]{text-decoration:underline !important;text-underline-offset:3px !important;outline:2px solid #1D20B4 !important;outline-offset:2px !important;background-color:rgba(255,230,0,.3) !important}`);
    if (f.headings) c.push(`${B} :is(h1,h2,h3,h4,h5,h6,[role="heading"]){outline:3px dashed #1D20B4 !important;outline-offset:4px !important;background-color:rgba(29,32,180,.06) !important}`);
    if (f.stopAnim) c.push(`${B} *,${B} *::before,${B} *::after{animation-duration:0s !important;animation-delay:0s !important;animation-iteration-count:1 !important;transition-duration:0s !important;transition-delay:0s !important;scroll-behavior:auto !important}`);
    if (f.textAlign) c.push(`${B} *:not(img,svg,svg *){text-align:${['', 'left', 'center', 'right', 'justify'][f.textAlign]} !important}`);
    if (f.hideImages) c.push(`${B} :is(img,picture,video,canvas,[role="img"]),${B} svg image{visibility:hidden !important}${B} *,${B} *::before,${B} *::after{background-image:none !important}`);
    if (f.keyboardFocus) c.push(`${B} *:focus,${B} *:focus-visible{outline:3px solid #1D20B4 !important;outline-offset:3px !important;box-shadow:0 0 0 6px #fff, 0 0 0 9px #000 !important}`);
    if (f.imageDesc) c.push(`${B} img{outline:2px solid #000 !important}`);
    if (state.c.bg) c.push(`html,${B},${B} :is(main,section,article,header,footer,nav,aside,div,form,ul,ol,li,table,tr,td,th){background-color:${state.c.bg} !important}`);
    if (state.c.text) c.push(`${B} :is(p,span,li,td,th,label,a,small,strong,em,b,i,u,dd,dt,blockquote,figcaption,cite,q,div,button){color:${state.c.text} !important}`);
    if (state.c.heading) c.push(`${B} :is(h1,h2,h3,h4,h5,h6,[role="heading"]),${B} :is(h1,h2,h3,h4,h5,h6) *{color:${state.c.heading} !important}`);
    return c.join('\n');
  }

  /* --- Metin boyutu --- */
  const FS = [1, 1.1, 1.25, 1.5, 1.75];
  let curScale = 1;
  const scaledEls = new Set();
  const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'BR', 'HR', 'IMG', 'VIDEO', 'AUDIO', 'CANVAS', 'IFRAME', 'svg', 'SVG', 'PATH', 'BLINDLOOK-A11Y']);
  function applyFontScale() {
    const s = FS[state.f.fontSize || 0];
    if (s === curScale) return;
    scaledEls.forEach((el) => {
      const o = el.__blwFs;
      if (o) { el.style.removeProperty('font-size'); if (o.v) el.style.setProperty('font-size', o.v, o.p); }
      delete el.__blwFs;
    });
    scaledEls.clear();
    curScale = s;
    if (s !== 1 && d.body) scaleTree(d.body, true);
  }
  function scaleTree(rootEl, initial) {
    if (curScale === 1) return;
    const list = rootEl === d.body ? d.body.querySelectorAll('*') : [rootEl, ...rootEl.querySelectorAll('*')];
    const items = [];
    for (const el of list) {
      if (SKIP_TAGS.has(el.tagName) || el.__blwFs || el.closest('svg') || host.contains(el)) continue;
      const px = parseFloat(getComputedStyle(el).fontSize);
      if (!px) continue;
      if (!initial) {
        const parent = el.parentElement;
        if (parent && parent.__blwFs && Math.abs(parseFloat(getComputedStyle(parent).fontSize) - px) < 0.1) { el.__blwFs = { v: '', p: '', inh: true }; continue; }
      }
      items.push([el, px]);
    }
    for (const [el, px] of items) {
      el.__blwFs = { v: el.style.getPropertyValue('font-size'), p: el.style.getPropertyPriority('font-size') };
      el.style.setProperty('font-size', (px * curScale).toFixed(2) + 'px', 'important');
      scaledEls.add(el);
    }
  }

  function syncMedia(rootEl = d) {
    if (!rootEl.querySelectorAll) return;
    rootEl.querySelectorAll('video,audio').forEach((m) => {
      if (state.f.mute) { if (m.__blwM === undefined) m.__blwM = m.muted; m.muted = true; }
      else if (m.__blwM !== undefined) { m.muted = m.__blwM; delete m.__blwM; }
      if (state.f.stopAnim && !m.paused) { m.pause(); m.__blwP = 1; }
      else if (!state.f.stopAnim && m.__blwP) { delete m.__blwP; const p = m.play(); if (p && p.catch) p.catch(() => {}); }
    });
  }

  function applyAll(initial) {
    const f = state.f;
    pageStyle.textContent = pageCSS();

    const filters = [];
    if (f.grayscale) filters.push('grayscale(1)');
    if (f.saturation === 1) filters.push('saturate(.45)');
    if (f.saturation === 2) filters.push('saturate(1.9)');
    if (f.contrast === 3) filters.push('contrast(1.45)');
    const fl = layers.filter;
    fl.style.display = filters.length ? 'block' : 'none';
    fl.style.backdropFilter = fl.style.webkitBackdropFilter = filters.join(' ') || 'none';

    layers.tint.style.display = f.blueLight ? 'block' : 'none';
    layers.tint.style.background = `rgba(255,145,30,${[0, 0.12, 0.2, 0.3][f.blueLight || 0]})`;

    layers.guide.style.display = f.readingGuide === 1 ? 'block' : 'none';
    layers.mt.style.display = layers.mb.style.display = f.readingGuide === 2 ? 'block' : 'none';
    if (f.readingGuide) positionGuide();

    if (!f.magnifier) layers.mag.style.display = 'none';
    applyFontScale();
    syncMedia();
    updateLabels();
    if (f.readingMode) openReader(); else closeReader();
    if (!f.screenReader) { clearSpeaking(); clearTimeout(hoverReadTimer); hoverReadTimer = 0; hoveredReadElement = null; clearArrowCursor(); }

    html.toggleAttribute('data-blindlook-active', Object.values(f).some(Boolean));
    updateUI();
    if (!initial) save();
  }

  /* --- Okuma kılavuzu --- */
  let mouseY = innerHeight / 2, guideRaf = 0;
  function positionGuide() {
    guideRaf = 0;
    const y = mouseY, half = 70;
    layers.guide.style.top = y - 7 + 'px';
    layers.mt.style.top = '0px';
    layers.mt.style.height = Math.max(0, y - half) + 'px';
    layers.mb.style.top = y + half + 'px';
    layers.mb.style.bottom = '0px';
  }

  /* --- İçerik büyüteci --- */
  const MAG_SEL = 'p,li,a,button,label,h1,h2,h3,h4,h5,h6,td,th,dt,dd,blockquote,figcaption,span,small,strong,em,img,input,[role="button"],[role="link"]';
  function onMagOver(e) {
    if (!state.f.magnifier) return;
    const el = e.target.closest && e.target.closest(MAG_SEL);
    if (!el || host.contains(el)) { layers.mag.style.display = 'none'; return; }
    const txt = clean(el.tagName === 'IMG' ? el.alt : el.tagName === 'INPUT' ? el.value || el.placeholder : el.innerText, 260);
    if (!txt) { layers.mag.style.display = 'none'; return; }
    layers.mag.textContent = txt;
    layers.mag.style.display = 'block';
  }
  function onMagMove(e) {
    if (!state.f.magnifier || layers.mag.style.display !== 'block') return;
    const m = layers.mag, w = m.offsetWidth, h = m.offsetHeight;
    let x = e.clientX + 18, y = e.clientY + 22;
    if (x + w > innerWidth - 8) x = Math.max(8, e.clientX - w - 18);
    if (y + h > innerHeight - 8) y = Math.max(8, e.clientY - h - 18);
    m.style.left = x + 'px';
    m.style.top = y + 'px';
  }

  /* --- Resim betimleme --- */
  let labelRaf = 0;
  function updateLabels() {
    labelRaf = 0;
    const box = layers.labels;
    if (!state.f.imageDesc || state.f.hideImages) { box.innerHTML = ''; return; }
    const t = L();
    const frag = d.createDocumentFragment();
    d.querySelectorAll('body img').forEach((img) => {
      const r = img.getBoundingClientRect();
      if (r.width < 40 || r.height < 30 || r.bottom < 0 || r.top > innerHeight || r.right < 0 || r.left > innerWidth) return;
      const alt = img.getAttribute('alt');
      if (alt === '' || img.getAttribute('role') === 'presentation' || img.getAttribute('aria-hidden') === 'true') return;
      const lbl = d.createElement('div');
      lbl.className = 'lbl' + (alt ? '' : ' miss');
      lbl.textContent = alt ? clean(alt, 160) : '⚠ ' + t.noAlt;
      lbl.style.left = Math.max(4, r.left + 6) + 'px';
      lbl.style.top = Math.max(4, r.top + 6) + 'px';
      lbl.style.maxWidth = Math.max(120, r.width - 12) + 'px';
      frag.appendChild(lbl);
    });
    box.replaceChildren(frag);
  }
  const scheduleLabels = () => { if (state.f.imageDesc && !labelRaf) labelRaf = requestAnimationFrame(updateLabels); };

  /* --- Ekran okuma --- */
  let speakingEl = null, speechGeneration = 0;
  function speak(text, lang) {
    if (!('speechSynthesis' in window) || !text) return;
    const generation = ++speechGeneration;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    // Widget dili, sayfanın HTML dilinden önceliklidir (örn. data-lang="tr").
    u.lang = lang || bcp(state.lang);
    const availableVoices = speechSynthesis.getVoices();
    const target = u.lang.toLowerCase();
    const pre = target.split('-')[0];
    // Tam yerel dil eşleşmesini (tr-TR) tercih et; yoksa aynı dil ailesini kullan.
    const v = availableVoices.find((x) => x.lang && x.lang.toLowerCase() === target)
      || availableVoices.find((x) => x.lang && x.lang.toLowerCase().split('-')[0] === pre);
    if (v) u.voice = v;
    u.onend = u.onerror = () => { if (generation === speechGeneration) clearSpeaking(); };
    speechSynthesis.speak(u);
  }
  function clearSpeaking() {
    if (speakingEl) speakingEl.classList.remove('blw-speaking');
    speakingEl = null;
  }
  function readElement(target, exact = false) {
    if (!state.f.screenReader || !target || target === host || host.contains(target)) return;
    const t = L();
    const el = exact ? target : (readableHoverElement(target) || target);
    if (el === d.body || el === html || el.closest('[aria-hidden="true"],[hidden],[inert]')) return;
    if (el.tagName === 'IMG' && (el.getAttribute('alt') === '' || /^(presentation|none)$/.test(el.getAttribute('role') || ''))) return;
    let prefix = '', text = '';
    const tag = el.tagName;
    if (tag === 'A' || el.getAttribute('role') === 'link') prefix = t.role.link + ': ';
    else if (tag === 'BUTTON' || el.getAttribute('role') === 'button') prefix = t.role.button + ': ';
    else if (/^H[1-6]$/.test(tag)) prefix = `${t.role.heading} ${tag[1]}: `;
    else if (tag === 'IMG') prefix = t.role.img + ': ';
    if (tag === 'IMG') text = el.alt || t.noAlt;
    else if (/^(INPUT|SELECT|TEXTAREA)$/.test(tag)) {
      const lab = (el.labels && el.labels[0] && el.labels[0].innerText) || el.getAttribute('aria-label') || el.placeholder || '';
      text = `${lab} ${el.type === 'password' ? '' : el.value || ''}`;
    } else {
      const ids = (el.getAttribute('aria-labelledby') || '').split(/\s+/).filter(Boolean);
      const labelled = ids.map(id => d.getElementById(id)?.textContent || '').join(' ').trim();
      text = labelled || el.getAttribute('aria-label') || el.innerText || el.textContent;
      if (!clean(text)) text = [...el.querySelectorAll('img[alt]')].map(img => img.alt).join(' ');
    }
    text = clean(text, 600);
    if (!text) return;
    clearSpeaking();
    speakingEl = el;
    el.classList.add('blw-speaking');
    speak(prefix + text);
  }

  /* --- Fareyle üzerine gelince okuma (Körlük / Ekran Okuma) --- */
  let hoverReadTimer = 0;
  let hoveredReadElement = null;
  const READABLE_SELECTOR = 'a,button,[role="button"],[role="link"],[role="heading"],h1,h2,h3,h4,h5,h6,img,input,select,textarea,label,li,p,td,th,figcaption,blockquote,dt,dd,[aria-label],[aria-labelledby]';
  function readableHoverElement(target) {
    if (!target || !target.closest || target === host || host.contains(target)) return null;
    if (target.closest('[aria-hidden="true"],script,style,noscript')) return null;
    const semantic = target.closest(READABLE_SELECTOR);
    if (semantic) return semantic;
    // Webflow Text Block çoğu zaman div veya span olarak yayınlanır.
    for (let el = target; el && el !== d.body && el !== html; el = el.parentElement) {
      const directText = [...el.childNodes].some(n => n.nodeType === 3 && clean(n.textContent));
      if (directText || (el.matches('div,span,strong,em,b,i,small') && !el.querySelector('div,p,h1,h2,h3,h4,h5,h6,a,button,section,article,li') && clean(el.innerText))) return el;
    }
    return null;
  }
  function setSpeechHover(el) {
    if (el === hoveredReadElement) return;
    clearTimeout(hoverReadTimer);
    hoverReadTimer = 0;
    hoveredReadElement = el;
    if (!el) return;
    hoverReadTimer = setTimeout(() => {
      hoverReadTimer = 0;
      if (state.f.screenReader && hoveredReadElement === el && el.isConnected) readElement(el);
    }, 250);
  }
  function onSpeechHover(e) {
    if (performance.now() < ignoreHoverUntil || !state.f.screenReader || (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== 'pen')) return;
    setSpeechHover(readableHoverElement(e.target));
  }
  function onSpeechHoverOut(e) {
    if (performance.now() < ignoreHoverUntil || !state.f.screenReader) return;
    setSpeechHover(readableHoverElement(e.relatedTarget));
  }

  /* --- Ok tuşlarıyla sesli sayfa gezintisi --- */
  let arrowCursor = null, arrowFocusInProgress = false, ignoreHoverUntil = 0;
  const ARROW_CONTROL = 'a[href],button,input:not([type="hidden"]),select,textarea,summary,[role="button"],[role="link"],[role="checkbox"],[role="radio"],[role="switch"],[tabindex]:not([tabindex="-1"])';
  const ARROW_SEMANTIC = ARROW_CONTROL + ',h1,h2,h3,h4,h5,h6,[role="heading"],p,li,dt,dd,blockquote,figcaption,td,th,img,[role="img"]';
  const ARROW_TEXT = 'div,span,strong,em,b,i,small,pre,label';
  const NATIVE_ARROWS = 'input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="textbox"],[role="combobox"],[role="listbox"],[role="option"],[role="slider"],[role="spinbutton"],[role="tablist"],[role="tab"],[role="menu"],[role="menubar"],[role="menuitem"],[role="radiogroup"],[role="radio"],[role="tree"],[role="grid"],[role="toolbar"],[role="application"],video[controls],audio[controls]';
  const tempArrowTabindex = new WeakSet();
  function clearArrowCursor() {
    if (arrowCursor) {
      arrowCursor.classList.remove('blw-arrow-current');
      if (tempArrowTabindex.has(arrowCursor)) {
        if (arrowCursor.getAttribute('tabindex') === '-1') arrowCursor.removeAttribute('tabindex');
        tempArrowTabindex.delete(arrowCursor);
      }
    }
    arrowCursor = null;
  }
  function arrowVisible(el) {
    if (!el.isConnected || el.closest('[hidden],[inert],[aria-hidden="true"],script,style,noscript,template') || !el.getClientRects().length) return false;
    if (el.closest('details:not([open])') && !el.closest('summary')) return false;
    const r = el.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) return false;
    if (r.right <= 0 || r.left >= innerWidth) return false;
    for (let p = el; p && p !== d.body; p = p.parentElement) {
      const css = getComputedStyle(p);
      if (css.display === 'none' || css.visibility !== 'visible' || css.contentVisibility === 'hidden' || Number(css.opacity) === 0) return false;
      if (p !== el && /(hidden|clip|auto|scroll)/.test(css.overflowX)) {
        const pr = p.getBoundingClientRect();
        if (r.right <= pr.left || r.left >= pr.right) return false;
      }
    }
    return true;
  }
  function hasArrowText(el) {
    return Boolean(clean(el.innerText || el.getAttribute('aria-label') || '') || clean(el.getAttribute('aria-labelledby')));
  }
  function arrowItems() {
    return [...d.body.querySelectorAll(ARROW_SEMANTIC + ',' + ARROW_TEXT)].filter(el => {
      if (el.matches('img') && (el.getAttribute('alt') === '' || /^(none|presentation)$/.test(el.getAttribute('role') || ''))) return false;
      if (el.matches(':disabled') || el.getAttribute('aria-disabled') === 'true') return false;
      const control = el.matches(ARROW_CONTROL);
      const parentControl = el.parentElement?.closest(ARROW_CONTROL);
      if (parentControl) return false; // Link/düğme içindeki metin veya logo bir kez okunur.
      if (!control) {
        const parentText = el.parentElement?.closest('h1,h2,h3,h4,h5,h6,[role="heading"],p,li,dt,dd,blockquote,figcaption,td,th');
        if (parentText && !el.matches('img,[role="img"]') && !el.matches(ARROW_SEMANTIC)) return false;
        if (!el.matches(ARROW_SEMANTIC)) {
          if (parentText || !hasArrowText(el)) return false;
          const directText = [...el.childNodes].some(n => n.nodeType === 3 && clean(n.textContent));
          if (!directText && el.querySelector(ARROW_SEMANTIC + ',div,p,section,article')) return false;
          // En yakın metin bloğu inline biçimlendirmeyi de içerir.
          const wrapper = el.parentElement?.closest('div,span,pre,label');
          if (wrapper && !wrapper.querySelector(ARROW_SEMANTIC + ',div,p,section,article') && hasArrowText(wrapper) && !el.matches('div,pre,label')) return false;
        } else if (!el.matches('img,[role="img"]')) {
          if (!hasArrowText(el)) return false;
          if (el.querySelector('h1,h2,h3,h4,h5,h6,p,li,dt,dd,blockquote') && ![...el.childNodes].some(n => n.nodeType === 3 && clean(n.textContent))) return false;
        }
      }
      return arrowVisible(el);
    });
  }
  function onArrowRead(e) {
    if (!state.f.screenReader || state.open || !reader.hidden || e.defaultPrevented || e.isComposing || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
    const forward = e.key === 'ArrowDown' || e.key === 'ArrowRight';
    if (!forward && e.key !== 'ArrowUp' && e.key !== 'ArrowLeft') return;
    const target = e.composedPath()[0];
    if (target?.isContentEditable || target?.closest?.(NATIVE_ARROWS) || (d.activeElement !== host && d.activeElement?.closest?.(NATIVE_ARROWS))) return;
    const items = arrowItems();
    if (!items.length) return;
    const focus = d.activeElement;
    const from = arrowCursor || (focus && focus !== d.body && focus !== html && focus !== host ? focus : null);
    let idx = items.indexOf(from);
    if (idx === -1 && from) idx = items.indexOf(from.closest?.(ARROW_SEMANTIC));
    if (idx === -1 && from) {
      // Odaklanan fakat listeye alınmayan öğenin belge sırasındaki komşusuna geç.
      const next = items.findIndex(el => !!(from.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING));
      idx = forward ? (next < 0 ? items.length - 1 : next - 1) : (next < 0 ? items.length : next);
    } else if (idx === -1) idx = forward ? -1 : items.length;
    e.preventDefault();
    const newIndex = idx + (forward ? 1 : -1);
    if (newIndex < 0 || newIndex >= items.length) return; // Başta/sonda döngü yok.
    const el = items[newIndex];
    clearTimeout(hoverReadTimer); hoverReadTimer = 0; hoveredReadElement = null;
    ignoreHoverUntil = performance.now() + 500;
    clearArrowCursor();
    arrowCursor = el;
    if (!el.matches('a[href],button,input,select,textarea,summary,[tabindex],[contenteditable="true"]')) {
      el.setAttribute('tabindex', '-1');
      tempArrowTabindex.add(el);
    }
    el.classList.add('blw-arrow-current');
    arrowFocusInProgress = true;
    try { el.focus({ preventScroll: true }); } finally { arrowFocusInProgress = false; }
    el.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'nearest' });
    readElement(el, true);
  }

  /* --- Okuma modu --- */
  function openReader() {
    if (!reader.hidden) return;
    const t = L();
    const src = d.querySelector('main,[role="main"]') || d.querySelector('article') || d.body;
    const SEL = 'h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,pre';
    const art = d.createElement('article');
    const nodes = [...src.querySelectorAll(SEL)].filter((el) =>
      !el.closest('nav,footer,aside,[aria-hidden="true"],[hidden],form,blindlook-a11y') &&
      !(el.parentElement && el.parentElement.closest(SEL)) && visible(el));
    if (!nodes.some((n) => n.tagName === 'H1')) { const h = d.createElement('h1'); h.textContent = d.title; art.appendChild(h); }
    nodes.forEach((el) => {
      const txt = clean(el.innerText, 5000);
      if (!txt) return;
      const tag = /^H[1-6]$/.test(el.tagName) ? el.tagName.toLowerCase() : el.tagName === 'LI' ? 'li' : el.tagName === 'BLOCKQUOTE' ? 'blockquote' : 'p';
      const n = d.createElement(tag);
      n.textContent = txt;
      art.appendChild(n);
    });
    reader.innerHTML = `<div class="rbar"><span class="rlogo">${LOGO}</span><span class="eyebrow">${esc(t.f.readingMode[0])}</span><button type="button" class="hbtn dark" data-act="closeReader" aria-label="${esc(t.closeReader)}">${ico('x')}</button></div>`;
    reader.setAttribute('aria-label', t.f.readingMode[0]);
    reader.appendChild(art);
    reader.hidden = false;
    reader.dataset.prevOverflow = html.style.overflow;
    html.style.overflow = 'hidden';
    if (state.open) close(false);
    setTimeout(() => reader.querySelector('button').focus(), 30);
  }
  function closeReader() {
    if (reader.hidden) return;
    reader.hidden = true;
    reader.innerHTML = '';
    html.style.overflow = reader.dataset.prevOverflow || '';
    const trig = ui.querySelector('.trigger');
    if (trig && !hiddenTrigger) trig.focus();
  }

  /* --- Sayfa dinleyicileri --- */
  function bindPage() {
    d.addEventListener('keydown', (e) => {
      if (e.altKey && !e.ctrlKey && !e.metaKey && e.code === 'KeyB') {
        e.preventDefault();
        return state.open ? close() : open();
      }
      if (e.key === 'Escape') {
        if (!reader.hidden) { state.f.readingMode = 0; applyAll(); return; }
        if (state.modal) return closeModal();
        if (popFor) { const b = popFor; hideInfo(); b.focus(); return; }
        if (state.view) { const v = state.view; state.view = null; renderBody(); const c = v === 'lang' ? ui.querySelector('[data-act="langView"]') : ui.querySelector(`[data-card="f:${v}"] .cbtn`); if (c) c.focus(); return; }
        if (state.open) close();
      }
      onArrowRead(e);
    });
    d.addEventListener('mousemove', (e) => {
      mouseY = e.clientY;
      if (state.f.readingGuide && !guideRaf) guideRaf = requestAnimationFrame(positionGuide);
      onMagMove(e);
    }, { passive: true });
    d.addEventListener('mouseover', onMagOver, { passive: true });
    // Capture: site etkileşimleri olayın yayılmasını durdursa bile hover algılanır.
    d.addEventListener('pointerover', onSpeechHover, { passive: true, capture: true });
    d.addEventListener('pointermove', onSpeechHover, { passive: true, capture: true });
    d.addEventListener('mouseover', onSpeechHover, { passive: true, capture: true });
    d.addEventListener('mousemove', onSpeechHover, { passive: true, capture: true });
    d.addEventListener('mouseout', onSpeechHoverOut, { passive: true, capture: true });
    d.addEventListener('click', (e) => { clearTimeout(hoverReadTimer); readElement(e.target); }, true);
    d.addEventListener('focusin', (e) => {
      if (arrowFocusInProgress) return;
      if (arrowCursor && e.target !== arrowCursor) clearArrowCursor();
      if (e.target !== host) { clearTimeout(hoverReadTimer); readElement(e.target); }
    });
    d.addEventListener('play', (e) => { if (state.f.mute && e.target.muted !== undefined) e.target.muted = true; }, true);
    addEventListener('scroll', () => { scheduleLabels(); hideInfo(); }, { passive: true, capture: true });
    addEventListener('resize', scheduleLabels, { passive: true });
    if ('speechSynthesis' in window) speechSynthesis.getVoices();

    let pending = [], timer = 0;
    new MutationObserver((muts) => {
      for (const m of muts) for (const n of m.addedNodes) if (n.nodeType === 1 && n !== host && n !== pageStyle) pending.push(n);
      if (!pending.length || timer) return;
      timer = setTimeout(() => {
        const nodes = pending; pending = []; timer = 0;
        nodes.forEach((n) => { if (n.isConnected) { scaleTree(n, false); syncMedia(n); } });
        scheduleLabels();
      }, 250);
    }).observe(d.body, { childList: true, subtree: true });
  }

  /* ------------------------------------------------------------------ *
   * Widget stilleri — Erişilebilirlik Hareketi tasarım dili
   * Krem zemin · serif başlıklar · mono etiketler · hap butonlar · indigo vurgu
   * ------------------------------------------------------------------ */
  const WIDGET_CSS = `
  :host{all:initial}
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  .ui,.reader,.pop,.mag,.lbl{
    --cream:#FFFFFF;--sand:#F4F4F4;--ink:#000;--ink2:#222;--muted:#6B6B6B;--line:rgba(47,44,37,.12);--line2:#E8E2D6;
    --sans:"Roobert",ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    --serif:var(--sans);
    --mono:var(--sans);
    font-family:var(--sans);-webkit-font-smoothing:antialiased;letter-spacing:normal;word-spacing:normal;line-height:1.3;text-align:start;color:var(--ink)}
  button{font:inherit;color:inherit;background:none;border:0;cursor:pointer;text-align:inherit}
  a{color:inherit}
  svg{display:block;flex:none}
  [hidden]{display:none !important}
  :focus{outline:none}
  :focus-visible{outline:3px solid var(--accent,#1D20B4) !important;outline-offset:3px}
  .sr-only{position:fixed;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
  .eyebrow{font-family:var(--mono);font-weight:500;font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink)}
  .eyebrow.sm{font-size:10.5px;color:var(--muted);margin:14px 2px 8px}
  kbd{font-family:var(--mono);font-size:10.5px;border:1px solid var(--line);border-radius:200px;padding:2px 8px;margin-inline-start:6px;background:#fff;color:var(--muted);letter-spacing:.06em}
  .logo{display:inline-block;height:1em;aspect-ratio:1000/166;background:currentColor;-webkit-mask:url("data:image/png;base64,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") center/contain no-repeat;mask:url("data:image/png;base64,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") center/contain no-repeat;flex:none}
  @media (forced-colors:active){.logo{forced-color-adjust:none;background:CanvasText}}
  .cta{display:flex;align-items:center;justify-content:center;gap:8px;flex:none;padding:11px 20px;background:var(--accent,#1D20B4);color:#fff;font-size:13.5px;font-weight:500;text-decoration:none;text-align:center;line-height:1.3;transition:background .15s}
  .cta svg{width:16px;height:16px}
  .cta:hover{background:#000}
  .cta:hover span{text-decoration:underline;text-underline-offset:3px}
  .cta:focus-visible{outline-offset:-4px;outline-color:#fff !important}

  .layer{position:fixed;pointer-events:none;display:none}
  .filter,.tint{inset:0}
  .guide{left:0;right:0;height:14px;background:rgba(0,0,0,.85);border-top:3px solid #1D20B4;border-bottom:3px solid #1D20B4}
  .mask{left:0;right:0;background:rgba(0,0,0,.6)}
  .mag{position:fixed;display:none;pointer-events:none;max-width:min(560px,92vw);background:#000;color:#fff;font-size:30px;font-weight:500;line-height:1.35;padding:14px 20px;border-radius:18px;box-shadow:0 12px 32px rgba(0,0,0,.35)}
  .labels{position:fixed;inset:0;pointer-events:none}
  .lbl{position:fixed;background:#000;color:#fff;font-size:12.5px;line-height:1.35;padding:5px 10px;border-radius:200px;font-family:var(--sans)}
  .lbl.miss{background:#B91C1C}

  .trigger{position:fixed;bottom:var(--oy);right:var(--ox);width:60px;height:60px;border-radius:50%;background:#000;color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 30px rgba(0,0,0,.25);pointer-events:auto;transition:transform .2s ease,background .2s}
  .left .trigger{right:auto;left:var(--ox)}
  .trigger svg{width:30px;height:30px}
  .trigger:hover{transform:scale(1.06);background:var(--accent)}
  .trigger.gone{display:none}
  .trigger .dot{position:absolute;top:2px;right:2px;width:15px;height:15px;border-radius:50%;background:var(--accent);border:3px solid var(--cream);display:none}
  .trigger.has .dot{display:block}

  .panel{--pw:460px;position:fixed;top:0;bottom:0;right:0;width:min(var(--pw),100vw);background:var(--cream);display:flex;flex-direction:column;pointer-events:auto;box-shadow:-20px 0 60px rgba(47,44,37,.18);border-inline-start:1px solid var(--line);transform:translateX(105%);visibility:hidden;transition:transform .32s cubic-bezier(.2,.8,.2,1),visibility 0s linear .32s,width .25s ease;container-type:inline-size}
  .left .panel{right:auto;left:0;transform:translateX(-105%);box-shadow:20px 0 60px rgba(47,44,37,.18)}
  .panel.open{transform:none;visibility:visible;transition:transform .32s cubic-bezier(.2,.8,.2,1),width .25s ease}
  .panel.sz-xl{--pw:640px}
  .panel.sz-mini{--pw:360px}

  .hd{flex:none;padding:18px 20px 16px;border-bottom:1px solid var(--line);background:var(--cream)}
  .hd-row{display:flex;align-items:center;justify-content:space-between;gap:12px}
  .hd-logo{font-size:22px;color:#000;display:flex}
  .hd-act{display:flex;gap:8px;align-items:center}
  .hbtn{height:40px;min-width:40px;border-radius:200px;background:#fff;border:1px solid var(--line);display:inline-flex;align-items:center;justify-content:center;gap:6px;color:#000;transition:background .15s,border-color .15s}
  .hbtn:hover{border-color:#000}
  .hbtn svg{width:19px;height:19px}
  .hbtn.pill{padding:0 12px 0 6px;font-family:var(--mono);font-size:12px;font-weight:500;letter-spacing:.06em}
  .hbtn.dark{background:#000;color:#fff;border-color:#000}
  .hbtn.dark:hover{background:var(--accent);border-color:var(--accent)}
  .fl{width:26px;height:26px;border-radius:50%;overflow:hidden;display:inline-flex;flex:none;box-shadow:0 0 0 1px var(--line)}
  .fl svg{width:100%;height:100%}
  #blw-title:focus,#blw-view-title:focus{outline:none !important}
  .hd h2.eyebrow{margin-top:16px;display:flex;align-items:center;flex-wrap:wrap;gap:4px}
  .sizes{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:14px}
  .szb{height:44px;border-radius:200px;background:#fff;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;gap:8px;font-size:14.5px;font-weight:500}
  .szb svg{width:20px;height:20px}
  .szb:hover{border-color:#000}
  .szb[aria-pressed="true"]{background:#000;color:#fff;border-color:#000}

  .main{position:relative;flex:1;min-height:0;display:flex;flex-direction:column}
  .body{flex:1;overflow-y:auto;overscroll-behavior:contain;padding:18px 16px 20px;display:flex;flex-direction:column;gap:14px;scrollbar-width:thin}

  .search{position:relative}
  .search .si{position:absolute;inset-inline-start:18px;top:15px;width:19px;height:19px;color:var(--muted);pointer-events:none}
  .q{width:100%;height:50px;border:1px solid var(--line);border-radius:200px;background:#fff;padding-inline:48px 18px;font:inherit;font-size:15px;color:#000}
  .q::placeholder{color:var(--muted)}
  .q:focus{border-color:#000;outline:none;box-shadow:0 0 0 3px rgba(29,32,180,.18)}
  .results{background:#fff;border:1px solid var(--line);border-radius:20px;margin-top:8px;padding:6px 16px 16px;display:flex;flex-direction:column;gap:6px}
  .chips{list-style:none;display:flex;flex-wrap:wrap;gap:6px}
  .chips button{border:1px solid var(--line);border-radius:200px;padding:7px 14px;font-size:13.5px;background:var(--cream)}
  .chips button:hover{border-color:#000}
  .results dl{display:flex;flex-direction:column;gap:2px}
  .results dt{font-family:var(--serif);font-size:19px;margin-top:4px}
  .results dd{font-size:13.5px;color:var(--ink2);line-height:1.5}
  .wiki-btn{display:flex;align-items:center;gap:8px;font-size:13.5px;padding:10px 14px;border-radius:200px;background:var(--sand);margin-top:8px;align-self:flex-start}
  .wiki-btn svg{width:16px;height:16px}
  .wiki{font-size:13.5px;line-height:1.55;color:var(--ink2)}
  .wiki strong{font-family:var(--serif);font-weight:400;font-size:20px;color:#000}
  .wiki p{margin:4px 0 6px}
  .wiki a{color:var(--accent);font-weight:500}

  .sec{background:#fff;border:1px solid var(--line);border-radius:24px;padding:20px 18px 18px}
  .sec-hd{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:16px}
  .sec-hd > div{display:flex;flex-direction:column;gap:6px}
  .num{font-family:var(--mono);font-size:11px;letter-spacing:.1em;color:var(--accent);font-weight:500}
  .sec-hd h3{font-family:var(--serif);font-weight:500;font-size:22px;line-height:1.1;letter-spacing:-.02em;color:#000}
  .chev{width:40px;height:40px;border-radius:50%;border:1px solid var(--line);background:var(--cream);display:flex;align-items:center;justify-content:center;flex:none}
  .chev:hover{border-color:#000}
  .chev svg{width:20px;height:20px;transition:transform .2s}
  .sec.collapsed .chev svg{transform:rotate(180deg)}
  .sec.collapsed .sec-bd{display:none}
  .sec.collapsed .sec-hd{margin-bottom:0}
  [dir="rtl"] .flipr{transform:scaleX(-1)}

  .grid{display:grid;gap:10px}
  .grid.prof{grid-template-columns:repeat(2,minmax(0,1fr))}
  .grid.feat{grid-template-columns:repeat(3,minmax(0,1fr))}
  .card{position:relative}
  .card.pulse .cbtn{box-shadow:0 0 0 3px var(--accent)}
  .cbtn{width:100%;height:100%;border:1px solid var(--line);border-radius:18px;background:var(--cream);color:#000;display:flex;transition:border-color .15s,background .15s,color .15s,transform .15s}
  .cbtn:hover{border-color:#000}
  .cbtn:active{transform:scale(.98)}
  .ic{width:44px;height:44px;border-radius:50%;background:var(--sand);display:flex;align-items:center;justify-content:center;flex:none;transition:background .15s}
  .ic svg{width:22px;height:22px}
  .nm{overflow-wrap:break-word;word-break:normal;hyphens:manual}
  .prof .cbtn{flex-direction:row;align-items:center;gap:12px;min-height:72px;padding-block:12px;padding-inline:12px 30px;font-size:14.5px;font-weight:500;line-height:1.2;text-align:start}
  .feat .cbtn{flex-direction:column;align-items:center;justify-content:flex-start;gap:10px;min-height:128px;padding:18px 8px 14px;font-size:13.5px;font-weight:500;line-height:1.2;text-align:center}
  .card.on .cbtn{background:var(--accent);border-color:var(--accent);color:#fff}
  .card.on .ic{background:rgba(255,255,255,.16)}
  .info{position:absolute;top:8px;inset-inline-end:8px;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--muted)}
  .info svg{width:17px;height:17px}
  .info:hover{color:#000;background:var(--sand)}
  .card.on .info{color:rgba(255,255,255,.85)}
  .card.on .info:hover{background:rgba(255,255,255,.18);color:#fff}
  .lv{display:flex;gap:4px;margin-top:auto}
  .lv i{width:14px;height:4px;border-radius:200px;background:var(--line2)}
  .card.on .lv i{background:rgba(255,255,255,.3)}
  .card.on .lv i.f{background:#fff}
  .lvn{font-family:var(--mono);font-size:10px;letter-spacing:.06em;text-transform:uppercase;opacity:.8;min-height:12px;margin-top:-4px}

  .colors{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
  .cbox{border:1px solid var(--line);border-radius:18px;padding:14px 12px 12px;background:var(--cream);display:flex;flex-direction:column}
  .cbox h4{font-family:var(--mono);font-weight:500;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
  .sw{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;justify-items:center}
  .sw button{width:100%;max-width:34px;aspect-ratio:1;border-radius:50%;background:var(--c);box-shadow:inset 0 0 0 1px rgba(0,0,0,.14);transition:transform .12s}
  .sw button:hover{transform:scale(1.1)}
  .sw button[aria-pressed="true"]{outline:2px solid #000;outline-offset:3px}
  .creset{display:flex;margin:14px auto 0;height:30px;padding:0 12px;border-radius:200px;border:1px solid var(--line);background:#fff;align-items:center;justify-content:center;color:var(--muted)}
  .creset svg{width:15px;height:15px}
  .creset:hover{color:#000;border-color:#000}

  .ft{flex:none;padding:14px 16px 16px;border-top:1px solid var(--line);background:var(--cream)}
  .reset{width:100%;height:54px;border-radius:200px;background:#000;color:#fff;display:flex;align-items:center;justify-content:center;gap:10px;font-size:16px;font-weight:500;transition:background .15s}
  .reset svg{width:19px;height:19px}
  .reset:hover{background:var(--accent)}
  .brand{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:14px;flex-wrap:wrap}
  .brand-l{display:flex;align-items:center;gap:10px;color:#000}
  .brand-l .logo{font-size:15px}
  .brand-l em{font-family:var(--serif);font-size:15px;color:var(--muted)}
  .ver{font-size:11px;letter-spacing:.04em;color:var(--muted);border:1px solid var(--line);border-radius:200px;padding:2px 8px;font-variant-numeric:tabular-nums}
  .brand .links{display:flex;gap:6px}
  .brand a{font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;border:1px solid var(--line);border-radius:200px;padding:6px 10px;color:#000;background:#fff}
  .brand a:hover{border-color:#000}

  .modal{position:absolute;inset:0;background:rgba(0,0,0,.42);padding:16px;display:flex;align-items:flex-start;overflow:auto;z-index:2}
  .mcard{width:100%;background:var(--cream);border-radius:28px;padding:24px 20px 20px;box-shadow:0 20px 60px rgba(0,0,0,.25)}
  .m-top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
  .m-top h3{font-family:var(--serif);font-weight:500;font-size:24px;line-height:1.15;letter-spacing:-.02em;color:#000}
  fieldset{border:0;margin-top:18px;display:flex;flex-direction:column;gap:10px}
  legend{font-size:16px;font-weight:600;margin-bottom:12px;color:#000}
  .opt{position:relative;display:flex;align-items:center;gap:14px;padding:14px 16px;border:1px solid var(--line);border-radius:18px;background:#fff;cursor:pointer;transition:border-color .15s,background .15s}
  .opt:hover{border-color:#000}
  .opt input{position:absolute;opacity:0;width:1px;height:1px}
  .rd{width:22px;height:22px;border-radius:50%;border:2px solid #BDBDBD;flex:none;display:flex;align-items:center;justify-content:center}
  .opt input:checked + .rd{border-color:#000}
  .opt input:checked + .rd::after{content:"";width:10px;height:10px;border-radius:50%;background:#000}
  .opt input:focus-visible + .rd{outline:3px solid var(--accent);outline-offset:3px}
  .opt:has(input:checked){border:2px solid #000;background:var(--sand);padding:13px 15px}
  .ot{display:flex;flex-direction:column;gap:2px}
  .ot b{font-weight:600;font-size:15.5px}
  .ot small{font-size:13.5px;color:var(--muted)}
  .mcard .reset{margin-top:18px}

  .langs{list-style:none;display:flex;flex-direction:column;gap:8px}
  .langs button{width:100%;display:flex;align-items:center;gap:12px;padding:11px 14px;border:1px solid var(--line);border-radius:200px;background:var(--cream);font-size:15px;font-weight:500;text-align:start}
  .langs button:hover{border-color:#000}
  .langs button[aria-pressed="true"]{background:#000;color:#fff;border-color:#000}
  .langs .ck{width:18px;height:18px;margin-inline-start:auto}
  .langs .fl{width:28px;height:28px}

  .nav{list-style:none;display:flex;flex-direction:column;gap:6px}
  .nav li{padding-inline-start:calc(var(--l,0) * 14px)}
  .nav button,.nav a{width:100%;display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:16px;background:var(--cream);font-size:14px;text-decoration:none;color:#000;text-align:start}
  .nav button:hover,.nav a:hover{border-color:#000}
  .nav b{flex:none;min-width:34px;font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:.06em;padding:4px 8px;border-radius:200px;background:#000;color:#fff;text-align:center}
  .nav.links a{flex-direction:column;align-items:flex-start;gap:3px}
  .nav.links small{font-family:var(--mono);font-size:10.5px;color:var(--muted);overflow-wrap:anywhere}
  .muted{color:var(--muted);font-size:14px;padding:6px 4px}

  .pop{position:fixed;display:none;z-index:3;width:max-content;max-width:280px;background:#000;color:#fff;font-size:13.5px;line-height:1.5;padding:12px 14px;border-radius:16px;box-shadow:0 12px 30px rgba(0,0,0,.3)}
  .pop strong{display:block;margin-bottom:4px;font-family:var(--serif);font-weight:400;font-size:19px}

  .reader{position:fixed;inset:0;background:var(--cream);color:#111;overflow:auto;z-index:2}
  .rbar{position:sticky;top:0;display:flex;align-items:center;gap:16px;padding:14px 24px;background:var(--cream);border-bottom:1px solid var(--line)}
  .rlogo{font-size:20px;display:flex}
  .rbar .eyebrow{flex:1}
  .reader article{max-width:720px;margin:0 auto;padding:48px 24px 120px;font-family:var(--sans);font-size:20px;line-height:1.75}
  .reader h1{font-family:var(--serif);font-weight:400;font-size:2.4em;line-height:1.05;margin:0 0 .6em}
  .reader h2{font-family:var(--serif);font-weight:400;font-size:1.7em;line-height:1.1;margin:1.4em 0 .5em}
  .reader h3,.reader h4,.reader h5,.reader h6{font-size:1.15em;font-weight:600;margin:1.2em 0 .4em}
  .reader p,.reader blockquote{margin:0 0 1em}
  .reader li{margin:0 0 .5em 1.2em}
  .reader blockquote{border-inline-start:3px solid var(--accent,#1D20B4);padding-inline-start:16px;font-family:var(--serif);font-size:1.15em}

  /* Boyutlar */
  .sz-xl .prof .cbtn{min-height:84px;font-size:16.5px}
  .sz-xl .feat .cbtn{min-height:150px;font-size:15.5px}
  .sz-xl .ic{width:52px;height:52px}
  .sz-xl .ic svg{width:26px;height:26px}
  .sz-xl .sec-hd h3{font-size:27px}
  .sz-xl .grid.feat{grid-template-columns:repeat(4,minmax(0,1fr))}
  .sz-xl .grid.prof{grid-template-columns:repeat(3,minmax(0,1fr))}
  @container (max-width:420px){
    .grid.prof{grid-template-columns:repeat(2,minmax(0,1fr))}
    .prof .cbtn{flex-direction:column;align-items:flex-start;padding:14px 12px 14px;gap:10px;font-size:13.5px;min-height:96px}
    .feat .cbtn{min-height:118px;font-size:12.5px}
    .ic{width:38px;height:38px}
    .ic svg{width:19px;height:19px}
    .sec-hd h3{font-size:20px}
    .grid{gap:8px}
    .colors{grid-template-columns:1fr}
    .sw{grid-template-columns:repeat(9,minmax(0,1fr))}
    .brand-l em{display:none}
    .hd-logo{font-size:18px}
    .hbtn{height:36px;min-width:36px}
  }
  @media (max-width:480px){
    .panel{--pw:100vw !important}
  }
  @media (prefers-reduced-motion:reduce){*{transition:none !important;animation:none !important}}
  `;

  /* ------------------------------------------------------------------ *
   * Başlat
   * ------------------------------------------------------------------ */
  window.BlindlookWidget = {
    version: VERSION,
    languages: LANGS.map((l) => l[0]),
    open: () => open(),
    close: () => close(),
    toggle: () => (state.open ? close() : open()),
    reset: () => resetAll(),
    setLang: (c) => setLang(detectLang(c) || c),
    show: () => {
      hiddenTrigger = false;
      ls.del(KEY + '-hidden', sessionStorage);
      ls.del(KEY + '-hide-until');
      ui.querySelector('.trigger').classList.remove('gone');
    },
  };

  if (d.body) mount();
  else d.addEventListener('DOMContentLoaded', mount);
})();
