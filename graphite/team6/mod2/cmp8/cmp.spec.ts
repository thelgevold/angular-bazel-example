
import { Cmp6628Component } from './cmp';
describe('Cmp6628Component', () => {
  it('should add', () => {
    expect(new Cmp6628Component().add6628(1)).toBe(6629);
  });
});