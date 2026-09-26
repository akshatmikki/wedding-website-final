/* Static markup (server component). Dynamic parts (#count, #sched, #arch, chat...) initWedding() bharta hai. */
export default function WeddingMarkup() {
  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <symbol id="orn" viewBox="0 0 190 16"><path d="M0 8H74M116 8H190" stroke="#C8A45C" strokeWidth="1"/><path d="M95 1L104 8L95 15L86 8Z" fill="none" stroke="#C8A45C" strokeWidth="1.2"/><circle cx="78" cy="8" r="2" fill="#C8A45C"/><circle cx="112" cy="8" r="2" fill="#C8A45C"/></symbol>
        </defs>
      </svg>

      <div id="intro" role="dialog" aria-label="Shaadi ka nimantran">
        <div className="pn t"></div><div className="pn b"></div>
        <div className="emb">
          <svg viewBox="0 0 150 150" aria-hidden="true"><circle cx="75" cy="75" r="72" fill="none" stroke="#C8A45C" strokeWidth="1"/><circle cx="75" cy="75" r="66" fill="none" stroke="#C8A45C" strokeWidth=".6" strokeDasharray="1.5 4"/><text x="75" y="88" textAnchor="middle" fontFamily="Bodoni Moda,Georgia,serif" fontStyle="italic" fontSize="44" fill="#E6CF9A">A&#160;&amp;&#160;K</text></svg>
          <div className="sv">॥ श्री गणेशाय नमः ॥</div>
          <div className="nm">Aarohi &amp; Kabir</div>
          <div className="sub">Shubh Vivah ka nimantran</div>
          <button className="gbtn" id="openBtn" type="button">Invitation kholein</button>
        </div>
      </div>

      <button className="mus" id="mus" type="button" aria-pressed="false">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z"/><path id="wave" d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>
        <span id="musT">Music off</span>
      </button>


      <header className="hero bleed on-em grainy" id="top"><div className="garland" aria-hidden="true"></div><div className="bokeh" aria-hidden="true"><i style={{ left: '6%', top: '30%', width: '60px', height: '60px', animationDelay: '-1s' }}></i><i style={{ left: '18%', top: '72%', width: '90px', height: '90px', animationDelay: '-3s' }}></i><i style={{ left: '34%', top: '16%', width: '46px', height: '46px', animationDelay: '-5s' }}></i><i style={{ left: '48%', top: '60%', width: '70px', height: '70px', animationDelay: '-2s' }}></i><i style={{ left: '58%', top: '10%', width: '110px', height: '110px', animationDelay: '-6s' }}></i><i style={{ left: '70%', top: '80%', width: '64px', height: '64px', animationDelay: '-4s' }}></i><i style={{ left: '84%', top: '26%', width: '86px', height: '86px', animationDelay: '-7s' }}></i><i style={{ left: '92%', top: '62%', width: '50px', height: '50px', animationDelay: '-1s' }}></i><i style={{ left: '40%', top: '88%', width: '54px', height: '54px', animationDelay: '-8s' }}></i><i style={{ left: '76%', top: '45%', width: '44px', height: '44px', animationDelay: '-3s' }}></i></div><canvas id="petals" aria-hidden="true"></canvas>
        <div className="in">
          <div className="htext">
            <p className="shk">॥ श्री गणेशाय नमः ॥</p>
            <h1 className="names foil" aria-label="Somya weds Aman"><span>Somya</span><em>weds</em><span>Aman</span></h1>
            <div className="hmeta"><span><b>27</b> January 2027</span><span>Ravivaar</span><span id="heroPlace"></span></div>
            <p className="lead">Do dil, do parivaar, ek jashn. Hamare naye safar mein aap sab ka aashirwad chahiye. Aaiye, haldi lagayein, dhol pe naachein aur baraat ke saath jhoomein.</p>
            <div className="count" id="count"></div>
          </div>
          <div className="arch" id="arch"></div>
        </div>
      </header>

      <section className="letter bleed" id="parivaar">
        <div className="in">
          <div className="kick">Sneh nimantran</div>
          <h2 id="letterH"></h2>
          <svg className="orn" aria-hidden="true"><use href="#orn"/></svg>
          <div className="fam">
            <div><div className="rel">Dulhan ke parivaar se</div><div className="who" id="famB"></div><p id="famBt"></p></div>
            <div><div className="rel">Dulha ke parivaar se</div><div className="who" id="famG"></div><p id="famGt"></p></div>
          </div>
        </div>
      </section>


      <section className="cpl bleed" id="couple">
        <div className="in">
          <div className="sec-h"><div className="kick">Milaiye</div><h2 id="cplH">Dulha aur Dulhan</h2></div>
          <div className="row">
            <div className="pp" id="ppB"></div>
            <div className="amp" aria-hidden="true">&amp;</div>
            <div className="pp" id="ppG"></div>
          </div>
        </div>
      </section>


      <section className="sched bleed on-em grainy" id="events">
        <div className="in">
          <div className="sec-h">
            <div className="kick">Teen din, chhe jashn</div>
            <h2 className="foil">Shaadi ke Rang</h2>
            <p>Har function ki apni rasam, apna rang aur apna mazaa. Time aur dress code dekh kar taiyaar ho jaaiye.</p>
          </div>
          <div id="sched"></div>
        </div>
      </section>

      <section className="venue bleed on-em grainy" id="venue">
        <div className="in grid">
          <div>
            <div className="kick">Padhaariye</div>
            <h2 id="vName"></h2>
            <p className="addr" id="vAddr"></p>
            <div className="acts"><a className="gbtn solid" id="vMap" href="#" target="_blank" rel="noopener">Google Maps pe dekhein</a><a className="gbtn" id="cal" href="#" target="_blank" rel="noopener">Calendar mein jodein</a></div>
          </div>
          <div className="info" id="info"></div>
        </div>
      </section>


      <footer className="fin bleed on-em grainy" id="contact">
        <div className="in">
          <div className="kick">Kuch poochna hai?</div>
          <p>Neeche wale chatbot se pooch lijiye, ya seedha parivaar se baat kar lijiye.</p>
          <div className="nums" id="nums"></div>
          <svg className="orn" aria-hidden="true"><use href="#orn"/></svg>
          <div className="sig foil">Aarohi &amp; Kabir</div>
          <p>Dhanyavaad. Milte hain shaadi mein.</p>
        </div>
      </footer>

      <button className="fab" id="fab" aria-expanded="false" aria-controls="chat">Poochiye</button>
      <div className="chat" id="chat" hidden role="dialog" aria-label="Shaadi chatbot">
        <div className="chat-h"><div><b>Shaadi Sahayak</b><small>Hinglish mein sawaal poochiye</small></div><button id="close" aria-label="Chatbot band karein">&times;</button></div>
        <div className="msgs" id="msgs" aria-live="polite"></div>
        <div className="chips" id="chips"></div>
        <form id="form" autoComplete="off"><input id="inp" placeholder="Yahan likhiye..." aria-label="Apna sawaal likhiye" /><button type="submit">Bhejein</button></form>
      </div>
    </>
  );
}
