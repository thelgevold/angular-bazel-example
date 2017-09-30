
import { Cmp6026Component } from './cmp';
describe('Cmp6026Component', () => {
  it('should add', () => {
    expect(new Cmp6026Component().add6026(1)).toBe(6027);
  });
});