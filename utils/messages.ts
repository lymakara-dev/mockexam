export async function getMessages(locale: string) {
  const messages: any = {
    en: {
      descriptive1: "Description in English 1",
      descriptive2: "Description in English 2",
      descriptive3: "Description in English 3",
      descriptive4: "Description in English 4",
      Contect: "Contact",
      Recommendation: "Recommendation",
      comment: "Leave a comment",
      Submit: "Submit",
      Copyright: "© 2025 Your Company. All rights reserved.",
    },
    kh: {
      descriptive1: "Description in Khmer 1",
      descriptive2: "Description in Khmer 2",
      descriptive3: "Description in Khmer 3",
      descriptive4: "Description in Khmer 4",
      Contect: "ទំនាក់ទំនង",
      Recommendation: "ការណែនាំ",
      comment: "ទុកមតិយោបល់",
      Submit: "ដាក់ស្នើ",
      Copyright: "© 2025 ក្រុមហ៊ុនរបស់អ្នក។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    },
  };

  return messages[locale] || messages.en;
}
