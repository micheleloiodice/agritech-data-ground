/**
 * Configurazione del sito.
 *
 * Chiave Web3Forms (https://web3forms.com): è una chiave *pubblica* pensata per
 * i siti statici. Identifica solo la casella email di destinazione e non
 * permette di leggere nulla, quindi può stare tranquillamente nel codice.
 *
 * Come ottenerla: su web3forms.com inserisci info@studioagrotech.it, conferma
 * il link ricevuto via email e copia la "Access Key".
 *
 * Puoi impostarla in due modi (vince il primo valorizzato):
 *  1. variabile d'ambiente VITE_WEB3FORMS_ACCESS_KEY: file .env.local in locale,
 *     oppure su GitHub → Settings → Secrets and variables → Actions → Variables
 *     (la usa il workflow di deploy);
 *  2. incollandola direttamente nella costante DEFAULT_ACCESS_KEY qui sotto.
 */
const DEFAULT_ACCESS_KEY = "";

export const SITE = {
  name: "Studio Tecnico Agrotech",
  url: "https://micheleloiodice.it",
  email: "info@studioagrotech.it",
  web3formsAccessKey:
    (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined)?.trim() ||
    DEFAULT_ACCESS_KEY,
} as const;
