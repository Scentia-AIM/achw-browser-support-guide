export const guides = {
  cache: {
    chrome: {
      title: "Google Chrome",
      subTitle: "Clearing your browser cache",
      steps: [
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "One",
            title: "Load up your browser",
            content:
              "Open Google Chrome on your device so you can begin the process of clearing your cache.",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Two",
            title: "Locate the 3 dots",
            content:
              "In the top right-hand corner of the browser, find the three dots menu. This is where you can access Chrome’s settings and options.",
            imageURL: "/cache/chrome/chrome-clear-cache-step-1.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Three",
            title: "Select Delete Browsing Data",
            content:
              "Click on the three dots, then find and select “Delete browsing data” from the menu to open the clear data settings.",
            imageURL: "/cache/chrome/chrome-clear-cache-step-2.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Four",
            title: "Choose your chosen timeframe",
            content:
              "Select the time range you would like to clear. For best results, choose “All time” to remove all cached files.",
            imageURL: "/cache/chrome/chrome-clear-cache-step-3.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Five",
            title: "Select 'Cached images & files'",
            content:
              "Make sure the option for “Cached images & files” is ticked. This ensures only temporary website data is removed.",
            imageURL: "/cache/chrome/chrome-clear-cache-step-4.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Six",
            title: "Click Delete Data",
            content:
              "Click the “Delete data” button to clear the selected cache from your browser.",
            imageURL: "/cache/chrome/chrome-clear-cache-step-5.png",
          },
        },
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "Seven",
            title: "Reload your webpage!",
            content:
              "Refresh or reload the webpage you were using to make sure it loads properly with the updated data.",
          },
        },
      ],
    },
    edge: {
      title: "Microsoft Edge",
      subTitle: "Clearing your browser cache",
      steps: [
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "One",
            title: "Load up your browser",
            content:
              "Open Microsoft Edge on your device so you can begin clearing your cache.",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Two",
            title: "Locate the 3 dots",
            content:
              "In the top right-hand corner of the browser, find the three dots menu. This is where you can access Edge’s settings and options.",
            imageURL: "/cache/edge/edge-cache-step-1.png",
          },
        },
        {
          type: "text",
          props: {
            colorChoice: "secondary",
            stepNumber: "Three",
            title: "Select 'Delete Browsing Data'",
            content:
              "Click on the three dots, then select “Delete browsing data” to open the settings for clearing your data.",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Four",
            title: "Select time range",
            content:
              "Choose the time range you would like to clear. For best results, select “All time” to remove all cached files.",
            imageURL: "/cache/edge/edge-cache-step-2.jpeg",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Five",
            title: "Check the 'Cached images & files' box",
            content:
              "Make sure the “Cached images & files” option is ticked so only temporary website data is removed.",
            imageURL: "/cache/edge/edge-cache-step-3.jpeg",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Six",
            title: "Click 'Clear now'",
            content:
              "Click the “Clear now” button to remove the selected cache from your browser.",
            imageURL: "/cache/edge/edge-cache-step-4.jpeg",
          },
        },
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "Seven",
            title: "Reload your webpage!",
            content:
              "Refresh or reload your webpage to make sure it loads properly with the updated data.",
          },
        },
      ],
    },
    safari: {
      title: "Safari",
      subTitle: "Clearing your browser cache",
      steps: [
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "One",
            title: "Load your web browser",
            content:
              "Open Safari on your device so you can begin clearing your cache.",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Two",
            title: "Find settings'",
            content:
              "Click on “Safari” in the top menu bar, then select “Settings” to open the browser options.",
            imageURL: "/cache/safari/safari-cache-step-1.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Three",
            title: "Go to the Privacy tab",
            content:
              "In the Settings window, click on the “Privacy” tab to view options related to stored website data.",
            imageURL: "/cache/safari/safari-cache-step-2.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Four",
            title: "Select 'Manage website data'",
            content:
              "Click on “Manage Website Data” to see a list of stored data from websites.",
            imageURL: "/cache/safari/safari-cache-step-3.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Five",
            title: "Remove all cache",
            content:
              "Click “Remove All” to clear all cached data, then confirm when prompted.",
            imageURL: "/cache/safari/safari-cache-step-4.png",
          },
        },
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "Six",
            title: "Reload your webpage!",
            content:
              "Refresh or reload your webpage to make sure it loads properly with the updated data.",
          },
        },
      ],
    },
    firefox: {
      title: "Firefox",
      subTitle: "Clearing your browser cache",
      steps: [
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "One",
            title: "Load up your browser",
            content:
              "Open Firefox on your device so you can begin clearing your cache.",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Two",
            title: "Find the 3 lines menu",
            content:
              "In the top right-hand corner, locate the three lines menu. This is where you can access Firefox settings.",
            imageURL: "/cache/firefox/firefox-clear-cache-step-1.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Three",
            title: "Go to settings",
            content:
              "Click on the three lines, then select “Settings” to open the browser options.",
            imageURL: "/cache/firefox/firefox-clear-cache-step-2.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Four",
            title: "Find Privacy & Security tab",
            content:
              "In the Settings menu, select “Privacy & Security” to view options related to your browsing data.",
            imageURL: "/cache/firefox/firefox-clear-cache-step-3.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Five",
            title: "Select 'Clear browsing data'",
            content:
              "Scroll to the Cookies and Site Data section, then click “Clear Data” to open the clearing options.",
            imageURL: "/cache/firefox/firefox-clear-cache-step-4.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Six",
            title: "Check temporary files and pages",
            content:
              "Make sure “Temporary cached files and pages” is ticked so only the cache is removed.",
            imageURL: "/cache/firefox/firefox-clear-cache-step-5.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Seven",
            title: "Click clear button",
            content:
              "Click the “Clear” button to remove the selected cached data from your browser.",
            imageURL: "/cache/firefox/firefox-clear-cache-step-6.png",
          },
        },
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "Eight",
            title: "Reload your webpage!",
            content:
              "Refresh or reload your webpage to make sure it loads properly with the updated data.",
          },
        },
      ],
    },
  },
  popup: {
    chrome: {
      title: "Google Chrome",
      subTitle: "Enabling Browser Pop-ups",
      steps: [
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "One",
            title: "Load up your browser",
            content:
              "Open Google Chrome on your device so you can begin enabling pop-ups.",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Two",
            title: "Locate the 3 dots",
            content:
              "In the top right-hand corner of the browser, find the three dots menu. This is where you can access Chrome’s settings.",
            imageURL: "/pop-up/chrome/chrome-pop-up-step-1.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Three",
            title: "Select Settings",
            content:
              "Click on the three dots, then select “Settings” to open the browser options.",
            imageURL: "/pop-up/chrome/chrome-pop-up-step-2.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Four",
            title: "Select 'Privacy & Security",
            content:
              "In the Settings menu, click on “Privacy and security” to view your browser’s security and site options.",
            imageURL: "/pop-up/chrome/chrome-pop-up-step-3.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Five",
            title: "Select 'Site settings'",
            content:
              "Click on “Site settings” to manage permissions for what websites are allowed to do.",
            imageURL: "/pop-up/chrome/chrome-pop-up-step-4.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Six",
            title: "Select 'pop-ups and redirects'",
            content:
              "Scroll down and select “Pop-ups and redirects” to view and change pop-up settings.",
            imageURL: "/pop-up/chrome/chrome-pop-up-step-5.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Seven",
            title: "Enable site pop-ups",
            content:
              "Choose the option to allow pop-ups, or add the specific website to the allowed list.",
            imageURL: "/pop-up/chrome/chrome-pop-up-step-6.png",
          },
        },
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "Eight",
            title: "Reload your webpage!",
            content:
              "Refresh or reload your webpage so the new pop-up settings take effect.",
          },
        },
      ],
    },
    edge: {
      title: "Microsoft Edge",
      subTitle: "Enabling Browser Pop-ups",
      steps: [
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "One",
            title: "Load up your browser",
            content:
              "Open Microsoft Edge on your device so you can begin enabling pop-ups.",
          },
        },
        {
          type: "text",
          props: {
            colorChoice: "secondary",
            stepNumber: "Two",
            title: "Go to browser settings",
            content:
              "Click on the three dots in the top right-hand corner, then select “Settings” to open the browser options.",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Three",
            title: "Select 'Site Permissions'",
            content:
              "In the Settings menu, click on “Site permissions” to manage what websites are allowed to do.",
            imageURL: "/pop-up/edge/edge-popup-step-1.jpeg",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Four",
            title: "Select 'All Permissions'",
            content:
              "Select “All permissions” to view the full list of site settings available in Edge.",
            imageURL: "/pop-up/edge/edge-popup-step-2.jpeg",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Five",
            title: "Select 'Pop-ups and redirects'",
            content:
              "Find and click on “Pop-ups and redirects” to open the pop-up settings.",
            imageURL: "/pop-up/edge/edge-popup-step-3.jpeg",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Six",
            title: "Disable pop-ups ",
            content:
              "Turn off the pop-up blocker or add the website to the allowed list so pop-ups can appear.",
            imageURL: "/pop-up/edge/edge-popup-step-4.jpeg",
          },
        },
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "Eight",
            title: "Reload your webpage!",
            content:
              "Refresh or reload your webpage so the new pop-up settings take effect.",
          },
        },
      ],
    },
    safari: {
      title: "Safari",
      subTitle: "Enabling Browser Pop-ups",
      steps: [
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "One",
            title: "Load up your browser",
            content:
              "Open Safari on your device so you can begin enabling pop-ups.",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Two",
            title: "Load up browser settings",
            content:
              "Click on “Safari” in the top menu bar, then select “Settings” to open the browser options.",
            imageURL: "/pop-up/safari/safari-popup-step-1.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Three",
            title: "Locate to the websites tab",
            content:
              "In the Settings window, click on the “Websites” tab to manage website permissions.",
            imageURL: "/pop-up/safari/safari-popup-step-2.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Four",
            title: "Select the pop-ups option",
            content:
              "In the side menu, find and select “Pop-up Windows” to view pop-up settings.",
            imageURL: "/pop-up/safari/safari-popup-step-3.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Five",
            title: "Allow pop-ups",
            content:
              "Set the option to “Allow” for the website you are using, or allow pop-ups for all sites if needed.",
            imageURL: "/pop-up/safari/safari-popup-step-4.png",
          },
        },
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "Six",
            title: "Reload your webpage!",
            content:
              "Refresh or reload your webpage so the new pop-up settings take effect.",
          },
        },
      ],
    },
    firefox: {
      title: "Firefox",
      subTitle: "Enabling Browser Pop-ups",
      steps: [
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "One",
            title: "Load up your browser",
            content:
              "Open Firefox on your device so you can begin enabling pop-ups.",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Two",
            title: "Find the 3 lines menu",
            content:
              "In the top right-hand corner, locate the three lines menu. This is where you can access Firefox settings.",
            imageURL: "/pop-up/firefox/firefox-popup-step-1.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Three",
            title: "Load up browser settings",
            content:
              "Click on the three lines, then select “Settings” to open the browser options.",
            imageURL: "/pop-up/firefox/firefox-popup-step-2.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "left",
            stepNumber: "Four",
            title: "Find Privacy & Security tab",
            content:
              "In the Settings menu, select “Privacy & Security” to view your browser’s permissions and data settings.",
            imageURL: "/pop-up/firefox/firefox-popup-step-3.png",
          },
        },
        {
          type: "image",
          props: {
            colorChoice: "secondary",
            imagePosition: "right",
            stepNumber: "Five",
            title: "Find and uncheck 'Block popups'",
            content:
              "Scroll to the Permissions section and untick “Block pop-up windows” to allow pop-ups.",
            imageURL: "/pop-up/firefox/firefox-popup-step-4.png",
          },
        },
        {
          type: "text",
          props: {
            colorChoice: "primary",
            stepNumber: "Six",
            title: "Reload your webpage!",
            content:
              "Refresh or reload your webpage so the new pop-up settings take effect.",
          },
        },
      ],
    },
  },
};
