export type Locale = "de" | "en" | "tr" | "uk" | "ru";

export const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

export interface Translations {
  // Navigation
  nav_brand: string;
  nav_merge: string;
  nav_split: string;

  // Home page
  home_hero_badge: string;
  home_title: string;
  home_subtitle: string;

  home_merge_title: string;
  home_merge_desc: string;
  home_merge_step1: string;
  home_merge_step2: string;
  home_merge_step3: string;
  home_merge_cta: string;

  home_split_title: string;
  home_split_desc: string;
  home_split_step1: string;
  home_split_step2: string;
  home_split_step3: string;
  home_split_cta: string;

  home_how_title: string;
  home_step01_title: string;
  home_step01_desc: string;
  home_step02_title: string;
  home_step02_desc: string;
  home_step03_title: string;
  home_step03_desc: string;

  // Merge page
  merge_badge: string;
  merge_title: string;
  merge_subtitle: string;
  merge_step1_label: string;
  merge_step2_label: string;
  merge_step3_label: string;
  merge_drop_title: string;
  merge_drop_hint: string;
  /** Use {count} placeholder */
  merge_files_selected_one: string;
  merge_files_selected_other: string;
  merge_add_more: string;
  merge_output_filename: string;
  /** Use {progress} placeholder */
  merge_processing: string;
  merge_reset: string;
  /** Use {count} placeholder */
  merge_btn: string;
  merge_merging: string;
  merge_success_title: string;
  merge_success_desc: string;
  /** Use {name} placeholder */
  merge_download_btn: string;
  merge_start_over: string;
  merge_error_min_files: string;
  /** Use {name} placeholder */
  merge_error_not_pdf: string;
  merge_error_fail: string;

  // Split page
  split_badge: string;
  split_title: string;
  split_subtitle: string;
  split_step1_label: string;
  split_step2_label: string;
  split_step3_label: string;
  split_drop_title: string;
  split_drop_hint: string;
  split_pages_one: string;
  /** Use {count} placeholder */
  split_pages_other: string;
  split_mode_label: string;
  split_mode_all: string;
  /** Use {count} placeholder */
  split_mode_all_desc: string;
  split_mode_range: string;
  split_mode_range_desc: string;
  split_range_from: string;
  split_range_to: string;
  /** Use {total} placeholder */
  split_range_of: string;
  split_mode_custom: string;
  split_mode_custom_desc: string;
  split_custom_placeholder: string;
  /** Use {progress} placeholder */
  split_processing: string;
  split_reset: string;
  split_btn: string;
  split_splitting: string;
  split_success_title: string;
  split_success_desc_one: string;
  /** Use {count} placeholder */
  split_success_desc_other: string;
  split_download_file: string;
  /** Use {count} placeholder */
  split_download_all: string;
  split_start_over: string;
  /** Use {name} placeholder */
  split_error_not_pdf: string;
  split_error_invalid_pdf: string;
  split_error_range: string;
  split_error_no_pages: string;
  split_error_fail: string;

  // Footer
  footer_text: string;
}

