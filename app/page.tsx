import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
  return (
    <main className="min-h-screen p-8 bg-background">
      {/* Hero Section */}
      <section className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Your Name</h1>
        <p className="text-muted-foreground text-xl mb-8">Frontend Developer</p>
        <Button size="lg">Contact Me</Button>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-16">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
            <CardDescription>My Journey & Skills</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Your professional summary here...</p>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Project 1</CardTitle>
              <CardDescription>Technologies used</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Project description...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project 2</CardTitle>
              <CardDescription>Technologies used</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Project description...</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-16">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Let's connect!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button variant="outline">GitHub</Button>
              <Button variant="outline">LinkedIn</Button>
              <Button variant="outline">Email</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
