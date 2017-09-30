
import { Cmp6357Component } from './cmp';
describe('Cmp6357Component', () => {
  it('should add', () => {
    expect(new Cmp6357Component().add6357(1)).toBe(6358);
  });
});