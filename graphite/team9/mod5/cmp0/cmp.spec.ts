
import { Cmp6950Component } from './cmp';
describe('Cmp6950Component', () => {
  it('should add', () => {
    expect(new Cmp6950Component().add6950(1)).toBe(6951);
  });
});