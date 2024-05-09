import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Container,Button, Stack, Typography, StepContent, StepIcon, TextField } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';



const stepLabel=(step)=>{
    var steplabel ;
    switch(step.type){
        case 'navigate':
           
            steplabel = <Stack> 
                
            <b>Navigate</b>
            
            <Typography>
                <b>{step.url}</b>
            </Typography>
            </Stack>
            break;
        case 'click':
            let cardstring = "analytics-card-id";
            steplabel = <Stack direction="row" spacing={1}>
                <Typography variant='h9'>
            <b>Click on</b>
            </Typography>
            <Button variant="contained" size="small" sx={{ textTransform: "none", backgroundColor: "#5d177a" ,fontSize: "12px" ,padding:'1'}}>
            {step.selectors.length > 2? step.selectors[2][0].substring(5):
            step.selectors[0][0].startsWith('#')?step.selectors[0][0].substring(1):
            step.selectors[1][0].includes(cardstring)?step.selectors[1][0].substring(step.selectors[1][0].indexOf(cardstring)+cardstring.length+1,step.selectors[1][0].indexOf("]")-1):"Element"}
            </Button>

            <Typography variant='h9'>
                <b>{step.selectors.length>2?"button":step.selectors[1][0].includes(cardstring)?"Card":undefined}
                </b>
            </Typography>
                </Stack>
            break;
        case 'change':
            
            steplabel = <Stack>
            <Typography variant='h9'>
            Input entered to {step.selectors[0][0].substring(0)}
            </Typography>
            <TextField value={step.value}  variant="standard"/>
            </Stack>

            break
        default:

    }
    
    return(
    steplabel
)
};

