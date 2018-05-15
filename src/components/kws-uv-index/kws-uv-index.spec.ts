import { TestWindow } from '@stencil/core/testing';
import { KwsUVIndex } from './kws-uv-index';

describe('kws-uv-index', () => {
  it('should build', () => {
    expect(new KwsUVIndex()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLKwsUvIndexElement;
    let window: TestWindow;
    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [KwsUVIndex],
        html: '<kws-uv-index></kws-uv-index>'
      });
    });

    it('renders without parameters', () => {
      expect(element.textContent.trim()).toEqual('');
    });

    it('displays the UV Index with a single sigfig', async () => {
      element.uvIndex = 4.235;
      await window.flush();
      let el = element.getElementsByClassName('value');
      expect(el[0].textContent.trim()).toEqual('4.2');
    });

    it('displays UV Index of zero properly', async () => {
      element.uvIndex = 0;
      await window.flush();
      let el = element.getElementsByClassName('value');
      expect(el[0].textContent.trim()).toEqual('0.0');
    });

    describe('description', () => {
      it('is low for zero', async () => {
        element.uvIndex = 0;
        await window.flush();
        let el = element.getElementsByClassName('description');
        expect(el[0].textContent.trim()).toEqual('Low');
      });

      it('is low for 2.9', async () => {
        element.uvIndex = 2.9;
        await window.flush();
        let el = element.getElementsByClassName('description');
        expect(el[0].textContent.trim()).toEqual('Low');
      });

      it('is moderate for 3', async () => {
        element.uvIndex = 3;
        await window.flush();
        let el = element.getElementsByClassName('description');
        expect(el[0].textContent.trim()).toEqual('Moderate');
      });

      it('is moderate for 5.9', async () => {
        element.uvIndex = 5.9;
        await window.flush();
        let el = element.getElementsByClassName('description');
        expect(el[0].textContent.trim()).toEqual('Moderate');
      });

      it('is high for 6', async () => {
        element.uvIndex = 6;
        await window.flush();
        let el = element.getElementsByClassName('description');
        expect(el[0].textContent.trim()).toEqual('High');
      });

      it('is high for 7.9', async () => {
        element.uvIndex = 7.9;
        await window.flush();
        let el = element.getElementsByClassName('description');
        expect(el[0].textContent.trim()).toEqual('High');
      });

      it('is very high for 8', async () => {
        element.uvIndex = 8;
        await window.flush();
        let el = element.getElementsByClassName('description');
        expect(el[0].textContent.trim()).toEqual('Very High');
      });

      it('is very high for 10.9', async () => {
        element.uvIndex = 10.9;
        await window.flush();
        let el = element.getElementsByClassName('description');
        expect(el[0].textContent.trim()).toEqual('Very High');
      });

      it('is extreme for 11', async () => {
        element.uvIndex = 11;
        await window.flush();
        let el = element.getElementsByClassName('description');
        expect(el[0].textContent.trim()).toEqual('Extreme');
      });

      it('is extreme for 15', async () => {
        element.uvIndex = 15;
        await window.flush();
        let el = element.getElementsByClassName('description');
        expect(el[0].textContent.trim()).toEqual('Extreme');
      });
    });

    describe('class', () => {
      it('is low-risk for 0', async () => {
        element.uvIndex = 0;
        await window.flush();
        let els = element.getElementsByTagName('div');
        expect((els[0].className)).toEqual('low-risk');
      });

      it('is low-risk for 2.9', async () => {
        element.uvIndex = 2.9;
        await window.flush();
        let els = element.getElementsByTagName('div');
        expect((els[0].className)).toEqual('low-risk');
      });

      it('is moderate-risk for 3', async () => {
        element.uvIndex = 3;
        await window.flush();
        let els = element.getElementsByTagName('div');
        expect((els[0].className)).toEqual('moderate-risk');
      });

      it('is moderate-risk for 5.9', async () => {
        element.uvIndex = 5.9;
        await window.flush();
        let els = element.getElementsByTagName('div');
        expect((els[0].className)).toEqual('moderate-risk');
      });

      it('is high-risk for 6', async () => {
        element.uvIndex = 6;
        await window.flush();
        let els = element.getElementsByTagName('div');
        expect((els[0].className)).toEqual('high-risk');
      });

      it('is high-risk for 7.9', async () => {
        element.uvIndex = 7.9;
        await window.flush();
        let els = element.getElementsByTagName('div');
        expect((els[0].className)).toEqual('high-risk');
      });

      it('is very-high-risk for 8', async () => {
        element.uvIndex = 8;
        await window.flush();
        let els = element.getElementsByTagName('div');
        expect((els[0].className)).toEqual('very-high-risk');
      });


      it('is very-high-risk for 10.9', async () => {
        element.uvIndex = 10.9;
        await window.flush();
        let els = element.getElementsByTagName('div');
        expect((els[0].className)).toEqual('very-high-risk');
      });

      it('is extreme-risk for 11', async () => {
        element.uvIndex = 11;
        await window.flush();
        let els = element.getElementsByTagName('div');
        expect((els[0].className)).toEqual('extreme-risk');
      });

      it('is extreme-risk for 17', async () => {
        element.uvIndex = 17;
        await window.flush();
        let els = element.getElementsByTagName('div');
        expect((els[0].className)).toEqual('extreme-risk');
      });
    });
  });
});
