// ============================================================
// Google Apps Script — axiomate contact-form handler
//
// Receives form submissions, logs them to a Google Sheet,
// and emails a notification.
//
// SETUP (5 minutes):
//
// 1. Create a Google Sheet:
//    - Go to https://sheets.google.com → Blank spreadsheet
//    - Copy the Sheet ID from the URL:
//      https://docs.google.com/spreadsheets/d/THIS_PART_IS_THE_ID/edit
//
// 2. Create the Apps Script:
//    - Go to https://script.google.com → New project
//    - Delete the default code in Code.gs
//    - Paste this entire file
//    - Update NOTIFICATION_EMAIL and SHEET_ID below
//
// 3. Deploy:
//    - Click Deploy → New deployment
//    - Type: Web app
//    - Execute as: Me
//    - Who has access: Anyone
//    - Click Deploy, then authorize when prompted
//    - Copy the Web app URL
//
// 4. Connect to the website:
//    - Paste the URL into src/data/content.ts →
//      site.contact.googleScriptUrl
//
// That's it — form submissions now land in your Sheet and inbox.
// ============================================================

const NOTIFICATION_EMAIL = "akworks247@gmail.com";
const SHEET_ID = "YOUR_GOOGLE_SHEET_ID";
const SHEET_NAME = "Form Submissions";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // Honeypot — real users never fill this
    if (data.botcheck) {
      return jsonResponse({ success: false, message: "Rejected" });
    }

    var timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
    var name = data.name || "";
    var email = data.email || "";
    var company = data.company || "";
    var interest = data.interest || "";
    var message = data.message || "";

    // --- Log to Google Sheet ---
    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Email",
        "Company",
        "Interest",
        "Message",
      ]);
      sheet.getRange(1, 1, 1, 6).setFontWeight("bold");
    }
    sheet.appendRow([timestamp, name, email, company, interest, message]);

    // --- Send email notification ---
    var subject = "axiomate inquiry from " + name + " — " + interest;
    var body = [
      "New contact form submission on axiomate.tech",
      "",
      "Name:        " + name,
      "Email:       " + email,
      "Company:     " + (company || "—"),
      "Interest:    " + interest,
      "",
      "Message:",
      message,
      "",
      "---",
      "Submitted: " + timestamp,
    ].join("\n");

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      body: body,
      replyTo: email,
    });

    return jsonResponse({ success: true, message: "Message sent" });
  } catch (err) {
    return jsonResponse({ success: false, message: "Server error" });
  }
}

function doGet() {
  return jsonResponse({ success: true, message: "Form handler is live" });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
