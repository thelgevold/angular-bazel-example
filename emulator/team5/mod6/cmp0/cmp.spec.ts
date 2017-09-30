
import { Cmp4560Component } from './cmp';
describe('Cmp4560Component', () => {
  it('should add', () => {
    expect(new Cmp4560Component().add4560(1)).toBe(4561);
  });
});