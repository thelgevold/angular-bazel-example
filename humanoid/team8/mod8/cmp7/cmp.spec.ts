
import { Cmp7887Component } from './cmp';
describe('Cmp7887Component', () => {
  it('should add', () => {
    expect(new Cmp7887Component().add7887(1)).toBe(7888);
  });
});