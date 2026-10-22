"""Build the public resume PDF from the verified website profile."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.utils import simpleSplit
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Mitchell_Bassett_GTM_Operations_AI_Automation_Resume.pdf"
PAGE_W, PAGE_H = 612, 792
MARGIN = 49
WIDTH = PAGE_W - MARGIN * 2
INK = colors.HexColor("#17213A")
MUTED = colors.HexColor("#45516A")
ACCENT = colors.HexColor("#3F50AF")
RULE = colors.HexColor("#D9DEEA")


def wrap(text, font="Helvetica", size=9.4, width=WIDTH):
    return simpleSplit(text, font, size, width)


def text_lines(c, text, x, y, *, font="Helvetica", size=9.4, leading=13.2, color=MUTED, width=WIDTH):
    c.setFont(font, size)
    c.setFillColor(color)
    for line in wrap(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def heading(c, title, y):
    c.setStrokeColor(RULE)
    c.setLineWidth(0.8)
    c.line(MARGIN, y + 7, PAGE_W - MARGIN, y + 7)
    c.setFont("Helvetica-Bold", 9.2)
    c.setFillColor(ACCENT)
    c.drawString(MARGIN, y - 9, title.upper())
    return y - 26


def role(c, title, dates, summary, bullets, y):
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(INK)
    c.drawString(MARGIN, y, title)
    c.setFont("Helvetica", 8.6)
    c.setFillColor(MUTED)
    c.drawRightString(PAGE_W - MARGIN, y + 1, dates)
    y -= 18
    y = text_lines(c, summary, MARGIN, y, size=9.1, leading=12.7, color=MUTED) - 5
    for bullet in bullets:
        c.setFillColor(ACCENT)
        c.circle(MARGIN + 3, y + 2, 1.8, fill=1, stroke=0)
        y = text_lines(c, bullet, MARGIN + 13, y, size=9.1, leading=12.4, width=WIDTH - 13) - 4
    return y - 11


def footer(c, page):
    c.setStrokeColor(RULE)
    c.line(MARGIN, 40, PAGE_W - MARGIN, 40)
    c.setFont("Helvetica", 8)
    c.setFillColor(MUTED)
    c.drawString(MARGIN, 27, "Mitchell Bassett  |  mitchellbassett.com")
    c.drawRightString(PAGE_W - MARGIN, 27, f"{page} / 2")


def build():
    c = canvas.Canvas(str(OUTPUT), pagesize=(PAGE_W, PAGE_H))
    c.setTitle("Mitchell Bassett | Growth Marketing and Marketing Operations Resume")
    c.setAuthor("Mitchell Bassett")

    y = 746
    c.setFont("Helvetica-Bold", 24)
    c.setFillColor(INK)
    c.drawString(MARGIN, y, "Mitchell Bassett")
    y -= 25
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(ACCENT)
    c.drawString(MARGIN, y, "GROWTH MARKETING & MARKETING OPERATIONS")
    y -= 20
    c.setFont("Helvetica", 8.8)
    c.setFillColor(MUTED)
    c.drawString(MARGIN, y, "Uncasville, CT  |  (860) 449-2487  |  bassettmitchell7@gmail.com")
    y -= 14
    c.linkURL("https://mitchellbassett.com", (MARGIN, y - 2, MARGIN + 145, y + 11), relative=0)
    c.linkURL("https://www.linkedin.com/in/mitchell-bassett-50ab791b8/", (MARGIN + 161, y - 2, MARGIN + 360, y + 11), relative=0)
    c.setFillColor(ACCENT)
    c.drawString(MARGIN, y, "mitchellbassett.com  |  LinkedIn")
    y -= 28

    y = heading(c, "Profile", y)
    y = text_lines(
        c,
        "Growth marketing and marketing operations professional with experience across agency strategy, early-stage technology, and independent business ownership. Connects market research, paid acquisition, landing pages, CRM follow-up, attribution, and automation into practical customer acquisition systems. Works with founders, business owners, media buyers, and technical teams to turn performance findings into action.",
        MARGIN,
        y,
        size=9.4,
        leading=13.2,
    ) - 18

    y = heading(c, "Core skills", y)
    left = [
        "Growth strategy, positioning, offer development",
        "Meta and Google Ads strategy, creative testing",
        "GoHighLevel funnels, CRM, email and SMS workflows",
    ]
    right = [
        "GA4, GTM, Meta Pixel, Conversions API, RedTrack",
        "Attribution, funnel analysis, conversion optimization",
        "n8n, Python, webhooks, AI-assisted workflows",
    ]
    start = y
    for item in left:
        y = text_lines(c, "• " + item, MARGIN, y, size=8.7, leading=12.6, width=WIDTH / 2 - 8) - 3
    y_right = start
    for item in right:
        y_right = text_lines(c, "• " + item, MARGIN + WIDTH / 2 + 8, y_right, size=8.7, leading=12.6, width=WIDTH / 2 - 8) - 3
    y = min(y, y_right) - 14

    y = heading(c, "Professional experience", y)
    y = role(
        c,
        "Unbranded Growth  |  Lead Marketing Strategist",
        "Jan 2026 – Present",
        "Lead client acquisition strategy and marketing execution across an agency portfolio, from offer development and campaign planning through lead capture, follow-up, and reporting.",
        [
            "Develop industry-specific positioning, offers, advertising angles, and full-funnel plans for service businesses.",
            "Build responsive GoHighLevel landing pages, forms, qualification flows, appointment processes, and automated email/SMS follow-up.",
            "Implement and troubleshoot Meta Pixel, Conversions API, GA4, Google Tag Manager, RedTrack, UTMs, and CRM attribution.",
            "Analyze campaign costs, conversion, lead quality, and funnel bottlenecks with agency leadership and media buyers.",
        ],
        y,
    )
    y = role(
        c,
        "VBRL  |  Growth Marketing & Marketing Operations Lead",
        "Aug 2024 – Jan 2026",
        "Led growth marketing and operations for early-stage AI and technology initiatives, supporting positioning, launch planning, experimentation, and operational systems.",
        [
            "Created messaging frameworks, channel priorities, and market-facing materials for emerging products.",
            "Designed n8n and Python workflows for marketing monitoring, content operations, and reporting.",
            "Supported acquisition tests, competitive research, investor-facing narratives, and founder discussions on growth and positioning.",
        ],
        y,
    )
    if y < 56:
        raise ValueError(f"Page 1 content overflows: {y}")
    footer(c, 1)
    c.showPage()

    y = 744
    c.setFont("Helvetica-Bold", 16)
    c.setFillColor(INK)
    c.drawString(MARGIN, y, "Mitchell Bassett")
    c.setFont("Helvetica", 8.5)
    c.setFillColor(MUTED)
    c.drawRightString(PAGE_W - MARGIN, y + 2, "PROFESSIONAL EXPERIENCE")
    y -= 28
    y = role(
        c,
        "Riverbend Digital Solutions  |  Founder",
        "Jan 2021 – Aug 2024",
        "Founded and operated a digital solutions business focused on client marketing systems, digital presence, customer acquisition, and automation.",
        [
            "Worked directly with business owners to define growth needs, project requirements, positioning, and channel opportunities.",
            "Built lead generation funnels and workflows for capture, enrichment, follow-up, and marketing reporting.",
            "Supported rebranding, messaging, market research, analytics foundations, vendor coordination, and client delivery.",
        ],
        y,
    )
    y = role(
        c,
        "Lineman / Apprentice Lineman  |  Various employers",
        "Oct 2015 – Jul 2021",
        "Worked in electrical utility field roles requiring safety awareness, technical learning, teamwork, and reliable execution under pressure.",
        [
            "Followed operational and safety procedures while troubleshooting with field crews.",
            "Built practical problem-solving and accountability that carry into technical marketing work.",
        ],
        y,
    )

    y = heading(c, "Selected implementation experience", y)
    for item in [
        "Customer acquisition: Campaign strategy, direct-response copy, landing page variants, lead forms, and appointment flows.",
        "Marketing operations: CRM segmentation, lead routing, automated follow-up, nurture, and operational documentation.",
        "Measurement: Browser and server conversion events, event deduplication, UTM and click-ID handling, and reporting diagnostics.",
        "Automation: n8n, Python, APIs, webhooks, AI-assisted research and workflows, and data enrichment.",
    ]:
        y = text_lines(c, "• " + item, MARGIN, y, size=9.2, leading=13.2) - 6
    y -= 9

    y = heading(c, "Education & continued learning", y)
    y = text_lines(c, "Southeast Lineman Training Center  |  Trenton, Georgia  |  2015", MARGIN, y, size=9.3, leading=13) - 5
    y = text_lines(c, "Montville High School  |  Montville, Connecticut  |  2010", MARGIN, y, size=9.3, leading=13) - 5
    y = text_lines(c, "Continuing hands-on study in data analytics, Python, CRM systems, marketing technology, AI workflows, and conversion tracking.", MARGIN, y, size=9.3, leading=13) - 9
    if y < 56:
        raise ValueError(f"Page 2 content overflows: {y}")
    footer(c, 2)
    c.save()
    print(OUTPUT)


if __name__ == "__main__":
    build()
