import Header from "../../../components/header"
import RaiseTicketForm from "../../../components/tickets/RaiseTicketForm"
import Footer from "../../../components/footer"

export const metadata = { title: "Raise Ticket • Yombly" }

export default function Page() {
  return (
<>
 <Header/>

   <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-balance text-3xl font-bold tracking-tight">Raise a Support Ticket</h1>
        <p className="mt-2 opacity-80">Submit your issue and receive a YOMBLY ticket ID for tracking.</p>
      </header>
      <RaiseTicketForm />
    </main>
 <Footer/>
</>
  )
}
