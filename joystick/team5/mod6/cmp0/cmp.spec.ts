
import { Cmp9560Component } from './cmp';
describe('Cmp9560Component', () => {
  it('should add', () => {
    expect(new Cmp9560Component().add9560(1)).toBe(9561);
  });
});