export default function Steeper({orientation}) {
    const steps =  [
        {
            "type": "navigate",
            "url": "http://172.16.61.168/commandcenter/#/office365/apps",
            "assertedEvents": [
                {
                    "type": "navigation",
                    "url": "http://172.16.61.168/commandcenter/#/office365/apps",
                    "title": "Commvault Command Center"
                }
            ]
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "div.grid-ops > div:nth-of-type(1) div"
                ],
                [
                    "xpath///*[@id=\"analytics-add-office365-app\"]/div"
                ],
                [
                    "text/Add Office 365"
                ]
            ],
            "offsetY": 8.791656494140625,
            "offsetX": 58.010406494140625
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "div:nth-of-type(4) label > div"
                ],
                [
                    "xpath///*[@id=\"analytics-card-id-TEAMS\"]/label/div"
                ]
            ],
            "offsetY": 174.75,
            "offsetX": 48.33331298828125
        },
        {
            "type": "change",
            "value": "d",
            "selectors": [
                [
                    "#appNameField"
                ],
                [
                    "xpath///*[@id=\"appNameField\"]"
                ]
            ],
            "target": "main"
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "#appNameField"
                ],
                [
                    "xpath///*[@id=\"appNameField\"]"
                ]
            ],
            "offsetY": 5.08331298828125,
            "offsetX": 176.33331298828125
        },
        {
            "type": "change",
            "value": "ddddddd",
            "selectors": [
                [
                    "#appNameField"
                ],
                [
                    "xpath///*[@id=\"appNameField\"]"
                ]
            ],
            "target": "main"
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "div.wizard-footer > div div"
                ],
                [
                    "xpath///*[@id=\"Next\"]/div"
                ],
                [
                    "text/Next"
                ]
            ],
            "offsetY": 12.291656494140625,
            "offsetX": 23.375
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "#searchPlanName"
                ],
                [
                    "xpath///*[@id=\"searchPlanName\"]"
                ]
            ],
            "offsetY": 5.4270782470703125,
            "offsetX": 190.33331298828125
        },
        {
            "type": "change",
            "value": "arjun",
            "selectors": [
                [
                    "#searchPlanName"
                ],
                [
                    "xpath///*[@id=\"searchPlanName\"]"
                ]
            ],
            "target": "main"
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "div.App > div li:nth-of-type(1) > span"
                ],
                [
                    "xpath///*[@id=\"planCard_21\"]/ul/li[1]/span"
                ]
            ],
            "offsetY": 7.30206298828125,
            "offsetX": 72.10415649414062
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "div.App > div span:nth-of-type(2) div"
                ],
                [
                    "xpath///*[@id=\"Next\"]/div"
                ],
                [
                    "text/Next"
                ]
            ],
            "offsetY": 13.30206298828125,
            "offsetX": 10.375
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "div.App > div span:nth-of-type(2) div"
                ],
                [
                    "xpath///*[@id=\"Next\"]/div"
                ],
                [
                    "text/Next"
                ]
            ],
            "offsetY": 12.42706298828125,
            "offsetX": 10.375
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "div.wizard-step-body > div.sc-hHLeRK > div > div > div:nth-of-type(2) label > div > div"
                ],
                [
                    "xpath///*[@id=\"analytics-card-id-customConfig\"]/label/div/div"
                ]
            ],
            "offsetY": 76.11457824707031,
            "offsetX": 258.6666564941406
        },
        {
            "type": "change",
            "value": "s",
            "selectors": [
                [
                    "#addAzureApplicationId"
                ],
                [
                    "xpath///*[@id=\"addAzureApplicationId\"]"
                ]
            ],
            "target": "main"
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "#addAzureApplicationId"
                ],
                [
                    "xpath///*[@id=\"addAzureApplicationId\"]"
                ]
            ],
            "offsetY": 12.916656494140625,
            "offsetX": 126.33331298828125
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "#addAzureApplicationSecretKey"
                ],
                [
                    "xpath///*[@id=\"addAzureApplicationSecretKey\"]"
                ]
            ],
            "offsetY": 4.791656494140625,
            "offsetX": 79.33331298828125
        },
        {
            "type": "change",
            "value": "s",
            "selectors": [
                [
                    "#addAzureApplicationSecretKey"
                ],
                [
                    "xpath///*[@id=\"addAzureApplicationSecretKey\"]"
                ]
            ],
            "target": "main"
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "#addAzureDirectoryId"
                ],
                [
                    "xpath///*[@id=\"addAzureDirectoryId\"]"
                ]
            ],
            "offsetY": 8.33331298828125,
            "offsetX": 55.33331298828125
        },
        {
            "type": "change",
            "value": "s",
            "selectors": [
                [
                    "#addAzureDirectoryId"
                ],
                [
                    "xpath///*[@id=\"addAzureDirectoryId\"]"
                ]
            ],
            "target": "main"
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "#permissionsConfirmation"
                ],
                [
                    "xpath///*[@id=\"permissionsConfirmation\"]"
                ]
            ],
            "offsetY": 19.541656494140625,
            "offsetX": 26.33331298828125
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "#redirectUriSetConfirmation"
                ],
                [
                    "xpath///*[@id=\"redirectUriSetConfirmation\"]"
                ]
            ],
            "offsetY": 15.041656494140625,
            "offsetX": 17.33331298828125
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "div.wizard-footer span:nth-of-type(2) div"
                ],
                [
                    "xpath///*[@id=\"Next\"]/div"
                ],
                [
                    "text/Next"
                ]
            ],
            "offsetY": 3.875,
            "offsetX": 13.375
        },
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "div.wizard-footer > div div"
                ],
                [
                    "xpath///*[@id=\"Submit\"]/div"
                ],
                [
                    "text/Close"
                ]
            ],
            "offsetY": 5.08331298828125,
            "offsetX": 27.6041259765625
        }
    ]

  return (
    <Box sx={{ maxWidth :400, padding:"15px"}}>
      <Stepper  activeStep={-1} orientation='vertical'>
        {steps.map((step) => (
          <Step>
            <StepIcon>
                <AdbIcon/>
            </StepIcon>
            <StepLabel >
            {stepLabel(step)}
                
            </StepLabel>
            {/* <StepContent>
            </StepContent> */}
          </Step>
        ))}
      </Stepper>
      </Box>
  );
}