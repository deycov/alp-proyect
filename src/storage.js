const APP_URL = "NATURE_APP";

const getLocalStorageInfo = () => {
  let natureAppInfo = []
  const storageData = localStorage.getItem(APP_URL);

  if(!storageData)
    return natureAppInfo;
  else{
    natureAppInfo = JSON.parse(storageData); 

    return natureAppInfo;
  }
}

const setLocalStorageInfo = (params) => {
  const db = getLocalStorageInfo();
  const str = JSON.stringify([...db, params]);
  localStorage.setItem(APP_URL, str);
}