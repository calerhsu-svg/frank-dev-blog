import Stripe from 'stripe'
import { readFileSync } from 'fs'
import { join } from 'path'

const PAID_COURSES = ['perf-course', 'arch-course', 'fullgame-course']
const VALID_LANGS = ['tw', 'jp', 'cn', 'ph']

export default async (req) => {
  const url = new URL(req.url)
  const sessionId = url.searchParams.get('session_id')

  if (!sessionId) {
    return new Response(JSON.stringify({ error: 'missing session_id' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const stripeKey = Netlify.env.get('STRIPE_SECRET_KEY')
  if (!stripeKey) {
    return new Response(JSON.stringify({ error: 'payment service not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const stripe = new Stripe(stripeKey)

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return new Response(JSON.stringify({ error: 'payment not completed' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Parse client_reference_id: format is "course_lang" e.g. "perf-course_tw"
    const ref = session.client_reference_id || ''
    const lastUnderscore = ref.lastIndexOf('_')
    if (lastUnderscore === -1) {
      return new Response(JSON.stringify({ error: 'invalid reference' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const courseId = ref.substring(0, lastUnderscore)
    const lang = ref.substring(lastUnderscore + 1)

    if (!PAID_COURSES.includes(courseId)) {
      return new Response(JSON.stringify({ error: 'invalid course' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    if (!VALID_LANGS.includes(lang)) {
      return new Response(JSON.stringify({ error: 'invalid language' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Read the course HTML file
    const filePath = join(process.cwd(), 'downloads', lang, `${courseId}.html`)
    let html
    try {
      html = readFileSync(filePath, 'utf-8')
    } catch {
      return new Response(JSON.stringify({ error: 'course file not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Disposition': `inline; filename="${courseId}-${lang}.html"`
      }
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'verification failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

export const config = {
  path: '/api/download'
}
