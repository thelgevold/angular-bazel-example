
import { Cmp6738Component } from './cmp';
describe('Cmp6738Component', () => {
  it('should add', () => {
    expect(new Cmp6738Component().add6738(1)).toBe(6739);
  });
});