import React, { useState, useEffect } from 'react';

interface AssetCardProps {
  token: string;
  value: string;
  amount: string;
  status: 'success' | 'error' | 'pending';
  chain?: string;
}

interface AnalysisState {
  status: 'success' | 'error' | 'pending';
  message: string;
  description: string;
  portfolioValue?: string;
  addressCount?: number;
}

const AssetCard: React.FC<AssetCardProps> = ({ token, value, amount, status, chain }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'pending': return '⏳';
      default: return '⏳';
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 w-52 h-72">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-900">Analyse wallets</h3>
        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-xs">📊</span>
        </div>
      </div>

      {/* Timer */}
      <div className="mb-4">
        <p className="text-xs text-gray-500">Next analyse in</p>
        <p className="text-lg font-semibold text-gray-900">12h : 34m : 23s</p>
      </div>

      {/* Status Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="text-2xl mb-2">{getStatusIcon()}</div>
        <div className="text-center">
          <p className="text-sm font-medium text-gray-900 mb-1">
            {status === 'success' && 'Analysis Complete'}
            {status === 'error' && 'Missing data'}
            {status === 'pending' && 'Welcome on board'}
          </p>
          <p className="text-xs text-gray-500 text-center">
            {status === 'success' && 'Portfolio analysis with recommendations'}
            {status === 'error' && 'Analysis failed due to internal error'}
            {status === 'pending' && 'First analysis pending, up to 15 minutes'}
          </p>
        </div>
      </div>

      {/* Token Info */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-900">{token}</span>
            {chain && (
              <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs">🔗</span>
              </div>
            )}
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Content Value</p>
            <p className="text-sm font-semibold text-gray-900">{value}</p>
            <p className="text-xs text-gray-500">{amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WalletAnalysisFlow: React.FC = () => {
  const [analysisState, setAnalysisState] = useState<AnalysisState>({
    status: 'pending',
    message: 'Welcome on board',
    description: 'Your first ANON analysis is currently pending. it might take up to 15 minutes'
  });

  const [timeLeft, setTimeLeft] = useState('12h : 34m : 23s');

  // Simulate analysis states
  useEffect(() => {
    const interval = setInterval(() => {
      setAnalysisState(prev => {
        if (prev.status === 'pending') {
          return {
            status: 'success',
            message: 'Analysis Complete',
            description: 'Portfolio analysis with recommendations',
            portfolioValue: '$1,187.816',
            addressCount: 2
          };
        } else if (prev.status === 'success') {
          return {
            status: 'error',
            message: 'Missing data',
            description: 'Analysis failed due to internal error or lack of data on wallets'
          };
        } else {
          return {
            status: 'pending',
            message: 'Welcome on board',
            description: 'Your first ANON analysis is currently pending. it might take up to 15 minutes'
          };
        }
      });
    }, 10000); // Change state every 10 seconds for demo

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    switch (analysisState.status) {
      case 'success': return 'text-green-600';
      case 'error': return 'text-red-600';
      case 'pending': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Analysis Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">📊</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Analyse wallets</h1>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Next analyse in</p>
              <p className="text-lg font-semibold text-gray-900">{timeLeft}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-6"></div>

          {/* Content Area */}
          <div className="min-h-96">
            {analysisState.status === 'success' && (
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h2 className="text-lg font-semibold text-green-800 mb-2">
                    👋 Welcome to HeyAnon! Portfolio Analysis Complete
                  </h2>
                  <p className="text-green-700">
                    I've analyzed your multi-address portfolio and found some exciting opportunities! 
                    Your combined {analysisState.portfolioValue} across {analysisState.addressCount} addresses has great potential for optimization.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">🌟 Universal Opportunities</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Instant wins: sweep up small "dust" balances</li>
                      <li>• Put idle assets to work with safe yields</li>
                      <li>• Cross-portfolio optimizations</li>
                      <li>• Fee-aware routing for best prices</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">🛠️ Available Services</h3>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Dust Collector</li>
                      <li>• Smart Yield Router</li>
                      <li>• V3 Range Manager</li>
                      <li>• Auto-Claim & Compound</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {analysisState.status === 'error' && (
              <div className="flex flex-col items-center justify-center h-96">
                <div className="text-6xl mb-4">❌</div>
                <h2 className="text-xl font-semibold text-red-600 mb-2">Missing data</h2>
                <p className="text-gray-600 text-center max-w-md">
                  Happens that analysis failed due to internal error or lack of data on wallets, 
                  please wait for the next iteration
                </p>
              </div>
            )}

            {analysisState.status === 'pending' && (
              <div className="flex flex-col items-center justify-center h-96">
                <div className="text-6xl mb-4">⏳</div>
                <h2 className="text-xl font-semibold text-yellow-600 mb-2">Welcome on board</h2>
                <p className="text-gray-600 text-center max-w-md">
                  Your first ANON analysis is currently pending. it might take up to 15 minutes
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Asset Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AssetCard
            token="USDT"
            value="$45.53"
            amount="1.0632"
            status={analysisState.status}
            chain="Ethereum"
          />
          <AssetCard
            token="USDT"
            value="$45.53"
            amount="1.0632"
            status={analysisState.status}
            chain="Arbitrum"
          />
          <AssetCard
            token="USDT"
            value="$45.53"
            amount="1.0632"
            status={analysisState.status}
            chain="Base"
          />
          <AssetCard
            token="USDT"
            value="$45.53"
            amount="1.0632"
            status={analysisState.status}
            chain="Polygon"
          />
        </div>

        {/* Flow Diagram */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Wallet Analysis Flow</h2>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-yellow-600">⏳</span>
              </div>
              <p className="text-sm font-medium text-gray-900">Pending</p>
            </div>
            
            <div className="text-gray-400">→</div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-green-600">✅</span>
              </div>
              <p className="text-sm font-medium text-gray-900">Success</p>
            </div>
            
            <div className="text-gray-400">→</div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-red-600">❌</span>
              </div>
              <p className="text-sm font-medium text-gray-900">Error</p>
            </div>
            
            <div className="text-gray-400">→</div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-blue-600">🔄</span>
              </div>
              <p className="text-sm font-medium text-gray-900">Retry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletAnalysisFlow;

