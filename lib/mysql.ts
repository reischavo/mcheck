import mysql from "mysql2/promise";

// Veritabanı bağlantı havuzu
const pools: Record<string, mysql.Pool> = {};

function getPool(database: string): mysql.Pool {
  if (!pools[database]) {
    pools[database] = mysql.createPool({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: database,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return pools[database];
}

// GSM Sorgulama
export async function queryGsm(gsm: string) {
  const pool = getPool("gsm");
  const [rows] = await pool.execute(
    "SELECT * FROM gsm WHERE gsm = ? LIMIT 1",
    [gsm]
  );
  return rows;
}

// Vesika Sorgulama
export async function queryVesika(tc: string) {
  const pool = getPool("400k_vesika");
  const [rows] = await pool.execute(
    "SELECT * FROM 400k_vesika WHERE tc = ? LIMIT 1",
    [tc]
  );
  return rows;
}

// Seçmen Sorgulama
export async function querySecmen(tc: string) {
  const pool = getPool("secmen2015");
  const [rows] = await pool.execute(
    "SELECT * FROM secmen2015 WHERE tc = ? LIMIT 1",
    [tc]
  );
  return rows;
}

// Adres Sorgulama (veri klasörünü kontrol etmek gerekiyor)
export async function queryAdres(query: string) {
  const pool = getPool("adres");
  // Tablo adını kontrol etmek gerekiyor
  const [rows] = await pool.execute(
    "SELECT * FROM adres WHERE tc = ? OR adres LIKE ? LIMIT 10",
    [query, `%${query}%`]
  );
  return rows;
}
