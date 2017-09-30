
import { Cmp7560Component } from './cmp';
describe('Cmp7560Component', () => {
  it('should add', () => {
    expect(new Cmp7560Component().add7560(1)).toBe(7561);
  });
});