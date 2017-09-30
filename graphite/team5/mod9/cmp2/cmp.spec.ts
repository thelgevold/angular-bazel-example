
import { Cmp6592Component } from './cmp';
describe('Cmp6592Component', () => {
  it('should add', () => {
    expect(new Cmp6592Component().add6592(1)).toBe(6593);
  });
});