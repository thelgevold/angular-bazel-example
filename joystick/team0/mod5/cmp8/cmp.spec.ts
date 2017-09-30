
import { Cmp9058Component } from './cmp';
describe('Cmp9058Component', () => {
  it('should add', () => {
    expect(new Cmp9058Component().add9058(1)).toBe(9059);
  });
});