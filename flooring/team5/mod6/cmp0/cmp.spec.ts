
import { Cmp5560Component } from './cmp';
describe('Cmp5560Component', () => {
  it('should add', () => {
    expect(new Cmp5560Component().add5560(1)).toBe(5561);
  });
});