const de: Translations = {
  nav_brand: "PDF-Werkzeug",
  nav_merge: "Zusammenführen",
  nav_split: "Aufteilen",

  home_hero_badge: "Step Further",
  home_title: "PDF zusammenführen\n& aufteilen",
  home_subtitle:
    "Mehrere PDF-Dateien zusammenführen oder einzelne Seiten extrahieren — vollständig im Browser. Keine Uploads, keine Server, Ihre Daten verlassen Ihr Gerät nicht.",

  home_merge_title: "PDFs zusammenführen",
  home_merge_desc: "Mehrere PDF-Dateien zu einem Dokument zusammenführen",
  home_merge_step1: "PDF-Dateien auswählen",
  home_merge_step2: "Reihenfolge festlegen",
  home_merge_step3: "Zusammengeführtes PDF herunterladen",
  home_merge_cta: "Jetzt zusammenführen →",

  home_split_title: "PDF aufteilen",
  home_split_desc: "Seiten oder Seitenbereiche aus einer PDF-Datei extrahieren",
  home_split_step1: "PDF-Datei auswählen",
  home_split_step2: "Seiten oder Bereich wählen",
  home_split_step3: "Aufgeteilte PDFs herunterladen",
  home_split_cta: "Jetzt aufteilen →",

  home_how_title: "So funktioniert es",
  home_step01_title: "Dateien wählen",
  home_step01_desc: "Per Drag & Drop oder Klick PDF-Dateien von Ihrem Gerät auswählen.",
  home_step02_title: "Konfigurieren",
  home_step02_desc:
    "Dateien für die Zusammenführung sortieren oder Seitenbereiche für die Aufteilung angeben.",
  home_step03_title: "Herunterladen",
  home_step03_desc:
    "Das Ergebnis wird direkt im Browser erzeugt und sofort heruntergeladen.",

  merge_badge: "PDF Tool",
  merge_title: "PDFs zusammenführen",
  merge_subtitle:
    "Mehrere PDF-Dateien zu einem Dokument zusammenführen — vollständig im Browser verarbeitet.",
  merge_step1_label: "Dateien hinzufügen",
  merge_step2_label: "Sortieren",
  merge_step3_label: "Herunterladen",
  merge_drop_title: "PDF-Dateien hier ablegen",
  merge_drop_hint: "oder klicken zum Durchsuchen",
  merge_files_selected_one: "1 Datei ausgewählt",
  merge_files_selected_other: "{count} Dateien ausgewählt",
  merge_add_more: "+ Weitere hinzufügen",
  merge_output_filename: "Ausgabedateiname",
  merge_processing: "Verarbeitung… {progress}%",
  merge_reset: "← Zurücksetzen",
  merge_btn: "{count} PDFs zusammenführen →",
  merge_merging: "Zusammenführen…",
  merge_success_title: "Zusammenführen abgeschlossen!",
  merge_success_desc: "Ihre PDF wurde erfolgreich zusammengeführt.",
  merge_download_btn: "↓ Download {name}",
  merge_start_over: "Von vorne beginnen",
  merge_error_min_files: "Bitte mindestens 2 PDF-Dateien hinzufügen.",
  merge_error_not_pdf: '"{name}" ist keine PDF-Datei.',
  merge_error_fail: "PDFs konnten nicht zusammengeführt werden.",

  split_badge: "PDF Tool",
  split_title: "PDF aufteilen",
  split_subtitle:
    "Einzelne Seiten oder Seitenbereiche extrahieren — vollständig im Browser verarbeitet.",
  split_step1_label: "Datei auswählen",
  split_step2_label: "Konfigurieren",
  split_step3_label: "Herunterladen",
  split_drop_title: "PDF-Datei hier ablegen",
  split_drop_hint: "oder klicken zum Durchsuchen",
  split_pages_one: "1 Seite",
  split_pages_other: "{count} Seiten",
  split_mode_label: "Aufteilungsmodus",
  split_mode_all: "Jede Seite aufteilen",
  split_mode_all_desc: "Jede Seite wird eine eigene PDF-Datei ({count} Dateien)",
  split_mode_range: "Seitenbereich extrahieren",
  split_mode_range_desc: "Einen zusammenhängenden Seitenbereich extrahieren",
  split_range_from: "Von",
  split_range_to: "bis",
  split_range_of: "von {total}",
  split_mode_custom: "Benutzerdefinierte Seitenauswahl",
  split_mode_custom_desc: "Einzelne Seiten und Bereiche angeben (z. B. 1,3,5-7,9)",
  split_custom_placeholder: "z.B. 1,3,5-7",
  split_processing: "Verarbeitung… {progress}%",
  split_reset: "← Zurücksetzen",
  split_btn: "PDF aufteilen →",
  split_splitting: "Aufteilen…",
  split_success_title: "Aufteilen abgeschlossen!",
  split_success_desc_one: "1 Datei zum Herunterladen bereit.",
  split_success_desc_other: "{count} Dateien zum Herunterladen bereit.",
  split_download_file: "↓ Herunterladen",
  split_download_all: "↓ Alle herunterladen ({count})",
  split_start_over: "Von vorne beginnen",
  split_error_not_pdf: '"{name}" ist keine PDF-Datei.',
  split_error_invalid_pdf:
    "Die PDF konnte nicht gelesen werden. Bitte stellen Sie sicher, dass es sich um eine gültige PDF-Datei handelt.",
  split_error_range: "Die Startseite muss ≤ der Endseite sein.",
  split_error_no_pages: "Keine gültigen Seiten angegeben. Format: 1,3,5-7",
  split_error_fail: "Die PDF konnte nicht aufgeteilt werden.",

  footer_text:
    "PDF-Werkzeug — Die gesamte Verarbeitung erfolgt in Ihrem Browser. Es werden keine Dateien hochgeladen.",
};

