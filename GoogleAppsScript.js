/**
 * 구글 스프레드시트의 도구 > Apps Script에 붙여넣을 코드입니다.
 * 
 * 기능:
 * 1. React 앱에서 전송한 학생들의 MBTI 결과를 수신합니다.
 * 2. 'mbti_01' 시트에 제출 시간, 이름, MBTI 결과 및 세부 점수를 저장합니다.
 * 3. 시트가 없을 경우 자동으로 생성하고 첫 행에 제목(헤더)을 추가합니다.
 */

function doPost(e) {
  try {
    var jsonString = e.postData.contents;
    var data = JSON.parse(jsonString);
    
    // 시트 이름 설정 ('mbti_01')
    var sheetName = "mbti_01";
    // 스프레드시트 ID를 사용하여 확실하게 객체를 가져옵니다.
    var ss = SpreadsheetApp.openById("1X3WvOu2g2of-12KGBGNCM16vg41q7d2GB0K7bnDmpSQ");
    var sheet = ss.getSheetByName(sheetName);
    
    // 시트가 없으면 새로 생성
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }
    
    // 첫 행이 비어있으면 헤더 작성
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "제출 시간", 
        "이름", 
        "MBTI 결과", 
        "E (외향)", 
        "I (내향)", 
        "S (감각)", 
        "N (직관)", 
        "T (사고)", 
        "F (감정)", 
        "J (판단)", 
        "P (인식)"
      ]);
    }
    
    var timestamp = new Date();
    var name = data.name || "익명";
    var result = data.result || "";
    var scores = data.scores || {};
    
    // 데이터 행 생성
    var rowData = [
      timestamp,
      name,
      result,
      scores.E || 0,
      scores.I || 0,
      scores.S || 0,
      scores.N || 0,
      scores.T || 0,
      scores.F || 0,
      scores.J || 0,
      scores.P || 0
    ];
    
    sheet.appendRow(rowData);
    
    // 성공 응답 반환
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // 에러 응답 반환
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 스크립트 연결 확인용 GET 핸들러
function doGet(e) {
  return ContentService.createTextOutput("MBTI 구글 앱스 스크립트가 정상 동작 중입니다.");
}
