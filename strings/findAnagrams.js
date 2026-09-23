function findAnagrams(s: string, p: string): number[] {
 let result: number[] = []
 if (p.length > s.length) return result

 let need = new Array(26).fill(0)
 let window = new Array(26).fill(0)

 let Index = (ch: string) => ch.charCodeAt(0) - "a".charCodeAt(0)

 for (let i = 0; i < p.length; i++) {
 need[Index(p[i])]++
 }
 for (let i = 0; i < p.length; i++) {
 window[Index(s[i])]++
 }

 if(isEqual(need, window)){
 result.push(0)
 }

 for(let right =p.length; right<s.length; right++){
 window[Index(s[right])]++

 window[Index(s[right - p.length])]--

 if(isEqual(need, window)){
 result.push(right-p.length+1)
 }
 }
 return result
};

function isEqual(a:number[], b:number[]):boolean{
 for(let i=0; i<26; i++){
 if(a[i] !== b[i]) return false
 }

 return true
}
