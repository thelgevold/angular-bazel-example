
import { Cmp6274Component } from './cmp';
describe('Cmp6274Component', () => {
  it('should add', () => {
    expect(new Cmp6274Component().add6274(1)).toBe(6275);
  });
});