
import { Cmp6101Component } from './cmp';
describe('Cmp6101Component', () => {
  it('should add', () => {
    expect(new Cmp6101Component().add6101(1)).toBe(6102);
  });
});