const en: Translations = {
  nav_brand: "PDF Tool",
  nav_merge: "Merge",
  nav_split: "Split",

  home_hero_badge: "Step Further",
  home_title: "Merge & Split\nPDFs",
  home_subtitle:
    "Merge multiple PDF files or extract individual pages — entirely in your browser. No uploads, no servers, your data never leaves your device.",

  home_merge_title: "Merge PDFs",
  home_merge_desc: "Combine multiple PDF files into a single document",
  home_merge_step1: "Select PDF files",
  home_merge_step2: "Set the order",
  home_merge_step3: "Download merged PDF",
  home_merge_cta: "Merge now →",

  home_split_title: "Split PDF",
  home_split_desc: "Extract pages or page ranges from a PDF file",
  home_split_step1: "Select PDF file",
  home_split_step2: "Choose pages or range",
  home_split_step3: "Download split PDFs",
  home_split_cta: "Split now →",

  home_how_title: "How it works",
  home_step01_title: "Select files",
  home_step01_desc: "Drag & drop or click to select PDF files from your device.",
  home_step02_title: "Configure",
  home_step02_desc:
    "Sort files for merging or specify page ranges for splitting.",
  home_step03_title: "Download",
  home_step03_desc:
    "The result is generated directly in your browser and downloaded immediately.",

  merge_badge: "PDF Tool",
  merge_title: "Merge PDFs",
  merge_subtitle:
    "Combine multiple PDF files into a single document — processed entirely in your browser.",
  merge_step1_label: "Add files",
  merge_step2_label: "Sort",
  merge_step3_label: "Download",
  merge_drop_title: "Drop PDF files here",
  merge_drop_hint: "or click to browse",
  merge_files_selected_one: "1 file selected",
  merge_files_selected_other: "{count} files selected",
  merge_add_more: "+ Add more",
  merge_output_filename: "Output filename",
  merge_processing: "Processing… {progress}%",
  merge_reset: "← Reset",
  merge_btn: "Merge {count} PDFs →",
  merge_merging: "Merging…",
  merge_success_title: "Merge complete!",
  merge_success_desc: "Your PDF has been successfully merged.",
  merge_download_btn: "↓ Download {name}",
  merge_start_over: "Start over",
  merge_error_min_files: "Please add at least 2 PDF files.",
  merge_error_not_pdf: '"{name}" is not a PDF file.',
  merge_error_fail: "Could not merge PDFs.",

  split_badge: "PDF Tool",
  split_title: "Split PDF",
  split_subtitle:
    "Extract individual pages or page ranges — processed entirely in your browser.",
  split_step1_label: "Select file",
  split_step2_label: "Configure",
  split_step3_label: "Download",
  split_drop_title: "Drop PDF file here",
  split_drop_hint: "or click to browse",
  split_pages_one: "1 page",
  split_pages_other: "{count} pages",
  split_mode_label: "Split mode",
  split_mode_all: "Split every page",
  split_mode_all_desc: "Each page becomes its own PDF file ({count} files)",
  split_mode_range: "Extract page range",
  split_mode_range_desc: "Extract a consecutive range of pages",
  split_range_from: "From",
  split_range_to: "to",
  split_range_of: "of {total}",
  split_mode_custom: "Custom page selection",
  split_mode_custom_desc: "Specify individual pages and ranges (e.g. 1,3,5-7,9)",
  split_custom_placeholder: "e.g. 1,3,5-7",
  split_processing: "Processing… {progress}%",
  split_reset: "← Reset",
  split_btn: "Split PDF →",
  split_splitting: "Splitting…",
  split_success_title: "Split complete!",
  split_success_desc_one: "1 file ready to download.",
  split_success_desc_other: "{count} files ready to download.",
  split_download_file: "↓ Download",
  split_download_all: "↓ Download all ({count})",
  split_start_over: "Start over",
  split_error_not_pdf: '"{name}" is not a PDF file.',
  split_error_invalid_pdf:
    "Could not read the PDF. Please make sure it is a valid PDF file.",
  split_error_range: "Start page must be ≤ end page.",
  split_error_no_pages: "No valid pages specified. Format: 1,3,5-7",
  split_error_fail: "Could not split the PDF.",

  footer_text:
    "PDF Tool — All processing happens in your browser. No files are uploaded.",
};

