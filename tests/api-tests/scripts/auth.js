// Esempio: pre-request per ottenere token e salvarlo come variabile
// Imposta in una richiesta iniziale nel tab Pre-request Script
pm.sendRequest({
  url: pm.environment.get('baseUrl_users') + '/auth/login',
  method: 'POST',
  header: { 'Content-Type': 'application/json' },
  body: { mode: 'raw', raw: JSON.stringify({ email: pm.variables.get('email'), password: pm.variables.get('password') }) }
}, function (err, res) {
  if (!err && res.code === 200) {
    var json = res.json();
    pm.environment.set('token', json.token);
  }
});