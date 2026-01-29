import puppeteer from 'puppeteer';

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport to match marketing site (1920x1080 for desktop)
  await page.setViewport({ width: 1920, height: 1080 });

  // Navigate to the development server
  // Make sure npm run dev is running before executing this script
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // Generate PDF of just the viewport (top section)
  await page.pdf({
    path: 'sumdog-marketing-hero.pdf',
    format: 'A4',
    margin: {
      top: '20px',
      bottom: '20px',
      left: '20px',
      right: '20px',
    },
    printBackground: true,
  });

  await browser.close();
  console.log('PDF generated: sumdog-marketing-hero.pdf');
}

generatePDF().catch(console.error);
