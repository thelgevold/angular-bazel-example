
import { Cmp6813Component } from './cmp';
describe('Cmp6813Component', () => {
  it('should add', () => {
    expect(new Cmp6813Component().add6813(1)).toBe(6814);
  });
});