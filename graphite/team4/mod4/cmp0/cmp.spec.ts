
import { Cmp6440Component } from './cmp';
describe('Cmp6440Component', () => {
  it('should add', () => {
    expect(new Cmp6440Component().add6440(1)).toBe(6441);
  });
});