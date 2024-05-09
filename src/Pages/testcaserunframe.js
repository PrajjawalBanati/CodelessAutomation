import React, { useState, useEffect } from 'react';
import puppeteer from 'puppeteer';

const RecorderReplayer = ({ recordedSteps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const replayStep = async (page) => {
    const step = recordedSteps[currentStep];
    if (!step) return;

    const { type, selectors, value } = step;

    switch (type) {
      case 'click':
        await clickElement(page, selectors);
        break;
      case 'change':
        await changeElement(page, selectors, value);
        break;
      default:
        break;
    }

    setCurrentStep(currentStep + 1);
  };

  const startReplay = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://172.16.61.168/commandcenter/#/office365/appDetails/1341/overview?workload=Teams');

    for (let i = 0; i < recordedSteps.length; i++) {
      await replayStep(page);
    }

    await browser.close();
  };

  const clickElement = async (page, selectors) => {
    await page.waitForSelector(selectors[0]); // Assuming the first selector is the correct one
    await page.click(selectors[0]);
  };

  const changeElement = async (page, selectors, value) => {
    await page.waitForSelector(selectors[0]); // Assuming the first selector is the correct one
    await page.type(selectors[0], value);
  };

  return (
    <div>
      <Button onClick={startReplay}>Start Replay</Button>
    </div>
  );
};

export default RecorderReplayer;
