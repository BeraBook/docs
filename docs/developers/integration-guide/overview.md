---
id: overview
title: Overview
sidebar_position: 0
---

# Integration Guide

This section outlines the steps required to integrate Bera Book into your aggregator:
1. [Tracking the Open Event](./1-tracking-the-open-event)
2. [Querying Book Liquidity](./2-querying-book-liquidity)
3. [Querying Expected Output Amount](./3-querying-expected-output-amount)
4. [Building a Transaction for a Market Order](./4-building-a-transaction-for-a-market-order)

### **Market Structure**

A **market** in Bera Book is composed of two Book structs: the **ask book** and the **bid book**. Each Book is distinguished by a primary key called the `BookKey`, which is explained in detail on [this page](https://docs.berabook.fun/concepts/technology/book-key). Note that the term **market** here refers to an abstract concept, not an actual contract.

For example, in an **ETH/USDC** market:

- The asset in the **bid book** is **USDC**.
- The asset in the **ask book** is **ETH**.

### **Subgraph Endpoint**

- **Base**: https://api.goldsky.com/api/public/project_clsljw95chutg01w45cio46j0/subgraphs/v2-core-subgraph-berachain-bartio/v1.8.1/gn


### **Deployed Contracts**
- **[Controller](https://github.com/clober-dex/v2-periphery/blob/master/src/Controller.sol)**: `0xce3F3C90970C08Fe451998441b30879560AA6757`
- **[BookManager](https://github.com/clober-dex/v2-core/blob/master/src/BookManager.sol)**: `0x874b1B795993653fbFC3f1c1fc0469214cC9F4A5`
- **[BookViewer](https://github.com/clober-dex/v2-periphery/blob/master/src/BookViewer.sol)**: `0xb735FdD82497Dd9AbfEEAdc659b960473BF896E0`