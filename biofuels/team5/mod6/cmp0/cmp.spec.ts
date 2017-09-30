
import { Cmp1560Component } from './cmp';
describe('Cmp1560Component', () => {
  it('should add', () => {
    expect(new Cmp1560Component().add1560(1)).toBe(1561);
  });
});