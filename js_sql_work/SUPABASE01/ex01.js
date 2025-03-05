// require() => commonjs BackEnd
// import from => module.js FrontEnd

import { createInterface } from "readline/promises";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl="https://wunmezoxjspgtstkpgwv.supabase.co";
const supabasePassword="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1bm1lem94anNwZ3RzdGtwZ3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwMTgsImV4cCI6MjA1NTAwMTAxOH0.MoL5es2vyhmm-WyRx585rgd6he-zn5I3YopLrdHQ4cc";

const supabase = createClient(supabaseUrl, supabasePassword);

const res = await supabase.from('users').select();
console.log(res);

// const res= await supabase
//             .from('users')
//             .insert([{name:'aaa', email: 'aaa@naver.com'}]);
// console.log(res);

// const {status, statusText}= res;
// console.log(status);
// console.log(statusText);

// console.log(supabase);

// const rl=createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// const name = await rl.question('이름뭐여');
// console.log(`name ${name}`);

// rl.close();