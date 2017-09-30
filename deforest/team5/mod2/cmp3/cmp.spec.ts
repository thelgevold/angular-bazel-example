
import { Cmp3523Component } from './cmp';
describe('Cmp3523Component', () => {
  it('should add', () => {
    expect(new Cmp3523Component().add3523(1)).toBe(3524);
  });
});