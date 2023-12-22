import Card from "@/component/Card"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex justify-center pt-10">
        <Card src="/images/person.jpg" alt="Person" textarea="About Me" />
        <Card src="/images/projects.jpg" alt="QuestionMark" textarea="Projects" />
      </div>
    </main>
  )
}
