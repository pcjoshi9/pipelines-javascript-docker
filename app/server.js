'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello!! Wimbledon is considered the world's premier tennis tournament and the priority of the Club is to maintain its leadership. To that end a long-term plan was unveiled in 1993, intended to improve the quality of the event for spectators, players, officials and neighbours.[15] Stage one (1994–1997) of the plan was completed for the 1997 championships and involved building the new No. 1 Court in Aorangi Park, a broadcast centre, two extra grass courts and a tunnel under the hill linking Church Road and Somerset Road. Stage two (1997–2009) involved the removal of the old No. 1 Court complex to make way for the new Millennium Building, providing extensive facilities for players, press, officials and members, and the extension of the West Stand of the Centre Court with 728 extra seats. Stage three (2000–2011) has been completed with the construction of an entrance building, club staff housing, museum, bank and ticket office \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
