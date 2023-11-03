const { db } = require('@vercel/postgres');

async function seedInvoices() {
  const client = await db.connect();

  try {
    await client.sql`UPDATE customers SET email = 'lauta@asdas.com' WHERE email = 'lee@robinson.com'`;
    console.log('AD')
    client.end()

  }
  catch (e) {
    console.log(e)
  }

}
seedInvoices()