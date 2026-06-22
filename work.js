// find time spent ona  project on CARDS

let hrs = 0, mins = 0, secs = 0;

$(".timeSelectArea > div[data-donotautocommit]").each((i, el) => {
  const str = $(el).data("val") || "";

  const hMatch = str.match(/(\d+)\s*h/);
  const mMatch = str.match(/(\d+)\s*m/);
  const sMatch = str.match(/(\d+)\s*s/);

  const h = hMatch ? Number(hMatch[1]) : 0;
  const m = mMatch ? Number(mMatch[1]) : 0;
  const s = sMatch ? Number(sMatch[1]) : 0;

  hrs += h;
  mins += m;
  secs += s;
});

mins += Math.floor(secs / 60);
secs %= 60;

hrs += Math.floor(mins / 60);
mins %= 60;



console.log(`HOURS: ${hrs} || MINUTES: ${mins} || SECONDS: ${secs}`);
