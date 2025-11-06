import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <FileQuestion className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-4xl font-bold mb-2">Tutorial Not Found</h1>
        <p className="text-muted-foreground mb-6">The tutorial you're looking for doesn't exist yet.</p>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}
