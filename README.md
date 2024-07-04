# Getting Started


## Step 0: Install dependencies

First, you will need to install all project dependencies.

```bash
yarn install
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```
## Step 2: Start your Application
>**Note**: Aplicatia a fost testata doar pe simulator iOS, pe Android nu va merge (nu am mai investit timp in configurat librarii).

### For iOS

```bash
yarn ios
```
This is one way to run your app — you can also run it directly from Xcode respectively.

# Improvements

In production probably it is not a good idea to send all cuisines in a single request, with GraphQL API it is easy to fetch & cache only what we need.
