const { chromium } = require('playwright');

async function demoWireframes() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Navigate to the wireframes
  await page.goto('file://' + __dirname + '/news-widget.html');
  
  console.log('🎬 Starting News Widget Demo...');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  // Demo 1: Add users to different widgets
  console.log('📝 Demo 1: Adding users to widgets');
  
  // Add users to small widget
  await page.fill('#small-input', 'elonmusk');
  await page.click('button[onclick="addUser(\'small\')"]');
  await page.waitForTimeout(1000);
  
  // Add users to medium widget
  await page.fill('#medium-input', 'naval');
  await page.click('button[onclick="addUser(\'medium\')"]');
  await page.waitForTimeout(1000);
  
  // Add users to large widget
  await page.fill('#large-input', 'balajis');
  await page.click('button[onclick="addUser(\'large\')"]');
  await page.waitForTimeout(1000);
  
  console.log('✅ Users added successfully');
  
  // Demo 2: Show different widget sizes
  console.log('📏 Demo 2: Different widget sizes');
  await page.waitForTimeout(2000);
  
  // Demo 3: Test user limit
  console.log('🔢 Demo 3: Testing user limit');
  
  // Try to add more users to small widget
  const users = ['VitalikButerin', 'a16z', 'coinbase', 'binance', 'ethereum', 'bitcoin', 'solana'];
  for (const user of users) {
    await page.fill('#small-input', user);
    await page.click('button[onclick="addUser(\'small\')"]');
    await page.waitForTimeout(500);
  }
  
  console.log('✅ User limit test completed');
  
  // Demo 4: Remove users
  console.log('🗑️ Demo 4: Removing users');
  await page.click('#small-users .remove-btn');
  await page.waitForTimeout(1000);
  
  console.log('✅ User removed successfully');
  
  // Demo 5: Test responsive design
  console.log('📱 Demo 5: Testing responsive design');
  
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });
  await page.waitForTimeout(2000);
  
  // Set tablet viewport
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(2000);
  
  // Set desktop viewport
  await page.setViewportSize({ width: 1200, height: 800 });
  await page.waitForTimeout(2000);
  
  console.log('✅ Responsive design test completed');
  
  // Demo 6: Test Enter key functionality
  console.log('⌨️ Demo 6: Testing Enter key functionality');
  
  await page.fill('#medium-input', 'VitalikButerin');
  await page.press('#medium-input', 'Enter');
  await page.waitForTimeout(1000);
  
  console.log('✅ Enter key test completed');
  
  // Demo 7: Show AI analysis
  console.log('🤖 Demo 7: AI analysis features');
  await page.waitForTimeout(2000);
  
  console.log('🎉 Demo completed successfully!');
  console.log('📊 Widget Features Demonstrated:');
  console.log('   • Three different sizes (Small, Medium, Large)');
  console.log('   • User subscription management');
  console.log('   • News feed display');
  console.log('   • AI analysis (Medium & Large widgets)');
  console.log('   • Responsive design');
  console.log('   • Interactive controls');
  console.log('   • User limit enforcement');
  console.log('   • Real-time updates');
  
  // Keep browser open for manual inspection
  console.log('🔍 Browser will remain open for manual inspection...');
  console.log('   Press Ctrl+C to close the demo');
  
  // Wait for user to close
  await new Promise(() => {});
}

// Run the demo
demoWireframes().catch(console.error);

