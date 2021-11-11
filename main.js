function onFormSubmit(e) {
  const data = {};
  const formResponses = e.response;
  const itemResponses = formResponses.getItemResponses();
  data["email"] = formResponses.getRespondentEmail();

  for (let i = 0; i < itemResponses.length; i++) {
    let itemResponse = itemResponses[i];
    data[itemResponse.getItem().getTitle()] = itemResponse.getResponse();
  }

  const folderid = '[OUTPUT_FOLDER]';
  const storagefolder = DriveApp.getFolderById(folderid);
  const folders = storagefolder.getFolders();
  let targetfolder;
  while (folders.hasNext()) {
    const folder = folders.next();
    if(data["利用日"] === folder.getName()){
      targetfolder = DriveApp.getFolderById(folder.getId());
    }
  }

  const file = DriveApp.getFileById(data["提出書類"]);

  // INIADメールから学籍番号を取り出す
  student_num = '1F' + data["email"].substr(3,8);
  const fileName = `検温記録シート_${student_num}`;
  
  if(file) {
    file.setName(fileName);
    targetfolder.createFile(file);
  }
}
