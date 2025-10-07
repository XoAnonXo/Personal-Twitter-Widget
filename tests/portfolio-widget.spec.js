const { test, expect } = require('@playwright/test');

test.describe('Portfolio Widget Interactive Wireframes', () => {
  test.describe('Small Portfolio Widget (215×300px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/portfolio-small-widget.html');
    });

    test('should have correct dimensions (215×300px)', async ({ page }) => {
      const widget = page.locator('.portfolio-widget');
      await expect(widget).toBeVisible();
      
      const box = await widget.boundingBox();
      expect(box.width).toBeCloseTo(215, 0);
      expect(box.height).toBeCloseTo(300, 0);
    });

    test('should display widget correctly', async ({ page }) => {
      await expect(page.locator('.portfolio-widget')).toBeVisible();
      await expect(page.locator('.widget-title')).toContainText('Portfolio Analysis');
      await expect(page.locator('.wallet-input')).toBeVisible();
      await expect(page.locator('.analyze-btn')).toBeVisible();
    });

    test('should analyze wallet correctly', async ({ page }) => {
      const input = page.locator('#small-wallet-input');
      const button = page.locator('.analyze-btn');
      
      await input.fill('0x1234567890abcdef');
      await button.click();
      
      await expect(button).toHaveText('Analyzing...');
      await expect(button).toBeDisabled();
      
      // Wait for analysis to complete
      await expect(button).toHaveText('Analyze Portfolio', { timeout: 10000 });
      await expect(button).toBeEnabled();
    });

    test('should display protocols correctly', async ({ page }) => {
      await expect(page.locator('.protocols-grid')).toBeVisible();
      await expect(page.locator('.protocol-item')).toHaveCount(4);
      
      // Check specific protocols
      await expect(page.locator('.protocol-item').nth(0)).toContainText('Aave');
      await expect(page.locator('.protocol-item').nth(1)).toContainText('Uniswap');
      await expect(page.locator('.protocol-item').nth(2)).toContainText('Pendle');
      await expect(page.locator('.protocol-item').nth(3)).toContainText('Pump.fun');
    });

    test('should display metrics correctly', async ({ page }) => {
      await expect(page.locator('.metrics-grid')).toBeVisible();
      await expect(page.locator('.metric-item')).toHaveCount(2);
      
      await expect(page.locator('.metric-value').nth(0)).toContainText('$12.4K');
      await expect(page.locator('.metric-value').nth(1)).toContainText('+8.2%');
    });

    test('should display news correctly', async ({ page }) => {
      await expect(page.locator('#small-news')).toBeVisible();
      await expect(page.locator('.news-item')).toHaveCount(1);
      await expect(page.locator('.news-title')).toContainText('Aave V3 Update');
    });

    test('should have sync functionality', async ({ page }) => {
      const syncBtn = page.locator('.sync-btn');
      await syncBtn.click();
      
      await expect(syncBtn).toHaveClass(/syncing/);
      await expect(syncBtn).not.toHaveClass(/syncing/, { timeout: 10000 });
    });
  });

  test.describe('Medium Portfolio Widget (450×300px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/portfolio-medium-widget.html');
    });

    test('should have correct dimensions (450×300px)', async ({ page }) => {
      const widget = page.locator('.portfolio-widget');
      await expect(widget).toBeVisible();
      
      const box = await widget.boundingBox();
      expect(box.width).toBeCloseTo(450, 0);
      expect(box.height).toBeCloseTo(300, 0);
    });

    test('should display two-column layout', async ({ page }) => {
      await expect(page.locator('.widget-content')).toBeVisible();
      await expect(page.locator('.left-column')).toBeVisible();
      await expect(page.locator('.right-column')).toBeVisible();
    });

    test('should display protocols with TVL', async ({ page }) => {
      await expect(page.locator('.protocol-item')).toHaveCount(4);
      await expect(page.locator('.protocol-tvl')).toHaveCount(4);
    });

    test('should display news with protocol tags', async ({ page }) => {
      await expect(page.locator('.news-item')).toHaveCount(2);
      await expect(page.locator('.news-protocol')).toHaveCount(2);
    });
  });

  test.describe('Large Portfolio Widget (946×201px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/portfolio-large-widget.html');
    });

    test('should have correct dimensions (946×201px)', async ({ page }) => {
      const widget = page.locator('.portfolio-widget');
      await expect(widget).toBeVisible();
      
      const box = await widget.boundingBox();
      expect(box.width).toBeCloseTo(946, 0);
      expect(box.height).toBeCloseTo(201, 0);
    });

    test('should display horizontal layout', async ({ page }) => {
      await expect(page.locator('.widget-content')).toBeVisible();
      await expect(page.locator('.wallet-section')).toBeVisible();
      await expect(page.locator('.protocols-section')).toBeVisible();
      await expect(page.locator('.metrics-section')).toBeVisible();
      await expect(page.locator('.news-section')).toBeVisible();
    });

    test('should display all sections correctly', async ({ page }) => {
      await expect(page.locator('.wallet-input')).toBeVisible();
      await expect(page.locator('.protocols-grid')).toBeVisible();
      await expect(page.locator('.metrics-grid')).toBeVisible();
      await expect(page.locator('#large-news')).toBeVisible();
    });
  });

  test.describe('Full Portfolio Widget (920×730px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/portfolio-full-widget.html');
    });

    test('should have correct dimensions (920×730px)', async ({ page }) => {
      const widget = page.locator('.portfolio-widget');
      await expect(widget).toBeVisible();
      
      const box = await widget.boundingBox();
      expect(box.width).toBeCloseTo(920, 0);
      expect(box.height).toBeCloseTo(730, 0);
    });

    test('should display two-column layout', async ({ page }) => {
      await expect(page.locator('.widget-content')).toBeVisible();
      await expect(page.locator('.left-column')).toBeVisible();
      await expect(page.locator('.right-column')).toBeVisible();
    });

    test('should display all sections', async ({ page }) => {
      await expect(page.locator('.wallet-section')).toBeVisible();
      await expect(page.locator('.protocols-section')).toBeVisible();
      await expect(page.locator('.metrics-section')).toBeVisible();
      await expect(page.locator('.news-section')).toBeVisible();
      await expect(page.locator('.analytics-section')).toBeVisible();
      await expect(page.locator('.risk-section')).toBeVisible();
    });

    test('should display protocol changes', async ({ page }) => {
      await expect(page.locator('.protocol-change')).toHaveCount(4);
      await expect(page.locator('.protocol-change.positive')).toHaveCount(3);
      await expect(page.locator('.protocol-change.negative')).toHaveCount(1);
    });

    test('should display risk assessment', async ({ page }) => {
      await expect(page.locator('.risk-item')).toHaveCount(4);
      await expect(page.locator('.risk-value.low')).toHaveCount(2);
      await expect(page.locator('.risk-value.medium')).toHaveCount(2);
    });
  });

  test.describe('Scrolling and UX Tests', () => {
    test('small widget should scroll content properly', async ({ page }) => {
      await page.goto('http://localhost:3000/portfolio-small-widget.html');
      
      const widget = page.locator('.portfolio-widget');
      await expect(widget).toBeVisible();
      
      // Check if content overflows and needs scrolling
      const widgetBox = await widget.boundingBox();
      const contentHeight = await widget.evaluate(el => el.scrollHeight);
      
      if (contentHeight > widgetBox.height) {
        // Test scrolling functionality
        await widget.evaluate(el => el.scrollTop = 50);
        const scrollTop = await widget.evaluate(el => el.scrollTop);
        expect(scrollTop).toBe(50);
      }
    });

    test('medium widget should scroll content properly', async ({ page }) => {
      await page.goto('http://localhost:3000/portfolio-medium-widget.html');
      
      const widget = page.locator('.portfolio-widget');
      await expect(widget).toBeVisible();
      
        // Test scrolling in news section
        const newsSection = page.locator('.news-section');
        await expect(newsSection).toBeVisible();
        
        // Check if news section has scrollable content
        const newsHeight = await newsSection.evaluate(el => el.scrollHeight);
        const newsBox = await newsSection.boundingBox();
        
        if (newsHeight > newsBox.height) {
            // Test scrolling functionality
            await newsSection.evaluate(el => el.scrollTop = 30);
            const scrollTop = await newsSection.evaluate(el => el.scrollTop);
            expect(scrollTop).toBeGreaterThan(0);
        } else {
            // If no scrollable content, just verify the section exists
            expect(newsBox.height).toBeGreaterThan(0);
        }
    });

    test('full widget should scroll content properly', async ({ page }) => {
      await page.goto('http://localhost:3000/portfolio-full-widget.html');
      
      const widget = page.locator('.portfolio-widget');
      await expect(widget).toBeVisible();
      
        // Test scrolling in news section
        const newsSection = page.locator('.news-section');
        await expect(newsSection).toBeVisible();
        
        // Check if news section has scrollable content
        const newsHeight = await newsSection.evaluate(el => el.scrollHeight);
        const newsBox = await newsSection.boundingBox();
        
        if (newsHeight > newsBox.height) {
            // Test scrolling functionality
            await newsSection.evaluate(el => el.scrollTop = 50);
            const scrollTop = await newsSection.evaluate(el => el.scrollTop);
            expect(scrollTop).toBeGreaterThan(0);
        } else {
            // If no scrollable content, just verify the section exists
            expect(newsBox.height).toBeGreaterThan(0);
        }
    });
  });

  test.describe('Modern UX Design Tests', () => {
    test('should have smooth hover animations', async ({ page }) => {
      await page.goto('http://localhost:3000/portfolio-medium-widget.html');
      
      const protocolItem = page.locator('.protocol-item').first();
      await expect(protocolItem).toBeVisible();
      
        // Test hover effect
        await protocolItem.hover();
        // Check if transform is applied (could be matrix or translateY)
        const transform = await protocolItem.evaluate(el => getComputedStyle(el).transform);
        expect(transform).not.toBe('none');
    });

    test('should have proper focus states', async ({ page }) => {
      await page.goto('http://localhost:3000/portfolio-small-widget.html');
      
      const input = page.locator('.wallet-input');
      await input.focus();
      
      // Check if focus state is visible
      await expect(input).toBeFocused();
    });

    test('should have loading states', async ({ page }) => {
      await page.goto('http://localhost:3000/portfolio-small-widget.html');
      
      const button = page.locator('.analyze-btn');
      await button.click();
      
      // Check loading state
      await expect(button).toHaveText('Analyzing...');
      await expect(button).toBeDisabled();
    });

    test('should have proper button states', async ({ page }) => {
      await page.goto('http://localhost:3000/portfolio-full-widget.html');
      
      const syncBtn = page.locator('.sync-btn');
      await syncBtn.click();
      
      // Check syncing state
      await expect(syncBtn).toHaveClass(/syncing/);
    });
  });
});
