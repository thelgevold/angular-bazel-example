
import { Cmp2560Component } from './cmp';
describe('Cmp2560Component', () => {
  it('should add', () => {
    expect(new Cmp2560Component().add2560(1)).toBe(2561);
  });
});