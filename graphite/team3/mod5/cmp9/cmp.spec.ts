
import { Cmp6359Component } from './cmp';
describe('Cmp6359Component', () => {
  it('should add', () => {
    expect(new Cmp6359Component().add6359(1)).toBe(6360);
  });
});