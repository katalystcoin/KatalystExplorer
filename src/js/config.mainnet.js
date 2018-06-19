(function() {
    'use strict';

    angular.module('web').constant('appConfig', {
        apiDomain: 'https://sg.katalystcoin.com',
        blockchainName: 'Mainnet',
        title: 'Katalyst Explorer',
        nodes: [{
            url: 'https://sg.katalystcoin.com',
            maintainer: 'Katalyst'
        }],
        peerExplorer: {
            url: 'https://sg.katalystcoin.com',
            title: 'Public Node'
        },
        wallet: {
            url: 'https://client.katalystcoin.com',
            title: 'Wallet'
        }
    });

    angular.module('web').constant('constants.network', {
        NETWORK_NAME: 'mainnet', // 'devnet', 'testnet', 'mainnet'
        ADDRESS_VERSION: 1,
        NETWORK_CODE: 'W',
        INITIAL_NONCE: 0
    });
})();
