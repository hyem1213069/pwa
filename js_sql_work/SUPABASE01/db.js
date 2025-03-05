import { createClient } from "@supabase/supabase-js";

const supabaseUrl="https://wunmezoxjspgtstkpgwv.supabase.co";
const supabasePassword="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1bm1lem94anNwZ3RzdGtwZ3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwMTgsImV4cCI6MjA1NTAwMTAxOH0.MoL5es2vyhmm-WyRx585rgd6he-zn5I3YopLrdHQ4cc";

const supabase = createClient(supabaseUrl, supabasePassword);

export async function user_select(){
    const res = await supabase
    .from('users')
    .select();
    console.log(res);
}
export async function user_insert(name,email){
    const res = await supabase
    .from('users')
    .insert([{ name, email}]);
    console.log(res);
}
export async function user_update(name, email){
    const res = await supabase
    .from('users')
    .update({name})
    .eq('email', email);
    console.log(res);
}
export async function user_delaet(email){
    const res = await supabase
    .from('users')
    .delete()
    .eq('email', email);
    console.log(res);
}