const tr: Translations = {
  nav_brand: "PDF Aracı",
  nav_merge: "Birleştir",
  nav_split: "Böl",

  home_hero_badge: "Step Further",
  home_title: "PDF Birleştir\n& Böl",
  home_subtitle:
    "Birden fazla PDF dosyasını birleştirin veya tek tek sayfaları çıkarın — tamamen tarayıcınızda. Yükleme yok, sunucu yok, verileriniz cihazınızı terk etmez.",

  home_merge_title: "PDF Birleştir",
  home_merge_desc: "Birden fazla PDF dosyasını tek belgede birleştir",
  home_merge_step1: "PDF dosyalarını seç",
  home_merge_step2: "Sıralamayı belirle",
  home_merge_step3: "Birleştirilmiş PDF'i indir",
  home_merge_cta: "Şimdi birleştir →",

  home_split_title: "PDF Böl",
  home_split_desc: "Bir PDF dosyasından sayfa veya sayfa aralıkları çıkar",
  home_split_step1: "PDF dosyasını seç",
  home_split_step2: "Sayfaları veya aralığı seç",
  home_split_step3: "Bölünmüş PDF'leri indir",
  home_split_cta: "Şimdi böl →",

  home_how_title: "Nasıl çalışır",
  home_step01_title: "Dosya seç",
  home_step01_desc: "Sürükle & bırak veya tıklayarak cihazınızdan PDF dosyaları seçin.",
  home_step02_title: "Yapılandır",
  home_step02_desc:
    "Birleştirme için dosyaları sıralayın veya bölme için sayfa aralıklarını belirtin.",
  home_step03_title: "İndir",
  home_step03_desc:
    "Sonuç doğrudan tarayıcınızda oluşturulur ve hemen indirilir.",

  merge_badge: "PDF Aracı",
  merge_title: "PDF Birleştir",
  merge_subtitle:
    "Birden fazla PDF dosyasını tek belgede birleştir — tamamen tarayıcınızda işlenir.",
  merge_step1_label: "Dosya ekle",
  merge_step2_label: "Sırala",
  merge_step3_label: "İndir",
  merge_drop_title: "PDF dosyalarını buraya bırakın",
  merge_drop_hint: "veya göz atmak için tıklayın",
  merge_files_selected_one: "1 dosya seçildi",
  merge_files_selected_other: "{count} dosya seçildi",
  merge_add_more: "+ Daha fazla ekle",
  merge_output_filename: "Çıktı dosya adı",
  merge_processing: "İşleniyor… {progress}%",
  merge_reset: "← Sıfırla",
  merge_btn: "{count} PDF'i birleştir →",
  merge_merging: "Birleştiriliyor…",
  merge_success_title: "Birleştirme tamamlandı!",
  merge_success_desc: "PDF'iniz başarıyla birleştirildi.",
  merge_download_btn: "↓ İndir {name}",
  merge_start_over: "Başa dön",
  merge_error_min_files: "Lütfen en az 2 PDF dosyası ekleyin.",
  merge_error_not_pdf: '"{name}" bir PDF dosyası değil.',
  merge_error_fail: "PDF'ler birleştirilemedi.",

  split_badge: "PDF Aracı",
  split_title: "PDF Böl",
  split_subtitle:
    "Tek tek sayfaları veya sayfa aralıklarını çıkarın — tamamen tarayıcınızda işlenir.",
  split_step1_label: "Dosya seç",
  split_step2_label: "Yapılandır",
  split_step3_label: "İndir",
  split_drop_title: "PDF dosyasını buraya bırakın",
  split_drop_hint: "veya göz atmak için tıklayın",
  split_pages_one: "1 sayfa",
  split_pages_other: "{count} sayfa",
  split_mode_label: "Bölme modu",
  split_mode_all: "Her sayfayı böl",
  split_mode_all_desc: "Her sayfa kendi PDF dosyası olur ({count} dosya)",
  split_mode_range: "Sayfa aralığı çıkar",
  split_mode_range_desc: "Ardışık bir sayfa aralığını çıkarın",
  split_range_from: "Başlangıç",
  split_range_to: "bitiş",
  split_range_of: "/ {total}",
  split_mode_custom: "Özel sayfa seçimi",
  split_mode_custom_desc: "Tek tek sayfaları ve aralıkları belirtin (örn. 1,3,5-7,9)",
  split_custom_placeholder: "örn. 1,3,5-7",
  split_processing: "İşleniyor… {progress}%",
  split_reset: "← Sıfırla",
  split_btn: "PDF'i böl →",
  split_splitting: "Bölünüyor…",
  split_success_title: "Bölme tamamlandı!",
  split_success_desc_one: "1 dosya indirilmeye hazır.",
  split_success_desc_other: "{count} dosya indirilmeye hazır.",
  split_download_file: "↓ İndir",
  split_download_all: "↓ Tümünü indir ({count})",
  split_start_over: "Başa dön",
  split_error_not_pdf: '"{name}" bir PDF dosyası değil.',
  split_error_invalid_pdf:
    "PDF okunamadı. Lütfen geçerli bir PDF dosyası olduğundan emin olun.",
  split_error_range: "Başlangıç sayfası ≤ bitiş sayfası olmalıdır.",
  split_error_no_pages: "Geçerli sayfa belirtilmedi. Format: 1,3,5-7",
  split_error_fail: "PDF bölünemedi.",

  footer_text:
    "PDF Aracı — Tüm işlemler tarayıcınızda gerçekleşir. Hiçbir dosya yüklenmez.",
};

