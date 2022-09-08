import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex1": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "paddingTop": "7px",
        "paddingBottom": "7px",
        "backgroundColor": "#F9F3F1",
        "height": ""
      },
      "callbacks": {}
    },
    "TextBox1": {
      "styles": {
        "fontFamily": "Space Grotesk",
        "fontSize": "48px",
        "fontWeight": 500,
        "backgroundColor": "",
        "backgroundClip": "padding-box",
        "WebkitBackgroundClip": "padding-box",
        "color": ""
      },
      "custom": {
        "text": "Add Custom Background"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex2": {
      "styles": {
        "display": "flex",
        "alignItems": "stretch"
      },
      "callbacks": {}
    },
    "Flex3": {
      "styles": {
        "display": "flex",
        "flexGrow": 1,
        "alignItems": "center",
        "justifyContent": "center",
        "width": "",
        "height": "",
        "minWidth": "",
        "minHeight": "100%",
        "rowGap": "",
        "marginRight": ""
      },
      "callbacks": {}
    },
    "Flex4": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "15px",
        "borderRadius": "",
        "borderStyle": "solid",
        "borderColor": "#E5E7EB",
        "fontFamily": "Space Grotesk",
        "maxWidth": "30%"
      },
      "callbacks": {}
    },
    "Flex6": {
      "styles": {
        "display": "flex",
        "paddingLeft": "30px",
        "paddingRight": "30px",
        "paddingTop": "20px",
        "columnGap": "20px",
        "justifyContent": "space-between",
        "paddingBottom": "20px",
        "borderStyle": "solid",
        "borderColor": "#E5E7EB",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Background": {
      "styles": {
        "display": "none",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "paddingLeft": "30px",
        "paddingRight": "30px",
        "rowGap": "20px",
        "borderStyle": "none",
        "paddingBottom": "20px",
        "borderColor": "#aeadad"
      },
      "callbacks": {}
    },
    "Image2": {
      "styles": {
        "width": "",
        "height": "",
        "maxWidth": "90%",
        "maxHeight": "",
        "backgroundClip": "border-box",
        "WebkitBackgroundClip": "border-box",
        "backgroundOrigin": "border-box",
        "backgroundAttachment": "scroll",
        "boxSizing": "border-box",
        "overflow": "visible",
        "borderRadius": "10px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/istockphoto-1313110704-612x612.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex10": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "alignItems": "center",
        "rowGap": "25px"
      },
      "callbacks": {}
    },
    "TextBox4": {
      "styles": {
        "alignSelf": "flex-start",
        "paddingLeft": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Examples"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex11": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginLeft": "0px",
        "marginBottom": "-1px",
        "alignItems": "flex-start",
        "rowGap": "15px"
      },
      "callbacks": {}
    },
    "Flex15": {
      "styles": {
        "display": "flex",
        "width": "",
        "columnGap": "15px",
        "maxWidth": "90%"
      },
      "callbacks": {}
    },
    "Image3": {
      "styles": {
        "width": "110px",
        "height": "110px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/zach-vessels-zlYUCmArB38-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "styles": {
        "width": "110px",
        "height": "110px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/william-daigneault-olVJDJYKPSI-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "styles": {
        "width": "110px",
        "height": "110px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/michael-cummins-CZ6KeWtaluM-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "styles": {
        "width": "110px",
        "height": "110px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/ali-u4Jb7TrSgPI-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex16": {
      "styles": {
        "display": "flex",
        "width": "",
        "columnGap": "15px",
        "maxWidth": "90%"
      },
      "callbacks": {}
    },
    "Div1": {
      "styles": {
        "visibility": "visible",
        "display": "none"
      },
      "callbacks": {}
    },
    "Image10": {
      "styles": {
        "width": "250px",
        "height": "250px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/new2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button2": {
      "styles": {
        "color": "#000000",
        "backgroundColor": "#ffffff",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "5px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#313131",
        "cursor": "pointer",
        "userSelect": "none"
      },
      "custom": {
        "text": "Image"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button3": {
      "styles": {
        "color": "#969696",
        "backgroundColor": "#ffffff",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "5px",
        "outline": "none",
        "fontWeight": 400,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#313131",
        "cursor": "pointer",
        "userSelect": "none"
      },
      "custom": {
        "text": "Background"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex20": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Image12": {
      "styles": {
        "width": "250px",
        "height": "250px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex21": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": ""
      },
      "callbacks": {}
    },
    "Image13": {
      "styles": {
        "width": "110px",
        "height": "110px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/ian-dooley-d1UPkiFd04A-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "styles": {
        "width": "110px",
        "height": "110px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "styles": {
        "width": "110px",
        "height": "110px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "styles": {
        "width": "110px",
        "height": "110px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/aiony-haust-3TLl_97HNJo-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex22": {
      "styles": {
        "display": "flex",
        "width": "",
        "columnGap": "15px",
        "maxWidth": "90%"
      },
      "callbacks": {}
    },
    "Flex23": {
      "styles": {
        "display": "flex",
        "width": "",
        "columnGap": "15px",
        "maxWidth": "90%"
      },
      "callbacks": {}
    },
    "Image17": {
      "styles": {
        "width": "250px",
        "height": "250px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/istockphoto-1313110704-612x612.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image18": {
      "styles": {
        "width": "250px",
        "height": "250px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/new2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex24": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginLeft": "0px",
        "marginBottom": "-1px",
        "alignItems": "flex-start",
        "rowGap": "15px"
      },
      "callbacks": {}
    },
    "TextBox5": {
      "styles": {
        "alignSelf": "flex-start",
        "paddingLeft": "",
        "marginLeft": ""
      },
      "custom": {
        "text": "Examples"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex25": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Div4": {
      "styles": {
        "visibility": "visible",
        "display": "none"
      },
      "callbacks": {}
    },
    "Flex26": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "alignItems": "center",
        "rowGap": "25px"
      },
      "callbacks": {}
    },
    "Image": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "paddingLeft": "30px",
        "paddingRight": "30px",
        "rowGap": "20px",
        "borderStyle": "none",
        "paddingBottom": "20px",
        "borderColor": "#aeadad"
      },
      "callbacks": {}
    },
    "Image19": {
      "styles": {
        "width": "110px",
        "height": "110px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/ian-dooley-d1UPkiFd04A-unsplash%20(1).jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "styles": {
        "width": "110px",
        "height": "110px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/michael-dam-mEZ3PoFGs_k-unsplash%20(1).jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image21": {
      "styles": {
        "width": "110px",
        "height": "110px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "styles": {
        "width": "110px",
        "height": "110px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/aiony-haust-3TLl_97HNJo-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex28": {
      "styles": {
        "display": "flex",
        "width": "",
        "columnGap": "15px",
        "maxWidth": "90%"
      },
      "callbacks": {}
    },
    "Flex29": {
      "styles": {
        "display": "flex",
        "width": "",
        "columnGap": "15px",
        "maxWidth": "90%"
      },
      "callbacks": {}
    },
    "Image23": {
      "styles": {
        "width": "250px",
        "height": "250px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/new2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "styles": {
        "width": "250px",
        "height": "250px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/new2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex30": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "marginLeft": "0px",
        "marginBottom": "-1px",
        "alignItems": "center",
        "rowGap": "15px"
      },
      "callbacks": {}
    },
    "TextBox6": {
      "styles": {
        "alignSelf": "flex-start",
        "paddingLeft": "",
        "marginLeft": "50px"
      },
      "custom": {
        "text": "Examples"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload1": {
      "styles": {
        "alignItems": "center",
        "color": "#000000",
        "backgroundColor": "",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "columnGap": "12px",
        "maxWidth": "230px"
      },
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload background",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Upload2": {
      "styles": {
        "alignItems": "center",
        "color": "#000000",
        "backgroundColor": "",
        "paddingTop": "8px",
        "paddingLeft": "15px",
        "paddingBottom": "8px",
        "paddingRight": "15px",
        "fontSize": "16px",
        "borderRadius": "2px",
        "outline": "none",
        "fontWeight": 400,
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "columnGap": "12px",
        "maxWidth": "230px"
      },
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Upload image",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Flex34": {
      "styles": {
        "display": "flex",
        "alignSelf": "flex-start",
        "columnGap": "8px"
      },
      "callbacks": {}
    },
    "Flex35": {
      "styles": {
        "display": "flex",
        "alignSelf": "flex-start",
        "columnGap": "8px"
      },
      "callbacks": {}
    },
    "Image25": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex36": {
      "styles": {
        "display": "flex",
        "borderColor": "#1F2937",
        "borderStyle": "solid",
        "paddingLeft": "10px"
      },
      "callbacks": {}
    },
    "Image27": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector%20(1).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex37": {
      "styles": {
        "display": "flex",
        "paddingLeft": "10px",
        "borderColor": "#1F2937",
        "borderStyle": "solid"
      },
      "callbacks": {}
    },
    "Image28": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector%20(1).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

const breakpointProps = {
  ...{
  "Home": {}
}};

function getViewportDimension() {
  const width = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const height = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return { width, height };
}

function getEffectiveBreakpointWidths(pageName, windowWidth) {
  if (breakpointProps[pageName] === undefined) {
    return [];
  }
  const widths = Object.keys(breakpointProps[pageName]);
  return widths
    .filter((curr) => {
      return parseInt(curr) >= windowWidth;
    })
    .sort((a, b) => {
      return parseInt(b) - parseInt(a);
    });
}

/**
 *
 * effective props is combination of
 */
function getEffectivePropsForPage(pageName) {
  const { width } = getViewportDimension();
  // effectiveProps initially has local changes
  let effectiveProps = JSON.parse(
    JSON.stringify(useStore.getState()[pageName])
  );
  const effectiveWidths = getEffectiveBreakpointWidths(pageName, width);
  effectiveWidths.forEach((effectiveWidth) => {
    const compAliases = Object.keys(breakpointProps[pageName][effectiveWidth]);
    compAliases.forEach((compAlias) => {
      const propNames = Object.keys(
        breakpointProps[pageName][effectiveWidth][compAlias]
      );
      propNames.forEach((propName) => {
        effectiveProps[compAlias][propName] = {
          ...useStore.getState()[pageName][compAlias][propName],
          ...breakpointProps[pageName][effectiveWidth][compAlias][propName],
        };
      });
    });
  });
  return effectiveProps;
}

export function setEffectivePropsForPage(pageName) {
  const effectiveProps = getEffectivePropsForPage(pageName);
  useStore.getState().setPage(pageName, effectiveProps);
}

useStore.setState(desktopModeProps);

export default useStore;
