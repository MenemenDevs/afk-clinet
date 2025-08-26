import mineflayer from 'mineflayer';
import readline from 'readline';
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

let bot;

function makeBot() {
  bot = mineflayer.createBot({
    host: config.server.host,
    port: config.server.port,
    username: config.account.username,
    auth: config.account.auth,
    version: config.server.version
  });

  globalThis.currentBot = bot;

  bot.on('login', () => {
    console.log('Bot sunucuya bağlandı! AFK mod aktif.');
    startAfk();
  });

  bot.on('end', () => {
    console.log('[END] Bağlantı koptu. Yeniden bağlanılıyor...');
    if (config.reconnect.enabled) {
      const delay = Math.floor(Math.random() * (config.reconnect.maxDelayMs - config.reconnect.minDelayMs) + config.reconnect.minDelayMs);
      setTimeout(makeBot, delay);
    }
  });

  bot.on('error', (err) => {
    console.log('[ERROR]', err.message);
  });
}

// ---- AFK mod ----
function startAfk() {
  if (!bot) return;

  setInterval(() => {
    if (config.antiAfk.rotate) bot.setControlState('right', true); setTimeout(()=>bot.setControlState('right', false), 500);
    if (config.antiAfk.jump) bot.setControlState('jump', true); setTimeout(()=>bot.setControlState('jump', false), 500);
    if (config.antiAfk.swing) bot.swingArm();
    if (config.antiAfk.randomWalk) bot.setControlState('forward', true); setTimeout(()=>bot.setControlState('forward', false), 1000);
  }, config.antiAfk.intervalMs);
}

// ---- Terminalden komut gönderme ----
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  if (!globalThis.currentBot) return;
  globalThis.currentBot.chat(input);
});

makeBot();