const uk: Translations = {
  nav_brand: "PDF Інструмент",
  nav_merge: "Об'єднати",
  nav_split: "Розділити",

  home_hero_badge: "Step Further",
  home_title: "Об'єднати та\nрозділити PDF",
  home_subtitle:
    "Об'єднайте кілька PDF-файлів або витягніть окремі сторінки — повністю у браузері. Без завантажень, без серверів, ваші дані не залишають пристрій.",

  home_merge_title: "Об'єднати PDF",
  home_merge_desc: "Об'єднати кілька PDF-файлів в один документ",
  home_merge_step1: "Вибрати PDF-файли",
  home_merge_step2: "Встановити порядок",
  home_merge_step3: "Завантажити об'єднаний PDF",
  home_merge_cta: "Об'єднати зараз →",

  home_split_title: "Розділити PDF",
  home_split_desc: "Витягти сторінки або діапазони сторінок з PDF-файлу",
  home_split_step1: "Вибрати PDF-файл",
  home_split_step2: "Вибрати сторінки або діапазон",
  home_split_step3: "Завантажити розділені PDF",
  home_split_cta: "Розділити зараз →",

  home_how_title: "Як це працює",
  home_step01_title: "Вибрати файли",
  home_step01_desc: "Перетягніть або клацніть, щоб вибрати PDF-файли з вашого пристрою.",
  home_step02_title: "Налаштувати",
  home_step02_desc:
    "Впорядкуйте файли для об'єднання або вкажіть діапазони сторінок для розділення.",
  home_step03_title: "Завантажити",
  home_step03_desc:
    "Результат генерується безпосередньо у браузері та одразу завантажується.",

  merge_badge: "PDF Інструмент",
  merge_title: "Об'єднати PDF",
  merge_subtitle:
    "Об'єднайте кілька PDF-файлів в один документ — обробка повністю у браузері.",
  merge_step1_label: "Додати файли",
  merge_step2_label: "Сортувати",
  merge_step3_label: "Завантажити",
  merge_drop_title: "Перетягніть PDF-файли сюди",
  merge_drop_hint: "або клацніть для перегляду",
  merge_files_selected_one: "1 файл вибрано",
  merge_files_selected_other: "{count} файли(-ів) вибрано",
  merge_add_more: "+ Додати ще",
  merge_output_filename: "Ім'я вихідного файлу",
  merge_processing: "Обробка… {progress}%",
  merge_reset: "← Скинути",
  merge_btn: "Об'єднати {count} PDF →",
  merge_merging: "Об'єднання…",
  merge_success_title: "Об'єднання завершено!",
  merge_success_desc: "Ваш PDF успішно об'єднано.",
  merge_download_btn: "↓ Завантажити {name}",
  merge_start_over: "Почати заново",
  merge_error_min_files: "Будь ласка, додайте принаймні 2 PDF-файли.",
  merge_error_not_pdf: '"{name}" не є PDF-файлом.',
  merge_error_fail: "Не вдалося об'єднати PDF.",

  split_badge: "PDF Інструмент",
  split_title: "Розділити PDF",
  split_subtitle:
    "Витягніть окремі сторінки або діапазони сторінок — обробка повністю у браузері.",
  split_step1_label: "Вибрати файл",
  split_step2_label: "Налаштувати",
  split_step3_label: "Завантажити",
  split_drop_title: "Перетягніть PDF-файл сюди",
  split_drop_hint: "або клацніть для перегляду",
  split_pages_one: "1 сторінка",
  split_pages_other: "{count} сторінок(-и)",
  split_mode_label: "Режим розділення",
  split_mode_all: "Розділити кожну сторінку",
  split_mode_all_desc: "Кожна сторінка стає окремим PDF-файлом ({count} файли)",
  split_mode_range: "Витягти діапазон сторінок",
  split_mode_range_desc: "Витягти послідовний діапазон сторінок",
  split_range_from: "Від",
  split_range_to: "до",
  split_range_of: "з {total}",
  split_mode_custom: "Вибір сторінок вручну",
  split_mode_custom_desc: "Вкажіть окремі сторінки та діапазони (напр. 1,3,5-7,9)",
  split_custom_placeholder: "напр. 1,3,5-7",
  split_processing: "Обробка… {progress}%",
  split_reset: "← Скинути",
  split_btn: "Розділити PDF →",
  split_splitting: "Розділення…",
  split_success_title: "Розділення завершено!",
  split_success_desc_one: "1 файл готовий до завантаження.",
  split_success_desc_other: "{count} файли(-ів) готові до завантаження.",
  split_download_file: "↓ Завантажити",
  split_download_all: "↓ Завантажити всі ({count})",
  split_start_over: "Почати заново",
  split_error_not_pdf: '"{name}" не є PDF-файлом.',
  split_error_invalid_pdf:
    "Не вдалося прочитати PDF. Переконайтеся, що це дійсний PDF-файл.",
  split_error_range: "Початкова сторінка має бути ≤ кінцевої сторінки.",
  split_error_no_pages: "Не вказано дійсних сторінок. Формат: 1,3,5-7",
  split_error_fail: "Не вдалося розділити PDF.",

  footer_text:
    "PDF Інструмент — Вся обробка відбувається у вашому браузері. Файли не завантажуються.",
};

