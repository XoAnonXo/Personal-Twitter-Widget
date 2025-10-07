# Wallet Analysis Flow Map

Based on the Figma design analysis, here's the complete flow map for the "Analyse wallets" feature:

## Main Flow States

### 1. **Successful Analysis State**
- **Header**: "Analyse wallets" with icon
- **Timer**: "Next analyse in 12h : 34m : 23s"
- **Content**: Detailed portfolio analysis with recommendations
- **Portfolio Value**: $1,187.816 across 2 addresses
- **Status**: ✅ Analysis completed successfully

### 2. **Error State**
- **Header**: "Analyse wallets" with icon
- **Timer**: "Next analyse in 12h : 34m : 23s"
- **Content**: "Missing data" error message
- **Message**: "Happens that analysis failed due to internal error or lack of data on wallets, please wait for the next iteration"
- **Status**: ❌ Analysis failed

### 3. **Pending State**
- **Header**: "Analyse wallets" with icon
- **Timer**: "Pending..."
- **Content**: "Welcome on board" message
- **Message**: "Your first ANON analysis is currently pending. it might take up to 15 minutes"
- **Status**: ⏳ Analysis in progress

## Asset Cards Flow

### Asset Card Components
- **Token Display**: USDT with chain icon
- **Value**: $45.53 (1.0632 tokens)
- **Card States**: 
  - ✅ Successful analysis
  - ❌ Missing data error
  - ⏳ Pending analysis

## Key Features Identified

### Universal Opportunities
- Instant wins: sweep dust balances
- Idle asset deployment
- Cross-portfolio optimizations
- Fee-aware routing
- Automated triggers and alerts

### Personalized Recommendations
- Address-specific analysis
- Portfolio value tracking
- Optimization suggestions
- Risk management alerts

### Services Available
- Dust Collector
- Smart Yield Router
- V3 Range Manager
- Auto-Claim & Compound
- Risk Guardian
- Smart Swaps

## Flow Diagram Structure

```
Start → Wallet Analysis Request
  ↓
Check Analysis Status
  ↓
┌─────────────────┬─────────────────┬─────────────────┐
│   Successful     │     Error        │     Pending      │
│   Analysis       │     State        │     State        │
│                  │                  │                  │
│ • Show results   │ • Show error     │ • Show welcome   │
│ • Recommendations│ • Retry option   │ • Timer countdown│
│ • Action buttons │ • Wait for next  │ • Progress info  │
│ • Asset cards    │ • Asset cards    │ • Asset cards    │
└─────────────────┴─────────────────┴─────────────────┘
  ↓
Asset Card States
  ↓
┌─────────────────┬─────────────────┬─────────────────┐
│   Token Info    │   Value Display │   Status Icon    │
│                 │                 │                 │
│ • USDT          │ • $45.53        │ • Success ✅    │
│ • Chain icon    │ • 1.0632 tokens │ • Error ❌      │
│                 │                 │ • Pending ⏳    │
└─────────────────┴─────────────────┴─────────────────┘
  ↓
Next Analysis Timer
  ↓
Auto-refresh or Manual Refresh
```

## User Journey

1. **Initial Load**: User sees pending state with welcome message
2. **Analysis Processing**: Timer shows "Pending..." status
3. **Success Path**: Detailed analysis with recommendations and asset cards
4. **Error Path**: Error message with retry option
5. **Auto-refresh**: System automatically schedules next analysis
6. **Manual Actions**: User can trigger specific optimizations

## Technical Components

- **Header Component**: Title + icon + timer
- **Content Area**: Scrollable analysis results
- **Asset Cards**: Token information display
- **Status Indicators**: Success/Error/Pending states
- **Timer Component**: Countdown to next analysis
- **Action Buttons**: Execute recommendations

This flow map shows the complete user experience for the wallet analysis feature, including all states, components, and user interactions.

