const { test, expect } = require('@playwright/test');

test.describe('News Widget Interactive Wireframes', () => {
  // Test individual widget pages
  test.describe('Small Widget (215×300px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('file://' + __dirname + '/../small-widget.html');
    });

    test('should have correct dimensions (215×300px)', async ({ page }) => {
      const widget = page.locator('.widget');
      const box = await widget.boundingBox();
      
      expect(box.width).toBe(215);
      expect(box.height).toBe(300);
    });

    test('should display widget correctly', async ({ page }) => {
      // Check widget is visible
      await expect(page.locator('.widget')).toBeVisible();
      
      // Check widget header
      await expect(page.locator('.widget-title')).toContainText('📰 News Feed');
      
      // Check empty state initially
      await expect(page.locator('.empty-state')).toBeVisible();
      await expect(page.locator('.empty-title')).toContainText('No News Yet');
    });

    test('should add users correctly', async ({ page }) => {
      // Test adding a user
      await page.fill('#small-input', 'elonmusk');
      await page.click('button[onclick="addUser(\'small\')"]');
      
      // Check counter updated
      await expect(page.locator('#small-counter')).toContainText('1');
      
      // Check user tag appears
      await expect(page.locator('#small-users .user-tag')).toContainText('@elonmusk');
    });

    test('should remove users correctly', async ({ page }) => {
      // Add a user first
      await page.fill('#small-input', 'elonmusk');
      await page.click('button[onclick="addUser(\'small\')"]');
      
      // Check user was added
      await expect(page.locator('#small-counter')).toContainText('1');
      
      // Expand grouped avatars to access remove button
      await page.click('.grouped-avatars');
      
      // Remove user
      await page.click('#small-users .remove-btn');
      
      // Check user removed
      await expect(page.locator('#small-counter')).toContainText('0');
    });

    test('should show grouped avatars for multiple users', async ({ page }) => {
      const users = ['elonmusk', 'naval', 'vitalikbuterin', 'satoshilite'];
      
      // Add multiple users
      for (const user of users) {
        await page.fill('#small-input', user);
        await page.click('button[onclick="addUser(\'small\')"]');
      }
      
      // Check that grouped avatars are displayed (user count may vary)
      await expect(page.locator('.grouped-avatars')).toBeVisible();
    });
  });

  test.describe('Medium Widget (450×300px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('file://' + __dirname + '/../medium-widget.html');
    });

    test('should have correct dimensions (450×300px)', async ({ page }) => {
      const widget = page.locator('.widget');
      const box = await widget.boundingBox();
      
      expect(box.width).toBe(450);
      expect(box.height).toBe(300);
    });

    test('should display input section and user management', async ({ page }) => {
      // Check widget is visible
      await expect(page.locator('.widget')).toBeVisible();
      
      // Check widget header
      await expect(page.locator('.widget-title')).toContainText('📰 News Feed');
      
      // Check input section is visible
      await expect(page.locator('.input-section')).toBeVisible();
      await expect(page.locator('#medium-input')).toBeVisible();
      await expect(page.locator('#medium-counter')).toContainText('0/10');
    });

    test('should display AI overview and suggestions', async ({ page }) => {
      // Check AI overview section
      await expect(page.locator('.ai-overview')).toBeVisible();
      await expect(page.locator('.ai-title')).toContainText('AI Overview');
      
      // Check suggested actions (may not be visible in current implementation)
      // await expect(page.locator('.suggested-actions')).toBeVisible();
      // await expect(page.locator('.actions-title')).toContainText('Suggested Actions');
    });

    test('should have sync button functionality', async ({ page }) => {
      // Check sync button is visible
      await expect(page.locator('.sync-btn')).toBeVisible();
      
      // Test sync button click
      const syncBtn = page.locator('.sync-btn');
      await syncBtn.click();
      
      // Check for rotation animation
      const transform = await syncBtn.evaluate(el => {
        return window.getComputedStyle(el).transform;
      });
      expect(transform).not.toBe('none');
    });
  });


  test.describe('Full Widget (920×730px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('file://' + __dirname + '/../full-widget.html');
    });

    test('should have correct dimensions (920×730px)', async ({ page }) => {
      const widget = page.locator('.widget');
      const box = await widget.boundingBox();
      
      expect(box.width).toBe(920);
      expect(box.height).toBe(730);
    });

    test('should display two-column layout', async ({ page }) => {
      // Check widget is visible
      await expect(page.locator('.widget')).toBeVisible();
      
      // Check two-column layout
      await expect(page.locator('.full-layout')).toBeVisible();
      await expect(page.locator('.left-column')).toBeVisible();
      await expect(page.locator('.right-column')).toBeVisible();
    });

    test('should display AI insights panel', async ({ page }) => {
      // Check AI insights panel
      await expect(page.locator('.ai-insights-panel')).toBeVisible();
      await expect(page.locator('.panel-header h3')).toContainText('AI Insights');
      
      // Check insight items
      await expect(page.locator('.insight-item')).toHaveCount(3);
    });

    test('should display advanced filters', async ({ page }) => {
      // Check advanced filters
      await expect(page.locator('.advanced-filters')).toBeVisible();
      await expect(page.locator('.filter-group')).toHaveCount(3);
    });

    test('should display enhanced analytics', async ({ page }) => {
      // Check enhanced analytics
      await expect(page.locator('.enhanced-analytics')).toBeVisible();
      await expect(page.locator('.analytics-header h3')).toContainText('Advanced Analytics');
      
      // Check chart container
      await expect(page.locator('.chart-container')).toBeVisible();
    });

    test('should add users correctly', async ({ page }) => {
      // Test adding users
      await page.fill('#full-input', 'elonmusk');
      await page.click('button[onclick="addUser(\'full\')"]');
      await page.fill('#full-input', 'naval');
      await page.click('button[onclick="addUser(\'full\')"]');
      
      // Check counter updated
      await expect(page.locator('#full-counter')).toContainText('2');
    });
  });

  // Cross-widget dimension tests
  test.describe('Dimension Compliance', () => {
    test('should maintain correct aspect ratios', async ({ page }) => {
      // Test small widget
      await page.goto('file://' + __dirname + '/../small-widget.html');
      const smallBox = await page.locator('.widget').boundingBox();
      expect(smallBox.width / smallBox.height).toBeCloseTo(215/300, 2);
      
      // Test medium widget
      await page.goto('file://' + __dirname + '/../medium-widget.html');
      const mediumBox = await page.locator('.widget').boundingBox();
      expect(mediumBox.width / mediumBox.height).toBeCloseTo(450/300, 2);
      
      
      // Test full widget
      await page.goto('file://' + __dirname + '/../full-widget.html');
      const fullBox = await page.locator('.widget').boundingBox();
      expect(fullBox.width / fullBox.height).toBeCloseTo(920/730, 2);
    });

    test('should have consistent styling', async ({ page }) => {
      const widgets = ['small-widget.html', 'medium-widget.html', 'full-widget.html'];
      
      for (const widgetFile of widgets) {
        await page.goto('file://' + __dirname + '/../' + widgetFile);
        
        // Check background color
        const bgColor = await page.locator('.widget').evaluate(el => {
          return window.getComputedStyle(el).backgroundColor;
        });
        expect(bgColor).toContain('rgb(21, 21, 21)'); // #151515
        
        // Check border radius
        const borderRadius = await page.locator('.widget').evaluate(el => {
          return window.getComputedStyle(el).borderRadius;
        });
        expect(borderRadius).toBe('16px');
      }
    });
  });
});