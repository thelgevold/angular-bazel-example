
import { Cmp3560Component } from './cmp';
describe('Cmp3560Component', () => {
  it('should add', () => {
    expect(new Cmp3560Component().add3560(1)).toBe(3561);
  });
});