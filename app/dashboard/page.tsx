import { fetchLatestInvoices, fetchRevenue } from "../lib/data"
import LatestInvoices from "../ui/dashboard/latest-invoices"
import RevenueChart from "../ui/dashboard/revenue-chart"
import { lusitana } from "../ui/font"

async function Page() {
  const revenue = await fetchRevenue()
  const latestInvoices = await fetchLatestInvoices()

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2x1`}>
        Dashboard
      </h1>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      </section>

      <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-6 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </section>
    </main>
  )
}

export default Page