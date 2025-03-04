const defaultSettings = {
    volume: 50,
    brightness: 70,
    name: "홍길동"
  };
  
  const userSettings = {
    brightness: 90,
    theme: 'dark'
  };
  
  const settings = { ...defaultSettings, ...userSettings };
  
  console.log(settings);
  // { volume: 50, brightness: 90, theme: 'dark' }

  const a = 10;
  // a= 20

  const b ={};
  b.a=10;
  console.log(b);
  
  // b:30
  