
import { Cmp3072Component } from './cmp';
describe('Cmp3072Component', () => {
  it('should add', () => {
    expect(new Cmp3072Component().add3072(1)).toBe(3073);
  });
});