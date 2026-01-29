# Sumdog Efficacy-Focused Marketing Website Redesign

A modern, evidence-based redesign of the Sumdog marketing website, incorporating key learnings from the England efficacy study.

## Design Philosophy

Every design decision in this redesign is informed by findings from Sumdog's England efficacy study. The key learnings that shaped this design:

1. **Strategic Friction Works**: The "Don't Rush" feature proved effective at encouraging careful problem-solving over speed-focused rushing.

2. **Engagement Without Compromise**: Gamification drives enthusiasm, but built-in pacing features ensure pupils maintain accuracy focus.

3. **Invisible Differentiation**: Adaptive difficulty works best when pupils remain unaware they're receiving different content.

4. **Accessibility is Essential**: Customizable timers and non-timed options significantly improved outcomes for SEN pupils (2x+ progress).

5. **Intuitiveness Matters**: Teachers praised the straightforward interface requiring minimal onboarding.

## Design Structure

### Sections

- **Hero Section**: Leads with efficacy study findings and key value propositions
- **Efficacy Findings**: Deep dive into four core learnings from the study
- **Features Section**: Details six key features informed by efficacy research
- **School Section**: Benefits and impact for educational institutions
- **Student Section**: Emphasizes mindful, non-rushed learning approach
- **Accessibility Showcase**: Highlights accessibility features and their proven impact
- **Teacher Testimonials**: Real quotes from educators in the study
- **Call-to-Action**: Encourages trial sign-ups for schools and families

### Components

- `Header.tsx`: Navigation with accessibility focus
- `Footer.tsx`: Contact information and additional links
- `HeroSection.tsx`: Main value proposition with study highlights
- `EfficacyFindings.tsx`: Four core findings with icons and statistics
- `FeaturesSection.tsx`: Six key features in a grid layout
- `SchoolSection.tsx`: School-specific benefits and value propositions
- `StudentSection.tsx`: Student/family experience and mindful learning focus
- `AccessibilityShowcase.tsx`: Accessibility features and their impact
- `TeacherTestimonials.tsx`: Real teacher quotes from the study
- `CTASection.tsx`: Primary call-to-action

## Technology Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Typography**: Hanken Grotesk, Jost (Google Fonts)

## Color Scheme

- **Primary**: #153c66 (Deep Blue)
- **Secondary**: #b71f67 (Pink/Magenta)
- **Accent**: #4CAF50 (Green)
- **Success**: #10b981
- **Light Background**: #f8fafc
- **Dark Text**: #0f172a

## Accessibility

- Full WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Reduced motion support for users with motion sensitivity
- Skip-to-content links
- Semantic HTML throughout

## Key Design Decisions

### 1. Hero Section
- Leads with efficacy study findings, not just marketing claims
- Shows concrete statistics (2x+ for SEN pupils, 95% teacher satisfaction)
- Emphasizes strategic friction and accessibility upfront
- Clear calls-to-action for both trials

### 2. Efficacy-First Information Architecture
- All major sections highlight evidence-based reasoning
- Testimonials are presented prominently with context
- Features tie directly back to study findings
- Statistics and data points support claims

### 3. Teacher-Centric Design
- Dedicated school section emphasizing control and data
- Teacher testimonials integrated throughout
- Clear communication of configuration options
- Accessibility features highlighted as core benefits

### 4. Student-Centric Design
- Messaging emphasizes "mindful learning," not gamification
- Timer flexibility and non-rushed approach promoted
- Removes pressure language
- Focuses on learning quality over speed

### 5. Accessibility at Core
- Not presented as an afterthought
- Full dedicated section with clear impact metrics
- Accessibility features highlighted across all sections
- Inclusive language throughout

## Development

### Setup

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Future Enhancements

- Interactive demos of strategic friction features
- Video testimonials from teachers in the study
- Case study pages highlighting different school types
- Detailed implementation guides for schools
- Contact forms for trial sign-ups
