
import { Cmp6543Component } from './cmp';
describe('Cmp6543Component', () => {
  it('should add', () => {
    expect(new Cmp6543Component().add6543(1)).toBe(6544);
  });
});