const ru: Translations = {
  nav_brand: "PDF Инструмент",
  nav_merge: "Объединить",
  nav_split: "Разделить",

  home_hero_badge: "Step Further",
  home_title: "Объединить и\nразделить PDF",
  home_subtitle:
    "Объединяйте несколько PDF-файлов или извлекайте отдельные страницы — полностью в браузере. Без загрузок, без серверов, ваши данные не покидают устройство.",

  home_merge_title: "Объединить PDF",
  home_merge_desc: "Объединить несколько PDF-файлов в один документ",
  home_merge_step1: "Выбрать PDF-файлы",
  home_merge_step2: "Установить порядок",
  home_merge_step3: "Скачать объединённый PDF",
  home_merge_cta: "Объединить сейчас →",

  home_split_title: "Разделить PDF",
  home_split_desc: "Извлечь страницы или диапазоны страниц из PDF-файла",
  home_split_step1: "Выбрать PDF-файл",
  home_split_step2: "Выбрать страницы или диапазон",
  home_split_step3: "Скачать разделённые PDF",
  home_split_cta: "Разделить сейчас →",

  home_how_title: "Как это работает",
  home_step01_title: "Выбрать файлы",
  home_step01_desc: "Перетащите или нажмите, чтобы выбрать PDF-файлы с вашего устройства.",
  home_step02_title: "Настроить",
  home_step02_desc:
    "Упорядочьте файлы для объединения или укажите диапазоны страниц для разделения.",
  home_step03_title: "Скачать",
  home_step03_desc:
    "Результат создаётся прямо в браузере и сразу скачивается.",

  merge_badge: "PDF Инструмент",
  merge_title: "Объединить PDF",
  merge_subtitle:
    "Объединить несколько PDF-файлов в один документ — обработка полностью в браузере.",
  merge_step1_label: "Добавить файлы",
  merge_step2_label: "Сортировать",
  merge_step3_label: "Скачать",
  merge_drop_title: "Перетащите PDF-файлы сюда",
  merge_drop_hint: "или нажмите для выбора",
  merge_files_selected_one: "1 файл выбран",
  merge_files_selected_other: "{count} файла(-ов) выбрано",
  merge_add_more: "+ Добавить ещё",
  merge_output_filename: "Имя выходного файла",
  merge_processing: "Обработка… {progress}%",
  merge_reset: "← Сбросить",
  merge_btn: "Объединить {count} PDF →",
  merge_merging: "Объединение…",
  merge_success_title: "Объединение завершено!",
  merge_success_desc: "Ваш PDF успешно объединён.",
  merge_download_btn: "↓ Скачать {name}",
  merge_start_over: "Начать заново",
  merge_error_min_files: "Пожалуйста, добавьте не менее 2 PDF-файлов.",
  merge_error_not_pdf: '"{name}" не является PDF-файлом.',
  merge_error_fail: "Не удалось объединить PDF.",

  split_badge: "PDF Инструмент",
  split_title: "Разделить PDF",
  split_subtitle:
    "Извлекайте отдельные страницы или диапазоны страниц — обработка полностью в браузере.",
  split_step1_label: "Выбрать файл",
  split_step2_label: "Настроить",
  split_step3_label: "Скачать",
  split_drop_title: "Перетащите PDF-файл сюда",
  split_drop_hint: "или нажмите для выбора",
  split_pages_one: "1 страница",
  split_pages_other: "{count} страниц(-ы)",
  split_mode_label: "Режим разделения",
  split_mode_all: "Разделить каждую страницу",
  split_mode_all_desc: "Каждая страница становится отдельным PDF-файлом ({count} файла)",
  split_mode_range: "Извлечь диапазон страниц",
  split_mode_range_desc: "Извлечь последовательный диапазон страниц",
  split_range_from: "От",
  split_range_to: "до",
  split_range_of: "из {total}",
  split_mode_custom: "Выбор страниц вручную",
  split_mode_custom_desc: "Укажите отдельные страницы и диапазоны (напр. 1,3,5-7,9)",
  split_custom_placeholder: "напр. 1,3,5-7",
  split_processing: "Обработка… {progress}%",
  split_reset: "← Сбросить",
  split_btn: "Разделить PDF →",
  split_splitting: "Разделение…",
  split_success_title: "Разделение завершено!",
  split_success_desc_one: "1 файл готов к скачиванию.",
  split_success_desc_other: "{count} файла(-ов) готово к скачиванию.",
  split_download_file: "↓ Скачать",
  split_download_all: "↓ Скачать все ({count})",
  split_start_over: "Начать заново",
  split_error_not_pdf: '"{name}" не является PDF-файлом.',
  split_error_invalid_pdf:
    "Не удалось прочитать PDF. Убедитесь, что это действительный PDF-файл.",
  split_error_range: "Начальная страница должна быть ≤ конечной страницы.",
  split_error_no_pages: "Не указаны допустимые страницы. Формат: 1,3,5-7",
  split_error_fail: "Не удалось разделить PDF.",

  footer_text:
    "PDF Инструмент — Вся обработка происходит в вашем браузере. Файлы не загружаются.",
};

export const translations: Record<Locale, Translations> = { de, en, tr, uk, ru };
